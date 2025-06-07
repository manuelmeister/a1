---
prev:
    text: Reelle und komplexe Zahlen
    link: /1-reelle-komplexe-zahlen
#next:
#    text: Number Theory
#    link: /4-number-theory
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

::: proposition SATZ 2.1.8.
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
= &~1 + (n+1)x \\
\end{aligned}
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

![Visualisierung zweier Intervalle](images/8114b034ec32e9e6c7db8f34a839fea4d8206e641bebe91d4974a40a458a256e.jpg)
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

Sei $\left( a _ { n } \right) _ { n \geqslant 1 }$ eine Folge in $\mathbf { R }$ oder $\mathbf { C }$ . Der Begriff der Konvergenz der Reihe

$$
\sum _ { k = 1 } ^ { \infty } a _ { k }
$$

Stutzt sich auf die Folge $\left( S _ { n } \right) _ { n \geqslant 1 }$ der Partialsummen:

$$
S _ { n } = \sum _ { k = 1 } ^ { n } a _ { k } .
$$

DEFINITION 2.7.1. Die Reihe

$\sum _ { k = 1 } ^ { \infty } a _ { k }$ ist konvergent, falls die Folge $\left( S _ { n } \right) _ { n \geqslant 1 }$ der Partialsummen konvergiert. In diesem Fall definieren wir:

$$
\sum _ { k = 1 } ^ { \infty } a _ { k } : = \operatorname* { l i m } _ { n \to \infty } S _ { n } .
$$

NoTArion. Von nun an bezeichnen wir den Absolutbetrag einer komplexen Zahl $z = x + i y$ mit $| z | = { \sqrt { x ^ { 2 } + y ^ { 2 } } }$

BEIspIEL 2.7.2 (Geometrische Reihe). Sei $q \in \mathbf { C }$ mit $| q | < 1$ . Dann konvergiert $\sum _ { k = 0 } ^ { \infty } q ^ { k }$ und dessen Wert ist:

$$
\sum _ { k = 0 } ^ { \infty } q ^ { k } = \frac { 1 } { 1 - q } .
$$

Sei $S _ { n } = \sum _ { k = 0 } ^ { n } q ^ { k } = 1 + q + \cdot \cdot \cdot + q ^ { n }$

$$
q \cdot S _ { n } = q + \cdot \cdot \cdot q ^ { n } + q ^ { n + 1 }
$$

woraus

$$
( 1 - q ) S _ { n } = 1 - q ^ { n + 1 }
$$

folgt. Es gilt also:

$$
S _ { n } = { \frac { 1 - q ^ { n + 1 } } { 1 - q } } .
$$

Nun zeigen wir die Konvergenz:

$$
\left| S _ { n } - { \frac { 1 } { 1 - q } } \right| = \left| { \frac { - q ^ { n + 1 } } { 1 - q } } \right| = { \frac { | q | ^ { n + 1 } } { | 1 - q | } }
$$

Aus Beispiel 2.2.3 und $0 \leqslant | q | < 1$ folgt

$$
\operatorname* { l i m } _ { n \to \infty } \left| S _ { n } - { \frac { 1 } { 1 - q } } \right| = \operatorname* { l i m } _ { n \to \infty } { \frac { \left| q \right| ^ { n + 1 } } { \left| 1 - q \right| } } = 0 .
$$

Somit konvergiert $\textstyle \left( S _ { n } \right) _ { n \geqslant 1 } { \mathrm { ~ g e g e n ~ } } { \frac { 1 } { 1 - q } } .$

BeispiEL 2.7.3 (Harmonische Reihe). Die Reihe

$$
\sum _ { n = 1 } ^ { \infty } { \frac { 1 } { n } }
$$

divergiert. (Siehe Beispiel 1.1.17(ii))

Analog zu Satz 2.1.8 fur Folgen erhalten wir:

$$
\begin{array} { r l } & { \mathrm { ~ r z ~ 2 . 7 . 4 . ~ } \operatorname { S e i e n } \displaystyle \sum _ { k = 1 } ^ { \infty } a _ { k } \quad u n d \ \sum _ { j = 1 } ^ { \infty } b _ { j } \quad k o n v e r g e n t , \ s o w i e \ \alpha \in \mathbb { C } . } \\ & { \rangle \ : D a n n \ i s t \ \displaystyle \sum _ { k = 1 } ^ { \infty } ( a _ { k } + b _ { k } ) \ k o n v e r g e n t \ u n d \ \displaystyle \sum _ { k = 1 } ^ { \infty } ( a _ { k } + b _ { k } ) = \left( \displaystyle \sum _ { k = 1 } ^ { \infty } a _ { k } \right) + \left( \displaystyle \sum _ { j = 1 } ^ { \infty } b _ { j } \right) . } \\ & { \Uparrow \ : D a n n \ i s t \ \displaystyle \sum _ { k = 1 } ^ { \infty } \alpha \cdot a _ { k } \quad k o n v e r g e n t \ u n d \ \displaystyle \sum _ { k = 1 } ^ { \infty } \alpha \cdot a _ { k } = \alpha \cdot \displaystyle \sum _ { k = 1 } ^ { \infty } a _ { k } . } \end{array}
$$

BeweIS. (1): Seien

$$
S _ { n } : = \sum _ { k = 1 } ^ { n } a _ { k } , \qquad U _ { n } : = \sum _ { j = 1 } ^ { n } b _ { j } , \qquad W _ { n } : = \sum _ { k = 1 } ^ { n } ( a _ { k } + b _ { k } ) .
$$

Dann ist

$$
W _ { n } = S _ { n } + U _ { n }
$$

woraus nach Satz 2.1.8

$$
\operatorname* { l i m } _ { n \to \infty } W _ { n } = \operatorname* { l i m } _ { n \to \infty } S _ { n } + \operatorname* { l i m } _ { n \to \infty } U _ { n }
$$

folgt, was die erste Aussage beweist..   
Der Beweis fur die zweite Aussage verlauft analog. Produkte von konvergierenden Reihen sind etwas schwieriger zu handhaben; wir werden Produkte im Fall von absolut konvergenten Reihen behandeln.   
Das Cauchy Kriterium fur Konvergenz von Folgen liefert ein sehr nutzliches Kriterium fur die Konvergenz von Reihen.

SATz 2.7.5 (Cauchy Kriterium). Die Reihe $\sum _ { k = 1 } ^ { \infty } a _ { k }$ ist genau dann konvergent, falls:

BeWeIS. Sei $S _ { n } : = \sum _ { k = 1 } ^ { n } a _ { k }$ . Dann folgt fur $m \geqslant n$ ..

