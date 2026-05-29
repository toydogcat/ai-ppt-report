// Preloaded Presentation: 微積分 9.4 — 人口增長模型 (Models for Population Growth)
const DECK_CALCULUS_9_4_MD = String.raw`# 微積分 9.4：人口增長模型
## 副標題：從無限擴張到環境邊界，解析動態系統的解析解與長期趨勢
本簡報聚焦於 Stewart《Calculus》9.4 節，深入探討人口增長的兩種核心數學模型：自然增長模型與邏輯增長模型，並學習如何求出它們的顯式解。

---

## 9.4 導言：模型的重要性
### 為什麼需要多個模型？
* **自然增長模型**：適合描述資源無限時的早期階段（如實驗室初期的細菌）。
* **邏輯增長模型**：引入「環境承載力」概念，更符合現實世界的長期規律。
* **核心目標**：利用 9.3 節的「分離變數法」求出人口隨時間變化的精確函數 $P(t)$。

---

## 一、自然增長定律 (Natural Growth)
### 恆定的相對增長率
微分方程：
$$\frac{dP}{dt} = kP \quad \implies \quad \frac{1}{P} \frac{dP}{dt} = k$$
* **求解**：$\int \frac{1}{P} dP = \int k dt \implies \ln P = kt + C$。
* **顯式解**：
  $$\boxed{P(t) = P_0 e^{kt}}$$
* **特徵**：增長速度與規模成正比，導致指數爆炸。

---

## 二、邏輯增長模型 (The Logistic Model)
### 考慮環境限制
微分方程：
$$\frac{dP}{dt} = kP \left( 1 - \frac{P}{M} \right)$$
* **$M$ (Carrying Capacity)**：環境所能承載的最大人口。
* **求解挑戰**：需使用「部分分式法」積分。
  $$\int \left( \frac{1}{P} + \frac{1/M}{1 - P/M} \right) dP = \int k dt$$

---

## 邏輯方程的顯式解
### 走向穩定的曲線
經過積分與代數整理，得到解公式：
$$\boxed{P(t) = \frac{M}{1 + Ae^{-kt}}}, \quad \text{其中 } A = \frac{M - P_0}{P_0}$$
* **長期行為**：當 $t \to \infty$ 時，$e^{-kt} \to 0$，因此 $P(t) \to M$。
* **幾何特徵**：S 型曲線（S-curve）。在 $P = M/2$ 處增長最快（反曲點）。

---

## 三、其他變體模型
### 現實世界的複雜性
1. **收割模型 (Harvesting)**：
   $$\frac{dP}{dt} = kP \left( 1 - \frac{P}{M} \right) - c$$
   (例如：每年固定捕撈數量的魚群)
2. **絕種閾值 (Extinction Threshold)**：
   $$\frac{dP}{dt} = kP \left( 1 - \frac{P}{M} \right) \left( 1 - \frac{m}{P} \right)$$
   (當人口低於 $m$ 時，增長率變為負數，導致滅絕)

---

## 💡 總結：數學預測的威力
* **解析解的價值**：讓我們能精確預測「何時」人口會達到某個水平。
* **平衡點的穩定性**：
  * $P = 0$ 是不穩定平衡點。
  * $P = M$ 是穩定平衡點。
* **應用領域**：除了人口學，也廣泛用於謠言傳播、新產品普及率分析。

微積分讓我們不僅能觀察現狀，更能洞察動態系統的終局！
`;
