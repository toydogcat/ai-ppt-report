// Preloaded Presentation: 生圖 生影片 AI 應用指南
const DECK_IMAGE_VIDEO_MD = `# 生圖生影片 AI 應用指南：生產級視覺創作與一致性控制
## 副標題：掌握 Midjourney v7 與 Google Veo 3.1，打造高一致性的專業級影片工作流
專為設計師、導演與數位創作者設計，拆解 2026 年最新影像生成與「角色/場景一致性控制」實戰密技。

---

## 生視覺創作四大核心支柱
### 從「抽卡碰運氣」晉升為「精準掌控畫面與鏡頭運動」
* **一、影像生成提示詞工程 (Prompt Engineering)**：精確控制 Midjourney、DALL-E 3 的光影、構圖與鏡頭視角。
* **二、導演級鏡頭與影片生成 (Cinematic Video)**：利用 Google Veo 3.1、Runway Gen-4.5 實現大片級運鏡與動作控制。
* **三、角色與風格一致性控制 (Visual Consistency)**：運用 \`--cref\`、\`--sref\`、\`Seed\` 等核心技術，確保角色臉部與畫風在不同分鏡中完全不崩壞。
* **四、以「圖生影」為錨點的工作流 (Image-to-Video)**：以高品質靜態生圖為基準地基，再導入 Kling/Luma 實現穩定、無閃爍運鏡。

---

## 支柱一：影像生成提示詞工程 (Prompt Engineering)
### 告別混亂語句！善用結構化提示詞模板，100% 精準指揮 AI 繪圖
* **結構化提示詞模板**：\\\`[主體主體] + [環境與場景細節] + [光影與氣氛] + [鏡頭與相機參數] + [畫風渲染關鍵字]\\\`。
* **相機參數控制**：明確指定「85mm portrait lens, f/1.4 aperture, cinematic volumetric lighting」以獲得具備精緻散景與立體感的專業人像照，避免 AI 生成廉價 3D 感。

---

## 支柱二：導演級鏡頭與影片生成 (Cinematic Video)
### 把 AI 當成你的攝影師！精確下達運鏡指令，實現電影感動態
* **鏡頭運動參數化**：在 Runway 或 Kling 中使用「Camera Control」功能，精確指定 **Pan (水平平移)、Tilt (垂直俯仰)、Zoom (縮放)、Roll (旋轉)** 的數值與路徑。
* **物理世界理解力**：2026 年最新影片大模型（如 Veo 3.1）已深刻理解「流體力學」與「碰撞運動」，生成的火花濺躍、水流波紋極其逼真，無崩壞與物理穿模。

---

## 支柱三：角色與風格一致性控制 (Visual Consistency)
### 終結角色大變臉！精準鎖定特徵與畫風的實戰黑科技
* **角色一致性參考 (--cref)**：在 Midjourney 中使用 \`--cref [URL]\` 連接角色參考圖，並用 \`--cw [0-100]\` 控制臉部鎖定強度（\`cw 100\` 鎖定臉與衣服，\`cw 0\` 僅鎖定臉部特徵以利換裝）。
* **畫風一致性參考 (--sref)**：上傳一張您喜愛的視覺插畫，配上 \`--sref [URL]\`，AI 會完美提取該圖的色彩搭配、線條特徵與光影調性。

* **適用工具：** Midjourney / ComfyUI
* **使用情境：** 在 Midjourney 中生成一系列身穿太空衣且臉部特徵完全一致的角色分鏡圖。
> /imagine prompt: A brave female astronaut looking at the camera, highly detailed space suit, red neon light reflections, cinematic lighting, photorealistic --cref https://r.pics/avatar.jpg --cw 0 --sref https://r.pics/style.jpg --ar 16:9 --v 7.0 --seed 424242

---

## 支柱四：以「圖生影」為錨點的工作流 (Image-to-Video)
### 徹底解決影片閃爍漂移 (Temporal Drift) 的工業級標準流程
* **「圖生影」勝過「字生影」**：直接用語音生成影片極易產生「物體突變或融化」。工業級標準做法是：先用 Midjourney/ComfyUI 生成 100% 完美的**首格畫面 (First Frame)**。
* **首格錨定技術 (First Frame Anchor)**：將首格高品質圖塞入 Kling AI 或 Runaway，僅設定「鏡頭向右平移 5 秒」，AI 將以該圖為「物理地基」進行平滑運動延伸，畫面極度穩定。

---

## 2026 視覺生成工具對比矩陣
| **創作類別** | **代表性首選工具** | **一致性控制強項與優勢** |
| :--- | :--- | :--- |
| **靜態生圖** | Midjourney v7 / SD3 | 強大的 \`--cref\` (角色) 與 \`--sref\` (風格) 一致性鎖定，插畫與寫實之王。 |
| **本機進階控圖** | Stable Diffusion (ComfyUI) | 具備 ControlNet (骨架、邊緣、景深鎖定) 與 IP-Adapter，適合工業精密製圖。 |
| **大片級生影片** | Google Veo 3.1 | 畫面寫實度極高，支援多角度角色參考，超大 context 保持 15 秒長鏡頭不變形。 |
| ** cinematic 運鏡** | Kling AI (可靈) | 圖生影效果極度平滑，能極致穩定維持相機軌跡運動與動態一致性。 |
| **創意與剪輯** | Runway (Gen-4.5) | Motion Brush 能手動塗抹指定畫面上「哪個部位動、怎麼動」，提供導演級微調。 |`;
