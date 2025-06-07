---
next: 
  link: /2-folgen-reihen
  text: Folgen und Reihen
#prev: 
#  link: /intro
#  text: Introduction and Motivation
---

# <small>Kapitel 1:</small><br> Reelle Zahlen, Euklidische Räume, Komplexe Zahlen

## 1.1. Der Körper der reellen Zahlen

Sei $\mathbb{N} = \{0, 1, 2, \dots\}$ die Menge der natürlichen Zahlen. Natürliche Zahlen kann man addieren und multiplizieren. Dagegen hat die Gleichung $x + 1 = 0$ in $\mathbb{N}$ keine Lösung. Dieses Problem löst man, indem man die Menge der ganzen Zahlen einführt:

$$
\mathbb{Z} = \{\dots, -2, -1, 0, 1, 2, \dots\}.
$$

Die Gleichung $2x = 1$ hat in $\mathbb Z$ keine Lösung. Man erweitert deswegen $\mathbb{Z}$ zur Menge der rationalen Zahlen

$$
\mathbb{Q} = \left\{ \frac{p}{q} ~\middle|~ p, q \in \mathbb{Z},\; q \neq 0 \right\}.
$$

Jede rationale Zahl $r \in Q, r \neq 0$ besitzt dann eine eindeutige Darstellung $r = \frac{p}{q}$ mit <br> $q > 0$, $p$ und $q$ teilerfremd.

Die Menge der rationalen Zahlen genügt bei weitem nicht, um die elementarsten geometrischen Probleme zu lösen:

<table><tbody>
<tr><td><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="20 10 200 200" width="200" height="200">
  <line x1="50"  y1="150" x2="150" y2="150" stroke="currentColor" stroke-width="2"></line>
  <line x1="150" y1="150" x2="150" y2="50"  stroke="currentColor" stroke-width="2"></line> 
  <line x1="50"  y1="150" x2="150" y2="50"  stroke="currentColor" stroke-width="2"></line>
<rect x="140" y="140" width="10" height="10"
fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="145" cy="145" r="2" fill="currentColor"></circle>
<text x="100" y="170" font-size="16" text-anchor="middle">a = 1</text>
<text x="160" y="105" font-size="16" text-anchor="start">b = 1</text>
<text x="90" y="95" font-size="16" text-anchor="middle">c</text>
</svg></td><td>

$c^2 = a^2 + b^2 = 2$ hat keine Lösung in $\mathbb{Q}$.

</td></tr>
<tr><td><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 200 200 200" width="200" height="200">
  <defs>
    <marker id="arrowhead" markerWidth="6" markerHeight="7"
            refX="6" refY="3.5" orient="auto">
      <path d="M 0 0 L 6 3.5 L 0 7"
            fill="none"
            stroke="currentColor"
            stroke-width="1"></path>
    </marker>
  </defs>

<circle cx="100" cy="300" r="50" stroke="currentColor" stroke-width="2" fill="none"></circle>

<line x1="100" y1="300" x2="150" y2="300"
stroke="currentColor" stroke-width="2"
marker-end="url(#arrowhead)"></line>
<text x="125" y="295" font-size="16" text-anchor="middle">1</text>
</svg></td><td>

Kreisumfang $L = 2\pi \notin \mathbb{Q}$.

</td></tr></tbody></table>

::: proposition Satz 1.1.1 (Lindemann 1882).
Es gibt keine Gleichung der Form

$$
x^n + a_{n-1}x^{n-1} + \cdots + a_0 = 0
$$

mit $a_i \in Q$, so dass $x = \pi$ eine Lösung ist.
:::

