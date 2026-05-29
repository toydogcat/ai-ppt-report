// Preloaded Presentation: 微積分 7.1 — 分部積分 (Integration by Parts)
const DECK_CALCULUS_7_1_MD = String.raw`# 微積分 7.1：分部積分
## 副標題：逆轉乘法法則，攻克複雜函數乘積的積分王牌
本簡報聚焦於 Stewart《Calculus》7.1 節，介紹積分學中最核心的技巧之一——分部積分 (Integration by Parts)，學習如何拆解並計算函數乘積的積分。

---

## 7.1 導言：規則的對應
### 從微分到積分的對稱性
在微積分中，每一條微分法則都有其對應的積分法則：
* **鏈鎖律 (Chain Rule)** $\implies$ **代換法 (Substitution)**。
* **乘法法則 (Product Rule)** $\implies$ **分部積分 (Integration by Parts)**。

**核心目標**：當被積函數是兩個互不相關函數的乘積時（如 $x e^x$ 或 $x \sin x$），分部積分是唯一的解法。

---

## 分部積分公式推導
### 來自乘法法則的變身
我們知道：$\frac{d}{dx}(uv) = u \frac{dv}{dx} + v \frac{du}{dx}$。
對兩邊積分並移項，得到 **分部積分核心公式**：
$$\boxed{\int u \, dv = uv - \int v \, du}$$

**直觀理解**：
這是一個「交換代價」的過程。我們透過計算一個簡單的乘積 $uv$，將原本難算的積分 $\int u \, dv$ 轉化為另一個（希望更簡單的）積分 $\int v \, du$。

---

## 實戰步驟：如何選取 u 與 dv？
### 成功的關鍵在於「分配」
遇到 $\int f(x)g(x) dx$ 時，您需要決定誰當 $u$，誰當 $dv$。
* **選取 $u$ 的原則**：微分後會變得更簡單的項。
* **選取 $dv$ 的原則**：容易積分的項。

> 💡 **LIATE 優先順序準則** (由上而下優先選為 $u$)：
> 1. **L**ogarithmic (對數函數)
> 2. **I**nverse Trig (反三角函數)
> 3. **A**lgebraic (代數多項式)
> 4. **T**rigonometric (三角函數)
> 5. **E**xponential (指數函數)

---

## 經典範例一：多項式 × 三角
### 求 $\int x \sin x \, dx$
1. **設定**：
   * 令 $u = x \implies du = dx$ (多項式優先當 $u$)
   * 令 $dv = \sin x \, dx \implies v = -\cos x$
2. **帶入公式**：
   $$\int x \sin x \, dx = x(-\cos x) - \int (-\cos x) \, dx$$
   $$= -x \cos x + \int \cos x \, dx$$
3. **結果**：
   $$\boxed{-x \cos x + \sin x + C}$$

---

## 經典範例二：孤單的對數
### 求 $\int \ln x \, dx$
有時候 $dv$ 只是單純的 $dx$：
1. **設定**：
   * 令 $u = \ln x \implies du = \frac{1}{x} dx$
   * 令 $dv = dx \implies v = x$
2. **帶入公式**：
   $$\int \ln x \, dx = x \ln x - \int x \cdot \frac{1}{x} \, dx$$
   $$= x \ln x - \int 1 \, dx$$
3. **結果**：
   $$\boxed{x \ln x - x + C}$$

---

## 定積分的分部積分
### 不要忘記代入範圍
公式如下：
$$\boxed{\int_{a}^{b} u \, dv = \left[ uv \right]_a^b - \int_{a}^{b} v \, du}$$

**提醒**：
在計算第一項 $[uv]_a^b$ 時，建議先算出結果再減，避免符號混淆。

---

## 💡 總結
* **本質**：分部積分是積分版的乘法法則。
* **核心策略**：利用 **LIATE** 準則聰明地選擇 $u$。
* **連續使用**：有時需要連續使用兩次或更多次分部積分（如 $\int x^2 e^x dx$）。
* **循環陷阱**：對於 $e^x \sin x$ 類型的積分，會出現循環，此時可利用代數移項求解。

掌握了分部積分，您就具備了處理科學與工程中絕大多數複雜乘積函數的能力！
`;
