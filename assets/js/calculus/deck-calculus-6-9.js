// Preloaded Presentation: 微積分 (Exercise Set 2)
const DECK_CALCULUS_6_9_MD = String.raw`# 微積分
## 副標題：深入剖析微分應用、積分基礎與羅必達法則
本文件收錄了微積分課程，涵蓋均值定理、極限運算、最佳化問題、反導函數、黎曼和、微積分基本定理以及羅必達法則。

---

## 3.2 (29)：均值定理的應用 (1/2)
### 題目：If $f(1) = 10$ and $f'(x) \geqslant 2$ for $1 \leqslant x \leqslant 4$, how small can $f(4)$ possibly be?

**中文說明**：已知 $f(1) = 10$，且在區間 $1 \leqslant x \leqslant 4$ 內，$f'(x) \geqslant 2$。試問 $f(4)$ 的可能最小值為多少？

**核心觀念：均值定理 (MVT)**
在區間 $[1, 4]$ 內必存在點 $c$ 使得：
$$f'(c) = \frac{f(4) - f(1)}{4 - 1} = \frac{f(4) - 10}{3}$$

---

## 3.2 (29)：詳解步驟 (2/2)
### 計算與結論
1.  **整理等式**：$f(4) = 10 + 3 \cdot f'(c)$
2.  **利用已知條件**：題目給定 $f'(x) \geqslant 2$，故 $f'(c) \geqslant 2$。
3.  **求出下界**：
    $$f(4) \geqslant 10 + 3(2) = \boxed{16}$$

**💡 物理直覺**：
如果你在 $t=1$ 時位置在 10，且速度至少是 2，那麼經過 3 秒後，你的位置最少也會前進 $3 \times 2 = 6$，最終位置至少為 16。

---

## 3.4 (31)：重要極限運算 (1/2)
### 題目：Find the limit: $\lim_{x \to \infty} x \sin \left( \frac{1}{x} \right)$

**分析**：當 $x \to \infty$，形式為 $\infty \cdot 0$。我們需要透過變數變換將其化為 $\frac{\sin \theta}{\theta}$ 的形式。

**詳細步驟**：
1.  令 $\theta = \frac{1}{x}$。當 $x \to \infty$ 時，$\theta \to 0^+$。
2.  原式可重寫為：
    $$\lim_{\theta \to 0^+} \frac{1}{\theta} \sin \theta = \lim_{\theta \to 0^+} \frac{\sin \theta}{\theta}$$

---

## 3.4 (31)：詳解步驟 (2/2)
### 極限值計算
根據重要極限公式：
$$\lim_{\theta \to 0} \frac{\sin \theta}{\theta} = \boxed{1}$$

**💡 補充直觀理解**：
當 $x$ 極大時，$\frac{1}{x}$ 極小。利用小角度近似 $\sin \theta \approx \theta$，
$$x \cdot \sin \left( \frac{1}{x} \right) \approx x \cdot \frac{1}{x} = 1$$
這與計算結果完美契合。

---

## 3.7 (6)：最佳化問題 (1/2)
### 題目：What is the minimum vertical distance between $y = x^2 + 1$ and $y = x - x^2$?

**核心觀念**：
*   **垂直距離** $D(x)$ 即為兩函數 $y$ 座標之差。
*   設 $y_1 = x^2 + 1, y_2 = x - x^2$。
*   $$D(x) = y_1 - y_2 = (x^2 + 1) - (x - x^2) = 2x^2 - x + 1$$

---

## 3.7 (6)：詳解步驟 (2/2)
### 尋求極小值
1.  **求導函數**：$D'(x) = 4x - 1$
2.  **找出臨界點**：$4x - 1 = 0 \implies x = \frac{1}{4}$
3.  **驗證**：$D''(x) = 4 > 0$（凹口向上），故為絕對最小值。
4.  **計算數值**：
    $$D\left(\frac{1}{4}\right) = 2\left(\frac{1}{16}\right) - \frac{1}{4} + 1 = \frac{1}{8} - \frac{2}{8} + \frac{8}{8} = \boxed{\frac{7}{8}}$$

---

## 3.9 (3)：反導函數基礎
### 題目：Find an antiderivative
*   **(a) $h(q) = \cos q$**
    已知 $\frac{d}{dq}(\sin q) = \cos q$
    故反導函數為：$\boxed{\sin q + C}$
*   **(b) $f(x) = \sec x \tan x$**
    已知 $\frac{d}{dx}(\sec x) = \sec x \tan x$
    故反導函數為：$\boxed{\sec x + C}$

---

## 4.1 (20)：黎曼和的區域定義
### 題目：Determine a region whose area is equal to the limit:
$$\lim_{n \to \infty} \sum_{i=1}^n \frac{1}{n} \left(\frac{i}{n}\right)^5$$

**分析步驟**：
1.  **找出寬度**：$\Delta x = \frac{1}{n}$，代表區間長度 $b-a = 1$。
2.  **找出起點**：$x_i = a + i\Delta x = \frac{i}{n}$，故 $a = 0, b = 1$。
3.  **找出函數**：$f(x_i) = x_i^5 \implies f(x) = x^5$。
**結論**：此區域為曲線 **$y = x^5$** 在區間 **$[0, 1]$** 下方的面積。

---

## 4.2 (25)：將積分表示為黎曼和
### 題目：Express $\int_1^3 \sqrt{4 + x^2} \, dx$ as a limit of Riemann sums.

**步驟分解**：
1.  **參數識別**：$a = 1, b = 3, f(x) = \sqrt{4 + x^2}$。
2.  **區間寬度**：$\Delta x = \frac{3 - 1}{n} = \frac{2}{n}$。
3.  **右端點座標**：$x_i = 1 + \frac{2i}{n}$。
4.  **組合公式**：
    $$\boxed{\lim_{n \to \infty} \sum_{i=1}^n \frac{2}{n} \sqrt{4 + \left(1 + \frac{2i}{n}\right)^2}}$$

---

## 4.3 (68)：FTC1 與萊布尼茲法則 (1/2)
### 題目：If $f(x) = \int_0^{ \sin x} \sqrt{1 + t^2} \, dt$ and $g(y) = \int_3^y f(x) \, dx$, find $g''(\pi/6)$.

**推理流程**：
1.  利用 FTC1：$g'(y) = f(y)$。
2.  求二階導：$g''(y) = f'(y)$。
3.  對 $f(x)$ 求導（萊布尼茲法則）：
    $$f'(x) = \sqrt{1 + (\sin x)^2} \cdot \cos x$$

---

## 4.3 (68)：詳解步驟 (2/2)
### 代入計算
計算 $g''(\pi/6)$，代入 $\sin(\pi/6) = 1/2, \cos(\pi/6) = \sqrt{3}/2$：
$$g''(\pi/6) = \sqrt{1 + \left(\frac{1}{2}\right)^2} \cdot \frac{\sqrt{3}}{2} = \sqrt{\frac{5}{4}} \cdot \frac{\sqrt{3}}{2}$$
$$= \frac{\sqrt{5}}{2} \cdot \frac{\sqrt{3}}{2} = \boxed{\frac{\sqrt{15}}{4}}$$

---

## 4.4 (39)：三角積分的定積分計算
### 題目：Evaluate $\int_0^{\pi/4} \frac{1 + \cos^2 \theta}{\cos^2 \theta} \, d\theta$

**簡化步驟**：
1.  **代數拆分**：$\frac{1}{\cos^2 \theta} + 1 = \sec^2 \theta + 1$。
2.  **求反導函數**：$F(\theta) = \tan \theta + \theta$。
3.  **代入上下限**：
    $$(\tan \frac{\pi}{4} + \frac{\pi}{4}) - (\tan 0 + 0) = (1 + \frac{\pi}{4}) - 0 = \boxed{1 + \frac{\pi}{4}}$$

---

## 4.5 (15)：代換積分法
### 題目：Evaluate $\int \sec 3t \tan 3t \, dt$

**詳解步驟**：
1.  **令 $u = 3t$**，則 $du = 3 dt \implies dt = \frac{1}{3} du$。
2.  **代換積分式**：
    $$\frac{1}{3} \int \sec u \tan u \, du = \frac{1}{3} \sec u + C$$
3.  **換回變數**：
    $$\boxed{\frac{1}{3} \sec 3t + C}$$

---

## 6.8 (31)：反三角羅必達極限
### 題目：Evaluate $\lim_{x \to 0} \frac{\sin^{-1} x}{x}$

**詳解步驟**：
1.  **確認形式**：$0/0$ 型不定式。
2.  **應用羅必達**：分子分母分別求導。
    *   $(\sin^{-1} x)' = \frac{1}{\sqrt{1 - x^2}}$
    *   $(x)' = 1$
3.  **重新計算極限**：
    $$\lim_{x \to 0} \frac{1}{\sqrt{1 - x^2}} = \frac{1}{\sqrt{1-0}} = \boxed{1}$$
`;
