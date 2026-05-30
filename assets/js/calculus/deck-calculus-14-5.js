// Preloaded Presentation: 微積分 14.5 — 連鎖律 (The Chain Rule)
const DECK_CALCULUS_14_5_MD = String.raw`# 微積分 14.5：連鎖律
## 副標題：變動的連鎖反應——掌握多層次變數間的微分邏輯
本簡報聚焦於 Stewart《Calculus》14.5 節，介紹多變數連鎖律的各種形式、樹狀圖分析法以及隱函數微分的捷徑。

---

## 14.5 導言：什麼是連鎖律？
### 追蹤「變動的傳遞」
*   **場景**：壓力 $P$ 取決於體積 $V$ 與溫度 $T$，而 $V, T$ 又隨時間 $t$ 變化。
*   **問題**：壓力隨時間的變化率 $dP/dt$ 是多少？
*   **核心思維**：將總變動率拆解為「函數對中間變數的變動」$\times$「中間變數對最終變數的變動」之總和。

---

## 一、連鎖律 第一型 (Case 1)
### 中間變數取決於單一參數
若 $z = f(x, y)$ 且 $x = g(t), y = h(t)$，則：
$$\frac{dz}{dt} = \frac{\partial z}{\partial x} \frac{dx}{dt} + \frac{\partial z}{\partial y} \frac{dy}{dt}$$
*   **物理意義**：沿著空間曲線運動時，函數值的即時變化率。
*   **注意**：左邊是全導數 ($d$)，右邊含有偏導數 ($\partial$)。

---

## 二、連鎖律 第二型 (Case 2)
### 中間變數取決於多個參數
若 $z = f(x, y)$ 且 $x = g(s, t), y = h(s, t)$，則：
$$\frac{\partial z}{\partial s} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial s} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial s}$$
$$\frac{\partial z}{\partial t} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial t} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial t}$$
*   這在座標轉換（如從直角座標轉為極座標）中極其重要。

---

## 三、最強工具：樹狀圖分析法 (Tree Diagrams)
### 複雜路徑不再迷路
面對多層變數依賴，畫出樹狀圖：
1.  **頂層**：目標變數（如 $z$）。
2.  **中間層**：中間變數（如 $x, y$）。
3.  **底層**：最終參數（如 $s, t$）。
*   **微分規則**：找出所有通往底層的「路徑」，每一段路徑對應一個偏導數，路徑上的導數相乘，不同路徑的結果相加。

---

## 四、隱函數微分 (Implicit Differentiation)
### 擺脫解方程的痛苦
對於 $F(x, y, z) = 0$ 所定義的隱函數 $z = f(x, y)$：
*   **一元形式**：$\frac{dy}{dx} = -\frac{F_x}{F_y}$
*   **二元形式**：
    $$\frac{\partial z}{\partial x} = -\frac{F_x}{F_z}, \quad \frac{\partial z}{\partial y} = -\frac{F_y}{F_z}$$
*   **口訣**：負的（對自變數偏微 / 對應變數偏微）。

---

## 💡 總結：連鎖律的運算心法
*   **路徑思維**：變動是透過所有可能的中間管道「流向」最終結果的。
*   **檢查機制**：利用樹狀圖確保沒有遺漏任何變數路徑。
*   **隱微捷徑**：掌握隱函數公式，避免繁瑣的代數運算。

掌握了 14.5 節，您就擁有了分析複雜動態系統與座標變換的標準配備！
`;
