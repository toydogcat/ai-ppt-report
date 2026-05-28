// Preloaded Presentation: AI 落地應用實務辦公室應用指南
const DECK_OFFICE_APPLICATIONS_MD = `# AI 落地應用實務辦公室應用指南
## 副標題：從「工具零散化」走向「自動化工作流與 Agent 協同」的實戰部署
基於 2026 最新企業自動化操作實務，協助白領工作者將日常繁瑣任務交給 AI 自動完成。

---

## 企業辦公室 AI 落地四大支柱
### 重新定義白領工作效率，釋放 10 倍數位生產力
* **一、嵌入式 AI 日常辦公 (Embedded Office AI)**：微軟 Copilot 與 Google Workspace 深度整合，讓郵件、簡報、合約一鍵自動生成。
* **二、無程式碼工作流自動化 (No-Code Automation)**：使用 n8n、Make 等工具，串接 Slack、LINE、Notion 等軟體打造 24 小時運行的「數位生產線」。
* **三、私有知識庫第二大腦 (RAG Knowledge Base)**：利用 RAG 檢索增強技術（如 NotebookLM），讓 AI 精準回答內部規章與客戶 QA。
* **四、Agentic 智能代辦 (Agentic Delegation)**：委派自主 Agent 進行高難度跨系統調研、資料填報與數據對齊任務。

---

## 支柱一：嵌入式 AI 日常辦公 (Embedded Office AI)
### 郵件撰寫、報表摘要、簡報大綱 ── 隱形在日常工具中的強大助理
* **情境郵件一鍵生成**：Copilot 讀取前文往來脈絡，自動撰寫出符合特定語氣（如：嚴謹、親和）的長篇商務回信，省下 80% 構思時間。
* **智慧合約與文檔比對**：直接在 Word 中下達「比對本合約與標準範本的條款差異」，AI 在 10 秒內揪出潛在法務風險點，並提供修改策略。

---

## 支柱二：無程式碼工作流自動化 (No-Code Automation)
### 拒絕重複複製貼上！用 n8n 打造全自動的數據監控與通知流水線
* **數據跨系統對接**：當 Google 表單收到新的客訴，n8n 自動呼叫 Claude 進行「情感分類與嚴重度評估」，隨後將高風險項目即時發送 Slack 通知主管，並同步新增一筆 Jira 工單。

* **適用工具：** n8n AI
* **使用情境：** 配置 n8n 自動化 Webhook 節點，讀取用戶反饋並進行智能分派。
> Role: Workflow Automation Engineer
> Task: Parse incoming webhook payload (customer support ticket), call LLM to classify sentiment (Positive/Neutral/Negative), and route.
> Rules: If Negative, translate to Traditional Chinese, generate a draft response, and send an urgent Slack alert with the draft.
> Output: Fully structured automation JSON payload.

---

## 支柱三：私有知識庫第二大腦 (RAG Knowledge Base)
### 解決大模型胡說八道！結合企業私有文檔，打造 100% 精準回答的專家系統
* **檢索增強生成 (Retrieval-Augmented Generation)**：大模型只具備通用常識，但結合 RAG 技術後，AI 能在回答前「先翻閱」您上傳的 200 頁內部技術手冊與 ISO 規範。
* **NotebookLM 實戰**：將專案相關的 PDF、Google 文件塞入，AI 自動產生完整的 FAQ 清單與語音導覽摘要，使新人培訓成本降低 70%。

---

## 支柱四：Agentic 智能代辦 (Agentic Delegation)
### 委派擁有自主決策能力的 Agent，執行跨系統、多步驟的複雜任務
* **從指令到目標**：傳統 AI 需要「一步一步指揮」；而 Agent 只需要給予目標「幫我調研本週晶片大廠最新動態並整理表格」。
* **自主修正與排查**：當遇到網站 403 阻擋，Agent 會自主嘗試切換搜尋引擎、尋找替代 API 節點，直到順利完成數據抓取並對齊輸出。

---

## 辦公自動化各部門落地矩陣
| **應用部門** | **首選工具與系統** | **實戰應用場景與產出** |
| :--- | :--- | :--- |
| **行政與 HR** | NotebookLM / Copilot | 新人入職指南自動問答、內部行政規章 FAQ、履歷結構化篩選。 |
| **行銷與 PR** | Dify / n8n / Make | 全網競爭對手新品動態監控、社群貼文多語系自動生成與排程發佈。 |
| **財務與法務** | Microsoft Copilot Pro | 複雜合約比對與法規風險提示、報銷單據自動 OCR 識別與核對。 |
| **客戶服務** | Chatbase / Coze | 24 小時在線智能客服、客訴信件情感評估與自動化草稿生成。 |`;