$$
S _ { m } - S _ { n - 1 } = \sum _ { k = 1 } ^ { m } a _ { k } - \sum _ { k = 1 } ^ { n - 1 } a _ { k } = \sum _ { k = n } ^ { m } a _ { k } .
$$

Der Satz folgt dann aus dem Cauchy Kriterium fur Folgen. (Satz 2.4.2)

Reihen mit nichtnegativen Gliedern sind speziell einfach zu behandeln; auch spielen sie in der Theorie absolut konvergenter Reihen eine wichtige Rolle, deshalb behandeln wir sie zuerst.

Folgender Satz ist eine einfache Anwendung des Satzes von Weierstrass:

$$
\begin{array} { c } { { { \mathrm { S A T Z ~ 2 . 7 . 6 . ~ } \ : S e i \displaystyle \sum _ { k = 1 } ^ { \infty } a _ { k } \ : \ : e i n e \ : \ : R e i h e \ : \ : m i t \ : a _ { k } \geqslant 0 \quad \forall k \in \mathbf { N } ^ { * } . \ : D i e \ : R e i h e \ : \displaystyle \sum _ { k = 1 } ^ { \infty } a _ { k } \ : \ : k o n v e r g e \ : \ : \sum _ { k = 1 } ^ { \infty } a _ { k } \ : \ : k o n v e r g e r: } } } \\ { { { e n a u \ : d a n n , \ : f a l l s \ : d i e \ : F o l g e \ : \ : ( S _ { n } ) _ { n \geqslant 1 } , \ : S _ { n } = \displaystyle \sum _ { k = 1 } ^ { n } a _ { k } \ : \ : d e r \ : P a r t i a l s u m m e n \ : n a c h \ : o b e n \ : b e s c h m m a _ { k } , } } } \end{array}
$$

BEweIS.

$$
S _ { n + 1 } - S _ { n } = \sum _ { k = 1 } ^ { n + 1 } a _ { k } - \sum _ { k = 1 } ^ { n } a _ { k } = a _ { n + 1 } \geqslant 0 .
$$

Also ist $\left( S _ { n } \right) _ { n \geqslant 1 }$ monoton wachsend.

Falls $\left( S _ { n } \right) _ { n \geqslant 1 }$ nach oben beschrankt ist, folgt aus Weierstrass (Satz 2.2.2), dass die Folge konvergiert. Falls sie nicht nach oben beschrankt ist, kann sie nicht konvergieren.

Wir erhalten folgendes sehr nutzliche Korollar:

KOROLLAR 2.7.7 (Vergleichssatz). Seien $\sum _ { k = 1 } ^ { \infty } { a _ { k } } u n d \sum _ { k = 1 } ^ { \infty } { b _ { k } }$ Reihen mit:

$$
0 \leqslant a _ { k } \leqslant b _ { k } \qquad \forall k \geqslant 1 .
$$

Dann gelten:

$$
\begin{array} { c c l } { { \displaystyle \sum _ { k = 1 } ^ { \infty } b _ { k } } } & { { k o n v e r g e n t } } & { { \Longrightarrow } } & { { \displaystyle \sum _ { k = 1 } ^ { \infty } a _ { k } \ k o n v e r g e n t } } \\ { { \displaystyle \sum _ { k = 1 } ^ { \infty } a _ { k } } } & { { d i v e r g e n t } } & { { \Longrightarrow } } & { { \displaystyle \sum _ { k = 1 } ^ { \infty } b _ { k } \ d i v e r g e n t } } \end{array}
$$

Die Implikationen treffen auch zu, wenn es $K \geqslant 1$ gibt, so dass

$$
0 \leqslant a _ { k } \leqslant b _ { k } \qquad \forall k \geqslant K .
$$

BEISpIEL 2.7.8. $\sum _ { k = 1 } ^ { \infty } { \frac { 1 } { k ^ { 2 } } }$ konvergiert. Sei ak $a _ { k } = \frac { 1 } { k ^ { 2 } }$ $b _ { k } = { \frac { 1 } { ( k - 1 ) k } }$ k >1. Dann gilt $0 \leqslant a _ { k } \leqslant b _ { k }$ $k \geqslant 2$ und

$$
\begin{array} { l } { \displaystyle \sum _ { k = 2 } ^ { n } b _ { k } = \sum _ { k = 2 } ^ { n } \left( \frac { 1 } { k - 1 } - \frac { 1 } { k } \right) = \left( 1 - \frac { 1 } { 2 } \right) + \left( \frac { 1 } { 2 } - \frac { 1 } { 3 } \right) + \dots + \left( \frac { 1 } { n - 1 } - \frac { 1 } { n } \right) } \\ { \displaystyle \qquad = 1 - \frac { 1 } { n } < 1 \qquad \forall n \geqslant 1 . } \end{array}
$$

Die Behauptung folgt dann aus dem Vergleichssatz.

DEFINITION 2.7.9. Die Reihe $\sum _ { k = 1 } ^ { \infty } a _ { k }$ heisst absolut konvergent, falls

$$
\sum _ { k = 1 } ^ { \infty } \lvert a _ { k } \rvert
$$

konvergiert.

Eine Anwendung des Cauchy Kriterium liefert:

SATz 2.7.10. Eine absolut konvergente Reihe $\sum _ { k = 1 } ^ { \infty } a _ { k }$ ist auch konvergent und es gilt:

$$
\left| \sum _ { k = 1 } ^ { \infty } a _ { k } \right| \leqslant \sum _ { k = 1 } ^ { \infty } \bigl | a _ { k } \bigr |
$$

BEWeIS. Da $\sum _ { k = 1 } ^ { \infty } \left| a _ { k } \right|$ konvergiert, gilt nach Cauchy (Satz 2.7.5): $\forall \varepsilon > 0$ $\exists N \geqslant 1$ mit:

$$
\sum _ { k = n } ^ { m } \left| a _ { k } \right| < \varepsilon \qquad \forall m \geqslant n \geqslant N .
$$

Daraus folgt:

$$
\left| \sum _ { k = n } ^ { m } a _ { k } \right| \leqslant \sum _ { k = n } ^ { m } \left| a _ { k } \right| < \varepsilon
$$

woraus mit Satz 2.7.5 die Konvergenz von $\sum _ { k = 1 } ^ { \infty } a _ { k } \mathrm { f o l g t } .$

$S _ { n } = \sum _ { k = 1 } ^ { n } a _ { k }$ n Seien jetzt und Un = |ak|. k=1

Dann gilt

$$
\left| S _ { n } \right| = \left| \sum _ { k = 1 } ^ { n } a _ { k } \right| \leqslant \sum _ { k = 1 } ^ { n } \left| a _ { k } \right| = U _ { n }
$$

und folglich

