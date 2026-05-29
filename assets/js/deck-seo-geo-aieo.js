// Preloaded Presentation: 迎戰 AI 搜尋時代
const DECK_SEO_GEO_AIEO_MD = `# 迎戰 AI 搜尋時代：SEO、GEO 與 AIEO 全面優化指南
## 副標題：零點擊率 (Zero-Click) 浪潮下，如何讓您的品牌被大模型精準引用與推薦
基於 2026 搜尋行銷生態最新實戰指南編寫。全面解析生成式引擎與大模型常識語料庫的優化公式。本簡報共計 22 頁。

---

## 導言：傳統搜尋引擎的黃昏
### 當用戶不再需要點開網站
* **搜尋行為的巨變**：過去，我們輸入關鍵字，在十個藍色連結中尋找答案。現在，用戶在 Perplexity 或 ChatGPT Search 直接獲得整理好的完美報告。
* **流量焦慮**：您的網站內容依然被抓取，但用戶不再點擊進入您的網站。這被稱為「零點擊率 (Zero-Click)」現象。
* **新戰場**：如何從「被點擊」轉化為「被 AI 作為權威來源引用」。

---

## 課程思維導圖：AI 搜尋優化全景
### 從「被點擊」轉向「被引用與推薦」
<style>
  .mindmap-container {
    display: grid;
    grid-template-columns: 1.3fr 0.6fr 1.3fr;
    grid-template-rows: 1fr 1.2fr 1fr;
    gap: 1.25rem;
    align-items: center;
    justify-items: center;
    width: 100%;
    height: 310px;
    margin-top: 0.5rem;
    position: relative;
  }
  .mindmap-node {
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(10, 11, 24, 0.6);
    backdrop-filter: blur(10px);
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    width: 100%;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: pointer;
    z-index: 2;
    position: relative;
    text-align: left;
  }
  .mindmap-node:hover {
    transform: translateY(-4px) scale(1.03);
    border-color: var(--accent-cyan, #06b6d4);
    box-shadow: 0 8px 30px rgba(6, 182, 212, 0.25), 0 0 15px rgba(6, 182, 212, 0.1);
  }
  .mindmap-center {
    border: 2px solid var(--accent-cyan, #06b6d4);
    background: rgba(6, 182, 212, 0.1);
    box-shadow: 0 0 25px rgba(6, 182, 212, 0.35);
    padding: 1rem;
    text-align: center;
    border-radius: 1rem;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: pointer;
    z-index: 3;
    position: relative;
    width: 100%;
  }
  .mindmap-center:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px rgba(6, 182, 212, 0.5), 0 0 20px rgba(139, 92, 246, 0.2);
    border-color: var(--accent-purple, #a855f7);
  }
  .mindmap-node strong {
    color: #fff;
    font-size: 0.9rem;
    display: block;
    margin-bottom: 0.2rem;
  }
  .mindmap-node span {
    font-size: 0.75rem;
    color: var(--text-secondary, #94a3b8);
    line-height: 1.35;
    display: block;
  }
</style>

<div class="mindmap-container">
  <svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none;">
    <defs>
      <linearGradient id="glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="var(--accent-cyan, #06b6d4)" stop-opacity="0.8" />
        <stop offset="100%" stop-color="var(--accent-blue, #3b82f6)" stop-opacity="0.3" />
      </linearGradient>
    </defs>
    <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="url(#glow-grad)" stroke-width="2" stroke-dasharray="4 4" />
    <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="url(#glow-grad)" stroke-width="2" stroke-dasharray="4 4" />
    <line x1="50%" y1="50%" x2="20%" y2="50%" stroke="url(#glow-grad)" stroke-width="2" stroke-dasharray="4 4" />
    <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="url(#glow-grad)" stroke-width="2" stroke-dasharray="4 4" />
    <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="url(#glow-grad)" stroke-width="2" stroke-dasharray="4 4" />
  </svg>

  <div class="mindmap-node" style="grid-column: 1; grid-row: 1;">
    <strong>💻 技術基礎 (Technical SEO)</strong>
    <span>傳統 SEO 是地基，確保爬蟲能秒速理解網站結構與欄位。</span>
  </div>

  <div class="mindmap-node" style="grid-column: 3; grid-row: 1;">
    <strong>⚡ 引用優化 (GEO)</strong>
    <span>優化引用率。強化直接解答、清晰數據表與條列清單。</span>
  </div>

  <div class="mindmap-center" style="grid-column: 2; grid-row: 2;">
    <strong style="color: #fff; font-size: 1.1rem; display: block; margin-bottom: 0.25rem;">AI 搜尋優化全景</strong>
    <span style="font-size: 0.8rem; color: var(--accent-cyan, #06b6d4); font-weight: 600;">核心思維導圖</span>
  </div>

  <div class="mindmap-node" style="grid-column: 1; grid-row: 2;">
    <strong>🤝 外部信任 (Third-Party Trust)</strong>
    <span>利用社群論壇、媒體公關，打造 AI 信任的第三方背書。</span>
  </div>

  <div class="mindmap-node" style="grid-column: 3; grid-row: 2;">
    <strong>🧠 心智佔領 (AIEO)</strong>
    <span>深植 LLM 預訓練語料，讓品牌成為大模型常識的一部分。</span>
  </div>

  <div class="mindmap-node" style="grid-column: 2; grid-row: 3; text-align: center;">
    <strong>📈 指標轉化 (Share of Model)</strong>
    <span>從點擊率 (CTR) 轉向模型提及率，重新定義漏斗。</span>
  </div>
</div>

---

## 2026 AI 搜尋最佳化四大支柱
### 從「關鍵字卡位」晉升為「LLM 語料信任推薦」
* **一、技術性傳統 SEO (Technical SEO)**：依然是地基，確保爬蟲能秒速讀取您的數據。
* **二、生成式引擎最佳化 (GEO)**：針對 AI 搜尋引擎的引用演算法進行結構優化。
* **三、人工智慧引擎最佳化 (AIEO)**：深入大模型底層，成為 AI「常識」的一部分。
* **四、外部信任網路建構 (Third-Party Trust Layer)**：利用論壇與公關，建立 AI 最信任的第三方背書。

---

## 支柱一：技術性傳統 SEO (Technical SEO)
### 無論搜尋引擎如何演進，清晰的結構永遠是王道
儘管版面變了，但 AI 的底層依然依賴爬蟲 (Crawlers，如 GPTBot) 來獲取最新資訊。
* **網頁性能 (Core Web Vitals)**：AI 爬蟲對超時極其敏感。如果您的網頁充滿了臃腫的 JavaScript 導致加載速度慢，爬蟲會直接放棄抓取。
* **乾淨的 HTML 樹**：確保 H1, H2, H3 標籤邏輯嚴密，不要為了視覺排版而亂用標籤，這會嚴重干擾 AI 閱讀文章的脈絡。

---

## 網頁性能的黃金標準：Core Web Vitals 檢測
### 爬蟲與用戶體驗的生死界線
* **一、效能即門票**：AI 搜尋引擎 (如 Perplexity) 為了提升用戶體驗，會主動過濾加載速度緩慢的網站。性能差的網站連被 AI 爬取的機會都沒有！
* **二、LCP (最大內容繪製)**：網頁主內容載入速度，理想標準是 \`2.5 秒\` 以內。
* **三、INP (互動至下次繪製)**：互動延遲感（2024年底全面取代 FID），理想標準是 \`200 毫秒\` 以內。
* **四、CLS (累計版面配置轉移)**：元件內亂跳程度（視覺穩定性），理想得分是 \`0.1\` 以下。
* **五、持續優化**：優化圖片格式 (WebP)、延遲加載非關鍵 JS、精簡 CSS，是保持高分的關鍵。

---

## 實戰檢測大師：PageSpeed Insights 診斷
### 全面剖析行動裝置與電腦版的真實體驗
我們怎麼能少這最重要的測試網站？<a href="https://pagespeed.web.dev/" target="_blank" style="color: var(--accent, #a855f7); text-decoration: underline; font-weight: bold;">PageSpeed Insights</a> 是 Google 推出的官方效能體檢神器！
<br><br>
<strong>💡 雙重體驗數據指標：</strong>
<ul style="margin-left: 1.2rem; margin-top: 0.4rem; list-style-type: disc; line-height: 1.6;">
  <li style="margin-bottom: 0.4rem;"><strong>模擬數據 (Lighthouse)</strong>：在控制環境下模擬載入，提供精準的優化分數與診斷建議。</li>
  <li><strong>實際體驗數據 (CrUX)</strong>：收集過去 28 天真實 Chrome 用戶在全球各地的連線體驗，是 SEO 排名的真實依據！</li>
</ul>
<br>
<strong>⚡ 測試核心原則：</strong>
<div style="margin-top: 0.4rem; line-height: 1.6;"><strong>定期檢查、多點測試、追蹤回歸</strong>。將效能檢測融入部署流程，確保每次軟體更新不會破壞 SEO 表現。</div>
* 適用工具：Google PageSpeed Insights / Lighthouse CLI
* 使用情境：在發布新頁面或進行大幅度改版時，強制進行效能體檢
\`\`\`bash
# 使用 Lighthouse CLI 在本機進行自動化效能審查與產出報告
npm install -g lighthouse

# 執行診斷並產出 HTML 格式的完整優化報告
lighthouse https://pagespeed.web.dev/ --view --chrome-flags="--headless"

# 或者使用 Web Dev PageSpeed API 進行自動化 CI/CD 連續集成測試：
curl "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://your-domain.com&key=YOUR_API_KEY"
\`\`\`

---

## 為什麼 Schema 結構化資料更重要了？
### 幫 AI 戴上老花眼鏡
* 傳統 SEO 時代，Schema 只是為了在 Google 出現「星星評分」或「問答折疊面板」。
* 現在，**Schema 是 AI 快速提取標準解答的黃金捷徑**。
* 當你加上了 \`FAQPage\` 或是 \`Product\` 的 JSON-LD 語意標記，大模型不需要去猜這段文字是不是答案，它可以直接從 JSON 陣列中把解答抽出來放進回答裡。

---

## 實際範例：FAQ 與產品標記
### 程式碼級別的溝通
**情境：您的網站販售專業咖啡機**
在網頁的 \`&lt;head&gt;\` 中加入標準的結構化資料：
<pre><code style="font-size: 0.85rem; color: var(--accent-cyan);">
{
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Luna 專業半自動咖啡機",
    "offers": {
        "priceCurrency": "TWD",
        "price": "45000"
    },
    "review": { ... }
}
</code></pre>
這確保了當用戶問 AI「台灣有哪些四萬元左右的專業咖啡機？」時，您的產品能被精準命中。

---

## 支柱二：生成式引擎最佳化 (GEO)
### 專攻 Perplexity 與 ChatGPT Search
* **什麼是 GEO (Generative Engine Optimization)？**
  它是專門為了提高網站內容在生成式 AI 回答中的「引用頻率與權重」而生的技術。
* **核心法則**：AI 喜歡「確定性」、「結構化」以及「有數據佐證」的內容。

---

## GEO 的演算法偏好：直接解答與權威佐證
### 改變您的寫作習慣
* **開門見山 (Direct Answers)**：廢除過去「為了湊字數而寫的冗長前言」。在文章開頭的 100 字內，用「主詞-動詞-受詞」的直接句型回答標題的問題。
* **數據圖表 (Data & Tables)**：AI 非常喜歡抓取 HTML 或 Markdown 表格。如果您的文章在比較三款手機，**一定要用表格呈現規格**，AI 引用該表格的機率會高達 80%。
* **引用來源 (Citations)**：在文章內主動引用權威報告，這會連帶提升您文章本身的權威性評分。

---

## 實際範例：為 Perplexity 打造的文章結構
### 迎合 AI 胃口的寫作模板
**優化前**：
> 「說到 2026 年的 SEO，很多人可能會覺得很迷惘。其實呢，生成式 AI 改變了很多東西... (下略 500 字廢話)」
**優化後 (符合 GEO)**：
> 「2026 年 SEO 的最大變化是 **GEO (生成式引擎最佳化)** 的崛起。根據 Luna 行銷機構 2026 報告指出，傳統點擊率已下降 45%。
> **核心優化策略包含：**
> 1. 加入 Schema 標記
> 2. 使用表格呈現數據...」

---

## 支柱三：人工智慧引擎最佳化 (AIEO)
### 終極隱形滲透：進入大模型的潛意識
* **AIEO 核心邏輯**：傳統 SEO 是「當下爬取」，而 AIEO 是「進入常識」。
* 我們要確保當下一代大模型 (如 GPT-6) 進行**預訓練 (Pre-training)** 時，它讀到的資料庫裡，滿滿都是關於您的品牌的正面論述。
* 讓您的品牌與該領域的「權威方案」牢牢綁定。

---

## 從「被爬取」到「成為模型的常識」
### 深入訓練語料庫
各大 AI 公司訓練模型時，最愛用哪些資料？
1. **維基百科 (Wikipedia)**：最純粹的知識來源。
2. **開源數據庫 (如 Common Crawl)**：全網的高品質文章。
3. **學術庫與代碼庫 (arXiv, GitHub, Hugging Face)**：專業領域知識。
您的任務是：讓您的白皮書、開源專案、專業術語解釋，能夠大量存在於這些平台中。

---

## 實際範例：將白皮書推廣至開源庫
### 降維打擊的公關戰術
**情境：您是一間資安公司**
不要只是把「2026 資安防護白皮書」以 PDF 形式鎖在官網要用戶填 Email 下載（AI 爬不到！）。
**AIEO 戰術**：
1. 將白皮書整理成純文字與 Markdown 格式。
2. 作為一份開源的「資安威脅數據集 (Dataset)」發佈到 GitHub 與 Hugging Face。
3. 下一代模型在吸收 GitHub 資料時，就會把「貴公司的防護理論」學進它的神經網路裡。當用戶詢問資安問題時，AI 會自然而然地「默寫」出你們的解決方案。

---

## 支柱四：外部信任網路建構
### AI 不只聽你說，它更相信「別人怎麼評價你」
* **大模型的防衛機制**：LLM 為了防範單一站點的自我吹噓（例如某小品牌在自己官網寫「我們是全球第一」），演算法會進行「多重來源比對」。
* 如果官網寫了，但全網沒有其他論壇或新聞報導證實，AI 會降低這條資訊的權重，甚至拒絕引用。

---

## 為什麼大模型比 Google 更依賴論壇？
### 真實人類反饋 (RLHF) 的延伸
* 像是 Reddit, PTT, Dcard, Mobile01 等論壇，充滿了真實用戶的討論。
* AI 認為這些地方的資訊比企業官網更客觀、更具參考價值。
* **外部信譽足跡 (Off-site Reputation)** 成為決定品牌是否被 AI 推薦的最後一哩路。

---

## 實際範例：論壇的數位公關操作
### 建立不可撼動的信任背書
**戰術執行**：
1. **監控**：使用工具監控全網論壇關於您所在產業的關鍵字。
2. **深耕**：鼓勵真實的滿意客戶在 Reddit 或 PTT 上發表詳細的開箱文與使用心得。
3. **對齊**：確保這些論壇文章中，包含了您想要 AI 學會的「關鍵字」與「核心優勢」。
當 AI 總結「哪款軟體最好用」時，它爬取了 50 篇 PTT 文章，發現大家都推薦您，它就會毫不猶豫地把您列為第一推薦。

---

## 2026 搜尋流量的全新漏斗模型
### 重新定義轉換路徑
* **過去**：搜尋 -> 點擊進入官網 -> 閱讀 -> 轉換。
* **現在**：搜尋 -> **在 AI 回答中直接看到您的品牌與優勢** -> 產生信任 -> (有時連官網都不進) 直接去電商平台搜尋購買。
* **應對策略**：不要再死守官網流量。只要 AI 推薦了您，就算流量沒進來，轉換率（業績）依然會提升。

---

## 指標矩陣：從 CTR 轉向 Share of Model
| **最佳化維度** | **傳統 SEO** | **2026 GEO / AIEO 時代** |
| :--- | :--- | :--- |
| **目標位置** | Google 搜尋前三名藍色連結 | AI 答覆中的主引用標籤與推薦首選 |
| **核心指標** | 點擊率 (CTR)、官網流量 | **模型佔有率 (Share of Model)** |
| **內容風格** | 長篇大論、關鍵字堆疊 | 高結構化、精煉、Markdown 表格 |
| **信任來源** | 外部反向連結 (Backlinks) | 綜合提及、論壇口碑、開源數據集 |

---

## 內容農場的末日與高品質內容的復興
### 劣幣驅逐良幣的時代結束了
* 過去十年，SEO 充滿了大量粗製濫造、為了騙點擊而生的「內容農場」。
* 進入 2026 年，大模型的推理能力已經強大到能夠輕易識破缺乏實質見解的「水文」。
* 只有包含「獨家原創數據」、「深度的專家見解」以及「真實人類經驗」的內容，才能被 AI 奉為圭臬。

---

## 總結與思考 (Summary & Reflection)
### 放下流量執念，擁抱信任推薦
* **總結**：SEO 並未死亡，而是進化成了 AIEO 與 GEO。未來的行銷人必須兼具工程師的邏輯（搞定 Schema 與 API）與公關專家的手腕（深耕論壇與開源庫），讓品牌成為大模型大腦中不可或缺的常識。
* **思考 1**：如果現在立刻去 Perplexity 詢問您公司的主打產品，AI 給出的評價是什麼？它引用的來源是你們的官網還是某篇負面的論壇文章？
* **思考 2**：您的網站內容中，有多少比例是「條理分明的表格與結構化數據」，又有多少是「對 AI 毫無幫助的廢話」？
* **行動呼籲**：今天就盤點官網最重要的 5 篇產品介紹，將其中的規格與優勢改寫為清晰的 Markdown 表格結構！
`;