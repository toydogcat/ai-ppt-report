// Preloaded Presentation: 微積分 12.3 — 內積 (The Dot Product)
const DECK_CALCULUS_12_3_MD = String.raw`# 微積分 12.3：內積
## 副標題：夾角、投影與功——揭示向量間的「同向」分量
本簡報聚焦於 Stewart《Calculus》12.3 節，深入探討內積（點積）的定義、性質及其在幾何與物理中的應用。

---

## 12.3 導言：什麼是內積？
### 兩個向量的純量乘積
* **內積 (Dot Product)**：將兩個向量運算後得到一個**純量**（實數）。
* **代數定義**：設 $a = \langle a_1, a_2, a_3 \rangle, b = \langle b_1, b_2, b_3 \rangle$
  $$a \cdot b = a_1b_1 + a_2b_2 + a_3b_3$$
* **核心直覺**：內積衡量了兩個向量在多大程度上指向相同方向。

---

## 一、幾何定義與向量夾角
### 內積與餘弦定理的連結
* **幾何定義**：
  $$a \cdot b = |a||b| \cos \theta$$
  其中 $\theta$ 是兩向量間的夾角 ($0 \le \theta \le \pi$)。
* **計算夾角**：
  $$\cos \theta = \frac{a \cdot b}{|a||b|}$$
* **正交性 (Orthogonality)**：
  > 兩非零向量 $a, b$ **正交（垂直）**的充要條件是 $a \cdot b = 0$。

---

## 二、方向角與方向餘弦
### 描述向量在空間中的姿態
向量 $a$ 與正 $x, y, z$ 軸的夾角分別稱為 $\alpha, \beta, \gamma$。
* **方向餘弦 (Direction Cosines)**：
  $$\cos \alpha = \frac{a_1}{|a|}, \quad \cos \beta = \frac{a_2}{|a|}, \quad \cos \gamma = \frac{a_3}{|a|}$$
* **重要恆等式**：$\cos^2 \alpha + \cos^2 \beta + \cos^2 \gamma = 1$。
* **意義**：方向餘弦就是該方向上單位向量的分量。

---

## 三、投影 (Projections)
### 提取特定方向的分量
將向量 $b$ 投影到向量 $a$ 上：
1. **純量投影 (Scalar Projection)**：$b$ 在 $a$ 方向上的「長度」（含正負）。
   $$\text{comp}_a b = \frac{a \cdot b}{|a|}$$
2. **向量投影 (Vector Projection)**：$b$ 在 $a$ 方向上的向量。
   $$\text{proj}_a b = \left( \frac{a \cdot b}{|a|^2} \right) a$$
> **視覺化**：想像太陽光垂直照射在 $a$ 方向上，$b$ 留下的「陰影」即為投影。

---

## 四、物理應用：功 (Work)
### 當力與位移不完全同向時
* **定義**：恆力 $F$ 使物體產生位移 $D$，則力所做的功 $W$ 為：
  $$W = |F||D| \cos \theta = F \cdot D$$
* **情境**：
  * 若力與位移垂直 ($\theta=90^\circ$)，功為 0（例如向心力）。
  * 若力與位移同向，功最大。
  * 若力與位移反向，做負功。

---

## 💡 總結：內積的幾何與物理威力
* **角度探測器**：內積是計算空間中任意兩線段夾角的最快方法。
* **分量分析師**：透過投影，我們能將複雜的力或運動拆解到指定的座標軸或平面上。
* **計算性質**：滿足交換律 $a \cdot b = b \cdot a$ 與分配律 $a \cdot (b+c) = a \cdot b + a \cdot c$。

掌握內積，您就擁有了透視空間幾何關係的「量角器」與「投影機」！
`;
