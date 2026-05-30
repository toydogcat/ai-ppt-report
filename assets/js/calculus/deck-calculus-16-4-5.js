// Preloaded Presentation: 微積分 16.4 — 格林定理 (Green's Theorem)
const DECK_CALCULUS_16_4_MD = String.raw`# 微積分 16.4：格林定理
## 副標題：邊界與內部的對話——將平面線積分轉化為二重積分
本簡報聚焦於 Stewart《Calculus》16.4 節，介紹格林定理的定義、正向邊界的約定以及如何利用其簡化計算。

---

## 16.4 導言：格林定理的核心
### 連結線積分與平面積分
*   **情境**：我們要計算一個向量場 $F = \langle P, Q \rangle$ 沿著一個**封閉曲線 $C$** 的線積分。
*   **格林定理 (Green's Theorem)**：
    $$\oint_C P dx + Q dy = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dA$$
    其中 $D$ 是由曲線 $C$ 所包圍的區域。

---

## 一、正向邊界 (Positive Orientation)
### 逆時針的約定
為了使定理成立，$C$ 的繞行方向必須滿足：
*   **定義**：當您沿著 $C$ 前進時，區域 $D$ 始終位於您的**左側**。
*   **幾何上**：對於簡單的單一環路，通常指**逆時針**方向。
*   **符號**：若方向相反（順時針），積分值需變號。

---

## 二、應用：計算區域面積
### 利用邊界求大小
根據格林定理，若我們選擇 $P, Q$ 使得 $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 1$，則線積分即為面積：
$$A = \oint_C x dy = \oint_C -y dx = \frac{1}{2} \oint_C x dy - y dx$$
*   **價值**：這讓我們只需沿著邊界繞一圈，就能算出複雜形狀（如多邊形、行星軌跡）的面積。

---

## 三、推廣至「有洞」的區域
### 處理多重連通區域
格林定理同樣適用於內部有洞的區域：
*   **規則**：外邊界必須是逆時針繞行，內邊界（洞的邊緣）必須是**順時針**繞行。
*   **核心思想**：確保區域永遠在行進方向的左側。

---

## 💡 總結：格林定理的戰術地位
*   **降維**：將困難的線積分轉化為（通常）較容易的二重積分。
*   **面積工具**：提供了一種從邊界資訊提取幾何特徵的方法。
*   **物理意義**：線積分代表場的「環流量」，而二重積分項代表內部所有微小旋轉的總和。

掌握了 16.4 節，您就掌握了處理平面向量場流動規律的核心利器！
`;

// Preloaded Presentation: 微積分 16.5 — 旋度與散度 (Curl and Divergence)
const DECK_CALCULUS_16_5_MD = String.raw`# 微積分 16.5：旋度與散度
## 副標題：向量場的微觀顯微鏡——掌握 Del 算符與場的本質特徵
本簡報聚焦於 Stewart《Calculus》16.5 節，介紹旋度與散度的定義、運算性質以及判定保守場的嚴謹判準。

---

## 16.5 導言：Del 算符 ($\nabla$)
### 向量微分的萬用鑰匙
我們定義向量微分算符 $\nabla$ (nabla/del) 為：
$$\nabla = i \frac{\partial}{\partial x} + j \frac{\partial}{\partial y} + k \frac{\partial}{\partial z}$$
透過 $\nabla$ 與向量場 $F$ 的不同運算，我們可以得到描述場變動的兩個關鍵量。

---

## 一、旋度 (Curl)
### 場的「旋轉」趨勢
定義 $F$ 的旋度為 $\nabla$ 與 $F$ 的**外積**：
$$\text{curl } F = \nabla \times F = \begin{vmatrix} i & j & k \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ P & Q & R \end{vmatrix}$$
*   **物理意義**：描述粒子在場中該點的旋轉速度與旋轉軸方向。
*   **重要判定**：若 $F$ 是保守場，則其旋度恆為 $\mathbf{0}$。
    $$\mathbf{\text{curl}(\nabla f) = 0}$$

---

## 二、散度 (Divergence)
### 場的「源與匯」
定義 $F$ 的散度為 $\nabla$ 與 $F$ 的**內積**：
$$\text{div } F = \nabla \cdot F = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$$
*   **物理意義**：描述流體在該點是向外噴發（源，$\text{div} > 0$）還是向內匯集（匯，$\text{div} < 0$）。
*   **重要特性**：旋度場的散度恆為 0。
    $$\mathbf{\text{div(curl } F) = 0}$$

---

## 三、三維保守場的判定
### 嚴謹的邏輯工具
給予三維向量場 $F$，如何確定它是保守場？
> **判準**：若 $F$ 在整個 $\mathbb{R}^3$ 上定義且其分量具有連續偏導，則
> $$F \text{ 是保守場 } \iff \text{curl } F = \mathbf{0}$$
*   這補足了 16.3 節僅針對二維場的判定法。

---

## 四、拉普拉斯算符 ($\nabla^2$)
### 二次微分的結合
標量函數 $f$ 的拉普拉斯算符定義為其梯度的散度：
$$\nabla^2 f = \text{div}(\nabla f) = \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2} + \frac{\partial^2 f}{\partial z^2}$$
*   **調和函數**：滿足 $\nabla^2 f = 0$ 的函數，在物理學中代表穩定狀態的熱傳導或勢能分佈。

---

## 💡 總結：場的幾何描述
*   **旋度 ($\nabla \times F$)**：量化旋轉，判定保守性。
*   **散度 ($\nabla \cdot F$)**：量化通量變化，描述守恆。
*   **Del 算符**：將複雜的偏微分運算簡化為優雅的向量代數形式。

掌握了 16.5 節，您就擁有了透視向量場物理屬性的最強解剖刀！
`;
