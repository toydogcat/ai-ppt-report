// Preloaded Presentation: 微積分 第四章 — 積分 (Integrals)
const DECK_CALCULUS_CH4_MD = String.raw`# 微積分 第四章：積分 (Integrals)
## 副標題：從面積問題到微積分基本定理，掌握積分的核心精髓
基於 Stewart《Calculus: Early Transcendentals》第四章編寫。共 12 頁精華濃縮。

---

## 本章學習地圖
### 積分的核心概念全景

<style>
  .calc-mindmap {
    display: grid;
    grid-template-columns: 1fr 0.7fr 1fr;
    grid-template-rows: 1fr 1.2fr 1fr;
    gap: 1rem;
    align-items: center;
    justify-items: center;
    width: 100%;
    height: 320px;
    margin-top: 0.5rem;
    position: relative;
  }
  .calc-node {
    border-radius: 12px;
    padding: 0.75rem 1rem;
    font-size: 0.82rem;
    font-weight: 600;
    text-align: center;
    backdrop-filter: blur(8px);
    border: 1px solid;
    transition: transform 0.3s;
    line-height: 1.4;
  }
  .calc-node:hover { transform: scale(1.05); }
  .calc-node-center {
    background: linear-gradient(135deg, rgba(56,189,248,0.25), rgba(168,85,247,0.25));
    border-color: rgba(56,189,248,0.6);
    color: #e0f2fe;
    padding: 1rem 1.2rem;
    font-size: 1rem;
    box-shadow: 0 0 20px rgba(56,189,248,0.3);
    grid-column: 2;
    grid-row: 2;
    z-index:2;
  }
  .calc-node-blue {
    background: rgba(56,189,248,0.12);
    border-color: rgba(56,189,248,0.4);
    color: #bae6fd;
  }
  .calc-node-purple {
    background: rgba(168,85,247,0.12);
    border-color: rgba(168,85,247,0.4);
    color: #e9d5ff;
  }
  .calc-node-green {
    background: rgba(52,211,153,0.12);
    border-color: rgba(52,211,153,0.4);
    color: #a7f3d0;
  }
  .calc-node-amber {
    background: rgba(251,191,36,0.12);
    border-color: rgba(251,191,36,0.4);
    color: #fde68a;
  }
  .calc-svg-lines {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
  }
</style>
<div class="calc-mindmap">
  <svg class="calc-svg-lines" xmlns="http://www.w3.org/2000/svg">
    <line x1="33%" y1="17%" x2="50%" y2="50%" stroke="rgba(56,189,248,0.4)" stroke-width="1.5" stroke-dasharray="5,4"/>
    <line x1="33%" y1="83%" x2="50%" y2="50%" stroke="rgba(52,211,153,0.4)" stroke-width="1.5" stroke-dasharray="5,4"/>
    <line x1="67%" y1="17%" x2="50%" y2="50%" stroke="rgba(168,85,247,0.4)" stroke-width="1.5" stroke-dasharray="5,4"/>
    <line x1="67%" y1="83%" x2="50%" y2="50%" stroke="rgba(251,191,36,0.4)" stroke-width="1.5" stroke-dasharray="5,4"/>
    <line x1="10%" y1="50%" x2="50%" y2="50%" stroke="rgba(56,189,248,0.35)" stroke-width="1.5" stroke-dasharray="5,4"/>
    <line x1="90%" y1="50%" x2="50%" y2="50%" stroke="rgba(168,85,247,0.35)" stroke-width="1.5" stroke-dasharray="5,4"/>
  </svg>
  <div class="calc-node calc-node-blue" style="grid-column:1;grid-row:1;">📐 4.1<br>面積與距離<br>問題</div>
  <div class="calc-node calc-node-purple" style="grid-column:3;grid-row:1;">∑ 4.2<br>定積分<br>Definite Integral</div>
  <div class="calc-node calc-node-blue" style="grid-column:1;grid-row:2;">🔢 黎曼和<br>Riemann Sum</div>
  <div class="calc-node calc-node-center">∫<br>積分<br>Integrals</div>
  <div class="calc-node calc-node-purple" style="grid-column:3;grid-row:2;">📊 不定積分<br>Indefinite</div>
  <div class="calc-node calc-node-green" style="grid-column:1;grid-row:3;">🏆 4.3<br>微積分<br>基本定理</div>
  <div class="calc-node calc-node-amber" style="grid-column:3;grid-row:3;">⚡ 4.4<br>代換法則<br>Substitution</div>
</div>

---

## 4.1 面積問題 — 積分的起源
### 曲線下的面積如何計算？

* **核心問題**：如何精確計算曲線 $y = f(x)$ 下方、在 $x = a$ 到 $x = b$ 之間的面積？
* **直覺思路**：以矩形填充逼近曲線下方區域
* **關鍵洞察**：矩形數量 $n \to \infty$ 時，近似值收斂至精確面積

**右端點矩形近似 (Right Endpoint Approximation)**：
$$R_n = f(x_1)\Delta x + f(x_2)\Delta x + \cdots + f(x_n)\Delta x$$

其中 $\Delta x = \dfrac{b - a}{n}$，$x_i = a + i\,\Delta x$

| 矩形數 $n$ | 左端點 $L_n$ | 右端點 $R_n$ |
|:---:|:---:|:---:|
| 10 | 0.2850 | 0.3850 |
| 100 | 0.3284 | 0.3384 |
| 1000 | 0.3328 | 0.3338 |

$$\lim_{n \to \infty} R_n = \frac{1}{3} \quad \text{（以 } y = x^2 \text{ 為例）}$$

---

## 4.1 距離問題 — 積分的物理意義
### 用速度函數求位移

* **物理聯繫**：速度曲線下方面積 = 物體行走的距離
* **等速度**：$\text{距離} = \text{速度} \times \text{時間}$
* **變速度**：將時間分成 $n$ 個小區間，對每段用近似等速計算

**位移近似公式**：
$$\text{距離} \approx \sum_{i=1}^{n} v(t_i^*)\,\Delta t$$

當 $\Delta t \to 0$ 時，加總收斂為精確積分值：
$$d = \int_a^b v(t)\,dt$$

> 💡 **關鍵觀察**：面積問題與距離問題在數學上完全等價，都指向同一個極限加總過程。

---

## 4.2 定積分的嚴格定義
### 黎曼和與極限

**定義**：設 $f$ 在 $[a, b]$ 上連續，將 $[a, b]$ 分為 $n$ 個等寬子區間，每個寬度 $\Delta x = \dfrac{b-a}{n}$。

在第 $i$ 個子區間 $[x_{i-1}, x_i]$ 上任取樣本點 $x_i^*$，定義：

$$\text{黎曼和（Riemann Sum）} = \sum_{i=1}^{n} f(x_i^*)\,\Delta x$$

**定積分定義**：
$$\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*)\,\Delta x$$

**幾何意義**：
* $f(x) > 0$：正面積（曲線在 $x$ 軸上方）
* $f(x) < 0$：負面積（曲線在 $x$ 軸下方）
* 定積分 = **「代數面積」**，含正負符號

---

## 4.2 定積分的基本性質
### 讓計算更靈活的七大規則

**線性性質**：
$$\int_a^b [f(x) + g(x)]\,dx = \int_a^b f(x)\,dx + \int_a^b g(x)\,dx$$
$$\int_a^b c\,f(x)\,dx = c\int_a^b f(x)\,dx$$

**區間可加性**：
$$\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx$$

**比較性質**：若 $f(x) \geq g(x)$ 在 $[a,b]$ 上，則：
$$\int_a^b f(x)\,dx \geq \int_a^b g(x)\,dx$$

**對稱性**：
* 若 $f$ 為偶函數：$\displaystyle\int_{-a}^{a} f(x)\,dx = 2\int_0^a f(x)\,dx$
* 若 $f$ 為奇函數：$\displaystyle\int_{-a}^{a} f(x)\,dx = 0$

---

## 4.3 微積分基本定理 (FTC) — Part 1
### 積分與微分的深刻聯繫

**FTC Part 1**：設 $f$ 在 $[a, b]$ 上連續，令：
$$g(x) = \int_a^x f(t)\,dt$$

則 $g$ 在 $(a, b)$ 上可微，且：
$$\boxed{g'(x) = f(x)}$$

**直觀理解**：
> 對一個積分函數求導，會得到被積函數本身。

**實際計算例子**：
$$\frac{d}{dx}\int_1^x \sqrt{1 + t^3}\,dt = \sqrt{1 + x^3}$$

**鏈式法則組合應用**：
$$\frac{d}{dx}\int_1^{x^4} \sec t\,dt = \sec(x^4) \cdot 4x^3$$

---

## 4.3 微積分基本定理 (FTC) — Part 2
### 定積分的求值公式

**FTC Part 2**（求值定理）：設 $f$ 在 $[a, b]$ 連續，$F$ 是 $f$ 的任一反導函數，則：
$$\boxed{\int_a^b f(x)\,dx = F(b) - F(a)}$$

通常簡寫為 $\Big[F(x)\Big]_a^b$。

**實際範例**：

$$\int_0^1 x^2\,dx = \left[\frac{x^3}{3}\right]_0^1 = \frac{1}{3} - 0 = \frac{1}{3}$$

$$\int_0^\pi \sin x\,dx = \Big[-\cos x\Big]_0^\pi = (-\cos\pi) - (-\cos 0) = 1 + 1 = 2$$

$$\int_1^e \frac{1}{x}\,dx = \Big[\ln x\Big]_1^e = \ln e - \ln 1 = 1$$

> ✨ **革命性意義**：FTC 將看似無關的「面積問題」與「反導函數」完美統一，是人類歷史上最重要的數學定理之一。

---

## 常見函數的不定積分公式表
### 基本積分公式彙整

$$\int x^n\,dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)$$
$$\int \frac{1}{x}\,dx = \ln|x| + C$$
$$\int e^x\,dx = e^x + C$$
$$\int \sin x\,dx = -\cos x + C$$
$$\int \cos x\,dx = \sin x + C$$
$$\int \sec^2 x\,dx = \tan x + C$$
$$\int \frac{1}{\sqrt{1-x^2}}\,dx = \arcsin x + C$$
$$\int \frac{1}{1+x^2}\,dx = \arctan x + C$$

> 💡 **提醒**：不定積分 $\int f(x)\,dx = F(x) + C$，其中 $C$ 為任意常數（積分常數），代表反導函數並非唯一。

---

## 4.4 代換積分法 (Substitution Rule)
### 「逆向鏈式法則」的威力

**代換法則**：設 $u = g(x)$ 為可微函數，且 $f$ 連續，則：
$$\boxed{\int f(g(x))\,g'(x)\,dx = \int f(u)\,du}$$

**使用步驟**：
1. 辨認複合結構，令 $u = $ 「內層函數」
2. 計算 $du = g'(x)\,dx$
3. 代換後對 $u$ 積分
4. 將 $u$ 換回 $x$ 的表示式

**範例一**：
$$\int 2x\sqrt{x^2 + 1}\,dx \xrightarrow{u = x^2+1} \int \sqrt{u}\,du = \frac{2}{3}u^{3/2} + C = \frac{2}{3}(x^2+1)^{3/2} + C$$

**定積分的代換（記得換上下限！）**：
$$\int_0^4 \sqrt{2x+1}\,dx \xrightarrow{u=2x+1} \frac{1}{2}\int_1^9 \sqrt{u}\,du = \frac{1}{2}\cdot\left[\frac{2}{3}u^{3/2}\right]_1^9 = \frac{26}{3}$$

---

## 本章總結 — 積分的完整框架
### 四大核心主題回顧

<style>
  .summary-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 0.5rem;
  }
  .summary-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 1rem 1.2rem;
    position: relative;
    overflow: hidden;
  }
  .summary-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 3px;
  }
  .sc-blue::before { background: linear-gradient(to right, #38bdf8, #818cf8); }
  .sc-purple::before { background: linear-gradient(to right, #a855f7, #ec4899); }
  .sc-green::before { background: linear-gradient(to right, #34d399, #06b6d4); }
  .sc-amber::before { background: linear-gradient(to right, #fbbf24, #f97316); }
  .summary-card h4 { font-size: 0.9rem; font-weight: 700; margin-bottom: 0.5rem; }
  .summary-card p { font-size: 0.8rem; color: #94a3b8; line-height: 1.5; }
  .sc-blue h4 { color: #38bdf8; }
  .sc-purple h4 { color: #a855f7; }
  .sc-green h4 { color: #34d399; }
  .sc-amber h4 { color: #fbbf24; }
</style>
<div class="summary-grid">
  <div class="summary-card sc-blue">
    <h4>📐 4.1 面積與距離</h4>
    <p>以矩形逼近曲線下面積；面積問題 ≡ 距離問題，同為積分的物理原型。</p>
  </div>
  <div class="summary-card sc-purple">
    <h4>∑ 4.2 定積分</h4>
    <p>黎曼和的極限定義；含正負「代數面積」概念；七大性質簡化計算。</p>
  </div>
  <div class="summary-card sc-green">
    <h4>🏆 4.3 FTC 基本定理</h4>
    <p>Part 1: 積分的導函數 = 被積函數。Part 2: 利用反導函數精確求值。</p>
  </div>
  <div class="summary-card sc-amber">
    <h4>⚡ 4.4 代換法則</h4>
    <p>「逆鏈式法則」—— 處理複合函數積分的核心技術，含定積分上下限換算。</p>
  </div>
</div>
`;
