---
prev:
    text: Folgen und Reihen
    link: /2-folgen-reihen
#next:
#    text: Number Theory
#    link: /4-number-theory
---

# <small>Kapitel 3:</small><br> Stetige Funktionen

In diesem Kapitel füren wir den Begriff der stetigen Funktion ein und beweisen einige grundlegende Sätze wie den Zwischenwertsatz, das Max-Min Theorem und den Satz über die Umkehrabbildung. Der Begriff der stetigen Funktion wurde von Cauchy in seinem “Cours d’Analyse” 1821 eingeführt; die moderne $\varepsilon-\delta$ -Definition geht auf Weierstrass 1874 zurück.

## 3.1. Reellwertige Funktionen

Sei $D$ eine beliebige Menge. Die Menge $\mathbb{R} ^ { D }$ aller Funktionen

$$
f : D \longrightarrow \mathbb{R}
$$

bildet ein Vektorraum über $\mathbb{R}$, wobei Addition und skalare Multiplikation gegeben sind durch:

$$
\begin{array} { c } { { \left( f _ { 1 } + f _ { 2 } \right) ( x ) = f _ { 1 } ( x ) + f _ { 2 } ( x ) } } \\ { { \left( \alpha \cdot f \right) ( x ) = \alpha \cdot f ( x ) } } \end{array}
$$

wobei $f _ { 1 }$ , $f _ { 2 }$ , $f \in \mathbb{R} ^ { D }$ , $x \in D$ , $\alpha \in \mathbb{R}$ . Auf $\mathbb{R} ^ { D }$ gibt es auch ein Produkt:

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

Definition 3.1.1. Sei $f \in \mathbb{R} ^ { D }$

(1) $f$ ist nach oben beschränkt, falls $f ( D ) \subset \mathbb{R}$ nach oben beschränkt ist.   
(2) $f$ ist nach unten beschränkt, falls $f ( D ) \subset \mathbb{R}$ nach unten beschränkt ist.   
(3) $f$ ist beschränkt, falls $f ( D ) \subset \mathbb{R}$ beschränkt ist.

Falls $D \subset \mathbb{R}$ gibt es folgende Monotoniebegriffe:

Definition 3.1.2. Eine Funktion $f : D \longrightarrow \mathbb{R}$ , wobei $D \subset \mathbb{R}$ , ist

(1) monoton wachsend, falls $\forall x , y \in D$

$$
x ≤ y \implies f ( x ) ≤ f ( y )
$$

(2) streng monoton wachsend, falls $\forall x , y \in D$

$$
x < y \implies f ( x ) < f ( y )
$$

(3) monoton fallend, falls $\forall x , y \in D$

$$
x ≤ y \implies f ( x ) ≥ f ( y )
$$

(4) streng monoton fallend, falls $\forall x , y \in D$

$$
x < y \implies f ( x ) > f ( y )
$$

(5) monoton, falls $f$ monoton wachsend oder monoton fallend

(6) streng monoton, falls $f$ streng monoton wachsend oder streng monoton fallend ist.

Beispiel 3.1.3. Sei $n \in \mathbf { N }$ :

$$
\begin{array} { r l } { f : \mathbb{R} \longrightarrow \mathbb{R} } & { { } } \\ { x \longmapsto x ^ { n } } & { { } } \end{array}
$$

ist genau dann (streng) monoton wachsend, falls $n$ ungerade ist:

![](images/7e47e57252d8fbe87cc05078ba4b08ca367f55460dd9ec7e24e08d345eb0617c.jpg)

![](images/0b193f3750fed1424eaf1fde9b327f8054c7478cf92ecfbade299d3558e7b0ca.jpg)

### 3.2. Stetigkeit

Definition 3.2.1. Sei $D \subset \mathbb{R}$ , $x _ { 0 } \in D$ . Die Funktion $f : D \longrightarrow \mathbb{R}$ ist in $\scriptstyle { \mathbf { { \vec { x } } _ { 0 } } }$ stetig, falls es für jedes $\varepsilon > 0$ ein $\delta > 0$ gibt, so dass für alle $x \in D$ die Implikation $| x - x _ { 0 } | < \delta \implies | f ( x ) - f ( x _ { 0 } ) | < \varepsilon$ gilt.

![](images/b7ab845711e69b796979de24bbad1d3702faa5b67bbb0d3c67a8f6c54651fdd3.jpg)

Definition 3.2.2. Die Funktion $f : D \longrightarrow \mathbb{R}$ ist stetig, falls sie in jedem Punkt von D stetig ist.

Beispiel 3.2.3. (1) Sei $n ≥ 0 : f : \mathbb{R} \longrightarrow \mathbb{R} , x \longmapsto x ^ { n }$ ist stetig.   
(2) $f : \mathbb{R} \longrightarrow \mathbb{R}$ , $x \longmapsto | x |$ ist stetig.

![](images/d26f2dda539fa91cad0013ed922c232fbbeb0309edd334dbc58e87187d0f4d14.jpg)

(3) Die Abrundungsfunktion

$$
\lceil \cdot \rceil : \mathbb{R} \longrightarrow \mathbb{R} , x \longmapsto \lceil x \rceil : = \operatorname* { m a x } \{ m \in \mathbf { Z } : \ m ≤ x \}
$$

ist in jedem Punkt $x _ { 0 } \notin \mathbf { Z }$ stetig; sie ist in keinem Punkt $y \in \mathbf { Z }$ stetig. Falls $D : = \mathbb{R} \setminus \mathbf { Z }$ , dann ist

$$
\left\lceil \cdot \right\rceil : D \longrightarrow \mathbb{R} , x \longmapsto \left\lceil x \right\rceil
$$

stetig.

![](images/8dda99bd3e4a9e98bca9398dbc01337c8964f7d311c94326de055a81479fb6e1.jpg)

(4) Die Funktion $f : \mathbb{R} \longrightarrow \mathbb{R}$ definiert durch:

