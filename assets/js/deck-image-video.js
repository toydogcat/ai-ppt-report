// Preloaded Presentation: 生圖 生影片 AI 應用指南
const DECK_IMAGE_VIDEO_MD = `# 生圖生影片 AI 應用指南：生產級視覺創作與一致性控制
## 副標題：掌握 Midjourney v7 與 Google Veo 3.1，打造高一致性的專業級影片工作流
專為設計師、導演與數位創作者設計，拆解 2026 年最新影像生成與「角色/場景一致性控制」實戰密技。全篇共 20 頁，帶您從理論走向實戰。

---

## 導言：進入「精準控制」的生成時代
### 告別「抽卡」，迎接「導演」視角
* **過去的痛點**：早期的 AI 繪圖像在玩吃角子老虎機，每次生成的畫風、角色特徵都不同，難以應用於連貫的商業專案。
* **2026 的突破**：現在我們擁有了「精確一致性控制」與「精細物理模擬」的能力。AI 不再只是隨機畫家，而是完全聽命於您的「超級攝影棚與特效團隊」。

---

## 視覺創作四大核心支柱
### 從靜態到動態的完美工作流
* **一、影像生成提示詞工程 (Prompt Engineering)**：精確控制光影、構圖與鏡頭視角。
* **二、導演級鏡頭與影片生成 (Cinematic Video)**：實現大片級運鏡與物理世界的真實還原。
* **三、角色與風格一致性控制 (Visual Consistency)**：鎖定角色臉部與畫風，確保分鏡不崩壞。
* **四、以「圖生影」為錨點的工作流 (Image-to-Video)**：打造無閃爍、極致穩定的動態視覺。

---

## 支柱一：影像生成提示詞工程
### 用結構化語言指揮 AI，不再辭不達意
不要再用「一個漂亮的女孩在街上」這種模糊的詞彙！
專業的 Prompt 必須具備模塊化的結構，讓 AI 精準解析每一個視覺元素。
**黃金公式**：
\`[主體描述] + [環境與場景細節] + [光影與氣氛] + [鏡頭與相機參數] + [畫風與渲染引擎]\`

---

## 結構化 Prompt 的拆解與應用
### 每一段都有其獨立的功能
* **主體**：A cyberpunk detective with neon tattoos (誰？有什麼特徵？)
* **環境**：standing in a rainy dystopian Tokyo alleyway (在哪裡？周圍有什麼？)
* **光影**：cinematic dramatic lighting, high contrast, rim light (光源從哪來？氣氛如何？)
* **鏡頭**：shot on 35mm lens, f/1.8, shallow depth of field (焦段多少？景深多深？)
* **渲染**：Unreal Engine 5 style, photorealistic, 8k (寫實還是插畫？清晰度？)

---

## 實際範例：控制光影與相機參數
### 攝影師視角的 AI 實戰
<div style="display: flex; gap: 20px; align-items: center;">
<div style="flex: 1;">
**微距美食攝影**<br>
利用明確指定相機參數，我們能避免 AI 生成廉價的 3D 感，創造逼真的商業攝影質感。
> *Prompt: A close-up macro photography of a hot latte art, steam rising, warm morning sunlight streaming through a window, shot on 85mm lens, f/1.4 aperture, beautiful bokeh, photorealistic --ar 16:9*
</div>
<div style="flex: 1;">
<img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80" style="width: 100%; border-radius: 8px;">
</div>
</div>

---

## 支柱二：導演級鏡頭與影片生成
### 把 AI 當成你的攝影機軌道車
過去的 AI 影片總是胡亂縮放或變形。2026 年的影片模型（如 Veo 3.1, Kling AI）允許我們像真實拍片一樣指定相機運動。
* **Pan (水平平移)**：適合展示廣闊場景或追隨角色橫向移動。
* **Tilt (垂直俯仰)**：從腳底拍到頭頂，或展現高聳的摩天大樓。
* **Zoom (推軌縮放)**：拉近聚焦情感，拉遠展示孤獨感。

---

## 鏡頭語言的精準控制
### 在工具中輸入明確的運動軌跡
許多先進工具已經提供了 UI 介面來設定鏡頭。
例如在 Kling AI 中，你可以上傳一張圖片，然後設定：
**Camera Control:**
- X-axis: +5 (向右平移)
- Z-axis: +2 (緩慢推進)
- 影片長度：10 秒
這樣生成的影片將會有極度穩定且符合預期的專業運鏡，而不會出現隨機的亂晃。

---

## 實際範例：AI 影片中的流體與物理模擬
### 挑戰極致的真實感
最新模型已經內建了對「物理世界」的深刻理解。
<div style="display: flex; gap: 20px; align-items: center;">
<div style="flex: 1;">
過去生成「潑水」或「爆炸」會變成奇怪的黏液。現在，AI 能夠完美模擬流體力學、煙霧擴散與布料物理。
> *Prompt: Slow motion cinematic shot of clear water splashing over fresh strawberries on a dark background, high speed camera at 1000fps, accurate fluid dynamics, crystal clear water droplets.*
</div>
</div>

---

## 支柱三：角色與風格一致性控制
### 解決連載漫畫與商業分鏡的最大痛點
如何在 20 張不同的圖片中，讓同一個角色的長相完全一樣？
核心技術：
1. **角色鎖定 (--cref)**：Midjourney 的 Character Reference 功能。
2. **風格鎖定 (--sref)**：Style Reference 功能。
3. **Seed 固定**：確保生成演算法的隨機起點一致。

---

## 終結變臉：Midjourney 角色鎖定 (--cref)
### 實戰操作與強度控制
* **基本語法**：在指令後加上 \`--cref [圖片網址]\`
* **控制臉部與服裝權重 (--cw)**：
  - \`--cw 100\` (預設)：臉部特徵、髮型與「衣服」都會被完美複製。
  - \`--cw 0\`：只保留「臉部特徵」。當你需要讓這個角色「換上太空衣」或「穿上泳裝」時必用，否則他會一直穿著參考圖的衣服！

---

## 實際範例：畫風與色彩一致性 (--sref)
### 建立品牌的專屬視覺調性
如果你希望整個簡報的插圖都是特定的「幾何扁平風格」加「企業藍色調」？
找一張最符合的風格圖，使用 \`--sref [風格圖網址]\`。
AI 會自動提取該圖的：
1. 色彩配置 (Color Palette)
2. 筆觸質感 (Brush strokes / Texture)
3. 構圖比例與氣氛
完美統一所有產出物的畫風！

---

## 支柱四：以「圖生影」為錨點的工作流
### 工業標準：告別「字生影」的盲盒遊戲
* **字生影 (Text-to-Video)**：直接打字生成影片，容易產生物體突然變形、長出第三隻手等「閃爍漂移 (Temporal Drift)」。
* **圖生影 (Image-to-Video)**：先用 Midjourney 精雕細琢出一張 100% 完美的「首格畫面」，再交給影片 AI 讓它動起來。這能大幅提升畫面的物理穩定性！

---

## 為什麼「圖生影」勝過「字生影」？
### 錨定技術 (First Frame Anchor) 的威力
當你提供了一張高品質的高解析度圖片作為首格：
影片 AI 不需要去猜測物體的形狀、材質和光影。它擁有了一個穩固的「地基」。它只需要計算像素如何隨著時間平移，大幅降低了 AI 的運算難度，從而杜絕了畫面融化與變形的惡夢。

---

## 實際範例：Kling 首格錨定技術解析
### 打造 10 秒無崩壞長鏡頭
**實戰步驟**：
1. **生成首圖**：在 Midjourney 生成一張高品質的賽博龐克跑車靜態圖。
2. **匯入 Kling**：將圖片作為 Image Prompt 上傳。
3. **下達動態指令**：\`Car driving smoothly on wet neon street, camera tracking alongside, reflections on the wet road.\`
4. **結果**：跑車維持完美細節，不會在行駛過程中突然變成另一款車。

---

## 進階控制：ControlNet 與局部重繪
### 深入像素級的精確掌控
如果生成的角色動作不對怎麼辦？
使用 **Stable Diffusion (ComfyUI)** 搭配 **ControlNet**：
* **OpenPose**：上傳一張火柴人骨架圖，強制 AI 畫出完全一致的人物姿勢。
* **Depth Map**：鎖定場景的遠近景深立體結構，只替換表面材質（例如將真實的客廳一鍵轉化為樂高積木風格，但沙發和電視的位置完全不變）。

---

## 動態細節微調：Motion Brush 局部運鏡
### 影片剪輯的魔法刷
在 Runway Gen-4.5 中，我們可以使用「動態筆刷 (Motion Brush)」。
* **操作方式**：在靜態圖片上，用筆刷塗抹「瀑布」區域，設定向下移動；再塗抹「天空雲朵」，設定向右飄動。
* **效果**：生成一段只有瀑布和雲朵在動的 Cinemagraph (微動攝影)，畫面的其餘部分保持絕對靜止，帶來極具詩意的視覺衝擊。

---

## 工具選擇：2026 視覺生成工具矩陣
| **創作需求** | **代表性首選工具** | **強項與優勢** |
| :--- | :--- | :--- |
| **頂級靜態生圖** | Midjourney v7 | 藝術感最強，\`--cref\` / \`--sref\` 鎖定完美，無須配置複雜參數。 |
| **精細骨架與局部** | Stable Diffusion | 透過 ComfyUI 實現工作流自動化與 ControlNet 精確控制。 |
| **超真實影片運鏡** | Google Veo 3.1 | 畫面寫實度極高，擅長複雜光影與流動物理模擬。 |
| **平滑動態長鏡頭** | Kling AI (可靈) | 圖生影最為平滑，能維持極佳的物理與結構一致性。 |
| **局部動態微調** | Runway Gen-4.5 | Motion Brush 局部控制無可取代。 |

---

## 從概念到完稿：工業級實戰工作流
### 將所有支柱串聯起來
1. **企劃階段**：使用 ChatGPT 構思分鏡腳本。
2. **視覺定義**：在 Midjourney 測試出完美的主角長相 (\`--cref\`) 與美術風格 (\`--sref\`)。
3. **首格生成**：批次生成每一個分鏡的高解析度靜態圖。
4. **動態賦予**：將靜態圖分批匯入 Kling 或 Runway 加上攝影機運鏡。
5. **後製剪輯**：進入 Premiere Pro 或 CapCut 加上音效與字幕，完成專業交付！

---

## 總結與思考 (Summary & Reflection)
### 創意才是最終的護城河
* **總結**：AI 視覺生成已經跨越了「好玩」的階段，正式進入「工業化控制」。透過結構化 Prompt、一致性鎖定 (--cref/--sref) 以及「圖生影」的錨定工作流，任何人都能打造專業級的動態視覺專案。
* **思考 1**：當「繪製出精美圖片」的技術門檻趨近於零時，身為創作者，我們該如何提升「說故事的能力」與「分鏡的導演思維」？
* **思考 2**：在您的下一個行銷專案中，有哪些傳統的圖庫素材，可以嘗試用一致性控制的 AI 角色來取代，創造更高的品牌記憶點？
* **行動呼籲**：挑選您最喜歡的一張照片，試著利用 \`--sref\` 將其轉換為三種不同的畫風，體驗 AI 風格鎖定的強大威力！
`;