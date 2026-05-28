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
        highlight: "當你需要優化舊有 RAG 系統的向量檢索邏輯，重構為 dense 與 sparse 的 Hybrid Search。",
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
  }
];
