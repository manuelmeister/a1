---
prev:
    text: Reelle und komplexe Zahlen
    link: /1-reelle-komplexe-zahlen
next:
    text: Stetige Funktionen
    link: /3-stetige-funktionen
---

# <small>Kapitel 2:</small><br> Folgen und Reihen

Der erste grundlegende Begriff der Analysis ist der des Grenzwertes einer Folge. Auf diesem Begriff beruht dann die Theorie der konvergenten Reihen.

## 2.1. Grenzwert einer Folge

::: definition Definition 2.1.1.
Eine **Folge** (reeller Zahlen) ist eine Abbildung

$$
a : \mathbb{N} \longrightarrow \mathbb{R}
$$

Wir schreiben $a_n$ statt $a(n)$ und bezeichnen eine Folge mit $(a_n)_{n ≥ 1}$.
:::

::: example Beispiel 2.1.2.{#beispiel-2-1-2}
1. $a_n = \frac{1}{n}, n ≥ 1$ 
    $$
    \begin{array}{c c c c c c c c c c}
    & &0 & & & ¼ &⅓ &½ & & & & & &1 & & \\
    & &\textbf{|} & & &| &| &| & & & & & &\textbf{|} & \\[-1cm]
    \hline& &\textbf{|} & & &| &| &| & & & & & &\textbf{|} & \\
    & & & & &a_4 &a_3 &a_2 & & & & & & a_1& & \\
    \end{array}
    $$
2. $a_n = (-1)^n, n ≥ 1$
    $$
    \begin{array}{c c c c c c c c c c c c c}
    & &-1 & & & & & & &0 & &\quad & & & & 1 & & \\
    & &\textbf{|} & & & & & & &\textbf{|} & & & & & &\textbf{|} & & \\[-1cm]
    \hline& &\textbf{|} & & & & & & &\textbf{|} & & & & & &\textbf{|} & &\\
   & &a_1 & & & & & & & & & & & & &a_2 & & \\
   & &a_3 & & & & & & & & & & & & &a_4 & & \\
   & &a_5 & & & & & & & & & & & & &a_6 & & \\
   & &⋮ & & & & & & & & & & & & &⋮ & & \\
    \end{array}
    $$
:::


Für den Grenzwertbegriff ist folgendes Lemma von Bedeutung:

::: proposition Lemma 2.1.3.{#lemma-2-1-3}
Sei $(a_n)_{n≥1}$ eine Folge. Dann gibt es höchstens eine reelle Zahl $l \in \mathbb{R}$ mit der Eigenschaft:

<center>

$\forall \varepsilon > 0$ ist die Menge $\{n \in \mathbb{N} : a_n \notin (l - \varepsilon,\,l + \varepsilon)\}$ endlich.
</center>

**Beweis:**<br> Wir nehmen an, dass es $l_1 < l_2$ gibt, so dass beide $l_1, l_2$ die Eigenschaft erfüllen.

$$
\begin{array}{c ccc c ccc c}
& &l_1 - ε \!\!\!\!\!\!\!\!\!\!& &\!\!\!\!\!\!\!\!\!\!l_1 + ε &\qquad l_2-ε\!\!\!\!\!\!\!\!\!\!& &\!\!\!\!\!\!\!\!\!\!l_2 + ε & & \\
& & & \!\!/\!\!\,_{\scriptsize|||||||}\textbf{|\!\!|}\!\,_{\scriptsize|||||||}\!\backslash\!\!\! & & & \!\!/\!\!\,_{\scriptsize|||||||}\textbf{|\!\!|}\!\,_{\scriptsize|||||||}\!\backslash\!\!\! & \\[-1cm]
\hline& & & \!\!\backslash\!\!\,^{\scriptsize|||||||}\textbf{|\!\!|}\!\,^{\scriptsize|||||||}\!/\!\!\! & & & \!\!\backslash\!\!\,^{\scriptsize|||||||}\textbf{|\!\!|}\!\,^{\scriptsize|||||||}\!/\!\!\! & \\
& & &l_1 & & &l_2 & &
\end{array}
$$

Sei $\varepsilon = \displaystyle\frac{l_2 - l_1}{3}$, dann folgt:

$$
\begin{aligned}
(l_1 - \varepsilon,\,l_1 + \varepsilon) \;\cap\; (l_2 - \varepsilon,\,l_2 + \varepsilon) \;=\; \varnothing. \qquad& (*)\\
\end{aligned}
$$

Nach Voraussetzung sind

$$
E_1 = \{n : a_n \notin (l_1 - \varepsilon,\,l_1 + \varepsilon)\} \subset \mathbb{N}
$$

und

$$
E_2 = \{n : a_n \notin (l_2 - \varepsilon,\,l_2 + \varepsilon)\} \subset \mathbb{N}
$$

endlich. Insbesondere ist:

$$
\mathbb{N} \setminus E_2 = \{n \in \mathbb{N} : a_n \in (l_2 - \varepsilon,\,l_2 + \varepsilon)\}
$$

unendlich.

Sei $k\in \mathbb{N} \setminus E_2$, $a_k \in (l_2-ε,l_2+ε)$<br> Aus $(*)$ folgt aber, dass $a_k \notin (l_1 - \varepsilon,\,l_1 + \varepsilon)$, also $k \in E_1$. Damit ist $E_1$ unendlich, da $\mathbb{N} \setminus E_2$ unendlich ist. Das ist ein Widerspruch, da $E_1$ endlich ist. <span class="right">$\Box$</span>
:::

Nach [Lemma 2.1.3](#lemma-2-1-3) ist eine solche Zahl $l$ eindeutig bestimmt; sie wird mit

$$
\displaystyle \lim_{n \to \infty} a_n
$$

bezeichnet und nennt sich **Grenzwert** oder **Limes** der Folge $(a_n)_{n\ge1}$.

::: definition Definition 2.1.4.{#definition-2-1-4}
Eine Folge $(a_n)_{n\ge1}$ heisst **konvergent**, falls es ein $l \in \mathbb{R}$ gibt, so dass für alle $\varepsilon>0$ die Menge

$$
\{n \in \mathbb{N}^{*} : a_n \notin (l - \varepsilon,\,l + \varepsilon)\}
$$

endlich ist.
:::

Andere Definition des Grenzwertes aus der Vorlesung:
::: definition Alternative Definition Grenzwert
Eine Folge $(a_n)_{n≥1}$ konvergiert mit **Grenzwert** $l$, falls für alle $\varepsilon > 0$, ein Index $N_\varepsilon \in \mathbb{N}_{≥1}$ existiert, so dass für alle $n ≥ N_\varepsilon$ gilt:
$$
|a_n - l| < \varepsilon.
$$
:::

::: example Beispiel aus Vorlesung
1. Die konstante Folge $a_n = a$ hat den Grenzwert $\displaystyle\lim_{n\to\infty} a_n = a$. <br>Da für alle $n≥1$ und alle $\varepsilon > 0$ wir $|a_n - a| = 0 < ε$ haben, ist $a_n$ konvergent mit Grenzwert $a$.
2. Für die Folge $a_n = \frac{1}{n} \quad 1,½,⅓,¼,\cdots$<br> behaupten wir, dass $\displaystyle\lim_{n\to\infty} a_n = 0$. <br>Sei $\varepsilon > 0$ beliebig. Dann gibt es nach dem Archimedischen Prinzip ein $N_0 \in \mathbb{N}$ mit $\frac{1}{N_0} < \varepsilon$. Daher gilt für alle $n ≥ N_0$:
   $$
   |a_n - 0| = \Bigl|\frac{1}{n} - 0\Bigr| ≤ \frac{1}{N_0} < \varepsilon.
   $$
   :::

::: definition Definition Divergenz
Falls $(a_n)$ keinen Grenzwert/Limes besitzt, so heisst sie **divergent**.
:::

::: example Beispiel für Divergenz
1. Die Folge $a_n = (-1)^n\quad-1,+1,-1,\cdots$<br>
   $|a_n - a_{n+1}| = 2$ für alle $n ≥ 1$, also gibt es kein $l\in\mathbb{R}$ der den Grenzwert sein kann.<br> **Beweis**:
   Angenommen, es gäbe einen Grenzwert $l$. Dann müsste für alle $\varepsilon > 0$ z.B. $\varepsilon = ½$, gibt es ein $N_\varepsilon \in \mathbb{N}_{≥1}$, so dass für alle $n ≥ N_\varepsilon$ gilt:
   $|a_n - l| < \varepsilon = ½$.
   $$\begin{align*}2&=|a_n-a_{n+1}|\\&=|a_n-l+l-a_{n+1}|\\&≤|a_n-l|+|a_{n+1}-l|\\&≤\frac{1}{2}+\frac{1}{2}\quad \forall n≥N_½\\2&≤1\qquad\qquad\qquad\qquad\qquad ↯ \end{align*}$$

2. Die Folge $a_n = n$ divergiert, da $|a_n - a_{n+1}| = 1$ für alle $n ≥ 1$.<br> **Beweis:**
   Angenommen, es gäbe einen Grenzwert $l$. Dann müsste für alle $\varepsilon > 0$ ein $N_\varepsilon \in \mathbb{N}_{≥1}$ existieren, so dass für alle $n ≥ N_\varepsilon$ gilt: $|a_n - l| < \varepsilon$. Da $a_n = n$, folgt $|n - l| < \varepsilon$ für alle $n ≥ N_\varepsilon$. Das ist aber nicht möglich, da $n$ beliebig gross wird.
:::

::: definition Definition aus Vorlesung
1. Eine Folge heisst **beschränkt**, falls die Menge an Folgeglieder $\{a_n : n \ge 1\}$ beschränkt ist.
2. Eine Folge heisst **Nullfolge**, falls $\displaystyle\lim_{n\to\infty} a_n = 0$.<br> z.B. $a_n = \frac{1}{n}$.
:::

::: proposition Bemerkung 2.1.5.{#bemerkung-2-1-5}
Jede konvergente Folge ist beschränkt

Sei $(a_n)_{n\ge1}$ konvergent mit Grenzwert $l$. <br>$\implies$ $\{a_n : n \ge 1\}$ beschränkt.

**Beweis:**<br> Sei $\varepsilon = 1$ und $\{n \in \mathbb{N} : a_n \notin (l-1,\,l+1)\} =\{i_1,\dots,i_m\}$, dann folgt:

$$
\{a_n : n \ge 1\} \subset (l-1,\,l+1) \;\cup\; \{a_{i_1},\dots,a_{i_m}\}
$$

und ist daher beschränkt.
:::

$\{ a_n : n\in\mathbb{N} \}$ ist **beschränkt** $\quad\not\!\!\!\!\implies$ konvergent.<br>
z.B. $a_n = (-1)^n$ ist beschränkt, aber nicht konvergent.

In folgendem Lemma beweisen wir die äquivalenz zwischen dem Konvergenzbegriff gemäss [Def. 2.1.4](#definition-2-1-4) und der historisch ersten Definition von Konvergenz, welche von D’Alembert (1765) und Cauchy (1821) formuliert wurde und in Konvergenzbeweisen oft benützt wird

::: proposition LEMMA 2.1.6.
Sei $(a_n)_{n\ge1}$ eine Folge. Folgende Aussagen sind äquivalent:

1. $(a_n)_{n\ge1}$ konvergiert gegen $l = \displaystyle\lim_{n\to\infty} a_n$.  
2. Für alle $\varepsilon>0$ gibt es ein Index $N \ge 1$, sodass

    $$
    |a_n - l| < \varepsilon \quad \forall n \ge N.
    $$
{.numbered}

**Beweis:**<br>
(1) $\Rightarrow$ (2): Sei $\varepsilon>0$ beliebig. Dann ist $\{n : a_n \notin (l-\varepsilon,\,l+\varepsilon)\}$ endlich und somit gibt es ein Index $N \ge 1$, sodass

$$
\{n : a_n \notin (l-\varepsilon,\,l+\varepsilon)\} \subset \{1,2,\ldots,N-1\}.
$$

Dann folgt für alle $n \ge N$:

$$
|a_n - l| < \varepsilon.
$$

(2)$\Rightarrow$(1): Klar.

:::

::: example BEISPIEL 2.1.7.
Sei $\displaystyle a_n = \frac{n}{n+1}, n≥1$, $(a_n) = \displaystyle\frac{1}{2},\frac{2}{3},\frac{3}{4},\cdots$.

Dann gilt: $\displaystyle\lim_{n\to\infty} a_n = 1$.

Begründung: $\displaystyle a_n - 1 = \frac{n}{n+1} - 1 = -\frac{1}{n+1}$<br> $\implies |a_n - 1| = \frac{1}{n+1}.$

Sei $\varepsilon > 0$; nach Archimedes gibt es $N \in \mathbb{N}$ mit $\frac{1}{N+1} < \varepsilon$. Dann gilt für alle $n \ge N$:

$$
|a_n - 1|=\frac{1}{n+1} \le \frac{1}{N+1} < \varepsilon.
$$
:::

Als nächstes untersuchen wir, wie die arithmetischen Operationen mit Konvergenz verträglich sind.

::: proposition Satz 2.1.8.{#satz-2-1-8}
Seien $(a_n)_{n\ge1}$ und $(b_n)_{n\ge1}$ konvergente Folgen mit $\lim a_n = a$, $\lim b_n = b$. Dann gilt:

1. $(a_n ± b_n)_{n\ge1}$ konvergiert und $\lim (a_n ± b_n) = a ± b$.  
2. $(a_n \cdot b_n)_{n\ge1}$ konvergiert und $\lim (a_n \cdot b_n) = a \cdot b$.  
3. Nehmen wir zudem an, dass $b_n \neq 0$ für alle $n \ge 1$ und auch der Grenzwert $b \neq 0$.  

    Dann ist $\displaystyle\left(\frac{a_n}{b_n}\right)_{n\ge1}$ konvergent und $\displaystyle\lim_{n\to\infty} \frac{a_n}{b_n} = \frac{a}{b}$.

4. Falls es ein Index $K ≥ 1$ gibt mit $a_n < b_n$ für alle $n ≥ K$, dann folgt $a < b$.
{.numbered}

**Beweis für (1):**.<br>
Für ein $\varepsilon > 0$ gibt es $N_\varepsilon$ so dass für alle $n ≥ N_\varepsilon$ gilt 
$$\displaystyle|a_n - a| < \frac{\varepsilon}{2}$$
Ausserdem gibt es $M_\varepsilon$ so dass für alle $n ≥ M_\varepsilon$ gilt
$$\displaystyle|b_n - b| < \frac{\varepsilon}{2}.$$

So haben wir für $n ≥ \max\{N_\varepsilon, M_\varepsilon\}$:
$$
\begin{aligned}
|a_n + b_n - (a + b)| &≤ |a_n - a| + |b_n - b| \\
&< \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.
\end{aligned}
$$

**Beweis für (2)**:
Für ein $\varepsilon > 0$ gibt es $N_\varepsilon$ so dass gilt 
$$|a_nb_n - ab| < \varepsilon \quad \forall n≥N_\varepsilon$$

Das lässt sich umformen zu
$$
\begin{aligned}
|a_n b_n - a b| &= |a_n b_n - a b_n + a b_n - ab| \\
&≤ |a_n - a||b_n| + |b_n - b||a|.
\end{aligned}
$$

Da $(b_n)$ konvergiert ist sie beschränkt, d.h. gibt es eine obere Schranke $M ≥ 1$ mit $|b_n| ≤ M$ für alle $n≥1$.

$$
\begin{aligned}
|a_n b_n - a b| &≤ |a_n - a|\cdot M + |b_n - b||a|.
\end{aligned}
$$

Da $(a_n)$ und $(b_n)$ konvergieren,<br> gibt es ein $N_1$ mit $\displaystyle|a_n - a| < \frac{\varepsilon}{M+|a|}$ für alle $n \ge N_1$

und ein $N_2$ mit $\displaystyle|b_n - b| < \frac{\varepsilon}{M+|a|}$ für alle $n \ge N_2$.

Für $n ≥ \max\{N_1,N_2\}$ folgt:

$$
\begin{aligned}
|a_n b_n - a b| &≤ \left(\frac{\varepsilon}{M+|a|}\right)\cdot M + \left(\frac{\varepsilon}{M+|a|}\right)\cdot |a| \\
&= \left(\frac{\varepsilon}{M+|a|}\right) \cdot (M+|a|) \\
&= \varepsilon.
\end{aligned}
$$

**Beweis für (4)**: Sei $a < b$ und für $n \ge K$ gilt $a_n < b_n$. Da $|a_n - a|<\varepsilon$ und $|b_n - b|<\varepsilon$ für ausreichend grosse $n$, folgt $a < b$.
:::

::: example Beispiel 2.1.9.
Sei $b \in \mathbb{Z}$. Dann gilt:

$$
\lim_{n\to\infty} \Bigl(1 + \frac{1}{n}\Bigr)^b = 1.
$$

Dies folgt aus $\displaystyle\lim_{n\to\infty}\left(1 + \frac{1}{n}\right) = 1$ und wiederholter Anwendung von [Satz 2.1.8(2) und (3)](#satz-2-1-8).
:::

::: example Beispiel aus Vorlesung 
$$
\begin{aligned}
a_n &= \frac{n^2-2n}{n^2+n+1}\\[4pt]
&= \frac{n^2(1-\frac{2}{n})}{n^2(1+\frac{1}{n}+\frac{1}{n^2})}\\
&= \frac{1-\frac{2}{n}}{1+\frac{1}{n}+\frac{1}{n^2}} ⟶ \frac{1-0}{1+0+0} ⟶ 1
\end{aligned}
$$
:::

::: proposition Einschliessungssatz (Sandwich-Theorem){#sandwich-theorem}
Seien $(a_n)_{n≥1}$, $(b_n)_{n≥1}$ konvergente Folgen mit 
$$\lim a_n = \lim b_n = L$$
für ein Index $K \in ℕ$ und eine Folge $(c_n)_{n≥1}$ mit der Eigenschaft
$$
a_n ≤ c_n ≤ b_n \quad \forall n ≥ K.
$$
Dann konvergiert auch $(c_n)_{n≥1}$ mit $\lim c_n = L$.

**Beweis:**<br>
Sei $\varepsilon > 0$, dann gibt es ein $N_1 ≥ K$ und ein $N_2 ≥ K$, so dass $|a_n - L| < \varepsilon\quad n≥N_1$ und $|b_n - L| < \varepsilon\quad n≥N_2$

Falls $n ≥ \max\{N_1,N_2\} \implies |a_n - L| <ε \land |b_n - L|<ε$ und per Annahme $a_n ≤ c_n ≤ b_n$, dann gilt:
$$
-ε ≤ a_n-L ≤ c_n - L ≤ b_n - L ≤ ε
$$
das heisst:
$$
\forall n ≥ \max\{N_1,N_2\}\qquad -ε ≤ c_n - L ≤ ε.
$$
:::

::: definition Definition
Man sagt eine Folge $(a_n)_{n≥1}$ **divergiert gegen $+\infty$**, <br>falls für alle $T > 0$ ein Index $n_0\in\mathbb{N}$ gibt, sodass für alle $n≥n_0 : a_n > T$ gilt.

Sie **divergiert gegen $-\infty$**, falls $(-a_n)_{n≥1}$ gegen $+\infty$ divergiert.
:::

## 2.2. Der Satz von Weierstrass und Anwendungen

::: definition Definition 2.2.1. (Monotone Folgen)
1. $\displaystyle(a_n)_{n≥1}$ ist monoton **wachsend**, falls

    $$
    a_n ≤ a_{n+1} \quad \forall n ≥ 1.
    $$
      Wir schreiben auch $(a_n) \nearrow$

2. $(a_n)_{n≤1}$ ist monoton **fallend**, falls

    $$
    a_n ≥ a_{n+1} \quad \forall n ≥ 1.
    $$
    Wir schreiben auch $(a_n) \searrow$

{.numbered}
:::

::: proposition Satz 2.2.2. (Monotonkonvergenzsatz){#satz-2-2-2}
1. Sei $(a_n)_{n\ge1}$ monoton wachsend und nach oben beschränkt. Dann konvergiert $(a_n)_{n\ge1}$ mit

    $$
    \lim_{n\to\infty} a_n = \sup\{a_n : n \ge 1\}.
    $$

2. Sei $(a_n)_{n\ge1}$ monoton fallend und nach unten beschränkt. Dann konvergiert $(a_n)_{n\ge1}$ mit

    $$
    \lim_{n\to\infty} a_n = \inf\{a_n : n \ge 1\}.
    $$
{.numbered}

**Beweis:**
1. Sei $s := \sup\{a_n : n \ge 1\}$ und sei $\varepsilon>0$. 

    Da $s$ die kleinste obere Schranke ist, ist $s-ε$ keine obere Schranke. Das heisst es gibt ein Index $N ≥ 1$, so dass $a_N > s - \varepsilon$. 

    Daraus folgt, dass für alle $n ≥ N$ gilt:
    
    $$
    s - \varepsilon < a_N \stackrel{\substack{(a_n)↗ \\ n>N}}{≤} a_n \stackrel{\sup a_n}{≤} s < s+ε \quad \forall n \ge N.
    $$
    
    Daraus folgt $|a_n - s| < \varepsilon$ für alle $n \ge N$. 
2. Sei $I := \inf\{a_n : n \ge 1\}$ und sei $\varepsilon>0$. 

    Da $I$ die grösste untere Schranke ist, ist $I+ε$ keine untere Schranke. Das heisst es gibt ein Index $N ≥ 1$, so dass $a_N < I + \varepsilon$. 

    Daraus folgt, dass für alle $n ≥ N$ gilt:
    
    $$
    I \stackrel{\inf a_n}{≤} a_n \stackrel{\substack{(a_n)↘ \\ n>N}}{≤} a_N < I + \varepsilon\\
   \implies 0 ≤ a_n - I < \varepsilon
    $$
    
    Daraus folgt $|a_n - I| < \varepsilon$ für alle $n \ge N$. <span class="right">$\Box$</span>

{.numbered}
:::

::: definition Definition Geometrische Folge
Die Folge $a_n = q^n$ für $q\in\mathbb{R}$ heisst **Geometrische Folge**.

Für alle $n$ gilt: $\displaystyle\frac{a_{n+1}}{a_n} = q$.

$$
(a_n)_{n≥1} = \{q, q^2, q^3, \cdots\}
$$
:::

::: details Beispiele aus der Vorlesung {#beispiele-konvergenz}
1. Sei $b \in \mathbb{Z}$ und $0≤q<1$. Dann gilt $\displaystyle\lim_{n\to\infty} n^b q^n = 0$.<br>
    **Beweis:**<br>
    Wir nehmen an $q > 0$ (sonst $q=0 → 0$).<br>
    Wir wissen das $\lim \left(1+\frac{1}{n}\right)^b = 1 \quad \forall b\in\mathbb{Z}$

    **Behauptung:**<br>
    $a_n$ ist monoton fallend.<br>
    $$
    \begin{aligned}
    a_{n+1} &= (n+1)^b\cdot q^{n+1} \\
    &= \frac{(n+1)^b}{n^b} \cdot n^b ⋅ q^n \cdot q\\ 
    &= \left(\frac{n+1}{n}\right)^b \cdot q \cdot a_n\\
    &=\left(1 + \frac{1}{n}\right)^b \cdot q \cdot a_n
    \end{aligned}
    $$
    Da $\lim \left(1 + \frac{1}{n}\right)^b = 1$, gibt es ein $N_0$, so dass
    $$
   \left(\left(1 + \frac{1}{n}\right)^b-1\right) < \frac{1}{q}-1 \quad \forall n ≥ N_0.
    $$
    Wir nehmen $\varepsilon = \frac{1}{q} - 1 > 0$, dann folgt für alle $n ≥ N_0$:
    $$
    \begin{aligned}
    a_{n+1} &= \left(1+\frac{1}{n}\right)^b \cdot q \cdot a_n\\
    &< \frac{1}{q} \cdot q \cdot a_n = a_n.
    \end{aligned}
    $$
    Da $a_n > 0$ für alle $n ≥ N_0$, ist die Folge $(a_n)_{n≥1}$ nach unten beschränkt und nach [monoton fallend Satz 2.2.2](#satz-2-2-2) folgt, dass $\lim_{n\to\infty} a_n$ existiert.

    Sei $l = \lim a_n = \lim a_{n+1}$ (Was die Folgenglieder am Anfang machen ist nicht relvant für die Konvergenz der Folge). 
    $$
    \begin{aligned}
   a_{n+1} &= \left(1 + \frac{1}{n}\right)^b \cdot q \cdot a_n\\
    \lim a_{n+1}&= \left(\lim\left(1 + \frac{1}{n}\right)^b\right) \cdot q \cdot \lim a_n\\
    l &= 1 \cdot q \cdot l\\
    l-ql &= 0\\
   (1-q)l &= 0 \quad \forall q < 1\\
    &\implies l = 0.
    \end{aligned}
    $$
   $\implies \lim a_n = 0$. <span class="right">$\Box$</span>
    
2. Sei $\displaystyle\lim_{n\to\infty} q^n=0$ für $0 ≤ q < 1$.    z.B: $\lim \frac{1}{2^n} = 0$.

3. $\sqrt[n]{n} = n^{\frac{1}{n}} → 1$<br>
    **Beweis:**<br>
    Wir müssen zeigen, dass für alle $\varepsilon > 0$ ein Index $N_0 \in \mathbb{N}$ existiert, so dass gilt: 
   $$|n^{\frac{1}{n}} - 1| < \varepsilon \quad \forall n≥N_0$$
    Das heisst: $1 -\varepsilon < n^{\frac{1}{n}} < \varepsilon + 1$ für alle $n ≥ N_0$.<br>
    **Behauptung 1:**<br>
    $n^{\frac{1}{n}} ≥ 1$ für alle $n ≥ 1$.<br>
    Wir haben für alle $a,b \in \mathbb{R}$ und $n ≥ 1$ die Identität:<br>
    $$
    a^n-b^n = (a-b) \cdot (a^{n-1} + a^{n-2}b + \cdots + ab^{n-2} + b^{n-1}).
    $$
    Wenn wir nun $a = n^{\frac{1}{n}}$ und $b = 1$ setzen, dann folgt:
    $$
   \underbrace{(n-1)}_{>0 \text{ falls } n>1} = (n^{\frac{1}{n}} - 1) \cdot \underbrace{(n^{\frac{n-1}{n}} + n^{\frac{n-2}{n}} + \cdots + 1)}_{≥0}
    $$
    Also folgt dass $n^{\frac{1}{n}} - 1 ≥ 0$ falls $n>1$.
    
    **Behauptung 2:**<br>
    Wir müssen zeigen, dass für alle $\varepsilon > 0$ ein Index $N_0 \in \mathbb{N}$ existiert, so dass gilt:
    $$
    n^{\frac{1}{n}} < \varepsilon + 1 \quad \forall n ≥ N_0.
    $$
   Wir wenden $\lim n^bq^n = 0$ mit $b = 1$ und $q = \frac{1}{1+\varepsilon}$ an. Dann erhalten wir:

    $$
    \lim_{n\to\infty} \frac{n}{(1+\varepsilon)^n} = 0.
    $$

    Das heisst, es für alle $\delta > 0$, gibt es einen Index $N$ so dass für alle $n ≥ N$ gilt:
    $$
    \left|\frac{n}{(1+\varepsilon)^n}-0\right| < \delta
    $$
    Insbesondere für $\delta = 1$ erhalten wir für alle $n ≥ N$:
    $$
    \begin{aligned}
    \frac{n}{(1+\varepsilon)^n} &< 1 \\
    n &< (1+\varepsilon)^n \\
    n^{\frac{1}{n}} &< (1+\varepsilon).
    \end{aligned}
    $$
    Nochmalige Anwendung der Identität mit $a = 1 + \varepsilon$ und $b = n^{\frac{1}{n}}$ ergibt:
    $$
    n^{\frac{1}{n}} < 1 + \varepsilon \quad \forall n ≥ N_0.
    $$

4. $a_n = \left(1 + \frac{1}{n}\right)^{n+1} → e$
    
    $\displaystyle\lim_{n\to\infty} \left(1+\frac{1}{n}\right)^n$ existiert und den Grenzwert nennen wir $e$. $e \approx 2.71828$ ist die Eulersche Zahl.

    Sei $b_n = \left(1 + \frac{1}{n}\right)^{n+1} = \left(1 + \frac{1}{n}\right)^n\cdot\left(1 + \frac{1}{n}\right)$.

    **Behauptung:**<br>
    Die Folge $(b_n)$ ist monoton fallend.
    $$
    \begin{align*}
    \frac{b_{n-1}}{b_n} &= \frac{\left(1 + \frac{1}{n-1}\right)^{n}}{\left(1 + \frac{1}{n}\right)^{n+1}} = \frac{\left(\frac{n}{n-1}\right)^{n}}{\left(\frac{n+1}{n}\right)^{n+1}}\\
    &=\left(\frac{n}{n-1}\right)^n\cdot\left(\frac{n}{n+1}\right)^n\cdot\left(\frac{n}{n+1}\right)\\
    &= \frac{n^{2n}}{(n^2-1)^n}\cdot\frac{n}{n+1}\\
    & =\left(\frac{n^2}{n^2-1}\right)^n\cdot\left(\frac{n}{n+1}\right)\\
    & = \left(1 + \frac{1}{n^2-1}\right)^n\cdot\left(\frac{n}{n+1}\right).\\
    &≥ \left(1+\left(\frac{n}{n^2+1}+\right)\right)⋅\left(\frac{n}{n+1}\right) &\text{Bernoulli}\\
    &\ge \left(1+\frac{n}{n^2}\right)⋅\left(\frac{n}{n+1}\right) &\frac{1}{n^2-1}>\frac{1}{n^2}\\
    &= \left(1+\frac{1}{n}\right)⋅\left(\frac{n}{n+1}\right)\\
    &= \left(\frac{n+1}{n}\right)⋅\left(\frac{n}{n+1}\right) = 1\\\\
    \implies \frac{b_{n-1}}{b_n}&≥1 \implies b_{n-1} ≥ b_n
    \end{align*}
    $$
    Also ist die Folge $(b_n)$ monoton fallend.

    $(b_n)$ ist auch nach unten beschränkt.
    $$
    \begin{aligned}
    b_1 &= 2^2 > b_2 > \cdots
    \end{aligned}
    $$
   (Wir finden auch eine triviale untere Schranke, z.B. $1$, da $1+\frac{1}{n} > 1$ für alle $n ≥ 1$.)
    Daher exisitert $\lim\left(1+\frac{1}{n}\right)^{n+1}$.
:::

::: example Beispiel 2.2.3. {#beispiel-2-2-3}
Sei $a \in \mathbb{Z}$ und $0≤q<1$. Dann gilt $\displaystyle\lim_{n\to\infty} n^a q^n = 0$.

Sei $x_n = n^a q^n$. Dann folgt:

$$
x_{n+1} = (n+1)^a q^{n+1} = \Bigl(\frac{n+1}{n}\Bigr)^a \cdot q \cdot n^a q^n = \Bigl(1 + \frac{1}{n}\Bigr)^a \cdot q \cdot x_n.
$$

Da $\lim_{n\to\infty}(1 + \frac{1}{n})^a = 1$, gibt es ein $n_0$, so dass

$$
\Bigl(1 + \frac{1}{n}\Bigr)^a < \frac{1}{q},\quad \forall n \ge n_0.
$$

Es folgt $x_{n+1} < x_n$ für $n \ge n_0$. Da $x_n > 0$, ist die Folge nach unten beschränkt und für $n \ge n_0$ monoton fallend. Sei

$$
l = \lim_{n\to\infty} x_n = \lim_{n\to\infty} x_{n+1} = \lim_{n\to\infty} \Bigl(1 + \frac{1}{n}\Bigr)^a \cdot q \cdot x_n = q \cdot l.
$$

Also $(1 - q) \; l = 0$, woraus $l = 0$ folgt.
:::

::: proposition Bemerkung 2.2.4.{#bemerkung-2-2-4}
In obigem Argument haben wir zweimal die folgende Tatsache benutzt: Sei $(a_n)_{n\ge1}$ eine konvergente Folge mit $\lim a_n = a$ und $k \in \mathbb{N}$. Dann ist die durch

$$
b_n := a_{n+k}, \quad n \ge 1
$$

definierte Folge konvergent und

$$
\lim_{n\to\infty} b_n = a.
$$
:::

::: example BEISPIEL 2.2.5.
$$
\lim_{n\to\infty} n^{1/n} = 1.
$$

(i) Aus $n \ge 1$ folgt $n^{1/n} \ge 1$. Für alle $a,b \in \mathbb{R}$ und $n \ge 1$ gilt die Identität:

$$
b^n - a^n = (b - a) \bigl(b^{n-1} + b^{n-2}a + \cdots + b a^{n-2} + a^{n-1}\bigr).
$$

Mit $a=1$ und $b = n^{1/n}$ folgt:

$$
(n-1) = \bigl(n^{1/n} - 1\bigr) \bigl(n^{(n-1)/n} + n^{(n-2)/n} + \cdots + 1\bigr) \ge (n^{1/n} - 1) \cdot 1.
$$

Also $n^{1/n} - 1 > 0$.

(ii) Sei $\varepsilon>0$ beliebig. Dann ist $0 < \frac{1}{1+\varepsilon} < 1$. Wende Beispiel 2.2.3 mit $a = 1$ und $q = \frac{1}{1+\varepsilon}$ an und erhalte:

$$
\lim_{n\to\infty} \frac{n}{(1+\varepsilon)^n} = 0.
$$

Insbesondere gibt es $N \ge 1$, so dass

$$
\frac{n}{(1+\varepsilon)^n} < 1 \quad \forall n \ge N.
$$

Also $n < (1+\varepsilon)^n$ für alle $n \ge N$. Nochmalige Anwendung der Identität mit $b = 1+\varepsilon$ und $a = n^{1/n}$ impliziert:

$$
n^{1/n} \le 1 + \varepsilon \quad \forall n \ge N.
$$

Zusammen mit (i) folgt:

$$
1 \le n^{1/n} < 1 + \varepsilon \quad \forall n \ge N \quad\Rightarrow\quad |n^{1/n} - 1| < \varepsilon.
$$
:::

::: example BEISPIEL 2.2.6.
Die Folge

$$
y_n = \Bigl(1 + \frac{1}{n}\Bigr)^{n+1}, \quad n \ge 1
$$

konvergiert. Wir zeigen, dass $(y_n)_{n\ge2}$ monoton fallend ist. Sei $n \ge 2$:

$$
\frac{y_{n-1}}{y_n} = \frac{\bigl(1 + \frac{1}{n-1}\bigr)^n}{\bigl(1 + \frac{1}{n}\bigr)^{n+1}} = \frac{n^n}{(n-1)^n} \cdot \frac{n}{n+1} = \Bigl[\frac{n^2}{n^2 - 1}\Bigr]^n \cdot \frac{n}{n+1}.
$$

Da $\Bigl[1 + \frac{1}{n^2 - 1}\Bigr]^n \ge 1 + \frac{n}{n^2 - 1}$ (Bernoulli), folgt:

$$
\frac{y_{n-1}}{y_n} \ge \Bigl(1 + \frac{1}{n}\Bigr) \cdot \frac{n}{n+1} = 1 \quad\Rightarrow\quad y_{n-1} > y_n.
$$

Da $(y_n)$ monoton fallend und beschränkt ist, existiert $\lim_{n\to\infty} y_n$.

Damit konvergiert auch $\bigl(1 + \frac{1}{n}\bigr)^n = \frac{y_n}{1 + \frac{1}{n}}$, da $\lim_{n\to\infty}\bigl(1 + \frac{1}{n}\bigr) = 1$.
:::

::: proposition Satz 2.2.7 (Bernoulli Ungleichung)
Für alle $n \in \mathbb{N}$ und $x \in \mathbb{R}$ gilt:
$$
(1 + x)^n \ge 1 + nx.
$$
**Beweis:**<br>
Induktion über $n$:
$$
\begin{aligned}
(1 + x)^{n+1} = &~ (1 + x) \ cdot (1 + x)^n  \\
\stackrel{I.H.}{≥} &~ (1 + x) \cdot (1 + nx) \\
= &~ 1 + nx + x + \underbrace{nx^2}_{>0} \\
> &~ 1 + x + nx \\
> = &~1 + (n+1)x \\
> \end{aligned}
$$
:::

::: example BEISPIEL 2.2.8.
Sei $c>1$. Wir definieren rekursiv eine Folge $(a_n)_{n\ge1}$ durch:

$$
a_1 = c, \quad a_{n+1} = \frac{1}{2}\Bigl(a_n + \frac{c}{a_n}\Bigr), \; n \ge 1.
$$

Dann existiert $a := \lim_{n\to\infty} a_n > 0$ und es gilt $a^2 = c$.

**Beweis:**

1. Die Folge $(a_n)_{n\ge1}$ ist monoton fallend. Sei

    $$
    a_{n+1} = a_n + \frac{1}{2}\Bigl(\frac{c}{a_n} - a_n\Bigr).
    $$
    
    Wir zeigen zunächst: $a_n^2 > c$ für alle $n \ge 1$.
    
    Für $n=1$: $a_1^2 = c^2 > c$. Für $n>1$:
    
    $$
    a_{n+1}^2 = a_n^2 + (c - a_n^2) + \Bigl(\frac{c - a_n^2}{2 a_n}\Bigr)^2 = c + \Bigl(\frac{c - a_n^2}{2 a_n}\Bigr)^2 \ge c.
    $$
    
    Aus $a_n^2 > c$ folgt:
    
    $$
    a_{n+1} = a_n + \Bigl(\frac{c - a_n^2}{2 a_n}\Bigr) \le a_n.
    $$

2. Klar: $a_n > 0$ für alle $n$.  
3. Nach Weierstrass existiert $a = \lim a_n$. Dann folgt aus (ii): $a > 1$, insbesondere $a \neq 0$ und:

    $$
    a = \lim_{n\to\infty} a_{n+1} = \frac{1}{2}\Bigl(\lim_{n\to\infty} a_n + \frac{c}{\lim_{n\to\infty} a_n}\Bigr) = \frac{1}{2}\Bigl(a + \frac{c}{a}\Bigr) \;\Rightarrow\; a^2 = c.
    $$
{.lower-roman}
:::

## 2.3. Limes superior und Limes inferior

Eine wichtige Anwendung des Satzes von Weierstrass ist, wie man mit jeder beschränkten Folge $(a_n)_{n\ge1}$ zwei monotone Folgen $(b_n)_{n\ge1}$ und $(c_n)_{n\ge1}$ definieren kann, welche dann einen Grenzwert besitzen.

Für jedes $n$ definieren wir
$$
\begin{aligned}
A_n &:= \{a_k : k \ge n\}, \\
A_1 &= \{a_1, a_2, a_3, \ldots\}, \\
A_2 &= \{a_2, a_3, a_4, \ldots\}, \\
&\vdots
\end{aligned}
$$

Da $(a_n)_{n\ge1}$ beschränkt ist, ist auch die Menge $A_n$ beschränkt. Deswegen existieren $\inf A_n$ und $\sup A_n$. Zudem gilt $A_{n+1} \subset A_n$

$$
A_1 \supseteq A_2 \supseteq A_3 \supseteq \ldots \quad \forall n≥1
$$


Sei nun: $b_n = \inf A_n$ und $c_n = \sup A_n$.

Dann folgt aus [Korollar 1.1.16](/1-reelle-komplexe-zahlen#korollar-1-1-16) und $A_{n+1} \subset A_n$:

$$
\begin{array}{ccc}
\inf A_n & ≤ &\inf A_{n+1} &\quad \forall n ≥ 1, \\
\parallel & & \parallel \\
b_n & ≤ & b_{n+1} &\quad \forall n ≥ 1, \\
\\
\sup A_n & ≥ &\sup A_{n+1} &\quad \forall n ≥ 1, \\
\parallel & & \parallel \\
c_n & ≥ & c_{n+1} &\quad \forall n ≥ 1.
\end{array}
$$

daraus folgt, dass $(b_n)_{n\ge1}$ monoton wachsend und $(c_n)_{n\ge1}$ monoton fallend ist.

$$
\inf A_1 = b_1 ≤ ⋯ ≤ b_n = \inf A_n ≤ \sup A_n = c_n ≤ ⋯ ≤ c_1 = \sup A_1
$$

$\implies$ $(b_n)$ und $(c_n)$ sind beschränkt.

Nach dem [Monotonkonvergenzsatz (Satz 2.2.2)](#satz-2-2-2) existieren $\lim b_n$ und $\lim c_n$, bzw konvergieren beide Folgen.

::: definition Limes superior und Limes inferior{#definition-limsup-liminf}
Limes inferior: $\lim b_n =: \liminf a_n$

Limes superior: $\lim c_n =: \limsup a_n$.
:::

Aus $b_n \le c_n$ folgt mit [Satz 2.1.8(4)](#satz-2-1-8):

$$
\liminf_{n\to\infty} a_n \le \limsup_{n\to\infty} a_n.
$$

::: example Beispiel aus der Vorlesung
1. Sei $a_n = (-1)^n$ für $n \ge 1$.

    Wir definieren $b_n :=~ \inf\{a_k : k \ge n\}$:
    
    $$
    \begin{align*}
    b_1 ~=~ &\inf\{a_1, a_2, a_3, \ldots\} = \inf\{-1, + 1, -1, \ldots\} = -1,\\
    b_2 ~=~ &\inf\{+1, -1, +1, \ldots\} = -1,\\
    ⋮~~~&\\
    \lim_{n\to\infty} b_n ~=~ &-1
    \end{align*}
    $$
    
    und sei $c_n :=~ \sup\{a_k : k \ge n\}$:
    $$
    \begin{align*}
    c_1 ~=~ &\sup\{a_1, a_2, a_3, \ldots\} = \sup\{-1, + 1, -1, \ldots\} = +1,\\
    c_2 ~=~ &\sup\{+1, -1, +1, \ldots\} = +1,\\
    ⋮~~~&\\
    \lim_{n\to\infty} c_n ~=~ &+1.
    \end{align*}
    $$
    
    Dann folgt:
    $$
    \begin{aligned}
    \liminf_{n\to\infty} a_n = -1 \\
    \limsup_{n\to\infty} a_n = +1
    \end{aligned}
    $$
2. Sei $a_n = \frac{1}{n}$ ist beschränkt ($0<a_n≤1$)
    
    $b_n = \inf\{\frac{1}{n},\frac{1}{n+1},⋯\} = 0$
    
   $c_n = \sup\{\frac{1}{n},\frac{1}{n+1},⋯\} = \frac{1}{n}$

    So folgt: $\lim b_n = 0$ und $\lim c_n = {\displaystyle\lim_{n\to\infty}} \frac{1}{n} = 0$.

Beispiel 1 $(a_n)$ ist nicht konvergent, da $\limsup a_n = +1 ≠ -1 = \liminf a_n$.

Beispiel 2 $(a_n)$ ist konvergent, da $\limsup a_n = \lim c_n = 0 = \lim b_n = \liminf a_n$.
:::

::: example Beispiel 2.3.1.{#beispiel-2-3-1}
Sei $a_n = (-1)^n + \frac{1}{n}, n \ge 1$.

Dann gilt: $b_n = -1$ und $c_n = 1 + \frac{1}{n_e}$, wobei $n_e$ die kleinste gerade Zahl $\ge n$ bezeichnet. Also:

$$
\liminf_{n\to\infty} a_n = -1, \quad \limsup_{n\to\infty} a_n = +1.
$$
:::

## 2.4. Das Cauchy-Kriterium

Natürliche Frage: Wie sieht man einer Folge $a_n$ an, ob sie konvergent ist, ohne ihren Grenzwert zu kennen? Das Cauchy-Kriterium ist eine Antwort auf diese Frage. Zunächst beweisen wir:

::: proposition Lemma 2.4.1.{#lemma-2-4-1}
$(a_n)_{n\ge1}$ konvergiert $\iff$ $(a_n)_{n\ge1}$ beschränkt &emsp;**und**&emsp; $\liminf_{n\to\infty} a_n = \limsup_{n\to\infty} a_n$

**Beweis:**.<br>
($\implies$) Übung.

($\impliedby$) Sei $b_n = \inf\{a_k : k \ge n\}$ und $c_n = \sup\{a_k : k \ge n\}$ und $\displaystyle A := \lim_{n\to\infty} b_n = \lim_{n\to\infty} c_n$

Da wir $b_n≤a_n≤c_n$ und $\lim b_n = \liminf a_n = A = \limsup a_n = \lim c_n$ haben folgt aus dem [Sandwich-Theorem](#sandwich-theorem) $\implies$ $\lim a_n$ existiert. Somit konvergiert $(a_n)_{n\ge1}$ gegen $A$.
:::

::: definition Cauchy Folge.{#definition-cauchy-folge}
Die Folge $(a_n)_{n\ge1}$ heisst Cauchy-Folge falls für alle $\varepsilon>0$ ein Index $N \in ℕ$ gibt, sodass gilt:

$$
|a_n - a_m| < \varepsilon \quad \forall n,m \ge N.
$$
:::

::: proposition SATZ 2.4.2. (Cauchy-Kriterium).{#satz-2-4-2}
Seine $(a_n)_{n\ge1}$ eine Folge von reellen Zahlen.

1. Jede Cauchy-Folge ist beschränkt.
    $(a_n)$ Cauchy $\implies$ $(a_n)$ beschränkt.
2. $(a_n)$ konvergiert $\implies$ $(a_n)$ Cauchy.
3. $(a_n)$ ist Cauchy $\implies$ $(a_n)$ konvergiert.
{.numbered}

Mit (2) + (3) haben wir: $(a_n)$ Cauchy $\iff$ $(a_n)$ konvergiert. 

**Beweis:**<br>
(2) Sei $(a_n)_{n\ge1}$ konvergent mit Grenzwert $L$. Wähle für alle $\varepsilon>0$ ein Index $N$, sodass gilt:
$$
|a_n - L| < \frac{\varepsilon}{2} \quad \forall n \ge N.
$$

Dann folgt für $n,m \ge N$:

$$
\begin{aligned}
|a_n - a_m| &= \left|(a_n - L) + (L - a_m)\right| \\
&≤ |a_n - L| + |a_m - L| \\
&< \frac{ε}{2} + \frac{ε}{2} = \varepsilon.
\end{aligned}
$$

(3) Sei $\varepsilon>0$ und $N$ sodass $|a_n - a_m| < \varepsilon$ für alle $n,m \ge N$. Sei $n \ge N$ fest. Dann folgt für alle $m \ge N$:

$$
a_m - \varepsilon \le a_n \le a_m + \varepsilon.
$$

Insbesondere:

$$
\sup_{m \ge k} a_m - \varepsilon \le a_n \le \inf_{m \ge k} a_m + \varepsilon \quad \forall k \ge N.
$$

Daraus folgt:

$$
\limsup_{n\to\infty} a_n - \varepsilon \le \liminf_{n\to\infty} a_n + \varepsilon.
$$

Da $\liminf \le \limsup$ immer gilt, erhalten wir:

$$
\limsup_{n\to\infty} a_n = \liminf_{n\to\infty} a_n =: L.
$$

Nach [Lemma 2.4.1](#lemma-2-4-1) folgt, dass $(a_n)$ konvergiert gegen $L$.
:::

## 2.5. Der Satz von Bolzano-Weierstrass

In diesem Abschnitt behandeln wir weitere wichtige Folgerungen des Ordnungsvollständigkeitsaxioms. Insbesondere zeigen wir, dass jede beschränkte Folge eine konvergente Teilfolge besitzt. Als Vorbereitung zeigen wir ein Lemma von Cauchy-Cantor, das monoton absteigende Folgen von abgeschlossenen Intervallen betrifft.

::: definition DEFINITION 2.5.1.
Ein abgeschlossenes Intervall ist eine Teilmenge $I \subset \mathbb{R}$ der Form:

1. $\bigl[a,b\bigr]$, $a \le b$, $a,b \in \mathbb{R}$.
2. $\bigl[a, +\infty\bigr)$, $a \in \mathbb{R}$.
3. $\bigl(-\infty, a\bigr]$, $a \in \mathbb{R}$.
4. $\bigl(-\infty, +\infty\bigr) = \mathbb{R}$.

Die Länge $\mathcal{L}(I)$ des Intervalls definieren wir als:

$$
\mathcal{L}(I) = \begin{cases} b - a, & \text{Fall (1)}, \\ +\infty, & \text{in (2), (3), (4)}. \end{cases}
$$

Offensichtlich ist $\mathcal{L}(I) \ge 0$. Ein abgeschlossenes Intervall ist genau dann beschränkt, falls $\mathcal{L}(I) < +\infty$.
:::

::: proposition BEMERKUNG 2.5.2.
Ein Intervall $I \subset \mathbb{R}$ ist genau dann abgeschlossen, falls für jede konvergente Folge $(a_n)_{n\ge1}$ mit $a_n \in I$ der Grenzwert $\lim a_n$ auch in $I$ liegt.
:::

::: proposition BEMERKUNG 2.5.3.
Seien $I = [a,b]$ und $J = [c,d]$ mit $a < b$ und $c < d$, $a,b,c,d \in \mathbb{R}$. Dann gilt $I \subsetneq J$ genau dann, wenn $c < a$ und $b < d$. Insbesondere:

$$
\mathcal{L}(I) = b - a < d - c = \mathcal{L}(J).
$$

:::

Ein monoton fallende Folge von Teilmengen von $\mathbb{R}$ ist eine Folge $(X_n)_{n\ge1}$ mit $X_{n+1} \subset X_n$ für alle $n \ge 1$. Betrachten wir zwei Beispiele:

::: example BEISPIEL 2.5.4.
(1) Sei $X_n = (0,\frac{1}{n}]$, $n \ge 1$. Dann ist $X_{n+1} \subset X_n$ und:

$$
\bigcap_{n\ge1} X_n = \varnothing. \quad(\text{Folgt aus Archimedes})
$$

(2) Sei $X_n = [n,+\infty)$, $n \ge 1$. Dann ist $X_{n+1} \subset X_n$ und:

$$
\bigcap_{n\ge1} X_n = \varnothing. \quad(\text{Archimedes})
$$
:::

::: proposition SATZ 2.5.5.
(Cauchy-Cantor). Sei $(I_n)_{n\ge1}$ eine Folge abgeschlossener Intervalle mit $I_{n+1} \subset I_n$ und $\mathcal{L}(I_1) < +\infty$. Dann gilt:

1. $\bigcap_{n\ge1} I_n \neq \varnothing$.
2. Falls zusätzlich $\lim_{n\to\infty} \mathcal{L}(I_n) = 0$, dann enthält $\bigcap_{n\ge1} I_n$ genau einen Punkt.

Beweis. Sei $I_n = [a_n, b_n]$ und $I_m = [a_m, b_m]$ wobei $n,m \ge 1$. Behauptung:

$$
a_n \le b_m \quad \forall n,m \ge 1.
$$

Angenommen, es gibt $n,m \ge 1$ mit $b_m < a_n$. Dann wäre:

$$
[a_m,b_m] \;\cap\; [a_n,b_n] = \varnothing, \quad\text{widerspricht aber } I_{n} \subset I_{m} \text{ oder } I_{m} \subset I_{n}.
$$

Seien nun:

$$
A = \{a_n : n \ge 1\} \neq \varnothing, \quad B = \{b_n : n \ge 1\} \neq \varnothing.
$$

Nach dem Axiom der Vollständigkeit existiert $c \in \mathbb{R}$ mit:

$$
a_n \le c \le b_n \quad \forall n \ge 1 \quad \Rightarrow \quad c \in \bigcap_{n\ge1} I_n.
$$

Zur zweiten Aussage: Aus

$$
[a_{n+1},b_{n+1}] = I_{n+1} \subset I_n = [a_n,b_n] \quad\Rightarrow\quad b_{n+1} - a_{n+1} \le b_n - a_n
$$

folgt, dass $(\mathcal{L}(I_n))$ monoton fallend ist und nach Weierstrass konvergiert. Falls nun $c_1 < c_2$ zwei verschiedene Punkte in $\bigcap_{n\ge1} I_n$ wären, dann wäre $[c_1,c_2] \subset I_n$ für alle $n$, also

$$
0 < c_2 - c_1 \le b_n - a_n = \mathcal{L}(I_n) \quad \forall n, \quad\text{Widerspruch zu } \lim \mathcal{L}(I_n)=0.
$$
:::

Als Anwendung zeigen wir:

::: proposition BEWEIS.
$[0,1]$ ist nicht abzählbar. Widerspruchsbeweis: Sei

$$
a : \mathbb{N} \longrightarrow [0,1]
$$

eine Bijektion. Wir bilden induktiv eine monoton fallende Folge $(I_n)_{n\ge0}$ abgeschlossener Intervalle in $[0,1]$ mit:

$$
a(n) \notin I_n \quad \forall n \ge 0.
$$

Dann folgt:

$$
a(n) \notin \bigcap_{n\ge0} I_n \quad \forall n \ge 0.
$$

Andererseits gilt nach Cauchy-Cantor:

$$
\bigcap_{n\ge0} I_n \neq \varnothing,
$$

woraus folgt, dass $a$ nicht surjektiv sein kann. Konstruktion von $I_n$:

Sei $a(0) \in [0,1]$. Dann nehmen wir als $I_0$ eines der Intervalle

$$
[0,\tfrac{1}{3}], \quad [\tfrac{1}{3},\tfrac{2}{3}], \quad [\tfrac{2}{3},1]
$$

das $a(0)$ nicht enthält. Sei nun $I_n = [c_n, d_n]$ induktiv definiert mit $a(n) \notin I_n$. Dann wählen wir $I_{n+1}$ als eines der drei Teilintervalle von $I_n$, das $a(n+1)$ nicht enthält. Dann gilt:

$$
I_{n+1} \subsetneq I_n, \quad a(n+1) \notin I_{n+1}.
$$

Damit ist der Satz bewiesen.
:::

::: definition Definition 2.5.7. (Teilfolge) {#definition-2-5-7}
Eine **Teilfolge** einer Folge $(a_n)_{n\ge1}$ ist eine Folge $(b_{n_k})_{k\ge1}$, so dass eine streng monoton wachsende Abbildung $l : \mathbb{N} \to \mathbb{N}$ gibt, so dass:
$$
b = a\circ l \implies b_n = a_{l(n)}
$$
:::

::: example Beispiel 2.5.8.{#beispiel-2-5-8}
Sei $a_n = (-1)^n + \frac{1}{n}$ und sei $l(n) = 2n$ dann ist $b_n = 1 + \frac{1}{2n}$ eine Teilfolge von $(a_n)_{n\ge1}$.
:::

::: proposition Satz 2.5.9. (Satz von Bolzano-Weierstrass) {#satz-2-5-9}
Jede beschränkte Folge $(a_n)_{n\ge1}$ besitzt eine konvergente Teilfolge. 
:::

## 2.6. Folgen in $\mathbb{R}^d$ und $\mathbb{C}$

Der Begriff einer Folge in $\mathbb{R}^d$ (bzw. $\mathbb{C}$) ist wie im Falle von $\mathbb{R}$ definiert:

::: definition Definition 2.6.1.
Eine Folge in $\mathbb{R}^d = ℝ\timesℝ\times\cdots\timesℝ$ ist eine Abbildung

$$
a : \mathbb{N} \longrightarrow \mathbb{R}^d.
$$

Wir schreiben $a_n$ statt $a(n)$ und bezeichnen die Folge mit $(a_n)_{n\ge1}$.

$$
a_n = (a_{n,1}, a_{n,2}, \ldots, a_{n,d}) \in \mathbb{R}^d
$$
:::

Sei $\|\cdot\|$ die euklidische Norm ind $\mathbb{R}^d$ oder $\mathbb C$.

$\|x\| = (x_1^2+\ldots+x_d^2)^{½} = \sqrt{x_1^2 + x_2^2 + \cdots + x_d^2} \qquad x\in\mathbb{R}^d$

$\|z := x+iy\| = \sqrt{x^2 + y^2} \qquad z \in \mathbb{C}$.

Wir haben $\mathbb{C} \sim \mathbb{R}^2$ mit $z := x+iy \leadsto (x,y) \in \mathbb{R}^2$.

::: definition Definition 2.6.2.
Eine Folge $(a_n)_{n\ge1}$ in $\mathbb{R}^d$ heisst konvergent, falls es $a \in \mathbb{R}^d$ gibt, so dass:

$$
\forall \varepsilon > 0\; \exists N \ge 1:\quad \|a_n - a\| < \varepsilon \quad \forall n \ge N.
$$

Falls solch ein $a$ existiert, ist es eindeutig bestimmt und nennt sich Grenzwert der Folge $(a_n)_{n\ge1}$. Man schreibt:

$$
\lim_{n\to\infty} a_n = a.
$$

Falls $a_n$ nicht konvergiert, ist sie divergent.
:::

Sei $(a_n)_{n\ge1} \subset \mathbb{R}^d$ und $a_n = (a_{n,1},\dots,a_{n,d})$ die Koordinaten von $a_n$.

::: proposition Satz 2.6.3.
Sei $b=(b_1,\dots,b_d) \subseteq ℝ^d$.

Folgende Aussagen sind äquivalent:

1. $\displaystyle\lim_{n\to\infty} a_n = b$.  
2.  $\displaystyle\lim_{n\to\infty} a_{n,j} = b_j$ für alle $1 \le j \le d$.
{.numbered}

**Beweis:**<br>
(1)$\implies$(2):<br>Sei $\varepsilon>0$ und $N$ mit $\|a_n - b\| < \varepsilon$ für alle $n \ge N$. Dann folgt für jedes $1\le j \le d$:

$$
|a_{n,j} - b_j| \le \|a_n - b\| < \varepsilon \quad \Rightarrow \quad \lim_{n\to\infty} a_{n,j} = b_j.
$$

(2)$\implies$(1):<br> Sei $\varepsilon>0$ und für jedes $j$ gebe es $N(j)$ mit $|a_{n,j} - b_j| < \frac{\varepsilon}{\sqrt{d}}$ für alle $n \ge N(j)$. Sei $N = \max\{N(1),\dots,N(d)\}$. Dann folgt für $n \ge N$:

$$
\max_{1\le j\le d} |a_{n,j} - b_j| < \frac{\varepsilon}{\sqrt{d}} \quad\Rightarrow\quad \|a_n - b\| \le \sqrt{d} \cdot \max_{1\le j\le d} |a_{n,j} - b_j| < \varepsilon.
$$

Somit $\displaystyle\lim_{n\to\infty} a_n = b$.
:::

::: example Beispiel aus Vorlesung
1. $(a_n)_{n\ge1} \subset \mathbb{R}^3$ mit $\displaystyle a_n = \left(\frac{1}{n}, 1+\frac{1}{n}, \left(1+\frac{1}{n}\right)^n\right)$ 

    $(a_{n,1})_{n≥1} = (\frac{1}{n})_{n≥1} ⊂ ℝ$
    
    $(a_{n,2})_{n≥1} = (1+\frac{1}{n})_{n≥1} ⊂ ℝ$
    
    $(a_{n,3})_{n≥1} = \left(1+\frac{1}{n}\right)^n_{n≥1} ⊂ ℝ$.
    
    $a_n \to (0, 1, e)$.
2. $(z_n)_{n\ge1} \subset \mathbb{C}$ mit $\displaystyle z_n = \underbrace{\left(\frac{n^2+2}{n^3+1}\right)}_{\substack{↓\\0}} + i\underbrace{\left(\frac{n^3+2n+1}{n^3+n+1}\right)}_{\substack{↓\\1}}$

    $z_n \to i$.
:::

::: proposition BEMERKUNG 2.6.5.
Eine konvergente Folge $(a_n)_{n\ge1}$ in $\mathbb{R}^d$ ist beschränkt. Das heisst:

$$
\exists R \ge 0:\quad \|a_n\| \le R \quad \forall n \ge 1.
$$
:::

Mittels Satz 2.6.3 können wir das Cauchy-Kriterium bzw. den Satz von Bolzano-Weierstrass anwenden und erhalten:

::: proposition SATZ 2.6.6.
(1) Eine Folge $(a_n)_{n\ge1}$ konvergiert genau dann, wenn sie eine Cauchy-Folge ist:

$$
\forall \varepsilon > 0\;\exists N \ge 1:\quad \|a_n - a_m\| < \varepsilon \quad \forall n,m \ge N.
$$

(2) Jede beschränkte Folge in $\mathbb{R}^d$ hat eine konvergente Teilfolge.
:::

## 2.7. Reihen

Sei $(a_n)_{n\ge1}$ eine Folge in $\mathbb{R}$ oder $\mathbb{C}$. Der Begriff der Konvergenz der Reihe

$$
\sum_{k=1}^\infty a_k
$$

stützt sich auf die Folge $(S_n)_{n\ge1}$ der Partialsummen:

$$
S_n := a_1 + a_2 + \cdots + a_n = \sum_{k=1}^n a_k.
$$

::: definition Definition 2.7.1 (Konvergente Reihen){#definition-2-7-1}
Die Reihe $\sum_{k=1}^\infty a_k$ ist **konvergent**, falls die Folge $(S_n)_{n\ge1}$ der Partialsummen konvergiert. In diesem Fall definieren wir:

$$
\lim_{n\to\infty} S_n \quad=\quad \lim_{n\to\infty} \sum_{k=1}^n a_k \quad=:\quad \sum_{k=1}^{\infty} a_k.
$$

Der Grenzwert $\lim S_n$ heisst der Wert oder die Summe der Reihe.
:::

**Notation.** Von nun an bezeichnen wir den Absolutbetrag einer komplexen Zahl $z=x+iy$ mit $|z|=\sqrt{x^2+y^2}$.

::: example Beispiel 2.7.2 (Geometrische Reihe)
Sei $q\in\mathbb{C}$ mit $|q|<1$. Dann konvergiert

$$
\sum_{k=0}^\infty q^k = \frac1{1-q}.
$$

**Beweis:**<br>
Sei $S_n=\displaystyle\sum_{k=0}^\infty q^k=1+q+\dots+q^n$.

$$
\begin{array}{rcl}
S_n &=& 1 + q + q^2 + \dots + q^n \\
-q\cdot S_n &=& ~~~\quad q + q^2 + \dots + q^n + q^{n+1} \\
\hline (1-q)\cdot S_n &=& 1\qquad\qquad\qquad\qquad~~-q^{n+1} \\
\end{array}
$$

Da $|q|<1$ folgt $S_n = \displaystyle\frac{1-q^{n+1}}{1-q}$

Mit $\lim q^n=0 \quad \forall |q|<1$ folgt somit:

$$
S_n \to \displaystyle\frac{1-0}{1-q} = \frac{1}{1-q}
$$
:::

Genau wie bei einer Folge hängt die Konvergenz einer Reihe nicht davon ab von die Reihe am Anfang macht.

Falls $a_n$ konvergiert gegen $a$, so konvergiert auch $b_n = a_{n + k}$ gegen $a$.

Für beliebige $N_0$ gilt dass

<center>

$\displaystyle\sum_{k=N_0}^\infty a_k$ konvergiert $\iff$ $\displaystyle\sum_{k=1}^\infty a_k$ konvergiert.
</center>

Im Gegensatz zur Situation bei Folgen **ändert sich** aber der Grenzwert.

::: example Beispiel aus der Vorlesung
1. $\displaystyle\sum_{k=0}^\infty \left(\frac{1}{2}\right)^k = 2$.

   $\implies \displaystyle\sum_{k=3}^\infty \left(\frac{1}{2}\right)^k$ konvergiert.

   $$
   \begin{aligned}
   \displaystyle\sum_{k=0}^\infty \left(\frac{1}{2}\right)^k &= 1 + \frac{1}{2} + \frac{1}{4} + \sum_{k=3}^\infty \left(\frac{1}{2}\right)^k = 2 \\
   &= 1 + \frac{1}{2} + \frac{1}{4} + \sum_{k=3}^\infty \left(\frac{1}{2}\right)^k \\
   \implies \displaystyle\sum_{k=3}^\infty \left(\frac{1}{2}\right)^k &= 2 - 1 - \frac{1}{2} - \frac{1}{4} \\ &= \frac{1}{4} ≠ 2
   \end{aligned}
   $$
2. $\displaystyle\sum_{k=0}^\infty \left(\frac{i}{2}\right)^k = \frac{1}{1-\frac{i}{2}} = \frac{2}{2-i}$
   :::

::: example Beispiel 2.7.3 (Harmonische Reihe)
Die harmonische Reihe ist ein wichtiges Beispiel für eine divergente Reihe:

$$
\sum_{n=1}^\infty \frac1n \qquad S_n = \sum_{k=1}^n \frac1k.
$$

Da $S_n$ divergiert, divergiert auch die Harmonische Reihe.
:::

::: example Beispiel aus Vorlesung (Teleskop-Reihe)
Die "Teleskop-Reihe"
$$
\displaystyle\sum_{k=1}^\infty \frac1{k(k+1)} = 1
$$
ist ein Beispiel für eine konvergente Reihe.

$$
\frac1{k(k+1)} = \frac{1}{k} - \frac{1}{k+1}
$$

$$
\begin{aligned}
S_n &= \sum_{k=1}^n \left(\frac{1}{k} - \frac{1}{k+1}\right) \\
&= \left(\frac1{1} - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \cdots + \left(\frac{1}{n} - \frac{1}{n+1}\right) \\
&= \left(1 - \cancel{\frac{1}{2}}\right) + \left(\cancel{\frac{1}{2}} - \cancel{\frac{1}{3}}\right) + \cdots + \left(\cancel{\frac{1}{n}} - \frac{1}{n+1}\right) \\
&= 1 - \frac{1}{n+1} \\
\end{aligned}
$$

$S_n$ konvergiert gegen $1$. $\implies$ die Reihe $\displaystyle\sum_{k=1}^\infty \frac1{k(k+1)}$ konvergiert gegen $1$.
:::

Man muss vorsichtig sein, denn eine Reihe $\displaystyle\sum^k_{k=1} a_k$ ist keine Summe im Sinne der Algebra, sondern im Falle der Divergenz nu ein Symbol für eine nicht konvergente Folge $(S_n)_{n≥1}$.

Im Falle der Konvergenz ist es der Grenzwert der Folge $(S_n)_{n≥1}$.

Analog zu [Satz 2.1.8](#satz-2-1-8) für Folgen erhält man:

::: proposition Satz 2.7.4{#satz-2-7-4}
Seien $\displaystyle\sum_{k=1}^\infty a_k$ und $\displaystyle\sum_{j=1}^\infty b_j$ zwei konvergente Reihen sowie $\alpha\in\mathbb{C}$.

1. Dann ist $\displaystyle\sum_{k=1}^\infty(a_k+b_k)$ konvergent und $\displaystyle\sum_{k=1}^\infty(a_k+b_k)=\sum_{k=1}^\infty a_k + \sum_{k=1}^\infty b_k$

2. $\displaystyle\sum_{k=1}^\infty\alpha\cdot a_k$ ist konvergent und es gilt $\displaystyle\sum_{k=1}^\infty\alpha\cdot a_k = \alpha\cdot \sum_{k=1}^\infty a_k$.
   {.numbered}

**Beweis:**
1. Sei $\displaystyle S_n = \sum_{k=1}^n a_k$,  $\displaystyle U_n = \sum_{j=1}^n b_j$ und $\displaystyle W_n := \sum_{k=1}^n\left(a_k + b_k\right)$.

   Dann ist $W_n = S_n + U_n$ und aus [Satz 2.1.8](#satz-2-1-8) folgt:
   $\displaystyle    \lim_{n\to\infty} W_n = \lim_{n\to\infty} S_n + \lim_{n\to\infty} U_n$

   Was die erste Aussage beweist.
2. Verläuft analog. <span class="right">$\Box$</span>

{.numbered}
:::

::: proposition Satz 2.7.5 (Cauchy-Kriterium für Reihen) {#satz-2-7-5}
Die Reihe $\displaystyle\sum_{k=1}^\infty
a_k$ konvergiert $\iff$ wenn:

$$
\forall\varepsilon>0\ \exists N≥1:\ \forall m≥n\ge N:\ \left|\sum_{k=n}^m a_k\right|<\varepsilon.
$$

**Beweis.** Folgt aus dem Cauchy-Kriterium für Folgen<br>($\forall ε>0 ∃ N≥0:\ \forall m≥n≥N \left|a_m-a_n\right| < ε \iff (a_k)_{k≥1}$ konvergiert)

$$
\begin{aligned}
S_m - S_{n-1} &= \sum_{k=1}^m a_k - \sum_{k=1}^{n-1} a_k \\
&= \sum_{k=n}^m a_k.
\end{aligned}
$$

$(S_k)_{k≥1}$ konvergiert $\iff$ $(S_k)$ ist cauchy.

$\implies ∃ε>0\ \exists N≥0:\ \forall m≥n≥N\ \left|S_m-S_{n-1}\right|<ε$.

$\displaystyle\implies \left|\sum_{k=n}^m a_k\right|<ε \quad \forall m≥n≥N$.
:::

Wir haben auch:

<center>

$\displaystyle\sum_{k=1}^\infty a_k$ konvergiert $\iff$ $\displaystyle\lim_{n\to\infty} \sum_{\substack{k=n\\m≥n}}^m a_k \to 0$
</center>

::: proposition Satz (Notwenige Bedingung für Konvergenz) {#satz-bedingung-für-konvergenz}
Ist die Reihe $\displaystyle\sum_{k=1}^\infty a_k$ konvergent $\implies \displaystyle\lim_{k\to\infty} a_k = 0$.

Falls $\displaystyle\lim_{k\to\infty} a_k ≠ 0 \implies$ divergiert $\displaystyle\sum_{k=1}^\infty a_k$.

**Beweis:**<br>
Wir wenden das Cauchy-Kriterium mit $m=n$ an.

$\displaystyle\sum_{k=1}^\infty a_k$ konvergiert
$\displaystyle\implies \forall ε>0\ \exists N≥1:\ \forall m≥n≥N \left|\sum_{k=n}^m a_k\right|<ε$.

Insbesondere für $m=n$,

$\displaystyle\left|\sum_{k=n}^n a_k\right| = |a_n|<ε$

Das heisst $\forall \varepsilon>0\ \exists N≥1:\ \forall n≥N\ |a_n|<\varepsilon$.

$\implies \displaystyle\lim_{n\to\infty} a_n = 0$.
:::

**Vorsichtig:** $\displaystyle\lim_{k\to\infty} a_k = 0 {\color{red}~~~~\not\!\!\!\implies} \sum_{k=1}^\infty a_k$ konvergent.<br>
Beispiel: $\displaystyle\lim_{k\to\infty} \frac1{k} = 0$, aber die Reihe $\displaystyle\sum_{k=1}^\infty \frac1{k}$ divergiert.

Reihen mit nichtnegativen Gliedern sind speziell einfach zu behandeln; auch spielen sie in der Theorie absolut konvergenter Reihen eine wichtige Rolle, deshalb behandeln wir sie zuerst.

Folgender Satz ist eine einfache Anwendung des Satzes von Weierstrass:

::: proposition Satz 2.7.6{#satz-2-7-6}
Sei $\displaystyle\sum_{k=1}^\infty a_k$ eine Reihe mit $a_k≥0$ für alle $k\in\mathbb{N}$.

$\displaystyle\sum_{k=1}^\infty a_k$ konvergiert $\iff$ die Folge $(S_n)_{n≥1}$ ist nach oben beschränkt

**Beweis:**<br>
Folgt aus Monotonkonvergenzsatz:

$$
\begin{aligned}
S_{n+1} - S_n &= \sum_{k=1}^{n+1} a_k - \sum_{k=1}^n a_k \\
&= a_{n+1} \\
&≥ 0
\end{aligned}
$$

Da $S_{n+1} ≥ S_n$ $\implies$ $S_n$ ist monoton wachsend.

Nach Monotonkonvergenzsatz konvergiert $(S_n)_{n≥1}$ $\iff$ $(S_n)_{n≥1}$ ist nach oben beschränkt. <span class="right">$\Box$</span>
:::

::: proposition Korollar 2.7.7 (Vergleichssatz)
Seien $\displaystyle\sum_{k=1}^\infty a_k$ und $\displaystyle\sum_{k=1}^\infty b_k$ zwei Reihen mit 
$$0 ≤ a_k ≤ b_k \quad \forall k ≥ K$$

Dann gilt:

1. $\displaystyle\sum_{k=1}^\infty b_k$ konvergiert $\implies \displaystyle\sum_{k=1}^\infty a_k$ konvergiert
2. $\displaystyle\sum_{k=1}^\infty a_k$ divergiert $\implies \displaystyle\sum_{k=1}^\infty b_k$ divergiert.
{.lower-roman}

Der Vergleichssatz wird auch Majoranten/Minorantenkriterium genannt.

**Beweis:**<br>
1. Folgt aus Cauchy Kriterium für Reihen:

    Sei $\displaystyle\sum_{k=1}^\infty b_k$ konvergent, $\displaystyle\implies \forall \varepsilon>0\ \exists N≥1:\ \forall m≥n≥N \quad m,n>K\ \left|\sum_{k=n}^m b_k\right|<\varepsilon$.

    Dann gilt für alle $m≥n≥N$ und $m,n>K$
    $$
    \sum_{k=n}^m a_k \quad≤\quad \sum_{k=n}^m b_k \quad<\quad \varepsilon.
    $$

    $\stackrel{\text Cauchy}{\implies} \quad\displaystyle\sum_{k=1}^\infty a_k$ konvergiert
:::

::: example Beispiel 2.7.8 (Anwendung Vergleichssatz) {#beispiel-2-7-8}
1. Wir wissen dass die harmonische Reihe $\displaystyle\sum_{k=1}^\infty \frac{1}{k}$ divergiert.

    Wir vergleichen mit der Teleskop-Reihe $\displaystyle\sum_{k=1}^\infty \frac1{k(k-1)}$.
    
    $$
    \begin{aligned}
    k(k-1) &≤ k^2 \\
    \frac{1}{k(k-1)} &≥ \frac{1}{k^2} \quad\forall k ≥ 2 \\
   \implies 1 + \sum_{k=2}^\infty \frac{1}{k(k-1)} &≥ 1 + \sum_{k=2}^\infty \frac{1}{k^2} \\
    \end{aligned}
    $$
    
    Per Vergleichssatz folgt: $\displaystyle\sum_{k=2}^\infty \frac{1}{k(k-1)}$ konvergiert $\implies$ $\displaystyle\sum_{k=2}^\infty \frac{1}{k^2}$ konvergiert.
    
    Durch Induktion kann man zeigen, dass $\forall s>1$: $\displaystyle\sum_{k=1}^n \frac1{k^s}$ konvergiert.

2. Die Reihe $\displaystyle\sum_{k=1}^\infty \frac{1}{k!}$ konvergiert

    $$
    \begin{aligned}
    k!=1\cdot2\cdot3\cdots k &≥ 1\cdot\underbrace{2\cdot2\cdots2}_{k-1 \text{ mal }}\\
    \frac1{k!} &≤ \frac{1}{2^{k-1}}
    \end{aligned}
    $$
    
    Da die Geometrische Reihe $\displaystyle\sum_{k=1}^\infty \frac{1}{2^{k-1}}$ konvergiert, folgt per Vergleichssatz, dass auch die Reihe $\displaystyle\sum_{k=1}^\infty \frac{1}{k!}$ konvergiert.
3. Die Reihe $\displaystyle\sum_{k=1}^\infty \frac{1}{\sqrt k}$ divergiert

    $$
    \begin{aligned}
    \sqrt k &≤ k\\
    \frac{1}{\sqrt k} &≥ \frac{1}{k}\\
    \implies \sum_{k=1}^\infty \frac{1}{\sqrt k} &≥ \sum_{k=1}^\infty \frac{1}{k}
    \end{aligned}
    $$

    Per Vergleichssatz folgt: $\displaystyle\sum_{k=2}^\infty \frac{1}{k}$ divergiert $\implies$ $\displaystyle\sum_{k=2}^\infty \frac{1}{\sqrt k}$ divergiert.
:::    

::: definition Definition 2.7.9 (Absolute Konvergenz) {#definition-2-7-9}
Eine Reihe $\displaystyle\sum^\infty_{k=1} a_k$ heißt **absolut konvergent**, falls $\displaystyle\sum^\infty_{k=1} |a_k|$ konvergiert.

Eine konvergente aber nicht absolut konvergente Reihe heisst **bedingt konvergent**.
:::

::: proposition Satz 2.7.10 {#satz-2-7-10}
Eine absolut konvergente Reihe ist auch konvergent

<center>

$\displaystyle \sum^\infty |a_k|$ konvergent $\implies$ $\displaystyle \sum^\infty a_k$ konvergent
</center>

und es gilt:

$$
\left|\sum a_k\right| \le \sum|a_k|.
$$
:::

::: example Beispiel 2.7.11 (Alternierende harmonische Reihe) {#beispiel-2-7-11}
Die alternierende harmonische Reihe

$$
\sum^\infty_{k=1}(-1)^{k+1}\frac1k = 1 - \frac12 + \frac13 - \frac14 + \frac15 - \cdots
$$

konvergiert, ist aber nicht absolut konvergent.
:::

Die Alternierende harmonische Reihe ist ein Spezialfall vom Satz von Leibniz:

::: proposition Satz 2.7.12 (Leibniz-Kriterium) {#satz-2-7-12}
Der Satz von Leibniz (1682) besagt, dass falls $(a_n)_{n≥1}$ monoton fallend mit $a_n≥0~~\forall n≥1$ und $\lim a_n=0$ ist, dann konvergiert

$$
\sum(-1)^{n+1}a_n = S
$$

und es gilt

$$
a_1-a_2 ≤ S ≤ a_1
$$

**Beweis:**<br>
Sei $S_n = \sum_{k=1}^n (-1)^{k+1} a_k$ die $n$-te Partialsumme.
Die Idee des Beweises lässt sich bildlich darstellen:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 800 400" fill="none">
<defs>
<marker id="arrowhead" fill="currentColor" markerHeight="6" markerWidth="6" orient="auto-start-reverse" refX="5" refY="5" viewBox="0 0 10 10">
<path stroke-linecap="round" stroke-linejoin="round" d="m0 0 10 5-10 5z"/>
</marker>
</defs>
  <path stroke="currentColor" stroke-width="2" d="M20 300h760M80 290v20m100-20v20m100-20v20m240-20v20m100-20v20m100-20v20"/>
  <text x="80" y="285" text-anchor="middle" fill="currentColor" font-size="24px">0</text>
  <text x="180" y="335" text-anchor="middle" fill="currentColor" font-size="24px">S<tspan font-size="0.8em" baseline-shift="sub">2</tspan></text>
  <text x="280" y="335" text-anchor="middle" fill="currentColor" font-size="24px">S<tspan font-size="0.8em" baseline-shift="sub">4</tspan></text>
  <text x="525" y="280" text-anchor="middle" fill="currentColor" font-size="24px">S<tspan font-size="0.8em" baseline-shift="sub">5</tspan></text>
  <text x="625" y="280" text-anchor="middle" fill="currentColor" font-size="24px">S<tspan font-size="0.8em" baseline-shift="sub">3</tspan></text>
  <text x="720" y="335" text-anchor="middle" fill="currentColor" font-size="24px">S<tspan font-size="0.8em" baseline-shift="sub">1</tspan> = a<tspan font-size="0.8em" baseline-shift="sub">1</tspan></text>
  <path marker-end="url(#arrowhead)" d="M720 270a140 85 0 0 0-540 0" stroke-width=4 stroke="currentcolor"/>
  <path marker-end="url(#arrowhead)" d="M620 250a120 60 0 0 0-340 20" stroke-width=4 stroke="currentcolor"/>
  <path marker-end="url(#arrowhead)" d="M280 360a10 5 0 0 0 240-30" stroke-width=4 stroke="currentcolor"/>
  <path marker-end="url(#arrowhead)" d="M180 360a130 80 0 0 0 440-30" stroke-width=4 stroke="currentcolor"/>
  <text x="450" y="140" font-size="24px" fill="currentcolor" text-anchor="middle">−a<tspan font-size="0.8em" baseline-shift="sub">2</tspan></text>
  <text x="450" y="210" font-size="24px" fill="currentcolor" text-anchor="middle">−a<tspan font-size="0.8em" baseline-shift="sub">4</tspan></text>
  <text x="400" y="375" font-size="24px" fill="currentcolor" text-anchor="middle">+a<tspan font-size="0.8em" baseline-shift="sub">5</tspan></text>
  <text x="400" y="455" font-size="24px" fill="currentcolor" text-anchor="middle">+a<tspan font-size="0.8em" baseline-shift="sub">3</tspan></text>
</svg>

Sei 
$$
\begin{aligned}
S_{2n+1} &= \underbrace{a_1 - a_2 + \cdots + a_{2n-1}}_{S_{2n-1}} - a_{2n} + a_{2n+1} \\
&= S_{2n-1} - a_{2n} + a_{2n+1} ≤ S_{2n-1}\\
S_{2n} &= \underbrace{a_1 - a_2 + \cdots + a_{2n-2}}_{S_{2n-2}} + a_{2n-1} - a_{2n} \\
&= S_{2n-2} + (a_{2n-1} - a_{2n}) ≥ S_{2n-2}
\end{aligned}
$$

Die Folge $(S_{2n-1})_{n\ge1}$ ist also monoton fallend und $(S_{2n})_{n\ge1}$ ist monoton wachsend.

$$
\begin{align*}
\tag*{(*)} S_{2n} &= S_{2n-1} - a_{2n}) \\
\implies S_2≤ S_{2n} &≤ S_{2n-1} ≤ S_1 \\
\end{align*}
$$

Aus $(*)$ und $\lim_{n\to\infty} a_{2n} = 0$ folgt:

$$
\lim_{n\to\infty} S_{2n} = \lim_{n\to\infty} S_{2n-1}
$$

Daraus folgt, dass $(S_m)_{m≥1}$ mit gleichem Grenzwert konvergiert. <span class="right">$\Box$</span>
:::

::: example Beispiel 2.7.13{#beispiel-2-7-13}
Betrachten wir nochmals das [Beispiel 2.7.11](#beispiel-2-7-11) mit der alternierenden harmonischen Reihe:

$$
S = 1 - \frac12 + \frac13 - \frac14 + \frac15 - \frac16 + \dots
$$

Es gilt:

$$
\frac12 = 1 - \frac12 \le S \le 1.
$$

Wir ändern nun die Reihenfolge der Summanden wie folgt:

$$
\underbrace { \left( 1 - { \frac { 1 } { 2 } } \right) } _ { \frac { 1 } { 2 } } - { \frac { 1 } { 4 } } + \underbrace { \left( { \frac { 1 } { 3 } } - { \frac { 1 } { 6 } } \right) } _ { \frac { 1 } { 6 } } - { \frac { 1 } { 8 } } + \underbrace { \left( { \frac { 1 } { 5 } } - { \frac { 1 } { 1 0 } } \right) } _ { \frac { 1 } { 1 0 } } - { \frac { 1 } { 1 2 } } + \cdots
$$

und erhalten

$$
\frac12 - \frac14 + \frac16 - \frac18 + \frac1{10} - \frac1{12} + \dots = \frac12\left(1 - \frac12 + \frac13 - \frac15 + \dots\right).
$$

Die umgeordnete Reihe konvergiert also mit Grenzwert

$$
\frac12 S.
$$
:::


::: proposition Satz von Riemann
Riemann (1854) hat sogar gezeigt, dass es für jede reelle Zahl $A\in\mathbb{R}$ eine Umordnung der obigen Reihe gibt, die gegen $A$ konvergiert!

Bei einer absolut konvergenten Reihe ist die Umordnung jedoch egal, d.h. jede Umordnung konvergiert gegen denselben Grenzwert.
:::

::: definition Definition 2.7.14 (Umordnung){#definition-2-7-14}
Eine Reihe $\displaystyle\sum^\infty_{n=1} a'_n$ ist eine **Umordnung** der Reihe $\displaystyle\sum^\infty_{n=1} a_n$, falls es eine bijektive Abbildung $\phi:\mathbb{N}\to\mathbb{N}$ gitb, so dass $a'_n=a_{\phi(n)}$ gibt.
:::

::: proposition Satz 2.7.16 (Dirichlet 1837) {#satz-2-7-16}
Falls $\displaystyle\sum_{n=1}^\infty a_n$ absolut konvergiert, dann konvergiert jede Umordnung $\sum_{n=1}^\infty a'_n$ gegen denselben Grenzwert.

**Beweis:**<br>
Wir wenden das Cauchy-Kriterium auf die Reihe $\displaystyle\sum_{n=1}^\infty |a_n|$ an:

$\forall \varepsilon > 0 \exists N \geqslant 1$ , so dass $\forall n \geqslant N$ und $k \geqslant 1$ ：
$$
| a _ { n + 1 } | + | a _ { n + 2 } | + \cdot \cdot \cdot + | a _ { n + k } | < \varepsilon
$$

Sei $\phi : \mathbb { N } \to \mathbb { N }$ eine Bijektion und

$$
S^\prime_m = \sum_{i=1}^m a_{\phi(i)}
$$
die $m$-te Partialsumme der umgeordneten Reihe. Da $\phi$ surjektiv ist, können wir $M≥N$ wählen, so dass 
$$
\{1,2,\ldots,N\} \subseteq \{\phi(1),\phi(2),\ldots,\phi(M)\}.
$$
dann folgt für alle $m≥M$:
$$
\{1,2,\ldots,N\} \subseteq \{\phi(1),\phi(2),\ldots,\phi(m)\}
$$
und 
$$
\{1,2,\ldots,N\} \subseteq \{1,2,\ldots,m\}
$$


Für $k \geqslant 1$, so dass $m \leqslant N + k$ und $\max\{\phi(1),\ldots,\phi(m)\} ≤ N + k$ folgt:

$$
| S _ { m } ^ { \prime } - S _ { m } | \leqslant | a _ { N + 1 } | + \cdots + | a _ { N + k } | < \varepsilon .
$$

Folglich gilt $\displaystyle\lim _ { n \to \infty } ( S _ { m } ^ { \prime } - S _ { m } ) = 0$ und somit

$$
\operatorname* { l i m } _ { n \to \infty } S _ { m } ^ { \prime } = \operatorname* { l i m } _ { n \to \infty } S _ { m } + \operatorname* { l i m } _ { n \to \infty } \left( S _ { m } ^ { \prime } - S _ { m } \right) = \operatorname* { l i m } _ { n \to \infty } S _ { m }
$$
:::

::: proposition Satz 2.7.17 Quotientenkriterium{#satz-2-7-17}

Sei $(a_n)_{n≥0}$ mit $a_n ≠ 0$ für alle $n≥0$

Falls $\displaystyle\limsup_{n\to\infty} \left|\frac{a_{n+1}}{a_n}\right| < 1$ $\implies$ konvergiert die Reihe $\displaystyle\sum_{n=0}^\infty a_n$ absolut.

Falls $\displaystyle\liminf_{n\to\infty} \left|\frac{a_{n+1}}{a_n}\right| > 1$ $\implies$ divergiert die Reihe $\displaystyle\sum_{n=0}^\infty a_n$.

Falls $\displaystyle\lim_{n\to\infty} \left|\frac{a_{n+1}}{a_n}\right| = L$ existiert:

- $L<1$ $\implies$ absolute Konvergenz.
- $L>1$ $\implies$ Divergenz.
- $L=1$ $\implies$ Versagen des Kriteriums.

**Beweis:**<br>
Sei $c_n := \sup \left\{ \left|\frac{a_{k+1}}{a_k}\right|: k≥n \right\}$ und monoton fallend.
$$
\limsup_{n\to\infty} \left|\frac{a_{k+1}}{a_k}\right| = \lim_{n\to\infty} c_n = q_0 < 1
$$

Sei $q \in \mathbb{R}$ mit $q_0 < q < 1$ und $\varepsilon = q - q_0$.
Dann gilt für genügend gross $N\in \mathbb{N}$:
$$
\left|c_n - q_0\right| < \varepsilon \quad \forall n ≥ N
$$

Insbesondere gilt $c_N < ε + q_0 = q$. 

Dann für alle $k≥N$ haben wir $\left|\frac{a_{k+1}}{a_k}\right| ≤ c_N < q$.

Woraus folgt dass 
$$
\left|a_{k+1}\right| < q\left|a_k\right| \quad \forall k ≥ N
$$

Dann für $j≥1$ 
$$
\begin{aligned}
\left|a_{N+j}\right| &≤ q \left|a_{N+j-1}\right| \\
&≤ q^2 \left|a_{N+j-2}\right| ≤ \cdots ≤ q^j \left|a_N\right|\\
&≤\frac{q^{N+j}}{q^N} \left|a_N\right|\\
&≤q^{N+j} \left|\frac{a_N}{q^N}\right|
\end{aligned}
$$
Wir haben gezeigt dass für alle $n≥N+1$ gilt:
$$
|a_n| ≤ q^n \left|\frac{a_N}{q^N}\right|
$$

Sei $M = \left|\frac{a_N}{q^N}\right|$, dann haben wir $|a_n| ≤ M \cdot q^n$ für alle $n≥N+1$.

$$
\sum_{n=N+1}^\infty |a_n| ≤ M\cdot\!\!\!\sum_{n=N+1}^\infty q^n
$$

Da $q<1$ ist die geometrische Reihe $\sum_{n=N+1}^\infty q^n$ konvergent.

Deswegen konvergiert auch die Reihe $\sum_{n=N+1}^\infty |a_n|$. <span class="right">$\Box$</span>
:::

Im Quotientenkriterium haben wir $\limsup \left|\frac{a_{n+1}}{a_n}\right|$ für Konvergenz und $\liminf \left|\frac{a_{n+1}}{a_n}\right|$ für Divergenz verwendet. Warum $\limsup$ oder $\liminf$ und nicht für beide das Gleiche? Man kann Folgen finden $(a_n)$, $(b_n)$, so dass $\liminf \left|\frac{a_{n+1}}{a_n}\right| < 1$ und $\liminf \left|\frac{b_{n+1}}{b_n}\right| < 1$ und <br>
$\limsup \left|\frac{a_{n+1}}{a_n}\right| > 1$ und $\limsup \left|\frac{b_{n+1}}{b_n}\right| > 1$,<br>
aber $\sum a_n$ konvergiert und $\sum b_n$ divergiert.

::: example Beispiel warum limsup und liminf nötig ist
Seien $(a_n)$, $(b_n)$ zwei rekursiv devinierte Folgen:
$$
\begin{aligned}
a_1 &= 1 \\
a_n &= \begin{cases} 2a_{n-1} & \text{falls } n=3^k \text{ für ein } k \\ \frac12 a_{n-1} & \text{sonst}\end{cases} \\
\\
a_1 &= 1 \\
a_2 &= \tfrac12 \\
a_3 &= 1 \\
a_4 &= \tfrac12 \\
a_5 &= \tfrac14 \\
a_6 &= \tfrac18 \\
a_7 &= \tfrac1{16} \\
a_8 &= \tfrac1{32} \\
a_9 &= \tfrac1{16} \\
a_{10} &= \tfrac1{32} \\
&~~~⋮\\
|a_n| &≤ \left(\tfrac12\right)^n \quad\forall n≥4
\end{aligned}
$$

Damit konvergiert die Reihe 
$$
\sum_{n=4}^\infty |a_n| < \sum_{n=4}^\infty \left(\tfrac12\right)^n 
$$

Wir haben aber:
$$
\begin{aligned}
\left|\frac{1_{n1+}}{a_n}\right| &= \begin{cases}2 \text{ oder } ½
\end{cases} \\
\liminf_{n\to\infty} \left|\frac{a_{n+1}}{a_n}\right| &= ½ < 1 \\
\limsup_{n\to\infty} \left|\frac{a_{n+1}}{a_n}\right| &= 2 > 1
\end{aligned}
$$
Somit bringt uns hier das Quotientenkriterium nicht weiter.

$$
\begin{aligned}
b_1 &= 1 \\
b_n &= \begin{cases} \tfrac12 b_{n-1} & \text{falls } n=3^k \text{ für ein } k \\ 2b_{n-1} & \text{sonst}\end{cases} \\
\\
b_1 &= 1 \\
b_2 &= 2 \\
b_3 &= 1 \\
b_4 &= 2 \\
b_5 &= 4 \\
b_6 &= 8 \\
b_7 &= 16 \\
b_8 &= 32 \\
b_9 &= 16 \\
b_{10} &= 32 \\
&~~~⋮\\
|b_n| &≥ 1
\end{aligned}
$$

Damit divergiert die Reihe $\sum_{n=1}^\infty b_n$.
:::

::: example Beispiel 2.7.18 (Exponentialfunktion) {#beispiel-2-7-18}
Für $z\in\mathbb{C}$, betrachte die Reihe
$$
\tag{0! = 1} 1+z+\frac{z^2}{2!}+\frac{z^3}{3!}+\cdots = \sum_{n=0}^\infty \frac{z^n}{n!}
$$

für $z≠0$, $a_n = \frac{z^n}{n!}$, schauen wir mit dem Quotientenkriterium:

$$
\begin{aligned}
\left|\frac{a_{n+1}}{a_n}\right| &= \left|\frac{z^{n+1}}{(n+1)!}\cdot\frac{n!}{z^n}\right| \\
&= |z|\cdot\left|\frac1{n+1}\right| \xrightarrow[n\to\infty]{} 0 < 1
\end{aligned}
$$

$\implies$ für jede $z\in\mathbb{C}$ konvergiert die Reihe $\displaystyle\sum_{n=0}^\infty \frac{z^n}{n!}$.
:::

::: definition Definition Exponentialfunktion{#definition-exponentialfunktion}
$$
\exp(z) = \sum_{n=0}^\infty \frac{z^n}{n!} \quad\forall z\in\mathbb{C}
$$
:::

::: example Beispiel
1. Für welche $z\in\mathbb{C}$ konvergiert die Reihe 
    $$
    \sum_{k=0}^\infty \frac{z^k k!}{k^k}
    $$
    
    $$
    \begin{aligned}
    a_k &= \frac{z^k k!}{k^k} \\
    \left|\frac{a_{k+1}}{a_k}\right| &= \left|\frac{z^{k+1} (k+1)!}{(k+1)^{k+1}}\cdot\frac{k^k}{z^k k!}\right| \\
    &= |z|\cdot\left|\frac1{\left(1 + \frac1k\right)^{k}}\right| \to \frac{|z|}e \\
    \end{aligned}
    $$
    Mit dem Quotientenkriterium falls $\frac{|z|}e < 1$ dann konvergiert $\sum_{k=0}^\infty \frac{z^k k!}{k^k}$, falls $\frac{|z|}e > 1$ divergiert die Reihe.
2. $\displaystyle\sum_{k=1}^\infty \underbrace{kq^k}_{a_k}$ für $|q|<1$.
    
    $$
    \begin{aligned}
    \left| \frac{a_{k+1}}{a_k}\right| &= \left|\frac{(k+1)q^{k+1}}{kq^k}\right| \\
    &= |q|\cdot\left|\frac{k+1}{k}\right| \\&\xrightarrow[k\to\infty]{} q < 1
    \end{aligned}
    $$

    $\implies$ die Reihe $\displaystyle\sum_{k=1}^\infty kq^k$ konvergiert absolut.

    **Was ist die Summe?**

    $$
    \begin{align*}
    \sum_{k=1}^\infty kq^k &= q + 2q^2 + 3q^3 + 4q^4 + \cdots \\
    &\begin{array}{r}
    \,=& q &+& q^2 &+& q^3 &+& q^4 & \\
    & &+& q^2 &+& q^3 &+& q^4 &\\
    & & & &+& q^3 &+& q^4 &\\
    & & & & & &+& q^4 &+ \ldots\\
    \end{array} \\
    \\
    &= q\cdot(1 + q + q^2 + q^3 + \ldots)\\
    &+ q^2(1 + q + q^2 + q^3 + \ldots)\\
    &+ q^3(1 + q + q^2 + q^3 + \ldots)\\
    &~~\vdots \\
    
    &=\underbrace{(q + q^2 + q^3 + \ldots)}_{\underbrace{q\cdot(1+q^2+q^3+\ldots)}_{\frac{q}{1-q}}} \cdot \underbrace{(1 + q + q^2 + q^3 + \ldots)}_{\frac1{1-q}}\\
    &=\frac{q}{(1-q)^2}
    \end{align*}
    $$
:::

::: proposition Satz 2.7.20 Wurzelkriterium (Cauchy 1821) {#satz-2-7-20}
Sei $(a_n)_{n\ge0}$ eine Folge
1. $\displaystyle\limsup_{n\to\infty}|a_n|^\frac1n=\limsup_{n\to\infty}\sqrt[n]{|a_n|} < 1$<br> $\implies$ konvergiert die Reihe $\displaystyle\sum_{n=1}^\infty a_n$ absolut.
2. $\displaystyle\limsup_{n\to\infty}|a_n|^\frac1n=\limsup_{n\to\infty}\sqrt[n]{|a_n|} > 1$<br> $\implies$ divergiert die Reihe $\displaystyle\sum_{n=1}^\infty a_n$.
{.numbered}


Falls $\displaystyle\lim_{n\to\infty} |a_n|^\frac1n = \lim_{n\to\infty} \sqrt[n]{|a_n|} = L$ existiert:

- $L<1$ $\implies$ absolute Konvergenz.
- $L>1$ $\implies$ Divergenz.
- $L=1$ $\implies$ Versagen des Kriteriums.

**Beweis:**
1. Sei $c_n := \sup \left\{ \sqrt[n]{|a_k|}: k≥n \right\}$ und $0<q<1$ mit
    $$
    \lim_{n\to\infty} c_n = \limsup_{n\to\infty} \sqrt[n]{|a_n|} < q < 1
    $$
    Dann gibt es ein $N≥1$ mit

    $$
    c_N = \sup \left\{ \sqrt[n]{|a_k|}: k≥N \right\} ≤ q
    $$

    woraus folgt
    $$
    \left|a_k\right| ≤ q^k \quad\forall k≥N
    $$
    Die Aussage folgt dann aus dem Vergleichsatz ([Satz 2.7.7](#satz-2-7-7)) angewendet auf die geometrische Reihe $\sum_{k=N}^\infty q^k$.
2. Ein analoges Argument zeigt, dass $|a_n|≥1$ für unendlich viele $n$ divergiert, falls $\limsup_{n\to\infty} \sqrt[n]{|a_n|} > 1$.
{.numbered}
:::

Das Wurzelkriterium ist stärker als das Quotientenkriterium. Daher wenn das Wurzelkriterium versagt, dann versagt auch das Quotientenkriterium. Es gibt aber Beispiele in denen das Wurzelkriterium funktioniert, aber das Quotientenkriterium versagt.

Beispiel: Sei $a_n = \begin{cases} \frac1{2^{n+1}} &n \text{ gerade}\\ \frac1{2^n} &n \text{ ungerade}\end{cases}$

Eine wichtige Klasse von Funktionen in der Analysis wird durch "konvergente Potenzreihen" definiert.
Vergleich mit geometrische Reihe konvergiert.

::: definition Potenzreihe{#definition-potenzreihe}
Sei $(c_k)$ eine Folge (in $\mathbb{R}$ oder $\mathbb{C}$). Falls $\limsup_{k\to\infty}\sqrt[k]{|c_k|}$ existiert, definieren wir:
$$
\rho = \begin{cases}+\infty,&\displaystyle\limsup_{k\to\infty}\sqrt[k]{|c_k|}=0\\
\displaystyle\frac1{\displaystyle\limsup_{k\to\infty}\sqrt[k]{|c_k|}} &\displaystyle\limsup_{k\to\infty}\sqrt[k]{|c_k|}>0.\end{cases}
$$
:::

::: proposition Satz 2.7.20 Potenzreihe
Sei $(c_k)_{k≥0}$ eine Folge in $\mathbb r$ oder $\mathbb{C}$.

Die Potenzreihe in $z\in\mathbb C$ ist 
$$P(z):=c_o+c_1z+c_2z^2+c_3z^3+\cdots = \displaystyle\sum_{k=0}^\infty c_kz^k$$
und konvergiert absolut für alle $z\in\mathbb C$ mit $|z|<\rho$ und divergiert für $|z|>\rho$, wobei wir $\rho$ wie folgt definieren:

$$
\rho=\begin{cases}+\infty,&\limsup\sqrt[k]{|c_k|}=0,\\[0.3em]
\frac1{\limsup\sqrt[k]{|c_k|}},&\limsup\sqrt[k]{|c_k|}≠0.
\end{cases}
$$

**Per Konvention:**
1. Falls $\left\{|c_k|^\frac1k,k≥1\right\}$ nicht beschränkt ist, dann ist $\rho=0$.
2. Falls $\left\{|c_k|^\frac1k,k≥1\right\}$ beschränkt ist und $\limsup\sqrt[k]{|c_k|} = 0$, dann ist $\rho=+\infty$.

**Beweis:**<br>
Sei $z\in\mathbb{C}$. $\sum c_kz^k = \sum a_k$ mit $a_k = c_kz^k$.
Dann $\left|a_k\right|^\frac1k = |c_k|^\frac1k|z|$.

$\displaystyle\limsup_{k\to\infty} |a_k|^\frac1k = \limsup_{k\to\infty} |c_k|^\frac1k|z|$.

Nach dem Wurzelkriterium konvergiert die Reihe $\sum a_k$ absolut, falls $\displaystyle\limsup_{k\to\infty} |c_k|^\frac1k|z| < 1$, d.h. falls $\displaystyle|z|\limsup_{k\to\infty} |c_k|^\frac1k < 1$,

d.h. falls $\displaystyle|z| < \underbrace{\frac1{\limsup_{k\to\infty} |c_k|^\frac1k}}_{\rho}$ <span class="right">$\Box$</span>
:::

::: example Beispiel Potenzreihe
Die Exponentialreihe ist eine Potenzreihe mit $c_k = \frac1{k!}$, also
$$
P(z) = \sum_{k=0}^\infty \frac{z^k}{k!} = \sum_{k=0}^\infty c_kz^k = \exp(z).
$$
:::

::: definition Definition Konvergenzkreis{#definition-konvergenzkreis}
Der Konvergenzbereich einer Potenzreihe ist die Menge $\left\{z\in\mathbb{C}: |z|<\rho\right\}$ und ein Kreis, der **Konvergenzkreis** der Potenzreihe.
$\rho$ nennt man den **Konvergenzradius**.
:::


### Die Zeta-Funktion

Sei $s>0$ betrachten wir die Reihe

$$
\begin{aligned}
\zeta(s)&:=1+\frac1{2^s}+\frac1{3^s}+\cdots\\
&~=\sum_{n=1}^\infty\frac1{n^s}
\end{aligned}
$$
und fragen nach der Konvergenz.

In diesem Fall funktioniert werder das Quotientenkriterium noch das Wurzelkriterium, da 
$$
\left|\frac{a_{n+1}}{a_n}\right| = \left|\frac{n}{n+1}\right|^s \to 1
$$
und 
$$
\sqrt[n]{\left|a_n\right|} = \sqrt[k]\frac1{k^s} = \left|\frac1{\sqrt[k]{k}}\right|^s \to 1
$$

Zur Erinnerung:

$$
\begin{aligned}
&1 + \underbrace{\tfrac12 + \tfrac13}_{≥\underbrace{\frac14+\frac14}_{\frac12}} + \underbrace{\tfrac14 + \tfrac15 + \tfrac16 + \tfrac17}_{≥\underbrace{\frac18+\frac18+\frac18+\frac18}_{\frac12}} + \cdots\\
&≥1 + \tfrac12 + \tfrac12 + \tfrac12 + \tfrac12 + \cdots\\
&≥1 + 1 + 1+\cdots
\end{aligned}
$$

Sei $s>1$ dann haben wir 
$$
\begin{aligned}
&1+\underbrace{\frac1{2^s} + \frac1{3^s}}_{\displaystyle<\underbrace{\tfrac1{2^s} + \tfrac1{2^s}}_{\displaystyle\tfrac2{2^s}}} + \underbrace{\frac1{4^s} + \frac1{5^s} + \frac1{6^s} + \frac1{7^s}}_{\displaystyle<\underbrace{\tfrac1{4^s}+\tfrac1{4^s}+\tfrac1{4^s}+\tfrac1{4^s}}_{\displaystyle\tfrac{2^2}{2^{2s}}}} + \cdots\\
&< 1 + \frac2{2^s} + \frac{2^2}{2^{2s}} + \frac{2^3}{2^{3s}} + \cdots\\
&= 1 + \frac1{2^{s-1}} + \left(\frac1{2^{s-1}}\right)^2 + \left(\frac1{2^{s-1}}\right)^3 + \cdots\\
&= q^0 + q^1 + q^2 + q^3 + \cdots
\end{aligned}
$$

Konvergiert die Geometrische Reihe gegen $\displaystyle\frac1{1-\frac1{2^{s-1}}}$

Mit dem Vergleichsatz folgt, dass die Reihe $\sum_{n=1}^\infty \frac1{n^s}$ für $s>1$ konvergiert.

$$
\sum_{n=1}^\infty \frac1{n^s} < \frac1{1-\frac1{2^{s-1}}}
$$

Falls $0≤s≤1$ haben wir $\frac1{k^s} > \frac1k$ und wir wenden nochmals den Vergleichsatz an:

Da $\sum_{n=1}^\infty \frac1n$ divergiert, folgt, dass $\sum_{n=1}^\infty \frac1{n^s}$ für $0≤s≤1$ divergiert.

Somit:
$$
\zeta(s) = \sum_{n=1}^\infty \frac1{n^s} \begin{cases}
\text{konvergiert} &\text{ falls } s>1\\
\text{divergiert} &\text{ falls } 0≤s≤1
\end{cases}
$$

### Doppelreihen und Multiplikation von 2 Reihen

Sei $(c_{kl})_{k,l≥0}$ eine Doppelfolge

$\displaystyle\sum_{k,l} c_{kl} = ?$

$$
\begin{array}{cccl}
c_{0,0} & c_{0,1} & c_{0,2} & \cdots \qquad \displaystyle\sum_{l=0}^\infty c_{0,l} = S_0\\
c_{1,0} & c_{1,1} & c_{1,2} & \cdots \qquad \displaystyle\sum_{l=0}^\infty c_{1,l} =S_1\\
c_{2,0} & c_{2,1} & c_{2,2} & \cdots \qquad \displaystyle\sum_{l=0}^\infty c_{2,l} =S_2\\
\vdots & \vdots & \vdots & \ddots\\
\displaystyle\sum_{k=0}^\infty c_{k,0} & \displaystyle\sum_{k=0}^\infty c_{k,1} & \displaystyle\sum_{k=0}^\infty c_{k,2} &\\
∥ & ∥ & ∥ & \\
U_0 & U_1 & U_2 & \\
\end{array}
$$

$$
\sum_{k=0}^\infty S_k = \sum_{k=0}^\infty \sum_{l=0}^\infty c_{kl} = \sum_{l=0}^\infty U_l
$$

Wenn wir nun aber die folgende Doppelreihe haben:

$$
\begin{array}{r}
1 & -1 & 0 & 0 & 0 & \cdots\\
0 & 1 & -1 & 0 & 0 & \cdots\\
0 & 0 & 1 & -1 & 0 & \cdots\\
0 & 0 & 0 & 1 & -1 & \cdots\\
\vdots & \vdots & \vdots & \vdots & \vdots & \ddots\\
\end{array}
$$

Dann ist die Summe der Spalten $\sum U_l = 1+0+0+\cdots = 1$ und die Summe der Zeilen $\sum S_k = 0+0+0+\cdots = 0$.


::: definition Definition 2.7.22 Lineare Anordnung{#definition-2-7-22}
Eine Reihe $\sum b_k$ ist eine **lineare Anordnung** einer Doppelreihe $\sum_{i,j≥0}a_{ij}$, falls es eine Bijektion
$$
\begin{aligned}
\sigma:\mathbb{N}&\to\mathbb{N}\times\mathbb{N}\\
k&\mapsto (i,j)
\end{aligned}
$$

mit $b_k=a_{\sigma(k)}$ gibt.
:::

::: proposition Satz 2.7.2. Cauchy (1821)
Wir nehmen an dass es $B≥0$ gibt, so dass $\displaystyle\sum_{i=0}^m\sum_{j=0}^m|c_{ij}| ≤ B$ für alle $m≥0$ ($B$ hängt nicht von $m$ ab).

Dann konvergieren die folgenden Reihen:
$$
\begin{aligned}
S_i &= \sum_{j=0}^\infty c_{ij} \quad\forall i≥0,\\
U_j &= \sum_{i=0}^\infty c_{ij} \quad\forall j≥0
\end{aligned}
$$

$$
\begin{gather}
\sum_{i=0}^\infty S_i\\
\sum_{j=0}^\infty U_j\\
\end{gather}
$$

und es gilt:
$$
\sum_{i=0}^\infty\sum_{j=0}^\infty c_{ij} = \sum_{i=0}^\infty S_i = \sum_{j=0}^\infty U_j = \sum_{j=0}^\infty\sum_{i=0}^\infty c_{ij}
$$

Zudem konvergiert jede lineare Anordnung der Doppelreihe absolut, mit selbem Grenzwert.

**Beweis:**<br>
Sei $b_0+b_1+b_2+\cdots = \sum_{k=0}^\infty b_k$ eine lineare Anordnung der obigen Doppelreihe. Für jedes $n≥0$ gibt es ein $m≥0$, so dass:
$$
\{b_0,\cdots,b_n\} \subset \{a_{ij}: \substack{0≤i≤m\\0≤j≤m}\}
$$

woraus 
$$
\sum_{i=0}^n |b_i| ≤ \sum_{i=0}^m\sum_{j=0}^m |a_{ij}| ≤ B
$$
folgt. Daraus folgt, dass die Reihe $\sum b_i$ absolut konvergiert.

Dasselbe Argument liefert auch, dass die Reihen

<center>

$S_i = \displaystyle\sum_{j=0}^\infty a_{ij}$ und $U_j = \displaystyle\sum_{i=0}^\infty a_{ij}$.
</center>

absolut konvergieren.

Wir wenden jetzt das Cauchy-Kriterium an auf die absolut konvergente Reihe $\sum b_i$:

$$
\forall\varepsilon>0\ \exists N≥0:\ \forall n≥N\ \forall k≥1: |b_{n+1}| + \cdots + |b_{n+k}| < \varepsilon
$$

Für ein gegebenes $\varepsilon>0$ und entsprechendes $N≥0$ wählen wir ein $M≥0$, so dass alle $b_0,\cdots,b_N$ im "Quadranten" $a_{ij}, 0≤i≤M,\ 0≤j≤M$ vorkommen.

Mit der Wahl sind die Terme $b_0,\cdots,b_N$ präsent in der Summe

$$
\sum_{i=0}^lb_i \quad\forall l≥N
$$

sowie in
$$
\sum_{i=0}^m\sum_{j=0}^n a_{ij} \quad\forall m≥M, n≥M
$$

Es folgt:
$$
\left| \sum_{i=0}^m\sum_{j=0}^n a_{ij} - \sum_{i=0}^l b_i \right| ≤|b_{N+1}| + \cdots + |b_{N+k}|< \varepsilon
$$
für ein genügend grosses $k≥1$.

Daraus folgt mit $\displaystyle S := \sum_{i=0}^\infty b_i:$

$$
\left|\sum_{i=0}^m S_i - S\right| < \varepsilon
$$
sowie
$$
\left|\sum_{j=0}^m U_j - S\right| < \varepsilon
$$
woraus
$$
\sum_{i=0}^\infty S_i = S = \sum_{j=0}^\infty U_j
$$
folgt. <span class="right">$\Box$</span>
:::

Wir können nun das Cauchy Produkt zweier Reiehen behandeln. Falls wir das Produkt von zwei Reihen $\sum a_i$ und $\sum b_j$ berechnen wollen, müssen wir eine Art finden, die Einträge der Matrix

$$
\begin{array}{ccccc}
a_0b_0 & a_0b_1 & a_0b_2 & \cdots\\
a_1b_0 & a_1b_1 & a_1b_2 & \cdots\\
a_2b_0 & a_2b_1 & a_2b_2 & \cdots\\
\vdots & \vdots & \vdots & \ddots\\
\end{array}
$$
zu summieren.

::: definition Definition 2.7.24 (Cauchy-Produkt)
Das *Cauchy-Produkt* zweier Reihen $\sum a_i$ und $\sum b_j$ ist die Reihe

$$
\sum_{n=0}^\infty\left(\sum_{j=0}^n a_{n-j}\cdot b_j\right) = a_0b_0 + (a_0b_1 + a_1b_0) + (a_0b_2 + a_1b_1 + a_2b_0) + \cdots
$$
:::

**Vorsicht!** Das Cauchy-Produkt imuss nicht immer konvergieren!

::: example Beispiel 2.7.25{#beispiel-2-7-25}
Betrachte die Folge $\displaystyle a_k = \frac{(-1)^k}{\sqrt{k+1}} = b_k$.

Dann ist das Cauchy-Produkt
$$
\left(\sum_{k=0}^\infty a_k\right)\left(\sum_{k=0}^\infty b_k\right) = \sum_{n=0}^\infty\left(\underbrace{\sum_{j=0}^n a_{n-j}\cdot b_j}_{c_n}\right)
$$

$$
\left|\sum_{j=0}^n a_{n-j}\cdot b_j\right| = \left|\sum_{j=0}^n \frac{(-1)^{n-j}}{\sqrt{n-j+1}}\cdot\frac{(-1)^j}{\sqrt{j+1}} \right| = |c_n|
$$

$$
|c_n| =\left| \sum_{j=0}^n \frac{1}{\sqrt{n-j+1}\sqrt{j+1}}\right|
$$

Da wir $j≤n$ haben:
$$
\begin{aligned}
(n-j+1)(j+1) &≤ (n+1)(n+1)\\
\frac1{\sqrt{(n-j+1)}\sqrt{(j+1)}} &≥ \frac1{n+1}^2\\
\sum_{j=0}^n a_{n-j}\cdot b_j &≥ \sum_{j=0}^n \frac1{(n+1)^2}\\ &= \sum_{j=0}^n \frac1{n+1} \\
& = (n+1) \cdot\frac1{n+1} ≥ 1
\end{aligned}
$$
:::

**Vorsicht!** Man kann auch haben, dass $\sum a_n$ und $\sum b_n$ divergieren, aber das Cauchy-Produkt konvergiert.

::: proposition Satz 2.7.26
Falls die Reihen $\sum a_n$ und $\sum b_n$ absolut konvergieren, so konvergiert auch das Cauchy-Produkt $\sum c_n$, wobei $c_n = \sum_{j=0}^n a_{n-j}b_j$.
:::

::: proposition Satz 2.7.27{#satz-2-7-27}
Für alle $z,w\in\mathbb{C}$ gilt

$$
\exp(w+z)=\exp(w)\exp(z)
$$
**Beweis:**<br>
$exp(w) = \sum_{n=0}^\infty \frac{w^n}{n!}$
ist abs. konvergent für alle $x\in\mathbb{C}$.
$$
\begin{aligned}
\exp(w)\exp(z) &= \left(\sum_{n=0}^\infty \frac{w^n}{n!}\right)\left(\sum_{m=0}^\infty \frac{z^m}{m!}\right) \\
&= \sum_{k=0}^\infty\left(\sum_{j=0}^k \frac{w^{k-j}}{(k-j)!}\cdot\frac{z^j}{j!}\right)
\end{aligned}
$$

Wir müssen zeigen dass
$$
\exp(w+z) = \sum_{n=0}^\infty \frac{(w+z)^n}{n!} \stackrel{?}= \sum_{k=0}^\infty\left(\sum_{j=0}^k \frac{(w+z)^{k-j}}{(k-j)!}\cdot\frac{z^j}{j!}\right)
$$

Wir erinnern uns an den Binomialsatz:
$$
(w+z)^n = \sum_{k=0}^n \binom{n}{k} z^k w^{n-k}
$$

und $\displaystyle\binom{n}{k} = \frac{n!}{k!(n-k)!}$.

$$
\begin{aligned}
\exp(w)\exp(z) &= \sum_{n=0}^\infty\left(\sum_{k=0}^n \frac{z^k}{k!}\cdot\frac{w^{n-k}}{(n-k)!}\right) \\
&= \sum_{n=0}^\infty\left(\sum_{k=0}^n \frac{z^kw^{n-k}}{n!}\cdot\frac{n!}{k!(n-k)!}\right) \\
&= \sum_{n=0}^\infty\frac1{n!}\left(\sum_{k=0}^n  \binom{n}{k} z^k\cdot w^{n-k} \right) \\
&= \sum_{n=0}^\infty\frac1{n!}(w+z)^n \\
&= \exp(w+z)
\end{aligned}
$$
:::

Wir schreiben eine Folge als eine Funktion:

$$
\begin{aligned}
f:\mathbb{N} &\to \mathbb{R}\\
k &\mapsto f(k)\\
\end{aligned}
$$
und betrachten Folgen von Folgen.

::: proposition Satz 2.7.28{#satz-2-7-28}
Für jedes $n$, sei 
$$
\begin{align*}
f_n:\mathbb{N}&\to\mathbb{R}\\
k &\mapsto f_n(k)\\
\end{align*}
$$
eine Folge unnd
$$
(f_n)_n = (f_1,f_2,f_3,\ldots)
$$
eine Folge von Folgen.

Wir nehmen an:
1. $\displaystyle\lim_{n\to\infty} f_n(j)$ existiert für alle $j\in\mathbb{N}$
    $$
    \begin{aligned}
    j=1\qquad &f_1(1) \qquad \qquad \lim_{n\to\infty} f_n(j) := f(j)\\
    &f_2(1)\\
    &f_3(1)\\
    &\vdots\\
    &f_n(1)\\
    &\vdots\\
    \end{aligned}
    $$
2. Es gibt eine Funktion $g:\mathbb{N}\to[0,\infty)$ so dass:

    1. $|f_n(j)| ≤ g(j) \quad \forall j≥0,n≥0$
    2. $\sum_{j=0}^\infty g(j)$ konvergiert.
    
Dann folgt

$$
\lim_{n\to\infty}\sum_{j=0}^\infty f_n(j) = \sum_{j=0}^\infty f(j)
$$

Daher 
$$
\lim_{n\to\infty}\sum_{j=0}^\infty f_n(j) = \sum_{j=0}^\infty \lim_{n\to\infty} f_n(j)
$$

Man kann "$\sum$" und "$\lim$" vertauschen, falls die Bedingungen 1. und 2. erfüllt sind.
:::

::: proposition Korollar 2.7.29{#korollar-2-7-29}
Für alle $z\in\mathbb{C}$ konvergiert die Folge $\left(\left(1+\frac{z}{n}\right)^n\right)_{n\ge1}$ gegen $\exp(z)$, d.h. es gilt

$$
\lim_{n\to\infty}\left(1+\frac{z}{n}\right)^n=\exp(z) = \sum_{k=0}^\infty \frac{z^k}{k!}
$$

Insbesondere gilt
$$
\lim_{n\to\infty}\left(1+\frac{1}{n}\right)^n = \exp(1)
$$

**Beweis:**<br>
Sei $z\in\mathbb{C}$ fest und betrachten wir
$$
\begin{aligned}
\left(1+\frac{z}{n}\right)^n &= \sum_{k=0}^n \binom{n}{k} 1^{n-k}\left(\frac{z}{n}\right)^k \\
&= \sum_{k=0}^n z^k \frac{n!}{k!(n-k)!} \frac{1}{n^k}\\
&= \sum_{k=0}^n \frac{z^k}{k!} \frac{n!}{(n-k)!} \frac1{n^k}\\
\end{aligned}
$$

Sei $f_n(k) = \begin{cases}
\frac{z^k}{k!} \frac{n!}{(n-k)!} \frac1{n^k} &\text{ falls } 0≤k≤n\\
0 &\text{ falls } k≥n+1
\end{cases}$

Dann ist $\displaystyle\left(1+\frac{z}{n}\right)^n = \sum_{k=0}^\infty f_n(k)$.

Schauen wir uns den Teil $\frac{n!}{(n-k)!} \cdot n^k$ an:
$$
\begin{aligned}
\frac{n!}{(n-k)!} \cdot n^k &= n(n-1)(n-2)\cdots(n-k+1) \cdot n^k\\
&= \left(\frac{n}{n}\right)\left(\frac{n-1}{n}\right)\left(\frac{n-2}{n}\right)\cdots\left(\frac{n-k+1}{n}\right) \cdot n^k\\
&= 1\left(1-\frac{1}{n}\right)\left(1-\frac{2}{n}\right)\cdots\left(1-\frac{k-1}{n}\right) \cdot n^k\\
&\xrightarrow[n\to\infty]{} 1\\
\left|\frac{n!}{(n-k)!} \cdot n^k\right| &≤ 1
\end{aligned}
$$

d.h. 
$$
\begin{aligned}
\left|f_n(k)\right| = \left|\frac{z^k}{k!}\right| \cdot \left|\frac{n!}{(n-k)!} \cdot n^k\right| \\
&≤ \frac{|z|^k}{k!} =: g(k)
\end{aligned}
$$

und $\displaystyle\lim_{n\to\infty} f_n(k) \to \frac{z^k}{k!} =: f(k)$.

Da $\displaystyle\sum_{k=0}^\infty g(k) = \sum_{k=0}^\infty \frac{|z|^k}{k!}$ für alle $z$ konvergiert, können wir Satz 2.7.28 anwenden.

$$
\sum_{k=0}^\infty \frac{z^k}{k!} = \sum_{k=0}^\infty f(k) \stackrel{2.7.28}{=} \lim_{n\to\infty} \sum_{k=0}^\infty f_n(k) = \lim_{n\to\infty} \left(1+\frac{z}{n}\right)^n
$$
:::

::: example Beispiel

$$
\sum_{k=0}^\infty \frac{\left(\frac{\pi}2 i\right)^k}{k!} = \exp \left(\frac{\pi}2 i\right)
$$

$$
\exp \left(i\theta\right) = \cos(\theta) + i\cdot\sin(\theta)
$$

$$
\exp \left(i \frac{\pi}2\right) = \cos \left(\frac{\pi}2\right) + i\cdot\sin \left(\frac{\pi}2\right) = 0 + i = i
$$
:::

Aus [Korollar 2.7.29](#korollar-2-7-29) und [Beispiel 2.2.6](#beispiel-2-2-6) folgen

<center>

$\exp(1) = e$ und $\exp(n) = \exp(1 + \cdots + 1) = \exp(1)^n = e^n$
</center>

für alle $n\in\mathbb{N}$. Deswegen werden wir oft für $\exp(z)$ das Symbol $e^z$ verwenden.