$$
\left| \sum _ { k = 1 } ^ { \infty } a _ { k } \right| = \left| \operatorname* { l i m } _ { n \to \infty } S _ { n } \right| = \operatorname* { l i m } _ { n \to \infty } | S _ { n } | \leqslant \operatorname* { l i m } _ { n \to \infty } U _ { n } = \sum _ { k = 1 } ^ { \infty } | a _ { k } | ,
$$

wobei die Ungleichung aus Satz 2.1.8(4) folgt.

BEISPIEL 2.7.11.

$$
\sum _ { k = 1 } ^ { \infty } ( - 1 ) ^ { k + 1 } { \frac { 1 } { k } } = 1 - { \frac { 1 } { 2 } } + { \frac { 1 } { 3 } } - { \frac { 1 } { 4 } } + \cdot \cdot \cdot
$$

konvergiert, ist aber nicht absolut konvergent.

Dass die Reihe im Beispiel 2.7.11 konvergiert, ist ein Spezialfall eines allgemeinen Satzes:

SATz 2.7.12 (Leibniz 1682). Sei $\left( a _ { n } \right) _ { n \geqslant 1 }$ monoton fallend mit $a _ { n } \geqslant 0 \forall n \geqslant 1$ und $\operatorname* { l i m } _ { n \to \infty } a _ { n } = 0$ . Dann konvergiert

$$
S : = \sum _ { k = 1 } ^ { \infty } { { { \left( { - 1 } \right) } ^ { k + 1 } } } { { { a } _ { k } } }
$$

und es gilt:

$$
a _ { 1 } - a _ { 2 } \leqslant S \leqslant a _ { 1 }
$$

BeweIS. Sei $S _ { n } = \sum _ { k = 1 } ^ { n } { { { \left( { - 1 } \right) } ^ { k + 1 } } } a _ { k }$ . Die Idee des Beweises lasst sich bildich wie folgt darstellen:

![](images/2ecdcbed203611db9fdf28c3e6b69ca9e2e1cc416321c0f14d43c88827a39141.jpg)

Sei also

$$
\begin{array} { c } { { S _ { 2 n + 1 } = \underbrace { a _ { 1 } - a _ { 2 } + \dots + a _ { 2 n - 1 } } _ { \displaystyle \sum _ { S _ { 2 n - 1 } } } - a _ { 2 n } + a _ { 2 n + 1 } } } \\ { { S _ { 2 n - 1 } } } \\ { { \qquad = S _ { 2 n - 1 } - ( a _ { 2 n } - a _ { 2 n + 1 } ) \leqslant S _ { 2 n - 1 } . } } \\ { { S _ { 2 n } = \underbrace { a _ { 1 } - a _ { 2 } + \dots + a _ { 2 n - 2 } } _ { \displaystyle \sum _ { S _ { 2 n - 2 } } } + a _ { 2 n - 1 } - a _ { 2 n } } } \\ { { S _ { 2 n - 2 } } } \\ { { \qquad = S _ { 2 n - 2 } + ( a _ { 2 n - 1 } - a _ { 2 n } ) \geqslant S _ { 2 n - 2 } . } } \end{array}
$$

Die Folge $\left( S _ { 2 n - 1 } \right) _ { n \geqslant 1 }$ ist also monoton fallend und $\left( S _ { 2 n } \right) _ { n \geqslant 1 }$ ist monoton wachsend Aus

$$
S _ { 2 n } = S _ { 2 n - 1 } - a _ { 2 n }
$$

folgt

$$
S _ { 2 } \leqslant S _ { 2 n } \leqslant S _ { 2 n - 1 } \leqslant S _ { 1 } .
$$

Beide monotonen Folgen sind beschrankt, also existieren lim S2n und lim S2n-1-   
Aus $\left( * \right)$ und lim a2n = 0 folgt n>00

$$
\operatorname* { l i m } _ { n  \infty } S _ { 2 n } = \operatorname* { l i m } _ { n  \infty } S _ { 2 n - 1 } .
$$

Daraus folgt, dass $\left( S _ { m } \right) _ { m \geqslant 1 }$ mit gleichem Grenzwert konvergiert.

BeispiEL 2.7.13. Betrachten wir nochmals das Beispiel 2.7.11:

$$
{ \begin{array} { l } { \displaystyle { S = 1 - \frac { 1 } { 2 } + \frac { 1 } { 3 } - \frac { 1 } { 4 } + \frac { 1 } { 5 } - \frac { 1 } { 6 } + \cdots } } \\ { \displaystyle { \frac { 1 } { 2 } = 1 - \frac { 1 } { 2 } \leqslant S \leqslant 1 . } } \end{array} }
$$

Wir andern jetzt die Reihenfolge der Summanden wie folgt:

$$
\underbrace { \left( 1 - { \frac { 1 } { 2 } } \right) } _ { \frac { 1 } { 2 } } - { \frac { 1 } { 4 } } + \underbrace { \left( { \frac { 1 } { 3 } } - { \frac { 1 } { 6 } } \right) } _ { \frac { 1 } { 6 } } - { \frac { 1 } { 8 } } + \underbrace { \left( { \frac { 1 } { 5 } } - { \frac { 1 } { 1 0 } } \right) } _ { \frac { 1 } { 1 0 } } - { \frac { 1 } { 1 2 } } + \cdots
$$

und erhalten

$$
{ \frac { 1 } { 2 } } - { \frac { 1 } { 4 } } + { \frac { 1 } { 6 } } - { \frac { 1 } { 8 } } + { \frac { 1 } { 1 0 } } - { \frac { 1 } { 1 2 } } + \cdots = { \frac { 1 } { 2 } } \left( 1 - { \frac { 1 } { 2 } } + { \frac { 1 } { 3 } } - { \frac { 1 } { 5 } } + \cdots \right)
$$

Die umgeordnete Reihe konvergiert also mit Grenzwert ${ \frac { 1 } { 2 } } S$ -

Riemann (1854) hat sogar gezeigt, dass es fur jede reelle Zahl $A \in \mathbf { R }$ eine Umordnung obiger Reihe gibt, die gegen $A$ konvergiert! (ubung).

DeFINITIOn 2.7.14. Eine Reihe $\sum _ { n = 1 } ^ { \infty } a _ { n } ^ { \prime }$ ist eine Umordnung der Reihe $\sum _ { n = 1 } ^ { \infty } a _ { n }$ , falls es eine bijektive Abbildung

$$
\phi : \mathbf { N } ^ { * } \longrightarrow \mathbf { N } ^ { * }
$$

gibt, so dass

$$
a _ { n } ^ { \prime } = a _ { \phi ( n ) } .
$$

BEMERkunG 2.7.15. Aus Riemann folgt, dass es uiberabzahlbar viele Bijektionen von N\* gibt.

