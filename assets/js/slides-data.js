// Preloaded presentations database
const PRELOADED_DECKS = [
  {
    id: "ai-applications-2026",
    title: "2026 AI 實際應用全景指南",
    description: "全面剖析 2026 全球主流 AI 核心分工、實戰 Prompt 技巧與 Agent 智能體自動化工作流。",
    category: "technology",
    author: "Luna AI",
    date: "2026-05-28",
    tags: ["Artificial Intelligence", "Agent", "2026 Trend", "Prompt Engineering"],
    slides: [
      {
        layout: "cover",
        title: "2026 AI 實際應用全景指南",
        subtitle: "從單純「一問一答」，全面演進至思維模型 (Reasoning) 與自動化 Agent (智能體)",
        theme: "cyberpunk",
        backgroundGlow: "rgba(59, 130, 246, 0.15)"
      },
      {
        layout: "text",
        title: "AI 生態的大型變革",
        content: `目前的 AI 生態已經從單純的 **「一問一答」** 全面演進到 **思維模型（Reasoning）** 與 **自動化 Agent（智能體）** 的階段。
        
        不同 AI 有其核心擅長的底層邏輯。在 2026 年，硬是拿不對的工具去做，通常效果會大打折扣。
        
        本指南將為您梳理**主流 AI 核心分工**與**精準實戰情境**，協助您構建高效率的數位生產力流。`,
        highlight: "「AI 負責實作，人類負責架構與審查」"
      },
      {
        layout: "grid",
        title: "2026 全球主流 AI 核心分工表",
        items: [
          {
            icon: "💻",
            category: "程式開發 / 架構設計",
            tools: "Cursor 3, Claude 4.5 Sonnet",
            desc: "代碼上下文理解力極強，具備多 Agent 並行重構全域程式碼的能力。"
          },
          {
            icon: "🔍",
            category: "深度市場調研 / 情報收集",
            tools: "Perplexity AI",
            desc: "整合即時網頁搜尋，直接附帶可信來源連結，適合取代傳統瀏覽器排查。"
          },
          {
            icon: "🧠",
            category: "長文本分析 / 知識庫 Grounding",
            tools: "Gemini 3.1 Pro, NotebookLM",
            desc: "擁有 100 萬以上超大 Token 上下文視窗，可直接塞入幾百萬字的文檔或程式碼庫進行推理。"
          },
          {
            icon: "⚙️",
            category: "多工具自動化工作流",
            tools: "n8n, Zapier Agents, Manus",
            desc: "將多個 AI 與 SaaS 軟體（如 Slack、Notion、GitHub）串聯，實現端到端自動化。"
          },
          {
            icon: "📝",
            category: "日常辦公 / 全能創作",
            tools: "OpenAI GPT-5",
            desc: "全能型助理，具備強大的思維邏輯（Thinking Mode），適合企劃、文案與日常邏輯推理。"
          },
          {
            icon: "🎨",
            category: "視覺創意 / 多媒體生成",
            tools: "Midjourney v7, Google Veo 3",
            desc: "高度美感控制與文字遵從度，適合行銷視覺與短影音生成。"
          }
        ]
      },
      {
        layout: "split",
        title: "1. 程式開發：代碼重構與 Vibe Coding",
        subtitle: "AI 負責實作，人類負責架構與審查",
        highlight: "當你需要優化舊有 RAG 系統的向量檢檢邏輯，重構為 dense 與 sparse 的 Hybrid Search。",
        tools: "Cursor 3 / Claude 4.5 Sonnet",
        prompt: `Role: You are a senior backend architect specializing in vector search and RAG optimization.

Task: Analyze the current project codebase. Refactor the vector_search.py module to implement a Hybrid Search approach that combines dense embeddings (via pgvector) and sparse lexical search (BM25).

Constraints: Ensure backward compatibility with existing API endpoints, optimize the scoring weights (0.7 semantic, 0.3 keyword), and output a clean Git diff with explanatory comments before running local sub-agents to test.`
      },
      {
        layout: "split",
        title: "2. 長文檔分析：打造數位第二大腦",
        subtitle: "破除資訊遺忘，發揮百萬 Token 上下文優勢",
        highlight: "團隊累積了過去半年的客戶 Feedback 郵件與系統 Bug Logs，你需要從中梳理出前三大最迫切需要修復的架構缺陷。",
        tools: "Gemini 3.1 Pro / Google NotebookLM",
        prompt: `我已經將這半年來所有客戶的原始 Feedback 郵件和原始日誌打包上傳。請發揮你 100 萬 Token 的上下文優勢，對這批資料進行全域交叉比對。

1. 請忽略表面上的客套話，直接揪出底層涉及「系統性能瓶頸」與「資料一致性錯誤」的技術痛點。
2. 請列出這些痛點在文檔中出現的具體出處（提及次數與對應檔案名稱）。
3. 用技術架構師的視角，提出這三大技術債的重構優先級建議。`
      },
      {
        layout: "split",
        title: "3. 市場深度調研：擺脫垃圾資訊",
        subtitle: "擺脫罐頭 SEO 廢文，精確定位可信來源",
        highlight: "調研 2026 年針對邊緣運算（Edge AI）硬體（如 NPU）的市場競爭格局，特別是 local LLM 推理成本的變化趨勢。",
        tools: "Perplexity AI (Pro Spaces)",
        prompt: `Focus: Search Academic & News.

Query: Analyze the competitive landscape of Edge AI hardware (specifically NPUs for local LLM inference) in 2026. Provide a detailed comparison between Cloud inference costs vs. Local NPU implementation for enterprise deployment.

Requirements: Cite verified source links from 2025-2026 industry reports. Structure the answer into hardware specs, power consumption efficiency, and cost-benefit ratios.`
      },
      {
        layout: "split",
        title: "4. 跨平台自動化：24 小時運行 Agent",
        subtitle: "將多個 AI 與 SaaS 串聯，實現端到端自動化運作",
        highlight: "建立「鏈上異常交易監控系統」。只要追蹤的錢包發生大額轉帳，自動分析詐騙關聯度，並發送 Telegram 警報。",
        tools: "n8n (Advanced AI) / Zapier Agents",
        prompt: `你是負責區塊鏈安全分析的 AI Agent。
當 Webhook 節點傳入最新的轉帳資料時，你必須：

1. 提取發送方與接收方地址，並調用 Dune Analytics 的 API 節點查詢其歷史交易頻率。
2. 判斷該資金流向是否符合「洗錢或多層分散轉移」的行為模式。
3. 如果判定風險分數大於 80，則將分析報告格式化為 Markdown，並透過下一個 Slack/Telegram 節點發送給安全團隊；若低於 80，則僅記錄至 PostgreSQL 資料庫中。`
      },
      {
        layout: "list",
        title: "💡 進階實戰建議",
        subtitle: "發揮 AI 最大效能的三大核心原則",
        items: [
          "**給予充分的背景脈絡（Context）**：明確為 AI 定義 Role 角色、任務約束與期望輸出格式，避免含糊指令。",
          "**為其設定合理的思考預算（Task Budgets）**：在使用 GPT-5 或 Gemini 3 等思考模型時，記得開啟 Thinking Mode 以處理高難度邏輯推理。",
          "**在使用 Agent 工具時設定邊界**：例如在使用 Cursor 3 進行程式開發時，明確約定修改範疇，避免 AI 擴大重構不希望被動到的底層模組。"
        ]
      },
      {
        layout: "cover",
        title: "打造您專屬的 AI 自動化工作流",
        subtitle: "結合當前最強的工具，釋放 10x 生產力！\n如有任何想法，歡迎開始測試您自己的 Markdown PPT。",
        theme: "emerald",
        backgroundGlow: "rgba(16, 185, 129, 0.15)"
      }
    ]
  },
  {
    id: "uiux-design-thinking-2026",
    title: "迎戰 AI 時代的設計思維：現代 UI/UX 核心與檢測",
    description: "全面拆解現代 UI 視覺美學、留白呼吸感與 UX 回饋流程，特別收錄 AI 時代期望管理與控制權全新設計思維。",
    category: "technology",
    author: "Luna UX Team",
    date: "2026-05-28",
    tags: ["UIUX", "Design Thinking", "AI UX", "Accessibility"],
    slides: [
      {
        layout: "cover",
        title: "迎戰 AI 時代的設計思維",
        subtitle: "現代 UI/UX 核心概念與產品檢測/優化戰略指南",
        theme: "cyberpunk",
        backgroundGlow: "rgba(139, 92, 246, 0.15)"
      },
      {
        layout: "text",
        title: "設計思維的新變革",
        content: `隨著人工智慧與各種複雜應用的普及，使用者介面（UI）與使用者體驗（UX）的設計不再只是「把畫面做漂亮」。
        
        在現代網路產品中，好的 UI/UX 能夠降低使用者的認知負荷與焦慮、引導他們順暢完成複雜任務，並深層建立對品牌的安全感與信任感。
        
        好的設計通常是「隱形」的。當使用者能毫無阻礙地達成目標時，就是設計最大的成功。`,
        highlight: "「好的 UI/UX 降低使用者焦慮，引導完成複雜任務」"
      },
      {
        layout: "list",
        title: "壹、UI (User Interface) - 使用者介面設計",
        subtitle: "產品的「外表與五官」，包含使用者在螢幕上看到的所有視覺元素",
        items: [
          "**視覺層級 (Visual Hierarchy)**：透過大小、顏色、強烈對比引導使用者視線，使核心 CTA 動作最先被看見。",
          "**色彩與對比度 (Color & Contrast)**：確保文字與背景對比度夠強（淺灰色不搭配白色），符合 WCAG 無障礙對比標準。",
          "**留白與呼吸感 (White Space)**：利用空白區域讓資訊分組更清晰，避免文字行距擁擠造成的閱讀壓迫感。",
          "**一致性與設計系統 (Consistency)**：統一網站所有「確認」與「取消」按鈕的形狀與色調，降低使用者的學習成本。"
        ]
      },
      {
        layout: "list",
        title: "貳、UX (User Experience) - 使用者體驗設計",
        subtitle: "產品的「靈魂與骨架」，關注使用者從接觸到完成目標的完整過程",
        items: [
          "**直覺與易用性 (Usability)**：常用功能置於習慣位置，流程符合大眾心理學（例如：Logo 點擊回首頁），出錯時給予溫和引導。",
          "**任務完成效率 (Frictionless)**：排除結帳與註冊中不必要的繁瑣步驟與阻礙，實現極低摩擦力的核心流。",
          "**回饋與微互動 (Micro-interactions)**：點擊、懸停與提交時給予精確的動態視覺下壓或載入動畫回饋，讓產品活起來。",
          "**無障礙與包容性 (Accessibility)**：為圖片配置 Alt 替代文字，支援全站純鍵盤操作，剔除難懂的冷門術語。"
        ]
      },
      {
        layout: "grid",
        title: "參、AI 時代的 UX 新挑戰 (AI-Driven UX)",
        items: [
          {
            icon: "🔮",
            category: "期望管理與透明度",
            tools: "Transparency",
            desc: "明確標記「AI 生成結果」；AI 思考時提供明確 progress 進度條，並附帶免責聲明。"
          },
          {
            icon: "🎮",
            category: "控制權與覆寫機制",
            tools: "User Control",
            desc: "最終決定權留給人。提供快捷鍵讓使用者能輕易修改、拒絕或關閉 AI 生成的建議內容。"
          },
          {
            icon: "💡",
            category: "引導與提示設計",
            tools: "Prompt Guidance",
            desc: "輸入對話框內提供「熱門 Prompt 範例」與「點擊建議詞」，幫助不擅長寫 Prompt 的用戶聚焦。"
          },
          {
            icon: "🛡️",
            category: "容錯與優雅降級",
            tools: "Graceful Fallback",
            desc: "當 AI 服務超載或斷線時，自動切換至備用靜態流程，提供有建設性且友善的下一步指引。"
          }
        ]
      },
      {
        layout: "text",
        title: "現代產品的綜合戰略總結",
        content: `迎戰現代數位產品，不僅需要強大的技術底層，更需要細膩的 UI/UX 設計來橋接人與機器。
        
        * **UI (視覺表現)**：確保資訊清晰、對比鮮明、留白舒適，降低認知負擔。
        * **UX (互動流程)**：打造直覺、極低摩擦的操作動線，無痛達成任務並給予即時回饋。
        * **AI UX (智能互動)**：在強大的 AI 能力外，配置透明、可控的引導設計，建立長久信任。`,
        highlight: "「極簡視覺、直覺動線、可控智能是現代產品的黃金金三角」"
      },
      {
        layout: "cover",
        title: "打造以人為本的 AI 產品體驗",
        subtitle: "細膩的 UI/UX 是橋接人類與機器最溫柔的語彙。\n感謝觀看，期待您開啟設計實踐之旅！",
        theme: "emerald",
        backgroundGlow: "rgba(16, 185, 129, 0.15)"
      }
    ]
  },
  {
    id: "seo-geo-aieo-2026",
    title: "迎戰 AI 搜尋時代：SEO、GEO 與 AIEO 全面優化指南",
    description: "剖析搜尋生態革命，探討傳統關鍵字優化、生成式引擎摘要卡位（GEO）與 AI 聊天大腦心智佔領（AIEO）的黃金心法。",
    category: "technology",
    author: "Luna SEO Team",
    date: "2026-05-28",
    tags: ["SEO", "GEO", "AIEO", "AI Search", "Traffic"],
    slides: [
      {
        layout: "cover",
        title: "迎戰 AI 搜尋時代",
        subtitle: "SEO、GEO 與 AIEO 的核心概念與企業優化戰略指南",
        theme: "cyberpunk",
        backgroundGlow: "rgba(6, 182, 212, 0.15)"
      },
      {
        layout: "text",
        title: "搜尋生態的巨大革命",
        content: `隨著人工智慧技術的爆發，人們在網路上尋找答案的方式正在經歷一場顛覆性的革命。
        
        從過去 **「輸入關鍵字，在一長串網頁清單中篩選」**，到現在 **「直接向 AI 聊天機器人提問獲取單一精準答案」**，傳統的流量入口面臨著重新分配的挑戰。
        
        為了在現代網路生態中保持極高的曝光率，我們必須理解並佈局三個不同維度的優化策略。`,
        highlight: "未來的流量競爭，是爭奪 AI 大腦中的「被引用權 (Share of Voice)」"
      },
      {
        layout: "list",
        title: "壹、SEO (Search Engine Optimization) - 傳統搜尋引擎優化",
        subtitle: "針對傳統 Google、Bing 搜尋 — 核心邏輯是「圖書館找書」",
        items: [
          "**E-E-A-T 原則 (黃金標準)**：強調內容具備真實經驗 (Experience)、專業背景 (Expertise)、權威度 (Authoritative) 與高信賴度 (Trust)。",
          "**關鍵字與搜尋意圖 (Search Intent)**：透析使用者「搜這個詞的真正目的」，並提供能切實解決痛點的客製化深度內容。",
          "**網站體驗核心指標 (Core Web Vitals)**：追求極速的網頁載入體驗、完美的行動裝置支援性，防止網頁載入時佈局跳動。",
          "**反向連結 (Backlinks / 外部權重)**：爭取新聞媒體、學術機構、高知名度網站引用並做外部連結，取得高價值「投票」。"
        ]
      },
      {
        layout: "list",
        title: "貳、GEO (Generative Engine Optimization) - 生成式引擎優化",
        subtitle: "針對 Google AI Overviews、Bing Copilot 等 SGE 摘要 — 核心邏輯是「AI 助教幫你做摘要」",
        items: [
          "**直接解答能力 (Direct Answerability)**：在文章或各段落開頭簡明扼要給出直擊核心的回答，利於 AI 機器人瞬間檢索並摘要。",
          "**高密度的引用價值 (Citation Value)**：在內容中融合獨家數據分析、實地研究圖表、專家專訪，提供 AI 生成答案時佐證的「引用來源」。",
          "**流暢的對話式語境**：以口語化、邏輯連貫問答的 FAQ 結構撰寫，深度契合使用者句子式語音提問習慣。",
          "**清晰的語意結構 (Semantic)**：善用明晰階層的 H1-H3 標題、條列式 Bullet Points 與 Table 表格，降低 AI 大腦解析內容的阻礙。"
        ]
      },
      {
        layout: "list",
        title: "參、AIEO (AI Engine Optimization) - 聊天機器人優化",
        subtitle: "針對純 AI 聊天室 (ChatGPT, Claude, Perplexity) — 核心邏輯是「成為 AI 記憶庫裡的常識」",
        items: [
          "**品牌與實體的「數位足跡」**：提升品牌在 Wikipedia、熱門開發者 GitHub、全球公關媒體的覆蓋率，成為 AI 預訓練模型常識庫的一環。",
          "**機器人友善的資訊密度**：剔除無意義的情感修飾，全篇充斥高濃度的實體關聯 (Entities)，如專有名詞、年份、具體數值與關聯人物。",
          "**獨特不可取代的知識 (Unique)**：發行自家研究白皮書、獨家行業方法論或實用開源工具，形成 AI 不得不引用的獨家專利權力。",
          "**清晰的立場與對比分析**：建立客觀多維度的對比矩陣與場景推薦。在使用者要求 AI 作比較時，主動成為 AI 大腦的評判基準。"
        ]
      },
      {
        layout: "grid",
        title: "綜合對比分析表：SEO vs GEO vs AIEO",
        items: [
          {
            icon: "🔍",
            category: "傳統 SEO",
            tools: "Google, Bing",
            desc: "著重關鍵字密度、網頁架構與反向連結。使用者獲取「網頁連結列表」，點擊率為王。"
          },
          {
            icon: "🤖",
            category: "生成式 GEO",
            tools: "AI Overviews, Copilot",
            desc: "著重直接答案、FAQ 口語化與佐證數據。使用者獲取「AI 彙整的頂部摘要與引用卡片」。"
          },
          {
            icon: "🧠",
            category: "智能 AIEO",
            tools: "ChatGPT, Perplexity, Claude",
            desc: "著重高公信力數位足跡與 RAG 檢索實體。使用者獲取「AI 大腦直接推薦的品牌、工具與方案實作」。"
          }
        ]
      },
      {
        layout: "text",
        title: "新流量版圖的綜合優化戰略",
        content: `未來的網路流量爭奪，必須同時滿足「人類的閱讀體驗」與「AI 機器人的資料解析邏輯」。
        
        * **基礎打底 (SEO)**：確保體驗順暢、網站體質優良，這是讓 AI 爬蟲願意深入造訪的第一步。
        * **摘要卡位 (GEO)**：多用條列式、開門見山直接回答，提供第一手數據圖表，卡位搜尋摘要來源。
        * **佔領心智 (AIEO)**：全網佈局高價值數位足跡，產出獨家不可替代知識，成為 AI 大腦的常識首選。`,
        highlight: "「同時寫給人看，也寫給 AI 大腦看，才能在新流量時代立於不敗之地」"
      },
      {
        layout: "cover",
        title: "佈局未來流量，領航 AI 搜尋時代",
        subtitle: "掌握 SEO、GEO 與 AIEO，卡位 AI 大腦的最佳席次。\n謝謝聆聽，簡報結束！",
        theme: "emerald",
        backgroundGlow: "rgba(16, 185, 129, 0.15)"
      }
    ]
  }
];
