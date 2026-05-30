// Preloaded Presentation: 微積分 15.7 — 圓柱座標中的三重積分 (Triple Integrals in Cylindrical Coordinates)
const DECK_CALCULUS_15_7_MD = String.raw`# 微積分 15.7：圓柱座標中的三重積分
## 副標題：結合極座標與高度——處理軸對稱物體的最佳利器
本簡報聚焦於 Stewart《Calculus》15.7 節，介紹如何利用圓柱座標簡化特定三維區域的積分運算。

---

## 15.7 導言：什麼是圓柱座標？
### 極座標的 3D 升級版
*   **定義**：用 $(r, \theta, z)$ 代替 $(x, y, z)$。
*   **轉換公式**：
    *   $x = r \cos \theta$
    *   $y = r \sin \theta$
    *   $z = z$ （高度保持不變）
*   **適用場景**：當物體繞著一個軸（通常是 $z$ 軸）對稱時，如圓柱體、拋物面等。

---

## 一、體積元素變換 (Volume Element)
### 記住那個 $r$！
在圓柱座標中，微小體積元 $dV$ 為：
$$\boxed{dV = r \, dz \, dr \, d\theta}$$
*   **原理**：底部是一個極座標下的面積元 $r \, dr \, d\theta$，高度為 $dz$。
*   **重要提醒**：與極座標二重積分一樣，轉換後務必在積分號內多乘一個 $r$。

---

## 二、積分公式
### 三層邊界的設定
若空間區域 $E$ 是由 $xy$ 平面上的極座標區域 $D$ 與上下曲面 $z=u_1(r,\theta), z=u_2(r,\theta)$ 構成：
$$\iiint_E f(x, y, z) dV = \int_\alpha^\beta \int_{h_1(\theta)}^{h_2(\theta)} \int_{u_1}^{u_2} f(r\cos\theta, r\sin\theta, z) \, \mathbf{r} \, dz \, dr \, d\theta$$
*   **步驟**：
    1.  先處理 $z$ 的上下界。
    2.  將剩餘問題看作 $xy$ 平面上的極座標積分。

---

## 三、實戰範例：拋物面下的體積
### 從 $x^2+y^2$ 到 $r^2$
*   **問題**：求圓柱 $x^2+y^2=1$ 內部，且位於 $z=0$ 與 $z=1-x^2-y^2$ 之間的體積。
*   **轉換**：
    *   邊界變為 $0 \le r \le 1, 0 \le \theta \le 2\pi, 0 \le z \le 1-r^2$。
*   **優勢**：積分式變為單簡單的多項式積分，避開了複雜的根號運算。

---

## 💡 總結：圓柱座標的戰略
*   **識別**：看到 $x^2 + y^2$ 或圓柱形邊界時，首選圓柱座標。
*   **公式**：$dV = r \, dz \, dr \, d\theta$。
*   **直覺**：將其想像為「在不同高度上做極座標積分」。

掌握了 15.7 節，您就具備了高效處理物理中具有旋轉對稱性之實體（如電線、流體管道）的能力！
`;