SATz 2.7.16 (Dirichlet 1837). Falls $\sum _ { n = 1 } ^ { \infty } a _ { n }$ absolut konvergiert, dann konvergiert jede Umordnung der Reihe und hat denselben Grenzwert.

Beweis. Wir wenden das Cauchy Kriterium auf die Reihe $\sum _ { n = 1 } ^ { \infty } \left| a _ { n } \right.$ an: $\forall \varepsilon > 0 \exists N \geqslant 1$ , so dass $\forall n \geqslant N$ und $k \geqslant 1$ ..

$$
| a _ { n + 1 } | + | a _ { n + 2 } | + \cdot \cdot \cdot + | a _ { n + k } | < \varepsilon .
$$

Sei $\phi : \mathbf { N } ^ { * } \longrightarrow \mathbf { N } ^ { * }$ eine Bijektion und

$$
S _ { m } ^ { \prime } = \sum _ { i = 1 } ^ { m } a _ { \phi ( i ) }
$$

die m-te Partialsumme der umgeordneten Reihe..

Da $\phi$ surjektiv ist, konnen wir $M \geqslant N$ wahlen, so dass:

$$
\{ 1 , 2 , \ldots , N \} \subset \{ \phi ( 1 ) , \phi ( 2 ) , \ldots , \phi ( M ) \} .
$$

Dann folgt $\forall m \geqslant M$ .

$$
\{ 1 , 2 , \ldots , N \} \subset \{ \phi ( 1 ) , \phi ( 2 ) , \ldots , \phi ( m ) \}
$$

und

$$
\{ 1 , 2 , \ldots , N \} \subset \{ 1 , 2 , \ldots , m \} .
$$

Fur $k \geqslant 1$ , so dass $m \leqslant N + k$ und max{(1),...,\$(m)}  N + k folgt:

$$
| S _ { m } ^ { \prime } - S _ { m } | \leqslant | a _ { N + 1 } | + \cdots + | a _ { N + k } | < \varepsilon .
$$

Folglich gilt $\operatorname* { l i m } _ { n  \infty } ( S _ { m } ^ { \prime } - S _ { m } ) = 0$ und somit

$$
\operatorname* { l i m } _ { n \to \infty } S _ { m } ^ { \prime } = \operatorname* { l i m } _ { n \to \infty } S _ { m } + \operatorname* { l i m } _ { n \to \infty } \left( S _ { m } ^ { \prime } - S _ { m } \right) = \operatorname* { l i m } _ { n \to \infty } S _ { m }
$$

UBunG. Wo haben wir absolute Konvergenz benutzt?.

Wir werden jetzt hinreichende Bedingungen fur absolute Konvergenz herleiten. Es handelt sich dabei um das Quotientenkriterium und das Wurzelkriterium. Beide benutzen den Vergleichssatz (Korollar 2.7.7) und die Konvergenzbedingung fur die geometrische Reihe (Beispiel 2.7.2).

SATz 2.7.17 (Quotientenkriterium, Cauchy 1821). Sei $\left( a _ { n } \right) _ { n \geqslant 1 }$ mit $a _ { n } \neq 0 \forall n \geqslant 1$ . Falls $\operatorname* { l i m } _ { n \to \infty } { \frac { | a _ { n + 1 } | } { | a _ { n } | } } < 1$ dann konvergiert die Reihe $\sum _ { n = 1 } ^ { \infty } a _ { n }$ absolut. Falls $\operatorname* { l i m } _ { n \to \infty } { \frac { | a _ { n + 1 } | } { | a _ { n } | } } > 1$ divergiert die Reihe

BeweIS. Sei

$$
c _ { n } = \operatorname* { s u p } \left\{ \frac { \left| a _ { k + 1 } \right| } { \left| a _ { k } \right| } : k \geqslant n \right\} .
$$

Die Annahme ist, dass

$$
\left\{ { \frac { \left| a _ { k + 1 } \right| } { \left| a _ { k } \right| } } : k \geqslant 1 \right\}
$$

beschrankt ist. Dann ist $\left( c _ { n } \right) _ { n \geqslant 1 }$ monoton fallend und

$$
\operatorname* { l i m } _ { n \to \infty } \operatorname* { s u p } _ { | a _ { n } | } { \frac { | a _ { n + 1 } | } { | a _ { n } | } } = \operatorname* { l i m } _ { n \to \infty } c _ { n } .
$$

Sei $0 < q < 1$ mit:

$$
\operatorname* { l i m } _ { n \to \infty } c _ { n } < q < 1 .
$$

Sei $N \geqslant 1$ , so dass

$$
\begin{array} { r } { c _ { N } \leqslant q < 1 . } \end{array}
$$

Dann folgt $\forall k \geqslant N$ , dass

$$
{ \frac { | a _ { k + 1 } | } { | a _ { k } | } } \leqslant q
$$

woraus $| a _ { k + 1 } | \leqslant q | a _ { k } |$ folgt, und somit fur $j \geqslant 1$ ..

$$
\left| a _ { N + j } \right| \leqslant q { \left| a _ { N + j - 1 } \right| } \leqslant \cdots \leqslant q ^ { j } { \left| a _ { N } \right| } = q ^ { N + j } { \frac { \left| a _ { N } \right| } { q ^ { N } } } .
$$

Wir haben also gezeigt, dass $\forall n \geqslant N + 1$ ..

$$
\left| a _ { n } \right| \leqslant q ^ { n } { \frac { \left| a _ { N } \right| } { q ^ { N } } } .
$$

Die erste Aussage des Satzes folgt dann vom Vergleichssatz (2.7.7), angewendet auf die geometrische Reihe (2.7.2).

Ein analoges Argument zeigt, dass wenn

$$
\operatorname* { l i m } _ { m \to \infty } { \frac { | a _ { m + 1 } | } { | a _ { m } | } } > 1
$$

die Folge $\left( \left| a _ { m } \right| \right) _ { m \geqslant 1 }$ unbeschrankt ist. Also konnen weder $\sum _ { m = 1 } ^ { \infty } a _ { m }$ noch $\sum _ { m = 1 } ^ { \infty } \left| a _ { m } \right|$ konvergieren.

BeIspIEL 2.7.18 (Die Exponentialfunktion). Fur $z \in \mathbf { C }$ betrachte die Reihe

$$
1 + z + { \frac { z ^ { 2 } } { 2 ! } } + { \frac { z ^ { 3 } } { 3 ! } } + \cdot \cdot \cdot
$$

mit allgemeinem Glied

$$
a _ { n } = { \frac { z ^ { n } } { n ! } } .
$$

Dann folgt fur $z \neq 0$

