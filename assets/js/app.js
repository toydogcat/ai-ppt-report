// Core Application Controller for Luna AI PPT Hub
document.addEventListener("DOMContentLoaded", () => {
  // --- State Variables ---
  let decks = [...PRELOADED_DECKS];
  let activeDeck = null;
  let activeSlideIndex = 0;
  let activeCategory = "all";
  
  let autoplayTimer = null;
  let isAutoplayActive = false;
  let autoplaySpeed = 5000;
  
  let isLaserActive = false;
  let lastDirection = "down";
  let activeTransition = "flip-3d";
  
  // --- DOM Elements Cache ---
  const elDecksGrid = document.getElementById("decks-grid");
  const elDecksPanel = document.getElementById("decks-panel");
  const elCreatorPanel = document.getElementById("creator-panel");
  
  const elTabDecks = document.getElementById("tab-decks");
  const elTabCreator = document.getElementById("tab-creator");
  
  const elBtnShowDecks = document.getElementById("btn-show-decks");
  const elBtnShowCreator = document.getElementById("btn-show-creator");
  
  // Custom Creator Elements
  const elCustomTitle = document.getElementById("custom-deck-title");
  const elCustomMarkdown = document.getElementById("custom-deck-markdown");
  const elBtnGeneratePpt = document.getElementById("btn-generate-ppt");
  const elBtnLoadDemoMd = document.getElementById("btn-load-demo-md");
  const elFileDropZone = document.getElementById("file-drop-zone");
  const elFileInput = document.getElementById("file-input");
  
  // Player Elements
  const elPlayer = document.getElementById("ppt-player");
  const elPlayerTitle = document.getElementById("player-deck-title");
  const elSlideContainer = document.getElementById("slide-container");
  const elBtnExitPlayer = document.getElementById("btn-exit-player");
  const elBtnPrevSlide = document.getElementById("btn-prev-slide");
  const elBtnNextSlide = document.getElementById("btn-next-slide");
  const elSlideNumber = document.getElementById("slide-number");
  
  // Player Control Bar Buttons
  const elBtnToggleAutoplay = document.getElementById("btn-toggle-autoplay");
  const elAutoplayIcon = document.getElementById("autoplay-icon");
  const elSelectAutoplaySpeed = document.getElementById("select-autoplay-speed");
  const elSelectTransition = document.getElementById("select-transition");
  const elBtnToggleLaser = document.getElementById("btn-toggle-laser");
  const elBtnToggleFullscreen = document.getElementById("btn-toggle-fullscreen");
  const elBtnShowShortcuts = document.getElementById("btn-show-shortcuts");
  
  // Interactive Overlays
  const elShortcutsModal = document.getElementById("shortcuts-modal");
  const elBtnCloseShortcuts = document.getElementById("btn-close-shortcuts");
  const elToastAlert = document.getElementById("toast-alert");
  const elToastText = document.getElementById("toast-text");
  const elLaserPointer = document.getElementById("laser-pointer");

  // --- Inline Markdown Parser ---
  function parseMarkdownInline(text) {
    if (!text) return "";
    // Handle inline code: `code`
    let formatted = text.replace(/`(.*?)`/g, '<code>$1</code>');
    // Handle bold: **bold**
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Handle italic: *italic*
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    return formatted;
  }

  // --- LaTeX Math Parser (KaTeX) ---
  function renderMath(element) {
    if (typeof renderMathInElement === "function") {
      renderMathInElement(element, {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false},
          {left: '\\(', right: '\\)', display: false},
          {left: '\\[', right: '\\]', display: true}
        ],
        throwOnError: false
      });
    }
  }

  // --- Initializer ---
  function init() {
    // Map: deck id → Markdown content variable name
    const deckMdMap = {
      "publishing-guide-2026":     typeof DECK_PUBLISHING_GUIDE_MD !== "undefined"    ? DECK_PUBLISHING_GUIDE_MD    : null,
      "ai-applications-2026":      typeof DECK_AI_APPLICATIONS_MD !== "undefined"     ? DECK_AI_APPLICATIONS_MD     : null,
      "uiux-design-thinking-2026": typeof DECK_UIUX_DESIGN_MD !== "undefined"         ? DECK_UIUX_DESIGN_MD         : null,
      "seo-geo-aieo-2026":         typeof DECK_SEO_GEO_AIEO_MD !== "undefined"        ? DECK_SEO_GEO_AIEO_MD        : null,
      "ai-office-applications-2026": typeof DECK_OFFICE_APPLICATIONS_MD !== "undefined" ? DECK_OFFICE_APPLICATIONS_MD : null,
      "ai-image-video-2026":       typeof DECK_IMAGE_VIDEO_MD !== "undefined"         ? DECK_IMAGE_VIDEO_MD         : null,
      "ai-marketing-image-2026":   typeof DECK_MARKETING_IMAGE_MD !== "undefined"     ? DECK_MARKETING_IMAGE_MD     : null,
      "vibe-coding-2026":          typeof DECK_VIBE_CODING_MD !== "undefined"         ? DECK_VIBE_CODING_MD         : null,
      "n8n-automation-2026":       typeof DECK_N8N_MD !== "undefined"                 ? DECK_N8N_MD                 : null,
      "openclaw-agent-2026":       typeof DECK_OPENCLAW_MD !== "undefined"            ? DECK_OPENCLAW_MD            : null,
      "hermes-agentic-rag-2026":   typeof DECK_HERMES_MD !== "undefined"              ? DECK_HERMES_MD              : null,
      "notebooklm-guide-2026":     typeof DECK_NOTEBOOKLM_MD !== "undefined"         ? DECK_NOTEBOOKLM_MD         : null,
      "pwa-tech-2026":             typeof DECK_PWA_MD !== "undefined"                 ? DECK_PWA_MD                 : null,
      "firebase-ga4-2026":         typeof DECK_FIREBASE_MD !== "undefined"            ? DECK_FIREBASE_MD            : null,
      "ai-data-analysis-2026":     typeof DECK_AI_DATA_ANALYSIS_MD !== "undefined"   ? DECK_AI_DATA_ANALYSIS_MD   : null,
      "calculus-ch1-overview":     typeof DECK_CALCULUS_CH1_INTRO_MD !== "undefined" ? DECK_CALCULUS_CH1_INTRO_MD : null,
      "calculus-1-1-functions-represent": typeof DECK_CALCULUS_1_1_MD !== "undefined" ? DECK_CALCULUS_1_1_MD : null,
      "calculus-1-2-math-models-catalog": typeof DECK_CALCULUS_1_2_MD !== "undefined" ? DECK_CALCULUS_1_2_MD : null,
      "calculus-1-3-new-from-old-functions": typeof DECK_CALCULUS_1_3_MD !== "undefined" ? DECK_CALCULUS_1_3_MD : null,
      "calculus-1-4-tangent-velocity": typeof DECK_CALCULUS_1_4_MD !== "undefined" ? DECK_CALCULUS_1_4_MD : null,
      "calculus-1-5-limit-function":   typeof DECK_CALCULUS_1_5_MD !== "undefined" ? DECK_CALCULUS_1_5_MD : null,
      "calculus-1-6-calculating-limits": typeof DECK_CALCULUS_1_6_MD !== "undefined" ? DECK_CALCULUS_1_6_MD : null,
      "calculus-1-7-precise-limit-definition": typeof DECK_CALCULUS_1_7_MD !== "undefined" ? DECK_CALCULUS_1_7_MD : null,
      "calculus-1-8-continuity":       typeof DECK_CALCULUS_1_8_MD !== "undefined" ? DECK_CALCULUS_1_8_MD : null,
      "calculus-ch2-overview":     typeof DECK_CALCULUS_CH2_INTRO_MD !== "undefined" ? DECK_CALCULUS_CH2_INTRO_MD : null,
      "calculus-2-1-derivatives-rates": typeof DECK_CALCULUS_2_1_MD !== "undefined"  ? DECK_CALCULUS_2_1_MD      : null,
      "calculus-2-2-derivative-function": typeof DECK_CALCULUS_2_2_MD !== "undefined" ? DECK_CALCULUS_2_2_MD     : null,
      "calculus-2-3-differentiation-formulas": typeof DECK_CALCULUS_2_3_MD !== "undefined" ? DECK_CALCULUS_2_3_MD : null,
      "calculus-2-4-trig-derivatives":   typeof DECK_CALCULUS_2_4_MD !== "undefined" ? DECK_CALCULUS_2_4_MD     : null,
      "calculus-2-5-chain-rule":         typeof DECK_CALCULUS_2_5_MD !== "undefined" ? DECK_CALCULUS_2_5_MD     : null,
      "calculus-2-6-implicit-differentiation": typeof DECK_CALCULUS_2_6_MD !== "undefined" ? DECK_CALCULUS_2_6_MD : null,
      "calculus-2-7-rates-change-sciences": typeof DECK_CALCULUS_2_7_MD !== "undefined" ? DECK_CALCULUS_2_7_MD : null,
      "calculus-3-1-max-min-values": typeof DECK_CALCULUS_3_1_MD !== "undefined"      ? DECK_CALCULUS_3_1_MD       : null,
      "calculus-3-2-mean-value-theorem": typeof DECK_CALCULUS_3_2_MD !== "undefined" ? DECK_CALCULUS_3_2_MD     : null,
      "calculus-3-3-derivative-shape":   typeof DECK_CALCULUS_3_3_MD !== "undefined" ? DECK_CALCULUS_3_3_MD     : null,
      "calculus-3-4-limits-infinity":    typeof DECK_CALCULUS_3_4_MD !== "undefined" ? DECK_CALCULUS_3_4_MD     : null,
      "calculus-3-5-curve-sketching":    typeof DECK_CALCULUS_3_5_MD !== "undefined" ? DECK_CALCULUS_3_5_MD     : null,
      "calculus-3-6-graphing-technology": typeof DECK_CALCULUS_3_6_MD !== "undefined" ? DECK_CALCULUS_3_6_MD    : null,
      "calculus-3-7-optimization":       typeof DECK_CALCULUS_3_7_MD !== "undefined" ? DECK_CALCULUS_3_7_MD    : null,
      "calculus-3-8-newton-method":      typeof DECK_CALCULUS_3_8_MD !== "undefined" ? DECK_CALCULUS_3_8_MD    : null,
      "calculus-3-9-antiderivatives":    typeof DECK_CALCULUS_3_9_MD !== "undefined" ? DECK_CALCULUS_3_9_MD    : null,
      "calculus-ch3-overview":           typeof DECK_CALCULUS_CH3_INTRO_MD !== "undefined" ? DECK_CALCULUS_CH3_INTRO_MD : null,
      "calculus-4-1-area-distance": typeof DECK_CALCULUS_4_1_MD !== "undefined"      ? DECK_CALCULUS_4_1_MD       : null,
      "calculus-4-2-definite-integral": typeof DECK_CALCULUS_4_2_MD !== "undefined"  ? DECK_CALCULUS_4_2_MD      : null,
      "calculus-4-3-fundamental-theorem": typeof DECK_CALCULUS_4_3_MD !== "undefined" ? DECK_CALCULUS_4_3_MD     : null,
      "calculus-4-4-indefinite-integral": typeof DECK_CALCULUS_4_4_MD !== "undefined" ? DECK_CALCULUS_4_4_MD     : null,
      "calculus-4-5-substitution-rule":   typeof DECK_CALCULUS_4_5_MD !== "undefined" ? DECK_CALCULUS_4_5_MD     : null,
      "calculus-5-1-areas-between-curves": typeof DECK_CALCULUS_5_1_MD !== "undefined" ? DECK_CALCULUS_5_1_MD   : null,
      "calculus-5-2-volumes":           typeof DECK_CALCULUS_5_2_MD !== "undefined" ? DECK_CALCULUS_5_2_MD   : null,
      "calculus-5-3-cylindrical-shells": typeof DECK_CALCULUS_5_3_MD !== "undefined" ? DECK_CALCULUS_5_3_MD  : null,
      "calculus-5-4-work":               typeof DECK_CALCULUS_5_4_MD !== "undefined" ? DECK_CALCULUS_5_4_MD  : null,
      "calculus-5-5-average-value":      typeof DECK_CALCULUS_5_5_MD !== "undefined" ? DECK_CALCULUS_5_5_MD  : null,
      "calculus-6-1-inverse-functions":  typeof DECK_CALCULUS_6_1_MD !== "undefined" ? DECK_CALCULUS_6_1_MD  : null,
      "calculus-6-2-exponential-functions": typeof DECK_CALCULUS_6_2_MD !== "undefined" ? DECK_CALCULUS_6_2_MD : null,
      "calculus-6-2-star-natural-log-integral": typeof DECK_CALCULUS_6_2_STAR_MD !== "undefined" ? DECK_CALCULUS_6_2_STAR_MD : null,
      "calculus-6-3-logarithmic-functions": typeof DECK_CALCULUS_6_3_MD !== "undefined" ? DECK_CALCULUS_6_3_MD : null,
      "calculus-6-3-star-natural-exp-inverse": typeof DECK_CALCULUS_6_3_STAR_MD !== "undefined" ? DECK_CALCULUS_6_3_STAR_MD : null,
      "calculus-6-4-log-derivatives":   typeof DECK_CALCULUS_6_4_MD !== "undefined" ? DECK_CALCULUS_6_4_MD     : null,
      "calculus-6-4-star-general-log-exp": typeof DECK_CALCULUS_6_4_STAR_MD !== "undefined" ? DECK_CALCULUS_6_4_STAR_MD : null,
      "calculus-6-5-exponential-growth-decay": typeof DECK_CALCULUS_6_5_MD !== "undefined" ? DECK_CALCULUS_6_5_MD : null,
      "calculus-6-6-inverse-trig-functions": typeof DECK_CALCULUS_6_6_MD !== "undefined" ? DECK_CALCULUS_6_6_MD : null,
      "calculus-6-7-hyperbolic-functions": typeof DECK_CALCULUS_6_7_MD !== "undefined" ? DECK_CALCULUS_6_7_MD : null,
      "calculus-6-8-lhospitals-rule":    typeof DECK_CALCULUS_6_8_MD !== "undefined" ? DECK_CALCULUS_6_8_MD : null,
      "calculus-ch5-overview":           typeof DECK_CALCULUS_CH5_INTRO_MD !== "undefined" ? DECK_CALCULUS_CH5_INTRO_MD : null,
      "calculus-ch6-overview":           typeof DECK_CALCULUS_CH6_INTRO_MD !== "undefined" ? DECK_CALCULUS_CH6_INTRO_MD : null,
      "calculus-ch4-overview":           typeof DECK_CALCULUS_CH4_INTRO_MD !== "undefined" ? DECK_CALCULUS_CH4_INTRO_MD : null,
    };

    // Populate slides by matching deck id
    decks.forEach(deck => {
      const md = deckMdMap[deck.id];
      if (md) {
        deck.slides = parseMarkdownToSlides(md);
      }
    });

    renderDecks();
    setupCategoryFilters();
    setupEventHandlers();
    lucide.createIcons();
    
    // Broadcast initialization message to parent if nested in an iframe
    broadcastToParent("iframe_init", { url: window.location.href });
  }

  // --- Hub Category Filters ---
  function setupCategoryFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        activeCategory = btn.getAttribute("data-category");
        renderDecks();
      });
    });
  }

  // --- Hub Dashboard Rendering ---
  function renderDecks() {
    elDecksGrid.innerHTML = "";
    
    // Category display name mapping
    const categoryNames = {
      "ai-automation": "AI 智慧 & 自動化",
      "design-marketing": "設計與行銷",
      "search-analytics": "搜尋與數據分析",
      "dev-tech": "開發與先進技術",
      "calculus": "微積分",
      "custom": "自訂簡報"
    };
    
    // Filter decks by category
    const filteredDecks = activeCategory === "all"
      ? decks
      : decks.filter(deck => deck.category === activeCategory);
      
    // Handle empty state gracefully
    if (filteredDecks.length === 0) {
      const emptyCard = document.createElement("div");
      emptyCard.className = "empty-category-placeholder";
      emptyCard.innerHTML = `
        <div class="empty-icon"><i data-lucide="folder-open"></i></div>
        <h3>尚未建立任何自訂簡報</h3>
        <p>點擊右上角的「製作簡報」或前往「自訂 Markdown 生成」頁籤，貼上您的 Markdown，即可生成屬於您的華麗簡報！</p>
      `;
      elDecksGrid.appendChild(emptyCard);
      lucide.createIcons({ attrs: { class: "lucide-icon-custom" } });
      return;
    }
    
    filteredDecks.forEach(deck => {
      const card = document.createElement("div");
      card.className = `deck-card ${deck.category || 'tech'}`;
      
      const tagString = deck.tags ? deck.tags.map(t => `<span class="deck-tag">${t}</span>`).join("") : "";
      const displayCategory = categoryNames[deck.category] || "精選簡報";
      
      card.innerHTML = `
        <div class="deck-header">
          <span class="deck-category">${displayCategory}</span>
          <span class="deck-slides-count">
            <i data-lucide="layers"></i>
            ${deck.slides.length} 頁
          </span>
        </div>
        <h3 class="deck-title">${deck.title}</h3>
        <p class="deck-desc">${deck.description}</p>
        <div class="deck-tags">${tagString}</div>
        <div class="deck-meta">
          <span class="deck-author">撰寫者: ${deck.author}</span>
          <span>${deck.date}</span>
        </div>
      `;
      
      card.addEventListener("click", () => {
        startPresentation(deck);
      });
      
      elDecksGrid.appendChild(card);
    });
    
    lucide.createIcons({ attrs: { class: "lucide-icon-custom" } });
  }

  // --- SPA Tab Switchers ---
  function switchTab(target) {
    if (target === "decks") {
      elTabDecks.classList.add("active");
      elTabCreator.classList.remove("active");
      elDecksPanel.style.display = "block";
      elCreatorPanel.style.display = "none";
    } else {
      elTabDecks.classList.remove("active");
      elTabCreator.classList.add("active");
      elDecksPanel.style.display = "none";
      elCreatorPanel.style.display = "block";
    }
    
    // Refresh Vercount statistics if available (as per developer guide)
    if (window.vercount && typeof window.vercount.fetch === "function") {
      window.vercount.fetch();
    }
  }

  // --- Dynamic Markdown to Slides Parser ---
  function parseMarkdownToSlides(md) {
    // Split into slides using standard --- divider
    const rawSections = md.split(/\n\s*---\s*\n/);
    const slides = [];
    
    rawSections.forEach((section, index) => {
      const lines = section.trim().split("\n");
      let title = "";
      let subtitle = "";
      let content = "";
      let prompt = "";
      let tools = "";
      let highlight = "";
      const listItems = [];
      const tableRows = [];
      let isCode = false;
      const codeLines = [];
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line && !isCode) continue;
        
        // Code block detector
        if (line.startsWith("```")) {
          isCode = !isCode;
          if (!isCode) {
            prompt = codeLines.join("\n");
          }
          continue;
        }
        
        if (isCode) {
          codeLines.push(lines[i]); // Keep indent for code lines
          continue;
        }
        
        if (line.startsWith("# ")) {
          title = line.replace("# ", "");
        } else if (line.startsWith("## ")) {
          if (!title) title = line.replace("## ", "");
          else subtitle = line.replace("## ", "");
        } else if (line.startsWith("### ")) {
          subtitle = line.replace("### ", "");
        } else if (line.includes("推薦 AI：") || line.includes("適用 AI：") || line.includes("適用工具：") || line.includes("**推薦 AI：**") || line.includes("**適用 AI：**") || line.includes("**適用工具：**") || line.includes("推薦 AI**")) {
          let temp = line.replace(/^[\*\-\s]+/, "");
          tools = temp.replace(/.*[：:]\s*/, "").replace(/\*+/g, "").trim();
        } else if (line.includes("使用情境") || line.includes("適用情境")) {
          let temp = line.replace(/^[\*\-\s]+/, "");
          highlight = temp.replace(/.*[：:]\s*/, "").replace(/\*+/g, "").trim();
        } else if (line.startsWith("* ") || line.startsWith("- ")) {
          listItems.push(line.substring(2).trim());
        } else if (line.startsWith(">")) {
          prompt += line.replace(/^>\s?/, "") + "\n";
        } else if (line.startsWith("|")) {
          const cols = line.split("|").map(c => c.trim()).filter(c => c !== "");
          if (cols.length > 0 && !cols[0].includes("---")) {
            tableRows.push(cols);
          }
        } else {
          content += line + "\n";
        }
      }
      
      // Determine layout based on content features
      let layout = "text";
      if (index === 0) {
        layout = "cover";
      } else if (tableRows.length > 0) {
        layout = "grid";
      } else if (prompt.trim() !== "") {
        layout = "split";
      } else if (listItems.length > 0) {
        layout = "list";
      }
      
      // Package details based on detected layouts
      if (layout === "cover") {
        slides.push({
          layout: "cover",
          title: title || "無標題簡報",
          subtitle: subtitle || content.substring(0, 120) || "按一下進入下一頁",
          theme: "cyberpunk"
        });
      } else if (layout === "grid") {
        const gridItems = [];
        // Map table rows to grid items. Skips header if rows > 1
        const startIdx = tableRows.length > 1 ? 1 : 0;
        for (let r = startIdx; r < tableRows.length; r++) {
          gridItems.push({
            icon: "⚡",
            category: tableRows[r][0] || "任務指標",
            tools: tableRows[r][1] || "首選 AI",
            desc: tableRows[r][2] || "功能優勢說明"
          });
        }
        slides.push({
          layout: "grid",
          title: title || "工具與應用矩陣",
          items: gridItems
        });
      } else if (layout === "split") {
        slides.push({
          layout: "split",
          title: title || "深度工作流",
          subtitle: subtitle || "精準實戰場景",
          highlight: highlight || content.substring(0, 100).trim(),
          content: content.trim(),
          tools: tools || "專屬 AI",
          prompt: prompt.trim()
        });
      } else if (layout === "list") {
        slides.push({
          layout: "list",
          title: title || "核心原則與整理",
          subtitle: subtitle || "",
          items: listItems
        });
      } else {
        slides.push({
          layout: "text",
          title: title || "關鍵思維",
          content: content.trim(),
          highlight: highlight || subtitle || ""
        });
      }
    });
    
    return slides;
  }

  // --- Render Mobile Scrolling Feed Reader ---
  function renderMobileSlides() {
    if (!activeDeck || activeDeck.slides.length === 0) return;
    
    // Hide controls on mobile reader
    const elPlayerControls = document.getElementById("player-controls");
    if (elPlayerControls) elPlayerControls.style.display = "none";
    
    // Build vertical list of all slides
    let slidesHtml = activeDeck.slides.map((slide, index) => {
      let layoutHtml = "";
      
      if (slide.layout === "cover") {
        layoutHtml = `
          <div class="slide-card layout-cover mobile-card" style="margin-bottom: 2rem; height: auto; aspect-ratio: auto; min-height: 220px;">
            <div class="slide-badge">第 ${index + 1} 頁 / 共 ${activeDeck.slides.length} 頁</div>
            <h1>${parseMarkdownInline(slide.title)}</h1>
            <p>${parseMarkdownInline(slide.subtitle).replace(/\n/g, "<br>")}</p>
          </div>
        `;
      } else if (slide.layout === "grid") {
        const gridItemsHtml = slide.items.map(item => `
          <div class="grid-slide-card">
            <div class="grid-slide-card-header">
              <span class="grid-card-icon">${item.icon || '⚡'}</span>
              <span class="grid-card-cat">${parseMarkdownInline(item.category)}</span>
            </div>
            <div class="grid-card-tools">${parseMarkdownInline(item.tools)}</div>
            <div class="grid-card-desc">${parseMarkdownInline(item.desc)}</div>
          </div>
        `).join("");
        
        layoutHtml = `
          <div class="slide-card mobile-card" style="margin-bottom: 2rem; height: auto; aspect-ratio: auto;">
            <div class="slide-badge">第 ${index + 1} 頁 / 共 ${activeDeck.slides.length} 頁</div>
            <h2 class="slide-title">${parseMarkdownInline(slide.title)}</h2>
            <div class="layout-grid-container" style="grid-template-columns: 1fr; max-height: none;">
              ${gridItemsHtml}
            </div>
          </div>
        `;
      } else if (slide.layout === "split") {
        const codeHeader = slide.tools ? `適用工具: ${slide.tools}` : "推薦系統 Prompt 參數";
        layoutHtml = `
          <div class="slide-card mobile-card" style="margin-bottom: 2rem; height: auto; aspect-ratio: auto;">
            <div class="slide-badge">第 ${index + 1} 頁 / 共 ${activeDeck.slides.length} 頁</div>
            <h2 class="slide-title">${parseMarkdownInline(slide.title)}</h2>
            <div class="layout-split-container" style="grid-template-columns: 1fr; gap: 1.5rem;">
              <div class="split-left">
                <div class="subtitle">${parseMarkdownInline(slide.subtitle)}</div>
                <div class="highlight">${parseMarkdownInline(slide.highlight)}</div>
                ${slide.content ? `<div class="split-content-body">${slide.content}</div>` : ""}
                <div class="tools-tag">最佳實戰工具: <span>${parseMarkdownInline(slide.tools)}</span></div>
              </div>
              <div class="prompt-sandbox" style="max-height: none;">
                <div class="sandbox-header">
                  <div class="sandbox-dots">
                    <div class="sandbox-dot red"></div>
                    <div class="sandbox-dot yellow"></div>
                    <div class="sandbox-dot green"></div>
                  </div>
                  <div class="sandbox-title">${parseMarkdownInline(codeHeader)}</div>
                  <button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.nextElementSibling.textContent); alert('已複製 Prompt！');">
                    複製 Prompt
                  </button>
                </div>
                <div class="sandbox-body" style="height: auto; max-height: 250px; overflow-y: auto;">${slide.prompt}</div>
              </div>
            </div>
          </div>
        `;
      } else if (slide.layout === "list") {
        const itemsHtml = slide.items.map((item, idx) => `
          <div class="list-slide-item" style="font-size: 1rem; padding: 0.8rem 1rem;">
            <div class="list-item-bullet">${idx + 1}</div>
            <div>${parseMarkdownInline(item)}</div>
          </div>
        `).join("");
        
        layoutHtml = `
          <div class="slide-card mobile-card" style="margin-bottom: 2rem; height: auto; aspect-ratio: auto;">
            <div class="slide-badge">第 ${index + 1} 頁 / 共 ${activeDeck.slides.length} 頁</div>
            <h2 class="slide-title">${parseMarkdownInline(slide.title)}</h2>
            <div class="layout-list-container">
              ${itemsHtml}
            </div>
          </div>
        `;
      } else {
        const hBox = slide.highlight ? `<div class="highlight-box" style="font-size: 1rem; padding: 1rem;"><i data-lucide="info" style="width: 18px; height: 18px;"></i> ${parseMarkdownInline(slide.highlight)}</div>` : "";
        layoutHtml = `
          <div class="slide-card layout-text mobile-card" style="margin-bottom: 2rem; height: auto; aspect-ratio: auto;">
            <div class="slide-badge">第 ${index + 1} 頁 / 共 ${activeDeck.slides.length} 頁</div>
            <h2 class="slide-title">${parseMarkdownInline(slide.title)}</h2>
            <div class="layout-text-content" style="font-size: 1.05rem; line-height: 1.6;">
              <p>${parseMarkdownInline(slide.content)}</p>
              ${hBox}
            </div>
          </div>
        `;
      }
      return layoutHtml;
    }).join("");
    
    // Inject all slides vertically
    elSlideContainer.innerHTML = `<div class="mobile-reader-flow" style="display: flex; flex-direction: column; width: 100%; height: auto; padding: 1rem 0 3rem;">${slidesHtml}</div>`;
    
    // Render math on the whole container
    renderMath(elSlideContainer);
    
    // Render icons
    lucide.createIcons();
  }

  // --- Launch PPT Presentation Player ---
  function startPresentation(deck) {
    activeDeck = deck;
    activeSlideIndex = 0;
    
    elPlayerTitle.textContent = deck.title;
    elPlayer.style.display = "flex";
    elPlayer.focus();
    
    // Auto reset autoplay state
    isAutoplayActive = false;
    updateAutoplayIcon();
    
    // Check if on mobile view (width <= 768px)
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      elPlayer.classList.add("mobile-reader");
      renderMobileSlides();
    } else {
      elPlayer.classList.remove("mobile-reader");
      const elPlayerControls = document.getElementById("player-controls");
      if (elPlayerControls) elPlayerControls.style.display = "flex";
      renderSlide();
    }
    
    // Broadcast active presentation states to mother Luna Hub
    broadcastToParent("iframe_scroll", {
      scrollY: 0,
      direction: "up"
    });

    // Refresh Vercount statistics (as per developer guide)
    if (window.vercount && typeof window.vercount.fetch === "function") {
      window.vercount.fetch();
    }
  }

  // --- Render Current Slide on Stage ---
  function renderSlide() {
    if (!activeDeck || activeDeck.slides.length === 0) return;
    
    const slide = activeDeck.slides[activeSlideIndex];
    elSlideNumber.textContent = `${activeSlideIndex + 1} / ${activeDeck.slides.length}`;
    
    // Update top progress bar width
    const progressPercent = ((activeSlideIndex + 1) / activeDeck.slides.length) * 100;
    
    // Renders the HTML structure based on target layout
    let layoutHtml = "";
    
    if (slide.layout === "cover") {
      layoutHtml = `
        <div class="slide-card layout-cover" id="active-slide-card">
          <div class="progress-line-container"><div class="progress-line-bar" style="width: ${progressPercent}%"></div></div>
          <h1>${parseMarkdownInline(slide.title)}</h1>
          <p>${parseMarkdownInline(slide.subtitle).replace(/\n/g, "<br>")}</p>
        </div>
      `;
    } else if (slide.layout === "grid") {
      const gridItemsHtml = slide.items.map(item => `
        <div class="grid-slide-card">
          <div class="grid-slide-card-header">
            <span class="grid-card-icon">${item.icon || '⚡'}</span>
            <span class="grid-card-cat">${parseMarkdownInline(item.category)}</span>
          </div>
          <div class="grid-card-tools">${parseMarkdownInline(item.tools)}</div>
          <div class="grid-card-desc">${parseMarkdownInline(item.desc)}</div>
        </div>
      `).join("");
      
      layoutHtml = `
        <div class="slide-card" id="active-slide-card">
          <div class="progress-line-container"><div class="progress-line-bar" style="width: ${progressPercent}%"></div></div>
          <h2 class="slide-title">${parseMarkdownInline(slide.title)}</h2>
          <div class="layout-grid-container">
            ${gridItemsHtml}
          </div>
        </div>
      `;
    } else if (slide.layout === "split") {
      const codeHeader = slide.tools ? `適用工具: ${slide.tools}` : "推薦系統 Prompt 參數";
      layoutHtml = `
        <div class="slide-card" id="active-slide-card">
          <div class="progress-line-container"><div class="progress-line-bar" style="width: ${progressPercent}%"></div></div>
          <h2 class="slide-title">${parseMarkdownInline(slide.title)}</h2>
          <div class="layout-split-container">
            <div class="split-left">
              <div class="subtitle">${parseMarkdownInline(slide.subtitle)}</div>
              <div class="highlight">${parseMarkdownInline(slide.highlight)}</div>
              ${slide.content ? `<div class="split-content-body">${slide.content}</div>` : ""}
              <div class="tools-tag">最佳實戰工具: <span>${parseMarkdownInline(slide.tools)}</span></div>
            </div>
            <div class="prompt-sandbox">
              <div class="sandbox-header">
                <div class="sandbox-dots">
                  <div class="sandbox-dot red"></div>
                  <div class="sandbox-dot yellow"></div>
                  <div class="sandbox-dot green"></div>
                </div>
                <div class="sandbox-title">${parseMarkdownInline(codeHeader)}</div>
                <button class="prompt-copy-btn" id="btn-copy-prompt">
                  <i data-lucide="copy" style="width:12px; height:12px;"></i>
                  複製 Prompt
                </button>
              </div>
              <div class="sandbox-body" id="prompt-code">${slide.prompt}</div>
            </div>
          </div>
        </div>
      `;
    } else if (slide.layout === "list") {
      const itemsHtml = slide.items.map((item, index) => `
        <div class="list-slide-item">
          <div class="list-item-bullet">${index + 1}</div>
          <div>${parseMarkdownInline(item)}</div>
        </div>
      `).join("");
      
      layoutHtml = `
        <div class="slide-card" id="active-slide-card">
          <div class="progress-line-container"><div class="progress-line-bar" style="width: ${progressPercent}%"></div></div>
          <h2 class="slide-title">${parseMarkdownInline(slide.title)}</h2>
          <div class="layout-list-container">
            ${itemsHtml}
          </div>
        </div>
      `;
    } else {
      // Default standard Text slide layout
      const hBox = slide.highlight ? `<div class="highlight-box"><i data-lucide="info" style="width: 18px; height: 18px;"></i> ${parseMarkdownInline(slide.highlight)}</div>` : "";
      layoutHtml = `
        <div class="slide-card layout-text" id="active-slide-card">
          <div class="progress-line-container"><div class="progress-line-bar" style="width: ${progressPercent}%"></div></div>
          <h2 class="slide-title">${parseMarkdownInline(slide.title)}</h2>
          <div class="layout-text-content">
            <p>${parseMarkdownInline(slide.content)}</p>
            ${hBox}
          </div>
        </div>
      `;
    }
    
    // Remove old slides & apply 3D visual transitions
    const oldContainer = elSlideContainer.firstElementChild;
    
    if (oldContainer) {
      // Setup entrance and exit css state classes
      oldContainer.classList.add(
        activeTransition === "slide" ? (lastDirection === "down" ? "slide-right-exit" : "slide-left-exit") : `transition-${activeTransition}-exit`
      );
      
      setTimeout(() => {
        elSlideContainer.innerHTML = layoutHtml;
        const newCard = elSlideContainer.firstElementChild;
        
        // Render LaTeX equations using KaTeX
        renderMath(newCard);
        
        newCard.classList.add(
          activeTransition === "slide" ? (lastDirection === "down" ? "slide-right-enter" : "slide-left-enter") : `transition-${activeTransition}-enter`
        );
        
        // Bind Copy listener inside slide DOM
        const copyBtn = document.getElementById("btn-copy-prompt");
        if (copyBtn) {
          copyBtn.addEventListener("click", copyPromptContent);
        }
        
        // Double tap/click on PPT Card to advance to next slide! (Requested by user)
        newCard.addEventListener("dblclick", (e) => {
          // If clicked inside the prompt sandbox or copy button, ignore slide advancement
          if (e.target.closest(".prompt-sandbox") || e.target.closest(".prompt-copy-btn")) {
            return;
          }
          nextSlide();
        });
        
        // Flush Lucide Icons in slide
        lucide.createIcons();
        
        // Trigger exit animations
        requestAnimationFrame(() => {
          setTimeout(() => {
            newCard.classList.remove(
              "slide-right-enter", "slide-left-enter",
              `transition-${activeTransition}-enter`
            );
          }, 50);
        });
      }, 250); // Dynamic transition timings
    } else {
      elSlideContainer.innerHTML = layoutHtml;
      const newCard = elSlideContainer.firstElementChild;
      
      // Render LaTeX equations using KaTeX
      renderMath(newCard);
      
      const copyBtn = document.getElementById("btn-copy-prompt");
      if (copyBtn) {
        copyBtn.addEventListener("click", copyPromptContent);
      }
      
      newCard.addEventListener("dblclick", (e) => {
        if (e.target.closest(".prompt-sandbox") || e.target.closest(".prompt-copy-btn")) {
          return;
        }
        nextSlide();
      });
      
      lucide.createIcons();
    }
  }

  // --- Copy Prompt to Clipboard Action ---
  function copyPromptContent() {
    const promptText = document.getElementById("prompt-code").textContent;
    navigator.clipboard.writeText(promptText).then(() => {
      showToast("已成功複製 Prompt 到剪貼簿！");
    }).catch(err => {
      console.error("Could not copy prompt text: ", err);
    });
  }

  // --- Show Interactive Toast Alert ---
  function showToast(text) {
    elToastText.textContent = text;
    elToastAlert.classList.add("show");
    setTimeout(() => {
      elToastAlert.classList.remove("show");
    }, 2500);
  }

  // --- Slide Navigations ---
  function nextSlide() {
    if (!activeDeck) return;
    if (activeSlideIndex < activeDeck.slides.length - 1) {
      lastDirection = "down";
      activeSlideIndex++;
      renderSlide();
      
      // Iframe sync
      broadcastToParent("iframe_scroll", {
        scrollY: activeSlideIndex * 100,
        direction: "down"
      });
    } else {
      // Loop back to beginning
      lastDirection = "down";
      activeSlideIndex = 0;
      renderSlide();
      
      broadcastToParent("iframe_scroll", {
        scrollY: 0,
        direction: "down"
      });
    }
  }

  function prevSlide() {
    if (!activeDeck) return;
    if (activeSlideIndex > 0) {
      lastDirection = "up";
      activeSlideIndex--;
      renderSlide();
      
      broadcastToParent("iframe_scroll", {
        scrollY: activeSlideIndex * 100,
        direction: "up"
      });
    }
  }

  function exitPlayer() {
    // Clear autoplay
    if (isAutoplayActive) {
      toggleAutoplay();
    }
    elPlayer.style.display = "none";
    elPlayer.classList.remove("mobile-reader");
    activeDeck = null;

    // Refresh Vercount statistics
    if (window.vercount && typeof window.vercount.fetch === "function") {
      window.vercount.fetch();
    }

    // De-focus
    document.body.focus();
  }

  // --- Autoplay Timers ---
  function toggleAutoplay() {
    isAutoplayActive = !isAutoplayActive;
    updateAutoplayIcon();
    
    if (isAutoplayActive) {
      startAutoplayTimer();
    } else {
      clearInterval(autoplayTimer);
    }
  }

  function startAutoplayTimer() {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(() => {
      nextSlide();
    }, autoplaySpeed);
  }

  function updateAutoplayIcon() {
    if (isAutoplayActive) {
      elAutoplayIcon.setAttribute("data-lucide", "pause");
      elBtnToggleAutoplay.classList.add("active");
    } else {
      elAutoplayIcon.setAttribute("data-lucide", "play");
      elBtnToggleAutoplay.classList.remove("active");
    }
    lucide.createIcons();
  }

  // --- Fullscreen Manager ---
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      elPlayer.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  }

  // --- Iframe Protocol Broadcaster (postMessage) ---
  function broadcastToParent(type, data) {
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({
        type: type,
        ...data
      }, "*");
    }
  }

  // --- Dynamic Keyboard Listener ---
  function handleKeyboard(e) {
    if (elPlayer.style.display === "none") return;
    
    const key = e.key.toLowerCase();
    
    if (key === "arrowright" || e.key === " " || key === "enter") {
      e.preventDefault();
      nextSlide();
    } else if (key === "arrowleft" || key === "backspace") {
      e.preventDefault();
      prevSlide();
    } else if (e.key === "Escape") {
      e.preventDefault();
      exitPlayer();
    } else if (key === "f") {
      e.preventDefault();
      toggleFullscreen();
    } else if (key === "l") {
      e.preventDefault();
      toggleLaserPointer();
    } else if (key === "p") {
      e.preventDefault();
      toggleAutoplay();
    } else if (e.key === "?") {
      e.preventDefault();
      toggleShortcutsModal();
    }
  }

  // --- Laser Pointer Cursor Toggles ---
  function toggleLaserPointer() {
    isLaserActive = !isLaserActive;
    if (isLaserActive) {
      elBtnToggleLaser.classList.add("active");
      elLaserPointer.classList.add("active");
      document.body.style.cursor = "none";
      elPlayer.style.cursor = "none";
    } else {
      elBtnToggleLaser.classList.remove("active");
      elLaserPointer.classList.remove("active");
      document.body.style.cursor = "default";
      elPlayer.style.cursor = "default";
    }
  }

  // --- Laser Elastic Trailing Position ---
  let laserX = 0, laserY = 0;
  let targetX = 0, targetY = 0;
  
  function updateLaserPosition() {
    if (!isLaserActive) {
      requestAnimationFrame(updateLaserPosition);
      return;
    }
    
    // Dampening drag calculation
    const dx = targetX - laserX;
    const dy = targetY - laserY;
    laserX += dx * 0.15;
    laserY += dy * 0.15;
    
    elLaserPointer.style.left = `${laserX}px`;
    elLaserPointer.style.top = `${laserY}px`;
    
    requestAnimationFrame(updateLaserPosition);
  }

  function handleMouseMove(e) {
    if (!isLaserActive) return;
    targetX = e.clientX;
    targetY = e.clientY;
  }

  function toggleShortcutsModal() {
    const isVisible = elShortcutsModal.style.display === "flex";
    elShortcutsModal.style.display = isVisible ? "none" : "flex";
  }

  // --- Demo Markdown Presentation Loader ---
  function loadDemoMarkdown() {
    const demoMd = `# 2026 AI 技術分享與演進
## 副標題: 探討最新 LLM 核心架構
這是一份由系統生成的 PPT 大綱。您可以將任何 Markdown 檔案放進此處！

---

## 2026 主流 AI 核心分工表
| **工作類別** | **核心推薦 AI** | **優勢分析** |
| 程式代碼開發 | Cursor 3 / Claude 4.5 | 精準重構，強大 Agent 重構能力。 |
| 長文本分析 | Gemini 3.1 Pro | 超過 100 萬 Token 脈絡能力，資料對齊極優。 |
| 跨平台自動化工作流 | n8n / Manus | 全域串接，快速搭建自動化 Agent。 |

---

## AI 程式開發實戰
### Cursor 3 與 AI 智能編程
* 程式開發現在多半是由「AI 負責實作，人類負責審查」
* 優化系統必須設定明確的 Prompts 框架

* **適用 AI：** Cursor 3
* **使用情境：** 開發混合檢索 (Hybrid Search) 架構。
> Role: You are a senior backend architect.
> Task: Implement Hybrid Search algorithm on vectors.
> Constraints: Dense vector weights 0.7, lexical weights 0.3.

---

## 精進您的工作流
💡 進階實戰建議
- **給予充分 Context**：定義明確角色與規則約束。
- **設定 Reasonable Budgets**：遇到高難度任務時調用思考時間。
- **邊界防範**：防止 AI Agent 擴大修改無關檔案。`;
    
    elCustomTitle.value = "2026 AI 技術分享與演進";
    elCustomMarkdown.value = demoMd;
    showToast("已成功載入 Demo Markdown 大綱範本！");
  }

  // --- Drag and Drop File Parser ---
  function handleFileDrop(e) {
    e.preventDefault();
    elFileDropZone.classList.remove("dragover");
    
    const file = e.dataTransfer.files[0];
    if (file) {
      parseUploadedFile(file);
    }
  }

  function parseUploadedFile(file) {
    if (!file.name.endsWith(".md") && !file.name.endsWith(".txt")) {
      showToast("格式錯誤！僅支援 Markdown (.md) 或 文字檔 (.txt)");
      return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
      elCustomTitle.value = file.name.replace(/\.[^/.]+$/, "");
      elCustomMarkdown.value = e.target.result;
      showToast(`已成功載入檔案: ${file.name}`);
    };
    reader.readAsText(file);
  }

  // --- Dynamic Presentation Deck Creation ---
  function generatePptFromCustomMarkdown() {
    const title = elCustomTitle.value.trim() || "自訂技術分享簡報";
    const md = elCustomMarkdown.value.trim();
    
    if (!md) {
      showToast("錯誤：簡報 Markdown 內容不能為空！");
      return;
    }
    
    try {
      const slides = parseMarkdownToSlides(md);
      
      if (slides.length === 0) {
        showToast("錯誤：無法成功解析投影片，請檢查格式。");
        return;
      }
      
      const newDeckId = `custom-deck-${Date.now()}`;
      const newDeck = {
        id: newDeckId,
        title: title,
        description: `使用自訂 Markdown 動態生成的華麗簡報大綱，共計 ${slides.length} 頁。`,
        category: "custom",
        author: "訪客 (動態生成)",
        date: new Date().toISOString().split('T')[0],
        tags: ["Custom", "Dynamic", "Markdown"],
        slides: slides
      };
      
      // Add to decks list
      decks.unshift(newDeck);
      renderDecks();
      
      // Switch back to decks tab and start playing instantly
      switchTab("decks");
      startPresentation(newDeck);
      
    } catch (err) {
      console.error(err);
      showToast("解析失敗，請確認 Markdown 格式是否包含分隔符 ---");
    }
  }

  // --- Setup Event Listeners ---
  function setupEventHandlers() {
    // Header Links
    document.getElementById("brand-link").addEventListener("click", (e) => {
      e.preventDefault();
      switchTab("decks");
    });
    
    elBtnShowDecks.addEventListener("click", () => switchTab("decks"));
    elBtnShowCreator.addEventListener("click", () => switchTab("creator"));
    
    // Tab Buttons
    elTabDecks.addEventListener("click", () => switchTab("decks"));
    elTabCreator.addEventListener("click", () => switchTab("creator"));
    
    // Custom Creator Actions
    elBtnLoadDemoMd.addEventListener("click", loadDemoMarkdown);
    elBtnGeneratePpt.addEventListener("click", generatePptFromCustomMarkdown);
    
    // Drag & Drop Handlers
    elFileDropZone.addEventListener("dragover", (e) => {
      e.preventDefault();
      elFileDropZone.classList.add("dragover");
    });
    elFileDropZone.addEventListener("dragleave", () => {
      elFileDropZone.classList.remove("dragover");
    });
    elFileDropZone.addEventListener("drop", handleFileDrop);
    elFileDropZone.addEventListener("click", () => elFileInput.click());
    
    elFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        parseUploadedFile(file);
      }
    });
    
    // PPT Player Controls
    elBtnExitPlayer.addEventListener("click", exitPlayer);
    elBtnPrevSlide.addEventListener("click", prevSlide);
    elBtnNextSlide.addEventListener("click", nextSlide);
    
    // Autoplay controllers
    elBtnToggleAutoplay.addEventListener("click", toggleAutoplay);
    elSelectAutoplaySpeed.addEventListener("change", (e) => {
      autoplaySpeed = parseInt(e.target.value);
      if (isAutoplayActive) {
        startAutoplayTimer();
      }
    });
    
    // Transition selectors
    elSelectTransition.addEventListener("change", (e) => {
      activeTransition = e.target.value;
    });
    
    // Extra tools
    elBtnToggleLaser.addEventListener("click", toggleLaserPointer);
    elBtnToggleFullscreen.addEventListener("click", toggleFullscreen);
    elBtnShowShortcuts.addEventListener("click", toggleShortcutsModal);
    
    elBtnCloseShortcuts.addEventListener("click", toggleShortcutsModal);
    elShortcutsModal.addEventListener("click", (e) => {
      if (e.target === elShortcutsModal) toggleShortcutsModal();
    });
    
    // Global Listeners
    document.addEventListener("keydown", handleKeyboard);
    window.addEventListener("mousemove", handleMouseMove);
    
    // Track fullscreen exit changes
    document.addEventListener("fullscreenchange", () => {
      if (!document.fullscreenElement) {
        elBtnToggleFullscreen.classList.remove("active");
        elPlayer.classList.remove("fullscreen-mode");
      } else {
        elBtnToggleFullscreen.classList.add("active");
        elPlayer.classList.add("fullscreen-mode");
      }
    });
    
    // Run laser drawing loops
    requestAnimationFrame(updateLaserPosition);
  }

  // --- Run application ---
  init();
});