Wir werden später beweisen, dass $\sqrt{2}$ und $\pi$ reelle Zahlen sind; für $e$ siehe [Abschnitt 3.9](#).

Die Menge $\mathbb{R}$ der reellen Zahlen entsteht durch einen Vervollständigungsprozess von $\mathbb Q$, den wir überspringen. Wir nehmen $\mathbb R$ als gegeben an und beschreiben dessen grundlegende Eigenschaften.

Die Menge $\mathbb{R}$ ist mit zwei Operationen versehen: <br>Addition $\mathbb{R} \times ℝ \stackrel{+}{\longrightarrow} ℝ$ und <br>Multiplikation $\mathbb{R} \times ℝ
 \stackrel{\cdot}{\longrightarrow}ℝ$ sowie einer <br>Ordnungsrelation $≤$
für welche gilt:

::: proposition Satz 1.1.2.
$\mathbb{R}$ ist ein kommutativer, angeordneter Körper, der ordnungsvollständig ist.
:::

Wir werden jetzt diese Eigenschaften im Detail besprechen. Es gibt zwei ausgezeichnete Elemente $0, 1 \in R$ mit $0 \neq 1$.

### Axiome der Addition
| Axiom | Bezeichnung         | Formel                                                             |
|:-----:|:--------------------|:-------------------------------------------------------------------|
|  A1   | Assoziativität      | $x + (y + z) = (x + y) + z \qquad \forall x,y,z \in \mathbb{R}$         |
|  A2   | Neutrales Element   | $x + 0 = x \qquad \forall x \in \mathbb{R}$                             |
|  A3   | Inverses Element    | $\forall x \in \mathbb{R}\;\exists\,y \in \mathbb{R}:\;x + y = 0$  |
|  A4   | Kommutativität      | $x + z = z + x \qquad \forall x,z \in \mathbb{R}$                       |

::: proposition Bemerkung 1.1.3.
In A3 ist $y$ eindeutig bestimmt und wird mit $-x$ bezeichnet.
:::

### Axiome der Multiplikation
| Axiom | Bezeichnung         | Formel                                                                           |
|:-----:|:--------------------|:---------------------------------------------------------------------------------|
| M1    | Assoziativität      | $x \cdot (y \cdot z) = (x \cdot y) \cdot z \qquad \forall x,y,z \in \mathbb{R}$  |
| M2    | Neutrales Element   | $x \cdot 1 = x \qquad \forall x \in \mathbb{R}$                                     |
| M3    | Inverses Element    | $\forall x \in \mathbb{R},\;x \neq 0\;\exists\,y \in \mathbb{R}:\;x \cdot y = 1$ |
| M4    | Kommutativität      | $x \cdot z = z \cdot x \qquad \forall x,z \in \mathbb{R}$                            |

::: proposition Bemerkung 1.1.4.
In M3 ist $y$ eindeutig bestimmt und wird mit $x^{-1}$ bezeichnet.
:::

### Distributivität
| Axiom | Bezeichnung      | Formel                                  |
|:-----:|:-----------------|:----------------------------------------|
|   D   | Distributivität  | $x \cdot (y + z) = x \cdot y + x \cdot z \qquad \forall x,y,z \in \mathbb{R}$ |

### Ordnungsaxiome
| Axiom | Bezeichnung      | Aussage                                  |
|:-----:|:-----------------|:-----------------------------------------|
| O1    | Reflexivität     | $x \le x$                              | $\forall x \in \mathbb{R}$ |
| O2    | Transitivität    | Falls $x \le y$ und $y \le z \implies x \le z$. |                             |
| O3    | Antisymmetrie    | Falls $x \le y$ und $y \le x \implies x = y$.  |                             |
| O4    | Totalität        | $\forall x,y \in \mathbb{R}$ gilt entweder $x \le y$ oder $y \le x$. | |

Die Ordnung ist mit den Körperaxiomen kompatibel:

### Kompatibilität
| Axiom | Aussage                                                         |
|:-----:|:----------------------------------------------------------------|
| K1    | $\forall x,y,z \in \mathbb{R}:\;x \le y \;\Longrightarrow\;x + z \le y + z$ |
| K2    | $\forall x \ge 0,\;\forall y \ge 0:\;x \cdot y \ge 0$          |

::: proposition Bemerkung 1.1.5.
Die Menge $\mathbb Q$ der rationalen Zahlen, versehen mit Addition, Multiplikation und der Ordnung $≤$, genügt den obigen Axiomen.
:::

Was $\mathbb R$ von $\mathbb Q$ unterscheidet, ist die Ordnungsvollständigkeit (V):

### Ordnungsvollständigkeit
::: proposition Ordnungsvollständigkeitsaxiom (V)
Seien $A, B$ Teilmengen von $R$, so dass

1. $A \neq \emptyset$, $B \neq \emptyset$,

2. Für alle $a \in A$ und $b \in B$ gilt: $a ≤ b$.
{.lower-roman}

Dann gibt es $c \in ℝ$, so dass $\forall a \in A: a≤c$ und $\forall b \in B: c≤b$.
:::

Wir betrachten jetzt einige Folgerungen obiger Axiome:

::: proposition Korollar 1.1.6. {#korollar-1-1-6}
1. Eindeutigkeit des additiven und multiplikativen Inversen.
2. Für alle $x \in R$: $0 \cdot x = 0$.
3. Für alle $x \in R$: $(-1) \cdot x = -x$, insbesondere $(-1)^2 = 1$.
4. Für alle $y \in R$: $y > 0 \iff (-y) < 0$.
5. Für alle $y \in R$: $y^2 > 0$, insbesondere $1 = 1\cdot 1 > 0$.
6. Für alle $x, y, u, v \in R$: Falls $x < y$ und $u < v$, dann $x + u < y + v$.
7. Für alle $x, y, u, v \in R$: Falls $0 < x < y$ und $0 < u < v$, dann $xu < yv$.

**Beweis:**

(1) Übung.

(2)
$$
\begin{aligned}
0 + 0 &= 0 && (A2)\\
(0 + 0)\cdot x &= 0 \cdot x  \forall\,x \in \mathbb{R}\\
\underbrace{0\cdot x + 0\cdot x}_{(0 + 0)\cdot x} &= 0 \cdot x && (D)\\
\underbrace{(0\cdot x + 0\cdot x)}_{(0 + 0)\cdot x} + \bigl(-\,0\cdot x\bigr)
&= 0\cdot x + \bigl(-\,0\cdot x\bigr) \;=\; 0 \phantom{\,} && (A3)\\
0\cdot x \;+\; \underbrace{\bigl(0\cdot x + (-\,0\cdot x)\bigr)}_{=\,0}
&= 0 && (A1)\\
0\cdot x + 0 &= 0 && (A3)\\
0\cdot x &= 0 && (A2)
\end{aligned}
\$$

(3)

$$
\begin{aligned}
x + (-1)\cdot x
&= 1 \cdot x + (-1)\cdot x
= (1 + (-1))\cdot x
&& (D)\\
&= 0 \cdot x = 0
&& (2)\\[1ex]
x + (-1)\cdot x &= 0
\;\Longrightarrow\; (-1)\cdot x = -x
\end{aligned}
$$

(4)
$$
\begin{aligned}
y \ge 0
\;&\Longrightarrow\;
\underbrace{y + (-y)}_{0} \;\ge\; 0 + (-y)
&\Longleftrightarrow\; 0 \ge -y
\qquad (K2)
\end{aligned}
$$

(5)<br>
Falls $y \ge 0$, so folgt aus **K2**:
$y^2 = y \cdot y \ge 0 \cdot 0 = 0$.

Falls $y \le 0$, folgt aus (4):
$-y \ge 0$ und somit $(-y)^2 \ge 0$.

Unter Benützung von (3) folgt dann:
$$0 \le (-y)^2 = (-y),(-y) = (-1),y,(-1),y = (-1)^2,y^2 = y^2$$

(6) Übung.

(7) Übung.
<span class="right">$\Box$</span>
:::

Folgende Folgerung zeichnen wir speziell aus:

::: proposition Korollar 1.1.7. (Archimedisches Prinzip)
Sei $x \in ℝ$ mit $x > 0$ und $y \in ℝ$. Dann gibt es $n \in ℕ$ mit $y < n x$.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 100">

  <line x1="30" y1="50" x2="470" y2="50" stroke="currentcolor" stroke-width="2"></line>
  <line x1="50" y1="45" x2="50" y2="55" stroke="currentcolor" stroke-width="2"></line>
  <text x="50" y="70" text-anchor="middle">0</text>
  <line x1="150" y1="45" x2="150" y2="55" stroke="currentcolor" stroke-width="2"></line>
  <text x="150" y="70" text-anchor="middle">x</text>

  <line x1="250" y1="45" x2="250" y2="55" stroke="currentcolor" stroke-width="2"></line>
  <text x="250" y="70" text-anchor="middle">2x</text>
  <line x1="350" y1="45" x2="350" y2="55" stroke="currentcolor" stroke-width="2"></line>
  <text x="350" y="70" text-anchor="middle">3x</text>
  <line x1="450" y1="45" x2="450" y2="55" stroke="currentcolor" stroke-width="2"></line>
  <text x="450" y="70" text-anchor="middle">4x</text>
  <line x1="365" y1="40" x2="365" y2="60" stroke="red" stroke-width="3"></line>
  <text x="365" y="30" text-anchor="middle" fill="currentcolor">y</text>

</svg>


**Beweis:** 

Sei $r = y x^{-1}$. Es bleibt zu zeigen: $\exists n \in ℕ$ mit $r < n$.
Beweis durch Widerspruch. <br>
Annahme: $\forall m \in ℕ$ gilt: $m \le r$. 

Sei $A = ℕ$ und $B = \{\, y \in ℝ : m ≤ y \quad\forall m \in ℕ \}\,.$

Dann gilt $r \in B$, und aus **(V)** folgt:

$\exists c \in ℝ$ mit: $\quad$(i) $\; m \le c \quad\forall m \in ℕ$,$\qquad$ (ii)$\; c \le y \quad\forall y \in B$.

(i)  $\implies m + 1 \le c \quad\forall m \in N$<br>
$\implies m ≤ c - 1 \quad\forall m \in N$<br>
$\implies c-1 \in B$. 

(ii) $\implies c≤c-1 \iff 1 ≤ 0$, ein Widerspruch. Daher ist die Annahme falsch. <span class="right">$\Box$</span>
:::

Ordnungsvollständigkeit sowie das Archimedische Prinzip nutzen wir jetzt, um folgende grundlegende Eigenschaft von $\mathbb R$ zu zeigen:

::: proposition Satz 1.1.8.
Für jedes $t > 0$, $t \in R$ hat die Gleichung $x^2 = t$ eine Lösung in $R$.

**Bemerkung:**<br> Für $t > 0$ gibt es genau eine Lösung von $x^2 = t$ mit $x > 0$. Sie wird mit $\sqrt{t}$ bezeichnet.

**Beweis:**<br> Für $t = 0$ ist die Aussage klar. Sei also $t > 0$. Wir definieren:

$$
A = \{\, y \in R : y \ge 0,\; y^2 \le t \}, \qquad B = \{\, z \in R : z > 0,\; z^2 \ge t \}.
$$

Wir möchten das Ordnungsvollständigkeitsaxiom **(V)** auf $A$ und $B$ anwenden. Wir müssen zeigen, dass die Voraussetzungen **V(i)** und **V(ii)** erfüllt sind:

- Zu **V(i)**: $A \neq \emptyset$, denn $0 \in A$.<br>
$B \neq \emptyset$: Sei nach Archimedes $n \in ℕ$ mit $n ≥ 1$ und $n ≥ t$. Aus **K2** _(Kompatibilität)_ angewendet auf $n ≥ 1$ und $n ≥ t$ folgt $n^2 ≥ t$. Somit $n \in B$.

- Zu **V(ii)**: Für alle $y \in A$ und $z \in B$ gilt: $y^2 ≤ t ≤ z^2$. Insbesondere:

    $$
    (z - y)(z + y) = z^2 - y^2 \ge 0.
    $$

    Aus $z + y ≥ z ≥ 0$ und **K2** folgt $z - y ≥ 0$, und $A$ und $B$ erfüllen also **V(ii)**.

Nach **(V)** gibt es $c \in ℝ$ mit:

$$
y \le c \le z \quad \forall y \in A, \; \forall z \in B.
$$

Mehrfache Anwendung von [Korollar 1.1.6(7)](#korollar-1-1-6) ergibt $y^2 \le c^2 \le z^2$.
Wir zeigen nun, dass $c^2 ≥ t$ und $c^2 ≤ t$, woraus dann $c^2 = t$ folgen wird.

**Fall 1: Annahme $c^2 ≥ t$.** Insbesondere $c \in A$. Da $t - c^2 > 0$ und $2c + 1 ≥ 1 ≥ 0$ gibt es nach Archimedes $n \in ℕ****$, $n > 1$ mit

$$
2c + 1 \le n ( t - c^2 ).
$$

Mit dieser Wahl von $n$ folgt:

$$
\begin{aligned}
\left( c + \frac{1}{n} \right)^2 &= c^2 + 2c \cdot \frac{1}{n} + \frac{1}{n^2} \\
&\le c^2 + 2c \cdot \frac{1}{n} + \frac{1}{n} \\
&= c^2 + (2c + 1) \cdot \frac{1}{n} \\
&\le c^2 + t - c^2 = t.
\end{aligned}
$$

Dies zeigt, dass $c + \frac{1}{n} \in A$. Andererseits gilt: Für alle $y \in A$ ist $y \le c$, insbesondere $c + \frac{1}{n} \le c$ ist unmöglich, da $\frac{1}{n} > 0$. Widerspruch.

**Fall 2: Annahme $c^2 ≤ t$.** Analog. Damit folgt $c^2 = t$.
<span class="right">$\Box$</span>
:::

Mit der Ordnungsrelation führen wir folgende Begriffe ein:

::: definition Definition 1.1.9.
Seien $x, y \in ℝ$:
1. $max\{x, y\} = \begin{cases}x, \quad x ≥ y, \\ y,\quad x ≤ y\end{cases}$
2. $min\{x, y\} = \begin{cases}x, \quad x ≤ y, \\ y,\quad x ≥ y\end{cases}$
3. $|x| \qquad\quad~ = max\{x,-x\}$,<br> _Absolutbetrag einer Zahl $x\in\mathbb{R}$_
{.lower-roman}
:::

Für den Absolutbetrag gelten dann folgende Eigenschaften:
::: proposition Satz 1.1.10.
1. $|x| \ge 0 \quad ∀x\in ℝ$
2. $|xy| = |x|\,|y| \quad ∀x,y\in ℝ$
3. $|x + y| \le |x| + |y| \quad ∀x,y\in ℝ$<br> _Dreiecksungleichung_
4. $|x+y|≥ \left||x|-|y|\right| \quad ∀x,y\in ℝ$<br> _Dreiecksungleichung, umgekehrt_
{.lower-roman}

**Beweis:** Übung
:::

::: proposition Satz 1.1.11. (Young'sche Ungleichung)
Sei $\varepsilon > 0$ und $\forall x, y \in ℝ$. Dann gilt:

$$
2|xy| \le \varepsilon x^2 + \frac{1}{\varepsilon}y^2.
$$

**Beweis:**<br> Es gilt: 
$$
\begin{aligned}
0 ≤ \displaystyle\left( \sqrt{\varepsilon}|x| - \frac{1}{\sqrt{\varepsilon}}|y| \right)^2 \quad&=\quad \varepsilon |x|^2 - 2|x||y| + \frac{1}{\varepsilon}|y|^2\\
\displaystyle\implies\qquad 2|x||y| \quad&≤\quad \varepsilon |x|^2 + \frac{1}{\varepsilon}|y|^2
\end{aligned}
$$

Nun ist $|x|^2 = x^2$, $|x|\,|y| = |xy|$, $|y|^2 = y^2$ und der Satz ist bewiesen. <span class="right">$\Box$</span>
:::

Wir führen noch zwei weitere Symbole ein:

<center>

$-\infty\quad$ und $\quad+\infty$
</center>


mit der Konvention


$$
-\infty < x < +\infty \quad \forall x \in \mathbb{R}.
$$

Ein Intervall ist dann eine Teilmenge von $\mathbb{R}$ von der Form:

1. Für $a ≤ b$ in $\mathbb{R}$:

$$
\begin{aligned}
\left[a, b\right] &= \{x \in R : a ≤ x ≤ b \}, \\
[a, b) &= \{x \in R : a ≤ x < b \}, \\
(a, b] &= \{x \in R : a < x ≤ b \}, \\
(a, b) &= \{x \in R : a < x < b \}.
\end{aligned}
$$

2. Für $a \in R$:

$$
\begin{aligned}
\left[a, +\infty\right) &= \{ x \in R : a ≤ x \}, \\
(a, +\infty) &= \{ x \in R : a < x \}, \\
(-\infty, a] &= \{ x \in R : x ≤ a \}, \\
(-\infty, a) &= \{ x \in R : x < a \}.
\end{aligned}
$$

3.
$$
(-\infty, +\infty) = ℝ.
$$


::: definition Definition 1.1.12.{#definition-1-1-12}
Sei $A \subseteq ℝ$ eine Teilmenge.

1. Ein $c \in ℝ$ heißt eine **obere Schranke** von $A$, falls $a \le c$ für alle $a \in A$.<br> Die Menge $A$ heißt **nach oben beschränkt**, falls es eine obere Schranke von $A$ gibt.

2. Ein $c \in ℝ$ heißt eine **untere Schranke** von $A$, falls $c \le a$ für alle $a \in A$.<br> Die Menge $A$ heißt **nach unten beschränkt**, falls es eine untere Schranke von $A$ gibt.

3. Ein Element $M \in ℝ$ heißt ein **Maximum** von $A$,<br> falls $M \in A$ und $M$ ist eine obere Schranke von $A$.

4. Ein Element $m \in ℝ$ heißt ein **Minimum** von $A$,<br> falls $m \in A$ und $m$ ist eine untere Schranke von $A$.
{.lower-roman}
:::

::: example Beispiel 1.1.13.
Sei $A = (-\infty, 2) = \{ x \in ℝ : x < 2 \}$.

**Behauptung:** Die Menge $M$ der oberen Schranken ist $M = [2, +\infty) = \{ x \in ℝ : x ≥ 2 \}$.

Jedes $c \in [2, +\infty)$ erfüllt per Definition $c ≥ 2$ und ist also eine obere Schranke von $(-\infty, 2)$.

Sei nun $c < 2$.

$$
\begin{array}{c c c c c c c}
&| & &| & & | & \\[-1cm]
\hline &| & &| & & | & \\[1pt]
&c &\quad &\displaystyle\frac{c+2}{2} &\quad &2
\end{array}
$$

Dann ist $\frac{c+2}{2} \in (-\infty, 2]$ und aus $c < \frac{c+2}{2}$ folgt, dass $c$ nicht obere Schranke von $(-\infty, 2)$ sein kann.
:::

::: definition Notation Maximum und Minimum
Falls $A$ ein **Maximum** (resp. **Minimum**) besitzt, wird es mit $\max A$ (resp. $\min A$) bezeichnet.
:::

::: example Beispiel 1.1.14.
1. Für $A = (-\infty, 2)$:<br> $A$ ist nach oben beschränkt, besitzt aber kein Maximum, da mit $c\in A$, $c < \frac{c + 2}{2} \in A$ folgt, dass keine obere Schranke von $A$ in $A$ enthalten ist. Die Menge der oberen Schranken von $A$ ist $M = [2, +\infty)$. Sie besitzt ein Minimum: $\min M = 2$.

2. Für $B = (-\infty, 2]$:<br> $B$ ist nach oben beschränkt und besitzt zudem ein Maximum: $\max B = 2$. Die Menge der oberen Schranken von $B$ ist $M = [2, +\infty)$. Sie besitzt ein Minimum: $\min M = 2$.

3. Für $C = (1,+\infty)$:<br> $C$ ist nach unten beschränkt aber nicht nach oben. 1 ist eine untere Schranke von $C$, aber nicht das Minimum, da $1 \notin C$. $C$ besitzt kein min! Das heisst, es gibt kein $m\in C$ so dass $\forall c\in C, m≤c$.<br>
  **Beweis:**<br>
  Sei $b \in C$, dann $\frac{1+b}{2} \in C$ und $\frac{1+b}{2} < b$. Da $b$ ein beliebiges Element von $C$ ist, folgt dass kein Element von $C$ ein Minimum von $C$ sein kann. <span class="right">$\Box$</span>

{.lower-roman}
:::

In den ersten zwei Fällen besitzt also die Menge der oberen Schranken ein Minimum. Dies ist ein allgemeines Phänomen:

::: proposition Satz 1.1.15.{#satz-1-1-15}
 Sei $A \subseteq R$, $A \neq \emptyset$.

1. Sei $A$ nach oben beschränkt. Dann gibt es eine _kleinste_ obere Schranke von $A$:
  
  
    $$
    c := \sup A
    $$
    
    genannt das **Supremum** von $A$.

2. Sei $A$ nach unten beschränkt. Dann gibt es eine _größte_ untere Schranke von $A$:
  
  
    $$
    d := \inf A,
    $$
    
    genannt das **Infimum** von $A$.

{.lower-roman}

**Beweis:**

1. Sei $B$ die Menge der oberen Schranken von $A$. Da $A$ nach oben beschränkt ist, ist $B \neq \emptyset$. Da $A \neq \emptyset$ und $\forall a\in A, \forall b\in B : a≤b$ gilt, erfüllen $A$ und $B$ die Voraussetzungen des Ordnungsvollständigkeitsaxioms **(V)**. Es gibt also ein $c \in ℝ$ mit:
  
    $$
    a \le c \le b \quad \forall a \in A, \forall b \in B.
    $$
    
    Aus der ersten Ungleichung folgt $c \in B$, und aus der zweiten Ungleichung folgt, dass $c$ die kleinste obere Schranke von $A$ ist. Mit anderen Worten, die Menge $B$ der oberen Schranken von $A$ besitzt ein Minimum. Dieses Minimum ist also das Supremum $\sup A \in B$ von $A$.

2. Analog. <span class="right">$\Box$</span>
{.lower-roman}
:::

Aus Satz 1.1.15 folgt:

- Sei $A \subseteq ℝ$ nach oben beschränkt. Dann stimmt die Menge der oberen Schranken von $A$ mit dem Intervall $[\sup A, +\infty)$ überein.
- Sei $A \subseteq ℝ$ nach unten beschränkt. Dann stimmt die Menge der unteren Schranken von $A$ mit dem Intervall $(-\infty, \inf A]$ überein.

::: proposition Korollar 1.1.16.{#korollar-1-1-16}
Seien $A \subseteq B \subseteq ℝ$ Teilmengen von $ℝ$.

1. Falls $B$ nach oben beschränkt ist, folgt $\sup A \le \sup B$.
2. Falls $B$ nach unten beschränkt ist, folgt $\inf B \le \inf A$.
:::

::: example Beispiel 1.1.17.{#beispiel-1-1-17}

1. $A = [1, 2]$: Dann ist $\sup A = 2$ und $\inf A = 1$.
2. $A = \{1, 1 + \frac12, 1 + \frac12 + \frac14, 1 + \frac12 + \frac14 + \frac18, \dots\}$ ist nicht nach oben beschränkt.<br>
    **Idee**: 
    $$
   \begin{alignat*}{2}
   &1 + \frac{1}{2}
   & &+\underbrace{\bigl(\frac{1}{3} + \frac{1}{4}\bigr)}_{>\,\bigl(\frac{1}{4} + \frac{1}{4}\bigr)}
   & &+\underbrace{\bigl(\frac{1}{5} + \frac{1}{6} + \frac{1}{7} + \frac{1}{8}\bigr)}_{>\,\bigl(\frac{1}{8} + \frac{1}{8} + \frac{1}{8} + \frac{1}{8}\bigr)} 
   & &+\underbrace{\bigl(\frac{1}{9} + \cdots + \frac{1}{16}\bigr)}_{>\,\bigl(\frac{1}{16} + \cdots + \frac{1}{16}\bigr)}
   & &+\cdots \\[1ex]
   \\> &1 + \frac{1}{2}
   & &+\frac{1}{2}
   & &+\frac{1}{2}
   & &+\frac{1}{2}
   & &+\cdots
   \;\longrightarrow\;\infty
   \end{alignat*}
    $$
3. $A = \{1-\frac{1}{3}, (1-\frac{1}{3}) + (\frac{1}{5} - \frac{1}{7}), (1-\frac{1}{3}) + (\frac{1}{5} - \frac{1}{7}) + (\frac{1}{9} - \frac{1}{11}), \cdots\}$<br>
  Dann gilt: $\sup A = \frac{\pi}{4}$ (Leibniz)
{.lower-roman}
:::

::: definition Konvention beschränkte Mengen
Falls $A$ nicht nach oben beschränkt ist (resp. nicht nach unten beschränkt), definieren wir

$$
sup A = +\infty \quad (\text{resp. } \inf A = -\infty).
$$
:::

### Kardinalität
::: definition Definition 1.1.18.{#definition-1-1-18}

1. Zwei Mengen $X, Y$ heißen **gleichmächtig**, falls es eine Bijektion $f: X \to Y$ gibt.

2. Eine Menge $X$ ist **endlich**, falls entweder $X = \emptyset$ oder ein $n \in ℕ$ existiert, sodass $X$ und $\{1,2,\dots,n\}$ gleichmächtig sind. Im ersten Fall ist die Kardinalität von $X$, $|X| = 0$, und im zweiten Fall $|X| = n$.

3. Eine Menge $X$ ist **abzählbar**, falls sie endlich oder gleichmächtig wie $\mathbb N$ ist.
{.lower-roman}
:::

::: example Beispiel 1.1.19.

1. $\mathbb{Z}$ und $\mathbb{Q}$ sind abzählbar.

2. Sei $A \subseteq ℕ$ nicht endlich. Dann sind $A$ und $\mathbb N$ gleichmächtig.<br>
  **Beweisidee:** <br>Definiere rekursiv: $a_0 := \min A$, $a_n := \min \bigl(A \setminus \{a_0, \dots, a_{n-1}\}\bigr)$, $n≥1$.
  Dann ist die Abbildung $\begin{cases}
ℕ \longrightarrow A \\
n \longmapsto a_n
\end{cases}$ eine Bijektion.

3. Sei $\mathbb{N}^* = \{1,2,3,\dots\}$.<br> Dann ist $\mathbb{N}^* \times \mathbb{N}^*$ abzählbar (und $\mathbb{N} \times \mathbb{N}$, $\mathbb{Z} \times \mathbb{Z}$ sind es auch).<br>
  Die Abbildung $\begin{cases}
N^* \times N^* &\longrightarrow N^* \\
(a, b) &\longmapsto 2^a \cdot 3^b
\end{cases}$ ist injektiv; <br>also ist $\mathbb{N}^* \times \mathbb{N}^*$ gleichmächtig wie eine unendliche Teilmenge von $\mathbb{N}$ und daher gleichmächtig wie $\mathbb{N}$.
{.lower-roman}
:::

In Kapitel 2 beweisen wir dann:

::: proposition Satz 1.1.20. (Cantor){#satz-1-1-20}
$\mathbb{R}$ ist nicht abzählbar.
:::


## 1.2. Der Euklidische Raum

Sei $n ≥ 1$ und

$$
\mathbb{R}^n = \{(x_1, \dots, x_n) : x_j \in \mathbb{R} ; \forall j \}
$$

das $n$-fache kartesische Produkt von $\mathbb R$. Seien $x = (x_1, \dots, x_n)$, $y = (y_1, \dots, y_n)$ und $\alpha \in ℝ$. Dann definieren wir:

$$
x + y := (x_1 + y_1, \dots, x_n + y_n), \qquad \alpha \cdot x := (\alpha x_1, \dots, \alpha x_n).
$$

In der linearen Algebra wurde gezeigt, dass $R^n$ bezüglich der Operationen

$$
\begin{align*}
R^n \times R^n &\longrightarrow R^n, \qquad &R \times R^n &\longrightarrow R^n,\\ 
(x, y) &\longmapsto x + y \qquad & (\alpha, x) &\longmapsto \alpha \cdot x
\end{align*}
$$

einen $\mathbb R$-Vektorraum bildet.

Das **Skalarprodukt** zweier Vektoren $x, y \in ℝ^n$ ist durch

$$
\langle x, y \rangle := \sum_{j=1}^n x_j y_j
$$

definiert. Folgende Eigenschaften gelten dann:

1. $\langle x, y \rangle = \langle y, x \rangle$ für alle $x, y \in ℝ^n$ (symmetrisch).
2. $\langle \alpha_1 x_1 + \alpha_2 x_2, y \rangle = \alpha_1 \langle x_1, y \rangle + \alpha_2 \langle x_2, y \rangle$ für alle $\alpha_1, \alpha_2 \in ℝ$, $x_1, x_2, y \in ℝ^n$ (bilinear).
3. $\langle x, x \rangle = \sum_{j=1}^n x_j^2 \ge 0$, mit Gleichheit genau dann, wenn $x = 0$ (positiv definit).

Die **Norm** des Vektors $x$ ist $\|x\| = \sqrt{\langle x, x \rangle}$.

::: proposition Satz 1.2.1. (Cauchy-Schwarz){#satz-1-2-1}
$$
|\langle x, y \rangle| \le \|x\| \cdot \|y\| \quad \forall x, y \in ℝ^n.
$$
:::


Außerdem gelten für die Norm noch folgende Aussagen:

::: proposition Satz 1.2.2.
1. $\|x\| \ge 0$ für alle $x \in ℝ^n$, mit Gleichheit genau dann, wenn $x = 0$.
2. $\|\alpha x\| = |\alpha| \cdot \|x\|$ $\quad\forall\alpha \in ℝ$, $\forall x \in ℝ^n$.
3. $\|x + y\| \le \|x\| + \|y\|$ $\quad\forall x, y \in ℝ^n$.

**Beweis zu 3:**<br>

$$
\begin{aligned}
\|x + y\|^2 &= \langle x + y, x + y \rangle \\
&= \langle x, x \rangle + \langle x, y \rangle + \langle y, x \rangle + \langle y, y \rangle \\
&= \langle x, x \rangle + 2\langle x, y \rangle + \langle y, y \rangle
\end{aligned}
$$

Nun ist aber:
$$
2\langle x, y \rangle ≤ 2|\langle x, y\rangle| ≤ 2\|x\|\|y\|
$$

Woraus folgt:
$$
\|x + y\|^2 ≤ \|x\|^2 + 2\|x\|\|y\| + \|y\|^2 = (\|x\| + \|y\|)^2.
$$
Somit folgt $\|x + y\| ≤ \|x\| + \|y\|$. <span class="right">$\Box$</span>
:::

Das **Kreuzprodukt** zwischen zwei Vektoren $a, b \in ℝ^3$ ist definiert durch

$$
\begin{aligned}
\times : R^3 \times R^3 &\longrightarrow R^3 \\ (a, b) &\longmapsto a \times b = (a_2 b_3 - a_3 b_2, a_3 b_1 - a_1 b_3, a_1 b_2 - a_2 b_1).
\end{aligned}
$$


$a, b$ und $a \times b$ bilden ein Rechtssystem. Es gilt: $\|a \times b\|$ ist der Flächeninhalt des von $a, b$ aufgespannten Parallelogramms.

Das Kreuzprodukt hat folgende Eigenschaften: $\forall a, b, c \in ℝ^3$:

1. $(a + b) \times c = a \times c + b \times c$ (Distributivität).
2. $a \times b = - (b \times a)$ (Antisymmetrie).
3. $a \times (b \times c) + c \times (a \times b) + b \times (c \times a) = 0$ (Jacobi-Identität).

$R^3$, versehen mit $+$ und $\times$, ist dann ein Beispiel einer interessanten Struktur, die nicht alle Körperaxiome erfüllt.


## 1.3. Komplexe Zahlen

Auf $\mathbb{R}^2$ definieren wir folgende Multiplikation:

$$
(x_1, y_1) \cdot (x_2, y_2) = (x_1 x_2 - y_1 y_2,~ x_1 y_2 + x_2 y_1).
$$

Dann gilt insbesondere:

$$
(0, 0) • (x, y) = (0, 0), \qquad (1, 0) • (x, y) = (x, y).
$$

Falls $(x, y) ≠ (0, 0): (x,y)•(\frac{x}{x^2+y^2}, \frac{-y}{x^2+y^2}) = (1,0)$

::: proposition Satz 1.3.1.{#satz-1-3-1}
$\mathbb{R}^2$, versehen mit der Addition der Vektoren $+$ und der obig definierten Multiplikation $•$, ist ein kommutativer Körper mit Einselement $(1, 0)$ und Nullelement $(0, 0)$.
:::

$\mathbb{R}^2, +, •$ wird **Körper der komplexen Zahlen** genannt und wird mit $\mathbb{C}$ bezeichnet.

Die Abbildung $\begin{cases}
\mathbb{R} \longrightarrow \mathbb{R}^2, \\
x \longmapsto (x, 0)
\end{cases}$ respektiert die Körperoperationen.

Mittels dieser Abbildung identifizieren wir $\mathbb{R}$ mit einem Unterkörper von $\mathbb{C}$.
Sei $i = (0, 1)$. Dann besitzt jedes Element $z \in \mathbb{C}$ eine eindeutige Darstellung

$$
z = x + y \cdot i \quad \text{mit } x, y \in ℝ.
$$


Bemerke:

$$
i^2 = (0, 1) \bullet (0, 1) = (-1, 0) = -(1, 0).
$$

Zusammen mit dem Distributivgesetz erhält man:

$$
\begin{aligned}
z_1 z_2
&= (x_1 + y_1 i)\cdot(x_2 + y_2 i) \\[0.5ex]
&= x_1 x_2 \;+\; x_1 y_2\,i \;+\; y_1 i\,x_2 \;+\; y_1 i\,y_2\,i \\[0.5ex]
&= x_1 x_2 \;+\; (x_1 y_2 + y_1 x_2)\,i \;+\; y_1 y_2\,i^2 \\[0.5ex]
&= (\,x_1 x_2 \;-\; y_1 y_2\,) \;+\; (\,x_1 y_2 + y_1 x_2\,)\,i\,.
\end{aligned}
$$

Diese Darstellung ist also konsistent mit der Definition des Produktes.

**Terminologie:** Sei $z = x + yi$:

- $x = \Re z$ ist der Realteil von $z$.
- $y = \Im z$ ist der Imaginärteil von $z$.

**Komplexe Konjugation:** Für $z = x + yi$ definieren wir

$$
\overline{z} := x - yi.
$$

::: proposition Satz 1.3.2.{#satz-1-3-2}
1. $\overline{(z_1 + z_2)} = \overline{z_1} + \overline{z_2}$ für alle $z_1, z_2 \in \mathbb{C}$.
2. $\overline{z_1 z_2} = \overline{z_1} \cdot \overline{z_2}$ für alle $z_1, z_2 \in \mathbb{C}$.

Insbesondere folgt aus 2., dass für $z \neq 0$ das multiplikative Inverse gegeben ist durch

$$
z^{-1} = \frac{\overline{z}}{\|z\|^2}
$$

In der Vorlesung:
Für $z = x + yi$ gilt:

1. $\|z\| = \sqrt{x^2 + y^2}$
2. $\|z\|^2 = z \overline{z} = x^2 + y^2$.
:::


### Polarform:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="300" style="margin: 10px auto">
  <defs>
    <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
      <path d="M1,1 L6.5,4 L1,7" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" stroke-linecap="round"/>
    </marker>
  </defs>
  <line x1="10" y1="130" x2="190" y2="130" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow)"/>
  <line x1="10" y1="130" x2="10" y2="10" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow)"/>
  <text x="180" y="145" fill="currentColor" font-size="12" text-anchor="end">x = Re z</text>
  <text x="0" y="10" fill="currentColor" font-size="12" text-anchor="start">y = Im z</text>
  <line x1="10" y1="130" x2="140" y2="50" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow)"/>
  <text x="145" y="45" fill="currentColor" font-size="12">z = x + y i</text>
  <path d="M69,130 A50,50 1 0,0 59,100" fill="none" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow)"/>
  <text x="72" y="115" fill="currentColor" font-size="12">ϕ</text>
</svg>

Sei $r = \|z\| = \sqrt{x^2 + y^2}$. Dann ist $x = r\cdot \cos(\phi)$ und $y = r\cdot \sin(\phi)$ wobei man $\phi$ modulo $2\pi k$, $k \in ℤ$, nehmen kann.


In der Darstellung

$$
z = r \bigl(\cos(\phi) + i \cdot\sin(\phi)\bigr)
$$

nennen wir $r = \|z\|$ den **Absolutbetrag** und $\phi$ das **Argument** der Zahl $z$.

Seien nun $z_1 = r_1 \bigl(\cos \phi_1 + i \sin \phi_1\bigr)$, $z_2 = r_2 \bigl(\cos \phi_2 + i \sin \phi_2\bigr)$.

Dann folgt:

$$
z_1 z_2 = r_1 r_2 \bigl([cos(\phi_1) cos(\phi_2) - sin(\phi_1) sin(\phi_2)] + i\cdot [cos(\phi_1) sin(\phi_2) + sin(\phi_1) cos(\phi_2)]\bigr).
$$

Aus den Additionstheoremen für $\cos$ und $\sin$ folgt also:

$$
z_1 z_2 = r_1 r_2 \bigl( \cos(\phi_1 + \phi_2) + i\cdot \sin(\phi_1 + \phi_2) \bigr).
$$


Für $z = r(\cos(\phi) + i\cdot \sin(\phi))$ folgt durch Induktion:

$$
z^n = r^n \bigl( \cos(n\cdot\phi) + i\cdot \sin(n\cdot\phi) \bigr).
$$

::: proposition Korollar 1.3.1.{#korollar-1-3-1}
Sei $n \in ℕ$, $n > 1$. Dann hat die Gleichung $z^n = 1$ genau $n$ Lösungen in $\mathbb{C}$: $z_1, z_2, \dots, z_n$, wobei

$$
z_j = \cos\left(\frac{2\pi j}{n}\right) + i\cdot \sin\left(\frac{2\pi j}{n}\right), \quad 1 \le j \le n.
$$
:::

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 220" style="max-width: 500px; margin: auto">
  <defs>
    <marker id="arrow" markerUnits="strokeWidth" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" stroke-linecap="round"/>
    </marker>
  </defs>
  <circle cx="120" cy="110" r="80" stroke="currentColor" stroke-width="1.5" fill="none"/>
  <line x1="120" y1="110" x2="176.57" y2="53.43" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow)"/>
  <line x1="120" y1="110" x2="120" y2="30" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow)"/>
  <line x1="120" y1="110" x2="63.43" y2="53.43" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow)"/>
  <line x1="120" y1="110" x2="40" y2="110" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow)"/>
  <line x1="120" y1="110" x2="63.43" y2="166.57" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow)"/>
  <line x1="120" y1="110" x2="120" y2="190" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow)"/>
  <line x1="120" y1="110" x2="176.57" y2="166.57" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow)"/>
  <line x1="120" y1="110" x2="200" y2="110" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow)"/>
  <text x="182" y="50" fill="currentColor" font-size="12">z₁</text>
  <text x="120" y="20" fill="currentColor" font-size="12" text-anchor="middle">z₂</text>
  <text x="50" y="48" fill="currentColor" font-size="12">z₃</text>
  <text x="30" y="115" fill="currentColor" font-size="12" text-anchor="middle">z₄</text>
  <text x="52" y="178" fill="currentColor" font-size="12">z₅</text>
  <text x="120" y="202" fill="currentColor" font-size="12" text-anchor="middle">z₆</text>
  <text x="178" y="177" fill="currentColor" font-size="12">z₇</text>
  <text x="205" y="114" fill="currentColor" font-size="12">z₈</text>
  <text x="250" y="110" fill="currentColor" font-size="14">z⁸ = 1</text>
</svg>


Allgemeiner gilt:

::: proposition Satz 1.3.3. (Fundamentalsatz der Algebra){#satz-1-3-3}
Sei $n ≥ 1$, $n \in ℕ$ und

$$
P(z) = z^n + a_{n-1} z^{n-1} + \cdots + a_0, \quad a_j \in C.
$$

Dann gibt es $z_1, \dots, z_n$ in $C$, so dass

$$
P(z) = (z - z_1)(z - z_2) \cdots (z - z_n).
$$

Die Menge $\{z_1, \dots, z_n\}$ und die Vielfachheit der Nullstellen $z_j$, d.h. die Anzahl der Zahlen $k$ sodass $z_k = z_j$, sind eindeutig bestimmt.
:::
