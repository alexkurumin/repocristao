/* ==================================================================
   SERMÃO DO MONTE — lógica do livro
   Efeito de folhear: uma única "folha" (flipper) é criada por cima
   da página estática toda vez que o usuário navega, gira em 3D em
   torno da lombada (eixo Y esquerdo) e é removida ao final — como
   uma página de papel virando de verdade.
   ================================================================== */

(function () {
  "use strict";

  const TOTAL = TOTAL_PAGES;
  let currentLang = "pt";
  let currentIndex = 0;
  let animating = false;

  const bookEl        = document.getElementById("book");
  const coverEl        = document.getElementById("cover");
  const bookViewEl     = document.getElementById("book-view");
  const startBtn       = document.getElementById("startBtn");
  const homeBtn        = document.getElementById("homeBtn");
  const prevBtn        = document.getElementById("prevBtn");
  const nextBtn        = document.getElementById("nextBtn");
  const pageIndicator  = document.getElementById("pageIndicator");
  const progressFill   = document.getElementById("progressFill");

  let staticPageEl = null; // camada de baixo, sempre mostra a página atual

  /* ---------------------------------------------------------------
     Montagem do conteúdo HTML de uma página
     --------------------------------------------------------------- */
  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  function renderVerse(text) {
    const m = text.match(/^(\d+)\s?[-—]?\s?(.*)$/s);
    if (m && /^\d+$/.test(m[1])) {
      return `<p><span class="vnum">${m[1]}</span>${escapeHtml(m[2])}</p>`;
    }
    return `<p>${escapeHtml(text)}</p>`;
  }

  function buildPageHTML(index) {
    const meta = PAGE_META[index];
    const data = PAGE_TEXT[currentLang][index];
    let html = "";

    if (data.kicker) {
      html += `<p class="page-kicker">${escapeHtml(data.kicker)}</p>`;
    }

    if (meta.images && meta.images.length) {
      const singleClass = meta.images.length === 1 ? " single" : "";
      html += `<div class="page-images${singleClass}">`;
      meta.images.forEach((src) => {
        html += `<img src="images/${src}" alt="${escapeHtml(data.section || "Ilustração")}" loading="lazy">`;
      });
      html += `</div>`;
    }

    if (data.blocks) {
      data.blocks.forEach((block) => {
        if (block.section) html += `<p class="page-section">${escapeHtml(block.section)}</p>`;
        if (block.caption) html += `<p class="page-caption">${escapeHtml(block.caption)}</p>`;
        html += `<div class="page-text">`;
        block.paragraphs.forEach((p) => (html += renderVerse(p)));
        html += `</div>`;
      });
    } else {
      if (data.section) html += `<p class="page-section">${escapeHtml(data.section)}</p>`;
      if (data.caption) html += `<p class="page-caption">${escapeHtml(data.caption)}</p>`;
      html += `<div class="page-text">`;
      data.paragraphs.forEach((p) => (html += renderVerse(p)));
      html += `</div>`;
    }

    html += `<div class="page-number">${meta.num}</div>`;
    return html;
  }

  function buildFaceInner(index) {
    return `<div class="page-inner">${buildPageHTML(index)}</div>`;
  }

  /* ---------------------------------------------------------------
     Camada estática (base) — sempre reflete a página atual
     --------------------------------------------------------------- */
  function ensureStaticLayer() {
    if (!staticPageEl) {
      staticPageEl = document.createElement("div");
      staticPageEl.className = "leaf-face page-static";
      bookEl.appendChild(staticPageEl);
    }
  }

  function renderStatic(index) {
    ensureStaticLayer();
    staticPageEl.innerHTML = buildFaceInner(index);
  }

  /* ---------------------------------------------------------------
     Interface / progresso
     --------------------------------------------------------------- */
  function updateChrome() {
    const strings = UI_STRINGS[currentLang];
    pageIndicator.textContent = strings.pageOf(currentIndex + 1, TOTAL);
    progressFill.style.width = ((currentIndex + 1) / TOTAL) * 100 + "%";
    prevBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = currentIndex >= TOTAL - 1;
  }

  /* ---------------------------------------------------------------
     Navegação com efeito de folhear (flipper único e temporário)
     --------------------------------------------------------------- */
  function turnPage(direction) {
    if (animating) return;
    const targetIndex = currentIndex + direction;
    if (targetIndex < 0 || targetIndex > TOTAL - 1) return;

    animating = true;
    ensureStaticLayer();

    const flipper = document.createElement("div");
    flipper.className = "flipper";

    const front = document.createElement("div");
    front.className = "leaf-face front";

    const back = document.createElement("div");
    back.className = "leaf-face back";

    if (direction > 0) {
      // avançar: frente = página atual, verso = próxima página
      front.innerHTML = buildFaceInner(currentIndex);
      back.innerHTML = buildFaceInner(targetIndex);
      renderStatic(targetIndex); // a base já mostra o destino
      flipper.appendChild(front);
      flipper.appendChild(back);
      bookEl.appendChild(flipper);
      // força reflow antes de iniciar a transição
      void flipper.offsetWidth;
      requestAnimationFrame(() => flipper.classList.add("is-flipped"));
    } else {
      // voltar: frente = página anterior (destino), verso = página atual
      front.innerHTML = buildFaceInner(targetIndex);
      back.innerHTML = buildFaceInner(currentIndex);
      renderStatic(targetIndex);
      flipper.classList.add("is-flipped"); // começa virada (mostrando o verso = atual)
      flipper.appendChild(front);
      flipper.appendChild(back);
      bookEl.appendChild(flipper);
      void flipper.offsetWidth;
      requestAnimationFrame(() => flipper.classList.remove("is-flipped"));
    }

    const cleanup = () => {
      flipper.removeEventListener("transitionend", cleanup);
      if (flipper.parentNode) flipper.parentNode.removeChild(flipper);
      currentIndex = targetIndex;
      updateChrome();
      animating = false;
    };
    flipper.addEventListener("transitionend", cleanup);
    // rede de segurança caso transitionend não dispare (ex.: reduced-motion)
    window.setTimeout(cleanup, 950);
  }

  function next() { turnPage(1); }
  function prev() { turnPage(-1); }

  function goToPage(index) {
    // usado apenas ao trocar de idioma / reconstruir sem animação
    currentIndex = Math.max(0, Math.min(TOTAL - 1, index));
    renderStatic(currentIndex);
    updateChrome();
  }

  /* ---------------------------------------------------------------
     Idioma
     --------------------------------------------------------------- */
  function applyLanguage(lang) {
    currentLang = lang;
    const strings = UI_STRINGS[lang];
    document.documentElement.lang =
      lang === "pt" ? "pt-BR" : lang === "en" ? "en" : lang === "es" ? "es" : "it";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (strings[key]) el.textContent = strings[key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (strings[key]) el.setAttribute("aria-label", strings[key]);
    });

    prevBtn.setAttribute("aria-label", strings.prev);
    nextBtn.setAttribute("aria-label", strings.next);

    document.querySelectorAll(".lang-btn, .lang-mini-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
    });

    // reconstrói a página atual (sem animação) no novo idioma
    renderStatic(currentIndex);
    updateChrome();
  }

  /* ---------------------------------------------------------------
     Eventos
     --------------------------------------------------------------- */
  document.querySelectorAll(".lang-btn, .lang-mini-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  startBtn.addEventListener("click", () => {
    coverEl.hidden = true;
    bookViewEl.hidden = false;
    // garante medidas corretas do layout antes da primeira renderização
    requestAnimationFrame(() => {
      renderStatic(currentIndex);
      updateChrome();
    });
  });

  homeBtn.addEventListener("click", () => {
    bookViewEl.hidden = true;
    coverEl.hidden = false;
  });

  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);

  document.addEventListener("keydown", (e) => {
    if (bookViewEl.hidden) return;
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });

  // arrastar / deslizar no palco do livro para virar página
  (function enableSwipe() {
    let startX = null;
    const stage = document.querySelector(".book-stage");
    stage.addEventListener(
      "touchstart",
      (e) => { startX = e.touches[0].clientX; },
      { passive: true }
    );
    stage.addEventListener(
      "touchend",
      (e) => {
        if (startX === null) return;
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 46) {
          if (dx < 0) next(); else prev();
        }
        startX = null;
      },
      { passive: true }
    );
  })();

  /* ---------------------------------------------------------------
     Inicialização
     --------------------------------------------------------------- */
  renderStatic(0);
  applyLanguage("pt");
})();
