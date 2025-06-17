---
prev:
    text: Stetige Funktionen
    link: /4-differenzierbar
#next:
#    text: Number Theory
#    link: /4-number-theory
---

# <small>Kapitel 5:</small><br> Das Riemann Integral

Die Integralrechnung ist viel älter als die Differentialrechnung; die Berechnung von Flächeninhalten, Volumina etc. haben Mathematiker wie Archimedes (287 - 212 v. Chr.), Kepler (1571 - 1630), Cavalieri (1598 - 1647), Fermat (1607 - 1665) und weitere beschäftigt. Der entscheidende Durchbruch ist Newton, Leibniz und Johann Bernoulli zu verdanken: Sie zeigten unabhängig, dass die Operation der Integration die Umkehrung der Operation der Ableitung ist.

## 5.1. Definition und Integrabilitätskriterien

In diesem Kapitel sind $a < b$ reelle Zahlen und $I = [a,b]$

::: definition Definition 5.1.1 Partition {#definition-5-1-1}
Eine **Partition** (Zerlegung, Einteilung) eines Intervals $I = [a,b]$ ist eine endliche Teilmenge $P = \{a=x_0<x_1<\dots<x_n=b\} \subset I$ wobei $\{ a , b \} \subset P$.
:::

Offensichtlich gilt

$$
n : = |P| - 1 ≥ 1
$$

und es gibt genau eine Bijektion

$$
\begin{align*}
\{0 , 1 , 2 , \dots , n \} &\to P \\
j &\mapsto x_j
\end{align*}
$$

mit der Eigenschaft $i < j \implies x _ { i } < x _ { j }$

Sei $\mathcal{P}(I) = \{P\subset I : P$ ist endliche Partition von $I\}$ die Menge aller Partitionen von $I$.

Wir bezeichnen mit $\delta _ { i } : = x _ { i } - x _ { i - 1 }$, $i ≥ 1$ , die Länge des Teilintervalls $I_i = [x _ { i - 1 } , x _ { i }]$
und mit $\delta(P) = \displaystyle\max_{1 ≤ i ≤ n} \delta_i = \max_{1 ≤ i ≤ n} (x_i - x_{i-1})$ die Feinheit der Zerlegung $P$.

Sei $\zeta_i \in I$ ein Zwischenpunkt (Stützstelle) mit $x_{i - 1} ≤ \zeta_i ≤ x_i$, so ist 

$$
\zeta := \{ x_0, x_1, \dots, x_n \}
$$

die Menge aller Stützstellen.

Wir definieren die Funktion

$$
S(f,P,\zeta) := \sum_{i=1}^n f(\zeta_i)(x_1-x_{i-1}) = \sum_{i=1}^n f(\zeta_i)\delta_i
$$

und nennen sie die **Riemannsche Summe** von $f$ der Partition $P$ und den Stützstellen $\zeta$.

Sei nun $f : [a,b] \to ℝ$ eine beschränkte Funktion (siehe [Def. 3.1.1(3)](/3-stetige-funktionen#definition-3-1-1)), das heisst es gibt 

$$
\exists M ≥ 0 \quad | f ( x ) | ≤ M \quad \forall x \in [ a , b ]
$$


![](/images/ead434a7843c88ffab89d1e22e27259d484c60049670859dbfd4fc3dc7536703.png)

Wir definieren die Untersumme

$$
\underline s ( f , P ) : = \sum _ { i = 1 } ^ { n } \left(\inf _ { x \in I_i } f(x)\right) (x_1-x_{i-1})
$$

und die Obersumme

$$
\overline S ( f , P ) : = \sum _ { i = 1 } ^ { n } \left(\sup _ { x \in I_i } f(x)\right) (x_1-x_{i-1})
$$

![](/images/ed85deee9b4546a0cfaa657d051efc580e15c56fe9e1ad91dd49b01c8830327c.png)

Bemerke, dass

$$
- M ≤ \inf_{x\in I_i} f(x) ≤ \sup_{x\in I_i} f(x) ≤ M
$$

somit sind $\underline s ( f , P )$ und $\overline S ( f , P )$ wohldefiniert und es gilt:

$$
- M ( b - a ) ≤ \underline s ( f , P ) ≤ \overline S ( f , P ) ≤ M ( b - a ) .
$$

Für jede andere Riemannsche Summe $S ( f , P , \zeta )$ gilt:
$$
\underline s ( f , P ) ≤ S ( f , P , \zeta ) ≤ \overline S ( f , P )
$$

::: definition Definition Verfeinerung {#definition-verfeinerung}
Eine Partition $P ^ { \prime }$ ist eine **Verfeinerung** von $P$ falls $P \subset P ^ { \prime }$ . Offensichtlich ist die Vereinigung $P _ { 1 } \cup P _ { 2 }$ zweier Partitionen wieder eine Partition, insbesondere haben zwei Partitionen immer eine gemeinsame Verfeinerung.
:::

::: proposition Lemma 5.1.1
Sei $f:\underbrace{[a,b]}_{I} \to ℝ$ eine beschränkte Funktion und $P, Q \in \mathcal{P}(I)$ Partitionen von $I$. Dann gilt:
1) Sei $Q$ eine Verfeinerung von $P$ , dann gilt:
    $$
   \underline s ( f , P ) ≤\underline s ( f , Q ) ≤ \overline S ( f , Q ) ≤ \overline S ( f , P ) .
    $$

2) Für beliebige Partitionen $P _ { 1 } , P _ { 2 }$ gilt:
    $$
   \underline s ( f , P _ { 1 } ) ≤ \overline S ( f , P _ { 2 } ) .
    $$

{.numbered}

**Beweis:**
1) Sei $P = \{ x _ { 0 } , x _ { 1 } , . . . , x _ { n } \}$ und $P ^ { \prime }$ eine Verfeinerung von $P$ die durch hinzufügen eines Punktes $y$ zu $P$ entsteht. Sei $y \in \left( x _ { i - 1 } , x _ { i } \right)$ . Dann ist
  
    $$
   \underline s ( f , P ^ { \prime } ) = \sum _ { j \neq i } \delta _ { j } f _ { j } + ( y - x _ { i - 1 } ) \inf _ { x _ { i - 1 } ≤ x ≤ y } f ( x ) + ( x _ { i } - y ) \inf _ { y ≤ x ≤ x _ { i } } f ( x ) .
    $$
    
    Nun gilt aber:
    
    $$
    \begin{array} { r } { \underset { x _ { i - 1 } ≤ x ≤ y } { \inf } f ( x ) ≥ \underset { x _ { i - 1 } ≤ x ≤ x _ { i } } { \inf } f ( x ) = f _ { i } } \\ { \underset { y ≤ x ≤ x _ { i } } { \inf } f ( x ) ≥ \underset { x _ { i - 1 } ≤ x ≤ x _ { i } } { \inf } f ( x ) = f _ { i } } \end{array}
    $$
    
    woraus folgt:
    
    $$
   \underline s ( f , P ^ { \prime } ) ≥ \sum _ { j \neq i } \delta _ { j } f _ { j } + \underbrace { \left( y - x _ { i - 1 } \right) f _ { i } } _ { \left( x _ { i } - x _ { i - 1 } \right) f _ { i } = \delta _ { i } f _ { i } } = \underline s ( f , P ) .
    $$
    
    Eine allgemeine Verfeinerung $P ^ { \prime }$ von $P$ lässt sich als sukzessive ein-Punkt-Verfeinerungen von $P$ ausgehend darstellen. Die Ungleichung $\overline S ( f , P ^ { \prime } ) ≤ \overline S ( f , P )$ wird analog bewiesen; die Ungleichung $\underline s ( f , P ^ { \prime } ) ≤ \overline S ( f , P ^ { \prime } )$ ist vor Lemma 5.1.2 schon bemerkt worden.
  
2) Da $P _ { 1 } \cup P _ { 2 }$ eine Verfeinerung von $P _ { 1 }$ ist, folgt aus (1):

    $$
   \underline s ( f , P _ { 1 } ) ≤ \underline s ( f , P _ { 1 } \cup P _ { 2 } ) ≤ \overline S ( f , P _ { 1 } \cup P _ { 2 } ) ≤ \overline S ( f , P _ { 2 } ) .
    $$

