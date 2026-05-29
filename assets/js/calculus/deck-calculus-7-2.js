// Preloaded Presentation: 微積分 7.2 — 三角積分技巧 (Trigonometric Integrals)
const DECK_CALCULUS_7_2_MD = String.raw`# 微積分 7.2：三角積分技巧
## 副標題：善用恆等式與代換，攻克各類三角函數冪次的積分挑戰
本簡報聚焦於 Stewart《Calculus》7.2 節，介紹如何利用三角恆等式處理 $\sin, \cos, \tan, \sec$ 等函數的高次方積分。

---

## 7.2 導言：核心策略
### 化繁為簡的關鍵
三角積分的主要策略是利用 **三角恆等式** 將積分式改寫，使得我們可以進行 **變數代換 (u-substitution)**。

**必備工具箱**：
1. **畢氏恆等式**：$\sin^2 x + \cos^2 x = 1$
2. **倍角公式 (降次)**：
   * $\sin^2 x = \frac{1}{2}(1 - \cos 2x)$
   * $\cos^2 x = \frac{1}{2}(1 + \cos 2x)$
3. **正切與正割**：$1 + \tan^2 x = \sec^2 x$

---

## 策略一：$\sin$ 與 $\cos$ 的乘積
### 關鍵看「奇次方」
遇到 $\int \sin^m x \cos^n x \, dx$ 時：
1. **若 $\cos$ 的次數 $n$ 為奇數**：
   * 拆出一個 $\cos x$。
   * 將剩下的 $\cos^{n-1} x$ 用 $1 - \sin^2 x$ 替換。
   * 令 $u = \sin x$。
2. **若 $\sin$ 的次數 $m$ 為奇數**：
   * 拆出一個 $\sin x$。
   * 將剩下的 $\sin^{m-1} x$ 用 $1 - \cos^2 x$ 替換。
   * 令 $u = \cos x$。
3. **若兩者皆為偶數**：
   * 使用 **降次公式**（半角公式）將次數減半。

---

## 實戰範例：處理奇次方 $\cos$
### 求 $\int \cos^3 x \, dx$
1. **拆解**：$\cos^3 x = \cos^2 x \cdot \cos x$
2. **轉換**：$= (1 - \sin^2 x) \cos x$
3. **代換**：令 $u = \sin x \implies du = \cos x \, dx$
4. **計算**：
   $$\int (1 - u^2) \, du = u - \frac{1}{3}u^3 + C$$
5. **結果**：
   $$\boxed{\sin x - \frac{1}{3}\sin^3 x + C}$$

---

## 策略二：$\tan$ 與 $\sec$ 的乘積
### 尋找 $\sec^2$ 或 $\sec \tan$
遇到 $\int \tan^m x \sec^n x \, dx$ 時：
1. **若 $\sec$ 的次數 $n$ 為偶數**：
   * 拆出 $\sec^2 x$。
   * 將剩下的 $\sec$ 項用 $1 + \tan^2 x$ 替換。
   * 令 $u = \tan x \implies du = \sec^2 x \, dx$。
2. **若 $\tan$ 的次數 $m$ 為奇數**：
   * 拆出 $\sec x \tan x$。
   * 將剩下的 $\tan$ 項用 $\sec^2 x - 1$ 替換。
   * 令 $u = \sec x \implies du = \sec x \tan x \, dx$。

---

## 必記的基礎積分
### 這些結果常被直接引用
1. $\boxed{\int \tan x \, dx = \ln |\sec x| + C}$
2. $\boxed{\int \sec x \, dx = \ln |\sec x + \tan x| + C}$
3. $\boxed{\int \sec^3 x \, dx = \frac{1}{2}(\sec x \tan x + \ln |\sec x + \tan x|) + C}$
   *(第三個公式常用於分部積分題型)*

---

## 💡 總結與建議
* **奇數優先**：看到奇數次方就要感到高興，因為這通常意味著簡單的代換。
* **降次為重**：全偶數次方雖然計算量大，但重複使用倍角公式必能解出。
* **熟悉公式**：對三角恆等式的熟練度直接決定了您的解題速度。

掌握了這些變換技巧，您就能輕鬆應對工程計算中隨處可見的週期性波形積分問題！
`;
