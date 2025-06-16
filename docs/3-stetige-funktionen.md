---
prev:
    text: Folgen und Reihen
    link: /2-folgen-reihen
next:
    text: Differenzierbare Funktionen
    link: /4-differenzierbar
---

# <small>Kapitel 3:</small><br> Stetige Funktionen

In diesem Kapitel füren wir den Begriff der stetigen Funktion ein und beweisen einige grundlegende Sätze wie den Zwischenwertsatz, das Max-Min Theorem und den Satz über die Umkehrabbildung. Der Begriff der stetigen Funktion wurde von Cauchy in seinem “Cours d’Analyse” 1821 eingeführt; die moderne $\varepsilon-\delta$ -Definition geht auf Weierstrass 1874 zurück.

## 3.1. Reellwertige Funktionen

Sei $D$ eine beliebige Menge.

$$
f : D \to \mathbb{R}
$$

sei
$$
\begin{align}
&\mathbb{R} ^ { D } := \{f: D \to ℝ : f \text{ ist eine Funktion}\}\\
&∥\\
&{\mathcal{F}}(D,ℝ)
\end{align}
$$

die Menge die auf $D$ definierte reellwertige Funktionen.

Sind $f,g\in\mathbb{R}^D$, $\alpha\in\mathbb{R}$ definiert, so bildet $\mathbb{R}^D$ ein Vektorraum über $\mathbb{R}$, wobei Addition und skalare Multiplikation gegeben sind durch:

$$
\begin{array} { c } { { \left( f _ { 1 } + f _ { 2 } \right) ( x ) = f _ { 1 } ( x ) + f _ { 2 } ( x ) } } \\ { { \left( \alpha \cdot f \right) ( x ) = \alpha \cdot f ( x ) } } \end{array}
$$

Auf $\mathbb{R} ^ { D }$ gibt es auch ein Produkt:

$$
\left( f _ { 1 } \cdot f _ { 2 } \right) ( x ) = f _ { 1 } ( x ) f _ { 2 } ( x )
$$

Eine konstante Funktion ist eine, die immer denselben Wert annimmt; darunter gibt es die Funktionen ${\boldsymbol{ \mathit 0}}, {\boldsymbol{ \mathit { 1 }} } \in \mathbb{R} ^ { D }$ :

$$
\begin{aligned}
{\boldsymbol{ \mathit 0}}(x) &= 0 \qquad \forall x\in D\\
{\boldsymbol{ \mathit 1}}(x) &= 1 \qquad \forall x\in D\\
\end{aligned}
$$

Offensichtlich gilt $f + {\boldsymbol{ \mathit 0}} = f$ , $g \cdot { \boldsymbol { \mathit { 1 } } } = g \quad \forall f , g \in \mathbb{R} ^ { D } ; ~ \mathbb{R} ^ { l }$ versehen mit $+ , \cdot$ erfüllt die Körperaxiome **ausser**: Falls $|D| ≥ 2$ gibt es immer ein $f \neq {\boldsymbol{ \mathit 0}}$ , das kein multiplikatives Inverses besitzt.

Auf $\mathbb{R} ^ { D }$ definieren wir eine Ordnung

<center>

$f ≤ g\quad$ falls $\quad f ( x ) ≤ g ( x ) \quad \forall x \in D$
</center>

und sagen $f$ ist nicht negativ, falls

$$
{\boldsymbol{ \mathit 0}} ≤ f
$$

Wir führen rasch einige Begriffe für reellwertige Funktionen ein, die sich an den analogen Begriffen für Folgen anlehnen.

