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
    description: "探討 Nous Hermes模型的強大 Function Calling 能力，並以律師助手與智能客服為例，解析新一代 Agentic RAG 技術。",
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
    id: "calculus-ch1-overview",
    title: "微積分 第一章：函數與極限導覽",
    description: "開啟微積分旅程的第一站。了解第一章的學習地圖、五大核心目標以及針對極限與連續性的避坑指南，為後續的微分與積分打下堅實基礎。",
    category: "calculus",
    author: "Luna Dev Team",
    date: "2026-05-29",
    tags: ["Overview", "極限導覽", "學習地圖", "微積分起點"],
    slides: []
  },
  {
    id: "calculus-1-1-functions-represent",
    title: "微積分 1.1：函數的四種表示法 (Four Ways to Represent a Function)",
    description: "理解微積分處理的基本對象。學習如何透過口頭、數值、圖形與代數四種視角來定義與分析函數，並掌握定義域、值域與垂直線測試等關鍵概念。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["函數定義", "表示法", "定義域值域", "垂直線測試", "分段函數"],
    slides: []
  },
  {
    id: "calculus-1-2-math-models-catalog",
    title: "微積分 1.2：數學模型與基本函數目錄 (Mathematical Models)",
    description: "建立從現實數據到數學公式的橋樑。了解多項式、冪函數、有理函數以及超越函數（三角、指數、對數）的分類與特徵，打造您的微積分工具箱。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["數學建模", "多項式", "冪函數", "超越函數", "函數分類"],
    slides: []
  },
  {
    id: "calculus-1-3-new-from-old-functions",
    title: "微積分 1.3：從舊函數建立新函數 (New from Old Functions)",
    description: "掌握函數變換與組合的藝術。學習平移、反射、伸縮等圖形變幻技巧，並探索代數運算與函數複合（f ∘ g）如何建構出複雜的數學模型。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["圖形變換", "平移反射", "伸縮", "函數複合", "模組化"],
    slides: []
  },
  {
    id: "calculus-1-4-tangent-velocity",
    title: "微積分 1.4：切線與速度問題 (Tangent and Velocity)",
    description: "探索微積分動態觀的兩大基石。學習如何透過割線斜率逼近切線斜率，以及如何從平均速度推導出瞬時速度，初步建立極限的直覺概念。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["切線斜率", "瞬時速度", "割線", "逼近思想", "極限引導"],
    slides: []
  },
  {
    id: "calculus-1-5-limit-function",
    title: "微積分 1.5：函數的極限 (The Limit of a Function)",
    description: "深入微積分的靈魂。學習極限的直觀定義，掌握單邊極限的判定，辨識極限不存在的三種情況，並定義與理解垂直漸近線。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["極限定義", "單邊極限", "極限不存在", "垂直漸近線", "核心觀念"],
    slides: []
  },
  {
    id: "calculus-1-6-calculating-limits",
    title: "微積分 1.6：極限的計算技巧 (Calculating Limits)",
    description: "擺脫數據觀察的限制。掌握極限綜合法則與直接代入性質，學習如何利用因式分解、分子有理化與夾擠定理精確解決各式極限難題。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["極限法則", "因式分解", "有理化", "夾擠定理", "0/0 破解"],
    slides: []
  },
  {
    id: "calculus-1-7-precise-limit-definition",
    title: "微積分 1.7：極限的精確定義 (The Precise Definition of a Limit)",
    description: "進入數學嚴謹性的殿堂。學習 ε-δ 定義，理解如何透過誤差控制來嚴密證明極限，並探索無窮極限的精確化表述。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["精確定義", "Epsilon-Delta", "嚴謹證明", "極限理論"],
    slides: []
  },
  {
    id: "calculus-1-8-continuity",
    title: "微積分 1.8：連續性 (Continuity)",
    description: "理解變化的無縫銜接。學習連續性的定義三要件，辨識可去、跳躍與無窮不連續點，並掌握極具實戰價值的「中間值定理 (IVT)」。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["連續性", "不連續點", "中間值定理", "IVT", "函數性質"],
    slides: []
  },
  {
    id: "calculus-ch2-overview",
    title: "微積分 第二章：微分學核心導覽",
    description: "開啟微分學之旅的指南。了解第二章的學習目標、各小節路徑圖以及避坑指南，幫助您建立紮實的變化率分析基礎。",
    category: "calculus",
    author: "Luna Dev Team",
    date: "2026-05-29",
    tags: ["Overview", "微分導覽", "學習地圖", "微分目標"],
    slides: []
  },
  {
    id: "calculus-2-1-derivatives-rates",
    title: "微積分 2.1：導數與變化率 (Derivatives and Rates of Change)",
    description: "微分學的起點。從幾何上的切線斜率與物理上的瞬時速度出發，學習如何利用極限定義導數，並理解其作為廣義變化率的深層意義。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["切線問題", "速度問題", "變化率", "極限定義"],
    slides: []
  },
  {
    id: "calculus-2-2-derivative-function",
    title: "微積分 2.2：導數作為一個函數 (The Derivative as a Function)",
    description: "將導數的概念從點推廣到全局。學習如何繪製導數圖形，理解可微性與連續性的深層關係，並初步接觸高階導數與物體運動的聯繫。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["導數函數", "可微性", "Leibniz 符號", "高階導數", "加速度"],
    slides: []
  },
  {
    id: "calculus-2-3-differentiation-formulas",
    title: "微積分 2.3：微分公式 (Differentiation Formulas)",
    description: "擺脫極限定義的繁瑣計算。掌握冪規則、乘積規則與商規則等核心運算法則，大幅提升函數微分的效率與精確度。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["微分公式", "冪規則", "乘積規則", "商規則", "高效計算"],
    slides: []
  },
  {
    id: "calculus-2-4-trig-derivatives",
    title: "微積分 2.4：三角函數的微分 (Trig Derivatives)",
    description: "掌握週期變化的數學規律。學習六大三角函數的微分公式，理解其背後的特殊極限基礎，並發現高階導數規律性的奧秘。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["三角函數", "正弦餘弦", "週期性", "特殊極限", "高階導數"],
    slides: []
  },
  {
    id: "calculus-2-5-chain-rule",
    title: "微積分 2.5：鏈鎖律 (The Chain Rule)",
    description: "攻克複合函數微分的核心工具。學習如何像剝洋蔥般由外而內進行求導，掌握 Leibniz 符號的直覺應用，並解決多層嵌套函數的變化率問題。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["鏈鎖律", "複合函數", "外導內不導", "Leibniz 符號", "層層嵌套"],
    slides: []
  },
  {
    id: "calculus-2-6-implicit-differentiation",
    title: "微積分 2.6：隱微分 (Implicit Differentiation)",
    description: "學習如何在不解出 y 的情況下求出斜率。掌握處理隱式方程的核心技巧，並應用於圓、橢圓與葉形線等複雜幾何圖形的切線分析。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["隱微分", "隱函數", "切線斜率", "Leibniz 符號", "幾何曲線"],
    slides: []
  },
  {
    id: "calculus-2-7-rates-change-sciences",
    title: "微積分 2.7：變化率的應用 (Rates of Change)",
    description: "微分如何描述我們的世界？探索導數在物理、化學、生物與經濟學中的跨領域應用。從速度、反應速率到邊際成本，理解微積分作為科學通用語言的威力。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["變化率", "物理應用", "反應速率", "邊際分析", "科學建模"],
    slides: []
  },
  {
    id: "calculus-ch3-overview",
    title: "微積分 第三章：微分的應用導覽",
    description: "探索微分在現實世界中的威力。了解第三章的學習目標、應用題路徑圖以及建模建議，開啟您的最佳化問題求解之旅。",
    category: "calculus",
    author: "Luna Dev Team",
    date: "2026-05-29",
    tags: ["Overview", "應用導覽", "學習地圖", "最佳化目標"],
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
    description: "將微積分應用於現實 world！學習如何將農場圍籬、最短救生路徑與最省材料罐頭等實際問題轉化為數學模型，並找出最優解。",
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
    id: "calculus-ch4-overview",
    title: "微積分 第四章：積分學核心導覽",
    description: "開啟積分世界的地圖。了解第四章的學習目標、從面積到 FTC 的路徑圖，以及掌握定積分正負號與變數代換的關鍵建議。",
    category: "calculus",
    author: "Luna Dev Team",
    date: "2026-05-29",
    tags: ["Overview", "積分導覽", "學習地圖", "FTC目標"],
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
    id: "calculus-ch5-overview",
    title: "微積分 第五章：積分應用導覽",
    description: "開啟積分應用的實戰篇。了解第五章的學習目標、體積與做功的計算地圖，以及如何根據幾何特徵選擇最佳計算法的關鍵建議。",
    category: "calculus",
    author: "Luna Dev Team",
    date: "2026-05-29",
    tags: ["Overview", "應用導覽", "學習地圖", "積分實踐"],
    slides: []
  },
  {
    id: "calculus-5-1-areas-between-curves",
    title: "微積分 5.1：曲線之間的面積 (Areas Between Curves)",
    description: "超越單一曲線的限制。學習如何利用定積分計算由兩條曲線所圍成的區域面積，掌握「上減下」與「右減左」的精確量化技巧。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["曲線面積", "黎曼和應用", "交點求解", "積分建模"],
    slides: []
  },
  {
    id: "calculus-5-2-volumes",
    title: "微積分 5.2：體積 (Volumes)",
    description: "從切片原理出發，學習如何利用定積分計算立體體積。掌握圓盤法（Disk Method）與墊圈法（Washer Method），並應用於推導球體與各類旋轉體的幾何公式。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["體積計算", "圓盤法", "墊圈法", "旋轉體", "截面面積"],
    slides: []
  },
  {
    id: "calculus-5-3-cylindrical-shells",
    title: "微積分 5.3：剝殼法求體積 (Cylindrical Shells)",
    description: "換個角度看旋轉體。學習如何利用平行於旋轉軸的薄圓柱殼來計算體積，掌握處理墊圈法難以解決的複雜邊界問題之王牌技術。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["剝殼法", "圓柱殼", "體積計算", "旋轉體", "解題策略"],
    slides: []
  },
  {
    id: "calculus-5-4-work",
    title: "微積分 5.4：功 (Work)",
    description: "將積分應用於物理能量計算。學習如何處理變力做功問題，包含虎克定律（彈簧）、提升重型纜線以及從不同形狀水槽中抽取液體的實戰建模。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["物理應用", "做功計算", "虎克定律", "變力積分", "能量建模"],
    slides: []
  },
  {
    id: "calculus-5-5-average-value",
    title: "微積分 5.5：函數平均值與積分均值定理 (Average Value)",
    description: "學習如何精確量化連續變化的平均狀態。掌握函數平均值公式與積分均值定理（MVT for Integrals），並應用於平均力與平均速度的現實分析。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["平均值", "積分均值定理", "幾何直覺", "物理量化"],
    slides: []
  },
  {
    id: "calculus-ch6-overview",
    title: "微積分 第六章：反函數與超越函數導覽",
    description: "本章將帶領您進入超越函數的殿堂。了解反函數求導、指數增長衰減、反三角函數與雙曲函數的學習地圖，掌握科學運算的底層邏輯。",
    category: "calculus",
    author: "Luna Dev Team",
    date: "2026-05-29",
    tags: ["Overview", "超越函數導覽", "學習地圖", "反函數目標"],
    slides: []
  },
  {
    id: "calculus-6-1-inverse-functions",
    title: "微積分 6.1：反函數及其導數 (Inverse Functions)",
    description: "學習如何逆轉函數的映射關係。掌握一對一函數判定、圖形對稱性，以及如何利用原函數導數來求取反函數變化的核心公式。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["反函數", "一對一函數", "反函數導數", "對稱性", "建模思維"],
    slides: []
  },
  {
    id: "calculus-6-2-exponential-functions",
    title: "微積分 6.2：指數函數及其導數 (Exponential Functions)",
    description: "探索自然常數 e 的終極奧秘。學習為什麼 e^x 是微積分中最完美的函數，掌握其微分與積分公式，並應用於解決人口增長與放射性衰變等現實建模問題。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["自然常數 e", "指數增長", "導數公式", "鏈鎖律應用", "衰變模型"],
    slides: []
  },
  {
    id: "calculus-6-2-star-natural-log-integral",
    title: "微積分 6.2*：自然對數的另一種視角（積分定義法）",
    description: "從數學嚴謹性的高度重新認識對數。學習如何將 ln x 定義為 1/t 曲線下的面積，並利用微積分基本定理（FTC）秒殺證明對數的所有性質與導數公式。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["積分定義", "FTC1 應用", "嚴謹對數", "e 的定義", "幾何性質"],
    slides: []
  },
  {
    id: "calculus-6-3-logarithmic-functions",
    title: "微積分 6.3：對數函數 (Logarithmic Functions)",
    description: "學習指數的逆轉工程。掌握對數三大計算法則、自然對數 ln 的性質與圖形行為，並學會強大的「對數微分法」來破解複雜函數的導數難題。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["對數函數", "自然對數 ln", "對數法則", "對數微分法", "換底公式"],
    slides: []
  },
  {
    id: "calculus-6-3-star-natural-exp-inverse",
    title: "微積分 6.3*：自然指數的另一種視角（反函數定義法）",
    description: "探索 e^x 的邏輯起源。學習如何將自然指數函數定義為 ln x 的反函數，並利用反函數求導法則嚴謹證明 (e^x)' = e^x，揭示數學對稱構造的終極美感。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["反函數定義", "導數證明", "指數律推導", "對稱構造", "嚴謹微積分"],
    slides: []
  },
  {
    id: "calculus-6-4-log-derivatives",
    title: "微積分 6.4：對數函數的微分與一般指數函數 (Log Derivatives)",
    description: "掌握處理複雜變化的終極利刃。學習任意基底對數與指數函數的求導規律，並精通「對數微分法」，輕鬆解決包含多重嵌套與變數冪次的挑戰性題目。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["對數微分", "一般基底", "對數微分法", "x^x 求導", "換底應用"],
    slides: []
  },
  {
    id: "calculus-6-4-star-general-log-exp",
    title: "微積分 6.4*：一般對數與指數函數",
    description: "構建超越函數的統一理論。學習如何利用 e 與 ln 定義任意基底的函數，嚴謹證明指數律與廣義冪規則，並掌握 e 作為極限的經典定義。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["一般指數函數", "指數律證明", "冪規則證明", "e 的極限定義", "數學統一性"],
    slides: []
  },
  {
    id: "calculus-6-5-exponential-growth-decay",
    title: "微積分 6.5：指數增長與衰減 (Exponential Growth and Decay)",
    description: "量化動態世界的時間規律。學習如何利用微分方程式建立成長與衰減模型，涵蓋全球人口預測、放射性元素半衰期分析以及金融連續複利計算。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["微分方程", "自然增長", "半衰期", "連續複利", "物理應用"],
    slides: []
  },
  {
    id: "calculus-6-6-inverse-trig-functions",
    title: "微積分 6.6：反三角函數 (Inverse Trig Functions)",
    description: "掌握逆轉週期的數學規律。學習定義域限制的必要性，精通 arcsin、arccos 與 arctan 的圖形特徵與導數公式，並應用於解決複雜的分式積分問題。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["反三角函數", "arcsin", "arctan", "隱微分應用", "積分公式"],
    slides: []
  },
  {
    id: "calculus-6-8-lhospitals-rule",
    title: "微積分 6.8：羅必達法則 (l'Hospital's Rule)",
    description: "破解不定型極限的終極武器。學習如何處理 0/0、∞/∞ 等各種不定型極限，掌握將乘積、差值與冪次轉化為分式的藝術，並避開常見的運算陷阱。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["羅必達法則", "不定型", "極限運算", "0/0 破解", "代數轉換"],
    slides: []
  },
  {
    id: "calculus-6-7-hyperbolic-functions",
    title: "微積分 6.7：雙曲函數 (Hyperbolic Functions)",
    description: "探索指數函數的對稱之美。學習 sinh、cosh 與 tanh 的定義及其與雙曲線的幾何聯繫，掌握雙曲恆等式與導數公式，並理解懸鏈線在工程中的實戰應用。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["雙曲函數", "懸鏈線", "雙曲恆等式", "cosh", "反雙曲函數"],
    slides: []
  },
  {
    id: "calculus-ch7-overview",
    title: "微積分 第七章：積分技巧導覽",
    description: "掌握積分計算的進階武庫。了解第七章的學習目標、攻克積分迷宮的路徑圖，以及針對選取 u 與 dv、幾何替換等關鍵策略的實戰建議。",
    category: "calculus",
    author: "Luna Dev Team",
    date: "2026-05-29",
    tags: ["Overview", "積分技巧導覽", "學習地圖", "策略選取"],
    slides: []
  },
  {
    id: "calculus-7-1-integration-by-parts",
    title: "微積分 7.1：分部積分 (Integration by Parts)",
    description: "掌握積分版的乘法法則。學習如何透過 LIATE 準則選取 u 與 dv，破解複雜函數乘積的積分難題，並處理對數函數與循環積分等進階場景。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["分部積分", "LIATE", "乘積積分", "反導函數技巧", "工程數學"],
    slides: []
  },
  {
    id: "calculus-7-2-trig-integrals",
    title: "微積分 7.2：三角積分技巧 (Trigonometric Integrals)",
    description: "攻克複雜三角冪次的必備策略。學習如何利用畢氏恆等式與降次公式拆解 sin、cos、tan 與 sec 的高次方積分，並掌握變數代換的選取規律。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["三角積分", "恆等式應用", "降次公式", "u-代換", "週期函數"],
    slides: []
  },
  {
    id: "calculus-7-3-trig-substitution",
    title: "微積分 7.3：三角替換法 (Trigonometric Substitution)",
    description: "破解根號困境的幾何武器。學習如何利用 sin、tan 與 sec 消除積分中的根號項，掌握畫直角三角形換回變數的關鍵技巧，解決圓與橢圓相關的面積難題。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["三角替換", "根號消除", "直角三角形", "畢氏恆等式", "進階積分"],
    slides: []
  },
  {
    id: "calculus-7-4-partial-fractions",
    title: "微積分 7.4：部分分式積分法 (Partial Fractions)",
    description: "化整為零的代數藝術。學習如何利用部分分式分解將複雜的有理函數拆解為簡單的對數與反正切形式，掌握處理相異因式、重複因式與不可約二次式的核心 SOP。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["部分分式", "有理函數", "長除法", "代數分解", "ln 與 arctan"],
    slides: []
  },
  {
    id: "calculus-7-5-integration-strategy",
    title: "微積分 7.5：積分的策略 (Strategy for Integration)",
    description: "建立全方位的解題決策樹。彙整代換法、分部積分、三角替換與部分分式等所有技巧，學習如何系統化地簡化、分類並破解各類複雜的積分難題。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["積分策略", "決策樹", "綜合法則", "解題SOP", "模式識別"],
    slides: []
  },
  {
    id: "calculus-7-6-integration-tables",
    title: "微積分 7.6：查表積分與科技應用 (Tables and CAS)",
    description: "站在巨人的肩膀上解決複雜難題。學習如何使用積分表（Integration Tables）與電腦代數系統（如 Python SymPy）高效求解，掌握代數前處理與形式配對的關鍵實務技巧。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["積分表", "CAS", "SymPy", "形式匹配", "工程實踐"],
    slides: []
  },
  {
    id: "calculus-7-7-approximate-integration",
    title: "微積分 7.7：近似積分與誤差估計 (Approximate Integration)",
    description: "當精確解不可得時的生存指南。學習梯形法則、中點法則與強大的辛普森法則（Simpson's Rule），並掌握如何精確估計數值計算的誤差界限。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["數值積分", "梯形法", "辛普森法", "誤差估計", "工程計算"],
    slides: []
  },
  {
    id: "calculus-7-8-improper-integrals",
    title: "微積分 7.8：瑕積分 (Improper Integrals)",
    description: "挑戰無限的邊界。學習如何處理無限區間與無窮間斷點的積分，掌握收斂與發散的判定法則（如 1/x^p 判定法），並應用於物理逃逸速度與統計學機率模型。",
    category: "calculus",
    author: "Toby",
    date: "2026-05-29",
    tags: ["瑕積分", "收斂判定", "比較判別法", "無限區間", "瑕點"],
    slides: []
  }
];
