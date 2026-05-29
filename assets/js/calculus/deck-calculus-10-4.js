// Preloaded Presentation: 微積分 10.4 — 極座標中的微積分 (Calculus in Polar Coordinates)
const DECK_CALCULUS_10_4_MD = String.raw`# 微積分 10.4：極座標中的微積分
## 副標題：扇形面積、切線斜率與極座標下的路徑積分
本簡報聚焦於 Stewart《Calculus》10.4 節，介紹如何在極座標系統下計算區域面積、曲線切線以及弧長。

---

## 10.4 導言：旋轉視角下的度量
### 從矩形到扇形
* **笛卡兒座標**：利用微小矩形 $y \, dx$ 累積面積。
* **極座標**：利用微小**扇形** $\frac{1}{2} r^2 \, d\theta$ 累積面積。
* **核心挑戰**：在極座標中，一個點有無限多個表示法（如 $r$ 可正可負），在尋找交點與積分區間時需特別小心。

---

## 一、極座標下的面積 (Area)
### 扇形微元的累積
若區域由極座標方程 $r = f(\theta)$ 以及兩射線 $\theta = a, \theta = b$ 所圍成：
$$\boxed{A = \int_{a}^{b} \frac{1}{2} [f(\theta)]^2 \, d\theta}$$
* **直覺**：這公式來自於圓扇形面積公式 $A = \frac{1}{2} r^2 \theta$。
* **兩曲線間的面積**：若區域位於 $r=f(\theta)$ 與 $r=g(\theta)$ 之間：
  $$A = \int_{a}^{b} \frac{1}{2} ([f(\theta)]^2 - [g(\theta)]^2) \, d\theta$$

---

## 二、極座標曲線的切線 (Tangents)
### 求 dy/dx 的極座標公式
利用轉換公式 $x = r \cos \theta, y = r \sin \theta$ 搭配連鎖律：
$$\frac{dy}{dx} = \frac{dy/d\theta}{dx/d\theta} = \boxed{\frac{\frac{dr}{d\theta} \sin \theta + r \cos \theta}{\frac{dr}{d\theta} \cos \theta - r \sin \theta}}$$
* **特殊情況**：在極點（$r=0$）處，若 $dr/d\theta \neq 0$，切線斜率簡化為 $\tan \theta$。這意味著過極點的射線 $\theta$ 正好就是該處的切線。

---

## 三、極座標下的弧長 (Arc Length)
### 沿著角度前進的路徑
若曲線由 $r = f(\theta)$ 定義，$a \le \theta \le b$，則其長度為：
$$\boxed{L = \int_{a}^{b} \sqrt{r^2 + \left(\frac{dr}{d\theta}\right)^2} \, d\theta}$$
* **推導來源**：這是從參數曲線弧長公式 $\int \sqrt{(dx/dt)^2 + (dy/dt)^2} dt$ 代入極座標轉換式後簡化而得。
* **物理意義**：根號項代表了「徑向速度」與「切向速度」的合速度。

---

## 💡 總結與注意事項
* **積分區間的選擇**：繪製圖形是確認 $a, b$ 最安全的方法。要注意曲線是否重疊（如玫瑰線在 $0 \le \theta \le 2\pi$ 間可能繞了兩次）。
* **交點問題**：聯立解方程可能漏掉極點（$r=0$）或其他對稱點，務必配合圖形檢查。
* **應用優勢**：在處理圓對稱問題（如天體力學中的掃過面積）時，極座標微積分比笛卡兒座標簡潔得多。

掌握極座標微積分，您就具備了量化所有「環繞與對稱」幾何問題的能力！
`;