::: definition Definition 3.1.1. {#definition-3-1-1}
Sei $f \in \mathbb{R} ^ { D }$

1. $f$ ist nach **oben beschränkt**, falls $f ( D ) \subset \mathbb{R}$ nach oben beschränkt ist.   
2. $f$ ist nach **unten beschränkt**, falls $f ( D ) \subset \mathbb{R}$ nach unten beschränkt ist.   
3. $f$ ist **beschränkt**, falls $f ( D ) \subset \mathbb{R}$ beschränkt ist.
{.numbered}
:::

Falls $D \subset \mathbb{R}$ gibt es folgende Monotoniebegriffe:

::: definition Definition 3.1.2.{#definition-3-1-2}
Eine Funktion $f : D \to \mathbb{R}$ , mit $D \subset \mathbb{R}$ , ist

1. **monoton wachsend**, falls $\forall x , y \in D$

    $$
    x ≤ y \implies f ( x ) ≤ f ( y )
    $$

2. **streng monoton wachsend**, falls $\forall x , y \in D$

    $$
    x < y \implies f ( x ) < f ( y )
    $$

3. **monoton fallend**, falls $\forall x , y \in D$

    $$
    x ≤ y \implies f ( x ) ≥ f ( y )
    $$

4. **streng monoton fallend**, falls $\forall x , y \in D$

    $$
    x < y \implies f ( x ) > f ( y )
    $$

5. **monoton**, falls $f$ monoton wachsend oder monoton fallend

6. **streng monoton**, falls $f$ streng monoton wachsend oder streng monoton fallend ist.
{.numbered}
:::

::: example Beispiel 3.1.3.{#beispiel-3-1-3}
1. Die konstante Funktion für ein $c\in\mathbb{R}$ ist $f:ℝ\toℝ, x\mapsto c$<br>
   Die Funktion ist monoton, aber nicht streng monoton. Sie ist beschränkt, da $f(ℝ) = \{c\}$ ist.
2. Die identische Abbildung: $f:ℝ\toℝ, x\mapsto x$ <br>
   Die Funktion ist streng monoton wachsend, aber nicht nach oben beschränkt.
3. Sei $n \in \mathbb{N}$ :

    $$
    \begin{array} { r l } { f : \mathbb{R} \to \mathbb{R} } & { { } } \\ { x \mapsto x ^ { n } } & { { } } \end{array}
    $$
    
    ist genau dann (streng) monoton wachsend, falls $n$ ungerade ist:
    
    ![](/images/7e47e57252d8fbe87cc05078ba4b08ca367f55460dd9ec7e24e08d345eb0617c.png)
    
    ![](/images/0b193f3750fed1424eaf1fde9b327f8054c7478cf92ecfbade299d3558e7b0ca.png)
:::

## 3.2. Stetigkeit

::: definition Definition 3.2.1.{#definition-3-2-1}
Sei $D \subset \mathbb{R}$ , $x_0 \in D$.

Die Funktion $f : D \to \mathbb{R}$ ist in $x_0$ **stetig**, falls es für jedes $\varepsilon > 0$ ein $\delta > 0$ gibt, so dass für alle $x \in D$ die Implikation 
$$
| x - x_0 | < \delta \implies \left| f ( x ) - f ( x_0 ) \right| < \varepsilon
$$
gilt.
![](/images/b7ab845711e69b796979de24bbad1d3702faa5b67bbb0d3c67a8f6c54651fdd3.png)

Alternative Notation:
$$
∀ε>0,\ ∃δ>0\ ∀x\in D:\ |x-x_0|<δ \implies |f(x)-f(x_0)|<ε
$$
:::

Das heisst $f((x_0-δ,x_0+δ)) \subset (f(x_0)-ε, f(x_0)+ε)$.
Das Bild des Intervals $\underbrace{(x_0-δ,x_0+δ)}_{\delta\text{-Umgebung von }x_0}$ unter der Funktion $f$ ist in dem Interval $\underbrace{(f(x_0)-δ,f(x_0)+δ)}_{ε\text{-Umgebung von }f(x_0)}$ enthalten.

Das heisst dass der Funktionswert $f(x)$ underscheidet sich _beliebig wenig_ ($\varepsilon$) von $f(x_0)$ wenn man sich der Stelle $x_0$ _genügend nähert_ ($\delta$) .

::: definition Definition 3.2.2.{#definition-3-2-2}
Die Funktion $f : D \to \mathbb{R}$ ist stetig, falls sie in jedem Punkt von $D$ stetig ist.
:::

::: example Beispiel 3.2.3.{#beispiel-3-2-3}
1. Sei $n ≥ 0$ : $f : \mathbb{R} \to \mathbb{R}, x \mapsto x^n$ ist stetig.
2. $f : \mathbb{R} \to \mathbb{R}$ , $x \mapsto | x |$ ist stetig.

    ![](/images/d26f2dda539fa91cad0013ed922c232fbbeb0309edd334dbc58e87187d0f4d14.png)

3. Die Abrundungsfunktion

    $$
    \lfloor \cdot \rfloor : \mathbb{R} \to \mathbb{R} , x \mapsto \lfloor x \rfloor : = \max \{ m \in \mathbb{Z} : \ m ≤ x \}
    $$
    
    ist in jedem Punkt $x_0 \notin \mathbb { Z }$ stetig; sie ist in keinem Punkt $y \in \mathbb { Z }$ stetig. Falls $D : = \mathbb{R} \setminus \mathbb { Z }$ , dann ist
    
    $$
    \left\lfloor \cdot \right\rfloor : D \to \mathbb{R} , x \mapsto \left\lfloor x \right\rfloor
    $$
    
    stetig.
    
    ![](/images/8dda99bd3e4a9e98bca9398dbc01337c8964f7d311c94326de055a81479fb6e1.png)

4. Die Funktion $f : \mathbb{R} \to \mathbb{R}$ definiert durch:

    $$
    f ( x ) = { \left\{ \begin{array} { l l } { x } & { \quad x \in \mathbb { Q } } \\ { 1 - x } & { \quad x \not \in \mathbb { Q } } \end{array} \right. }
    $$

    ist genau in $\textstyle { \frac { 1 } { 2 } } \in \mathbb{R}$ stetig und in keinem anderen Punkt.

{.numbered}
:::

Es gibt eine sehr nützliche Charakterisierung der Stetigkeit mittels konvergenter Folgen

::: proposition Satz 3.2.4. (Folgenkriterium) {#satz-3-2-4}
Sei $x_0 \in D \subset { \mathbb{R} }$ und $f : D \to \mathbb{R}$.

Die Funktion $f$ ist in $x _ { 0 }$ stetig $\iff$ für jede Folge $( a _ { n }) _ { n ≥ 1 }\in D$ mit $\lim a_n = x_0$ gilt:

$$
\lim_{n \to \infty} f ( a _ { n } ) = f ( x_0 ) = f(\lim_{n \to \infty} a_n)
$$

**Beweis:**<br>
$( \implies )$: Sei $f$ in $x_0$ stetig und $\left( a _ { n } \right) _ { n ≥ 1 } \in D$ eine Folge mit $\displaystyle\lim_{ n \to \infty } a _ { n } = x_0$.

z.z. $\displaystyle\lim_{ n \to \infty } f ( a _ { n } ) = f ( x_0 )$.

Sei $\varepsilon > 0$, dann da $f$ in $x_0$ stetig, gibt es ein $\delta > 0$ so dass für alle $x \in D$ gilt:

$$
| x - x_0 | < \delta \implies | f ( x ) - f ( x_0 ) | < \varepsilon .
$$

Dann für dieses $\delta>0$, da $(a_n)_{n \geq 1}$ gegen $x_0$ konvergiert, gibt es ein Index $N ≥ 0, N\in\mathbb{N}$, so dass:

$$
\begin{align*}
\tag{Def. limes}  | a _ { n } - x_0 | &< \delta \qquad \forall n ≥ N
\end{align*}
$$

Dann folgt

$$
| f ( a _ { n } ) - f ( x_0 ) | < \varepsilon \qquad \forall n ≥ N
$$

und daher: $\displaystyle\lim _ { n \to \infty } f ( a _ { n } ) = f ( x_0 )$ <span class="right">$\Box$</span>

$( \impliedby )$: Beweis durch Widerspruch mit Annahme: $f$ ist in $x _ { 0 }$ nicht stetig. 

Es gibt also $\varepsilon > 0$ , so dass

$$
f\bigl((x_0 - \delta,\ x_0 + \delta) \cap D\bigr) ⊄ \Bigl(f\left(x_0\right) - \varepsilon,\ f\left(x_0\right) + \varepsilon\Bigr) \qquad \forall \delta > 0
$$

Insbesondere gibt es für jedes $n ≥ 1$ , $n \in \mathbb{N} \left( { \mathrm { m i t ~ } } \delta = { \frac { 1 } { n } } \right)$ ein

$$
a_{ n } \in \left( x_0 - { \tfrac { 1 } { n } } ,\ x_0 + { \tfrac { 1 } { n } } \right) \cap D
$$

mit

$$
f(a_n) \notin \left(f\left(x_0\right) - \varepsilon,\ f\left(x_0\right) + \varepsilon\right)
$$

Damit entsteht eine Folge $\left( a _ { n } \right) _ { n ≥ 1 }$ in $D$ mit

$$
\lim_{ n \to \infty } a _ { n } = x _ { 0 }
$$

und

$$
| f ( a _ { n } ) - f ( x_0 ) | ≥ \varepsilon \qquad \forall n ≥ 1 .
$$

Somit kann die Folge $( f ( a _ { n } ) ) _ { n ≥ 1 }$ nicht gegen $f ( x_0 )$ konvergieren. <span class="right">$\Box$</span>
:::

Aus dem entsprechenden Satz für Folgen ([Satz 2.1.8](/2-folgen-reihen#satz-2-1-8)) erhalten wir mit [Satz 3.2.4](#satz-3-2-4)

::: proposition Korollar 3.2.5.{#korollar-3-2-5}
Sei $x_0 \in D \subset { \mathbb{R} }$ , $\lambda \in \mathbb{R}$ und $f : D \to \mathbb{R}$ , $g : D \to \mathbb{R}$ beide stetig in $x _ { 0 }$ .

1. Dann sind $f + g , \lambda \cdot f , f \cdot g$ stetig in $x _ { 0 }$

2. Falls $g ( x_0 ) \neq 0$ dann ist

    $$
    \begin{aligned}
    \displaystyle\frac { f } { g } : \left\{ x \in D : \ g ( x ) \neq 0 \right\} &\to \mathbb{R} \\
     x &\mapsto \displaystyle \frac { f ( x ) } { g ( x ) }
     \end{aligned}
    $$
    
    stetig in $x _ { 0 }$ .

{.numbered}
:::


::: example Beispiel aus der Vorlesung
1. Die Funktion $f : \mathbb{R} \to \mathbb{R}$ , $x \mapsto x+1$ ist auch stetig, da sie eine konstante Funktion plus die identische Abbildung ist.
2. Die Funktion $f : \mathbb{R} \to \mathbb{R}$ , $x \mapsto \frac{x+1}{x}$ ist auch stetig in $x_0 \in ℝ\setminus \{0\}$, da sie eine konstante Funktion plus die identische Abbildung geteilt durch eine stetige Funktion ist.
:::

::: definition Definition 3.2.6.{#definition-3-2-6}
Eine polynomiale Funktion $P : \mathbb{R} \to \mathbb{R}$ ist eine Funktion der Form

$$
P ( x ) = a _ { n } x ^ { n } + \cdot \cdot \cdot + a _ { 0 }
$$

wobei : $a _ { n }$ , . . . , $a _ { 0 } \in \mathbb{R}$ . Falls $a _ { n } \neq 0$ ist $n$ der Grad von $P$ .
:::

::: proposition Korollar 3.2.7.{#korollar-3-2-7}
Polynomiale Funktionen sind auf ganz $ℝ$ stetig.

**Beweis:** Wiederholte Anwendung von [Korollar 3.2.5](#korollar-3-2-5) mit $f(x)=x$
:::

::: proposition Korollar 3.2.8.{#korollar-3-2-8}
Seien $P$ , $Q$ polynomiale Funktionen auf R mit $Q \ \ne \ 0$ . Seien $x _ { 1 } , \dots , x _ { m }$ die Nullstellen von $Q$ . Dann ist

$$
\begin{aligned}\displaystyle \frac { P } { Q } : \mathbb{R} \setminus \{ x _ { 1 } , \ldots x _ { m } \} &\to \mathbb{R} \\ 
\displaystyle x \qquad &\mapsto \frac { P ( x ) } { Q ( x ) } \end{aligned}
$$

stetig.
:::

::: proposition Satz aus Vorlesung
Sei $D,E\subset \mathbb{R}$ zwei Teilmengen und $f:D\to E$ und $g:E\to ℝ$ zwei Funktionen. Sei $x_0 \in D$

Falls $f$ in $x_0$ und $g$ in $f(x_0)\in E$ stetig sind, dann ist die Verknüpfung $g \circ f : D \to ℝ$ in $x_0$ stetig. 
:::

::: example Beispiel für nicht stetige Funktionen
1. Wir definieren die Funktion $g$:
    $$
    g(x) := \begin{cases}
    1 & \text{falls } x ≥ 0 \\
    0 & \text{falls } x < 0
    \end{cases}
    $$
    Die Funktion $g$ ist nicht stetig in $0$
2. Eine Funktion die nirgendwo stetig ist (die _Indikatorfunktion der rationalen Zahlen_):
    $$
    \begin{aligned}
    \mathbb{I}_\mathbb{Q} : ℝ &\to ℝ\\
    x &\mapsto \begin{cases}
    1 & \text{falls } x \in \mathbb{Q} \\
    0 & \text{falls } x \notin \mathbb{Q}
    \end{cases}
    \end{aligned}
    $$
    Die Funktion $\mathbb{I}_\mathbb{Q}$ ist in keinem Punkt von $x\inℝ$ stetig.

    **Beweis:**<br>
    Sei $x_0 \in ℝ \setminus \mathbb{Q}$ eine irrationale Zahl. (z.B. $\pi = 3.14…$)

     Sei $a_k$ die an der $k$-ten Stelle der Dezimaldarstellung von $x_0$.

    $$
    x_0 = \pi, \quad a_1 = 3, \quad a_2 = 3.1, \quad a_3 = 3.14, \quad \ldots
    $$
    Das heisst $a_k \in \mathbb{Q}$ für alle $k \in \mathbb{N}$.

    Wenn wir die Indikatorfunktion $\mathbb{I}_\mathbb{Q}(a_k) = 1$ für alle $k \in \mathbb{N}$ betrachten, dann ist die Folge $\left(\mathbb{I}_\mathbb{Q}(a_k)\right)_{k \in \mathbb{N}} = (1, 1, 1, \ldots)$ konstant und konvergiert gegen $1$.
    $$
    \lim_{k \to \infty} \mathbb{I}_\mathbb{Q}(a_k) = 1
    $$
    Andererseits haben wir:$\displaystyle\lim_{k \to \infty} a_k = x_0 \in ℝ \setminus \mathbb{Q}$ und
    $$
    \mathbb{I}_\mathbb{Q}(\displaystyle\lim_{k \to \infty} a_k) = \mathbb{I}_\mathbb{Q}(x_0) = 0
    $$
    Das heisst
    $$
    1 = \lim_{k \to \infty} \mathbb{I}_\mathbb{Q}(a_k) ≠ \mathbb{I}_\mathbb{Q}(\lim_{k \to \infty} a_k) = 0
    $$
    und somit bedeutet das, dass die Funktion $\mathbb{I}_\mathbb{Q}$ nicht stetig in $x_0$ ist. <span class="right">$\Box$</span>
:::

## 3.3. Der Zwischenwertsatz
(Intermediate Value Theorem, IVT)

Seien $x _ { 1 }$ , $x _ { 2 } \in \mathbb{R}$ : dann liegt $c$ zwischen $x _ { 1 }$ und $x _ { 2 }$ falls:

$$
\begin{array} { l l } { x _ { 1 } ≤ x _ { 2 } , } & { c \in \left[ x _ { 1 } , x _ { 2 } \right] } \\ { x _ { 2 } ≤ x _ { 1 } , } & { c \in \left[ x _ { 2 } , x _ { 1 } \right] . } \end{array}
$$


::: proposition Satz 3.3.1. (Zwischenwertsatz){#satz-3-3-1}
Sei $I \subset \mathbb{R}$ ein abgeschlossenes Intervall, $f : I \to \mathbb{R}$ eine stetige Funktion und $a$ , $b , \in I$.

Für jedes $c$ zwischen $f ( a )$ und $f ( b )$ gibt es mindestens ein $y$ zwischen $a$ und $b$ mit $f ( y ) = c$ .

![](/images/ee5d34e4f8b0e5e83077c6cfb4289070e11a15da0226f2acfe20a2af7e5910a2.png)

**Beweis:**<br> Ohne Einschränkung der Allgemeinheit (O.E.d.A) können wir

<center>

$a ≤ b$ und $f ( a ) ≤ f ( b )$
</center>

annehmen. Sei also : $f ( a ) ≤ c ≤ f ( b )$ . Wir definieren:

$$
M = \left\{ x \in [ a , b ] : f ( x ) ≤ c \right\}
$$

Sei $z : = \sup M$ , wir zeigen

$$
f ( z ) = c .
$$

Zunächst bemerken wir, dass $\sup M$ existiert: $a \in M$ , insbesondere $M \neq \emptyset$ und $M \subset$ $[a , b]$, insbesondere ist $M$ beschränkt.

![](/images/de8545b3c6750b7b6679d933549b188403d34ccd81d51478af8638462f0c7014.png)

Wir zeigen, dass $f ( z ) = c$ mittels einem Widerspruchsbeweis.

1. Anname $f ( z ) < c$ : Insbesondere gilt

    $$
    z < b
    $$
    
    da sonst aus $z = b$ , $f ( z ) = f ( b ) ≥ c$ folgt, entgegen der Annahme $f ( z ) < c$ .
    
    ![](/images/a83b0bfb507815412c686a564d2926e72aa724c692a1de8a1a40278b984f81f4.png)
    
    Sei nun $\varepsilon = { \frac { c - f ( z ) } { 2 } }$ und sei $\delta > 0$ dementsprechend, so dass:
    
    $$
    f \left(\left( z - \delta,\ z + \delta \right) \cap [ a , b ] \right) \subset \left( f ( z ) - \varepsilon , f ( z ) + \varepsilon \right)
    $$
    
    Da $z < b$ folgt $(z , z + \delta) \cap [ a , b ] \neq \emptyset .$
    
    ![](/images/b1f1d5aa1ab90369130f7c70d9d9be186951dbad46d7eeab292cb08c60babc57.png)
    
    Sei also $z ^ { \prime } \in \left( z , z + \delta \right) \cap [a , b]$ . Dann folgt:
    
    $$
    f ( z ^ { \prime } ) \in \left( f ( z ) - \varepsilon , f ( z ) + \varepsilon \right)
    $$
    
    insbesondere
    
    $$
    f ( z ^ { \prime } ) < f ( z ) + \varepsilon < f ( c ) .
    $$
    
    Zusammen mit $z ^ { \prime } > z$ führt dies zu einem Widerspruch mit der Definition von sup $M$ .

2. Annahme $f ( z ) > c$ :

    ![](/images/c9226e2feed40e19909f746ece1e7c746e5df76f418d1b0e9808934eb84b9d91.png)
    
    Sei $\varepsilon = { \frac { f ( z ) - c } { 2 } }$ und $\delta > 0$ , so dass
    
    $$
    f \left( \left( z - \delta ,\ z + \delta \right) \cap [ a , b ] \right) \subset \left( f ( z ) - \varepsilon , f ( z ) + \varepsilon \right)
    $$
    
    Da $z = \sup M$ folgt $(z - \delta , z ] \cap M \neq \emptyset$ .
    
    Sei also $x \in \left( z - \delta , z \right] \cap M$ . Es folgt dann $f ( x ) ≤ c \ \left( x \in M \right)$ und
    
    $$
    f ( x ) \in \left( f ( z ) - \varepsilon , f ( z ) + \varepsilon \right)
    $$
    
    insbesondere
    
    $$
    f ( x ) > f ( z ) - \varepsilon > c .
    $$
{.numbered}

Dies führt zu einem Widerspruch. Da beide Annahmen (1) und (2) zu einem Widerspruch führen, folgt $f ( z ) = c$ und der Satz ist bewiesen. <span class="right">$\Box$</span>
:::

::: proposition Korollar (Existenz von Nullstellen)
Sei $f:[a,b]\toℝ$ stetig. Falls $f(a)<0$, $f(b)>0$ dann gibt es ein $c\in(a,b)$ mit $f(c)=0$.
:::

::: proposition Korollar 3.3.2.{#korollar-3-3-2}
Sei $P ( x ) = a _ { n } x ^ { n } + a _ { n - 1 } x ^ { n - 1 } + \cdot \cdot \cdot + a _ { 0 }$ ein Polynom mit $a _ { n } \neq 0$ und $n$ ungerade. Dann besitzt $P$ mindestens eine Nullstelle in $\mathbb{R}$ .

**Beweis:**<br> O.E.d.A können wir $a _ { n } = 1$ annehmen. Für $x \neq 0$ betrachte:

$$
{ \frac { P ( x ) } { x ^ { n } } } = \underbrace { 1 + a _ { n - 1 } x ^ { - 1 } + a _ { n - 2 } x ^ { - 2 } + \cdots + a _ { 0 } x ^ { - n } } _ { Q ( x ) }
$$

Da

$$
\lim _ { m \to \infty } \left( { \frac { 1 } { m } } \right) ^ { j } = 0 \qquad 1 ≤ j ≤ n
$$

und

$$
\lim _ { m \to \infty } \left( - { \frac { 1 } { m } } \right) ^ { j } = 0 \qquad 1 ≤ j ≤ n
$$

gibt es $N \in \mathbb{N}$ , $N ≥ 1$ , so dass:

$$
{ \frac { 1 } { 2 } } ≤ Q ( N ) ≤ { \frac { 3 } { 2 } } , \quad { \frac { 1 } { 2 } } ≤ Q ( - N ) ≤ { \frac { 3 } { 2 } }
$$

Daraus folgt

$$
P ( N ) = N ^ { n } Q ( N ) > 0 , \quad P ( - N ) = ( - N ) ^ { n } Q ( - N ) < 0 \mathrm { ~ ( n ~ u n g e r a d e ) . }
$$

Der Zwischenwertsatz angewendet auf

$$
P : [ - N , N ] \to \mathbb{R}
$$

garantiert dann die Existenz von $z \in \left\lfloor - N , N \right\rfloor$ mit $P ( z ) = 0$ .
:::

::: proposition Bemerkung 3.3.3.{#bemerkung-3-3-3}
Für $c > 0$ besitzt $Q ( x ) = x ^ { 2 } + c$ keine Nullstelle in $\mathbb{R}$
:::

::: proposition Korollar
Jede $n\times n$ Matrix mit reellen Koeffizienten und $n$ ungerade besitzt mindestens einen reellen Eigenwert $\lambda \in ℝ$.
:::

## 3.4. Der Min-Max Satz

In diesem Abschnitt zeigen wir, dass eine stetige Funktion auf einem kompakten Intervall beschränkt ist und zudem ein Maximum und ein Minimum annimmt. Wir betrachten zunächst folgende Beispiele:

::: example Beispiel 3.4.1.{#beispiel-3-4-1}

1. $f : [ 0 , + \infty ) \to \mathbb{R} , \ x \mapsto x ^ { 2 }$

    ![](/images/94146d888f7a1e25057a70c971febbf7a216a927da09785f69bb73425ba0e3be.png)
    
    ist stetig aber nicht beschränkt.

2. $f : ( 0 , 1 ] \to \mathbb{R} , \ x \mapsto { \frac { 1 } { x } }$
    
    ![](/images/e39aeec2092b972b07804020660ace296519b1b09da83c8f329fb56c858b76e3.png)
    
    ist stetig aber nicht beschränkt. 

3. $f : [ 0 , 1 ) \to \mathbb{R} , \ x \mapsto x$

    ![](/images/e4d87459117a31ceb0e58be3c869e6103a557830c798fd4ad0e4feac30c47eb7.png)
    
    ist stetig, beschränkt, nimmt aber kein Maximum an: es gibt kein $a \in [0 , 1 )$ , so dass $f ( x ) ≤ f ( a )$ $\forall x \in [ 0 , 1 )$ .

{.numbered}
:::

::: definition Definition 3.4.2.{#definition-3-4-2}
Ein Intervall $I \subset ℝ$ ist kompakt, falls es von der Form

$$
I = [ a , b ] ,\quad a ≤ b, \quad a,b\in ℝ
$$

ist.
:::

Als Vorbereitung zum Beweis führen wir noch folgende Begriffe ein: Seien allgemein $D$ eine Menge und $f , g : D \to \mathbb{R}$ Funktionen. Wir bezeichnen:

$$
\begin{array} { r l } { | f | ( x ) : = | f ( x ) | , \quad } & { \forall x \in D } \\ { \max ( f , g ) ( x ) : = \max \left( f ( x ) , g ( x ) \right) , \quad } & { \forall x \in D } \\ { \min ( f , g ) ( x ) : = \min \left( f ( x ) , g ( x ) \right) , \quad } & { \forall x \in D . } \end{array}
$$

![](/images/5d8d4ee030a0079746d83724f1ff1d603319966776e9a0e62c19b40f5dd7c60d.png)  


::: proposition Lemma 3.4.3.{#lemma-3-4-3}
Sei $D \subset \mathbb{R}$, $x_0 \in D$ und $f : D \to \mathbb{R}$ Funktionen stetig in $x_0$. Dann sind $|f|$, $\max\{f,g\}$ und $\min\{f,g\}$ stetig in $x_0$.

**Beweis:**
1. Zu $\vert f \vert : \mathrm { S e i } \ \varepsilon > 0$ und $\delta > 0$ , so dass $\forall x \in D$ die Implikation $| x - x_0 | < \delta \implies | f ( x ) - f ( x_0 ) | < \varepsilon$

    gilt. Dann folgt:
    
    $$
    | | f | ( x ) - | f | ( x_0 ) | = | | f ( x ) | - | f ( x_0 ) | | ≤ | f ( x ) - f ( x_0 ) | < \varepsilon
    $$
    
    und somit ist $| f |$ stetig.

2. Zunächst bemerken wir: $\forall u , v \in \mathbb{R}$ :

    $$
    \max ( u , v ) = { \frac { u + v + | u - v | } { 2 } } , \quad \min ( u , v ) = { \frac { u + v - | u - v | } { 2 } }
    $$
    
    Folglich:
    
    $$
    \max ( f , g ) = { \frac { f + g + | f - g | } { 2 } } , \quad \min ( f , g ) = { \frac { f + g - | f - g | } { 2 } }
    $$
    
    Aus Korollar 3.2.5(1) folgt, dass $f + g$ und $f - g$ in $x _ { 0 }$ stetig sind; aus (1) folgt dann, dass $| f - g |$ in $x _ { 0 }$ stetig ist. Wiederholte Anwendung von Korollar 3.2.5(1) impliziert dann, dass $\max ( f , g )$ und $\min ( f , g )$ in $x _ { 0 }$ stetig sind.

{.numbered}
:::

Eine wesentliche Eigenschaft kompakter Intervalle wollen wir hier hervorheben.

::: proposition Lemma 3.4.4.{#lemma-3-4-4}
Sei $\left( x _ { n } \right) _ { n ≥ 1 }$ eine konvergente Folge in $\mathbb{R}$ mit Grenzwert

$$
\lim _ { n \to \infty } x _ { n } \in \mathbb{R} .
$$

Sei $a ≤ b$ . Falls $\{ x _ { n } : n ≥ 1 \} \subset [ a , b ]$ folgt

$$
\lim _ { n \to \infty } x _ { n } \in [ a , b ] .
$$

**Beweis:**<br>
Aus $a ≤ x _ { n } ≤ b \quad \forall n ≥ 1$ folgt mit Satz 2.1.8(4):

$$
a ≤ \lim _ { n \to \infty } x _ { n } ≤ b .
$$
:::

::: proposition Satz 3.4.5. Min-Max-Satz {#satz-3-4-5}
Sei $f : I = [a , b] \to \mathbb{R}$ stetig auf einem kompakten Intervall $I$ . Dann gibt es $u \in I$ und $v \in I$ mit

$$
f ( u ) ≤ f ( x ) ≤ f ( v ) \qquad \forall x \in I .
$$

Insbesondere ist $f([a,b])$ beschränkt. d.h. $f(u) = \inf \{f(x): x\in I\}$ und $f(v) = \sup \{f(x): x\in I\}$.

**Beweis:**<br>
Wir beweisen zunächst die Existenz von $v$ mit der Eigenschaft $f \left( x \right) ≤ f \left( v \right)$ für alle $x \in [ a , b ]$ . Sei

$$
g ( x ) = \max \left( 1 , { \frac { 3 } { 2 } } - f ( a ) + f ( x ) \right) .
$$

Dann ist $g : \left[ a , b \right] \to \mathbb{R}$ stetig und $g ( x ) ≥ 1$ .

Dann folgt aus Korollar 3.2.5(2), dass

$$
{ \frac { 1 } { g } } : [ a , b ] \to \mathbb{R} , x \mapsto { \frac { 1 } { g ( x ) } }
$$

stetig ist.

Nun gilt $0 < { \frac { 1 } { g ( x ) } }$ für alle $x \in [ a , b ]$ , also existiert

$$
s : = \operatorname* { i n f } \left\{ { \frac { 1 } { g ( x ) } } : x \in [ a , b ] \right\} .
$$

Für jedes ${ \boldsymbol { n } } \in \mathbb{N}$ , $n ≥ 1$ gibt es per Definition des Infimums ein $x _ { n } \in \left\lfloor a , b \right\rfloor$ mit

$$
s ≤ \frac { 1 } { g ( x _ { n } ) } < s + \frac { 1 } { n } .
$$

Nach Bolzano-Weierstrass gibt es eine Teilfolge $\left( x _ { l ( n ) } \right) _ { n ≥ 1 }$ die konvergiert, denn $\left( x _ { n } \right) _ { n ≥ 1 }$ ist beschränkt. Sei

$$
v : = \lim _ { n \to \infty } x _ { l ( n ) } .
$$

Dann folgt aus Lemma 3.4.4, dass

$$
v \in [ a , b ] .
$$

Aus der Stetigkeit von $\frac { 1 } { g }$ und Satz 3.2.4 folgt:

$$
s ≤ { \frac { 1 } { g ( v ) } } = \lim _ { n \to \infty } { \frac { 1 } { g ( x _ { l ( n ) ) } } } ≤ s + \lim _ { n \to \infty } { \frac { 1 } { l ( n ) } } = s + 0
$$

und somit folgt

$$
{ \frac { 1 } { g ( v ) } } = s .
$$

Insbesondere:

$$
{ \frac { 1 } { g ( v ) } } ≤ { \frac { 1 } { g ( x ) } } \qquad \forall x \in [ a , b ] ,
$$

das heisst

$$
g ( x ) ≤ g ( v ) \qquad \forall x \in [ a , b ] .
$$

Aus der Definition von $g$ folgt:

$$
{ \frac { 3 } { 2 } } - f ( a ) + f ( x ) ≤ g ( v ) \qquad \forall x \in [ a , b ] .
$$

Da

$$
g ( a ) = \max \left( 1 , \frac { 3 } { 2 } \right) = \frac { 3 } { 2 }
$$

folgt

$$
g ( v ) = \max \left( 1 , { \frac { 3 } { 2 } } - f ( a ) + f ( v ) \right) ≥ { \frac { 3 } { 2 } }
$$

woraus

$$
g ( v ) = { \frac { 3 } { 2 } } - f ( a ) + f ( v )
$$

folgt. Wir haben gezeigt: $\forall x \in [ a , b ]$ :

$$
{ \frac { 3 } { 2 } } - f ( a ) + f ( x ) ≤ { \frac { 3 } { 2 } } - f ( a ) + f ( v )
$$

woraus

$$
f \left( x \right) ≤ f \left( v \right)
$$

folgt. Wir können dies jetzt auf $- f$ anwenden und erhalten die Existenz von $u \in [ a , b ]$ mit

$$
- f ( x ) ≤ - f ( u ) \qquad \forall x \in [ a , b ] ,
$$

das heisst

$$
f \left( u \right) ≤ f \left( x \right)
$$

und der Satz ist bewiesen. <span class="right">$\Box$</span>
:::

::: proposition Korollar
Sei $f:I\to \mathbb{R}$ eine stetige Funktion auf einem kompakten Intervall $I$.

Dann ist das Bild von $f$ = $f(I)$ = $\{f(x): x\in I\}$ auch ein kompaktes Intervall $J = [\min f,\max f]$.
:::

## 3.5. Der Satz über die Umkehrabbildung

Im Kontext der Umkehrabbildung stellt sich allgemein die Frage der Stetigkeit unter Verknüpfung.

::: proposition Satz 3.5.1.{#satz-3-5-1}
Seien $\mathbf { \mathscr { D } } _ { 1 } , \mathbf { \mathscr { D } } _ { 2 } \subset \mathbf { \mathscr { R } }$ zwei Teilmengen, $f : D _ { 1 } \to D _ { 2 }$ , $g : D _ { 2 } \to \mathbb{R}$ Funktionen, sowie $x_0 \in D _ { 1 }$ . Falls $f$ in $x _ { 0 }$ und $g$ in $f ( x_0 )$ stetig sind, so ist

$$
g \circ f : D _ { 1 } \to \mathbb{R}
$$

in $x _ { 0 }$ stetig.

**Beweis:**<br>
Wir wollen das Stetigkeitskriterium (Satz 3.2.4) anwenden. Sei $\left( a _ { n } \right) _ { n ≥ 1 }$ eine Folge in $D _ { 1 }$ mit

$$
\lim _ { n \to \infty } a _ { n } = x_0 .
$$

Da $f$ stetig in $x _ { 0 }$ folgt (mit Satz 3.2.4)

$$
\lim _ { n \to \infty } f ( a _ { n } ) = f ( x_0 )
$$

und da $g$ in $f ( x_0 )$ stetig, folgt (mit Satz 3.2.4)

$$
\lim _ { n \to \infty } g \left( f ( a _ { n } ) \right) = g \left( f ( x_0 ) \right)
$$

woraus (mit Satz 3.2.4) die Stetigkeit von $g \circ f$ in $x _ { 0 }$ folgt.
:::

::: proposition Korollar 3.5.2.{#korollar-3-5-2}
Falls in Satz 3.5.1 $f$ auf $D _ { 1 }$ und $g$ auf $D _ { 2 }$ stetig sind, so ist $g \circ f$ auf $D _ { 1 }$ stetig.
:::

::: proposition Satz 3.5.3. (Umkehrabbildung) {#satz-3-5-3}
Sei $I$ ein Intervall und $f: I \to \mathbb{R}$ eine stetig streng monoton wachsende (fallende) Funktion.

Dann ist das Bild von $f(I) = J$ ein Intervall und die Umkehrfunktion $f^{-1}: J \to I$ ist stetig und streng monoton wachsend (fallend).

**Beweis:**
1. $f$ ist injektiv<br>
    Da $f$ streng monoton wachsend (fallend) ist, und falls $x≠y$ dann ist $f(x)≠f(y)$.
    
    Falls $x≠y$ dann ist $x<y$ (oder $x>y$) und somit ist $f(x)<f(y)$ (oder $f(x)>f(y)$).
2. $f$ ist surjektiv<br>
    Sei $c=f(a)$, $d=f(b)$.

    Da $a≠b$, $c≠d$ und sei $y\in [c,d]$.

    Nach dem Zwischenwertsatz gibt es ein $x\in [a,b]$ so dass $f(x)=y$.

    Mit (1) und (2) existiert somit eine Umkehrabbildung $f^{-1}: [c,d] \to [a,b]$

3. $f^{-1}$ ist streng monoton wachsend (fallend), was direkt aus Monotonität von $f$ folgt.

4. $f^{-1}$ ist stetig<br>
    Wir zeigen die Stetigkeit von $f^{-1}$ mit dem Folgenkriterium [(Satz 3.2.4)](#satz-3-2-4).

    Sei $y \in [ f ( a ) , f ( b ) ]$ und $\left( y _ { n } \right) _ { n ≥ 1 }$ eine Folge in $[ f ( a ) , f ( b ) ]$ mit
    
    $$
    \lim _ { n \to \infty } y _ { n } = y .
    $$
    
    Sei $x _ { n } = f ^ { - 1 } ( y _ { n } ) , \ x = f ^ { - 1 } ( y )$ . Falls $\left( x _ { n } \right) _ { n ≥ 1 }$ nicht gegen $x$ konvergiert, gibt es $\varepsilon > 0$ , so dass
    
    $$
    \left\{ n \in \mathbb{N} : x _ { n } \not \in \left( x - \varepsilon , x + \varepsilon \right)\right\}
    $$
    
    unendlich ist. Es gibt also eine Teilfolge $\left( x _ { \ell ( n ) } \right) _ { n ≥ 1 }$ mit $\ell : \mathbb { N } \to \mathbb { N }$ mit
    
    $$
    \left| x _ { \ell ( n ) } - x \right| ≥ \varepsilon \quad\forall n ≥ 1 .
    $$
    
    Nach Bolzano-Weierstrass (bemerke $[a, b]$ ist beschränkt) gibt es eine Teilfolge $\left(x_{\ell ( \ell ^ { \prime } ( n ) ) }\right)_{n≥1}$ die konvergiert. Sei $z \in [ a , b ]$ deren Grenzwert:
    
    $$
    z = \lim _ { n \to \infty } x _ { \ell ( \ell ^ { \prime } ( n ) ) } .
    $$
    
    Dann folgt aus $\left| x _ { \ell ( \ell ^ { \prime } ( n ) ) } - x \right| ≥ \varepsilon$ , dass
    
    $$
    | z - x | ≥ \varepsilon
    $$
    
    und aus der Stetigkeit von $f$ :
    
    $$
    f ( z ) = \lim _ { n \to \infty } f \left( x _ { \ell ( \ell ^ { \prime } ( n ) ) } \right) = \lim _ { n \to \infty } y _ { \ell ( \ell ^ { \prime } ( n ) ) } = y = f ( x ) .
    $$
    
    Also ein Widerspruch zur Injektivität von $f$ . Dies beweist die Stetigkeit von $f ^ { - 1 }$. <span class="right">$\Box$</span>

{.numbered}
:::

::: example Beispiel 3.5.4.{#beispiel-3-5-4}
Sei $n ≥ 1$ . Dann ist

$$
\begin{array} { c } { { \left[ 0 , \infty \right) \to \left[ 0 , \infty \right) } } \\ { { x \mapsto x ^ { n } } } \end{array}
$$

streng monoton wachsend, stetig und surjektiv. Nach dem Umkehrsatz existiert eine streng monoton wachsende stetige Umkehrabbildung

$$
\begin{array} { r } { { \left[ 0 , \infty \right) \to \left[ 0 , \infty \right) } } \\ { x \mapsto { \sqrt [ n ] { x } } } \end{array}
$$

genannt die $n$ -te Wurzel.
:::

## 3.6. Die reelle Exponentialfunktion

In Beispiel 2.7.18 haben wir die Exponentialfunktion $\exp : \mathbb{C} \to \mathbb{C}$ durch eine in ganz $\mathbb { C }$ absolut konvergente Potenzreihe definiert:

$$
\exp ( z ) : = \sum _ { n = 0 } ^ { \infty } { \frac { z ^ { n } } { n ! } }
$$

Wir studieren jetzt eingehender diese Funktion für $z \in \mathbb{R}$ .

::: proposition Satz 3.6.1.{#satz-3-6-1}
$\exp : \mathbb{R} \to ( 0 , + \infty )$ ist streng monoton wachsend, stetig und surjektiv.

**Beweis:**<br>
Aus [Korollar 3.6.2](#korollar-3-6-2) folgt $\exp ( \mathbb{R} ) \subset (0 , + \infty)$ und aus [Korollar 3.6.3](#korollar-3-6-3) folgt, dass $\exp$ streng monoton wachsend ist.

**Zur Stetigkeit:**
1. Stetigkeit in $0$.

    Für $|x|<1$, $n\in \mathbb{N}$ gilt:
    $|x|^{n-1} ≤ 1$ und es gilt

    $$
    \begin{align*}
    |\exp(x) - 1| &= \left| \sum_{n=1}^{\infty} \frac{x^n}{n!}\right|\\
     &≤ |x| \cdot \sum_{n=1}^{\infty} \frac{|x|^{n-1}}{n!} \\
    \tag{|x|<1}&≤ |x| \cdot \underbrace{\frac1{n!}}_{e-1} \\
    |\exp(x) - 1| &≤ |x| \cdot (e-1)
    \end{align*}
    $$

    Sei nun $(x_n)$ eine Folge die gegen $\lim x_n = 0$ konvergiert, dann gibt es für ein genug grosses $N$, dass alle Folgenelemente nach $N$ kleiner als $1$ sind.

    $$
    \begin{CD}
   0 @. ≤ @. |\exp(x_n) - 1| @. ≤ @. |x_n| \cdot (e-1)\\
   @VVV @. @VV{\text{Sandwichsatz}}V @.  @VVV\\
   0 @. @. |\exp(x_n) - 1| \to 0 @. @. 0\\
   \end{CD}
    $$

    $\implies \exp(x_n) \xrightarrow[n\to\infty]{} 1 = \exp(0)$.

    Mit einer Folge die gegen $0$ konvergiert, haben wir $\lim(\exp(x_n)) = \exp(\lim x_n)$ und somit ist $\exp$ in $0$ stetig.

2. Stetigkeit überall.

    Um zu zeigen dass $\exp$ überall stetig ist, genügt es zu zeigen, dass $\exp(x_n) \to \exp(x_0)$. Das heisst $\lim\exp(x_n) = \exp(\lim x_n)$.

    $$
    \begin{aligned}
    \exp(x_n) &= \exp(x_n - x_0 + x_0)\\
    &= \exp(x_n - x_0) \cdot \exp(x_0)
    \end{aligned}
    $$

    Was passiert wenn wir die Folge $y_n = x_n - x_0$ betrachten? Dann haben wir $\lim y_n = 0$ und somit 

    $$
    \begin{aligned}
    \lim \exp(x_n) &= \lim \exp(x_n - x_0 + x_0)\\
    &= \lim \exp(y_n) \cdot \exp(x_0)\\
    &= \exp(x_0) \cdot \lim \exp(y_n)\\
    &= \exp(x_0) \cdot \underbrace{\lim \exp(y_n)}_{1}\\
    &= \exp(x_0)
    \end{aligned}
    $$

    So haben wir falls $(x_n) \to x_0$ 

    $$
    \exp(x_n) \to \exp(x_0)
    $$

    und somit ist $\exp$ stetig in $x_0 \in ℝ$.

**Surjektivität**:
Wir haben

$$
\lim _ { n \to \infty } \left( 1 + { \frac { 1 } { n } } \right) ^ { n } = \exp(1) = e
$$

Wir bemerken, dass

$$
\left( 1 + { \frac { 1 } { n } } \right) ^ { n } ≥ 1 + 1 = 2
$$

und somit $e ≥ 2$ . Daraus folgt

$$
\exp ( n ) = e ^ { n } ≥ 2 ^ { n } \qquad \forall n ≥ 0
$$

und

$$
\exp ( - n ) = \frac1{e^n} = e ^ { - n } ≤ 2 ^ { - n } .
$$

Also ist nach dem Zwischenwertsatz ist das Interval im Bild der Exponentialfunktion

$$
\left[ 2 ^ { - n } , 2 ^ { n } \right] \subset \exp \left( \left[ - n , n \right] \right)
$$

und somit

$$
\begin{aligned}
(0 , + \infty) &= \bigcup _ { n ≥ 1 } [ 2 ^ { - n } , 2 ^ { n } ] \\
&\subset \exp \left( \bigcup_{n≥1}[-n,n]\right)\\
&= \exp((-\infty , + \infty)) .
\end{aligned}
$$

Daraus folgt $\exp((-∞,∞) = \exp ( \mathbb{R} ) = (0 , + \infty)$ und der Satz ist bewiesen.
:::

Wir zeigen einige Eigenschaften von $\exp$, die von unabhängigem Interesse sind. Mit

$$
\exp ( x ) = 1 + x + { \frac { x ^ { 2 } } { 2 ! } } + { \frac { x ^ { 3 } } { 3 ! } } + \cdots ≥ 1
$$

für $x ≥ 0$ folgt aus [2.7.27](/2-folgen-reihen#satz-2-7-27) mit

$$
\exp ( - x ) \exp ( x ) = 1
$$

::: proposition Korollar 3.6.2.{#korollar-3-6-2}
$$
\exp ( x ) > 0 \qquad \forall x \in \mathbb{R} .
$$
**Beweis:**
- Falls $x=0$, dann ist $\exp ( 0 ) = 1 > 0$.
- Falls $x>0$, dann ist $\exp ( x ) = 1 + x + { \frac { x ^ { 2 } } { 2 ! } } + { \frac { x ^ { 3 } } { 3 ! } } + \cdots ≥ 1 > 0$.
- Falls $x<0$, dann wegen $\exp(a) \exp(-a) = \exp(a+b)$ mit $a=x$ und $b=-x$ folgt $\exp(x-x) = \exp(0) = 1 =\exp(x)\exp(-x)$
und somit muss $\exp(-x) = \frac1{\exp(x)} > 0$.

Damit ist $\exp(x) > 0$ für alle $x \in \mathbb{R}$ bewiesen.
:::

Aus der Potenzreihendarstellung von $\exp$ folgt ausserdem:

$$
\exp ( x ) > 1 \qquad \forall x > 0
$$

Falls jetzt $y < z$ , dann folgt (aus [2.7.27](/2-folgen-reihen#satz-2-7-27)):

$$
\exp ( z ) = \exp ( y + ( z - y ) ) = \exp ( y ) \exp ( z - y )
$$

und da $\exp ( z - y ) > 1$ , folgt:

::: proposition Korollar 3.6.3.{#korollar-3-6-3}
$$
\exp ( z ) > \exp ( y ) \qquad \forall z > y .
$$

**Beweis:**<br>
Sei $x>y$. Dann ist $x-y>0$ und somit $\exp ( x - y ) > 1$.

$$
\begin{aligned}
\exp ( x ) &= \exp ( y - y + y)\\
&=  \underbrace{\exp ( x - y )}_{>1}\cdot \exp ( y )\\
\implies exp(x) &> \exp ( y )
\end{aligned}
$$
:::

Eine Ungleichung, die wir im Stetigkeitsbeweis benützen werden, ist:

::: proposition Korollar 3.6.4.{#korollar-3-6-4}
$$
\exp ( x ) ≥ 1 + x \qquad \forall x \in \mathbb{R} .
$$

**Beweis:**<br>
Dafür benützen wir (siehe [Korollar 2.7.29](/2-folgen-reihen#korollar-2-7-29)) die Bernoulli Ungleichung.

$$
\exp ( x ) = \lim _ { n \to \infty } { \Big ( } 1 + { \frac { x } { n } } { \Big ) } ^ { n } .
$$

Sei $x \in \mathbb{R}$ und ein Index $N$, so dass

$$
\frac { x } { N } > - 1
$$

woraus natürlich

$$
{ \frac { x } { n } } > - 1 \quad\forall n ≥ N
$$

folgt. Für alle $n ≥ N$ folgt aus der Bernoulli Ungleichung

$$
\left( 1 + { \frac { x } { n } } \right) ^ { n } ≥ 1 + n \left( { \frac { x } { n } } \right) = 1 + x
$$

woraus mit [Satz 2.1.8(4)](/2-folgen-reihen#satz-2-1-8) die Ungleichung

$$
\exp ( x ) = \lim _ { n \to \infty } \left( 1 + { \frac { x } { n } } \right) ^ { n } ≥ 1 + x
$$

folgt.
:::

Da $\exp$ streng monoton wachsend, stetig und surjektiv ist, folgt aus [Satz 3.5.3](#satz-3-5-3) die Existenz einer Umkehrabbildung $\exp ^ { - 1 } : (0 , + \infty) \to \mathbb{R}$.

::: proposition Korollar 3.6.5.{#korollar-3-6-5}
Der natürliche Logarithmus

$$
\begin{aligned}
\ln : (0 , + \infty) &\to \mathbb{R}\\
x &\mapsto \ln x
\end{aligned}
$$

ist eine streng monoton wachsende, stetige, bijektive Funktion.

Des weiteren gilt

$$
\ln ( a \cdot b ) = \ln a + \ln b \qquad \forall a , b \in (0 , + \infty)
$$

und
$$
\ln(1) = 0
$$

**Beweis:**<br>
Aus Satz 3.6.1 folgt, dass

$$
\exp : \mathbb{R} \to ] 0 , + \infty [
$$

streng monoton wachsend, stetig und bijektiv ist. Unter Anwendung von [Satz 3.5.3](#satz-3-5-3) mit $I = \mathbb{R} , J = (0 , + \infty)$ und $f = \exp$ folgt, dass $f ^ { - 1 } = \ln$ ,

$$
\ln : (0 , + \infty) \to \mathbb{R}
$$

stetig, streng monoton und bijektiv ist.

Seien $a , b \in (0 , + \infty)$ : Aus Anwendung von 2.7.27 folgt:

$$
\exp ( \ln a + \ln b ) = \exp ( \ln a ) \cdot \exp ( \ln b ) .
$$

Da $\exp$ die Umkehrfunktion von $\ln$ ist, folgt:

$$
\exp ( \ln a ) \exp ( \ln b ) = a b = \exp ( \ln ( a b ) )
$$

Daraus folgt:

$$
\exp ( \ln a + \ln b ) = \exp ( \ln a b ) .
$$

Da $\exp$ injektiv ist, folgt:

$$
\ln a + \ln b = \ln a b .
$$

Aus $\exp ( 0 ) = 1$ folgt $\ln ( 1 ) = 0$. <span class="right">$\Box$</span>
:::

![](/images/084e0511172960ecbb003af67e5358940a4f9054ac1eb77c0a9fe5cf451097d3.png)

Wir können jetzt Logarithmus und Exponentialfunktion benützen, um allgemeine Potenzen zu definieren.

:::definition Definition
Für $x > 0$ und $a \in \mathbb{R}$ beliebig definieren wir:

$$
x ^ { a } : = \exp ( a \ln x ) .
$$

Insbesondere: $x ^ { 0 } = 1 \quad\forall x > 0$.
:::

::: proposition Korollar 3.6.6.{#korollar-3-6-6}
1. Für $a> 0$ ist
    $$
    \begin{aligned}
    (0 , + \infty) \quad&\to\quad (0 , + \infty)\\
    x \quad&\mapsto\quad x ^ { a } = \exp(a \ln x)
    \end{aligned}
    $$
    
    eine stetige, streng monoton wachsende Bijektion.

2. Für $a < 0$ ist

    $$
    \begin{aligned}
    (0 , + \infty) \quad&\to\quad (0 , + \infty)\\
    x \quad&\mapsto\quad x ^ { a }
    \end{aligned}
    $$
    
    eine stetige, streng monoton fallende Bijektion.
    
3. $\ln x^a = a \ln x$ für alle $a \in \mathbb{R}$ und $x > 0$.
4. $x^ax^b = x^{a+b}$ für alle $a , b \in \mathbb{R}$ und $x > 0$.
5. $\left( x ^ { a } \right) ^ { b } = x ^ { a \cdot b }$ für alle $a , b \in \mathbb{R}$ und $x > 0$.


**Beweis:**.
1. Für $a > 0$ ist mit $x \mapsto \ln x$ auch $x \mapsto a \ln x$ streng monoton wachsend. Da $x \mapsto \exp x$ streng monoton wachsend, folgt, dass

    $$
    x \mapsto x ^ { a } = \exp ( a \ln x )
    $$
    
    streng monoton wachsend ist.
    
    Ausserdem ist $x \mapsto x ^ { a }$ eine Verknüpfung stetiger Funktionen und deswegen nach Satz 3.5.1 auch stetig.

2. Analog wie (1). Es ist zu bemerken, dass für $a < 0 , x \mapsto a \ln x$ streng monoton fallend ist.

3.
    $$
    \ln \left( x ^ { a } \right) = \ln \exp ( a \ln x ) = a \ln x
    $$
    
4.
    $$
    \begin{aligned}
     x ^ { a } \cdot x ^ { b } &= \exp \left( a \ln x \right) \exp ( b \ln x ) = \exp ( a \ln x + b \ln x ) \\
    &= \exp \left( \left( a + b \right) \ln x \right) = x ^ { a + b }
    \end{aligned}
    $$

5.
    $$
    \left( x ^ { a } \right) ^ { b } = \exp \left( b \ln \left( x ^ { a } \right) \right)
    $$

    Aus (3) folgt $\ln \left( x ^ { a } \right) = a \ln x$ , woraus folgt:
    
    $$
    \left( x ^ { a } \right) ^ { b } = \exp \left( b a \ln x \right) = x ^ { a \cdot b } .
    $$

{.numbered}
:::

## 3.7. Konvergenz von Funktionenfolgen

Sei $D$ eine Menge. Analog zur Definition einer Folge reeller Zahlen ist eine (reellwertige) Funktionenfolge eine Abbildung

::: definition Definition Funktionenfolge
Eine Funktionenfolge ist eine Abbildung
$$
\begin{aligned}
\mathbb{N} \quad&\to\quad \mathbb{R} ^ { D } \\
 n \quad&\mapsto\quad f_n: D \to \mathbb{R}
\end{aligned}
$$
d.h. für jedes $n \in \mathbb{N}$ ist $f_n$ eine Abbildung.
:::

Wie im Fall der Folgen bezeichnen wir $f ( n )$ mit $f _ { n }$ und die Funktionenfolge mit $\left( f _ { n } \right) _ { n ≥ 0 }$ Für jedes $x \in D$ erhält man eine Folge $\displaystyle\left( f _ { n } \left( x \right) \right) _ { n ≥ 0 }$ in $\mathbb{R}$ .

::: definition Definition 3.7.1. Punktweise Konvergenz{#definition-3-7-1}
Die Funktionenfolge $\left( f _ { n } \right) _ { n ≥ 0 }$ **konvergiert punktweise** gegen eine Funktion $f : D \to \mathbb{R}$ , falls für alle $x \in D$ gilt:

$$
f ( x ) = \lim _ { n \to \infty } f _ { n } ( x ) .
$$

Alternative Notation:
$$
\forall x \in D, \exists ε >0:\ ∀n>N |f_n(x) - f(x)| < ε
$$
:::

::: example Beispiel 3.7.2.{#beispiel-3-7-2}
Sei $D = [0,1]$ und

$$
\begin{aligned}
f _ { n } : [ 0 , 1 ] \quad&\to\quad \mathbb{R} \\
x \quad&\mapsto\quad f _ { n } ( x ) = x ^ { n }
\end{aligned}
$$

Dann folgt aus Beispiel 2.2.3:
$$
\lim _ { n \to \infty } f _ { n } ( x ) = \lim _ { n \to \infty } x ^ { n } = 0 \qquad \forall 0 ≤ x < 1 .
$$

Ausserdem gilt $f _ { n } ( 1 ) = 1 ^ { n } = 1$ . Also konvergiert die Funktionenfolge $\left( f _ { n } \right) _ { n ≥ 0 }$ punktweise gegen die Funktion $f :  [0 , 1] \to \mathbb{R}$ gegeben durch:

$$
f ( x ) = \begin{cases}
0 & \text{falls } x\in [0,1) \\
1 & \text{falls } x = 1
\end{cases}
$$

Bemerke: die Funktionen $f _ { n }$ sind alle stetig in $[ 0 , 1 ] ,$ die Funktion $f$ ist aber nicht stetig in $1$.
:::

Um zu garantieren, dass der Grenzwert einer Folge stetiger Funktionen stetig ist, braucht es zusätzliche Voraussetzungen.

::: definition Definition 3.7.3. (Weierstrass 1841){#definition-3-7-3}
Die Folge

$$
f _ { n } : D \to \mathbb{R}
$$

**konvergiert gleichmässig** in $D$ gegen

$$
f : D \to \mathbb{R}
$$

falls gilt: $\forall \varepsilon > 0, \exists N ≥ 1$, so dass:

$$
\forall n ≥ N ,\ \forall x \in D\quad | f _ { n } ( x ) - f ( x ) | < \varepsilon .
$$
:::

In dieser Definition ist es wichtig, dass $N$ nur von $\varepsilon$ und nicht von $x \in D$ abhängt.   
Deswegen kommt die Bedingung "$\forall x \in D$" nach der Bedingung "$\exists N ≥ 1$".

::: proposition Satz 3.7.4.{#satz-3-7-4}
Sei $D \subset \mathbb{R}$ und $f _ { n } : D \to \mathbb{R}$ eine Funktionenfolge bestehend aus (in $D$) stetigen Funktionen die (in $D$) gleichmässig gegen eine Funktion $f : D \to \mathbb{R}$ konvergiert. Dann ist $f$ (in $D$) stetig.

**Beweis:**<br>
Sei $x_0 \in D$ und $\varepsilon > 0$ . Sei $N ≥ 1$ , so dass (gleichmässige Konvergenz):

$$
| f ( x ) - f _ { N } ( x ) | < \varepsilon \qquad \forall x \in D .
$$

Da $f _ { N }$ in $x _ { 0 }$ stetig ist, gibt es $\delta > 0$ mit:

$$
| x - x_0 | < \delta \implies | f _ { N } ( x ) - f _ { N } ( x_0 ) | < \varepsilon .
$$

Es folgt dann für $| x - x_0 | < \delta$ :

$$
\begin{aligned}
|f(x) - f(x_0)| &= \Bigl|\bigl(f(x) - f_N(x)\bigr) + \bigl(f_N(x) - f_N(x_0)\bigr) + \bigl(f_N(x_0) - f(x_0)\bigr)\Bigr|\\
&≤ \underbrace{|f(x) - f_N(x)|}_{<\varepsilon} + \underbrace{|f_N(x) - f_N(x_0)|}_{<\varepsilon} + \underbrace{|f_N(x_0) - f(x_0)|}_{<\varepsilon}\\
&< 3\varepsilon
\end{aligned}
$$
:::

Bemerkung: $f_n \xrightarrow{\text{uniform}} f$ falls $\displaystyle\sup_{x \in D} \bigl|f_n(x) - f(x)\bigr| \xrightarrow[n \to \infty]{} 0$.

::: definition Definition 3.7.5.{#definition-3-7-5}
Eine Funktionenfolge

$$
f _ { n } : D \to \mathbb{R}
$$

ist gleichmässig konvergent, falls für alle $x \in D$ der Grenzwert

$$
f ( x ) : = \lim _ { n \to \infty } f _ { n } ( x )
$$

existiert und die Folge $\left( f _ { n } \right) _ { n ≥ 0 }$ gleichmässig gegen $f$ konvergiert.
:::

Aus dem Cauchy Kriterium (Satz 2.4.2) für Folgen folgt:

::: proposition Korollar 3.7.6. (Cauchy Kriterium){#korollar-3-7-6}
Die Funktionenfolge

$$
f _ { n } : D \to \mathbb{R}
$$

konvergiert genau dann gleichmässig in $D$ , falls:

$\forall \varepsilon > 0$ $\exists N ≥ 1$ , so dass $\forall n , m ≥ N$ und $\forall x \in D$ :

$$
| f _ { n } ( x ) - f _ { m } ( x ) | < \varepsilon .
$$

**Beweis:**<br>
Zuerst folgt aus der Hypothese dass, für jede $x \in D$ , die Folge $\left( f _ { n } ( x ) \right)$ (von reellen Zahlen) erfüllt das Cauchy Kriterium. Es gibt deshalb ein Grenzwert (Satz 2.4.2), der wir $f ( x )$ bezeichnen.

Wir beweisen dann, dass die Funktionenfolge $( f _ { n } )$ konvergiert gleichmässig gegen diese Funktion $f$ : sei $\varepsilon > 0$ , und sei $N ≥ 1$ sodass $| f _ { n } ( x ) - f _ { m } ( x ) | < \varepsilon / 2$ falls $n$ , $m ≥ N$ (die Existenz von $N$ folgt aus der Hypothese für $\varepsilon / 2$ ). Sei $n ≥ N$ . Die Ungleichungen

$$
| f _ { n } ( x ) - f _ { m } ( x ) | < \frac { \varepsilon } { 2 }
$$

für $m ≥ N$ , implizieren dass

$$
| f _ { n } ( x ) - f ( x ) | ≤ { \frac { \varepsilon } { 2 } } < \varepsilon
$$

weil $f _ { m } ( x )  f ( x )$ als $m  + \infty$ (siehe Satz 2.1.8, Teil (4)). Dies bedeutet genau, dass die Konvergenz gleichmässig ist.<span class="right">$\Box$</span>
:::

::: proposition Korollar 3.7.7.{#korollar-3-7-7}
Sei $D \subset ℝ$ . Falls $f _ { n } : D \to ℝ$ eine gleichmässig konvergente Folge stetiger Funktionen ist, dann ist die Funktion

$$
f ( x ) : = \lim_ { n \to \infty } f _ { n } ( x )
$$

stetig.

**Beweis:** Dies folgt aus Korollar 3.7.6 und Satz 3.7.4.
:::


::: definition 3.7.8.{#definition-3-7-8}
Sei nun $f _ { n } : D \to ℝ$ eine Folge von Funktionen.

Die Reihe $\displaystyle\sum _ { k = 0 } ^ { \infty } f _ { k } ( x )$ konvergiert gleichmässig (in $D$), falls die durch

$$
S _ { n } ( x ) : = \sum _ { k = 0 } ^ { n } f _ { k } ( x )
$$

definierte Funktionenfolge gleichmässig konvergiert.
:::

::: proposition Satz 3.7.9.{#satz-3-7-9}
Sei $D \subset ℝ$ und

$$
f _ { n } : D \to ℝ
$$

eine Folge stetiger Funktionen. Wir nehmen an, dass

$$
| f _ { n } ( x ) | ≤ c _ { n } \qquad \forall x \in D
$$

und, dass $\displaystyle\sum _ { n = 0 } ^ { \infty } c _ { n }$ konvergiert. Dann konvergiert die Reihe

$$
\sum _ { n = 0 } ^ { \infty } f _ { n } ( x )
$$

gleichmässig in $D$ und deren Grenzwert

$$
f ( x ) : = \sum _ { n = 0 } ^ { \infty } f _ { n } ( x )
$$

ist eine in $D$ stetige Funktion.

**Beweis:**<br>
Das folgt aus dem vorherigen Satz:

Sei $\varepsilon > 0$ und $N ≥ 1$ , so dass $\forall n ≥ N$ und $k ≥ 1$ :

$$
\sum _ { j = n + 1 } ^ { n + k } c _ { j } < \varepsilon .
$$

Dann folgt für $\forall x \in D$ mit $S _ { n } ( x ) : = \displaystyle \sum _ { j = 0 } ^ { n } f _ { j } ( x ) :$

$$
\begin{aligned}
| S _ { n + k } ( x ) - S _ { n } ( x ) | &= \left| \sum _ { j = n + 1 } ^ { n + k } f _ { j } ( x ) \right| \\
&≤ \sum _ { j = n + 1 } ^ { n + k } | f _ { j } ( x ) | \\
&≤ \sum _ { j = n + 1 } ^ { n + k } c _ { j } < \varepsilon
\end{aligned}
$$

Also ist nach [Korollar 3.7.6](#korollar-3-7-6) die Funktionenfolge $\left( S _ { n } \right) _ { n ≥ 0 }$ in $D$ gleichmässig konvergent und deshalb ist nach [Korollar 3.7.7](#korollar-3-7-7) die Funktion

$$
f ( x ) : = \lim_ { n \to \infty } S _ { n } ( x )
$$

in $D$ stetig. <span class="right">$\Box$</span>
:::

Wir wenden diesen Satz jetzt auf das Studium von Potenzreihen an. Sei (vergleiche mit [Korollar 2.7.21](/2-folgen-reihen#korollar-2-7-21)) $\left( c _ { k } \right) _ { k ≥ 0 }$ eine Folge in $ℝ$.

::: definition Definition 3.7.10.{#definition-3-7-10}
Die Potenzreihe

$$
\sum _ { k = 0 } ^ { \infty } c _ { k } x ^ { k }
$$

hat **positiven Konvergenzradius**, falls $\displaystyle\limsup_{n\to\infty} \sqrt [ k ] { | c _ { k } | }$ existiert.

Der Konvergenzradius ist dann definiert als:

$$
\rho = \begin{cases}
+\infty & \text{\it falls } \displaystyle\limsup_{n\to\infty} \sqrt [ k ] { | c _ { k } | } = 0 \\
\displaystyle\frac { 1 } { \displaystyle\limsup_{n\to\infty} \sqrt [ k ] { | c _ { k } | } } & \text{\it falls } \displaystyle\limsup_{n\to\infty} \sqrt [ k ] { | c _ { k } | } > 0
\end{cases}
$$
:::

In Korollar 2.7.21 hatten wir gezeigt, dass für alle $| x | < \rho$ die Potenzreihe

$$
\sum _ { k = 0 } ^ { \infty } c _ { k } x ^ { k }
$$

absolut konvergiert. Sei also

$$
f ( x ) : = \sum _ { k = 0 } ^ { \infty } c _ { k } x ^ { k } , | x | < \rho .
$$

::: proposition Satz 3.7.11.{#satz-3-7-11}
Sei $\displaystyle\sum _ { k = 0 } ^ { \infty } c _ { k } x ^ { k }$ eine Potenzreihe mit positivem Konvergenzradius $\rho > 0$ und sei

$$
f ( x ) : = \sum _ { k = 0 } ^ { \infty } c _ { k } x ^ { k } , \quad| x | < \rho .
$$

Dann gilt: $\forall\ 0 ≤ r < \rho$ konvergiert

$$
\sum _ { k = 0 } ^ { \infty } c _ { k } x ^ { k }
$$

gleichmässig auf $\left[ - r , r \right]$ , insbesondere ist $f : (- \rho , \rho) \to ℝ$ stetig.

**Beweis:**<br>
Sei $f _ { k } ( x ) = c _ { k } x ^ { k }$, $k ≥ 0$ . Dann ist $f _ { k }(x)$ auf ganz $ℝ$ stetig. Für $| x | ≤ r<\rho$ gilt auch:

$$
| f _ { k } ( x ) | = { \big | } c _ { k } x ^ { k } { \big | } ≤ | c _ { k } | r ^ { k } .
$$

Da nach [Korollar 2.7.21](/2-folgen-reihen#korollar-2-7-21) die Reihe $\displaystyle\sum _ { k = 0 } ^ { \infty } { \left| { c _ { k } } \right| } r ^ { k }$ absolut konvergiert, folgt aus [Satz 3.7.9](#satz-3-7-9), dass $\displaystyle\sum _ { k = 0 } ^ { \infty } c _ { k } x ^ { k }$ auf $[- r , r]$ gleichmässig konvergiert. Insbesondere ist $f : [ - r , r ] \to ℝ$ stetig.

Da dies für alle $r < \rho$ gilt, folgt, dass $f :  (-\rho , \rho) \to ℝ$ stetig ist. <span class="right">$\Box$</span>
:::

## 3.8. Trigonometrische Funktionen

Die in 1.3 benützten Funktionen $\sin x$ und $\textstyle \operatorname { c o s } x$ sind nicht wirklich definiert worden, da wir den Begriff des Winkelmasses nie definiert hatten. Auch ist die “Zahl” $\pi$ nicht streng definiert. Dies wollen wir jetzt nachholen.

Wir definieren die Sinusfunktion für $z \in ℂ$ :

$$
\sin z := z - { \frac { z ^ { 3 } } { 3 ! } } + { \frac { z ^ { 5 } } { 5 ! } } - { \frac { z ^ { 7 } } { 7 ! } } + \cdot \cdot \cdot = \sum _ { n = 0 } ^ { \infty } ( - 1 ) ^ { n } { \frac { z ^ { 2 n + 1 } } { ( 2 n + 1 ) ! } }
$$

und die Cosinusfunktion für $z \in ℂ$ :

$$
\cos z := 1 - { \frac { z ^ { 2 } } { 2 ! } } + { \frac { z ^ { 4 } } { 4 ! } } - { \frac { z ^ { 6 } } { 6 ! } } + \cdot \cdot \cdot = \sum _ { n = 0 } ^ { \infty } ( - 1 ) ^ { n }{ \frac {  z ^ { 2 n } } { ( 2 n ) ! } } .
$$

Aus dem [Quotientenkriterium (Satz 2.7.17)](/2-folgen-reihen#satz-2-7-17) folgt, analog zum Fall der Exponentialfunktion (Beispiel 2.7.18), dass beide Reihen für alle $z \in ℂ$ absolut konvergieren. Deswegen ist in beiden Fällen deren Konvergenzradius $+ \infty$ und es folgt aus [Satz 3.7.11](#satz-3-7-11):

::: proposition Satz 3.8.1.{#satz-3-8-1}
Die Funktionen $\sin : ℝ \to ℝ$ und $\cos : ℝ \to ℝ$ sind stetige Funktionen
:::

Weitere Eigenschaften der Sinus und Cosinusfunktion ergeben sich durch ihren Zusammenhang mit der Exponentialfunktion.

::: proposition Satz 3.8.2.{#satz-3-8-2}
Sei $z \in ℝ$ . Dann gilt:
1. $\exp ( i z ) = \cos ( z ) + i\cdot \sin ( z )$
2. $\cos ( z ) = \cos ( - z )$ ist eine gerade Funktion $\forall z\in ℂ: f(z)=f(-z)$ und<br> $\sin ( z ) = - \sin ( - z )$ ist eine ungerade Funktion $\forall z\in ℂ: f(z)=-f(-z)$.
3. $\sin(z) = \displaystyle\frac{e^{i z}-e^{-iz}}{2 i}$ und $\cos(z) = \displaystyle\frac{e^{i z} + e^{-i z}}{2}$
4. $\sin(z + w) = \sin(z) \cos(w) + \cos(z) \sin(w)$ und $\cos(z + w) = \cos(z) \cos(w) - \sin(z) \sin(w)$
5. $\cos(z)^2 + \sin(z)^2 = 1$
{.numbered}

**Beweis:**

1. Wir haben

    $$
    \begin{aligned}
    \exp ( i z )\quad~=\quad~&\sum _ { k = 0 } ^ { \infty } { \frac { ( i z ) ^ { k } } { k ! } }&\\
    =\quad~&\sum _ { n = 0 } ^ { \infty } \left\{ { \frac { ( i z ) ^ { 2 n } } { ( 2 n ) ! } } + { \frac { ( i z ) ^ { 2 n + 1 } } { ( 2 n + 1 ) ! } } \right\}&\\
    \stackrel{\text{Satz 2.7.5(1)}}{=} &\sum _ { n = 0 } ^ { \infty } { \frac { ( i z ) ^ { 2 n } } { ( 2 n ) ! } } + \sum _ { n = 0 } ^ { \infty } { \frac { ( i z ) ^ { 2 n + 1 } } { ( 2 n + 1 ) ! } }&\\
   =\quad~&\sum _ { n = 0 } ^ { \infty } (i) ^ { 2 n } { \frac { z ^ { 2 n } } { ( 2 n ) ! } } + i\cdot \sum _ { n = 0 } ^ { \infty } (i) ^ { 2 n } { \frac { z ^ { 2 n + 1 } } { ( 2 n + 1 ) ! } }&\\
    =\quad~&\underbrace{\sum _ { n = 0 } ^ { \infty } ( - 1 ) ^ { n } { \frac { z ^ { 2 n } } { ( 2 n ) ! } }}_{= \cos(z)} + i \cdot\underbrace{\sum _ { n = 0 } ^ { \infty } ( - 1 ) ^ { n } { \frac { z ^ { 2 n + 1 } } { ( 2 n + 1 ) ! } }}_{= \sin(z)}&\\
    \end{aligned}
    $$

2. Folgen aus der Definition.
3. Aus $\exp ( i z ) = \cos ( z ) + i \sin ( z )$ und aus (2) folgt:

    $$
    \exp ( - i z ) = \cos ( z ) - i \sin ( z )
    $$
    
    woraus (3) folgt (durch Subtraktion respektive Addition der beiden Identitäten). 

4. Es gilt

    $$
    \begin{array} { r l } & { e ^ { i ( z + w ) } = e ^ { i z } e ^ { i w } ~ ( 2 . 7 . 2 7 ) } \\ & { ~ = ( \cos ( z ) + i \sin ( z ) ) \left( \cos ( w ) + i \sin ( w ) \right) } \\ & { ~ = \{ \cos ( z ) \cos ( w ) - \sin ( z ) \sin ( w ) \} + i \left\{ \sin ( z ) \cos ( w ) + \cos ( z ) \sin ( w ) \right\} } \end{array}
    $$
    
    und analog
    
    $$
    \begin{array} { r l } & { e ^ { - i ( z + w ) } = e ^ { - i z } e ^ { - i w } } \\ & { \qquad = ( \cos ( z ) - i \sin ( z ) ) ( \cos ( w ) - i \sin ( w ) ) } \\ & { \qquad = \{ \cos ( z ) \cos ( w ) - \sin ( z ) \sin ( w ) \} - i \left\{ \sin ( z ) \cos ( w ) + \cos ( z ) \sin ( w ) \right\} . } \end{array}
    $$
    
    Durch Addition (respektive Subtraktion) beider Identitäten und Benützung von
    
    $$
    \begin{array} { l } { \displaystyle \cos ( z + w ) = \frac { e ^ { i ( z + w ) } + e ^ { - i ( z + w ) } } { 2 } } \\ { \displaystyle \sin ( z + w ) = \frac { e ^ { i ( z + w ) } - e ^ { - i ( z + w ) } } { 2 i } } \end{array}
    $$
    
    erhalten wir die Additionsformeln.

5. Setze $z = - w$ in die Additionsformel für $\cos ( z + w ) .$
:::

Wir bemerken, dass sich aus den Additionsformeln die Winkelverdopplungsformeln ergeben:

::: proposition Korollar 3.8.3.{#korollar-3-8-3}
$$
\begin{array} { l } { \sin ( 2 z ) = 2 \sin ( z ) \cos ( z ) } \\ { \cos ( 2 z ) = \cos ( z ) ^ { 2 } - \sin ( z ) ^ { 2 } . } \end{array}
$$
:::

## 3.9. Die Kreiszahl $\pi$

In diesem Abschnitt studieren wir die Sinus und Cosinusfunktion als Funktionen der Variablen $x \in ℝ$ . Aus der Definition von $\sin ( x )$ folgt $\sin ( 0 ) = 0$ .

::: proposition Satz 3.9.1.{#satz-3-9-1}
Die Sinusfunktion hat auf $(0,+\infty)$ mindestens eine Nullstelle. 

Sei

$$
\pi : = \inf \left\{ t > 0 : \sin t = 0 \right\} .
$$

Dann gilt:

1) $\sin \pi = 0, \quad \pi \in (2,4)$
2) $\forall x \in ( 0 , \pi ) : \sin x > 0$   
3) $e ^ { \displaystyle{ \tfrac { i \pi } { 2 } } } = i$
{.numbered}

**Beweis:**<br>
Sei wieder:

$$
\sin ( x ) = x - { \frac { x ^ { 3 } } { 3 ! } } + { \frac { x ^ { 5 } } { 5 ! } } - { \frac { x ^ { 7 } } { 7 ! } } + { \frac { x ^ { 9 } } { 9 ! } } - { \frac { x ^ { 1 1 } } { 1 1 ! } } + \cdot \cdot \cdot
$$

Wir betrachten für $x ≥ 0$ die alternierende Reihe

$$
{ \frac { x ^ { 9 } } { 9 ! } } - { \frac { x ^ { 1 1 } } { 1 1 ! } } + { \frac { x ^ { 1 3 } } { 1 3 ! } } - \cdot \cdot \cdot .
$$

Dann ist $\left( \frac { x ^ { 2 n + 1 } } { ( 2 n + 1 ) ! } \right) _ { n ≥ 4 }$ monoton fallend, falls

$$
x ^ { 2 } ≤ 10 \cdot 11 = 110 ,
$$

das heisst

$$
0 ≤ x ≤ { \sqrt { 110 } } .
$$

Nach [Satz 2.7.12](/2-folgen-reihen#satz-2-7-12) folgt

$$
{ \frac { x ^ { 9 } } { 9 ! } } - { \frac { x ^ { 1 1 } } { 1 1 ! } } + { \frac { x ^ { 1 3 } } { 1 3 ! } } - \cdots ≤ { \frac { x ^ { 9 } } { 9 ! } } \qquad \forall x \in \left[ 0 , { \sqrt { 110 } } \right]
$$

woraus

$$
\sin x ≤ x - { \frac { x ^ { 3 } } { 3 ! } } + { \frac { x ^ { 5 } } { 5 ! } } - { \frac { x ^ { 7 } } { 7 ! } } + { \frac { x ^ { 9 } } { 9 ! } } \qquad \forall x \in \left[ 0 , { \sqrt { 110 } } \right]
$$

folgt. Insbesondere ergibt eine (lange) Rechnung:

$$
\sin ( 4 ) ≤ - \frac { 2 6 8 } { 4 0 5 } < 0 .
$$

Aus [Korollar 3.9.2](#korollar-3-9-2) folgt

$$
\sin x ≥ x - { \frac { x ^ { 3 } } { 3 ! } } = x \left( 1 - { \frac { x ^ { 2 } } { 3 ! } } \right) \qquad \forall x \in [ 0 , 2 ] .
$$

Insbesondere:

$$
\sin x > 0 \qquad \forall x \in ( 0 , 2 ] .
$$

Es gilt: $\sin 2 > 0$ und $\sin 4 < 0$ . Nach dem Zwischenwertsatz gibt es also in $(2, 4)$ mindestens eine Nullstelle für die Sinusfunktion.

Aus der Definition von $\pi$ und der Stetigkeit der Sinusfunktion folgt

$$
\sin ( \pi ) = 0 .
$$

Aus obiger Diskussion folgt $\pi \in (2 , 4)$ .

Jetzt zeigen wir: $\sin ( x ) > 0 \forall x \in (0 , \pi)$ . Aus der Definition von $\pi$ folgt, dass sin auf $(0 , \pi)$ keine Nullstelle besitzt.

Nun bemerken wir

$$
0 < 1 < 2 ≤ \pi
$$

und

$$
\sin ( 1 ) ≥ 1 - { \frac { 1 } { 3 ! } } = { \frac { 5 } { 6 } } > 0 .
$$

Falls es $y \in (0 , \pi)$ gibt mit $\sin ( y ) < 0 \quad$ dann würde aus $\sin( 1 ) > 0$ und dem Zwischenwertsatz die Existenz von $z$ zwischen $1$ und $y$ folgen mit

$$
\quad \sin ( z ) = 0 .
$$

Insbesondere $0 < z < \pi$ , ein Widerspruch zur Definition von $\pi$ .

Nun zu (3): Aus der Winkelverdopplungsformel folgt:

$$
0 = \sin \left( 2 \cdot { \frac { \pi } { 2 } } \right) = 2 \sin { \frac { \pi } { 2 } } \cos { \frac { \pi } { 2 } } .
$$

Da $\frac { \pi } { 2 } \in (0 , \pi)$ ist $\sin \left( { \frac { \pi } { 2 } } \right) > 0$ , insbesondere folgt:

$$
\cos { \frac { \pi } { 2 } } = 0 .
$$

Aus $\left( \cos { \frac { \pi } { 2 } } \right) ^ { 2 } + \left( \sin { \frac { \pi } { 2 } } \right) ^ { 2 } = 1$ und $\sin 2 > 0$ folgt

$$
\sin { \frac { \pi } { 2 } } = 1
$$

und somit:

$$
e ^ { \frac { i \pi } { 2 } } = \cos { \frac { \pi } { 2 } } + i \sin { \frac { \pi } { 2 } } = i .
$$
:::

Zunächst ein paar Bemerkungen von allgemeinem Interesse. Sei $x ≥ 0$ : die Reihe

$$
\sin ( x ) = x - { \frac { x ^ { 3 } } { 3 ! } } + { \frac { x ^ { 5 } } { 5 ! } } - { \frac { x ^ { 7 } } { 7 ! } } + \cdot \cdot \cdot
$$

ist alternierend.

Für $x ≥ 0$ ist $\left( { \frac { x ^ { 2 n + 1 } } { ( 2 n + 1 ) ! } } \right) _ { n ≥ 0 }$ genau dann monoton fallend, falls

$$
{ \frac { x ^ { 2 n + 1 } } { ( 2 n + 1 ) ! } } ≤ { \frac { x ^ { 2 n - 1 } } { ( 2 n - 1 ) ! } } \qquad \forall n ≥ 1 ,
$$

das heisst

$$
x ^ { 2 } ≤ 2 n \cdot ( 2 n + 1 ) \qquad \forall n ≥ 1 ,
$$

also

$$
x ≤ { \sqrt { 6 } } .
$$

Es folgt dann aus dem [Satz 2.7.12](/2-folgen-reihen#satz-2-7-12)

::: proposition Korollar 3.9.2.{#korollar-3-9-2}
$$
x ≥ \sin x ≥ x - { \frac { x ^ { 3 } } { 3 ! } } \qquad \forall 0 ≤ x ≤ { \sqrt { 6 } } .
$$
:::

::: proposition Korollar 3.9.3.{#korollar-3-9-3}
1) $e^{i\pi} = - 1$ und $e^{2 i \pi} = 1$.
2) $\sin \left( x + { \frac { \pi } { 2 } } \right) = \cos ( x )$ und $\cos \left( x + { \frac { \pi } { 2 } } \right) = - \sin ( x )$ für alle $x ∈ ℝ$.
3) $\sin \left( x + \pi \right) = - \sin ( x )$ und $\sin \left( x + 2 \pi \right) = \sin ( x )$ für alle $x ∈ ℝ$.
4) $\cos \left( x + \pi \right) = - \cos ( x )$ und $\cos \left( x + 2 \pi \right) = \cos ( x )$ für alle $x ∈ ℝ$.
5) Nullstellen von Sinus: $\left\{ k \cdot \pi : k ∈ ℤ \right\}$.

    $\sin(x) > 0 \quad \forall x \in \left(2k\pi,\ (2k+1)\pi\right), k \in \mathbb{Z}$ und $\sin(x) < 0 \quad \forall x \in \left((2k+1)\pi,\ (2k+2)\pi\right), k \in \mathbb{Z}$.

6) Nullstellen von Cosinus: $\left\{ \frac { \pi } { 2 } + k \cdot \pi : k ∈ ℤ \right\}$.

    $\cos(x) > 0 \quad \forall x \in \left(-\frac{\pi}{2} + 2k\pi,\ -\frac{\pi}{2} + (2k+1)\pi\right), k \in \mathbb{Z}$ und $\cos(x) < 0 \quad \forall x \in \left(-\frac{\pi}{2} + (2k+1)\pi,\  -\frac{\pi}{2} + (2k+2)\pi\right), k \in \mathbb{Z}$.

{.numbered}

**Beweis:**
1) Aus $e ^ { { \frac { i \pi } { 2 } } } = i$ (Satz 3.9.1(3)) folgen

    $$
    e ^ { i \pi } = i ^ { 2 } = - 1 \quad { \mathrm { u n d } } \quad e ^ { 2 i \pi } = ( - 1 ) ^ { 2 } = 1 .
    $$

2) Aus Satz 3.8.2(3) und Satz 3.9.1(3):

    $$
    \begin{aligned}
    \sin \left( x + { \frac { \pi } { 2 } } \right) &= { \frac { e ^ { i \left( x + { \frac { \pi } { 2 } } \right) } - e ^ { - i \left( x + { \frac { \pi } { 2 } } \right) } } { 2 i } } \\[2pt]
    &= { \frac { e ^ { i x } e ^ { { \frac { i \pi } { 2 } } } - e ^ { - i x } e ^ { - { \frac { i \pi } { 2 } } } } { 2 i } }\\[2pt]
    &= { \frac { e ^ { i x } \cdot i - e ^ { - i x } \left( - i \right) } { 2 i } } \\[2pt]
    &= { \frac { e ^ { i x } + e ^ { - i x } } { 2 } }\\
    &= \cos ( x ) .
    \end{aligned}
    $$

    Für $\cos \left( x + { \frac { \pi } { 2 } } \right)$ verfährt man analog.

3) folgt mit mehrfacher Anwendung von (2).
4) folgt mit mehrfacher Anwendung von (2).

5) Aus Satz 3.9.1(2) folgt

    $$
    \sin ( x ) > 0 \qquad \forall x \in \ (0 , \pi)
    $$
    
    und aus $\sin ( x + \pi ) = - \sin ( x )$ folgt
    
    $$
    \sin ( x ) < 0 \qquad \forall x \in \left] \pi , 2 \pi \right[ .
    $$
    
    Falls $x \in \ (2 k \pi , ( 2 k + 1 ) \pi)$ folgt $x - 2 k \pi \in (0 , \pi)$ und somit
    
    $$
    \sin ( x ) = \sin \left( x - 2 k \pi \right) > 0 .
    $$
    
    Falls $x \in (( 2 k + 1 ) \pi , ( 2 k + 2 ) \pi)$ folgt $x - 2 k \pi \in (\pi , 2 \pi)$ und somit
    
    $$
    \sin ( x ) = \sin ( x - 2 k \pi ) < 0 .
    $$

6) Folgt aus (5) mit der Relation $\cos ( x ) = \sin \left( x + { \frac { \pi } { 2 } } \right)$ aus (2).
:::

Mittels Differentialrechnung werden wir ein besseres Verständnis für das Bild der Graphen von Sinus und Cosinus entwickeln.

![](/images/18945afef463e60852ca4a9592a55c2527b536b466944e8e7bb0bfb97015fd2b.png)

Für $z \not \in { \frac { \pi } { 2 } } + \pi \cdot \mathbb { Z }$ definieren wir die Tangensfunktion:

$$
\tan ( z ) = { \frac { \sin ( z ) } { \cos ( z ) } }
$$

und für $z \notin \pi \cdot \mathbb { Z }$ die Cotangensfunktion:

$$
\cot ( z ) = { \frac { \cos ( z ) } { \sin ( z ) } }
$$

## 3.10. Grenzwerte von Funktionen

Wir betrachten wieder Funktionen

$$
f : D \to ℝ
$$

auf einer Teilmenge $D \subset ℝ$ und wollen Grenzwerte für den Fall definieren, wenn $x \in D$ “gegen ein $x_0 \in ℝ$ strebt”; wir müssen dabei berücksichtigen, dass

$$
x_0 \notin D
$$

möglich ist. Wir werden also annehmen, dass $x _ { 0 }$ ein Häufungspunkt von $D$ ist.

::: definition Definition 3.10.1. Häufungspunkt {#definition-3-10-1}
$x_0 \in ℝ$ ist ein Häufungspunkt der Menge $D$ falls $\forall \delta > 0$ : $\Bigl( \left(x_0 - \delta ,\ x_0 + \delta\right) \setminus \{ x_0 \} \Bigr) \cap D \neq \emptyset$.

Jedes Interval um $x_0$ hat mindest einen Punkt in $D$ ausser $x_0$ selbst. Wir definieren die Menge der Häufungspunkte von $D$ als $D^\prime$.
:::

::: example Beispiel 3.10.1.
$$D = (1,2) \cup (3,5) \cup \{7\}$$
Dann ist die Menge $D ^\prime$ der Häufungspunkte von $D$ : 
$$
D ^ { \prime } = [ 1 , 2 ] \cup [ 3 , 5 ] .
$$
:::

::: definition Definition 3.10.2. Grenzwert {#definition-3-10-2}
Sei $f : D \to ℝ$ und $x_0 \in ℝ$ ein Häufungspunkt von $D$. Dann ist $A \in ℝ$ der Grenzwert von $f ( x )$ für $x \to x _ { 0 }$ , bezeichnet mit

$$
\lim_ { x \to x_0 } f ( x ) = A
$$

falls $\forall \varepsilon > 0\ \exists \delta > 0$ so dass

$$
\forall x \in D \cap \Bigl(\left( x_0 - \delta , x_0 + \delta \right) \setminus \{ x_0 \} \Bigr) : \quad | f ( x ) - A | < \varepsilon .
$$
:::

::: proposition Bemerkung 3.10.4.{#bemerkung-3-10-4}
1) Sei $f : D \to ℝ$ und $x _ { 0 }$ ein Häufungspunkt von $D$ . Dann gilt

    $$
    \lim_ { x \to x_0 } f ( x ) = A
    $$
    
    genau dann wenn für jede Folge $\left( a _ { n } \right) _ { n ≥ 1 }$ in $D \setminus \{ x_0 \}$ mit
    
    $$
    \lim_ { n \to \infty } a _ { n } = x _ { 0 }
    $$
    
    $$
    \lim_ { n \to \infty } f ( a _ { n } ) = A .
    $$

2) Sei ${ x } _ { 0 } \in D .$ Dann ist $f$ stetig in $x _ { 0 }$ genau dann, falls

    $$
    \lim_ { x \to x_0 } f ( x ) = f ( x_0 ) .
    $$

3) Mittels (1) zeigt man leicht, dass falls $f , g : D \to ℝ$ und $\displaystyle\lim_{ x \to x_0 } f ( x )$ und $\displaystyle\lim_ { x \to x_0 } g ( x )$ existieren, so folgt

    $$
    \lim_ { x \to x_0 } \left( f + g \right) ( x ) = \lim_ { x \to x_0 } f ( x ) + \lim_ { x \to x_0 } g ( x )
    $$
    
    und
    
    $$
    \lim_ { x \to x_0 } \left( f \cdot g \right) ( x ) = \lim_ { x \to x_0 } f ( x ) \cdot \lim_ { x \to x_0 } g ( x ) .
    $$

4) Sei $f , g : D \to ℝ$ mit $f ≤ g .$ Dann folgt

    $$
    \lim_ { x \to x_0 } f ( x ) ≤ \lim_ { x \to x_0 } g ( x )
    $$
    
    falls beide Grenzwerte existieren.

5) Falls $g _ { 1 } ≤ f ≤ g _ { 2 }$ und

    $$
    \lim_ { x \to x_0 } g _ { 1 } ( x ) = \lim_ { x \to x_0 } g _ { 2 } ( x )
    $$
    
    dann existiert $\displaystyle\lim_ { x \to x_0 } f ( x )$ und
    
    $$
    \lim_ { x \to x_0 } f ( x ) = \lim_ { x \to x_0 } g _ { 1 } ( x ) .
    $$

{.numbered}
:::

::: example Beispiel 3.10.5.
Sei $D = ℝ \setminus \{ 0 \} , f ( x ) = { \frac { \sin x } { x } }$ . Dann gilt:

$$
\lim_ { x \to 0 } { \frac { \sin x } { x } } = 1 .
$$

Aus 3.9.2 folgt $\forall x \in \ \ (0 , \sqrt { 6 })$ :

$$
1 - { \frac { x ^ { 2 } } { 3 ! } } ≤ { \frac { \sin x } { x } } ≤ 1
$$

und folglich $\forall x \in \left[ - { \sqrt { 6 } } , { \sqrt { 6 } } \right] \setminus \left\{ 0 \right\}$ da $x ^ { 2 }$ und $\frac { \sin x } { x }$ gerade sind. Die Aussage folgt dann aus Bemerkung 3.10.4(5).
:::

::: proposition Satz 3.10.6.{#satz-3-10-6}
Seien $D , E \subset ℝ$ , $x _ { 0 }$ Häufungspunkt von $D$ , $f : D \to E$ eine Funktion. Wir nehmen an, dass

$$
y _ { 0 } : = \lim_ { x \to x_0 } f ( x )
$$

existiert und $y _ { 0 } \in E$ . Falls $g : E \to ℝ$ stetig in $y _ { 0 }$ folgt:

$$
\lim _ { x \to x_0 } g ( f ( x ) ) = g ( y _ { 0 } ) .
$$

**Beweis:**<br>
Sei $\left( a _ { n } \right) _ { n ≥ 1 }$ eine Folge in $D \setminus \{ x_0 \}$ mit $\displaystyle\lim_ { n \to \infty } a _ { n } \ = \ x _ { 0 }$ . Dann folgt aus Bemerkung 3.10.4(1):

$$
\lim_ { n \to \infty } f ( a _ { n } ) = y _ { 0 }
$$

und aus der Stetigkeit von $g$ :

$$
g ( y _ { 0 } ) = \lim_ { n \to \infty } g ( f ( a _ { n } ) )
$$

Der Satz folgt dann mit Verwendung von Bemerkung 3.10.4(1). <span class="right">$\Box$</span>
:::

Linksseitige und rechtsseitige Grenzwerte. Betrachten wir zum Beispiel

$$
\begin{array} { r l } { f : ℝ \setminus \{ 0 \} \to ℝ } & { { } } \\ { x } & { { } \mapsto \frac { 1 } { x } . } \end{array}
$$

Dann wird für $x > 0 , x$ beliebig nahe an $0 , \ { \frac { 1 } { x } }$ beliebig positiv gross und für $x \ < \ 0$ , $x$ beliebig nahe an $0 , \ { \frac { 1 } { x } }$ beliebig negativ “gross”. In beiden Fällen hat $\frac { 1 } { x }$ ein einfaches Verhalten.

![](/images/7e1092726cafc9614c1d298b088e5c44cb817db9b7d167b4a397807afe57ac6a.png)

Im Fall $a \in ℝ$ ,

$$
f : (0 , \infty) \to ℝ
$$

ist $f$ auf $(0 , \infty)$ definiert. Falls $a > 0$ werden wir sehen, dass

$$
\lim_ { x \to 0 \atop x \in ( 0 , \infty)} f ( x ) = 0 .
$$

Sei $f : D \to ℝ$ und $x_0 \in ℝ$ . Wir nehmen an, $x _ { 0 }$ ist Häufungspunkt von $D \cap (x_0 , + \infty)$ ;   
das heisst ein rechtsseitiger Häufungspunkt.

Falls der Grenzwert der eingeschränkten Funktion

$$
f \big\vert_{D\ \cap\ [ x_0 , + \infty ) }
$$

für $x \to x _ { 0 }$ existiert, wird er mit

$$
\lim_ { x \to x_0 ^ { + } } f ( x )
$$

bezeichnet und nennt sich rechtsseitiger Grenzwert von $f$ bei $x _ { 0 }$ . Wir erweitern diese Definition auf:

$$
\lim_ { x \to x_0 ^ { + } } f ( x ) = + \infty
$$

falls gilt:

$$
\forall \varepsilon > 0\ \exists \delta > 0 , \forall x \in D \cap (x_0 , x_0 + \delta) : \ f ( x ) > { \frac { 1 } { \varepsilon } }
$$

und analog:

$$
\lim_ { x \to x_0 ^ { + } } f ( x ) = - \infty
$$

falls

$$
\forall \varepsilon > 0\ \exists \delta > 0 , \forall x \in D \cap (x_0 , x_0 + \delta) : f ( x ) < - \frac { 1 } { \varepsilon } .
$$

Linksseitige Häufungspunkte und Grenzwerte werden analog definiert. Mit diesen Definitionen gilt:

$$
\lim_ { x \to 0 ^ { + } } { \frac { 1 } { x } } = + \infty , \quad \lim_ { x \to 0 ^ { - } } { \frac { 1 } { x } } = - \infty .
$$

::: example Beispiel 3.10.7.
$\displaystyle\lim_ { x \to 0 ^ { + } } \ln x = - \infty$ .

Nun, $(0 , + \infty) \to ℝ , x \mapsto \ln x$ ist strikt monoton. Sei $e ^ { - ( n + 1 ) } < x < e ^ { - n }$ , dann folgt $- ( n + 1 ) < \ln x < - n$ woraus die Behauptung folgt.
:::

::: example Beispiel 3.10.8.
Für $a > 0$ ist $\displaystyle\lim_ { x \to 0 ^ { + } } x ^ { a } = 0$

Aus 3.10.7 folgt, dass es für jedes $n \in \mathbb N$ ein $\delta > 0$ gibt so dass:

$$
0 < x < \delta \implies \ln x < - n
$$

und da $a > 0$,

$$
a \ln x < - a n
$$

und da exp (streng) monoton wachsend,

$$
x ^ { a } = \exp \left( a \ln x \right) < \exp \left( - a n \right) .
$$

Nun wird mit $n \in \mathbb N$ beliebig gross $\exp { ( - a n ) } = \left( \exp ( - a ) \right) ^ { n }$ beliebig klein, da $\exp ( - a ) <$ 1 woraus die Behauptung folgt.
:::

