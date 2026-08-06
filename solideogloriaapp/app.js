// ============================================================
// SOLI DEO GLORIA — aplicação
// ============================================================
(function(){
  "use strict";

  // ---------- Persistência (localStorage) ----------
  const STORE = {
    theme: "sdg_theme",
    favorites: "sdg_favorites",
    checklist: "sdg_checklist",         // { "YYYY-MM-DD": { itemId: true } }
    challenges: "sdg_challenges_done",  // [principioId, ...]
    lastView: "sdg_last_view",
  };

  function load(key, fallback){
    try{
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    }catch(e){ return fallback; }
  }
  function save(key, value){
    try{ localStorage.setItem(key, JSON.stringify(value)); }catch(e){ /* silencioso */ }
  }

  let favorites = load(STORE.favorites, []);
  let checklistData = load(STORE.checklist, {});
  let challengesDone = load(STORE.challenges, []);

  // ---------- Utilitários de data ----------
  function pad(n){ return n<10 ? "0"+n : ""+n; }
  function toKey(date){ return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}`; }
  function todayKey(){ return toKey(new Date()); }
  function dayOfYear(date){
    const start = new Date(date.getFullYear(),0,0);
    const diff = date - start;
    return Math.floor(diff / 86400000);
  }

  // ---------- Estado global ----------
  let state = {
    view: load(STORE.lastView, "inicio"),
    searchQuery: "",
    activeTheme: "todos",       // filtro de tema em Princípios/Estudos
    checklistDate: new Date(),  // data em edição na view Checklist
    devoIndex: dayOfYear(new Date()) % PRINCIPIOS.length,
    calMonth: new Date().getMonth(),
    calYear: new Date().getFullYear(),
  };

  // ---------- Elementos ----------
  const $app = document.getElementById("view-root");
  const $sidebar = document.getElementById("sidebar");
  const $overlay = document.getElementById("overlay");
  const $toast = document.getElementById("toast");

  // ---------- Navegação ----------
  const NAV = [
    { id:"inicio",     label:"Início",       icon:"01" },
    { id:"principios", label:"Princípios",   icon:"02" },
    { id:"estudos",    label:"Estudos",      icon:"03" },
    { id:"devocional", label:"Devocional",   icon:"04" },
    { id:"desafios",   label:"Desafios",     icon:"05" },
    { id:"checklist",  label:"Checklist",    icon:"06" },
    { id:"progresso",  label:"Progresso",    icon:"07" },
    { id:"calendario", label:"Calendário",   icon:"08" },
    { id:"favoritos",  label:"Favoritos",    icon:"09" },
  ];

  function goTo(view){
    state.view = view;
    save(STORE.lastView, view);
    state.searchQuery = "";
    closeSidebar();
    render();
    window.scrollTo(0,0);
  }
  window.SDG_goTo = goTo;

  function toggleSidebar(){ $sidebar.classList.toggle("open"); $overlay.classList.toggle("show"); }
  function closeSidebar(){ $sidebar.classList.remove("open"); $overlay.classList.remove("show"); }
  window.SDG_toggleSidebar = toggleSidebar;
  $overlay.addEventListener("click", closeSidebar);

  function showToast(msg){
    $toast.textContent = msg;
    $toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(()=> $toast.classList.remove("show"), 2200);
  }

  // ---------- Tema claro/escuro ----------
  function applyTheme(theme){
    document.documentElement.setAttribute("data-theme", theme);
    save(STORE.theme, theme);
    renderSidebar();
  }
  function initTheme(){
    let theme = load(STORE.theme, null);
    if(!theme){
      theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    applyTheme(theme);
  }
  window.SDG_setTheme = applyTheme;

  // ---------- Favoritos ----------
  function isFav(id){ return favorites.includes(id); }
  function toggleFav(id){
    if(isFav(id)) favorites = favorites.filter(f=>f!==id);
    else favorites.push(id);
    save(STORE.favorites, favorites);
    showToast(isFav(id) ? "Adicionado aos favoritos" : "Removido dos favoritos");
    render();
  }
  window.SDG_toggleFav = toggleFav;

  // ---------- Desafios ----------
  function isChallengeDone(id){ return challengesDone.includes(id); }
  function toggleChallenge(id){
    if(isChallengeDone(id)) challengesDone = challengesDone.filter(f=>f!==id);
    else challengesDone.push(id);
    save(STORE.challenges, challengesDone);
    render();
  }
  window.SDG_toggleChallenge = toggleChallenge;

  // ---------- Checklist diário ----------
  function getChecklist(key){
    return checklistData[key] || {};
  }
  function toggleChecklistItem(dateKey, itemId){
    const day = checklistData[dateKey] ? {...checklistData[dateKey]} : {};
    day[itemId] = !day[itemId];
    checklistData = {...checklistData, [dateKey]: day};
    save(STORE.checklist, checklistData);
    render();
  }
  window.SDG_toggleChecklistItem = toggleChecklistItem;

  function checklistCompletion(dateKey){
    const day = getChecklist(dateKey);
    const done = CHECKLIST_ITENS.filter(i=>day[i.id]).length;
    return { done, total: CHECKLIST_ITENS.length, pct: Math.round((done/CHECKLIST_ITENS.length)*100) };
  }

  function shiftChecklistDate(delta){
    const d = new Date(state.checklistDate);
    d.setDate(d.getDate()+delta);
    state.checklistDate = d;
    render();
  }
  window.SDG_shiftChecklistDate = shiftChecklistDate;

  // ---------- Toggle expandir princípio ----------
  function toggleExpand(el){
    el.classList.toggle("expanded");
  }
  window.SDG_toggleExpand = toggleExpand;

  // ---------- Busca ----------
  function onSearch(value){
    state.searchQuery = value;
    renderList();
  }
  window.SDG_onSearch = onSearch;

  function setThemeFilter(id){
    state.activeTheme = id;
    render();
  }
  window.SDG_setThemeFilter = setThemeFilter;

  function matchesQuery(p, q){
    if(!q) return true;
    q = q.toLowerCase();
    return p.titulo.toLowerCase().includes(q) ||
           p.ref.toLowerCase().includes(q) ||
           p.texto.toLowerCase().includes(q) ||
           p.devocional.toLowerCase().includes(q);
  }

  function themeName(id){ return THEMES.find(t=>t.id===id)?.nome || id; }
  function themeSelo(id){ return THEMES.find(t=>t.id===id)?.selo || ""; }

  // ============================================================
  // RENDER — roteador de views
  // ============================================================
  function render(){
    renderSidebar();
    switch(state.view){
      case "inicio": return renderInicio();
      case "principios": return renderPrincipios();
      case "estudos": return renderEstudos();
      case "devocional": return renderDevocional();
      case "desafios": return renderDesafios();
      case "checklist": return renderChecklist();
      case "progresso": return renderProgresso();
      case "calendario": return renderCalendario();
      case "favoritos": return renderFavoritos();
      default: return renderInicio();
    }
  }

  function renderSidebar(){
    const theme = document.documentElement.getAttribute("data-theme") || "light";
    document.getElementById("nav-list").innerHTML = NAV.map(n => `
      <button class="nav-item ${state.view===n.id?'active':''}" onclick="SDG_goTo('${n.id}')">
        <span class="num">${n.icon}</span>${n.label}
      </button>
    `).join("");

    document.getElementById("theme-toggle-slot").innerHTML = `
      <div class="theme-toggle">
        <button class="${theme==='light'?'active':''}" onclick="SDG_setTheme('light')">☼ Claro</button>
        <button class="${theme==='dark'?'active':''}" onclick="SDG_setTheme('dark')">☾ Escuro</button>
      </div>
    `;
  }

  function header(kicker, title, sub){
    return `<div class="view-header">
      <div class="kicker">${kicker}</div>
      <h2>${title}</h2>
      ${sub ? `<div class="sub">${sub}</div>` : ""}
    </div>`;
  }

  // ---------- INÍCIO ----------
  function renderInicio(){
    const dateStr = new Date().toLocaleDateString("pt-BR", { weekday:'long', day:'numeric', month:'long' });
    const key = todayKey();
    const comp = checklistCompletion(key);
    const favCount = favorites.length;
    const chalCount = challengesDone.length;

    $app.innerHTML = `
      <div class="hero">
        <div class="eyebrow">Soli Deo Gloria · Regra de Vida Cristã Reformada</div>
        <h1>Que toda a vida glorifique a Deus</h1>
        <div class="verse">"Portanto, quer comais, quer bebais, ou façais outra coisa qualquer, fazei tudo para glória de Deus." — 1 Coríntios 10:31</div>
        <div class="hero-stats">
          <div class="hero-stat"><div class="n">${comp.done}/${comp.total}</div><div class="l">Checklist de hoje</div></div>
          <div class="hero-stat"><div class="n">${favCount}</div><div class="l">Favoritos</div></div>
          <div class="hero-stat"><div class="n">${chalCount}/30</div><div class="l">Desafios vividos</div></div>
        </div>
      </div>

      <div style="height:22px"></div>
      <h3 style="font-size:19px; margin-bottom:10px;">Cinco grandes compromissos</h3>
      <div class="compromissos-list">
        ${COMPROMISSOS.map((c,i)=>`
          <div class="compromisso">
            <div class="roman">${["I","II","III","IV","V"][i]}</div>
            <div><h4>${c.titulo}</h4><p>${c.desc}</p></div>
          </div>
        `).join("")}
      </div>

      <div style="height:26px"></div>
      <div class="grid cols-2">
        <div class="card">
          <div class="kicker" style="font-family:var(--font-ui);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);font-weight:700;">Hoje, ${dateStr}</div>
          <h4 style="margin-top:8px; font-size:18px;">Devocional do dia</h4>
          <p style="font-family:var(--font-ui); font-size:13.5px; color:var(--ink-soft);">Artigo ${PRINCIPIOS[state.devoIndex].id} — ${PRINCIPIOS[state.devoIndex].titulo}</p>
          <button class="btn primary" onclick="SDG_goTo('devocional')">Ler devocional →</button>
        </div>
        <div class="card">
          <h4 style="font-size:18px;">Checklist diário</h4>
          <p style="font-family:var(--font-ui); font-size:13.5px; color:var(--ink-soft);">${comp.done} de ${comp.total} itens concluídos hoje.</p>
          <div class="progress-bar" style="margin:10px 0 14px;"><div class="fill" style="width:${comp.pct}%"></div></div>
          <button class="btn" onclick="SDG_goTo('checklist')">Abrir checklist →</button>
        </div>
      </div>
    `;
  }

  // ---------- CHIPS de tema ----------
  function chipRow(){
    return `<div class="chip-row">
      <button class="chip ${state.activeTheme==='todos'?'active':''}" onclick="SDG_setThemeFilter('todos')">Todos</button>
      ${THEMES.map(t=>`<button class="chip ${state.activeTheme===t.id?'active':''}" onclick="SDG_setThemeFilter('${t.id}')">${t.selo}. ${t.nome}</button>`).join("")}
    </div>`;
  }

  function searchBar(placeholder){
    return `<div class="search-bar">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input type="text" placeholder="${placeholder}" value="${state.searchQuery}" oninput="SDG_onSearch(this.value)"/>
    </div>`;
  }

  // ---------- PRINCÍPIOS ----------
  function renderPrincipios(){
    $app.innerHTML = `
      ${header("Artigos I–XXX", "Os 30 Princípios", "Uma regra de vida reformada, organizada por tema. Toque em um princípio para expandir exposição, devocional e desafio prático.")}
      ${searchBar("Buscar por palavra, tema ou referência…")}
      ${chipRow()}
      <div id="list-slot"></div>
    `;
    renderList();
  }

  function renderList(){
    const slot = document.getElementById("list-slot");
    if(!slot) return;
    let list = PRINCIPIOS.filter(p => (state.activeTheme==='todos' || p.tema===state.activeTheme) && matchesQuery(p, state.searchQuery));
    if(list.length===0){
      slot.innerHTML = emptyState("Nenhum princípio encontrado para essa busca.");
      return;
    }
    slot.innerHTML = list.map(p => principioCard(p)).join("");
  }

  function principioCard(p){
    const fav = isFav(p.id);
    return `
      <div class="principio" id="princ-${p.id}">
        <div class="principio-head">
          <div>
            <div class="principio-num">Artigo ${String(p.id).padStart(2,'0')} · ${themeName(p.tema)}</div>
            <h3>${p.titulo}</h3>
            <div class="ref">${p.ref}</div>
          </div>
          <button class="fav-btn ${fav?'active':''}" onclick="event.stopPropagation(); SDG_toggleFav(${p.id})" aria-label="Favoritar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="${fav?'currentColor':'none'}" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-6.7-4.35-9.3-8.2C1 10 1.7 6.6 4.6 5.2c2.2-1 4.6-.2 5.9 1.6L12 8.5l1.5-1.7c1.3-1.8 3.7-2.6 5.9-1.6 2.9 1.4 3.6 4.8 1.9 7.6C18.7 16.65 12 21 12 21z"/></svg>
          </button>
        </div>
        <p class="texto">${p.texto}</p>
        <div class="principio-extra">
          <div class="block"><div class="label">Devocional</div><p>${p.devocional}</p></div>
          <div class="block"><div class="label">Desafio prático</div><p>${p.desafio}</p></div>
        </div>
        <button class="toggle-link" onclick="SDG_toggleExpand(document.getElementById('princ-${p.id}'))">Ver devocional e desafio ↓</button>
      </div>
    `;
  }

  function emptyState(msg){
    return `<div class="empty"><div class="glyph">✦</div><p>${msg}</p></div>`;
  }

  // ---------- ESTUDOS (por tema) ----------
  function renderEstudos(){
    $app.innerHTML = `
      ${header("Estudo temático", "Estudos por Tema", "Os dez temas que estruturam a regra de vida, com exposição bíblica reunida artigo por artigo.")}
      ${chipRow()}
      <div id="study-slot"></div>
    `;
    const slot = document.getElementById("study-slot");
    const themesToShow = state.activeTheme==='todos' ? THEMES : THEMES.filter(t=>t.id===state.activeTheme);
    slot.innerHTML = themesToShow.map(t => {
      const items = PRINCIPIOS.filter(p=>p.tema===t.id);
      return `
        <div class="card theme-study" style="margin-bottom:16px;">
          <div class="principio-num">Tema ${t.selo}</div>
          <h3>${t.nome}</h3>
          ${items.map(p => `
            <div style="margin-top:14px; padding-top:14px; border-top:1px solid var(--border);">
              <strong style="font-family:var(--font-display); font-size:16.5px;">${p.titulo}</strong>
              <span class="ref" style="margin-left:8px;">${p.ref}</span>
              <p style="margin-top:6px;">${p.texto}</p>
            </div>
          `).join("")}
        </div>
      `;
    }).join("");
  }

  // ---------- DEVOCIONAL ----------
  function renderDevocional(){
    const p = PRINCIPIOS[state.devoIndex];
    const isToday = state.devoIndex === (dayOfYear(new Date()) % PRINCIPIOS.length);
    $app.innerHTML = `
      ${header("Meditação diária", "Devocional", "Um princípio por dia para meditação, aplicação e oração.")}
      <div class="card devo-card">
        <div class="ref">${p.ref} ${isToday ? " · Devocional de hoje" : ""}</div>
        <h2>${p.titulo}</h2>
        <p>${p.texto}</p>
        <blockquote>${p.devocional}</blockquote>
        <div class="block"><div class="label" style="font-family:var(--font-ui); font-size:10.5px; text-transform:uppercase; letter-spacing:.1em; color:var(--gold); font-weight:700;">Aplicação de hoje</div><p>${p.desafio}</p></div>
        <div class="devo-nav">
          <button class="btn" onclick="SDG_devoShift(-1)">← Anterior</button>
          <button class="btn" onclick="SDG_devoToday()">Hoje</button>
          <button class="btn" onclick="SDG_devoShift(1)">Próximo →</button>
        </div>
      </div>
    `;
  }
  window.SDG_devoShift = function(delta){
    state.devoIndex = (state.devoIndex + delta + PRINCIPIOS.length) % PRINCIPIOS.length;
    renderDevocional();
  };
  window.SDG_devoToday = function(){
    state.devoIndex = dayOfYear(new Date()) % PRINCIPIOS.length;
    renderDevocional();
  };

  // ---------- DESAFIOS ----------
  function renderDesafios(){
    const done = challengesDone.length;
    $app.innerHTML = `
      ${header("Prática", "Desafios", "Coloque cada princípio em prática e registre seu progresso.")}
      <div class="card" style="margin-bottom:18px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <strong style="font-family:var(--font-ui); font-size:13.5px;">${done} de ${PRINCIPIOS.length} desafios já vividos</strong>
          <span style="font-family:var(--font-ui); font-size:13px; color:var(--gold); font-weight:700;">${Math.round(done/PRINCIPIOS.length*100)}%</span>
        </div>
        <div class="progress-bar"><div class="fill" style="width:${Math.round(done/PRINCIPIOS.length*100)}%"></div></div>
      </div>
      ${chipRow()}
      <div id="challenge-slot"></div>
    `;
    const slot = document.getElementById("challenge-slot");
    const list = PRINCIPIOS.filter(p => state.activeTheme==='todos' || p.tema===state.activeTheme);
    slot.innerHTML = list.map(p => `
      <div class="checklist-item ${isChallengeDone(p.id)?'done':''}">
        <input type="checkbox" ${isChallengeDone(p.id)?'checked':''} onchange="SDG_toggleChallenge(${p.id})" id="ch-${p.id}"/>
        <label for="ch-${p.id}"><strong>${p.titulo}.</strong> ${p.desafio}</label>
      </div>
    `).join("");
  }

  // ---------- CHECKLIST DIÁRIO ----------
  function renderChecklist(){
    const key = toKey(state.checklistDate);
    const day = getChecklist(key);
    const comp = checklistCompletion(key);
    const isToday = key === todayKey();
    const dateLabel = state.checklistDate.toLocaleDateString("pt-BR", { weekday:'long', day:'numeric', month:'long', year:'numeric' });

    $app.innerHTML = `
      ${header("Disciplina diária", "Checklist", "Oito hábitos simples para acompanhar a fidelidade do dia a dia.")}
      <div class="card" style="margin-bottom:18px;">
        <div style="display:flex; align-items:center; justify-content:space-between;">
          <button class="btn" onclick="SDG_shiftChecklistDate(-1)">← dia anterior</button>
          <div style="text-align:center;">
            <div style="font-family:var(--font-ui); font-size:12.5px; color:var(--ink-soft); text-transform:capitalize;">${dateLabel}</div>
            ${!isToday ? `<button class="toggle-link" onclick="SDG_resetChecklistToday()">voltar para hoje</button>` : ""}
          </div>
          <button class="btn" onclick="SDG_shiftChecklistDate(1)" ${key>=todayKey()?'disabled':''}>dia seguinte →</button>
        </div>
        <div style="margin-top:16px; display:flex; align-items:center; gap:10px;">
          <div class="progress-bar" style="flex:1;"><div class="fill" style="width:${comp.pct}%"></div></div>
          <strong style="font-family:var(--font-ui); font-size:13px; color:var(--gold);">${comp.done}/${comp.total}</strong>
        </div>
      </div>
      ${CHECKLIST_ITENS.map(item => `
        <div class="checklist-item ${day[item.id]?'done':''}">
          <input type="checkbox" ${day[item.id]?'checked':''} onchange="SDG_toggleChecklistItem('${key}','${item.id}')" id="cl-${item.id}"/>
          <label for="cl-${item.id}">${item.texto}</label>
        </div>
      `).join("")}
    `;
  }
  window.SDG_resetChecklistToday = function(){ state.checklistDate = new Date(); render(); };

  // ---------- PROGRESSO ----------
  function renderProgresso(){
    // últimos 14 dias
    const days = [];
    for(let i=13;i>=0;i--){
      const d = new Date();
      d.setDate(d.getDate()-i);
      const k = toKey(d);
      days.push({ key:k, label:d.toLocaleDateString("pt-BR",{weekday:'short'}).slice(0,3), pct: checklistCompletion(k).pct });
    }
    // streak
    let streak = 0;
    for(let i=0;i<365;i++){
      const d = new Date();
      d.setDate(d.getDate()-i);
      const k = toKey(d);
      const c = checklistCompletion(k);
      if(c.done===c.total && c.total>0) streak++;
      else break;
    }
    const totalDiasComRegistro = Object.keys(checklistData).filter(k=>{
      const c = checklistCompletion(k); return c.done>0;
    }).length;
    const favPct = Math.round(favorites.length/PRINCIPIOS.length*100);
    const chalPct = Math.round(challengesDone.length/PRINCIPIOS.length*100);

    $app.innerHTML = `
      ${header("Painel", "Progresso", "Um retrato simples da sua constância na regra de vida.")}
      <div class="grid cols-3" style="margin-bottom:18px;">
        <div class="card stat-card"><div class="big">${streak}</div><div class="lbl">Dias seguidos com checklist completo</div></div>
        <div class="card stat-card"><div class="big">${totalDiasComRegistro}</div><div class="lbl">Dias com registro</div></div>
        <div class="card stat-card"><div class="big">${chalPct}%</div><div class="lbl">Desafios vividos</div></div>
      </div>
      <div class="card" style="margin-bottom:18px;">
        <h4 style="font-size:16px;">Últimos 14 dias</h4>
        <div class="bars">
          ${days.map(d => `
            <div class="bar-col">
              <div class="bar ${d.pct>0?'filled':''}" style="height:${Math.max(d.pct,4)}%"></div>
              <div class="day">${d.label}</div>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="card">
        <h4 style="font-size:16px;">Princípios favoritados</h4>
        <div style="display:flex; align-items:center; gap:10px; margin-top:8px;">
          <div class="progress-bar" style="flex:1;"><div class="fill" style="width:${favPct}%"></div></div>
          <strong style="font-family:var(--font-ui); font-size:13px; color:var(--gold);">${favorites.length}/${PRINCIPIOS.length}</strong>
        </div>
      </div>
    `;
  }

  // ---------- CALENDÁRIO ----------
  function renderCalendario(){
    const year = state.calYear, month = state.calMonth;
    const first = new Date(year, month, 1);
    const startDow = first.getDay();
    const daysInMonth = new Date(year, month+1, 0).getDate();
    const monthLabel = first.toLocaleDateString("pt-BR", { month:'long', year:'numeric' });
    const dows = ["D","S","T","Q","Q","S","S"];

    let cells = "";
    for(let i=0;i<startDow;i++) cells += `<div class="cal-day empty"></div>`;
    for(let d=1; d<=daysInMonth; d++){
      const date = new Date(year, month, d);
      const key = toKey(date);
      const comp = checklistCompletion(key);
      const isToday = key === todayKey();
      let cls = "cal-day";
      if(isToday) cls += " today";
      if(comp.done===comp.total && comp.total>0) cls += " full";
      else if(comp.done>0) cls += " partial";
      cells += `<div class="${cls}" onclick="SDG_openDay('${key}')">${d}${comp.done>0?'<div class="dot"></div>':''}</div>`;
    }

    $app.innerHTML = `
      ${header("Trilha de fidelidade", "Calendário", "Visualize seus dias de constância. Toque em um dia para revisar ou editar o checklist.")}
      <div class="card">
        <div class="cal-head">
          <button onclick="SDG_calShift(-1)">‹</button>
          <strong style="font-family:var(--font-display); font-size:18px; text-transform:capitalize;">${monthLabel}</strong>
          <button onclick="SDG_calShift(1)">›</button>
        </div>
        <div class="cal-grid">
          ${dows.map(d=>`<div class="cal-dow">${d}</div>`).join("")}
          ${cells}
        </div>
      </div>
    `;
  }
  window.SDG_calShift = function(delta){
    let m = state.calMonth + delta, y = state.calYear;
    if(m<0){ m=11; y--; } if(m>11){ m=0; y++; }
    state.calMonth = m; state.calYear = y;
    renderCalendario();
  };
  window.SDG_openDay = function(key){
    const [y,m,d] = key.split("-").map(Number);
    state.checklistDate = new Date(y, m-1, d);
    goTo("checklist");
  };

  // ---------- FAVORITOS ----------
  function renderFavoritos(){
    $app.innerHTML = `
      ${header("Sua seleção", "Favoritos", "Os princípios que você marcou para revisitar com frequência.")}
      <div id="fav-slot"></div>
    `;
    const slot = document.getElementById("fav-slot");
    const list = PRINCIPIOS.filter(p=>isFav(p.id));
    slot.innerHTML = list.length ? list.map(p=>principioCard(p)).join("") : emptyState("Você ainda não favoritou nenhum princípio. Toque no coração em qualquer artigo para guardá-lo aqui.");
  }

  // ---------- Init ----------
  initTheme();
  render();

  // ---------- Service worker (PWA offline) ----------
  if("serviceWorker" in navigator){
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch(()=>{ /* offline-first ainda funciona sem SW */ });
    });
  }
})();
