// Core Application Controller for Luna AI PPT Hub
document.addEventListener("DOMContentLoaded", () => {
  // --- State Variables ---
  let decks = [...PRELOADED_DECKS];
  let activeDeck = null;
  let activeSlideIndex = 0;
  let activeCategory = "all";
  let activeSubCategory = "all";
  
  let autoplayTimer = null;
  let isAutoplayActive = false;
  let autoplaySpeed = 5000;
  
  let isLaserActive = false;
  let isMobileLaserActive = false;
  let lastDirection = "down";
  let activeTransition = "flip-3d";
  
  // --- Remote Control MQTT State ---
  let mqttClient = null;
  let remoteRoomId = null;
  let isRemoteConnected = false;
  let isMobileControllerMode = false;

  // --- DOM Elements Cache ---
  const elDecksGrid = document.getElementById("decks-grid");
  const elDecksPanel = document.getElementById("decks-panel");
  const elCreatorPanel = document.getElementById("creator-panel");
  const elSubCategoryContainer = document.getElementById("sub-category-filters-container");
  const elSubCategoryFilters = document.getElementById("sub-category-filters");
  
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
    // Handle images: ![alt](url)
    let formatted = text.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" class="slide-img" />');
    // Handle inline code: `code`
    formatted = formatted.replace(/`(.*?)`/g, '<code>$1</code>');
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
    // 偵測是否為手機遙控器模式
    const urlParams = new URLSearchParams(window.location.search);
    const roomIdParam = urlParams.get("room");
    
    if (roomIdParam) {
      isMobileControllerMode = true;
      initMobileController(roomIdParam);
      return;
    }

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
      "calculus-7-1-integration-by-parts": typeof DECK_CALCULUS_7_1_MD !== "undefined" ? DECK_CALCULUS_7_1_MD : null,
      "calculus-7-2-trig-integrals":     typeof DECK_CALCULUS_7_2_MD !== "undefined" ? DECK_CALCULUS_7_2_MD : null,
      "calculus-7-3-trig-substitution":  typeof DECK_CALCULUS_7_3_MD !== "undefined" ? DECK_CALCULUS_7_3_MD : null,
      "calculus-7-4-partial-fractions": typeof DECK_CALCULUS_7_4_MD !== "undefined" ? DECK_CALCULUS_7_4_MD : null,
      "calculus-7-5-integration-strategy": typeof DECK_CALCULUS_7_5_MD !== "undefined" ? DECK_CALCULUS_7_5_MD : null,
      "calculus-7-6-integration-tables": typeof DECK_CALCULUS_7_6_MD !== "undefined" ? DECK_CALCULUS_7_6_MD : null,
      "calculus-7-7-approximate-integration": typeof DECK_CALCULUS_7_7_MD !== "undefined" ? DECK_CALCULUS_7_7_MD : null,
      "calculus-7-8-improper-integrals": typeof DECK_CALCULUS_7_8_MD !== "undefined" ? DECK_CALCULUS_7_8_MD : null,
      "calculus-8-1-arc-length":         typeof DECK_CALCULUS_8_1_MD !== "undefined" ? DECK_CALCULUS_8_1_MD : null,
      "calculus-8-2-surface-area":       typeof DECK_CALCULUS_8_2_MD !== "undefined" ? DECK_CALCULUS_8_2_MD : null,
      "calculus-8-3-physics-engineering": typeof DECK_CALCULUS_8_3_MD !== "undefined" ? DECK_CALCULUS_8_3_MD : null,
      "calculus-8-4-economics-biology": typeof DECK_CALCULUS_8_4_MD !== "undefined" ? DECK_CALCULUS_8_4_MD : null,
      "calculus-8-5-probability":       typeof DECK_CALCULUS_8_5_MD !== "undefined" ? DECK_CALCULUS_8_5_MD : null,
      "calculus-ch8-overview":           typeof DECK_CALCULUS_CH8_INTRO_MD !== "undefined" ? DECK_CALCULUS_CH8_INTRO_MD : null,
      "calculus-9-1-modeling-de":       typeof DECK_CALCULUS_9_1_MD !== "undefined" ? DECK_CALCULUS_9_1_MD : null,
      "calculus-9-2-direction-fields":  typeof DECK_CALCULUS_9_2_MD !== "undefined" ? DECK_CALCULUS_9_2_MD : null,
      "calculus-9-3-separable-eq":      typeof DECK_CALCULUS_9_3_MD !== "undefined" ? DECK_CALCULUS_9_3_MD : null,
      "calculus-9-4-population-models": typeof DECK_CALCULUS_9_4_MD !== "undefined" ? DECK_CALCULUS_9_4_MD : null,
      "calculus-9-5-linear-equations":  typeof DECK_CALCULUS_9_5_MD !== "undefined" ? DECK_CALCULUS_9_5_MD : null,
      "calculus-9-6-predator-prey":     typeof DECK_CALCULUS_9_6_MD !== "undefined" ? DECK_CALCULUS_9_6_MD : null,
      "calculus-ch9-overview":           typeof DECK_CALCULUS_CH9_INTRO_MD !== "undefined" ? DECK_CALCULUS_CH9_INTRO_MD : null,
      "calculus-ch10-overview":          typeof DECK_CALCULUS_CH10_INTRO_MD !== "undefined" ? DECK_CALCULUS_CH10_INTRO_MD : null,
      "calculus-ch11-overview":          typeof DECK_CALCULUS_CH11_INTRO_MD !== "undefined" ? DECK_CALCULUS_CH11_INTRO_MD : null,
      "calculus-ch12-overview":          typeof DECK_CALCULUS_CH12_INTRO_MD !== "undefined" ? DECK_CALCULUS_CH12_INTRO_MD : null,
      "calculus-ch13-overview":          typeof DECK_CALCULUS_CH13_INTRO_MD !== "undefined" ? DECK_CALCULUS_CH13_INTRO_MD : null,
      "calculus-ch14-overview":          typeof DECK_CALCULUS_CH14_INTRO_MD !== "undefined" ? DECK_CALCULUS_CH14_INTRO_MD : null,
      "calculus-ch15-overview":          typeof DECK_CALCULUS_CH15_INTRO_MD !== "undefined" ? DECK_CALCULUS_CH15_INTRO_MD : null,
      "calculus-ch16-overview":          typeof DECK_CALCULUS_CH16_INTRO_MD !== "undefined" ? DECK_CALCULUS_CH16_INTRO_MD : null,
      "calculus-16-1-vector-fields":    typeof DECK_CALCULUS_16_1_MD !== "undefined" ? DECK_CALCULUS_16_1_MD : null,
      "calculus-16-2-line-integrals":   typeof DECK_CALCULUS_16_2_MD !== "undefined" ? DECK_CALCULUS_16_2_MD : null,
      "calculus-16-3-fundamental-theorem-line": typeof DECK_CALCULUS_16_3_MD !== "undefined" ? DECK_CALCULUS_16_3_MD : null,
      "calculus-16-4-greens-theorem":   typeof DECK_CALCULUS_16_4_MD !== "undefined" ? DECK_CALCULUS_16_4_MD : null,
      "calculus-16-5-curl-divergence":  typeof DECK_CALCULUS_16_5_MD !== "undefined" ? DECK_CALCULUS_16_5_MD : null,
      "calculus-16-6-parametric-surfaces": typeof DECK_CALCULUS_16_6_MD !== "undefined" ? DECK_CALCULUS_16_6_MD : null,
      "calculus-16-7-surface-integrals": typeof DECK_CALCULUS_16_7_MD !== "undefined" ? DECK_CALCULUS_16_7_MD : null,
      "calculus-16-8-stokes-theorem":    typeof DECK_CALCULUS_16_8_MD !== "undefined" ? DECK_CALCULUS_16_8_MD : null,
      "calculus-16-9-divergence-theorem": typeof DECK_CALCULUS_16_9_MD !== "undefined" ? DECK_CALCULUS_16_9_MD : null,
      "calculus-15-1-double-integrals-rect": typeof DECK_CALCULUS_15_1_MD !== "undefined" ? DECK_CALCULUS_15_1_MD : null,
      "calculus-15-2-double-integrals-gen": typeof DECK_CALCULUS_15_2_MD !== "undefined" ? DECK_CALCULUS_15_2_MD : null,
      "calculus-15-3-double-integrals-polar": typeof DECK_CALCULUS_15_3_MD !== "undefined" ? DECK_CALCULUS_15_3_MD : null,
      "calculus-15-4-double-integrals-apps": typeof DECK_CALCULUS_15_4_MD !== "undefined" ? DECK_CALCULUS_15_4_MD : null,
      "calculus-15-5-surface-area":    typeof DECK_CALCULUS_15_5_MD !== "undefined" ? DECK_CALCULUS_15_5_MD : null,
      "calculus-15-6-triple-integrals": typeof DECK_CALCULUS_15_6_MD !== "undefined" ? DECK_CALCULUS_15_6_MD : null,
      "calculus-15-7-triple-integrals-cyl": typeof DECK_CALCULUS_15_7_MD !== "undefined" ? DECK_CALCULUS_15_7_MD : null,
      "calculus-15-8-triple-integrals-sph": typeof DECK_CALCULUS_15_8_MD !== "undefined" ? DECK_CALCULUS_15_8_MD : null,
      "calculus-15-9-change-variables": typeof DECK_CALCULUS_15_9_MD !== "undefined" ? DECK_CALCULUS_15_9_MD : null,
      "calculus-14-1-several-variables": typeof DECK_CALCULUS_14_1_MD !== "undefined" ? DECK_CALCULUS_14_1_MD : null,
      "calculus-14-2-limits-continuity": typeof DECK_CALCULUS_14_2_MD !== "undefined" ? DECK_CALCULUS_14_2_MD : null,
      "calculus-14-3-partial-derivatives": typeof DECK_CALCULUS_14_3_MD !== "undefined" ? DECK_CALCULUS_14_3_MD : null,
      "calculus-14-4-tangent-planes":    typeof DECK_CALCULUS_14_4_MD !== "undefined" ? DECK_CALCULUS_14_4_MD : null,
      "calculus-14-5-chain-rule":       typeof DECK_CALCULUS_14_5_MD !== "undefined" ? DECK_CALCULUS_14_5_MD : null,
      "calculus-14-6-directional-derivatives": typeof DECK_CALCULUS_14_6_MD !== "undefined" ? DECK_CALCULUS_14_6_MD : null,
      "calculus-14-7-max-min":          typeof DECK_CALCULUS_14_7_MD !== "undefined" ? DECK_CALCULUS_14_7_MD : null,
      "calculus-14-8-lagrange-multipliers": typeof DECK_CALCULUS_14_8_MD !== "undefined" ? DECK_CALCULUS_14_8_MD : null,
      "calculus-13-1-vector-functions": typeof DECK_CALCULUS_13_1_MD !== "undefined" ? DECK_CALCULUS_13_1_MD : null,
      "calculus-13-2-vector-derivatives": typeof DECK_CALCULUS_13_2_MD !== "undefined" ? DECK_CALCULUS_13_2_MD : null,
      "calculus-13-3-arc-length":       typeof DECK_CALCULUS_13_3_MD !== "undefined" ? DECK_CALCULUS_13_3_MD : null,
      "calculus-13-4-motion-space":     typeof DECK_CALCULUS_13_4_MD !== "undefined" ? DECK_CALCULUS_13_4_MD : null,
      "calculus-12-1-3d-coords":        typeof DECK_CALCULUS_12_1_MD !== "undefined" ? DECK_CALCULUS_12_1_MD : null,
      "calculus-12-2-vectors":          typeof DECK_CALCULUS_12_2_MD !== "undefined" ? DECK_CALCULUS_12_2_MD : null,
      "calculus-12-3-dot-product":      typeof DECK_CALCULUS_12_3_MD !== "undefined" ? DECK_CALCULUS_12_3_MD : null,
      "calculus-12-4-cross-product":    typeof DECK_CALCULUS_12_4_MD !== "undefined" ? DECK_CALCULUS_12_4_MD : null,
      "calculus-12-5-lines-planes":     typeof DECK_CALCULUS_12_5_MD !== "undefined" ? DECK_CALCULUS_12_5_MD : null,
      "calculus-12-6-quadric-surfaces": typeof DECK_CALCULUS_12_6_MD !== "undefined" ? DECK_CALCULUS_12_6_MD : null,
      "calculus-11-1-sequences":        typeof DECK_CALCULUS_11_1_MD !== "undefined" ? DECK_CALCULUS_11_1_MD : null,
      "calculus-11-2-series":           typeof DECK_CALCULUS_11_2_MD !== "undefined" ? DECK_CALCULUS_11_2_MD : null,
      "calculus-11-3-integral-test":    typeof DECK_CALCULUS_11_3_MD !== "undefined" ? DECK_CALCULUS_11_3_MD : null,
      "calculus-11-4-comparison-test":  typeof DECK_CALCULUS_11_4_MD !== "undefined" ? DECK_CALCULUS_11_4_MD : null,
      "calculus-11-5-absolute-conv":    typeof DECK_CALCULUS_11_5_MD !== "undefined" ? DECK_CALCULUS_11_5_MD : null,
      "calculus-11-6-ratio-root-test":  typeof DECK_CALCULUS_11_6_MD !== "undefined" ? DECK_CALCULUS_11_6_MD : null,
      "calculus-11-7-testing-strategy": typeof DECK_CALCULUS_11_7_MD !== "undefined" ? DECK_CALCULUS_11_7_MD : null,
      "calculus-11-8-power-series":     typeof DECK_CALCULUS_11_8_MD !== "undefined" ? DECK_CALCULUS_11_8_MD : null,
      "calculus-11-9-function-series":  typeof DECK_CALCULUS_11_9_MD !== "undefined" ? DECK_CALCULUS_11_9_MD : null,
      "calculus-11-10-taylor-series":   typeof DECK_CALCULUS_11_10_MD !== "undefined" ? DECK_CALCULUS_11_10_MD : null,
      "calculus-11-11-applications":   typeof DECK_CALCULUS_11_11_MD !== "undefined" ? DECK_CALCULUS_11_11_MD : null,
      "calculus-10-1-parametric-curves": typeof DECK_CALCULUS_10_1_MD !== "undefined" ? DECK_CALCULUS_10_1_MD : null,
      "calculus-10-2-parametric-calc":   typeof DECK_CALCULUS_10_2_MD !== "undefined" ? DECK_CALCULUS_10_2_MD : null,
      "calculus-10-3-polar-coords":      typeof DECK_CALCULUS_10_3_MD !== "undefined" ? DECK_CALCULUS_10_3_MD : null,
      "calculus-10-4-polar-calc":       typeof DECK_CALCULUS_10_4_MD !== "undefined" ? DECK_CALCULUS_10_4_MD : null,
      "calculus-10-5-conic-sections":   typeof DECK_CALCULUS_10_5_MD !== "undefined" ? DECK_CALCULUS_10_5_MD : null,
      "calculus-10-6-polar-conics":     typeof DECK_CALCULUS_10_6_MD !== "undefined" ? DECK_CALCULUS_10_6_MD : null,
      "calculus-ch7-overview":           typeof DECK_CALCULUS_CH7_INTRO_MD !== "undefined" ? DECK_CALCULUS_CH7_INTRO_MD : null,
      "calculus-ch6-overview":           typeof DECK_CALCULUS_CH6_INTRO_MD !== "undefined" ? DECK_CALCULUS_CH6_INTRO_MD : null,
      "calculus-ch5-overview":           typeof DECK_CALCULUS_CH5_INTRO_MD !== "undefined" ? DECK_CALCULUS_CH5_INTRO_MD : null,
      "calculus-ch4-overview":           typeof DECK_CALCULUS_CH4_INTRO_MD !== "undefined" ? DECK_CALCULUS_CH4_INTRO_MD : null,
      "calculus-ch3-overview":           typeof DECK_CALCULUS_CH3_INTRO_MD !== "undefined" ? DECK_CALCULUS_CH3_INTRO_MD : null,
      "calculus-ch2-overview":           typeof DECK_CALCULUS_CH2_INTRO_MD !== "undefined" ? DECK_CALCULUS_CH2_INTRO_MD : null,
      "calculus-ch1-overview":           typeof DECK_CALCULUS_CH1_INTRO_MD !== "undefined" ? DECK_CALCULUS_CH1_INTRO_MD : null,
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
    setupSubCategoryFilters();
    setupEventHandlers();
    lucide.createIcons();
    
    // Broadcast initialization message to parent if nested in an iframe
    broadcastToParent("iframe_init", { url: window.location.href });
  }

  // --- Hub Category Filters ---
  function setupCategoryFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn:not(.sub-filter-btn)");
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        activeCategory = btn.getAttribute("data-category");

        // Handle sub-category container visibility
        if (activeCategory === "calculus") {
          elSubCategoryContainer.style.display = "flex";
          activeSubCategory = "all";
          updateSubCategoryActive();
        } else {
          if (elSubCategoryContainer) elSubCategoryContainer.style.display = "none";
          activeSubCategory = "all";
        }
        
        renderDecks();
      });
    });
  }

  // --- Hub Sub-category Filters (Calculus Chapters) ---
  function setupSubCategoryFilters() {
    if (!elSubCategoryFilters) return;

    const chapters = [
      { id: "all", label: "全部" },
      { id: "calculus-ch1", label: "Ch1" },
      { id: "calculus-ch2", label: "Ch2" },
      { id: "calculus-ch3", label: "Ch3" },
      { id: "calculus-ch4", label: "Ch4" },
      { id: "calculus-ch5", label: "Ch5" },
      { id: "calculus-ch6", label: "Ch6" },
      { id: "calculus-ch7", label: "Ch7" },
      { id: "calculus-ch8", label: "Ch8" },
      { id: "calculus-ch9", label: "Ch9" },
      { id: "calculus-ch10", label: "Ch10" },
      { id: "calculus-ch11", label: "Ch11" },
      { id: "calculus-ch12", label: "Ch12" },
      { id: "calculus-ch13", label: "Ch13" },
      { id: "calculus-ch14", label: "Ch14" },
      { id: "calculus-ch15", label: "Ch15" },
      { id: "calculus-ch16", label: "Ch16" }
    ];

    elSubCategoryFilters.innerHTML = chapters.map(ch => `
      <button class="filter-btn sub-filter-btn ${ch.id === 'all' ? 'active' : ''}" data-sub-category="${ch.id}" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">
        ${ch.label}
      </button>
    `).join("");

    const subFilterBtns = elSubCategoryFilters.querySelectorAll(".sub-filter-btn");
    subFilterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        subFilterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeSubCategory = btn.getAttribute("data-sub-category");
        renderDecks();
      });
    });
  }

  function updateSubCategoryActive() {
    if (!elSubCategoryFilters) return;
    const subFilterBtns = elSubCategoryFilters.querySelectorAll(".sub-filter-btn");
    subFilterBtns.forEach(btn => {
      if (btn.getAttribute("data-sub-category") === activeSubCategory) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
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
      "calculus-ch1": "微積分 Ch1",
      "calculus-ch2": "微積分 Ch2",
      "calculus-ch3": "微積分 Ch3",
      "calculus-ch4": "微積分 Ch4",
      "calculus-ch5": "微積分 Ch5",
      "calculus-ch6": "微積分 Ch6",
      "calculus-ch7": "微積分 Ch7",
      "calculus-ch8": "微積分 Ch8",
      "calculus-ch9": "微積分 Ch9",
      "calculus-ch10": "微積分 Ch10",
      "calculus-ch11": "微積分 Ch11",
      "calculus-ch12": "微積分 Ch12",
      "calculus-ch13": "微積分 Ch13",
      "calculus-ch14": "微積分 Ch14",
      "calculus-ch15": "微積分 Ch15",
      "calculus-ch16": "微積分 Ch16",
      "custom": "自訂簡報"
    };
    
    // Filter decks by category and sub-category
    const filteredDecks = activeCategory === "all"
      ? decks
      : activeCategory === "calculus"
        ? (activeSubCategory === "all" 
            ? decks.filter(deck => deck.category.startsWith("calculus"))
            : decks.filter(deck => deck.category === activeSubCategory))
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
        let finalHighlight = highlight;
        let finalContent = content.trim();
        if (!finalHighlight) {
          finalHighlight = finalContent;
          finalContent = "";
        }
        slides.push({
          layout: "split",
          title: title || "深度工作流",
          subtitle: subtitle || "精準實戰場景",
          highlight: finalHighlight,
          content: finalContent,
          items: listItems,
          tools: tools || "專屬 AI",
          prompt: prompt.trim()
        });
      } else if (layout === "list") {
        slides.push({
          layout: "list",
          title: title || "核心原則與整理",
          subtitle: subtitle || "",
          items: listItems,
          content: content.trim()
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
                ${slide.highlight ? `<div class="highlight">${parseMarkdownInline(slide.highlight)}</div>` : ""}
                ${slide.content ? `<div class="split-content-body">${slide.content}</div>` : ""}
                ${slide.items && slide.items.length > 0 ? `
                  <div class="split-list-body" style="margin-top: 1rem; display: flex; flex-direction: column; gap: 0.8rem;">
                    ${slide.items.map((item, idx) => `
                      <div class="list-slide-item" style="padding: 0.75rem 1rem; font-size: 0.95rem; gap: 0.8rem;">
                        <div class="list-item-bullet" style="width: 1.25rem; height: 1.25rem; min-width: 1.25rem; font-size: 0.75rem;">${idx + 1}</div>
                        <div style="flex: 1;">${parseMarkdownInline(item)}</div>
                      </div>
                    `).join("")}
                  </div>
                ` : ""}
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
            ${slide.content ? `<div class="list-content-extra" style="margin-bottom: 1.25rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; white-space: pre-line;">${parseMarkdownInline(slide.content)}</div>` : ""}
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
    broadcastToParent("iframe_presentation_start", {
      deck: deck
    });

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
              ${slide.highlight ? `<div class="highlight">${parseMarkdownInline(slide.highlight)}</div>` : ""}
              ${slide.content ? `<div class="split-content-body">${slide.content}</div>` : ""}
              ${slide.items && slide.items.length > 0 ? `
                <div class="split-list-body" style="margin-top: 1rem; display: flex; flex-direction: column; gap: 0.8rem;">
                  ${slide.items.map((item, idx) => `
                    <div class="list-slide-item" style="padding: 0.75rem 1rem; font-size: 0.95rem; gap: 0.8rem;">
                      <div class="list-item-bullet" style="width: 1.25rem; height: 1.25rem; min-width: 1.25rem; font-size: 0.75rem;">${idx + 1}</div>
                      <div style="flex: 1;">${parseMarkdownInline(item)}</div>
                    </div>
                  `).join("")}
                </div>
              ` : ""}
              ${slide.tools ? `<div class="tools-tag">最佳實戰工具: <span>${parseMarkdownInline(slide.tools)}</span></div>` : ""}
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
          ${slide.content ? `<div class="list-content-extra" style="margin-bottom: 1.5rem; font-size: 1.15rem; color: var(--text-secondary); line-height: 1.7; white-space: pre-line;">${parseMarkdownInline(slide.content)}</div>` : ""}
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
          <div class="layout-text-content" style="white-space: pre-line;">
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

    // 同步狀態至手機遙控端
    sendSlideStatusToRemote();
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
    
    // Reset laser pointer states
    isLaserActive = false;
    isMobileLaserActive = false;
    elLaserPointer.classList.remove("active");
    elBtnToggleLaser.classList.remove("active");
    document.body.style.cursor = "default";
    elPlayer.style.cursor = "default";

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
    } else if (key === "r") {
      e.preventDefault();
      startComputerBroadcaster();
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
      if (!isMobileLaserActive) {
        elLaserPointer.classList.remove("active");
      }
      document.body.style.cursor = "default";
      elPlayer.style.cursor = "default";
    }
  }

  // --- Laser Elastic Trailing Position ---
  let laserX = 0, laserY = 0;
  let targetX = 0, targetY = 0;
  
  function updateLaserPosition() {
    if (!isLaserActive && !isMobileLaserActive) {
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

  // ==========================================================================
  // 📱 手機智慧搖控通訊核心 (MQTT Core)
  // ==========================================================================

  // --- 手機遙控器端邏輯 ---
  function initMobileController(roomId) {
    remoteRoomId = roomId;
    
    // 顯示手機遙控面板
    document.getElementById("mobile-controller-panel").style.display = "flex";
    
    // 隱藏 PC 端首頁主區域與播放器
    const elHubHeader = document.querySelector(".hub-header");
    if (elHubHeader) elHubHeader.style.display = "none";
    const elHubMain = document.querySelector(".hub-main");
    if (elHubMain) elHubMain.style.display = "none";
    const elPptPlayer = document.getElementById("ppt-player");
    if (elPptPlayer) elPptPlayer.style.display = "none";
    
    const elStatusDot = document.getElementById("mobile-indicator-dot");
    const elStatusText = document.getElementById("mobile-indicator-text");
    const elSlideTitle = document.getElementById("mobile-slide-title");
    const elPageText = document.getElementById("mobile-page-text");
    const elProgress = document.getElementById("mobile-progress");
    
    elStatusDot.className = "status-indicator-dot red";
    elStatusText.textContent = "正在連線電腦...";
    elSlideTitle.textContent = "連線中，請稍候...";
    
    // 連線至公共 WSS EMQX Broker
    const brokerUrl = "wss://broker.emqx.io:8084/mqtt";
    const clientId = "luna_mobile_" + Math.random().toString(16).substr(2, 8);
    
    try {
      mqttClient = mqtt.connect(brokerUrl, {
        clientId: clientId,
        clean: true,
        connectTimeout: 4000,
        reconnectPeriod: 2000
      });
      
      mqttClient.on("connect", () => {
        elStatusDot.className = "status-indicator-dot green";
        elStatusText.textContent = "已連線至簡報";
        elSlideTitle.textContent = "等待電腦端選擇並放映投影片...";
        
        // 訂閱狀態更新主題
        mqttClient.subscribe(`luna/ppt/${roomId}/status`, (err) => {
          if (err) console.error("Subscribe status error:", err);
        });
        
        // 發送一個 "hello" 握手信號給電腦端
        mqttClient.publish(`luna/ppt/${roomId}/cmd`, "hello");
      });
      
      mqttClient.on("message", (topic, message) => {
        if (topic === `luna/ppt/${roomId}/status`) {
          try {
            const status = JSON.parse(message.toString());
            elSlideTitle.textContent = status.title || "簡報放映中";
            elPageText.textContent = `Slide ${status.current} / ${status.total}`;
            const pct = (status.current / status.total) * 100;
            elProgress.style.width = `${pct}%`;
            
            // 動態更新下拉跳頁選單
            const elPageSelect = document.getElementById("mobile-page-select");
            if (elPageSelect) {
              if (elPageSelect.options.length !== status.total || elPageSelect.getAttribute("data-total") !== String(status.total)) {
                elPageSelect.innerHTML = "";
                elPageSelect.setAttribute("data-total", status.total);
                for (let i = 0; i < status.total; i++) {
                  const opt = document.createElement("option");
                  opt.value = i;
                  opt.textContent = `第 ${i + 1} 頁`;
                  elPageSelect.appendChild(opt);
                }
              }
              elPageSelect.value = status.current - 1;
            }
          } catch (e) {
            console.error("Parse status JSON error", e);
          }
        }
      });
      
      mqttClient.on("error", (err) => {
        console.error("MQTT Mobile Client Error:", err);
        elStatusDot.className = "status-indicator-dot red";
        elStatusText.textContent = "連線發生錯誤";
      });
      
      mqttClient.on("close", () => {
        elStatusDot.className = "status-indicator-dot red";
        elStatusText.textContent = "連線已中斷";
      });
      
    } catch (err) {
      console.error("Init MQTT error", err);
      elSlideTitle.textContent = "連線服務初始化失敗";
    }
    
    // 綁定按鈕點擊，發送指令，且提供觸控震動回饋！
    function sendCommand(cmd) {
      if (mqttClient && mqttClient.connected) {
        mqttClient.publish(`luna/ppt/${roomId}/cmd`, cmd);
        // HTML5 Vibrate API (震動 15ms)
        if (navigator.vibrate) {
          navigator.vibrate(15);
        }
      } else {
        alert("尚未成功連接電腦，請重新掃碼連線。");
      }
    }
    
    document.getElementById("mobile-prev-btn").addEventListener("click", () => sendCommand("prev"));
    document.getElementById("mobile-next-btn").addEventListener("click", () => sendCommand("next"));
    
    // 綁定下拉選單改變事件，實現跳頁
    const elPageSelect = document.getElementById("mobile-page-select");
    if (elPageSelect) {
      elPageSelect.addEventListener("change", (e) => {
        const index = parseInt(e.target.value);
        sendCommand(`goto:${index}`);
      });
    }
    
    // 斷開連接按鈕
    document.getElementById("mobile-disconnect-btn").addEventListener("click", () => {
      if (mqttClient) {
        mqttClient.end();
      }
      // 清除 url 回到首頁
      window.location.href = window.location.origin + window.location.pathname;
    });
    
    // 💡 左右滑動手勢支援 (Mobile Gestures)
    let touchstartX = 0;
    let touchendX = 0;
    
    document.addEventListener('touchstart', e => {
      // 💡 如果觸摸是在雷射筆觸控板內，則忽視此滑動手勢，避免誤觸翻頁！
      if (e.target.closest('#mobile-laser-touchpad')) return;
      touchstartX = e.changedTouches[0].screenX;
    }, false);
    
    document.addEventListener('touchend', e => {
      // 💡 如果觸摸是在雷射筆觸控板內，則忽視此滑動手勢，避免誤觸翻頁！
      if (e.target.closest('#mobile-laser-touchpad')) return;
      touchendX = e.changedTouches[0].screenX;
      handleGesture();
    }, false);
    
    function handleGesture() {
      const threshold = 50; // 滑動閾值 (pixel)
      if (touchendX < touchstartX - threshold) {
        sendCommand("next");
      }
      if (touchendX > touchstartX + threshold) {
        sendCommand("prev");
      }
    }
    
    // 🔴 虛擬雷射筆觸控板核心邏輯
    const elTouchpad = document.getElementById("mobile-laser-touchpad");
    const elTouchpadDot = document.getElementById("touchpad-dot");
    const elTouchpadStatus = document.getElementById("touchpad-status-text");
    const elTouchpadHint = document.getElementById("touchpad-hint-text");
    let lastLaserTime = 0;

    function handleTouchpadMove(e) {
      // 阻止默認滾動行為，確保拖曳時手機頁面不會隨之滑動
      e.preventDefault();
      
      const rect = elTouchpad.getBoundingClientRect();
      const touch = e.touches[0];
      
      // 計算手指在觸控板內部的百分比坐標 (限制在 0 ~ 1)
      let xRatio = (touch.clientX - rect.left) / rect.width;
      let yRatio = (touch.clientY - rect.top) / rect.height;
      
      xRatio = Math.max(0, Math.min(1, xRatio));
      yRatio = Math.max(0, Math.min(1, yRatio));
      
      // 動態渲染小紅點在手機上的相對坐標，保證手指拖曳時能即時在手機上看見
      const dotX = xRatio * rect.width;
      const dotY = yRatio * rect.height;
      elTouchpadDot.style.left = `${dotX}px`;
      elTouchpadDot.style.top = `${dotY}px`;
      
      // 💡 每 35ms 節流向電腦端發布最新坐標 JSON 封包
      const now = Date.now();
      if (now - lastLaserTime > 35) {
        if (mqttClient && mqttClient.connected) {
          mqttClient.publish(`luna/ppt/${roomId}/cmd`, JSON.stringify({
            type: "laser_move",
            x: xRatio,
            y: yRatio
          }));
        }
        lastLaserTime = now;
      }
    }

    function handleTouchpadEnd() {
      elTouchpad.classList.remove("active");
      elTouchpadStatus.textContent = "手指按住滑動控制紅點";
      elTouchpadStatus.style.color = "";
      if (elTouchpadHint) elTouchpadHint.style.opacity = "";
      
      // 發布結束雷射筆訊號給電腦
      if (mqttClient && mqttClient.connected) {
        mqttClient.publish(`luna/ppt/${roomId}/cmd`, JSON.stringify({
          type: "laser_end"
        }));
      }
    }

    if (elTouchpad) {
      elTouchpad.addEventListener("touchstart", (e) => {
        e.stopPropagation();
        elTouchpad.classList.add("active");
        elTouchpadStatus.textContent = "🔴 雷射筆同步中...";
        elTouchpadStatus.style.color = "#ff0055";
        if (elTouchpadHint) elTouchpadHint.style.opacity = "0.05";
        handleTouchpadMove(e);
      }, { passive: false });

      elTouchpad.addEventListener("touchmove", (e) => {
        e.stopPropagation();
        handleTouchpadMove(e);
      }, { passive: false });

      elTouchpad.addEventListener("touchend", (e) => {
        e.stopPropagation();
        handleTouchpadEnd();
      });

      elTouchpad.addEventListener("touchcancel", (e) => {
        e.stopPropagation();
        handleTouchpadEnd();
      });
    }
  }

  // --- 電腦端遙控發送器邏輯 ---
  function startComputerBroadcaster() {
    const elModal = document.getElementById("remote-modal");
    const elQrContainer = document.getElementById("remote-qrcode");
    const elIndicator = document.getElementById("connection-indicator");
    const elStatusText = document.getElementById("connection-status-text");
    const elRoomCode = document.getElementById("room-code-display");
    
    // 如果已經連線，則僅顯示 Modal，不重新建立連線
    if (mqttClient && mqttClient.connected) {
      elModal.style.display = "flex";
      return;
    }
    
    // 產生隨機房間配對碼 (6位數)
    remoteRoomId = Math.floor(100000 + Math.random() * 900000).toString();
    elRoomCode.textContent = remoteRoomId;
    
    elQrContainer.innerHTML = "";
    elIndicator.className = "status-indicator-dot red";
    elStatusText.textContent = "等待手機掃碼...";
    
    // 生成手機端控制網址
    const remoteUrl = window.location.origin + window.location.pathname + "?room=" + remoteRoomId;
    
    // 使用 qrcode.js 動態渲染 QR Code (純前端，無 API 依賴)
    new QRCode(elQrContainer, {
      text: remoteUrl,
      width: 180,
      height: 180,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M
    });
    
    // 顯示 Modal
    elModal.style.display = "flex";
    
    // 連線至公共 WSS EMQX Broker
    const brokerUrl = "wss://broker.emqx.io:8084/mqtt";
    const clientId = "luna_pc_" + Math.random().toString(16).substr(2, 8);
    
    try {
      mqttClient = mqtt.connect(brokerUrl, {
        clientId: clientId,
        clean: true,
        connectTimeout: 4000,
        reconnectPeriod: 2000
      });
      
      mqttClient.on("connect", () => {
        // 訂閱來自手機端的指令
        mqttClient.subscribe(`luna/ppt/${remoteRoomId}/cmd`, (err) => {
          if (err) console.error("Subscribe command error:", err);
        });
        
        // 如果此時簡報是開啟狀態，主動發送一次當前狀態
        sendSlideStatusToRemote();
      });
      
      mqttClient.on("message", (topic, message) => {
        const cmd = message.toString();
        
        if (topic === `luna/ppt/${remoteRoomId}/cmd`) {
          // 狀態變為已連接！
          elIndicator.className = "status-indicator-dot green";
          elStatusText.textContent = "手機已連接！";
          
          // 💡 判斷是否為 JSON 雷射筆坐標或訊號
          if (cmd.startsWith("{")) {
            try {
              const obj = JSON.parse(cmd);
              if (obj.type === "laser_move") {
                // 啟用手機雷射筆，不影響電腦原本的 system mouse cursor
                isMobileLaserActive = true;
                elLaserPointer.classList.add("active");
                
                // 計算在 PC 視窗大小下的絕對座標，交給緩動動畫平滑追踪！
                targetX = obj.x * elPlayer.clientWidth;
                targetY = obj.y * elPlayer.clientHeight;
              } else if (obj.type === "laser_end") {
                // 當手指拿開時，立刻將電腦端雷射筆隱藏，手感絕佳！
                isMobileLaserActive = false;
                if (!isLaserActive) {
                  elLaserPointer.classList.remove("active");
                }
              }
            } catch (e) {
              console.error("Parse JSON command error:", e);
            }
            return;
          }
          
          if (cmd === "hello") {
            // 手機剛連上，主動給手機發一次目前播放的簡報資訊
            sendSlideStatusToRemote();
            showToast("📱 手機遙控器已連線！");
            
            // 2 秒後自動隱藏 Modal，讓使用者舒服地開始看簡報！
            setTimeout(() => {
              elModal.style.display = "none";
            }, 1800);
          } else if (cmd === "next") {
            nextSlide();
          } else if (cmd === "prev") {
            prevSlide();
          } else if (cmd.startsWith("goto:")) {
            const index = parseInt(cmd.split(":")[1]);
            if (!isNaN(index) && activeDeck && index >= 0 && index < activeDeck.slides.length) {
              lastDirection = index > activeSlideIndex ? "down" : "up";
              activeSlideIndex = index;
              renderSlide();
              
              // Iframe sync
              broadcastToParent("iframe_scroll", {
                scrollY: activeSlideIndex * 100,
                direction: lastDirection
              });
            }
          }
        }
      });
      
      mqttClient.on("error", (err) => {
        console.error("MQTT PC Client Error:", err);
        elIndicator.className = "status-indicator-dot red";
        elStatusText.textContent = "連線失敗，請重試";
      });
      
    } catch (e) {
      console.error("Init PC MQTT error", e);
    }
  }

  // --- 發送當前簡報狀態給手機端 ---
  function sendSlideStatusToRemote() {
    if (!mqttClient || !mqttClient.connected || !remoteRoomId || !activeDeck) return;
    
    const statusPayload = JSON.stringify({
      title: activeDeck.title,
      current: activeSlideIndex + 1,
      total: activeDeck.slides.length
    });
    
    mqttClient.publish(`luna/ppt/${remoteRoomId}/status`, statusPayload, { retain: true });
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
    const elBtnRemoteControl = document.getElementById("btn-remote-control");
    if (elBtnRemoteControl) {
      elBtnRemoteControl.addEventListener("click", startComputerBroadcaster);
    }

    // 父層 P2P postMessage 遙控翻頁監聽器
    window.addEventListener("message", (event) => {
      const msg = event.data;
      if (!msg || typeof msg !== "object") return;
      
      if (msg.action === "sync_start_presentation") {
        if (msg.deck) {
          startPresentation(msg.deck);
        }
      } else if (msg.action === "go_to_slide") {
        // 如果當前還沒播放簡報，但收到翻頁指令，這可能不正常；但在 sync_start_presentation 的保障下，這能更健壯
        if (activeDeck && typeof msg.index === "number" && msg.index >= 0 && msg.index < activeDeck.slides.length) {
          activeSlideIndex = msg.index;
          renderSlide();
        }
      } else if (msg.action === "next_slide") {
        nextSlide();
      } else if (msg.action === "prev_slide") {
        prevSlide();
      }
    });
    
    const elCloseRemoteModalBtn = document.getElementById("close-remote-modal-btn");
    if (elCloseRemoteModalBtn) {
      elCloseRemoteModalBtn.addEventListener("click", () => {
        document.getElementById("remote-modal").style.display = "none";
      });
    }
    
    const elRemoteModal = document.getElementById("remote-modal");
    if (elRemoteModal) {
      elRemoteModal.addEventListener("click", (e) => {
        if (e.target === elRemoteModal) elRemoteModal.style.display = "none";
      });
    }

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
