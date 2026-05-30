// Preloaded Presentation: 微積分 14.3 — 偏導數 (Partial Derivatives)
const DECK_CALCULUS_14_3_MD = String.raw`# 微積分 14.3：偏導數
## 副標題：單一方向的微觀洞察——掌握多變數函數的即時變動
本簡報聚焦於 Stewart《Calculus》14.3 節，介紹偏導數的定義、運算技巧、幾何意義以及高階偏導的克萊羅定理。

---

## 14.3 導言：什麼是偏導數？
### 「固定其他，只看一個」
*   **核心思想**：當函數 $f(x, y)$ 有多個變數時，我們一次只對其中一個變數求導，將其他變數視為**常數**。
*   **定義**：
    *   **對 $x$ 的偏導數 $f_x$**：
        $$f_x(a, b) = \lim_{h \to 0} \frac{f(a+h, b) - f(a, b)}{h}$$
    *   **對 $y$ 的偏導數 $f_y$**：
        $$f_y(a, b) = \lim_{h \to 0} \frac{f(a, b+h) - f(a, b)}{h}$$

---

## 一、符號與表示法
### 多樣的表達方式
設 $z = f(x, y)$，常見的偏導數符號包括：
*   $f_x(x, y)$ 或 $f_y(x, y)$
*   $\frac{\partial f}{\partial x}$ 或 $\frac{\partial z}{\partial x}$
*   $D_x f$
> **注意**：使用的是特殊的「$\partial$」(round d) 符號，區別於一元微積分的 $d$。

---

## 二、偏導數的幾何意義
### 切線的斜率
*   **$f_x(a, b)$**：曲面 $z = f(x, y)$ 與平面 $y = b$ 的交線（跡線）在點 $P(a, b, f(a,b))$ 的**斜率**。
*   **$f_y(a, b)$**：曲面與平面 $x = a$ 的交線在點 $P$ 的斜率。
*   **直觀理解**：如果你站在山上，朝正東（$x$ 軸）走一步的坡度是 $f_x$，朝正北（$y$ 軸）走一步的坡度是 $f_y$。

---

## 三、高階偏導數 (Higher Derivatives)
### 二次、三次甚至更多次的微分
我們可以對偏導數再次求偏導：
*   $f_{xx} = \frac{\partial}{\partial x} \left( \frac{\partial f}{\partial x} \right)$
*   $f_{xy} = \frac{\partial}{\partial y} \left( \frac{\partial f}{\partial x} \right)$ （先對 $x$ 微，再對 $y$ 微）
*   **克萊羅定理 (Clairaut's Theorem)**：
    > 若 $f_{xy}$ 與 $f_{yx}$ 在區域內皆連續，則：
    > $$f_{xy} = f_{yx}$$
    > （混合導數的次序不影響結果！）

---

## 四、偏微分方程 (PDEs) 簡介
### 科學與工程的基礎
偏導數是描述自然規律的語言：
*   **拉普拉斯方程**：$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$（描述重力位、靜電位）。
*   **波動方程**：$\frac{\partial^2 u}{\partial t^2} = a^2 \frac{\partial^2 u}{\partial x^2}$（描述琴弦振動、光波）。
*   掌握偏微分運算，是進入高等物理與工程分析的必經之路。

---

## 💡 總結：偏微分的計算心法
1.  **專一**：求 $f_x$ 時，心中默念「$y$ 是常數」。
2.  **靈活**：熟練運用一元微積分的所有規則（連鎖律、乘積規則）。
3.  **對稱**：利用克萊羅定理簡化高階計算並檢查錯誤。

掌握了 14.3 節，您就擁有了拆解多維變動問題的最強手術刀！
`;
