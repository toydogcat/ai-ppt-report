// Preloaded Presentation: Firebase 與 GA4 埋點教學
const DECK_FIREBASE_MD = `# Firebase 與 GA4 埋點教學：從數據採集到 AI 洞察
## 副標題：掌握事件驅動模型，打造精準的產品增長雷達
專為開發者、數據分析師與產品經理設計。深度解析 Firebase Analytics (GA4) 的埋點邏輯、埋點實作與 2026 年最新分析應用。本簡報共計 20 頁。

---

## 導言：數據是產品的眼睛
### 為什麼埋點如此重要？
* **痛點**：產品上線後，不知道用戶在哪個步驟流失，也不知道哪個功能最受歡迎。
* **解決方案**：透過「埋點 (Event Tracking)」，將用戶的行為數位化，轉化為可分析、可量化的數據。
* **2026 趨勢**：數據不再只是為了看報表，更是為了餵給 AI 模型進行「預測性分析」(Predictive Analytics)。

---

## Firebase 與 GA4 的關係
### 同一個大腦，不同的介面
* **Firebase Analytics**：專為 App（iOS/Android）開發設計，具備實時診斷功能。
* **Google Analytics 4 (GA4)**：統一了 Web 與 App 的數據模型。
* 在 Firebase 後台看到的數據，會自動同步到 GA4。GA4 提供更強大的探索分析、受眾分群與 BigQuery 匯出能力。

---

## 核心觀念：GA4 事件驅動模型
### 一切皆是事件 (Everything is an Event)
* **傳統 GA (UA)**：以「工作階段 (Sessions)」和「網頁瀏覽 (Pageviews)」為核心。
* **GA4 (Firebase)**：以「事件 (Events)」為核心。
* 任何行為（點擊按鈕、捲動頁面、完成結帳）都被定義為一個事件，並帶有豐富的 **參數 (Parameters)**。

---

## 事件的四種類別
### 善用官方建議，事半功倍
1. **自動收集的事件**：如 \`first_open\`, \`session_start\` (不需寫程式)。
2. **加強型測量事件**：Web 端自動追蹤的 \`scroll\`, \`click\`。
3. **建議事件**：Google 預定義好名稱的事件，如 \`purchase\`, \`login\`，使用這些名稱能解鎖 AI 預測報表。
4. **自訂事件**：根據業務需求自行命名的事件。

---

## 埋點實作一：環境初始化 (Web)
### 建立數據傳輸的高速公路
使用 Firebase SDK v11+：
<pre><code style="font-size: 0.8rem; background: #2d2d2d; padding: 10px; border-radius: 5px; color: #fff;">
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  appId: "YOUR_APP_ID",
  measurementId: "G-XXXXXXXX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
</code></pre>

---

## 埋點實作二：基礎事件埋點 (logEvent)
### 捕捉用戶的每一個瞬間
**範例：追蹤「課程加入收藏」按鈕點擊**
<pre><code style="font-size: 0.8rem; background: #2d2d2d; padding: 10px; border-radius: 5px; color: #fff;">
logEvent(analytics, 'add_to_wishlist', {
  course_id: 'AI_2026_001',
  course_name: 'Vibe Coding 實戰',
  user_tier: 'premium',
  page_location: 'home_featured'
});
</code></pre>
* **關鍵心法**：參數名稱要統一（如 \`snake_case\`），且必須包含足夠的維度以便後續分析。

---

## 埋點實作三：用戶屬性 (User Properties)
### 為用戶貼上標籤
* 除了事件，你還需要知道「是誰」做了這件事。
* **User Properties**：用於描述用戶的靜體特徵（如：會員等級、性別、是否為付費用戶）。
<pre><code style="font-size: 0.8rem; background: #2d2d2d; padding: 10px; border-radius: 5px; color: #fff;">
import { setUserProperties } from "firebase/analytics";

setUserProperties(analytics, {
  subscription_status: 'gold',
  preferred_language: 'zh-TW',
  acquisition_source: 'fb_ads'
});
</code></pre>

---

## 埋點實務：命名規範 (Naming Convention)
### 不要讓數據變成一團亂麻
* **統一格式**：全小寫、使用底線 (snake_case)。
* **動詞優先**：\`button_click\`, \`file_download\`, \`form_submit\`。
* **避免重複**：不要同時使用 \`click_button\` 和 \`button_click\`。
* **建議清單**：在專案開始前，先在 Google Sheet 建立一份「埋點字典」，讓所有開發者與 PM 遵循。

---

## 數據驗證工具：Firebase DebugView
### 即時監控，精準除錯
* **痛點**：埋好點後，通常要等 24 小時報表才會出來，無法即時確認是否埋錯。
* **解法**：開啟 **DebugView**。
* 在開發模式下，你可以看到事件「秒級」跳出。如果參數沒帶到、或是名稱拼錯，一眼就能發現。

---

## GA4 後台關鍵設定：自訂維度
### 沒設這個，埋了也白埋
* **注意**：你在 \`logEvent\` 裡帶的參數（如 \`course_id\`），GA4 預設是不會顯示在報表裡的！
* **必須手動註冊**：
  1. 進入 GA4 管理介面。
  2. 點選「自訂定義 (Custom Definitions)」。
  3. 建立「自訂維度」，名稱與程式碼中的參數名稱完全一致。
  4. 等待 24 小時後，該數據才會出現在分析工具中。

---

## 深度分析一：漏斗分析 (Funnel Exploration)
### 找出流失的「出血點」
* **場景**：註冊流程。
  - 第一步：進入首頁。
  - 第二步：點擊註冊。
  - 第三步：填寫信箱。
  - 第四步：完成驗證。
* **分析**：透過漏斗圖，如果發現從「填寫信箱」到「完成驗證」流失了 80%，那可能代表驗證信寄太慢，或是介面引導有問題。

---

## 深度分析二：受眾分群 (Audience)
### 實施精準行銷
* 在 GA4 中根據行為定義受眾。
* **範例**：定義「過去 7 天內將商品加入購物車，但最後沒買」的用戶。
* **應用**：將這組受眾同步到 Google Ads 或 Firebase Cloud Messaging，發送一張「限時 9 折券」推播給他們。

---

## 2026 AI 功能：預測性指標
### 讓 AI 告訴你誰會付錢
GA4 內建 AI 模型，會自動計算：
* **流失機率 (Churn Probability)**：預測哪些用戶在未來 7 天內可能不再回來。
* **購買機率 (Purchase Probability)**：預測哪些用戶極有可能在短期內下單。
* **預測收入**：預測未來 28 天內來自該用戶的總營收。
* 這些指標能幫你把廣告預算精準花在最有潛力的用戶身上。

---

## 資安與隱私：同意模式 (Consent Mode v2)
### 合規才是硬道理
* 受歐盟法規與隱私權保護趨勢影響，2026 年必須實作「同意模式」。
* **機制**：如果用戶點擊「不同意追蹤」，Firebase 會停止發送 Cookie 標識符。
* **解決方案**：GA4 會改用「行為建模 (Behavioral Modeling)」，利用 AI 填補那些沒被追蹤到的數據空白，維持數據的連續性。

---

## BigQuery 匯出：大數據與 AI 建模
### 拿回數據的所有權
* Firebase 免費支援將原始數據 (Raw Data) 匯出到 Google BigQuery。
* **為什麼要這樣做？**
  - **資料備份**：數據永不過期。
  - **SQL 查詢**：進行比 GA4 後台更複雜的多表關聯分析。
  - **自建 AI 模型**：將原始數據餵給 Vertex AI，開發專屬於自家的推薦系統。

---

## 埋點清單範例：電商 App
| **行為 (Action)** | **事件名稱 (Event)** | **參數 (Parameters)** |
| :--- | :--- | :--- |
| 商品點擊 | \`select_item\` | item_id, item_name, price |
| 加入購物車 | \`add_to_cart\` | item_id, quantity, value |
| 開始結帳 | \`begin_checkout\` | coupon_code, shipping_tier |
| 完成購買 | \`purchase\` | transaction_id, value, tax |

---

## 數據解讀的陷阱
### 不要被數字欺騙
* **虛榮指標 (Vanity Metrics)**：例如總下載量。數字很漂亮但對業績沒幫助。
* **北極星指標 (North Star Metric)**：應該專注於「核心價值」產生的指標（例如：每日完成交易數、每人平均閱讀時長）。
* **倖存者偏差**：只看留下來的用戶數據，卻忽略了那些「剛進來就離開」的用戶回饋。

---

## 總結：建立數據驅動文化
### 數據不是主管的工具，是團隊的語言
1. **先定義目標**：不要漫無目的地亂埋點。
2. **制定規範**：確保數據乾淨、可讀。
3. **持續迭代**：根據數據發現問題 -> 假設 -> 實驗 -> 驗證。
4. **全員參與**：讓開發者與設計師也能看懂數據。

---

## 總結與思考 (Summary & Reflection)
### 讓數據為你的直覺背書
* **總結**：Firebase 與 GA4 提供了一套強大的事件驅動追蹤系統。透過結構化的埋點實作、DebugView 的即時驗證以及後台的自訂維度註冊，我們能建立起精準的產品監測網，並利用 AI 預測能力驅動業務成長。
* **思考 1**：回顧您目前的產品，如果只能選擇「三個最重要的用戶行為」進行追蹤，您會選哪三個？
* **思考 2**：在重視隱私的 2026 年，如果有一半的用戶拒絕被追蹤，您該如何調整您的數據分析策略？
* **行動呼籲**：今天就開啟 Firebase Console，檢查您的 DebugView 是否能正常運作，並試著觸發一個帶有 3 個參數的自訂事件！
`;