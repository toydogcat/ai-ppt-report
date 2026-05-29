// Preloaded Presentation: 微積分 6.7 — 雙曲函數 (Hyperbolic Functions)
const DECK_CALCULUS_6_7_MD = String.raw`# 微積分 6.7：雙曲函數
## 副標題：指數函數的對稱組合，揭開懸鏈線與雙曲線的數學規律
本簡報聚焦於 Stewart《Calculus》6.7 節，介紹雙曲函數的定義、幾何意義、恆等式、導數以及在工程學中的應用。

---

## 6.7 導言：什麼是雙曲函數？
### 指數函數的特定組合
某些 $e^x$ 與 $e^{-x}$ 的組合在數學與物理中極其常見，因此我們賦予它們專屬名稱：
* **雙曲正弦 (sinh)**：$\sinh x = \frac{e^x - e^{-x}}{2}$
* **雙曲餘弦 (cosh)**：$\cosh x = \frac{e^x + e^{-x}}{2}$
* **雙曲正切 (tanh)**：$\tanh x = \frac{\sinh x}{\cosh x} = \frac{e^x - e^{-x}}{e^x + e^{-x}}$

*名稱由來：它們與「雙曲線」的關係，正如三角函數與「圓」的關係。*

---

## 幾何直覺：圓 vs. 雙曲
### P(x, y) 的軌跡
1. **圓函數 (Circular Functions)**：
   * 滿足 $x^2 + y^2 = 1$。
   * 點的坐標為 $(\cos t, \sin t)$。
2. **雙曲函數 (Hyperbolic Functions)**：
   * 滿足 **$x^2 - y^2 = 1$**。
   * 點的坐標為 **$(\cosh t, \sinh t)$**。
   * $t$ 代表的是該雙曲扇形面積的兩倍。

---

## 雙曲恆等式 (Identities)
### 類比三角函數的對稱美
雙曲函數滿足許多與三角函數極其相似的公式：
* **核心恆等式**：$\boxed{\cosh^2 x - \sinh^2 x = 1}$
* **正切恆等式**：$1 - \tanh^2 x = \text{sech}^2 x$
* **和角公式**：
  * $\sinh(x+y) = \sinh x \cosh y + \cosh x \sinh y$
  * $\cosh(x+y) = \cosh x \cosh y + \sinh x \sinh y$

---

## 工程應用：懸鏈線 (Catenary)
### 為什麼 cosh 很重要？
* **物理定義**：一條均質、柔軟的重型電纜（如高壓電線）懸掛在兩點之間時，其自然下垂的形狀稱為 **懸鏈線**。
* **數學模型**：
  $$\boxed{y = c + a \cosh(x/a)}$$
* **著名實例**：美國聖路易斯的「大拱門 (Gateway Arch)」就是基於倒置的懸鏈線設計，具備極佳的構造穩定性。

---

## 雙曲函數的導數
### 幾乎不需要額外記憶
利用 $e^x$ 的微分性質，我們得到：
1. $\boxed{\frac{d}{dx}(\sinh x) = \cosh x}$
2. $\boxed{\frac{d}{dx}(\cosh x) = \sinh x}$ (注意：這裡 **沒有** 負號！)
3. $\boxed{\frac{d}{dx}(\tanh x) = \text{sech}^2 x}$

*提示：雙曲函數的微分規則與三角函數高度相似，但正負號規律略有不同。*

---

## 反雙曲函數及其導數
### 對數形式的呈現
因為雙曲函數是由 $e^x$ 定義的，其反函數可以用自然對數表達：
* $\sinh^{-1} x = \ln(x + \sqrt{x^2 + 1})$
* **其導數為**：$\boxed{\frac{d}{dx}(\sinh^{-1} x) = \frac{1}{\sqrt{x^2 + 1}}}$
* **arctan 類比**：$\frac{d}{dx}(\tanh^{-1} x) = \frac{1}{1 - x^2}$

---

## 💡 總結
* **本質**：雙曲函數是 $e^x$ 的奇偶對稱化處理。
* **重點**：$\cosh^2 - \sinh^2 = 1$ 是所有運算的靈魂。
* **價值**：在描述繩索懸掛、波浪動力學以及相對論速度加法中不可或缺。

掌握了雙曲函數，您就擁有了描述自然界另一種對稱變化的強大工具。
`;
