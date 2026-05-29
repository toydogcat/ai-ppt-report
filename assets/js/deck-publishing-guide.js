// Preloaded Presentation: 上架教學與開發指南
const DECK_PUBLISHING_GUIDE_MD = `# Luna AI PPT 上架與開發教學
## 副標題：從 Markdown 到華麗 3D 簡報，只需五分鐘的標準化流程
本指南專為 Luna AI PPT Hub 的貢獻者設計。我們將帶領您一步步將靜態的文字，轉化為具備極致視覺效果的互動式簡報。

---

## 🚀 為什麼要上架到 Luna AI Hub？
### 讓您的知識以最優雅的方式呈現
* **極致視覺**：內建 3D 翻轉、旋轉、縮放等多種轉場特效。
* **零成本維護**：純靜態網頁架構，支援 GitHub Pages / Firebase Hosting 秒級部署。
* **自動化解析**：支援標準 Markdown 格式，自動識別代碼塊、清單與 LaTeX 數學公式。
* **開發者友善**：簡單的 JS 配對機制，無需學習複雜的前端框架即可擴充內容。

---

## 🛠️ 上架五部曲：核心流程概覽
### 簡單、快速、標準化
1. **編寫內容**：準備符合規範的 Markdown 文本。
2. **建立檔案**：在 \`assets/js/\` 目錄下建立專屬 JS 檔。
3. **註冊資料**：在 \`slides-data.js\` 中新增簡報元數據。
4. **配對對應**：在 \`app.js\` 中將 ID 與變數進行關聯。
5. **掛載腳本**：在 \`index.html\` 中引入您的腳本。

---

## 第一步：編寫 Markdown 內容
### 掌握分頁符號 \`---\`
* **基本語法**：使用標準 Markdown (H1, H2, 條列式, 連結)。
* **分頁邏輯**：使用三個連字號 \`---\` 作為分頁線。
* **特殊組件**：
  * **代碼塊**：\`\`\`javascript ... \`\`\` 會自動渲染並提供複製按鈕。
  * **數學公式**：支援 \`$ ... $\` (行內) 與 \`$$ ... $$\` (塊級) KaTeX 渲染。
  * **Prompt 盒**：系統會自動偵測並美化 AI 提示詞區塊。

---

## 第二步：建立 JS 內容檔案
### 封裝您的 Markdown
在 \`assets/js/\` 資料夾下建立一個檔案（例如：\`deck-my-topic.js\`）。
內容格式如下：
\`\`\`javascript
// Preloaded Presentation: 我的主題名稱
// 💡 強烈建議使用 String.raw 避免 LaTeX 反斜線報錯
const DECK_MY_TOPIC_MD = String.raw\`# 這裡放標題
## 這裡放副標題
內容文字...

---

## 第二頁標題
更多內容...\`;
\`\`\`
*提示：使用 \`String.raw\` 可以防止 \`\\frac\`, \`\\n\`, \`\\u\` 等字元被 JS 誤當成轉義字元。*

---

## 第三步：註冊簡報元數據
### 讓系統認識您的作品
開啟 \`assets/js/slides-data.js\`，在 \`PRELOADED_DECKS\` 陣列中新增物件：
\`\`\`javascript
{
  id: "my-topic-unique-id", // 唯一識別碼
  title: "我的精彩簡報",
  description: "這是一段吸引人的簡報簡介...",
  category: "dev-tech", // 分類 (詳見下頁)
  author: "您的名字",
  date: "2026-05-29",
  tags: ["Tag1", "Tag2"],
  slides: [] // 保持空陣列，系統會自動填充
}
\`\`\`

---

## 🎨 分類標籤參考表
### 精準定位您的簡報
目前系統支援以下分類（對應不同的發光色系）：
* \`ai-automation\`: AI 智慧 & 自動化
* \`design-marketing\`: 設計與行銷
* \`search-analytics\`: 搜尋與數據分析
* \`dev-tech\`: 開發與先進技術
* \`calculus\`: 微積分
* \`custom\`: 自訂簡報

---

## 第四步：在 App 中建立配對
### 建立邏輯連結
開啟 \`assets/js/app.js\`，尋找 \`init()\` 函式內的 \`deckMdMap\` 常數。
將您的 ID 與 JS 變數名稱進行配對：
\`\`\`javascript
const deckMdMap = {
  // ... 其他簡報
  "my-topic-unique-id": typeof DECK_MY_TOPIC_MD !== "undefined" 
                        ? DECK_MY_TOPIC_MD : null,
};
\`\`\`
這一步是確保點擊卡片時，系統能找到對應的 Markdown 內容。

---

## 第五步：掛載腳本至主頁面
### 最後一哩路
開啟根目錄的 \`index.html\`，在 \`</body>\` 標籤前引入您的 JS 檔案。
**注意：必須在 \`slides-data.js\` 之前引入。**
\`\`\`html
<!-- 加入這一行 (若檔案在子資料夾，請包含路徑) -->
<script src="assets/js/calculus/deck-my-topic.js"></script>

<script src="assets/js/slides-data.js"></script>
<script src="assets/js/app.js"></script>
\`\`\`

---

## 📸 進階：加入視覺資產
### 讓簡報更生動
* **圖片路徑**：將圖片放入 \`assets/img/\`。
* **引用方式**：在 Markdown 中使用 \`![描述](assets/img/your-image.webp)\`。
* **推薦格式**：使用 \`.webp\` 格式以獲得最佳的載入速度與品質平衡。
* **圖標選擇**：系統整合了 Lucide Icons，您可以在 \`index.html\` 的分類過濾器中更換圖標。

---

## 🚀 部署與發佈
### 讓全世界看見
當您在本機完成開發與測試後：
1. **GitHub Pages**：直接推送至 main 分支，設定 Actions 自動部署。
2. **Firebase**：執行 \`firebase deploy\`。
3. **驗證**：檢查行動端適配性，確保 3D 轉場在手機上依然流暢。

---

## 💡 結語
### 創意無極限
Luna AI PPT Hub 不僅僅是一個展示工具，它是一個將「想法」轉化為「視覺」的橋樑。
期待看到您上傳更多精彩、具備深度且富有美感的簡報作品！

如有任何疑問，請參考 \`TMP/developer_guide.md\` 或聯繫開發團隊。
`;