$$
f ( x ) = { \left\{ \begin{array} { l l } { x } & { \quad x \in \mathbf { Q } } \\ { 1 - x } & { \quad x \not \in \mathbf { Q } } \end{array} \right. }
$$

ist genau in $\textstyle { \frac { 1 } { 2 } } \in \mathbb{R}$ stetig und in keinem anderen Punkt.

Es gibt eine sehr nützliche Charakterisierung der Stetigkeit mittels konvergenter Folgen

Satz 3.2.4. Sei $x _ { 0 } \in D \subset { \mathbb{R} }$ und $f : D \longrightarrow \mathbb{R}$ . Die Funktion $f$ ist genau dann in $x _ { 0 }$ stetig, falls für jede Folge $\left( a _ { n } \right) _ { n ≥ 1 }$ in $D$ folgende Implikation gilt:

$$
\operatorname* { l i m } _ { n \to \infty } a _ { n } = x _ { 0 } \implies \operatorname* { l i m } _ { n \to \infty } f ( a _ { n } ) = f ( x _ { 0 } ) .
$$

Beweis. $( \implies )$ : Sei $\left( a _ { n } \right) _ { n ≥ 1 }$ eine Folge in $D$ mit $\operatorname* { l i m } _ { n \to \infty } a _ { n } = x _ { 0 }$ . Sei $\varepsilon > 0$ und $\delta > 0$ , so dass für alle $x \in D$ :

$$
| x - x _ { 0 } | < \delta \implies | f ( x ) - f ( x _ { 0 } ) | < \varepsilon .
$$

Sei nun $N ≥ 1$ , so dass

$$
| a _ { n } - x _ { 0 } | < \delta \qquad \forall n ≥ N .
$$

Dann folgt

$$
| f ( a _ { n } ) - f ( x _ { 0 } ) | < \varepsilon \qquad \forall n ≥ N
$$

und daher:

$$
\operatorname* { l i m } _ { n \to \infty } f ( a _ { n } ) = f ( x _ { 0 } ) .
$$

( $\Longleftarrow$ ): Annahme: $f$ ist in $x _ { 0 }$ nicht stetig. Es gibt also $\varepsilon > 0$ , so dass

$$
\begin{array} { r l r } { f \left( \left| x _ { 0 } - \delta , x _ { 0 } + \delta [ \cap D ) \not \in \right. \right] f ( x _ { 0 } ) - \varepsilon , f ( x _ { 0 } ) + \varepsilon [ } & { { } } & { \forall \delta > 0 . } \end{array}
$$

Insbesondere gibt es für jedes $n ≥ 1$ , $n \in \mathbf { N } \left( { \mathrm { m i t ~ } } \delta = { \frac { 1 } { n } } \right)$ ein

$$
a _ { n } \in ] x _ { 0 } - { \frac { 1 } { n } } , x _ { 0 } + { \frac { 1 } { n } } \bigg [ \cap D
$$

mit

$$
f ( a _ { n } ) \not \in \left] f ( x _ { 0 } ) - \varepsilon , f ( x _ { 0 } ) + \varepsilon \right[ .
$$

Damit entsteht eine Folge $\left( a _ { n } \right) _ { n ≥ 1 }$ in $D$ mit

$$
\operatorname* { l i m } _ { n \to \infty } a _ { n } = x _ { 0 }
$$

und

$$
| f ( a _ { n } ) - f ( x _ { 0 } ) | ≥ \varepsilon \qquad \forall n ≥ 1 .
$$

Somit kann die Folge $( f ( a _ { n } ) ) _ { n ≥ 1 }$ nicht gegen $f ( x _ { 0 } )$ konvergieren.

Aus dem entsprechenden Satz für Folgen (Satz 2.1.8) erhalten wir mit Satz 3.2.4:

Korollar 3.2.5. Sei $x _ { 0 } \in D \subset { \mathbb{R} }$ , $\lambda \in \mathbb{R}$ und $f : D \longrightarrow \mathbb{R}$ , $g : D \longrightarrow \mathbb{R}$ beide stetig in $x _ { 0 }$ .

(1) Dann sind $f + g , \lambda \cdot f , f \cdot g$ stetig in $x _ { 0 }$ . (2) Falls $g ( x _ { 0 } ) \neq 0$ dann ist

$$
\begin{array} { c } { { \frac { f } { g } : D \cap \left\{ x \in D : \ g ( x ) \neq 0 \right\} \longrightarrow \mathbb{R} } } \\ { { x \qquad \longmapsto \displaystyle \frac { f ( x ) } { g ( x ) } } } \end{array}
$$

stetig in $x _ { 0 }$ .

Definition 3.2.6. Eine polynomiale Funktion $P : \mathbb{R} \longrightarrow \mathbb{R}$ ist eine Funktion der Form

$$
P ( x ) = a _ { n } x ^ { n } + \cdot \cdot \cdot + a _ { 0 }
$$

wobei : $a _ { n }$ , . . . , $a _ { 0 } \in \mathbb{R}$ . Falls $a _ { n } \neq 0$ ist n der Grad von $P$ .

Korollar 3.2.7. Polynomiale Funktionen sind auf ganz R stetig.

Korollar 3.2.8. Seien $P$ , $Q$ polynomiale Funktionen auf R mit $Q \ \ne \ o$ . Seien $\vert x _ { 1 } , \dots , x _ { m }$ die Nullstellen von $Q$ . Dann ist

$$
\begin{array} { c } { \displaystyle \frac { P } { Q } : \mathbb{R} \setminus \{ x _ { 1 } , \ldots x _ { m } \} \longrightarrow \mathbb{R} } \\ { \displaystyle x \qquad \longmapsto \frac { P ( x ) } { Q ( x ) } } \end{array}
$$

stetig.

### 3.3. Der Zwischenwertsatz

Seien $x _ { 1 }$ , $x _ { 2 } \in \mathbb{R}$ : dann liegt $c$ zwischen $x _ { 1 }$ und $x _ { 2 }$ falls:

$$
\begin{array} { l l } { x _ { 1 } ≤ x _ { 2 } , } & { c \in \left[ x _ { 1 } , x _ { 2 } \right] } \\ { x _ { 2 } ≤ x _ { 1 } , } & { c \in \left[ x _ { 2 } , x _ { 1 } \right] . } \end{array}
$$

Satz 3.3.1 (Bolzano 1817). Sei $I \subset \mathbb{R}$ ein Intervall, $f : I \longrightarrow \mathbb{R}$ eine stetige Funktion und $a$ , $b , \in I$ . Für jedes c zwischen $f ( a )$ und $f ( b )$ gibt es ein $z$ zwischen a und $b$ mit $f ( z ) = c$ .

![](images/ee5d34e4f8b0e5e83077c6cfb4289070e11a15da0226f2acfe20a2af7e5910a2.jpg)

Beweis. Ohne Einschränkung der Allgemeinheit (O.E.d.A) können wir

$$
a ≤ b { \mathrm { ~ ~ u n d ~ } } f ( a ) ≤ f ( b )
$$

annehmen. Sei also : $f ( a ) ≤ c ≤ f ( b )$ . Wir definieren:

$$
M = \left\{ x \in [ a , b ] : f ( x ) ≤ c \right\}
$$

Sei $z : = \operatorname* { s u p } M$ , wir zeigen

$$
f ( z ) = c .
$$

Zunächst bemerken wir, dass $\operatorname { s u p } M$ existiert: $a \in M$ , insbesondere $M \neq \emptyset$ und $M \subset$ $\lfloor a , b \rfloor ,$ , insbesondere ist $M$ beschränkt.

![](images/de8545b3c6750b7b6679d933549b188403d34ccd81d51478af8638462f0c7014.jpg)

Wir zeigen, dass $f ( z ) = c$ mittels einem Widerspruchsbeweis.

(1) Anname $f ( z ) < c$ : Insbesondere gilt

$$
z < b
$$

da sonst aus $z = b$ , $f ( z ) = f ( b ) ≥ c$ folgt, entgegen der Annahme $f ( z ) < c$ .

![](images/a83b0bfb507815412c686a564d2926e72aa724c692a1de8a1a40278b984f81f4.jpg)

Sei nun $\varepsilon = { \frac { c - f ( z ) } { 2 } }$ und sei $\delta > 0$ dementsprechend, so dass:

$$
f \left( \left. \right] z - \delta , z + \delta [ \cap [ a , b ] \right) \subset \left. \right] f ( z ) - \varepsilon , f ( z ) + \varepsilon [ . \
$$

Da $z < b \mathrm { ~ f o l g t ~ } \rfloor z , z + \delta [ \cap [ a , b ] \neq \emptyset .$

![](images/b1f1d5aa1ab90369130f7c70d9d9be186951dbad46d7eeab292cb08c60babc57.jpg)

Sei also $z ^ { \prime } \in \left] z , z + \delta \right. \cap \left\lfloor a , b \right\rfloor$ . Dann folgt:

$$
f ( z ^ { \prime } ) \in \left] f ( z ) - \varepsilon , f ( z ) + \varepsilon \right[
$$

insbesondere

$$
f ( z ^ { \prime } ) < f ( z ) + \varepsilon < f ( c ) .
$$

Zusammen mit $z ^ { \prime } > z$ führt dies zu einem Widerspruch mit der Definition von sup $M$ .

(2) Annahme $f ( z ) > c$ :

![](images/c9226e2feed40e19909f746ece1e7c746e5df76f418d1b0e9808934eb84b9d91.jpg)

Sei $\varepsilon = { \frac { f ( z ) - c } { 2 } }$ und $\delta > 0$ , so dass

$$
f \left( \left. \right] z - \delta , z + \delta [ \cap [ a , b ] \right) \subset \left. \right] f ( z ) - \varepsilon , f ( z ) + \varepsilon [ . \
$$

Da z “ sup M folgt $] z - \delta , z ] \cap M \neq \emptyset$ .

