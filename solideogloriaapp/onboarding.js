// ============================================================
// SOLI DEO GLORIA — Boas-vindas e tour guiado
// ============================================================
(function(){
  "use strict";

  const NAME_KEY = "sdg_username";
  const SEEN_KEY = "sdg_onboarding_seen";
  const MOBILE_BP = 880;

  // ---------- Saudação conforme horário local ----------
  function getGreeting(){
    const h = new Date().getHours();
    if(h >= 5 && h < 12) return "Bom dia";
    if(h >= 12 && h < 18) return "Boa tarde";
    return "Boa noite";
  }

  function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  // ============================================================
  // MODAL DE BOAS-VINDAS
  // ============================================================
  function buildWelcomeModal(){
    const overlay = document.createElement("div");
    overlay.className = "welcome-overlay";
    overlay.innerHTML = `
      <div class="welcome-modal" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
        <div class="welcome-seal">SDG</div>
        <p id="welcome-title" class="welcome-greeting">Olá, ${getGreeting()}!</p>
        <p class="welcome-question">Qual é o seu nome?</p>
        <input type="text" id="welcome-input" class="welcome-input" placeholder="Digite seu nome" maxlength="40" autocomplete="given-name" />
        <div class="welcome-buttons">
          <button class="btn" id="welcome-sair" type="button">SAIR</button>
          <button class="btn primary" id="welcome-entrar" type="button">ENTRAR</button>
        </div>
        <p class="welcome-hint">Pressione SAIR, ou ENTRAR para continuar.</p>
      </div>
    `;
    document.body.appendChild(overlay);

    const input = overlay.querySelector("#welcome-input");
    setTimeout(() => input.focus(), 50);

    function closeModal(){
      overlay.remove();
      localStorage.setItem(SEEN_KEY, "1");
    }

    overlay.querySelector("#welcome-sair").addEventListener("click", () => {
      closeModal();
    });

    function tryEnter(){
      const name = input.value.trim();
      if(!name){
        input.classList.remove("shake");
        void input.offsetWidth; // reinicia a animação
        input.classList.add("shake");
        input.focus();
        return;
      }
      localStorage.setItem(NAME_KEY, name);
      closeModal();
      applyUserName(name);
      startTour();
    }

    overlay.querySelector("#welcome-entrar").addEventListener("click", tryEnter);
    input.addEventListener("keydown", (e) => { if(e.key === "Enter") tryEnter(); });
  }

  // ---------- Exibir nome do usuário em destaque + aviso de privacidade ----------
  function applyUserName(name){
    const badge = `<div class="user-badge">✦ Olá, <strong>${escapeHtml(name)}</strong></div>`;
    const desktopSlot = document.getElementById("user-name-slot");
    const mobileSlot = document.getElementById("user-name-slot-mobile");
    if(desktopSlot) desktopSlot.innerHTML = badge;
    if(mobileSlot) mobileSlot.innerHTML = badge;
    showPrivacyNote();
  }

  function showPrivacyNote(){
    const slot = document.getElementById("privacy-note-slot");
    if(!slot) return;
    slot.innerHTML = `<div class="privacy-note">🔒 Seu nome fica salvo apenas neste navegador e não é acessível a outros usuários ou enviado a servidores.</div>`;
  }

  // ============================================================
  // TOUR GUIADO
  // ============================================================
  const TOUR_STEPS = [
    { selector: ".seal", index: 0, view: null,
      title: "Bem-vindo ao Soli Deo Gloria",
      text: "Este é o seu app pessoal com os 30 princípios da vida cristã reformada. Vamos fazer um tour rápido pelas funcionalidades — você pode fechar a qualquer momento.",
      placement: "bottom" },
    { selector: ".search-bar", index: 0, view: "principios",
      title: "Busca inteligente",
      text: "Encontre qualquer princípio digitando uma palavra, um tema ou uma referência bíblica.",
      placement: "bottom" },
    { selector: ".principio", index: 0, view: "principios",
      title: "Os 30 artigos",
      text: "Toque em qualquer princípio para expandir a devocional e o desafio prático relacionados a ele. Use o coração para favoritar.",
      placement: "top" },
    { selector: ".devo-card", index: 0, view: "devocional",
      title: "Devocional diário",
      text: "Um princípio novo a cada dia, com meditação e aplicação prática. Use os botões abaixo para navegar entre os devocionais.",
      placement: "top" },
    { selector: ".checklist-item", index: 0, view: "checklist",
      title: "Checklist diário",
      text: "Marque seus hábitos espirituais todos os dias. Você pode navegar entre datas e ajustar dias passados.",
      placement: "top" },
    { selector: ".bars", index: 0, view: "progresso",
      title: "Painel de progresso",
      text: "Acompanhe sua sequência de dias fiéis e sua constância nas últimas duas semanas.",
      placement: "top" },
    { selector: ".cal-grid", index: 0, view: "calendario",
      title: "Calendário",
      text: "Visualize seus dias de constância no mês inteiro. Toque em qualquer dia para revisar ou editar o checklist.",
      placement: "top" },
    { selector: "#theme-toggle-slot", index: 0, view: null,
      title: "Tema claro ou escuro",
      text: "Alterne a aparência do app a qualquer momento, conforme sua preferência.",
      placement: "top" },
    { selector: "#user-name-slot", index: 0, view: null,
      title: "Seu nome, em destaque",
      text: "Seu nome aparece aqui, no topo do app. Ele fica guardado apenas no seu navegador — veja o aviso de privacidade logo abaixo, no menu.",
      placement: "bottom" },
  ];

  let tourIndex = 0;
  let tourEls = { spotlight: null, tooltip: null, reposition: null };

  function startTour(){
    tourIndex = 0;
    document.body.classList.add("tour-active");
    showStep(0);
  }
  window.SDG_startTour = startTour;

  function endTour(){
    document.body.classList.remove("tour-active");
    teardownStepUI();
    if(window.innerWidth <= MOBILE_BP){
      const sidebar = document.getElementById("sidebar");
      if(sidebar) sidebar.classList.remove("open");
    }
  }

  function teardownStepUI(){
    if(tourEls.spotlight) tourEls.spotlight.remove();
    if(tourEls.tooltip) tourEls.tooltip.remove();
    if(tourEls.reposition){
      window.removeEventListener("resize", tourEls.reposition);
      window.removeEventListener("scroll", tourEls.reposition, true);
    }
    tourEls = { spotlight: null, tooltip: null, reposition: null };
  }

  function showStep(i){
    teardownStepUI();
    if(i < 0 || i >= TOUR_STEPS.length){ endTour(); return; }
    tourIndex = i;
    const step = TOUR_STEPS[i];

    if(step.view && window.SDG_goTo) window.SDG_goTo(step.view);

    requestAnimationFrame(() => {
      let el = document.querySelectorAll(step.selector)[step.index || 0];
      const isMobile = window.innerWidth <= MOBILE_BP;
      const inSidebar = !!(el && el.closest && el.closest(".sidebar"));
      if(isMobile){
        const sidebar = document.getElementById("sidebar");
        if(sidebar) sidebar.classList.toggle("open", inSidebar);
      }
      requestAnimationFrame(() => {
        el = document.querySelectorAll(step.selector)[step.index || 0];
        if(!el){ showStep(i + 1); return; }
        renderStepUI(el, step, i);
      });
    });
  }

  function renderStepUI(el, step, i){
    const pad = 8;
    const spot = document.createElement("div");
    spot.className = "tour-spotlight";
    document.body.appendChild(spot);

    const tip = document.createElement("div");
    tip.className = "tour-tooltip";
    const isLast = i === TOUR_STEPS.length - 1;
    tip.innerHTML = `
      <div class="tour-step-count">Passo ${i + 1} de ${TOUR_STEPS.length}</div>
      <h4>${step.title}</h4>
      <p>${step.text}</p>
      <div class="tour-actions">
        <button class="btn" id="tour-close" type="button">Fechar</button>
        <button class="btn primary" id="tour-next" type="button">${isLast ? "Concluir" : "Continuar"}</button>
      </div>
    `;
    document.body.appendChild(tip);
    tourEls.spotlight = spot;
    tourEls.tooltip = tip;

    function place(){
      const rect = el.getBoundingClientRect();
      spot.style.top = (rect.top - pad) + "px";
      spot.style.left = (rect.left - pad) + "px";
      spot.style.width = (rect.width + pad * 2) + "px";
      spot.style.height = (rect.height + pad * 2) + "px";
      positionTooltip(tip, rect, step.placement);
      el.scrollIntoView && el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
    place();
    tourEls.reposition = place;
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);

    document.getElementById("tour-close").addEventListener("click", endTour);
    document.getElementById("tour-next").addEventListener("click", () => showStep(i + 1));
  }

  function positionTooltip(tip, rect, placement){
    placement = placement || "bottom";
    const margin = 16;
    const tw = tip.offsetWidth || 290;
    const th = tip.offsetHeight || 140;
    let top, left;

    if(placement === "bottom"){
      top = rect.bottom + margin;
      left = rect.left + rect.width / 2 - tw / 2;
      if(top + th > window.innerHeight - 12) { placement = "top"; }
    }
    if(placement === "top"){
      top = rect.top - th - margin;
      left = rect.left + rect.width / 2 - tw / 2;
      if(top < 12){ top = rect.bottom + margin; placement = "bottom"; }
    }
    if(placement === "left"){
      top = rect.top + rect.height / 2 - th / 2;
      left = rect.left - tw - margin;
    }
    if(placement === "right"){
      top = rect.top + rect.height / 2 - th / 2;
      left = rect.right + margin;
    }

    left = Math.max(12, Math.min(left, window.innerWidth - tw - 12));
    top = Math.max(12, Math.min(top, window.innerHeight - th - 12));
    tip.style.left = left + "px";
    tip.style.top = top + "px";
    tip.setAttribute("data-placement", placement);
  }

  // ============================================================
  // INICIALIZAÇÃO
  // ============================================================
  function init(){
    const name = localStorage.getItem(NAME_KEY);
    if(name){
      applyUserName(name);
    } else {
      const seen = localStorage.getItem(SEEN_KEY);
      if(!seen) buildWelcomeModal();
    }
    const replayBtn = document.getElementById("tour-replay-btn");
    if(replayBtn) replayBtn.addEventListener("click", startTour);
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
