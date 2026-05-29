// Preloaded Presentation: 微積分 3.6 — 繪圖與科技應用 (Graphing with Calculus and Technology)
const DECK_CALCULUS_3_6_MD = String.raw`# 微積分 3.6：繪圖與科技應用
## 副標題：微積分 × Python，洞察科技也看不見的細節
本簡報聚焦於 Stewart《Calculus》3.6 節，探討如何結合微積分理論與 Python 繪圖工具，避免科技產生的視覺誤導，繪製最精確的函數圖形。

---

## 3.6 導言：科技的雙面刃
### 為什麼有電腦還需要微積分？
* **便利性**：電腦（如 Python）可以秒級繪製複雜函數。
* **陷阱**：
  * **比例尺問題**：預設的視窗可能會漏掉極微小的極值。
  * **解析度問題**：快速震盪的函數可能看起來是一片雜訊。
* **微積分的角色**：理論告訴我們「該去哪裡看」。我們使用 $f'$ 與 $f''$ 來決定 Python 繪圖的 **最佳視窗 (Viewing Rectangle)**。

---

## 實戰工具：Python 資料科學環境
### 使用 Numpy 與 Matplotlib
在現代開發中，我們使用以下程式碼來視覺化函數：
\`\`\`python
import numpy as np
import matplotlib.pyplot as plt

# 定義函數
def f(x):
    return 2*x**6 + 3*x**5 + 3*x**3 - 2*x**2

# 設定視窗範圍
x = np.linspace(-3, 2, 1000)
y = f(x)

plt.plot(x, y)
plt.axhline(0, color='black', lw=1) # 標示 x 軸
plt.show()
\`\`\`

---

## 案例研究：被隱藏的秘密
### 考慮 $f(x) = 2x^6 + 3x^5 + 3x^3 - 2x^2$
* **初步觀察**：在大範圍視窗中，它看起來像個簡單的 U 型，似乎只有一個最小值。
* **微積分介入**：
  $f'(x) = 12x^5 + 15x^4 + 9x^2 - 4x$
  計算發現，在 $x=0$ 附近其實存在一個 **局部極大值** 與另一個 **局部極小值**。
* **Python 優化**：透過理論指導，我們縮小 \`xlim\` 到 \`[-0.5, 0.5]\`，細節才顯現出來！

---

## 科技繪圖的黃金法則 (Python 範例)
### 如何避免誤導？
1. **多視窗觀察**：不要只看一張圖。
\`\`\`python
fig, (ax1, ax2) = plt.subplots(1, 2)
ax1.set_xlim(-5, 5)   # 觀察終極行為 (End Behavior)
ax2.set_xlim(-0.5, 0.5) # 觀察原點細節 (Local Details)
\`\`\`
2. **分析導數**：若 $f'(x)$ 在某區間變號頻繁，需增加 \`linspace\` 的點數以提高解析度。
3. **確認漸近線**：鉛直漸近線會導致圖形出現垂直長線，需手動設定 \`ylim\`。

---

## 互動式探索：尋找反曲點
### 利用 Python 繪製二階導數
有時候原函數的彎曲不明顯，我們可以繪製 $f''(x)$：
\`\`\`python
def f_double_prime(x):
    return 60*x**4 + 60*x**3 + 18*x - 4

y_double = f_double_prime(x)
plt.plot(x, y_double, label="f''(x)")
plt.axhline(0, color='red', linestyle='--') # 零點即為反曲點候選
plt.legend()
\`\`\`
*提示：$f''(x)$ 穿越紅虛線的地方，就是圖形改變「彎曲方向」的時刻。*

---

## 💡 總結
* **理論引導實踐**：微積分提供「坐標」，Python 提供「畫布」。
* **主動分析**：不要盲信預設圖形，利用臨界數來檢驗。
* **開發者思維**：掌握 \`numpy\` 與 \`matplotlib\` 是當代工程師將數學模型落地的必備技能。

數學讓我們看見電腦看不見的東西，科技讓我們實現數學實現不了的速度。
`;