Sei also $x \in \left] z - \delta , z \right] \cap M$ . Es folgt dann $f ( x ) ≤ c \ \left( x \in M \right)$ und

$$
f ( x ) \in \left] f ( z ) - \varepsilon , f ( z ) + \varepsilon \right[
$$

insbesondere

$$
f ( x ) > f ( z ) - \varepsilon > c .
$$

Dies führt zu einem Widerspruch. Da beide Annahmen (1) und (2) zu einem Widerspruch führen, folgt $f ( z ) = c$ und der Satz ist bewiesen. ⇤

Korollar 3.3.2. Sei $P ( x ) = a _ { n } x ^ { n } + a _ { n - 1 } x ^ { n - 1 } + \cdot \cdot \cdot + a _ { 0 }$ ein Polynom mit $a _ { n } \neq 0$ und n ungerade. Dann besitzt $P$ mindestens eine Nullstelle in $\mathbb{R}$ .

Bemerkung 3.3.3. Für $c > 0$ besitzt $Q ( x ) = x ^ { 2 } + c$ keine Nullstelle in $\mathbb{R}$

Beweis. O.E.d.A können wir $a _ { n } = 1$ annehmen. Für $x \neq 0$ betrachte:

$$
{ \frac { P ( x ) } { x ^ { n } } } = \underbrace { 1 + a _ { n - 1 } x ^ { - 1 } + a _ { n - 2 } x ^ { - 2 } + \cdots + a _ { 0 } x ^ { - n } } _ { Q ( x ) }
$$

Da

$$
\operatorname* { l i m } _ { m \to \infty } \left( { \frac { 1 } { m } } \right) ^ { j } = 0 \qquad 1 ≤ j ≤ n
$$

und

$$
\operatorname* { l i m } _ { m \to \infty } \left( - { \frac { 1 } { m } } \right) ^ { j } = 0 \qquad 1 ≤ j ≤ n
$$

gibt es $N \in \mathbf { N }$ , $N ≥ 1$ , so dass:

$$
{ \frac { 1 } { 2 } } ≤ Q ( N ) ≤ { \frac { 3 } { 2 } } , \quad { \frac { 1 } { 2 } } ≤ Q ( - N ) ≤ { \frac { 3 } { 2 } }
$$

Daraus folgt

$$
P ( N ) = N ^ { n } Q ( N ) > 0 , \quad P ( - N ) = ( - N ) ^ { n } Q ( - N ) < 0 \mathrm { ~ ( n ~ u n g e r a d e ) . }
$$

Der Zwischenwertsatz angewendet auf

$$
P : [ - N , N ] \longrightarrow { \bf R }
$$

garantiert dann die Existenz von $z \in \left\lfloor - N , N \right\rfloor$ mit $P ( z ) = 0$ .

### 3.4. Der Min-Max Satz

In diesem Abschnitt zeigen wir, dass eine stetige Funktion auf einem kompakten Intervall beschränkt ist und zudem ein Maximum und ein Minimum annimmt. Wir betrachten zunächst folgende Beispiele:

Beispiel 3.4.1. (1) $f : [ 0 , + \infty [ \longrightarrow \mathbb{R} , \ x \longmapsto x ^ { 2 }$

![](images/94146d888f7a1e25057a70c971febbf7a216a927da09785f69bb73425ba0e3be.jpg)

ist stetig aber nicht beschränkt.

$$
f : ] 0 , 1 ] \longrightarrow \mathbb{R} , \ x \longmapsto { \frac { 1 } { x } }
$$

![](images/e39aeec2092b972b07804020660ace296519b1b09da83c8f329fb56c858b76e3.jpg)

ist stetig aber nicht beschränkt. (3) $f : [ 0 , 1 [ \longrightarrow \mathbb{R} , \ x \longmapsto x ]$

![](images/e4d87459117a31ceb0e58be3c869e6103a557830c798fd4ad0e4feac30c47eb7.jpg)

ist stetig, beschränkt, nimmt aber kein Maximum an: es gibt kein $a \in \lfloor 0 , 1 \lfloor$ , so dass $f ( x ) ≤ f ( a )$ $\forall x \in \lfloor 0 , 1 \lfloor$ .

Definition 3.4.2. Ein Intervall R ist kompakt, falls es von der Form

$$
I = [ a , b ] , \quad a ≤ b
$$

ist.

Als Vorbereitung zum Beweis führen wir noch folgende Begriffe ein: Seien allgemein $D$ eine Menge und $f , g : D \longrightarrow \mathbb{R}$ Funktionen. Wir bezeichnen:

$$
\begin{array} { r l } { | f | ( x ) : = | f ( x ) | , \quad } & { \forall x \in D } \\ { \operatorname* { m a x } ( f , g ) ( x ) : = \operatorname* { m a x } \left( f ( x ) , g ( x ) \right) , \quad } & { \forall x \in D } \\ { \operatorname* { m i n } ( f , g ) ( x ) : = \operatorname* { m i n } \left( f ( x ) , g ( x ) \right) , \quad } & { \forall x \in D . } \end{array}
$$

![](images/5d8d4ee030a0079746d83724f1ff1d603319966776e9a0e62c19b40f5dd7c60d.jpg)  
Lemma 3.4.3. Sei $D \subset \mathbb{R}$ , $x _ { 0 } \in D$ und $f$ , $g : D \longrightarrow \mathbb{R}$ stetig in $x _ { 0 }$ . Dann sind

stetig in $x _ { 0 }$ .

Beweis. (1) Zu $\vert f \vert : \mathrm { S e i } \ \varepsilon > 0$ und $\delta > 0$ , so dass $\forall x \in D$ die Implikation $| x - x _ { 0 } | < \delta \implies | f ( x ) - f ( x _ { 0 } ) | < \varepsilon$

gilt. Dann folgt:

$$
| | f | ( x ) - | f | ( x _ { 0 } ) | = | | f ( x ) | - | f ( x _ { 0 } ) | | ≤ | f ( x ) - f ( x _ { 0 } ) | < \varepsilon
$$

und somit ist $| f |$ stetig.

(2) Zunächst bemerken wir: $\forall u , v \in \mathbb{R}$ :

$$
\operatorname* { m a x } ( u , v ) = { \frac { u + v + | u - v | } { 2 } } , \quad \operatorname* { m i n } ( u , v ) = { \frac { u + v - | u - v | } { 2 } }
$$

Folglich:

$$
\operatorname* { m a x } ( f , g ) = { \frac { f + g + | f - g | } { 2 } } , \quad \operatorname* { m i n } ( f , g ) = { \frac { f + g - | f - g | } { 2 } }
$$

Aus Korollar 3.2.5(1) folgt, dass $f + g$ und $f - g$ in $x _ { 0 }$ stetig sind; aus (1) folgt dann, dass $| f - g |$ in $x _ { 0 }$ stetig ist. Wiederholte Anwendung von Korollar 3.2.5(1) impliziert dann, dass $\operatorname* { m a x } ( f , g )$ und $\operatorname* { m i n } ( f , g )$ in $x _ { 0 }$ stetig sind.

Eine wesentliche Eigenschaft kompakter Intervalle wollen wir hier hervorheben.

Lemma 3.4.4. Sei $\left( x _ { n } \right) _ { n ≥ 1 }$ eine konvergente Folge in $\mathbb{R}$ mit Grenzwert

$$
\operatorname* { l i m } _ { n \to \infty } x _ { n } \in \mathbb{R} .
$$

Sei $a ≤ b$ . Falls $\{ x _ { n } : n ≥ 1 \} \subset [ a , b ]$ folgt

$$
\operatorname* { l i m } _ { n \to \infty } x _ { n } \in [ a , b ] .
$$

Beweis. Aus $a ≤ x _ { n } ≤ b \quad \forall n ≥ 1$ folgt mit Satz 2.1.8(4):

$$
a ≤ \operatorname* { l i m } _ { n \to \infty } x _ { n } ≤ b .
$$

Satz 3.4.5. Sei $f : I = \lfloor a , b \rfloor \longrightarrow \mathbb{R}$ stetig auf einem kompakten Intervall $I$ . Dann gibt es $u \in I$ und $v \in I$ mit

$$
f ( u ) ≤ f ( x ) ≤ f ( v ) \qquad \forall x \in I .
$$

Insbesondere ist $f$ beschränkt.

Beweis. Wir beweisen zunächst die Existenz von $v$ mit der Eigenschaft $f \left( x \right) ≤ f \left( v \right)$ für alle $x \in [ a , b ]$ . Sei

$$
g ( x ) = \operatorname* { m a x } \left( 1 , { \frac { 3 } { 2 } } - f ( a ) + f ( x ) \right) .
$$

Dann ist $g : \left[ a , b \right] \longrightarrow \mathbb{R}$ stetig und $g ( x ) ≥ 1$ .

Dann folgt aus Korollar 3.2.5(2), dass

$$
{ \frac { 1 } { g } } : [ a , b ] \longrightarrow \mathbb{R} , x \longmapsto { \frac { 1 } { g ( x ) } }
$$

stetig ist.

Nun gilt $0 < { \frac { 1 } { g ( x ) } }$ für alle $x \in [ a , b ]$ , also existiert

$$
s : = \operatorname* { i n f } \left\{ { \frac { 1 } { g ( x ) } } : x \in [ a , b ] \right\} .
$$

Für jedes ${ \boldsymbol { n } } \in \mathbf { N }$ , $n ≥ 1$ gibt es per Definition des Infimums ein $x _ { n } \in \left\lfloor a , b \right\rfloor$ mit

$$
s ≤ \frac { 1 } { g ( x _ { n } ) } < s + \frac { 1 } { n } .
$$

Nach Bolzano-Weierstrass gibt es eine Teilfolge $\left( x _ { l ( n ) } \right) _ { n ≥ 1 }$ die konvergiert, denn $\left( x _ { n } \right) _ { n ≥ 1 }$ ist beschränkt. Sei

$$
v : = \operatorname* { l i m } _ { n \to \infty } x _ { l ( n ) } .
$$

Dann folgt aus Lemma 3.4.4, dass

$$
v \in [ a , b ] .
$$

Aus der Stetigkeit von $\frac { 1 } { g }$ und Satz 3.2.4 folgt:

$$
s ≤ { \frac { 1 } { g ( v ) } } = \operatorname* { l i m } _ { n \to \infty } { \frac { 1 } { g ( x _ { l ( n ) ) } } } ≤ s + \operatorname* { l i m } _ { n \to \infty } { \frac { 1 } { l ( n ) } } = s + 0
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
g ( a ) = \operatorname* { m a x } \left( 1 , \frac { 3 } { 2 } \right) = \frac { 3 } { 2 }
$$

folgt

$$
g ( v ) = \operatorname* { m a x } \left( 1 , { \frac { 3 } { 2 } } - f ( a ) + f ( v ) \right) ≥ { \frac { 3 } { 2 } }
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

und der Satz ist bewiesen.

## 3.5. Der Satz über die Umkehrabbildung

Im Kontext der Umkehrabbildung stellt sich allgemein die Frage der Stetigkeit unter Verknüpfung.

Satz 3.5.1. Seien $\mathbf { \mathscr { D } } _ { 1 } , \mathbf { \mathscr { D } } _ { 2 } \subset \mathbf { \mathscr { R } }$ zwei Teilmengen, $f : D _ { 1 } \longrightarrow D _ { 2 }$ , $g : D _ { 2 } \longrightarrow \mathbb{R}$ Funktionen, sowie $x _ { 0 } \in D _ { 1 }$ . Falls $f$ in $x _ { 0 }$ und $g$ in $f ( x _ { 0 } )$ stetig sind, so ist

$$
g \circ f : D _ { 1 } \longrightarrow \mathbb{R}
$$

in $x _ { 0 }$ stetig.

Beweis. Wir wollen das Stetigkeitskriterium (Satz 3.2.4) anwenden. Sei $\left( a _ { n } \right) _ { n ≥ 1 }$ eine Folge in $D _ { 1 }$ mit

$$
\operatorname* { l i m } _ { n \to \infty } a _ { n } = x _ { 0 } .
$$

Da $f$ stetig in $x _ { 0 }$ folgt (mit Satz 3.2.4)

$$
\operatorname* { l i m } _ { n \to \infty } f ( a _ { n } ) = f ( x _ { 0 } )
$$

und da $g$ in $f ( x _ { 0 } )$ stetig, folgt (mit Satz 3.2.4)

$$
\operatorname* { l i m } _ { n \to \infty } g \left( f ( a _ { n } ) \right) = g \left( f ( x _ { 0 } ) \right)
$$

woraus (mit Satz 3.2.4) die Stetigkeit von $g \circ f$ in $x _ { 0 }$ folgt.

Korollar 3.5.2. Falls in Satz 3.5.1 $f$ auf $D _ { 1 }$ und $g$ auf $D _ { 2 }$ stetig sind, so ist $g \circ f$ auf $D _ { 1 }$ stetig.

Satz 3.5.3. Sei $I \subset \mathbb{R}$ ein Intervall und $f : I \longrightarrow \mathbb{R}$ stetig, streng monoton. Dann ist $J : = f \left( I \right) \subset { \mathbb{R} }$ ein Intervall und $f ^ { - 1 } : J \longrightarrow I$ ist stetig, streng monoton.

Beweis. Wir führen den Beweis im Fall $\boldsymbol { I } = \left[ a , b \right]$ wobei $a ≤ b$ und nehmen an, dass $f$ streng monoton wachsend ist.

Aus $a ≤ x ≤ b$ folgt $f ( a ) ≤ f ( x ) ≤ f ( b )$ . Somit ist $f \left( [ a , b ] \right) \subset [ f ( a ) , f ( b ) ]$ . Aus dem Zwischenwertsatz folgt, dass es für jedes $c \in [ f ( a ) , f ( b ) ]$ ein $z \in [ a , b ]$ gibt mit $f ( z ) = c$ . Folglich:

$$
J = f \left( [ a , b ] \right) = [ f ( a ) , f ( b ) ]
$$

und $J$ ist ein Intervall. Insbesondere ist $f : [ a , b ] \longrightarrow [ f ( a ) , f ( b ) ]$ surjektiv; $f$ ist zudem injektiv da streng monoton wachsend.

Sei $f ^ { - 1 } : [ f ( a ) , f ( b ) ] \longrightarrow [ a , b ]$ die Umkehrabbildung. Wir beweisen die Stetigkeit von $f ^ { - 1 }$

Sei $y \in [ f ( a ) , f ( b ) ]$ und $\left( y _ { n } \right) _ { n ≥ 1 }$ eine Folge in $[ f ( a ) , f ( b ) ]$ mit

$$
\operatorname* { l i m } _ { n \to \infty } y _ { n } = y .
$$

Sei $x _ { n } = f ^ { - 1 } ( y _ { n } ) , \ x = f ^ { - 1 } ( y )$ . Falls $\left( x _ { n } \right) _ { n ≥ 1 }$ nicht gegen $x$ konvergiert, gibt es $\varepsilon > 0$ , so dass

$$
\{ n \in \mathbf { N } : x _ { n } \not \in \left] x - \varepsilon , x + \varepsilon [ \right\}
$$

unendlich ist. Es gibt also eine Teilfolge $\begin{array} { r l } { \left( x _ { l ( n ) } \right) _ { n ≥ 1 } } & { { } \left( l : \mathbf { N ^ { * } } \longrightarrow \mathbf { N ^ { * } } \right) \ \underset { } { \mathrm { m i t } } } \end{array}$

$$
\left| x _ { l ( n ) } - x \right| ≥ \varepsilon \forall n ≥ 1 .
$$

Nach Bolzano-Weierstrass (bemerke ra, bs ist beschränkt) gibt es eine Teilfolge xlpl1pnqq n 1 die konvergiert. Sei $z \in [ a , b ]$ deren Grenzwert:

$$
z = \operatorname* { l i m } _ { n \to \infty } x _ { l ( l ^ { \prime } ( n ) ) } .
$$

Dann folgt aus $\left| x _ { l ( l ^ { \prime } ( n ) ) } - x \right| ≥ \varepsilon$ , dass

$$
| z - x | ≥ \varepsilon
$$

und aus der Stetigkeit von $f$ :

$$
f ( z ) = \operatorname* { l i m } _ { n \to \infty } f \left( x _ { l ( l ^ { \prime } ( n ) ) } \right) = \operatorname* { l i m } _ { n \to \infty } y _ { l ( l ^ { \prime } ( n ) ) } = y = f ( x ) .
$$

Also ein Widerspruch zur Injektivität von $f$ . Dies beweist die Stetigkeit von $f ^ { - 1 }$ .

Beispiel 3.5.4. Sei $n ≥ 1$ . Dann ist

$$
\begin{array} { c } { { \left[ 0 , \infty \right[ \longrightarrow \left[ 0 , \infty \right[ } } \\ { { x \longmapsto x ^ { n } } } \end{array}
$$

streng monoton wachsend, stetig und surjektiv. Nach dem Umkehrsatz existiert eine streng monoton wachsende stetige Umkehrabbildung

$$
\begin{array} { r } { { \left[ 0 , \infty \right[ \longrightarrow \left[ 0 , \infty \right[ } } \\ { x \longmapsto { \sqrt [ n ] { x } } } \end{array}
$$

genannt die $n$ -te Wurzel.

### 3.6. Die reelle Exponentialfunktion

In Beispiel 2.7.18 haben wir die Exponentialfunktion $\exp : { \bf C } \longrightarrow { \bf C }$ durch eine in ganz $\mathbf { C }$ absolut konvergente Potenzreihe definiert:

$$
\exp ( z ) : = \sum _ { n = 0 } ^ { \infty } { \frac { z ^ { n } } { n ! } }
$$

Wir studieren jetzt eingehender diese Funktion für $z \in \mathbb{R}$ .

Satz 3.6.1. $\exp : { \bf R } \longrightarrow ] 0 , + \infty [ { \it \Delta } i s t s t r e n g { \ m o n o t o n \ w a c h s e n d } , \ s t$ etig und surjektiv.

Wir zeigen einige Eigenschaften von exp, die von unabhängigem Interesse sind. Mit

$$
\exp ( x ) = 1 + x + { \frac { x ^ { 2 } } { 2 ! } } + { \frac { x ^ { 3 } } { 3 ! } } + \cdots ≥ 1
$$

für $x ≥ 0$ folgt mit

$$
\exp ( - x ) \exp ( x ) = 1 \qquad ( { \mathrm { s i e h e ~ 2 . 7 . 2 7 } } )
$$

Korollar 3.6.2.

$$
\exp ( x ) > 0 \qquad \forall x \in \mathbb{R} .
$$

Aus der Potenzreihendarstellung von exp folgt ausserdem:

$$
\exp ( x ) > 1 \qquad \forall x > 0 .
$$

Falls jetzt $y < z$ , dann folgt (aus 2.7.27):

$$
\exp ( z ) = \exp ( y + ( z - y ) ) = \exp ( y ) \exp ( z - y )
$$

und da $\exp ( z - y ) > 1$ , folgt:

Korollar 3.6.3.

$$
\exp ( z ) > \exp ( y ) \qquad \forall z > y .
$$

Eine Ungleichung, die wir im Stetigkeitsbeweis benützen werden, ist:

Korollar 3.6.4.

$$
\exp ( x ) ≥ 1 + x \qquad \forall x \in \mathbb{R} .
$$

Dafür benützen wir (siehe Korollar 2.7.29)

$$
\exp ( x ) = \operatorname* { l i m } _ { n \to \infty } { \Big ( } 1 + { \frac { x } { n } } { \Big ) } ^ { n } .
$$

Sei $x \in \mathbb{R}$ und $N$ , so dass

$$
\frac { x } { N } > - 1
$$

woraus natürlich

$$
{ \frac { x } { n } } > - 1 \forall n ≥ N
$$

folgt. Für alle $n ≥ N$ folgt aus der Bernoulli Ungleichung

$$
\left( 1 + { \frac { x } { n } } \right) ^ { n } ≥ 1 + n \left( { \frac { x } { n } } \right) = 1 + x
$$

woraus mit Satz 2.1.8(4)

$$
\exp ( x ) = \operatorname* { l i m } _ { n \to \infty } \left( 1 + { \frac { x } { n } } \right) ^ { n } ≥ 1 + x
$$

folgt.

Beweis von Satz 3.6.1. Aus (3.6.2) folgt $\exp ( \mathbb{R} ) \subset \mathbf { | 0 , + \infty | }$ und aus (3.6.3) folgt, dass exp streng monoton wachsend ist.

Zur Stetigkeit: Schritt 1: Stetigkeit in 0.

Sei $- { \frac { 1 } { 2 } } ≤ x ≤ { \frac { 1 } { 2 } }$ dann folgt aus $\exp ( x ) ≥ 1 + x$ für dieses $x$ , dass

$$
\exp ( - x ) ≤ { \frac { 1 } { 1 + x } } .
$$

Wir können $x$ und $- x$ vertauschen und erhalten also $\forall x \in \left[ - \frac { 1 } { 2 } , \frac { 1 } { 2 } \right]$

$$
1 + x ≤ \exp ( x ) ≤ { \frac { 1 } { 1 - x } }
$$

woraus

$$
x ≤ \exp ( x ) - \exp ( 0 ) ≤ { \frac { x } { 1 - x } }
$$

und somit

$$
| \exp ( x ) - \exp ( 0 ) | ≤ 2 | x | \quad \forall x \in \left[ - { \frac { 1 } { 2 } } , { \frac { 1 } { 2 } } \right]
$$

folgt. Sei $\varepsilon > 0$ und $\delta = \operatorname* { m i n } \left( \frac { 1 } { 2 } , \frac { \varepsilon } { 2 } \right)$ Dann folgt @|x| † δ :

$$
| \mathrm { e x p } ( x ) - \mathrm { e x p } ( 0 ) | ≤ 2 | x | < 2 \delta ≤ \varepsilon .
$$

Damit ist die Stetigkeit in 0 bewiesen.

Schritt 2: Stetigkeit überall.

Sei $x _ { 0 } \in \mathbb{R}$ . Dann schreiben wir:

6 $\arg ( x ) - \exp ( x _ { 0 } ) = \exp ( x _ { 0 } + ( x - x _ { 0 } ) ) - \exp ( x _ { 0 } ) = \exp ( x _ { 0 } ) \left[ \exp ( x - x _ { 0 } ) - \exp ( 0 ) \right] \exp ( x _ { 0 } )$ Sei $\varepsilon > 0$ und $\delta = \operatorname* { m i n } \left( \frac { 1 } { 2 } , \frac { \varepsilon } { 2 \exp ( x _ { 0 } ) } \right)$ Dann folgt: für alle $| x - x _ { 0 } | < \delta$ :

$$
\begin{array} { l } { | \exp ( x ) - \exp ( x _ { 0 } ) | = \exp ( x _ { 0 } ) \cdot | \exp ( x - x _ { 0 } ) - \exp ( 0 ) | } \\ { ≤ \exp ( x _ { 0 } ) \cdot 2 \cdot | x - x _ { 0 } | } \\ { \qquad < \exp ( x _ { 0 } ) \cdot 2 \cdot \displaystyle \frac { \varepsilon } { 2 \exp ( x _ { 0 } ) } = \varepsilon . } \end{array}
$$

Surjektivität:

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
\exp ( - n ) = \exp ( n ) ^ { - 1 } = e ^ { - n } ≤ 2 ^ { - n } .
$$

Also ist nach dem Zwischenwertsatz

$$
\left[ 2 ^ { - n } , 2 ^ { n } \right] \subset \exp \left( \left[ - n , n \right] \right)
$$

und somit

$$
] 0 , + \infty [ = \bigcup _ { n ≥ 1 } [ 2 ^ { - n } , 2 ^ { n } ] \subset \exp ( \mathbb{R} ) \subset ] 0 , + \infty [ .
$$

Daraus folgt $\exp ( \mathbb{R} ) = ] 0 , + \infty \lfloor$ und der Satz ist bewiesen.

Die Umkehrabbildung der bijektiven Abbildung $\exp : \mathbb{R} \longrightarrow ] 0 , + \infty [ $ nennen wir den natürlichen Logarithmus und bezeichnen sie mit ln, oder log.

Korollar 3.6.5. Der natürliche Logarithmus

$$
\ln : ] 0 , + \infty [ \longrightarrow \mathbb{R}
$$

ist eine streng monoton wachsende, stetige, bijektive Funktion. Des weiteren gilt

$$
\ln ( a \cdot b ) = \ln a + \ln b \qquad \forall a , b \in ] 0 , + \infty [ .
$$

Beweis. Aus Satz 3.6.1 folgt, dass

$$
\exp : \mathbb{R} \longrightarrow ] 0 , + \infty [
$$

streng monoton wachsend, stetig und bijektiv ist. Unter Anwendung von Satz 3.5.3 mit $I = { \bf R } , J = ] 0 , + \infty [$ und $f = \exp$ folgt, dass $f ^ { - 1 } = \ln$ ,

$$
\ln : ] 0 , + \infty [ \longrightarrow \mathbb{R}
$$

stetig, streng monoton und bijektiv ist.

Seien $a , b \in ] 0 , + \infty [$ : Aus Anwendung von 2.7.27 folgt:

$$
\exp ( \ln a + \ln b ) = \exp ( \ln a ) \cdot \exp ( \ln b ) .
$$

Da exp die Umkehrfunktion von ln ist, folgt:

$$
\exp ( \ln a ) \exp ( \ln b ) = a b = \exp ( \ln ( a b ) )
$$

Daraus folgt:

$$
\exp ( \ln a + \ln b ) = \exp ( \ln a b ) .
$$

Da exp injektiv ist, folgt:

$$
\ln a + \ln b = \ln a b .
$$

![](images/084e0511172960ecbb003af67e5358940a4f9054ac1eb77c0a9fe5cf451097d3.jpg)

Wir können jetzt Logarithmus und Exponentialfunktion benützen, um allgemeine Potenzen zu definieren. Für $x > 0$ und $a \in \mathbb{R}$ beliebig definieren wir:

$$
x ^ { a } : = \exp ( a \ln x ) .
$$

Insbesondere: $x ^ { 0 } = 1$ $\forall x > 0$ .

Korollar 3.6.6.

$$
] 0 , + \infty [ \longrightarrow ] 0 , + \infty [
$$

$$
x \longmapsto x ^ { a }
$$

eine stetige, streng monoton wachsende Bijektion.

(2) Für $a < 0$ ist

$$
\begin{array} { c } { { \left] 0 , + \infty [ \longrightarrow ] 0 , + \infty [ \right.} } \\ { { x \longmapsto x ^ { a } } } \end{array}
$$

eine stetige, streng monoton fallende Bijektion.

$$
\begin{array} { l } { \ln ( x ^ { a } ) = a \ln ( x ) \quad \forall a \in \mathbb{R} , \ \forall x > 0 . } \\ { x ^ { a } \cdot x ^ { b } = x ^ { a + b } \quad \forall a , b \in \mathbb{R} , \ \forall x > 0 . } \\ { \left( x ^ { a } \right) ^ { b } = x ^ { a \cdot b } \quad \forall a , b \in \mathbb{R} , \ \forall x > 0 . } \end{array}
$$

Beweis. (1) Für $a > 0$ ist mit $x \longmapsto \ln x$ auch $x \longmapsto a \ln x$ streng monoton wachsend. Da $x \longmapsto \exp x$ streng monoton wachsend, folgt, dass

$$
x \longmapsto x ^ { a } = \exp ( a \ln x )
$$

streng monoton wachsend ist.

Ausserdem ist $x \longmapsto x ^ { a }$ eine Verknüpfung stetiger Funktionen und deswegen nach Satz 3.5.1 auch stetig.

(2) Analog wie (1). Es ist zu bemerken, dass für $a < 0 , x \longmapsto a \ln x$ streng monoton fallend ist.

$$
\ln \left( x ^ { a } \right) = \ln \exp ( a \ln x ) = a \ln x
$$

$$
\begin{array} { c } { { x ^ { a } \cdot x ^ { b } = \exp \left( a \ln x \right) \exp ( b \ln x ) = \exp ( a \ln x + b \ln x ) } } \\ { { { } } } \\ { { = \exp \left( \left( a + b \right) \ln x \right) = x ^ { a + b } . } } \end{array}
$$

$$
\left( x ^ { a } \right) ^ { b } = \exp \left( b \ln \left( x ^ { a } \right) \right)
$$

Aus (3) folgt $\ln \left( x ^ { a } \right) = a \ln x$ , woraus folgt:

$$
\left( x ^ { a } \right) ^ { b } = \exp \left( b a \ln x \right) = x ^ { a \cdot b } .
$$

## 3.7. Konvergenz von Funktionenfolgen

Sei $D$ eine Menge. Analog zur Definition einer Folge reeller Zahlen ist eine (reellwertige) Funktionenfolge eine Abbildung

$$
\begin{array} { c } { { { \bf N } \longrightarrow { \bf R } ^ { D } } } \\ { { n \longmapsto f ( n ) . } } \end{array}
$$

Wie im Fall der Folgen bezeichnen wir $f ( n )$ mit $f _ { n }$ und die Funktionenfolge mit $\left( f _ { n } \right) _ { n ≥ 0 }$ Für jedes $x \in D$ erhält man eine Folge $\left( f _ { n } ( x ) \right) _ { n ≥ 0 }$ in $\mathbb{R}$ .

Definition 3.7.1. Die Funktionenfolge $\left( f _ { n } \right) _ { n ≥ 0 }$ konvergiert punktweise gegen eine Funktion $f : D \longrightarrow \mathbb{R}$ , falls für alle $x \in D$ :

$$
f ( x ) = \operatorname* { l i m } _ { n \to \infty } f _ { n } ( x ) .
$$

Beispiel 3.7.2. Sei $D = \lfloor 0 , 1 \rfloor$ und

$$
{ \begin{array} { r } { f _ { n } : [ 0 , 1 ] \longrightarrow \mathbb{R} , n \in \mathbf { N } . } \\ { x \longmapsto x ^ { n } } \end{array} }
$$

Dann folgt aus Beispiel 2.2.3:

$$
\operatorname* { l i m } _ { n \to \infty } f _ { n } ( x ) = \operatorname* { l i m } _ { n \to \infty } x ^ { n } = 0 \qquad \forall 0 ≤ x < 1 .
$$

Ausserdem gilt $f _ { n } ( 1 ) = 1 ^ { n } = 1$ . Also konvergiert die Funktionenfolge $\left( f _ { n } \right) _ { n ≥ 0 }$ punktweise gegen die Funktion $f : \left\lfloor 0 , 1 \right\rfloor \longrightarrow \mathbb{R}$ gegeben durch:

$$
f ( x ) = \left\{ \begin{array} { r l } { 0 \quad } & { { } 0 ≤ x < 1 } \\ { 1 \quad } & { { } x = 1 . } \end{array} \right.
$$

Bemerke: die Funktionen $f _ { n }$ sind alle stetig in $[ 0 , 1 ] ,$ die Funktion $f$ ist nicht stetig in 1.

Um zu garantieren, dass der Grenzwert einer Folge stetiger Funktionen stetig ist, braucht es zusätzliche Voraussetzungen.

Definition 3.7.3. (Weierstrass 1841) Die Folge

$$
f _ { n } : D \longrightarrow \mathbb{R}
$$

konvergiert gleichmässig in $D$ gegen

$$
f : D \longrightarrow \mathbb{R}
$$

falls gilt: $\forall \varepsilon > 0 \exists N ≥ 1$ , so dass:

$$
\forall n ≥ N , \forall x \in D : | f _ { n } ( x ) - f ( x ) | < \varepsilon .
$$

In dieser Definition ist es wichtig, dass $N$ nur von $\varepsilon$ und nicht von $x \in D$ abhängt.   
Deswegen kommt die Bedingung “ $\forall x \in D ^ { \prime \prime }$ nach der Bedingung “ $\exists N ≥ 1$ ”.

Satz 3.7.4. Sei $D \subset \mathbb{R}$ und $f _ { n } : D \longrightarrow \mathbb{R}$ eine Funktionenfolge bestehend aus (in D) stetigen Funktionen die (in $D$ ) gleichmässig gegen eine Funktion $f : D \longrightarrow \mathbb{R}$ konvergiert. Dann ist $f$ (in $D$ ) stetig.

Beweis. Sei $x _ { 0 } \in D$ und $\varepsilon > 0$ . Sei $N ≥ 1$ , so dass (gleichmässige Konvergenz):

$$
| f ( x ) - f _ { N } ( x ) | < \varepsilon \qquad \forall x \in D .
$$

Da $f _ { N }$ in $x _ { 0 }$ stetig ist, gibt es $\delta > 0$ mit:

$$
| x - x _ { 0 } | < \delta \implies | f _ { N } ( x ) - f _ { N } ( x _ { 0 } ) | < \varepsilon .
$$

Es folgt dann für $| x - x _ { 0 } | < \delta$ :

$$
\begin{array} { r l } & { | f ( x ) - f ( x _ { 0 } ) | = | ( f ( x ) - f _ { N } ( x ) ) + ( f _ { N } ( x ) - f _ { N } ( x _ { 0 } ) ) + ( f _ { N } ( x _ { 0 } ) - f ( x _ { 0 } ) ) | } \\ & { \qquad ≤ \underbrace { | \underline { { f } } ( x ) - \underline { { f _ { N } } } ( x ) | } _ { < \varepsilon } + \underbrace { | \underline { { f _ { N } } } ( x ) - \underline { { f _ { N } } } ( x _ { 0 } ) | } _ { < \varepsilon } + \underbrace { | \underline { { f } } ( x _ { 0 } ) - \underline { { f _ { N } } } ( x _ { 0 } ) | } _ { < \varepsilon } } \\ & { \qquad < 3 \varepsilon . } \end{array}
$$

Definition 3.7.5. Eine Funktionenfolge

$$
f _ { n } : D \longrightarrow \mathbb{R}
$$

ist gleichmässig konvergent, falls für alle $x \in D$ der Grenzwert

$$
f ( x ) : = \operatorname* { l i m } _ { n \to \infty } f _ { n } ( x )
$$

existiert und die Folge $\left( f _ { n } \right) _ { n ≥ 0 }$ gleichmässig gegen $f$ konvergiert.

Aus dem Cauchy Kriterium (Satz 2.4.2) für Folgen folgt:

Korollar 3.7.6. Die Funktionenfolge

$$
f _ { n } : D \longrightarrow \mathbb{R}
$$

konvergiert genau dann gleichmässig in $D$ , falls:

$\forall \varepsilon > 0$ $\exists N ≥ 1$ , so dass $\forall n , m ≥ N$ und $\forall x \in D$ :

$$
| f _ { n } ( x ) - f _ { m } ( x ) | < \varepsilon .
$$

Beweis. Zuerst folgt aus der Hypothese dass, für jede $x \in D$ , die Folge $\left( f _ { n } ( x ) \right)$ (von reellen Zahlen) erfüllt das Cauchy Kriterium. Es gibt deshalb ein Grenzwert (Satz 2.4.2), der wir $f ( x )$ bezeichnen.
