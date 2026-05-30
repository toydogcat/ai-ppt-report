// Preloaded Presentation: 微積分 12.4 — 外積 (The Cross Product)
const DECK_CALCULUS_12_4_MD = String.raw`# 微積分 12.4：外積
## 副標題：垂直的藝術——生成空間中第三個維度的向量運算
本簡報聚焦於 Stewart《Calculus》12.4 節，探討外積（叉積）的代數定義、幾何特性及其在物理與幾何中的應用。

---

## 12.4 導言：為什麼需要外積？
### 尋找「垂直於兩者」的向量
* **外積 (Cross Product)**：將兩個三維向量運算後得到一個**新向量**。
* **核心特性**：結果向量 $a \times b$ 同時垂直於 $a$ 與 $b$。
* **限制**：外積**僅定義於三維空間**中。

---

## 一、外積的代數定義：行列式法
### 記憶與計算的捷徑
設 $a = \langle a_1, a_2, a_3 \rangle$，$b = \langle b_1, b_2, b_3 \rangle$。
利用 $3 \times 3$ 符號行列式展開：
$$a \times b = \begin{vmatrix} i & j & k \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix}$$
$$= \begin{vmatrix} a_2 & a_3 \\ b_2 & b_3 \end{vmatrix} i - \begin{vmatrix} a_1 & a_3 \\ b_1 & b_3 \end{vmatrix} j + \begin{vmatrix} a_1 & a_2 \\ b_1 & b_2 \end{vmatrix} k$$

---

## 二、幾何特性與右手法則
### 決定新向量的方向與長度
1. **方向：右手法則 (Right-Hand Rule)**：
   右手手指從 $a$ 轉向 $b$（小於 $180^\circ$），大拇指指向即為 $a \times b$ 的方向。
2. **長度與夾角**：
   $$|a \times b| = |a||b| \sin \theta$$
   * 若兩向量**平行**，則 $a \times b = 0$。
3. **正交性**：$(a \times b) \cdot a = 0$ 且 $(a \times b) \cdot b = 0$。

---

## 三、幾何應用：面積與體積
### 從向量運算得到度量值
* **平行四邊形面積**：由 $a$ 與 $b$ 決定的平行四邊形面積 $A = |a \times b|$。
* **三角形面積**：由 $a$ 與 $b$ 構成的三角形面積 $A = \frac{1}{2} |a \times b|$。
* **標量三重積 (Scalar Triple Product)**：$a \cdot (b \times c)$。
  * **平行六面體體積**：$V = |a \cdot (b \times c)|$。
  * **共面判定**：若 $a \cdot (b \times c) = 0$，則三向量共面。

---

## 四、物理應用：力矩 (Torque)
### 旋轉效應的度量
* **場景**：用扳手轉動螺栓。
* **定義**：力矩 $\tau$ 為位置向量 $r$ 與力向量 $F$ 的外積：
  $$\tau = r \times F$$
* **物理意義**：
  * **大小**：$|\tau| = |r||F| \sin \theta$（力與力臂的乘積）。
  * **方向**：旋轉軸的方向。

---

## 五、外積的代數性質
### 與普通乘法的大不同
1. **反交換律**：$a \times b = -(b \times a)$（方向相反）。
2. **不滿足結合律**：$(a \times b) \times c \neq a \times (b \times c)$。
3. **分配律**：$a \times (b + c) = a \times b + a \times c$。
4. **標準基底運算**：
   * $i \times j = k, \quad j \times k = i, \quad k \times i = j$

---

## 💡 總結：外積是空間幾何的強大工具
* **生成法向量**：外積是尋找平面「法向量」最直接的方法。
* **連結幾何與數值**：透過長度，我們能計算面積與體積。
* **物理建模**：力矩、角動量與電磁感應中的勞侖茲力，皆以外積為核心。

掌握外積，您就擁有了駕馭三維空間旋轉與幾何關係的鎖鑰！
`;
