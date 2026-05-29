// Preloaded Presentation: 微積分 10.2 — 參數曲線的微積分 (Calculus with Parametric Curves)
const DECK_CALCULUS_10_2_MD = String.raw`# 微積分 10.2：參數曲線的微積分
## 副標題：切線、面積、弧長與表面積——在參數化框架下的微積分運算
本簡報聚焦於 Stewart《Calculus》10.2 節，介紹如何直接對參數方程 $x=f(t), y=g(t)$ 進行微分與積分運算，而不需消去參數。

---

## 10.2 導言：直接運算的優勢
### 為什麼不先消去參數？
* **複雜性**：許多參數方程消去參數後會得到極其複雜的隱函數（如擺線）。
* **資訊保留**：參數 $t$ 通常代表時間或角度，直接對 $t$ 運算能保留動態資訊（如速度）。
* **核心工具**：連鎖律 (Chain Rule) 是連接參數空間與笛卡兒空間的橋樑。

---

## 一、切線與斜率 (Tangents)
### 求 dy/dx 的公式
若 $x = f(t)$ 且 $y = g(t)$，根據連鎖律：
$$\frac{dy}{dt} = \frac{dy}{dx} \cdot \frac{dx}{dt} \implies \boxed{\frac{dy}{dx} = \frac{dy/dt}{dx/dt}} \quad (\text{若 } dx/dt \neq 0)$$
* **水平切線**：當 $dy/dt = 0$ 且 $dx/dt \neq 0$。
* **垂直切線**：當 $dx/dt = 0$ 且 $dy/dt \neq 0$。
* **二階導數**：
  $$\frac{d^2y}{dx^2} = \frac{\frac{d}{dt} \left( \frac{dy}{dx} \right)}{\frac{dx}{dt}}$$

---

## 二、面積 (Area)
### 在參數曲線下的積分
已知笛卡兒座標下的面積為 $A = \int y \, dx$。若曲線由 $x=f(t), y=g(t)$ 定義，且 $t$ 從 $\alpha$ 變到 $\beta$：
$$\boxed{A = \int_{\alpha}^{\beta} g(t) f'(t) \, dt}$$
> 💡 **注意方向**：若積分結果為負，代表曲線是從右向左描繪的，取絕對值即可。

---

## 三、弧長 (Arc Length)
### 沿著路徑的累積
若曲線 $C$ 由 $x=f(t), y=g(t)$ 定義，$a \le t \le b$，且 $f', g'$ 連續，則其長度為：
$$\boxed{L = \int_{a}^{b} \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2} \, dt}$$
* **物理直覺**：$\sqrt{(dx/dt)^2 + (dy/dt)^2}$ 是質點在時間 $t$ 的**速率** (speed)，弧長即為速率對時間的積分。

---

## 四、旋轉體表面積 (Surface Area)
### 參數化的旋轉公式
若參數曲線繞 $x$ 軸旋轉，產生的表面積為：
$$\boxed{S = \int_{a}^{b} 2\pi y \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2} \, dt}$$
* **ds 的代換**：這本質上仍是 $\int 2\pi y \, ds$，只是將弧長微元 $ds$ 參數化。

---

## 💡 總結：微積分的參數化擴展
* **統一性**：參數化公式與傳統公式本質一致，只是換了座標系表達。
* **強大能力**：能處理自我交會的曲線（如葉形線）或無法寫成 $y=f(x)$ 的幾何體。
* **計算提示**：熟練掌握 $\sin, \cos$ 的平方和恆等式，在計算弧長根式時非常有用。

掌握了參數曲線的微積分，您就具備了量化現實世界複雜動態軌跡的專業工具！
`;
