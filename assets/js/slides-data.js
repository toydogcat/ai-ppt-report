// Preloaded presentations database index
const PRELOADED_DECKS = [
  {
    id: "ai-applications-2026",
    title: "2026 AI 實際應用全景指南",
    description: "全面剖析 2026 全球主流 AI 核心分工、實戰 Prompt 技巧與 Agent 智能體自動化工作流。",
    category: "technology",
    author: "Luna AI",
    date: "2026-05-28",
    tags: ["Artificial Intelligence", "Agent", "2026 Trend", "Prompt Engineering"],
    slides: []
  },
  {
    id: "uiux-design-thinking-2026",
    title: "迎戰 AI 時代的設計思維：現代 UI/UX 核心與檢測",
    description: "全面拆解現代 UI 視覺美學、留白呼吸感與 UX 回饋流程，特別收錄 AI 時代期望管理與控制權全新設計思維。",
    category: "technology",
    author: "Luna UX Team",
    date: "2026-05-28",
    tags: ["UIUX", "Design Thinking", "AI UX", "Accessibility"],
    slides: []
  },
  {
    id: "seo-geo-aieo-2026",
    title: "迎戰 AI 搜尋時代：SEO、GEO 與 AIEO 全面優化指南",
    description: "剖析搜尋生態革命，探討傳統關鍵字優化、生成式引擎摘要卡位（GEO）與 AI 聊天大腦心智佔領（AIEO）的黃金心法。",
    category: "technology",
    author: "Luna SEO Team",
    date: "2026-05-28",
    tags: ["SEO", "GEO", "AIEO", "AI Search", "Traffic"],
    slides: []
  },
  {
    id: "ai-office-applications-2026",
    title: "AI 落地應用實務辦公室應用指南",
    description: "從工具零散化走向自動化工作流與 Agent 協同的實戰部署。涵蓋 Copilot、n8n 自動化流程、私有知識庫 RAG 與智能體委派。",
    category: "technology",
    author: "Luna Office Team",
    date: "2026-05-28",
    tags: ["Office Automation", "n8n", "RAG", "Copilot"],
    slides: []
  },
  {
    id: "ai-image-video-2026",
    title: "生圖 生影片 AI 應用指南",
    description: "生產級視覺創作與一致性控制指南。掌握 Midjourney v7 與 Google Veo 3.1，精準鎖定角色與畫風不崩壞，並設計導演級運鏡。",
    category: "technology",
    author: "Luna Creative Team",
    date: "2026-05-28",
    tags: ["Image Gen", "Video Gen", "Consistency Control", "Veo 3.1"],
    slides: []
  },
  {
    id: "ai-marketing-image-2026",
    title: "AI 生圖與改圖行銷實戰：賣書、賣課、賣食物的黃金 Prompt 密碼",
    description: "專為網路行銷人員設計的 AI 視覺革命。零美術基礎也能產出爆款書籍封面、吸睛課程 Banner、以及令人垂涎的食物商品照，附真實 Prompt 範例與生圖原檔。",
    category: "technology",
    author: "Luna Marketing Lab",
    date: "2026-05-28",
    tags: ["AI Image", "Marketing Design", "Midjourney", "E-commerce"],
    slides: []
  },
  {
    id: "vibe-coding-2026",
    title: "Vibe Coding 教學：AI First 開發新典範",
    description: "專為現代開發者與產品經理設計的實戰課程。解析「Vibe Coding」的核心心法，從寫 Spec 到架構設計的完整指南。",
    category: "technology",
    author: "Luna Dev Team",
    date: "2026-05-28",
    tags: ["Vibe Coding", "AI First", "Cursor", "Prompt Engineering"],
    slides: []
  },
  {
    id: "n8n-automation-2026",
    title: "n8n 教學：打造企業級無程式碼自動化工作流",
    description: "串接萬物、整合 AI，打造你的 24 小時數位生產線。從基礎概念到進階 AI 節點應用的自動化實戰指南。",
    category: "technology",
    author: "Luna Automation",
    date: "2026-05-28",
    tags: ["n8n", "Automation", "No-Code", "AI Workflow"],
    slides: []
  },
  {
    id: "openclaw-agent-2026",
    title: "OpenClaw (小龍蝦) AI Agent 教學",
    description: "深度剖析 2026 年爆紅的開源自主智慧體「小龍蝦」！從原理架構到特殊應用場景，教你如何圈養一隻 24 小時工作的數位員工。",
    category: "technology",
    author: "Luna AI Labs",
    date: "2026-05-28",
    tags: ["OpenClaw", "AI Agent", "Autonomous", "Local LLM"],
    slides: []
  },
  {
    id: "hermes-agentic-rag-2026",
    title: "Hermes Agentic RAG 教學",
    description: "探討 Nous Hermes 模型的強大 Function Calling 能力，並以律師助手與智能客服為例，解析新一代 Agentic RAG 技術。",
    category: "technology",
    author: "Luna AI Labs",
    date: "2026-05-28",
    tags: ["Hermes", "Agentic RAG", "Function Calling", "NousResearch"],
    slides: []
  },
  {
    id: "notebooklm-guide-2026",
    title: "NotebookLM 實戰教學：你的專屬第二大腦",
    description: "從零開始解析 Google 的私有知識庫產品。學會使用 Source-Grounded 技術與語音導覽，徹底改變吸收資訊的速度。",
    category: "technology",
    author: "Luna Product Team",
    date: "2026-05-28",
    tags: ["NotebookLM", "Google", "RAG", "Knowledge Base", "Podcast"],
    slides: []
  },
  {
    id: "pwa-tech-2026",
    title: "PWA 技術介紹：迎戰 2026 的 Web 新紀元",
    description: "打破網頁與 App 的界限，打造跨平台流暢體驗。深入解析 Service Workers、離線緩存與硬體存取限制。",
    category: "technology",
    author: "Luna Dev Team",
    date: "2026-05-28",
    tags: ["PWA", "Web Tech", "Service Worker", "Cross-Platform"],
    slides: []
  },
  {
    id: "firebase-ga4-2026",
    title: "Firebase 與 GA4 埋點教學：從數據採集到 AI 洞察",
    description: "掌握事件驅動模型，打造精準產品雷達。包含埋點實作、DebugView 驗證與 AI 預測指標應用。",
    category: "technology",
    author: "Luna Data Team",
    date: "2026-05-28",
    tags: ["Firebase", "GA4", "Data Analytics", "Tracking"],
    slides: []
  },
  {
    id: "ai-data-analysis-2026",
    title: "AI 輔助資料處理：從混亂數據到商業洞察",
    description: "掌握 AI 工具與視覺化邏輯，讓數據自己說故事。涵蓋數據清洗、EDA 與科學圖表選擇指南。",
    category: "technology",
    author: "Luna Analysis Team",
    date: "2026-05-28",
    tags: ["AI Data", "Visualization", "Data Analysis", "EDA"],
    slides: []
  }
];