{.numbered}

:::

Wir definieren nun das untere Riemann Integral von $f$

$$
\underline s ( f ) := \sup_{P\in\mathcal{P}(I)}\underline s ( f , P )
$$

und das obere Riemann Integral von $f$
$$
\overline S ( f ) := \inf_{P\in\mathcal{P}(I)}\overline S ( f , P )
$$

Aus [Lemma 5.1.2(2)](#lemma-5-1-2) folgt $\underline s ( f ) ≤ \overline S ( f )$ .

::: definition Definition 5.1.2 Riemann integrierbar {#definition-5-1-2}
Eine beschränkte Funktion $f : [ a , b ] \to ℝ$ ist Riemann integrierbar (oder kurz: integrierbar), falls

$$
\underline s ( f ) = \overline S ( f )
$$

In diesem Fall bezeichnen wir den gemeinsamen Wert von $\underline s ( f )$ und $\overline S ( f )$ mit

$$
\int_a^b f ( x )\ d x
$$

- Mit $f(x)$ bezeichnen wir als Integrand
- Mit $x$ die Integrationsvariable
- Mit $a$ die untere Integrationsgrenze
- Mit $b$ die obere Integrationsgrenze
:::

::: example Beispiel aus Vorlesung
Sei $I=[a,b]$ und $f : I \to ℝ$, $x\mapsto c$ konstant.

Für alle $P \in \mathcal{P}(I)$ gilt:
$$
\begin{align*}
\sum_{i=1}^n f(\zeta_i)(x_i-x_{i-1}) &= \sum_{i=1}^n c (x_i-x_{i-1}) \\
&= c \sum_{i=1}^n (x_i-x_{i-1}) \\
&= c (x_n - x_0) \\
&= c (b - a) \\
&= \int_a^b f(x) \, dx
\end{align*}
$$
:::

::: proposition Satz 5.1.4{#satz-5-1-4}
Eine beschränkte Funktion auf $[a,b]$ ist integrierbar $\iff$

<center>

$\forall \varepsilon > 0\ \exists P \in \mathcal { P } ( I )\quad$ mit $\quad\overline S ( f , P ) - \underline s ( f , P ) < \varepsilon$
</center>

**Beweis:**<br>
Die Funktion $f$ ist genau dann integrierbar, falls $\forall \varepsilon > 0\ \exists P _ { 1 } , P _ { 2 }$ Partitionen, so dass

$$
\overline S ( f , P _ { 2 } ) - \underline s ( f , P _ { 1 } ) < \varepsilon .
$$

In diesem Fall folgt mit $P = P _ { 1 } \cup P _ { 2 }$ aus

$$
\begin{gather*}
\overline S (f, P_2) ≥ \overline S (f, P) ≥ \underline s (f, P) ≥ \underline s (f, P_1) \\[4pt]
\overline S ( f , P ) - \underline s ( f , P ) < \varepsilon
\end{gather*}
$$

Die Umkehrung ist klar. <span class="right">$\Box$</span>
:::

::: example Beispiel 5.1.5 (Integrierbar){#beispiel-5-1-5}
Beispiel 5.1.5. $f ( x ) = x$ , auf $[a,b]$ :

![](/images/7c63c1bb901bb44bc24067998811cd6f0a8baa235a24e713509234c8aa33762a.png)

Sei $P _ { n } = \{ a + i \cdot \frac { b - a } { n } : 0 ≤ i ≤ n \}$, dann ist

$$
\begin{align*}
\underline s ( f , P _ { n } ) &= \sum _ { i = 1 } ^ { n } x_{i-1} \left( x_i - x_{i-1} \right) \\
&= \frac{b-a}{n} \sum_{i=1}^n \left( a + (i-1)\frac { b - a } { n } \right) \\
&= \frac{b-a}{n} \left( na + \frac { b - a } { n } \cdot \frac{n(n-1)}{2} \right)\\ 
&= (b-a)a + \frac{(b-a)^2}{2} \cdot \frac{n-1}{n}\\
\end{align*}
$$

und

$$
\begin{align*}
\overline S ( f , P _ { n } ) &= \sum _ { i = 1 } ^ { n } x _ { i } \left( x _ { i } - x _ { i - 1 } \right) \\
&= \frac{b-a}{n} \sum_{i=1}^n \left( a + i\frac { b - a } { n } \right) \\
&= \frac{b-a}{n} \left( na + \frac { b - a } { n } \cdot \frac{n(n+1)}{2} \right) \\
&= \left( b - a \right) a + { \frac { ( b - a ) ^ { 2 } } { 2 } } \cdot{ \frac { n + 1 } { n } }
\end{align*}
$$

Also gilt

$$
\lim _ { n \to \infty } S ( f , P _ { n } ) = \frac { b ^ { 2 } - a ^ { 2 } } { 2 } = \lim _ { n \to \infty } s ( f , P _ { n } ) .
$$

Also ist $f$ integrierbar und

$$
\int _ { a } ^ { b } f ( x ) d x = { \frac { b ^ { 2 } - a ^ { 2 } } { 2 } } .
$$
:::

::: example Beispiel 5.1.6 (Nicht integrierbar){#beispiel-5-1-6}
Sei $f : [0,1] \to ℝ$ definiert durch die charakteristische Funktion der rationalen Zahlen:

$$
f ( x ) = \begin{cases}
    1 & x\in ℚ \\
    0 & \text{sonst}
\end{cases}
$$

Da jedes Intervall positiver Länge sowohl rationale wie irrationale Zahlen enthält, folgt

$$
\begin{gather}
\min_{I_k} f = 0 \implies \underline s ( f , P ) = 0 \quad \forall P \in \mathcal{P}(I) \\
\max_{I_k} f = 1 \implies \overline S ( f , P ) = 1 \quad \forall P \in \mathcal{P}(I)
\end{gather}
$$
Somit ist $\underline s(f) = 0 ≠ 1 = \overline S(f)$, also ist $f$ nicht integrierbar.
:::

::: example Beispiel 5.1.7.{#beispiel-5-1-7}
Sei $f : [0,1] \to ℝ$ definiert durch

$$
f ( x ) = \begin{cases}
    1 & x \in (ℝ \setminus ℚ) \cup \{0\}\\
    \frac1q & x= \frac{p}{q} \in ℚ,\ p,q \in ℕ,\ \gcd(p,q) = 1
\end{cases}
$$

Es ist eine interessante Übung zu zeigen, dass $f$ integrierbar ist und $\int _ { 0 } ^ { 1 } f ( x )\, d x = 0$.
:::

Folgendes Integrabilitätskriterium führt zu einer Charakterisierung des Integrals als Grenzwert und Integrierbarkeit als Existenz dieses Grenzwertes.

::: proposition Satz 5.1.8 (Du Bois-Reymond 1875, Darboux 1875){#satz-5-1-8}
Eine beschränkte Funktion $f : [a,b] \to ℝ$ ist integrierbar $\iff$
$$
\forall \varepsilon > 0 \ \exists \delta > 0:\ \forall P \in \mathcal { P } _ { \delta } ( I ) , ~ \overline S ( f , P ) - \underline s ( f , P ) < \varepsilon
$$

Hier bezeichnet $\mathcal { P } _ { \delta } ( I ) = \{P\in\mathcal{P}(I) : \delta(P) < \delta\}$

**Beweis:**<br>
Sei $f$ beschränkt mit

$$
| f ( x ) | ≤ M \qquad \forall x \in [ a , b ]
$$

und integrierbar. Sei $\varepsilon > 0$ und $P$ eine Partition mit

$$
\overline S ( f , P ) - \underline s ( f , P ) < \varepsilon .
$$

Sei $Q = \{ y _ { 0 } , \dots , y _ { m } \}$ eine beliebige Partition mit $\displaystyle\max_{1≤i≤m} \left( y _ { i } - y _ { i - 1 } \right) ≤ \delta$. Aus

$$
\overline S ( f , P ) ≥ \overline S ( f , P \cup Q ) ≥ \underline s ( f , P \cup Q ) ≥ \underline s ( f , P )
$$

folgt:

$$
\overline S ( f , P \cup Q ) - \underline s ( f , P \cup Q ) < \varepsilon .
$$

Sei $P = \{ x _ { 0 } , x _ { 1 } , . . . , x _ { n } \}$ . Die Obersumme $\overline S ( f , Q ) \ \left. \right. \left. ( ≥ \overline S ( f , P \cup Q ) \right)$ unterscheidet sich von $\overline S ( f , P \cup Q )$ nur in den Intervallen $[ y _ { i - 1 }\ ,\ y _ { i } ]$ für welche

$$
(y _ { i - 1 }\ ,\ y _ { i }) \cap P \neq \emptyset
$$

Falls wir $\delta < \displaystyle\min _ { 1 ≤ j ≤ n } \left( x _ { j } - x _ { j - 1 } \right)$ wählen, dann enthält solch ein $(y _ { i - 1 }\ ,\ y _ { i })$ genau ein $x _ { k } \in P$. Dann ist

$$
( y _ { i } - y _ { i - 1 } ) \sup _ { [ y _ { i - 1 } , y _ { i } ] } f ( x ) = ( ( y _ { i } - x _ { k } ) + ( x _ { k } - y _ { i - 1 } ) ) \sup _ { [ y _ { i - 1 } , y _ { i } ] } f ( x ) .
$$

Nun schätzen wir ab:

$$
\begin{array} { c } { \displaystyle \sup _ { [ y _ { i - 1 }\ ,\ y _ { i } ] } f ( x ) ≤ \displaystyle \sup _ { [ y _ { i - 1 }\ ,\ x _ { k } ] } f ( x ) + 2 M } \\ { \displaystyle \sup _ { [ y _ { i - 1 }\ ,\ y _ { i } ] } f ( x ) ≤ \displaystyle \sup _ { [ x _ { k }\ ,\ y _ { i } ] } f ( x ) + 2 M . } \end{array}
$$

Also:

$$
( y _ { i } - y _ { i - 1 } ) \sup _ { [ y _ { i - 1 }\ ,\ y _ { i } ] } f ( x ) ≤ ( y _ { i } - x _ { k } ) \sup _ { [ x _ { k }\ ,\ y _ { i } ] } f ( x ) + ( x _ { k } - y _ { i - 1 } ) \sup _ { [ y _ { i - 1 }\ ,\ x _ { k } ] } f ( x ) + ( y _ { i } - y _ { i - 1 } ) 2
$$

Da es höchstens $( n - 1 )$ Intervalle mit

$$
(y _ { i - 1 }\ ,\ y _ { i }) \cap P \neq \emptyset
$$

gibt, folgt:

$$
\overline S ( f , Q ) ≤ \overline S ( f , P \cup Q ) + 2 M n \delta .
$$

Ein analoges Argument zeigt:

$$
\underline s ( f , P \cup Q ) ≤ \underline s ( f , Q ) + 2 M n \delta
$$

woraus mit

$$
\begin{array} { r } { \overline S ( f , P \cup Q ) - \underline s ( f , P \cup Q ) < \varepsilon , } \\ { S ( f , Q ) - \underline s ( f , Q ) < \varepsilon + 4 M n \delta } \end{array}
$$

$\delta < \displaystyle\min \left\{ { \frac { \varepsilon } { 4 M n } } , \ \min _ { 1 ≤ i ≤ n } \left( x _ { i } - x _ { i - 1 } \right) \right\}$ folgt

und der Satz ist bewiesen. <span class="right">$\Box$</span>
:::

In der Folge ist es zweckmässig für eine Partition $P = \{ x _ { 0 } , \ldots , x _ { n } \}$ die Zahl

$$
\delta ( P ) = \max _ { 1 ≤ i ≤ n } \left( x _ { i } - x _ { i - 1 } \right)
$$

einzuführen.

Sei $P$ eine Partition und zudem wählen wir $\xi _ { 1 } , \ldots , \xi _ { n }$ :

$$
\xi _ { i } \in \left[ x _ { i - 1 } , x _ { i } \right] , \quad 1 ≤ i ≤ n .
$$

Dann ist

$$
\sigma : = \sum _ { i = 1 } ^ { n } f ( \xi _ { i } ) \delta _ { i }
$$

eine Riemannsche Summe.

::: proposition Korollar 5.1.9{#korollar-5-1-9}
Die beschränkte Funktion $f : [ a , b ] \to ℝ$ ist integrierbar $\iff$

$\forall \varepsilon > 0\ \exists \delta > 0$ so dass für alle $P \in { \mathcal { P }_\delta } ( I )$
$$
\left| \int _ { a } ^ { b } f ( x )\, dx - \sum _ { i = 1 } ^ { n } f ( \xi _ { i } ) \left( x _ { i } - x _ { i - 1 } \right) \right| < \varepsilon
$$

**Beweis:** Den Beweis überlassen wir als Übung.
:::

## 5.2. Integrierbare Funktionen

Bis jetzt haben wir gesehen, dass konstante Funktionen sowie die Funktion $f ( x ) = x$ auf jedem kompakten Intervall integrierbar sind. Mit folgendem Satz vergrössern wir unseren Vorrat an integrierbaren Funktionen.

::: proposition Satz 5.2.1{#satz-5-2-1}
Seien $f , g : [a,b] \to ℝ$ beschränkt, integrierbar und $\lambda \in ℝ$. Dann sind 
$$
\begin{gather*}
f±g & \lambda f & f\cdot g & |f| & \max(f,g) & \min(f,g) 
\end{gather*}
$$
alle integrierbar und falls $|g(x)| ≥ \beta > 0\ \forall x \in [a,b]$ dann ist auch $\frac{f}{g}$ integrierbar.


**Beweis:**<br>
Sei $\varepsilon > 0$ und $P _ { 1 } , P _ { 2 }$ Partitionen mit

$$
\begin{align*}
\overline S ( f , P _ { 1 } ) - \underline s ( f , P _ { 1 } ) < \varepsilon \\
\overline S ( g , P _ { 2 } ) - \underline s ( g , P _ { 2 } ) < \varepsilon
\end{align*}
$$

Mit $P = P _ { 1 } \cup P _ { 2 }$ folgt also

$$
\begin{align*}
\overline S ( f , P ) - \underline s ( f , P ) < \varepsilon \\
\overline S ( g , P ) - \underline s ( g , P ) < \varepsilon
\end{align*}
$$

1) $h = f + g$: Dann folgt für alle $x , y \in [a,b]$ :

    $$
    | h ( x ) - h ( y ) | ≤ | f ( x ) - f ( y ) | + | g ( x ) - g ( y ) | .
    $$
     
    $$
    \sum _ { i = 1 } ^ { n } \left(\sup _ { I_i } h - \inf _ { I_i } h \right) \delta_i ≤ \sum _ { i = 1 } ^ { n } \left(\sup _ { I_i } f - \inf _ { I_i } f \right) \delta_i + \sum _ { i = 1 } ^ { n } \left(\sup _ { I_i } g - \inf _ { I_i } g \right) \delta_i .
    $$

    Also
    
    $$
    \overline S ( f + g , P ) - \underline s ( f + g , P ) ≤ \overline S ( f , P ) - \underline s ( f , P ) + \overline S ( g , P ) - \underline s ( g , P ) < 2 \varepsilon .
    $$
    
    Daraus folgt, dass $f + g$ integrierbar ist.

2) $h = \lambda \cdot f$: Dann gilt für alle $x , y \in [a,b]$:

    $$
    | h ( x ) - h ( y ) | = | \lambda | \cdot | f ( x ) - f ( y ) | .
    $$

    Also ist $h$ integrierbar mit
    
    $$
    \overline S ( \lambda f , P ) - \underline s ( \lambda f , P ) = | \lambda | \left( \overline S ( f , P ) - \underline s ( f , P ) \right) < 2 | \lambda | \varepsilon .
    $$
3) $h = f \cdot g : \ \forall x , y \in [a,b]$ gilt

    $$
    | h ( x ) - h ( y ) | ≤ | f ( x ) | | g ( x ) - g ( y ) | + | g ( y ) | | f ( x ) - f ( y ) | .
    $$
    
    Sei $M ≥ 0$ mit
    
    $$
    \vert f ( x ) \vert ≤ M , \vert g ( y ) \vert ≤ M \qquad \forall x , y \in [ a , b ] .
    $$
    
    Dann folgt
    
    $$
    | h ( x ) - h ( y ) | ≤ M | g ( x ) - g ( y ) | + M | f ( x ) - f ( y ) | .
    $$
    
    Mit $H _ { i } = \sup _ { [ x _ { i - 1 } , x _ { i } ] } h , h _ { i } = \inf _ { [ x _ { i - 1 } , x _ { i } ] } h$ folgt dann wieder aus Bemerkung 5.2.2:
    
    $$
    H _ { i } - h _ { i } ≤ M \left( G _ { i } - g _ { i } \right) + M \left( F _ { i } - f _ { i } \right)
    $$
    
    Also
    
    $$
    S ( f \cdot g , P ) - s ( f \cdot g , P ) ≤ M \left( S ( g , P ) - s ( g , P ) \right) + M \left( S ( f , P ) - s ( f , P ) \right) < 2 M \varepsilon .
    $$

4) $h = | f |$: Dann gilt für alle $x , y \in [a,b]$:

    $$
    | h ( x ) - h ( y ) | = \left|| f ( x ) | - | f ( y ) |\right| ≤ | f ( x ) - f ( y ) | .
    $$

    Also ist $h$ integrierbar mit
    
    $$
    \overline S ( | f | , P ) - \underline s ( | f | , P ) < 2 \varepsilon .
    $$   
5) $\max ( f , g )$ und $\min ( f , g )$ folgen aus aus (1) und (4).

6) Es genügt (nach (2)) zu zeigen, dass $h ( x ) = { \frac { 1 } { g ( x ) } }$ integrierbar ist, sofern $| g ( x ) | ≥ \beta > 0$ $\forall x \in [a,b]$ . Für alle $x , y \in [ a , b ]$ gilt:

    $$
    | h ( x ) - h ( y ) | = { \frac { | g ( x ) - g ( y ) | } { | g ( x ) | | g ( y ) | } } ≤ { \frac { | g ( x ) - g ( y ) | } { \beta ^ { 2 } } }
    $$

    woraus die Integrabilität von $h$ leicht folgt.

{.numbered}
:::

::: example Beispiel Polynom {#beispiel-polynom}
Da $x\mapsto x$ und $x\mapsto c$ konstant beide integrierbar sind, folgt aus [Satz 5.2.1](#satz-5-2-1), $\lambda x^n$ ist integrierbar für alle $n \in ℕ$ und $\lambda \in ℝ$. Insbesondere sind Polynome integrierbar.
:::
Falls $f,g \in \mathcal{R}(I) =$ Riemann integrierbare Funktionen auf $I$, dann sind auch $f+g$, $\lambda f$ integrierbar und bilden $\mathcal{R}(I)$ einen $\mathbb{R}$-Vektorraum. 

::: proposition Bemerkung 5.2.2{#bemerkung-5-2-2}
Sei $\phi : [c , d] \to ℝ$ eine beschränkte Funktion. Dann ist

$$
\begin{gather*}
\tag{*}\sup _ { x , y \in [ c , d ] } | \phi ( x ) - \phi ( y ) | = \sup _ { x \in [ c , d ] } \phi ( x ) - \inf _ { x \in [ c , d ] } \phi ( x )
\end{gather*}
$$

Einerseits gilt offensichtlich $\forall x , y \in [ c , d ]$ :

$$
\inf _ { [ c , d ] } \phi(x) ≤ \phi ( y ),\quad \phi ≤ \sup _ { [ c , d ] } \phi
$$

also

$$
\phi ( x ) - \phi ( y ) ≤ \sup _ { [ c , d ] } \phi - \inf _ { [ c , d ] } \phi
$$

woraus durch vertauschen von $x , y$ folgt:

$$
| \phi ( x ) - \phi ( y ) | ≤ \sup _ { [ c , d ] } \phi - \inf _ { [ c , d ] } \phi
$$

Andererseits, sei $\varepsilon > 0 .$ Dann gibt es $\xi \in \left[ c , d \right]$ und $\eta \in \left\lfloor c , d \right\rfloor$ mit:

$$
\phi ( \xi ) > \sup _ { [ c , d ] } \phi - \varepsilon \quad \mathrm { u n d } \quad \phi ( \eta ) < \inf _ { [ c , d ] } \phi + \varepsilon
$$

woraus

$$
\phi ( \xi ) - \phi ( \eta ) > \sup _ { [ c , d ] } \phi - \inf _ { [ c , d ] } \phi - 2 \varepsilon
$$

folgt. Dies zeigt die Aussage $( * )$
:::

Aus Satz 5.2.1 folgt dann:

::: proposition Korollar 5.2.2{#korollar-5-2-2}
Seien $P,Q:[a,b] \to ℝ$ Polynome, dann falls $Q$ in $[a,b]$ kein Nullstelle hat, ist auch $\frac{P}{Q}$ integrierbar.

z.B. für $I=[0,1]$ ist $f(x) = \frac1{x^2 + 1}$ integrierbar, da $x^2 + 1$ in $[0,1]$ keine Nullstelle hat.
:::

Wir werden jetzt zeigen, dass auf einem kompakten Intervall eine stetige Funktion immer integrierbar ist. Dies beruht auf einer wesentlichen Eigenschaft, nämlich gleichmässige Stetigkeit.

::: definition Definition 5.2.3 Stetigkeit {#definition-5-2-3}
Eine Funktion $f : D \to ℝ$ , $D \subseteq ℝ$ ist in $D$ gleichmässig stetig, falls $\forall \varepsilon > 0\ \exists \delta > 0\ \forall x , y \in D$:

$$
| x - y | < \delta \implies | f ( x ) - f ( y ) | < \varepsilon .
$$
:::

::: example Beispiel 5.2.5{#beispiel-5-2-5}
Die Funktion $f : ℝ \to ℝ$, $x \mapsto x ^ { 2 }$ ist auf $ℝ$ stetig aber nicht gleichmässig stetig.
:::

::: proposition Satz 5.2.6 (Heine 1872){#satz-5-2-6}
Sei $f : [ a , b ] \to ℝ$ stetig im kompakten Intervall $[ a , b ]$.

$\implies f$ in $[ a , b ]$ gleichmässig stetig.

**Beweis:**<br>
Ansonsten gibt es $\varepsilon > 0$ so dass $\begin{array} { r } { \forall \delta _ { n } \ = \ \frac { 1 } { n } } \end{array}$ , gibt es $x _ { n } , y _ { n }$ in $[a,b]$ mit $\begin{array} { r } { | x _ { n } - y _ { n } | < \frac { 1 } { n } } \end{array}$ und $| f ( x _ { n } ) - f ( y _ { n } ) | ≥ \varepsilon$ .

Sei $\left( y _ {  \ell  ( n ) } \right) _ { n ≥ 1 }$ eine konvergente Teilfolge mit Grenzwert $y : = \displaystyle\lim _ { n \to \infty } y _ {  \ell  ( n ) }$ . Da

$$
\left| x _ { l ( n ) } - y _ { l ( n ) } \right| < \frac { 1 } { \ell ( n ) } ,
$$

folgt dass $\displaystyle\lim _ { n \to \infty } x _ { l ( n ) } = y$ . Aus der Stetigkeit von $f$ in $y$ folgt insbesondere

$$
\lim _ { n \to \infty } \left| f ( x _ {  \ell  ( n ) } ) - f ( y _ {  \ell  ( n ) } ) \right| = | f ( y ) - f ( y ) | = 0 ,
$$

also ein Widerspruch zu $| f ( x _ { n } ) - f ( y _ { n } ) | ≥ \varepsilon \quad \forall n ≥ 1$. <span class="right">$\Box$</span>
:::

Folgender Satz folgt dann relativ schnell:

::: proposition 5.2.7 (Stetige Funktionen sind integrierbar){#satz-5-2-7}
Sei $f : [ a , b ] \to ℝ$ stetig. Dann ist $f$ integrierbar.

**Beweis:**<br>
Da $[a,b]$ ein kompaktes Intervall ist, folgt aus dem min-max Satz, dass $f$ beschränkt ist.

Sei $\varepsilon > 0$ und $\delta > 0$ , so dass, nach [Satz 5.2.6](#satz-5-2-6), für alle $x , y \in [ a , b ]$:

$$
| x - y | < \delta \implies | f ( x ) - f ( y ) | < \varepsilon .
$$

Sei $P = \{ x _ { 0 } , . . . , x _ { n } \}$ eine Partition mit $\delta ( P ) < \delta$ . Für jedes $1 ≤ i ≤ n$ und alle $x , y \in [ x _ { i - 1 } , x _ { i } ]$ folgt dann $| f ( x ) - f ( y ) | < \varepsilon$ und deshalb ([Bemerkung 5.2.2](#bemerkung-5-2-2)):

$$
F _ { i } - f _ { i } ≤ \varepsilon
$$

woraus

$$
S ( f , P ) - s ( f , P ) = \sum _ { i = 1 } ^ { n } \left( F _ { i } - f _ { i } \right) \delta _ { i } ≤ \varepsilon \left( b - a \right)
$$

folgt. Also ist $f$ integrierbar.
:::

Es gibt auch Klassen von Funktionen die Unstetigkeitspunkte annehmen können und dennoch integrierbar sind.

::: proposition 5.2.8 (Monotone Funktionen){#satz-5-2-8}
Sei $f : [a,b] \to ℝ$ monoton und beschränkt. Dann ist $f$ integrierbar.

**Beweis:**<br>
Wir nehmen an, $f$ ist monoton wachsend. Dann folgt:

$$
f ( a ) ≤ f ( x ) ≤ f ( b )
$$

und insbesondere ist $f$ beschränkt.

Sei $\varepsilon > 0$ und $n ≥ 1$ eine natürliche Zahl mit

$$
\left( f \left( b \right) - f \left( a \right) \right) { \frac { b - a } { n } } < \varepsilon .
$$

Sei $P = \{ x _ { 0 } , x _ { 1 } , . . . , x _ { n } \}$ die Partition von $[ a , b ]$ wie folgt definiert:

$$
x _ { i } = a + { \frac { b - a } { n } } \cdot i , \qquad 0 ≤ i ≤ n .
$$

Da $f$ monoton wachsend ist, folgt für alle $1 ≤ i ≤ n$:
$$
\begin{align*}
\overline S ( f , P ) - \underline s ( f , P ) &= \sum _ { i = 0 } ^ { n-1 } \sup_{I_i} f(x)\left(\frac{b-a}{n}\right) - \sum _ { i = 0 } ^ { n-1 } \inf_{I_i} f(x)\left(\frac{b-a}{n}\right) \\
&= \sum _ { i = 0 } ^ { n-1 } f ( x _ { i+1 } )\left( \frac{b-a}{n}\right) - \sum _ { i = 0 } ^ { n-1 } f ( x _ { i }) \left( \frac{b-a}{n} \right) \\
&= \left( \frac{b-a}{n}\right) \cdot \sum _ { i = 1 } ^ { n } \bigl( f ( x _ { i } ) - f ( x _ { i - 1 } ) \bigr)  \\
&= \left( \frac{b-a}{n} \right) \Bigl( \bigl(f(x_n) - \cancel{f(x_{n-1})}\bigr) + \dots + \bigl(\cancel{f(x_2)} - \cancel{f(x_1)}\bigr) + \bigl(\cancel{f(x_1)} - f(x_0)\bigr)  \Bigr) \\
&= \left( \frac{b-a}{n} \right) \bigl( f ( b ) - f ( a ) \bigr)
\end{align*}
$$

falls $n$ gross genug ist, folgt:

$$
\overline S ( f , P ) - \underline s ( f , P ) = \left( f ( b ) - f ( a ) \right) \left( \frac { b - a } { n } \right) < \varepsilon
$$

und $f$ ist integrierbar. <span class="right">$\Box$</span>
:::

::: proposition Bemerkung 5.2.9{#bemerkung-5-2-9}
Seien $a<c<b$ und $f: [a,b] \to ℝ$ eine beschränkte Funktion mit $f\big\vert_{[a,c]}$ und $f\big\vert_{[c,b]}$ integrierbar, dann ist $f$ auf dem Intervall $[a,b]$ integrierbar und:

$$
\begin{gather*}
\tag{*}\int _ { a } ^ { b } f ( x )\, d x = \int _ { a } ^ { c } f ( x )\, d x + \int _ { c } ^ { b } f ( x )\, d x
\end{gather*}
$$

In der Tat ergibt die Summe einer Obersumme (respektive Untersumme) für $f\big\vert_{[a,c]}$ und $f { \big \vert } _ { [c,b] }$ eine Obersumme (respektive Untersumme) für $f$ .

Wir erweitern jetzt die Definition von $\int _ { a } ^ { b } f ( x )\, d x$ auf:

$$
\int_a^a f(x)\, dx = 0
$$

und falls $a < b$ , dann definieren wir:

$$
\int_b^a f(x)\, dx = -\int_a^b f(x)\, dx
$$

Dann gilt $(*)$ für alle Tripel $a , b , c$ unter den entsprechenden Integrabilitätsvoraussetzungen.
:::

Mit diesen Konventionen gilt:

::: proposition Satz 5.2.10 (Linearität des Integrals){#satz-5-2-10}
Sei $I = [a,b]$ ein kompaktes Intervall sowie $f,g : I \to ℝ$ beschränkt und integrierbar und $\alpha, \beta \in ℝ$. Dann gilt:

$$
\begin{align*}
\int_a^b\bigl( \alpha f(x) + \beta g(x) \bigr)\, dx &= \alpha \int_a^b f(x)\, dx + \beta \int_a^b g(x)\, dx \\
\end{align*}
$$

d.h. Die Abbildung $\phi : \mathcal{R}(I) \to ℝ$ mit $f \mapsto \int_a^b f(x)\, dx$ ist eine lineare Abbildung.

**Beweis:**<br>
Ohne Einschränkung der Allgemeinheit (O.E.d.A) können wir $a < b$ annehmen. Aus Satz 5.2.1 schliessen wir, dass $\alpha f + \beta g$ integrierbar ist. Sei (siehe Korollar 5.1.9) $\varepsilon > 0$ und $\delta > 0$ so, dass für jede Partition $P$ mit $\delta ( P ) < \delta$ die entsprechenden Riemannschen Summen sowohl

$$
\int _ { a } ^ { b } { \bigl ( } \alpha f ( x ) + \beta g ( x ) { \bigr ) } \ d x
$$

wie auch

$$
\int _ { a } ^ { b } f ( x ) d x \quad { \mathrm { u n d } } \quad \int _ { a } ^ { b } g ( x ) d x
$$

bis auf $\varepsilon$ approximieren (siehe Korollar 5.1.9). Dann folgt für $P = \{ x _ { 0 } , \ldots , x _ { n } \}$ , mit $\delta ( P ) < \delta$ und $\xi _ { i } \in \left[ x _ { i - 1 } , x _ { i } \right] , 1 ≤ i ≤ n$ :

$$
\begin{array} { l } { \displaystyle \left. \int _ { a } ^ { b } \left( \alpha f ( x ) + \beta g ( x ) \right) d x - \displaystyle \sum _ { i = 1 } ^ { n } \left( \alpha f ( \xi _ { i } ) + \beta g ( \xi _ { i } ) \right) \delta _ { i } \right. < \varepsilon , } \\ { \displaystyle \left. \int _ { a } ^ { b } f ( x ) d x - \displaystyle \sum _ { i = 1 } ^ { n } f ( \xi _ { i } ) \delta _ { i } \right. < \varepsilon , } \\ { \displaystyle \left. \int _ { a } ^ { b } g ( x ) d x - \displaystyle \sum _ { i = 1 } ^ { n } g ( \xi _ { i } ) \delta _ { i } \right. < \varepsilon . } \end{array}
$$

Nun ist aber

$$
\sum _ { i = 1 } ^ { n } { \big ( } \alpha f ( \xi _ { i } ) + \beta g ( \xi _ { i } ) { \big ) } = \alpha \left( \sum _ { i = 1 } ^ { n } f ( \xi _ { i } ) \right) + \beta \left( \sum _ { i = 1 } ^ { n } g ( \xi _ { i } ) \right) ,
$$

woraus folgt:

$$
\left| \int _ { a } ^ { b } \bigl( \alpha f ( x ) + \beta g ( x ) \bigr)\, d x - \alpha \int _ { a } ^ { b }\! f ( x )\, d x - \beta \int _ { a } ^ { b }\! g ( x )\, d x \right| < \left( 1 + | \alpha | + | \beta | \right) \varepsilon .
$$

Da letztere Ungleichung für alle $\varepsilon > 0$ gilt, folgt der Satz.
:::
