// Preloaded Presentation: 迎戰 AI 時代的設計思維
const DECK_UIUX_DESIGN_MD = `# 迎戰 AI 時代的設計思維：現代 UI/UX 核心與檢測
## 副標題：從固定式靜態介面，演進至動態生成與人機協同的「活系統」
基於 2026 全球 UI/UX 設計高峰會最新共識編寫。深入探討 GenUI、Calm UI 與人機交互核心原則。

---

## 2026 UI/UX 設計思維四大核心
### 擺脫「刻像素」的像素推手，晉升為「規則與代幣」的系統設計師
* **一、生成式介面 (Generative UI)**：打破硬編碼的靜態網頁，介面組件隨用戶意圖即時動態裝配。
* **二、冷靜美學與減法設計 (Calm UI)**：對抗 AI 帶來的資訊洪流，藉由極簡留白與專注動線，降低認知負載。
* **三、零介面與多模態互動 (Multimodal Zero UI)**：完美融合語音、手勢、視線與觸控，介面逐漸隱形。
* **四、人機交互安全閥 (Human-Agent Control)**：為背景執行的 AI Agent 設計無縫的中斷、引導與確認機制。

---

## 支柱一：生成式介面 (Generative UI)
### 拋棄死板的菜單導覽！只提供「拋棄式」與「意圖導向」的極簡介面
* **意圖解析與動態裝配 (Intent Matching)**：
  當用戶說「幫我計算本季報銷」，AI 不會跳轉到複雜報表頁，而是直接在對話流中「即時渲染」出一個僅含報銷數字與一鍵簽核按鈕的迷你卡片。
* **拋棄式介面 (Disposable UI)**：
  任務一旦完成，卡片隨即溶解。用戶不需學習龐雜的後台介面，介面隨意圖而生，任務完結而滅，達成極致的易用性。

---

## 支柱二：冷靜美學與減法設計 (Calm UI)
### 對抗資訊焦慮！用呼吸感留白與專注動線，守護用戶認知頻寬
* **認知頻寬保護 (Cognitive Budget)**：
  AI 能在 1 秒內生成 100 個數據點，但人類大腦無法吸收。Calm UI 強調只主動呈現 3 個最關鍵決策指標，將其餘細節收納於次級層次。
* **微動脈平滑過渡 (Micro-interactions)**：
  利用非線性、低飽和度的流體動畫引導視線，減少突兀換頁，讓用戶在無壓力的沉浸式氛圍中流暢操作。

---

## 支柱三：零介面與多模態互動 (Multimodal Zero UI)
### 介面正在「隱形」，多模態大模型讓互動回歸人類直覺
* **零介面趨勢 (Zero UI)**：
  當後台 Agent 具有高可靠度，最棒的介面就是「沒有介面」。系統默默在背景處理完繁瑣的排程、除錯與同步。
* **多模態融合 (Voice, Gesture, Vision)**：
  用戶可以一邊用手指向螢幕上的卡片，一邊說「把這筆預算移到這裡」，視線追蹤 (Eye Tracking) 與聲學對齊在底層默默協同工作。

---

## 支柱四：人機交互安全閥 (Human-Agent Control)
### 設計安全閥控制權：確保 AI 永遠在人類的主導下安全運行
* **不確定性設計 (Design for Uncertainty)**：
  當 AI Agent 的置信度低於 85% 時，系統必須「主動降級」，跳出精緻的覆寫選項 (Override Control)，邀請人類介入引導。
* **決策溯源機制**：
  提供可視化的「AI 決策路徑」，以簡短文字說明「為什麼這樣建議」，建立真正的透明度與人機信任。

* **適用工具：** UX Agent Guard
* **使用情境：** 設計 Agent 出錯時的「人工介入引導卡片 (Human-in-the-loop Card)」引導 Prompt。
> Role: Agent UX Architect
> Task: Design a prompt-driven override interface for an automated banking agent.
> Rules: If user changes transaction amount > $500, trigger confirmation card.
> Component: Render a card with dynamic "Accept AI adjustment", "Edit raw details", and "Reject & Terminate" actions.

---

## 2026 設計思維核心指標矩陣
| **維度** | **傳統設計思維** | **2026 AI 設計思維** | **設計師核心任務** |
| :--- | :--- | :--- | :--- |
| **介面型態** | 靜態頁面、固定導航 | 動態生成、拋棄式卡片 (GenUI) | 設計組件狀態與裝配邏輯規則 |
| **互動模式** | 點擊、滑動、表單輸入 | 語音、手勢、意圖對話、視線 | 設計意圖解析與多模態容錯機制 |
| **資訊密度** | 鋪天蓋地、列表平鋪 | 冷靜美學 (Calm UI)、漸進揭露 | 保護用戶認知頻寬，防範資訊洪流 |
| **安全架構** | 密碼驗證、表單鎖定 | 人機安全閥 (Human-in-the-loop) | 制定 Agent 越界中斷與覆寫流 |`;
