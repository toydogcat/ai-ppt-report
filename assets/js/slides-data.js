// Preloaded presentations database index
const PRELOADED_DECKS = [
  {
    id: "publishing-guide-2026",
    title: "Luna AI PPT 上架與開發教學",
    description: "從零開始學會如何將您的 Markdown 轉化為華麗的 3D 簡報，並發佈至本展示平台。",
    category: "dev-tech",
    author: "Luna Dev Team",
    date: "2026-05-29",
    tags: ["Tutorial", "Developer Guide", "Markdown", "3D PPT"],
    slides: []
  },
  {
    id: "ai-applications-2026",
    title: "2026 AI 實際應用全景指南",
    description: "全面剖析 2026 全球主流 AI 核心分工、實戰 Prompt 技巧與 Agent 智能體自動化工作流。",
    category: "ai-automation",
    author: "Luna AI",
    date: "2026-05-28",
    tags: ["Artificial Intelligence", "Agent", "2026 Trend", "Prompt Engineering"],
    slides: []
  },
  {
    id: "uiux-design-thinking-2026",
    title: "迎戰 AI 時代的設計思維：現代 UI/UX 核心與檢測",
    description: "全面拆解現代 UI 視覺美學、留白呼吸感與 UX 回饋流程，特別收錄 AI 時代期望管理與控制權全新設計思維。",
    category: "design-marketing",
    author: "Luna UX Team",
    date: "2026-05-28",
    tags: ["UIUX", "Design Thinking", "AI UX", "Accessibility"],
    slides: []
  },
  {
    id: "seo-geo-aieo-2026",
    title: "迎戰 AI 搜尋時代：SEO、GEO 與 AIEO 全面優化指南",
    description: "剖析搜尋生態革命，探討傳統關鍵字優化、生成式引擎摘要卡位（GEO）與 AI 聊天大腦心智佔領（AIEO）的黃金心法。",
    category: "search-analytics",
    author: "Luna SEO Team",
    date: "2026-05-28",
    tags: ["SEO", "GEO", "AIEO", "AI Search", "Traffic"],
    slides: []
  },
  {
    id: "ai-office-applications-2026",
    title: "AI 落地應用實務辦公室應用指南",
    description: "從工具零散化走向自動化工作流與 Agent 協同的實戰部署。涵蓋 Copilot、n8n 自動化流程、私有知識庫 RAG 與智能體委派。",
    category: "ai-automation",
    author: "Luna Office Team",
    date: "2026-05-28",
    tags: ["Office Automation", "n8n", "RAG", "Copilot"],
    slides: []
  },
  {
    id: "ai-image-video-2026",
    title: "生圖 生影片 AI 應用指南",
    description: "生產級視覺創作與一致性控制指南。掌握 Midjourney v7 與 Google Veo 3.1，精準鎖定角色與畫風不崩壞，並設計導演級運鏡。",
    category: "design-marketing",
    author: "Luna Creative Team",
    date: "2026-05-28",
    tags: ["Image Gen", "Video Gen", "Consistency Control", "Veo 3.1"],
    slides: []
  },
  {
    id: "ai-marketing-image-2026",
    title: "AI 生圖與改圖行銷實戰：賣書、賣課、賣食物的黃金 Prompt 密碼",
    description: "專為網路行銷人員設計的 AI 視覺革命。零美術基礎也能產出爆款書籍封面、吸睛課程 Banner、以及令人垂涎的食物商品照，附真實 Prompt 範例與生圖原檔。",
    category: "design-marketing",
    author: "Luna Marketing Lab",
    date: "2026-05-28",
    tags: ["AI Image", "Marketing Design", "Midjourney", "E-commerce"],
    slides: []
  },
  {
    id: "vibe-coding-2026",
    title: "Vibe Coding 教學：AI First 開發新典範",
    description: "專為現代開發者與產品經理設計的實戰課程。解析「Vibe Coding」的核心心法，從寫 Spec 到架構設計的完整指南。",
    category: "dev-tech",
    author: "Luna Dev Team",
    date: "2026-05-28",
    tags: ["Vibe Coding", "AI First", "Cursor", "Prompt Engineering"],
    slides: []
  },
  {
    id: "n8n-automation-2026",
    title: "n8n 教學：打造企業級無程式碼自動化工作流",
    description: "串接萬物、整合 AI，打造你的 24 小時數位生产線。從基礎概念到進階 AI 節點應用的自動化實戰指南。",
    category: "ai-automation",
    author: "Luna Automation",
    date: "2026-05-28",
    tags: ["n8n", "Automation", "No-Code", "AI Workflow"],
    slides: []
  },
  {
    id: "openclaw-agent-2026",
    title: "OpenClaw (小龍蝦) AI Agent 教學",
    description: "深度剖析 2026 年爆紅的開源自主智慧體「小龍蝦」！從原理架構到特殊應用場景，教你如何圈養一隻 24 小時工作的數位員工。",
    category: "ai-automation",
    author: "Luna AI Labs",
    date: "2026-05-28",
    tags: ["OpenClaw", "AI Agent", "Autonomous", "Local LLM"],
    slides: []
  },
  {
    id: "hermes-agentic-rag-2026",
    title: "Hermes Agentic RAG 教學",
    description: "探討 Nous Hermes 模型的強大 Function Calling 能力，並以律師助手與智能客服為例，解析新一代 Agentic RAG 技術。",
    category: "dev-tech",
    author: "Luna AI Labs",
    date: "2026-05-28",
    tags: ["Hermes", "Agentic RAG", "Function Calling", "NousResearch"],
    slides: []
  },
  {
    id: "notebooklm-guide-2026",
    title: "NotebookLM 實戰教學：你的專屬第二大腦",
    description: "從零開始解析 Google 的私有知識庫 product。學會使用 Source-Grounded 技術與語音導覽，徹底改變吸收資訊的速度。",
    category: "dev-tech",
    author: "Luna Product Team",
    date: "2026-05-28",
    tags: ["NotebookLM", "Google", "RAG", "Knowledge Base", "Podcast"],
    slides: []
  },
  {
    id: "pwa-tech-2026",
    title: "PWA 技術介紹：迎戰 2026 的 Web 新紀元",
    description: "打破網頁與 App 的界限，打造跨平台流暢體驗。深入解析 Service Workers、離線緩存與硬體存取限制。",
    category: "dev-tech",
    author: "Luna Dev Team",
    date: "2026-05-28",
    tags: ["PWA", "Web Tech", "Service Worker", "Cross-Platform"],
    slides: []
  },
  {
    id: "firebase-ga4-2026",
    title: "Firebase 與 GA4 埋點教學：從數據採集到 AI 洞察",
    description: "掌握事件驅動模型，打造精準產品雷達。包含埋點實作、DebugView 驗證與 AI 預測指標應用。",
    category: "search-analytics",
    author: "Luna Data Team",
    date: "2026-05-28",
    tags: ["Firebase", "GA4", "Data Analytics", "Tracking"],
    slides: []
  },
  {
    id: "ai-data-analysis-2026",
    title: "AI 輔助資料處理：從混亂數據到商業洞察",
    description: "掌握 AI 工具與視覺化邏輯，讓數據自己說故事。涵蓋數據清洗、EDA 與科學圖表選擇指南。",
    category: "search-analytics",
    author: "Luna Analysis Team",
    date: "2026-05-28",
    tags: ["AI Data", "Visualization", "Data Analysis", "EDA"],
    slides: []
  },
  {
    id: "calculus-3-1-max-min-values",
    title: "微積分 3.1：極大值與極小值 (Max/Min Values)",
    description: "學習如何精確定義與尋找函數的最高點與最低點。掌握極值定理、費馬定理與閉區間法，為解決現實中的最佳化問題奠定基礎。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["極值", "EVT", "費馬定理", "臨界數", "最佳化"],
    slides: []
  },
  {
    id: "calculus-3-2-mean-value-theorem",
    title: "微積分 3.2：均值定理 (The Mean Value Theorem)",
    description: "揭開微積分中最優雅的定理之一。學習如何連結區間內的平均變化率與某一點的瞬時導數，並理解其在物理與理論證明中的核心地位。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["均值定理", "MVT", "Rolle's Theorem", "平均速度"],
    slides: []
  },
  {
    id: "calculus-3-3-derivative-shape",
    title: "微積分 3.3：導數如何影響圖形形狀 (Shape of a Graph)",
    description: "深入解讀一階與二階導數的幾何密碼。學習增減性測試、凹凸性測試以及如何利用反曲點繪製精確的函數圖形。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["一階導數檢測", "凹凸性", "反曲點", "二階導數檢測"],
    slides: []
  },
  {
    id: "calculus-3-4-limits-infinity",
    title: "微積分 3.4：無窮遠處的極限與水平漸近線 (Limits at Infinity)",
    description: "望向函數圖形的終極邊界。學習如何分析 x 趨向無窮大時的行為，定義水平漸近線，並掌握計算分式函數極限的核心技巧。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["水平漸近線", "無窮極限", "終極行為", "分式函數"],
    slides: []
  },
  {
    id: "calculus-3-5-curve-sketching",
    title: "微積分 3.5：繪圖總結 (Curve Sketching)",
    description: "整合所有微分工具！學習一套系統性的八大檢查步驟，從定義域到二階導數，手工繪製出精確且具備深度的函數曲線。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["繪圖步驟", "斜漸近線", "整合分析", "手工繪圖"],
    slides: []
  },
  {
    id: "calculus-3-6-graphing-technology",
    title: "微積分 3.6：繪圖與科技應用 (Graphing with Technology)",
    description: "微積分 × Python 的強強聯手。學習如何利用微分理論指導 Python 繪圖（Matplotlib），避開電腦視覺陷阱，捕捉最微小的函數特徵。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["Python", "Matplotlib", "視覺陷阱", "視窗優化"],
    slides: []
  },
  {
    id: "calculus-3-7-optimization",
    title: "微積分 3.7：最佳化問題 (Optimization Problems)",
    description: "將微積分應用於現實世界！學習如何將農場圍籬、最短救生路徑與最省材料罐頭等實際問題轉化為數學模型，並找出最優解。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["最佳化", "建模", "最大面積", "最短時間", "斯內爾定律"],
    slides: []
  },
  {
    id: "calculus-3-8-newton-method",
    title: "微積分 3.8：牛頓法 (Newton's Method)",
    description: "利用切線無限逼近真實解！學習牛頓法的幾何原理與代數推導，並透過 Python 程式碼實戰演練，掌握現代數值運算的核心技術。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["牛頓法", "數值方法", "迭代算法", "Python", "根式求解"],
    slides: []
  },
  {
    id: "calculus-3-9-antiderivatives",
    title: "微積分 3.9：反導函數 (Antiderivatives)",
    description: "開啟積分大門的關鍵！學習如何從導數推回原函數，掌握積分常數 +C 的意義，並應用於還原物體的運動軌跡。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["反導函數", "積分常數", "初值問題", "運動學"],
    slides: []
  },
  {
    id: "calculus-ch3-derivatives",
    title: "微積分 第三章：微分的應用 (Applications of Differentiation)",
    description: "深入探討微分在極值尋找、圖形分析與最佳化問題中的實戰應用，建立從理論到解決現實問題的橋樑。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["微分應用", "Optimization", "MVT", "極值"],
    slides: []
  },
  {
    id: "calculus-4-1-area-distance",
    title: "微積分 4.1：面積與距離問題 (Area and Distance)",
    description: "探索積分學的直觀起源。透過矩形逼近法，理解如何將無限小的加總轉化為精確的面積與物理位移。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["面積問題", "距離問題", "逼近法", "極限"],
    slides: []
  },
  {
    id: "calculus-4-2-definite-integral",
    title: "微積分 4.2：定積分 (The Definite Integral)",
    description: "正式進入定積分的世界。學習黎曼和的嚴格定義、積分符號的意義，以及如何將其詮釋為座標軸間的淨面積。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["定積分", "Riemann Sum", "淨面積", "極限定義"],
    slides: []
  },
  {
    id: "calculus-4-3-fundamental-theorem",
    title: "微積分 4.3：微積分基本定理 (FTC)",
    description: "揭開微積分最核心的秘密！學習微分與積分如何互為逆運算，並掌握評價定積分的終極代數公式。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["FTC", "反導函數", "累積面積", "積分評價"],
    slides: []
  },
  {
    id: "calculus-4-4-indefinite-integral",
    title: "微積分 4.4：不定積分與淨變化定理 (Indefinite Integrals)",
    description: "學習不定積分的符號體系與常用積分表，並探索「淨變化定理」如何將積分應用於物理、化學與經濟學等現實領域。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["不定積分", "淨變化定理", "位移與距離", "邊際成本"],
    slides: []
  },
  {
    id: "calculus-4-5-substitution-rule",
    title: "微積分 4.5：代換法則 (The Substitution Rule)",
    description: "掌握積分計算中最核心的技巧。學習如何透過變數代換，將複雜的複合函數積分化繁為簡，並掌握定積分上下限的更換規律。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["代換法則", "u-substitution", "複合函數積分", "積分技巧"],
    slides: []
  },
  {
    id: "calculus-ch4-integrals",
    title: "微積分 第四章：積分 (Integrals)",
    description: "從面積與距離問題出發，深入黎曼和、定積分嚴格定義、微積分基本定理（FTC）與代換積分法，完整建立積分學的核心概念框架。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["積分", "Riemann Sum", "FTC", "Substitution", "Definite Integral"],
    slides: []
  }
];