$$
{ \frac { | a _ { n + 1 } | } { | a _ { n } | } } = \left| { \frac { z ^ { n + 1 } } { ( n + 1 ) ! } } { \frac { n ! } { z ^ { n } } } \right| = { \frac { | z | } { n + 1 } }
$$

Also gilt $\operatorname* { l i m } _ { n \to \infty } { \frac { | a _ { n + 1 } | } { | a _ { n } | } } = 0$ und die Reihe konvergiert fur alle $z \in \mathbf { C }$

Wir definieren die Exponentialfunktion:

$$
\exp \left( z \right) : = 1 + z + { \frac { z ^ { 2 } } { 2 ! } } + { \frac { z ^ { 3 } } { 3 ! } } + \cdot \cdot \cdot
$$

BEMERkunG 2.7.19. Das Quotientenkriterium versagt, wenn zum Beispiel unendlich viele Glieder $\boldsymbol { a } _ { n }$ der Reihe verschwinden.

SATz 2.7.20 (Wurzelkriterium, Cauchy 1821).

(1) Falls

$$
\operatorname* { l i m } _ { n \to \infty } { \sqrt [ { n } ] { | a _ { n } | } } < 1
$$

dann konvergiert $\sum _ { n = 1 } ^ { \infty } a _ { n }$ absolut.

(2) Falls

$$
\begin{array} { c } { { \displaystyle \operatorname* { l i m } _ { n \to \infty } \operatorname* { s u p } _ { 0 } ^ { n } \sqrt { \left| a _ { n } \right| } > 1 } } \\ { { \displaystyle \sum _ { = 1 } ^ { \infty } a _ { n } u n d \sum _ { n = 1 } ^ { \infty } \left| a _ { n } \right| . } } \end{array}
$$

BEWeIS. (1) S ${ \mathrm { ~ a i ~ } } \ c _ { n } : = \operatorname* { s u p } \left\{ { \sqrt [ k ] { \left| a _ { k } \right| } } : k \geqslant n \right\}$ und 0<q<1 mit

$$
\operatorname* { l i m } _ { n \to \infty } c _ { n } = \operatorname* { l i m } _ { n \to \infty } \operatorname* { s u p } _ { } \sqrt [ n ] { | a _ { n } | } < q < 1 .
$$

Dann gibt es $N \geqslant 1$ mit

$$
c _ { N } = \operatorname* { s u p } \Big \{ \sqrt [ k ] { | a _ { k } | } : k \geqslant N \Big \} \leqslant q ,
$$

woraus

$$
| a _ { k } | \leqslant q ^ { k } \qquad \forall k \geqslant N
$$

folgt. Die Aussage folgt dann aus dem Vergleichssatz (2.7.7), angewendet auf die geometrische Reihe (2.7.2).

(2) Ein analoges Argument zeigt, dass $\left| a _ { n } \right| \geqslant 1$ fur unendlich viele $n$ , falls

$$
\operatorname* { l i m } \operatorname* { s u p } { \sqrt [ n ] { | a _ { n } | } } > 1 .
$$

Eine wichtige Klasse von Funktionen in der Analysis wird durch konvergente Potenzreihen' definiert.

Sei $\left( c _ { k } \right) _ { k \geqslant 0 }$ eine Folge (in $\mathbf { R }$ oder $\mathbf { C }$ ). Falls lim sup $\sqrt [ k ] { \left| c _ { k } \right| }$ existiert, definieren wir k>00