// Preloaded Presentation: 微積分 15.8 — 球座標中的三重積分 (Triple Integrals in Spherical Coordinates)
const DECK_CALCULUS_15_8_MD = String.raw`# 微積分 15.8：球座標中的三重積分
## 副標題：探索最優美的座標系——解決球對稱問題的終極武器
本簡報聚焦於 Stewart《Calculus》15.8 節，介紹球座標系統的定義及其在複雜三維積分中的神奇簡化作用。

---

## 15.8 導言：什麼是球座標？
### 經度、緯度與距離
球座標用 $(\rho, \theta, \phi)$ 描述空間點：
*   **$\rho$ (rho)**：點到原點的距離 ($\rho \ge 0$)。
*   **$\theta$ (theta)**：在 $xy$ 平面上的投影角度（同極座標，$0 \le \theta \le 2\pi$）。
*   **$\phi$ (phi)**：與正 $z$ 軸的夾角（**天頂角**，$0 \le \phi \le \pi$）。

---

## 一、轉換公式與幾何直覺
### 從直角座標出發
*   $z = \rho \cos \phi$
*   $r = \rho \sin \phi$ （在 $xy$ 平面上的投影長度）
*   $x = r \cos \theta = \rho \sin \phi \cos \theta$
*   $y = r \sin \theta = \rho \sin \phi \sin \theta$
*   **關係式**：$x^2 + y^2 + z^2 = \rho^2$。

---

## 二、最重要的體積元素變換
### 縮放因子的奧秘
在球座標中，微小體積元 $dV$ 為：
$$\boxed{dV = \rho^2 \sin \phi \, d\rho \, d\theta \, d\phi}$$
*   **為什麼這麼複雜？**：這是由雅可比行列式算出的幾何縮放比例。
*   **口訣**：$\rho$ 平方 $\sin \phi$。絕對不能漏掉！

---

## 三、適用場景：對稱與形狀
### 當邊界很「圓」時
1.  **球體**：$\rho \le a$。
2.  **圓錐**：$\phi = c$ (常數)。
3.  **被積函數含有 $x^2+y^2+z^2$**：如引力場、電場計算。
*   **範例**：計算半徑為 $a$ 的球體體積。
    $$V = \int_0^\pi \int_0^{2\pi} \int_0^a \rho^2 \sin \phi \, d\rho \, d\theta \, d\phi = \frac{4}{3}\pi a^3$$

---

## 四、實戰技巧：確定 $\phi$ 的範圍
### 最容易出錯的地方
*   **北極點**：$\phi = 0$。
*   **$xy$ 平面**：$\phi = \pi/2$。
*   **南極點**：$\phi = \pi$。
*   **注意**：$\phi$ 的範圍始終在 $0$ 到 $\pi$ 之間，不會超過。

---

## 💡 總結：球座標的威力
*   **核心優勢**：將極其複雜的球面與錐面邊界轉化為**常數邊界**。
*   **物理連結**：這是研究行星運動、原子結構與電磁學的標準座標系。
*   **檢查點**：轉換後是否補上了 $\rho^2 \sin \phi$？

掌握了 15.8 節，您就擁有了透視宇宙對稱規律的數學鑰匙！
`;

// Preloaded Presentation: 微積分 15.9 — 多重積分中的變數代換 (Change of Variables in Multiple Integrals)
const DECK_CALCULUS_15_9_MD = String.raw`# 微積分 15.9：多重積分中的變數代換
## 副標題：變形金剛——利用 Jacobian 掌控任何座標轉換
本簡報聚焦於 Stewart《Calculus》15.9 節，介紹廣義變數代換的原理、雅可比行列式及其在化簡積分中的應用。

---

## 15.9 導言：為什麼要變換變數？
### 簡化區域與簡化公式
*   **挑戰**：有些積分區域（如傾斜的橢圓或平行四邊形）在直角座標下很難設定邊界。
*   **解決方案**：透過變換 $x=g(u,v), y=h(u,v)$，將複雜區域 $D$ 映射為簡單區域 $S$（如矩形）。
*   **關鍵**：我們需要知道變換過程中「面積」是如何縮放的。

---

## 一、雅可比行列式 (The Jacobian)
### 面積縮放的比例尺
對於二維變換，雅可比行列式 $J$ 定義為：
$$\frac{\partial(x, y)}{\partial(u, v)} = \begin{vmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \end{vmatrix}$$
*   **幾何意義**：它代表了從 $uv$ 平面到 $xy$ 平面局部面積的擴張或收縮倍率。

---

## 二、變數代換公式
### 將所有零件換掉
$$\iint_D f(x, y) dA = \iint_S f(x(u,v), y(u,v)) \left| \frac{\partial(x, y)}{\partial(u, v)} \right| du \, dv$$
*   **三個必備動作**：
    1.  用 $u, v$ 代換被積函數中的 $x, y$。
    2.  計算並乘上 **Jacobian 的絕對值**。
    3.  找出新變數 $u, v$ 的積分邊界。

---

## 三、實戰範例：極座標的起源
### 驗證已知公式
讓我們對極座標 $x=r\cos\theta, y=r\sin\theta$ 使用 Jacobian：
$$J = \begin{vmatrix} \cos\theta & -r\sin\theta \\ \sin\theta & r\cos\theta \end{vmatrix} = r\cos^2\theta + r\sin^2\theta = r$$
*   **結論**：這就是為什麼極座標積分一定要多乘一個 $r$！

---

## 四、如何選擇合適的變換？
### 觀察區域的邊界
*   若邊界是 $x+y=1, x+y=2$，可令 $u = x+y$。
*   若邊界是 $y=2x, y=3x$，可令 $v = y/x$。
*   **目標**：使新區域 $S$ 的邊界變為常數線（矩形）。

---

## 💡 總結：重積分的終極心法
*   **Jacobian** 是多維變數代換的靈魂。
*   **對稱性**與**邊界線性化**是選擇變換的最高準則。
*   **三維擴展**：三重積分的 Jacobian 是一個 $3 \times 3$ 行列式。

掌握了 15.9 節，您就掌握了重積分最通用的解決方案，能夠從容應對各類工程與物理中的複雜幾何問題！
`;