$$
\rho = { \{ \begin{array} { l l } { + \infty } & { { \mathrm { f a l l s ~ } } \operatorname* { l i m } _ { k  \infty } { \sqrt [ { k } ] { | c _ { k } | } } = 0 } \\ { \displaystyle { \frac { 1 } { \operatorname* { l i m } _ { k  \infty } { \sqrt [ { k } ] { | c _ { k } | } } } } } & { { \mathrm { f a l l s ~ } } \operatorname* { l i m s u p } _ { k  \infty } { \sqrt [ { k } ] { | c _ { k } | } } > 0 } \end{array}  }
$$

KOROLLAR 2.7.21. Die Potenzreihe

$$
\sum _ { k = 0 } ^ { \infty } c _ { k } z ^ { k }
$$

konvergiert absolut fir alle $| z | < \rho$ und divergiert fir alle $| z | > \rho$ -.

BeweIS. Sei $a _ { n } : = c _ { n } z ^ { n }$ . Dann ist ${ \sqrt [ n ] { | a _ { n } | } } = { \sqrt [ n ] { | c _ { n } | } } | z |$ . Also:

$$
\operatorname* { l i m } _ { n \to \infty } \operatorname* { s u p } _ { } { \sqrt [ n ] { \left| a _ { n } \right| } } = \operatorname* { l i m } _ { n \to \infty } \operatorname* { s u p } _ { } ^ { n } { \sqrt { \left| c _ { n } \right| } } | z |
$$

und die Aussage folgt aus dem Wurzelkriterium (Satz 2.7.20).

Die Zeta Funktion. Sei $s > 1$ und

$$
\zeta ( s ) = \sum _ { n = 1 } ^ { \infty } { \frac { 1 } { n ^ { s } } }
$$

Wir wissen zum Beispiel, dass

$$
\sum _ { n = 1 } ^ { \infty } { \frac { 1 } { n ^ { 2 } } }
$$

konvergiert.

- Quotientenkriterium: ${ \frac { n ^ { 2 } } { ( n + 1 ) ^ { 2 } } } = \left( { \frac { n } { n + 1 } } \right) ^ { 2 } \longrightarrow 1$ -Wurzelkriterium: $\sqrt [ n ] { n ^ { 2 } } ^ { - 1 } = \left( \sqrt [ n ] { n } \right) ^ { - 2 } \longrightarrow 1$ (siehe Beispiel 2.2.5).

Weder Quotientenkriterium noch Wurzelkriterium erlauben auf die Konvergenz von $^ { ( * ) }$ zu schliessen.

Behauptung: fur $s > 1$ konvergiert die obige Reihe.

$$
\begin{array} { r l } & { S _ { 2 ^ { k } } = 1 + \cfrac { 1 } { 2 ^ { s } } + \cfrac { 1 } { \underline { { \mathfrak { I } } } ^ { s } } + \cfrac { 1 } { \underline { { \mathfrak { I } } } ^ { s } } + \cfrac { 1 } { \underline { { \mathfrak { I } } } ^ { s } } + \cfrac { 1 } { 6 ^ { s } } + \cfrac { 1 } { \overline { { \mathfrak { I } } } ^ { s } } + \cfrac { 1 } { \underline { { \mathfrak { I } } } ^ { s } } + \cfrac { 1 } { \underline { { \mathfrak { I } } } ^ { s } } + \cfrac { 1 } { \underline { { \mathfrak { I } } } ^ { s } } + \dots + \cfrac { 1 } { 1 6 ^ { s } } + \dots } \\ & { \qquad \leqslant \frac { 2 } { 2 ^ { s } } } \\ & { \qquad + 1 + \cfrac { 1 } { 2 ^ { s } } + \cfrac { 1 } { 2 ^ { s - 1 } } + \cfrac { 1 } { 4 ^ { s - 1 } } + \cfrac { 1 } { 8 ^ { s - 1 } } + \dots } \\ & { \qquad = 1 + \cfrac { 1 } { 2 ^ { s } } + \cfrac { 1 } { 2 ^ { s - 1 } } + \cfrac { 1 } { \left( 2 ^ { s - 1 } \right) ^ { 2 } } + \cfrac { 1 } { \left( 2 ^ { s - 1 } \right) ^ { 3 } } + \dots } \end{array}
$$

Da $s - 1 > 0$ folgt $2 ^ { s - 1 } > 1$ und

$$
{ \frac { 1 } { 2 ^ { s - 1 } } } < 1 .
$$

Die Konvergenz folgt dann vom Vergleichssatz (2.7.7), angewendet auf die geometrisch Reihe (2.7.2).

Doppelte Summation. Betrachten wir:

$$
{ \begin{array} { l l l l l l l l } { a _ { 0 0 } } & { + } & { a _ { 0 1 } } & { + } & { a _ { 0 2 } } & { + } & { \cdots } & { = } & { S _ { 0 } } \\ & { ~ + } & { ~ + } & { ~ \cdot } & { ~ \cdot } & { ~ \cdot } & { ~ \cdot } \\ { a _ { 1 0 } } & { + } & { a _ { 1 1 } } & { + } & { a _ { 1 2 } } & { + } & { \cdots } & { = } & { S _ { 1 } } \\ { ~ + } & { ~ + } & { ~ \cdot } & { ~ + } & { ~ \cdot } & { ~ \cdot } & { ~ \cdot } \\ { a _ { 2 0 } } & { + } & { a _ { 2 1 } } & { + } & { a _ { 2 2 } } & { + } & { \cdots } & { = } & { S _ { 2 } } \\ { ~ + } & { ~ + } & { ~ + } & { ~ + } & { ~ \cdot } & { ~ \cdot } & { ~ \cdot } \\ { ~ \vdots } & { ~ \vdots } & { ~ \vdots } & & & { ~ \vdots } \\ { = } & { ~ - } & { ~ \vdots } & { ~ \vdots } & & & { ~ \cdot } \\ { b _ { 0 } } & { + } & { b _ { 1 } } & { + } & { b _ { 2 } } & { + } & { \cdots } & { = } & { { \mathfrak { T } } { \mathfrak { T } } } \end{array} }
$$

BEISPIEL.

$$
{ \begin{array} { l l l l l l l l l } { 1 } & { - } & { 1 } & { + } & { 0 } & { + } & { 0 } & { + } & { \cdots } & { = } & { 0 } \\ { + } & { ~ + } & { ~ + } & { ~ + } & { ~ + } & { ~ } & { ~ } & { ~ + } \\ { 0 } & { + } & { 1 } & { - } & { 1 } & { + } & { ~ 0 } & { + } & { \cdots } & { = } & { ~ 0 } \\ { + } & { ~ + } & { ~ + } & { ~ + } & { ~ + } & { ~ } & { ~ } & { ~ + } & { ~ } \\ { 0 } & { + } & { 0 } & { + } & { 1 } & { - } & { 1 } & { + } & { \cdots } & { = } & { ~ 0 } \\ { + } & { ~ + } & { ~ + } & { ~ + } & { ~ } & { + } & { ~ } & { ~ } & { ~ + } & { ~ } \\ { \vdots } & { ~ \vdots } & { ~ \vdots } & { ~ \vdots } & { ~ \vdots } & { ~ } & { ~ \vdots } & { ~ } \\ { = } & { ~ = } & { ~ = } & { ~ 0 } & { = } & { ~ } & { ~ } & { ~ = 0 } \\ { ~ 1 } & { + } & { ~ 0 } & { + } & { ~ 0 } & { + } & { \cdots } & { ~ - 1 } & { \left[ ~ { \frac { \displaystyle 1 } { \displaystyle { \mathcal { F } } } } \right] } \end{array} }
$$

Gegeben eine Doppelfolge $\left( a _ { i j } \right) _ { i , j \geqslant 0 }$ . Dann konnen

$$
\sum _ { i = 0 } ^ { \infty } \left( \sum _ { j = 0 } ^ { \infty } a _ { i j } \right) = S _ { 0 } + S _ { 1 } + S _ { 2 } + \cdot \cdot \cdot
$$

und

$$
\sum _ { j = 0 } ^ { \infty } \left( \sum _ { i = 0 } ^ { \infty } a _ { i j } \right) = b _ { 0 } + b _ { 1 } + b _ { 2 } + \cdot \cdot \cdot
$$

beide konvergent sein mit verschiedenen Grenzwerten.   
Wir nennen $\sum _ { i , j \geqslant 0 } a _ { i j }$ eine Doppelreihe.

DEFINITION 2.7.22. $\sum _ { k = 0 } ^ { \infty } b _ { k }$ ist eine lineare Anordnung der Doppelreihe $\sum _ { i , j \geqslant 0 } a _ { i j } ,$ falls es eine Bijektion $\sigma : \bf N \longrightarrow \bf N \times \bf N$ gibt, mit $b _ { k } = a _ { \sigma ( k ) }$ -:

SATz 2.7.23 (Cauchy 1821). Wir nehmen an, dass es $B \geqslant 0$ gibt, so dass

$$
\sum _ { i = 0 } ^ { m } \sum _ { j = 0 } ^ { m } \lvert a _ { i j } \rvert \leqslant B \qquad \forall m \geqslant 0 .
$$

Dann konvergieren die folgenden Reihen absolut:

$$
S _ { i } : = \sum _ { j = 0 } ^ { \infty } a _ { i j } \qquad \forall i \geqslant 0 \quad u n d \quad U _ { j } : = \sum _ { i = 0 } ^ { \infty } a _ { i j } \qquad \forall j \geqslant 0
$$

sowie

$$
\sum _ { i = 0 } ^ { \infty } S _ { i } u n d \sum _ { j = 0 } ^ { \infty } U _ { j }
$$

und es gilt:

$$
\sum _ { i = 0 } ^ { \infty } S _ { i } = \sum _ { j = 0 } ^ { \infty } U _ { j }
$$

Zudem konvergiert jede lineare Anordnung der Doppelreihe absolut, mit selbem Grenzwert.

BeweIS. Sei $b _ { 0 } + b _ { 1 } + b _ { 2 } + \cdot \cdot \cdot$ eine lineare Anordnung der obigen Doppelreihe. Fur. jedes $n \geqslant 0$ gibt es $m \geqslant 0$ , so dass:

$$
\left\{ b _ { 0 } , \dots , b _ { n } \right\} \subset \left\{ a _ { i j } : \begin{array} { l } { { 0 \leqslant i \leqslant m } } \\ { { 0 \leqslant j \leqslant m } } \end{array} \right\}
$$

woraus

$$
\sum _ { i = 0 } ^ { n } \lvert b _ { i } \rvert \leqslant \sum _ { i = 0 } ^ { m } \sum _ { j = 0 } ^ { m } \lvert a _ { i j } \rvert \leqslant B
$$

folgt. Daraus folgt, dass die Reihe $\sum _ { i = 0 } ^ { \infty } b _ { i }$ absolut konvergiert.

Dasselbe Argument liefert auch, dass die Reihen

$$
S _ { i } : = \sum _ { j = 0 } ^ { \infty } a _ { i j } \quad { \mathrm { ~ u n d ~ } } \quad U _ { j } : = \sum _ { i = 0 } ^ { \infty } a _ { i j }
$$

absolut konvergieren.

Wir wenden jetzt das Cauchy Kriterium an auf die absolut konvergente Reihe $\sum _ { i = 0 } ^ { \infty } b _ { i } :$

Ve>0 3N>0 Vn>N Vk>1:

$$
| b _ { n + 1 } | + \cdot \cdot \cdot + | b _ { n + k } | < \varepsilon .
$$

Fur ein gegebenes $\varepsilon > 0$ und entsprechendes $N \geqslant 0$ wahlen wir ein $M \geqslant 0$ , so dass alle

$$
b _ { 0 } , b _ { 1 } , \dotsc , b _ { N }
$$

im "Quadranten"

$$
a _ { i j } , 0 \leqslant i \leqslant M , 0 \leqslant j \leqslant M
$$

vorkommen:

![](images/67d57c028d4491307bee34fa0fd9062e2921a5ab76e11888b4b2122d3de1628d.jpg)

Mit dieser Wahl sind die Terme

$$
b _ { 0 } , \dots , b _ { N }
$$

prasent in der Summe

$$
\sum _ { i = 0 } ^ { l } b _ { i } \quad \mathrm { f i r } \quad l \geqslant N ,
$$

sowie in

$$
\sum _ { i = 0 } ^ { m } \sum _ { j = 0 } ^ { n } a _ { i j } \quad { \mathrm { f i r } } \quad m \geqslant M , n \geqslant M .
$$

Es folgt:

$$
\left| \sum _ { i = 0 } ^ { m } \sum _ { j = 0 } ^ { n } a _ { i j } - \sum _ { i = 0 } ^ { l } b _ { i } \right| \leqslant \left| b _ { N + 1 } \right| + \cdot \cdot \cdot + \left| b _ { N + k } \right| < \varepsilon
$$

fur ein genugend grosses $k \geqslant 1$

Daraus folgt mit $S : = \sum _ { i = 0 } ^ { \infty } b _ { i } !$ --

sowie

$$
\begin{array} { l } { \displaystyle \left. \sum _ { i = 0 } ^ { m } S _ { i } - S \right. < \varepsilon } \\ { \displaystyle \left. \sum _ { j = 0 } ^ { n } U _ { j } - S \right. < \varepsilon } \end{array}
$$

woraus

$$
\sum _ { i = 0 } ^ { \infty } S _ { i } = S = \sum _ { j = 0 } ^ { \infty } U _ { j }
$$

folgt.

Wir konnen jetzt das Cauchy Produkt zweier Reihen behandeln. Falls wir das Produkt von

$$
\sum _ { i = 0 } ^ { \infty } a _ { i } \quad { \mathrm { m i t } } \quad \sum _ { j = 0 } ^ { \infty } b _ { j }
$$

berechnen wollen, mussen wir eine Art finden, die Eintrage der Matrix

$$
\begin{array} { c c c c c } { { a _ { 0 } b _ { 0 } } } & { { a _ { 0 } b _ { 1 } } } & { { a _ { 0 } b _ { 2 } } } & { { a _ { 0 } b _ { 3 } } } & { { \ldots } } \\ { { a _ { 1 } b _ { 0 } } } & { { a _ { 1 } b _ { 1 } } } & { { a _ { 1 } b _ { 2 } } } & { { a _ { 1 } b _ { 3 } } } & { { \ldots } } \\ { { a _ { 2 } b _ { 0 } } } & { { a _ { 2 } b _ { 1 } } } & { { a _ { 2 } b _ { 2 } } } & { { a _ { 2 } b _ { 3 } } } & { { \ldots } } \\ { { a _ { 3 } b _ { 0 } } } & { { a _ { 3 } b _ { 1 } } } & { { \ddots } } & { { } } & { { } } \\ { { \vdots } } & { { \vdots } } & { { } } & { { \ddots } } & { { } } \end{array}
$$

zu summieren.

DeFINITIon 2.7.24. Das Cauchy Produkt der Reihen

$$
\sum _ { i = 0 } ^ { \infty } a _ { i } , \sum _ { j = 0 } ^ { \infty } b _ { j }
$$

ist die Reihe

$$
\sum _ { n = 0 } ^ { \infty } \left( \sum _ { j = 0 } ^ { n } a _ { n - j } b _ { j } \right) = a _ { 0 } b _ { 0 } + ( a _ { 0 } b _ { 1 } + a _ { 1 } b _ { 0 } ) + ( a _ { 0 } b _ { 2 } + a _ { 1 } b _ { 1 } + a _ { 2 } b _ { 0 } ) + \cdot \cdot \cdot
$$

UBunG 2.7.25. Zeige, dass das Cauchy Produkt der Reihe

$$
1 - { \frac { 1 } { \sqrt { 2 } } } + { \frac { 1 } { \sqrt { 3 } } } - { \frac { 1 } { \sqrt { 4 } } } + \cdot \cdot \cdot
$$

mit sich selbst divergiert.

Losungsskizze:

$$
a _ { n } = { \frac { ( - 1 ) ^ { n } } { \sqrt { n + 1 } } }
$$

$$
\left| \sum _ { j = 0 } ^ { n } a _ { n - j } a _ { j } \right| = \left| \sum _ { j = 0 } ^ { n } { \frac { \left( - 1 \right) ^ { n - j } \left( - 1 \right) ^ { j } } { \sqrt { n - j + 1 } { \sqrt { j + 1 } } } } \right| = \sum _ { j = 0 } ^ { n } { \frac { 1 } { \sqrt { { \big ( } n - j + 1 { \big ) } ( j + 1 { \big ) } } } }
$$

Da

$$
( n + 1 - j ) ( j + 1 ) \leqslant \left( n + 1 \right) ^ { 2 }
$$

folgt

$$
\sum _ { j = 0 } ^ { n } { \frac { 1 } { \sqrt { ( n + 1 - j ) ( j + 1 ) } } } \geqslant { \frac { n + 1 } { n + 1 } } = 1 .
$$

SATz 2.7.26. Falls die Reihen

$$
\sum _ { i = 0 } ^ { \infty } a _ { i } \ : , \quad \sum _ { j = 0 } ^ { \infty } b _ { j }
$$

absolut konvergieren, so konvergiert ihr Cauchy Produkt und es gilt.

$$
\sum _ { n = 0 } ^ { \infty } \left( \sum _ { j = 0 } ^ { n } a _ { n - j } b _ { j } \right) = \left( \sum _ { i = 0 } ^ { \infty } a _ { i } \right) \left( \sum _ { j = 0 } ^ { \infty } b _ { j } \right)
$$

Beweis. Direkte Anwendung von Satz 2.7.23.

ANWENDUNG 2.7.27.

$$
\forall z , w \in \mathbf { C } : \exp ( w + z ) = \exp ( w ) \exp ( z )
$$

Wir berechnen das Cauchy Produkt der Reihen:

$$
\sum _ { i = 0 } ^ { \infty } \frac { w ^ { i } } { i ! } , \quad \sum _ { j = 0 } ^ { \infty } \frac { z ^ { j } } { j ! }
$$

Dies ist:

$$
\sum _ { n = 0 } ^ { \infty } \left( \sum _ { j = 0 } ^ { n } \frac { w ^ { n - j } } { ( n - j ) ! } \frac { z ^ { j } } { j ! } \right)
$$

Nun ist

$$
\sum _ { j = 0 } ^ { n } { \frac { w ^ { n - j } } { ( n - j ) ! } } { \frac { z ^ { j } } { j ! } } = { \frac { 1 } { n ! } } \sum _ { j = 0 } ^ { n } { \binom { n } { j } } w ^ { n - j } z ^ { j } = { \frac { ( w + z ) ^ { n } } { n ! } }
$$

woraus die Behauptung folgt.

Zum Abschluss behandeln wir noch das Problem, ob man Summation und Limes vertauschen kann. In diesem Zusammenhang wird es nutzlich sein, eine Folge in $\mathbf { R }$ als eine Funktion

$$
f : \mathbf { N } \longrightarrow \mathbf { R }
$$

aufzufassen.

SATZ 2.7.28. Sei $f _ { n } : \mathbf { N } \longrightarrow \mathbf { R }$ eine Folge. Wir nehmen an, dass: (1) $f ( j ) : = \operatorname* { l i m } _ { n \to \infty } f _ { n } ( j )$ existiert $\forall j \in \mathbf { N }$ - (2) Es gibt eine Funktion $g : \mathbf { N } \longrightarrow [ 0 , \infty [$ , so dass 2.1|fn(j)|<g(j) $\forall j \geqslant 0 , \forall n \geqslant 0$ -. 0 2.2 g(j) konvergiert. j=0

Dann folgt:

$$
\sum _ { j = 0 } ^ { \infty } f ( j ) = \operatorname* { l i m } _ { n \to \infty } \sum _ { j = 0 } ^ { \infty } f _ { n } ( j ) .
$$

KOROLLAR 2.7.29. Fur jedes $z \in \mathbf { C }$ konvergiert die Folge $\left( \left( 1 + { \frac { z } { n } } \right) ^ { n } \right) _ { n \geq 1 }$ und

$$
\operatorname* { l i m } _ { n  \infty } ( 1 + { \frac { z } { n } } ) ^ { n } = \exp ( z ) .
$$

BEWeIS.

$$
{ \begin{array} { r l } { \displaystyle \left( 1 + { \frac { z } { n } } \right) ^ { n } = \sum _ { k = 0 } ^ { n } { \binom { n } { k } } 1 ^ { n - k } \left( { \frac { z } { n } } \right) ^ { k } = \sum _ { k = 0 } ^ { n } { \frac { n ! } { k ! ( n - k ) ! } } { \frac { 1 } { n ^ { k } } } z ^ { k } } & { } \\ { = \displaystyle \sum _ { k = 0 } ^ { n } { \frac { z ^ { k } } { k ! } } { \frac { n ! } { ( n - k ) ! n ^ { k } } } } & { } \end{array} }
$$

Nun ist

$$
{ \frac { n ! } { ( n - k ) ! n ^ { k } } } = { \frac { n ( n - 1 ) \cdot \cdot \cdot ( n - k + 1 ) } { n ^ { k } } } = 1 \left( 1 - { \frac { 1 } { n } } \right) \left( 1 - { \frac { 2 } { n } } \right) \cdot \cdot \cdot \left( 1 - { \frac { k - 1 } { n } } \right) .
$$

Sei also:

$$
f _ { n } ( k ) = \left\{ \begin{array} { l l } { \displaystyle \frac { z ^ { k } } { k ! } \frac { n ! } { ( n - k ) ! n ^ { k } } \quad } & { 0 \leqslant k \leqslant n } \\ { \displaystyle 0 \quad } & { k \geqslant n + 1 . } \end{array} \right.
$$

Fur jedes $k \geqslant 0$ folgt aus $^ { ( * ) }$

$$
\operatorname* { l i m } _ { n \to \infty } f _ { n } ( k ) = \frac { z ^ { k } } { k ! } = f ( k ) .
$$

Zudem:

$$
| f _ { n } ( k ) | \leqslant \frac { | z | ^ { k } } { k ! } = g ( k )
$$

Und wir hatten schon gezeigt, dass

$$
\sum _ { k = 0 } ^ { \infty } g ( k ) = \sum _ { k = 0 } ^ { \infty } { \frac { | z | ^ { k } } { k ! } }
$$

konvergiert. Das Korollar folgt dann aus Satz 2.7.28.

Aus Korollar 2.7.29 und Beispiel 2.2.6 folgen

$$
\exp ( 1 ) = e { \mathrm { ~ ~ u n d ~ } } \exp ( n ) = \exp ( 1 + \cdot \cdot \cdot + 1 ) = \exp ( 1 ) ^ { n } = e ^ { n }
$$

fur alle $n \in \mathbf { N }$ . Deswegen werden wir oft fur $\exp ( z )$ die Notation $e ^ { z }$ verwenden.
