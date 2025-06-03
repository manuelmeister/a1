---
prev:
    text: Reelle und komplexe Zahlen
    link: /1-reelle-komplexe-zahlen
#next:
#    text: Number Theory
#    link: /4-number-theory
---

# <small>Kapitel 2:</small><br> Folgen und Reihen

Der erste grundlegende Begrif der Analysis ist der des Grenzwertes einer Folge. Auf diesem Begriff beruht dann die Theorie der konvergenten Reihen.

## 2.1.Grenzwert einer Folge

DEFINITiON 2.1.1. Eine Folge (reller Zahlen) ist eine Abbildung

\[
a : \mathbf { N } ^ { * } \longrightarrow \mathbf { R } .
\]

Wir schreiben an statt a(n) und bezeichnen eine Folge mit (an)nz1

![](images/c3078cd5ae92483063214818a68813e1e0235d485d705b84415c10c274de2975.jpg)

Fiir den Grenzwertbegriff ist folgendes Lemma von Bedeutung:

LEMMA 2.1.3. Sei (an)n>1 eine Folge. Dann gibt es hochstens eine reee Zahl l ∈R mit der Eigenschaft:

\[
\forall \varepsilon > 0 { \mathrm { ~ i s t ~ d i e ~ M e n g e } } \ \{ n \in \mathbf { N } : a _ { n } \notin ] l - \varepsilon , l + \varepsilon [ \} { \mathrm { ~ e n } } \sigma
\]

BEWEIs. Wir nehmen an, dass es l1 < l2 gibt, so dass beide li, l2 die Eigenschafi erfüllen.

\[
\frac { l _ { 1 } - \varepsilon } { \langle \underset { \scriptstyle { \mathrm { \cdots ~ } } } { \scriptstyle \mathrm { \ ! u m u l \underline { { \mathrm { u u m } } } } } \rangle } \frac { l _ { 1 } + \varepsilon } { \langle \underset { \scriptstyle { \mathrm { \cdots ~ } } } { \scriptstyle \mathrm { \cdots ~ } } \rangle \underset { \scriptstyle { l _ { 1 } } } { \scriptstyle \mathrm { \cdots ~ } } \langle \underset { \scriptstyle { \mathrm { \cdots ~ } } } { \scriptstyle \mathrm { \cdots ~ } } \varepsilon \textnormal {  ~ \mathscr { l } } _ { 2 } + \varepsilon } { \scriptstyle \mathrm { \cdots ~ } } \varepsilon \textnormal {  ~ \mathscr { l } } _ { 2 } + \varepsilon
\]

Sei \(\varepsilon = \frac { l _ { 2 } - l _ { 1 } } { 3 }\) dann folgt:

\[
\begin{array} { r } { ] l _ { 1 } - \varepsilon , l _ { 1 } + \varepsilon \big [ \cap \big ] l _ { 2 } - \varepsilon , l _ { 2 } + \varepsilon \big [ = \varnothing . } \end{array}
\]

Nach Voraussetzung sind

\[
E _ { 1 } = \{ n : { a _ { n } \notin } \exists l _ { 1 } - \varepsilon , l _ { 1 } + \varepsilon [ \} \subset { \bf N } ^ { * }
\]

und

\[
E _ { 2 } = \{ n : a _ { n } \notin \exists l _ { 2 } - \varepsilon , l _ { 2 } + \varepsilon [ \} \subset { \bf N } ^ { * }
\]

endlich.Insbesondere ist:

\[
\mathbf { N } ^ { * } \setminus E _ { 2 } = \{ n \in \mathbf { N } ^ { * } : a _ { n } \in \left] l _ { 2 } - \varepsilon , l _ { 2 } + \varepsilon [ \} \right.
\]

unendlich.Andererseits folgt aus (\*): N\*  E2 C E1，ein Widerspruch.

DEFINITiON 2.1.4. Eine Folge (an)n>1 heisst konvergent， fals es l ∈ R gibt, so dass ∀ε > O die Menge

\[
\{ n \in \mathbf { N ^ { * } } : \ a _ { n } \not \in ] l - \varepsilon , \ l + \varepsilon [ \}
\]

endlich ist.

Nach Lemma 2.1.3 ist eine Solche Zahl l eindeutig bestimmt; sie wird mit

\[
\operatorname* { l i m } _ { n \to \infty } a _ { n }
\]

bezeichnet und nennt sich Grenzwert oder Limes der Folge (an)n≥1:

BEMERKUNG 2.1.5. Jede konvergente Folge ist beschränkt: Sei (an)n>1 konvergent mit Grenzwert l. Dann ist {an : n ≥ 1} beschränkt:

Sei ε= 1 und {n ∈ N\* : an \$]𝑙-1, l+1[}= {𝑖1,...,im}.Dann folgt:

\[
\{ a _ { n } : n \geqslant 1 \} \subset ] l - 1 , l + 1 \big [ \cup \{ a _ { i _ { 1 } } , \dotsc , a _ { i _ { M } } \}
\]

und ist daher beschränkt.

In folgendem Lemma beweisen wir die äquivalenz zwischen dem Kenvergenzbegriff gemäss Def. 2.1.4 und der historisch ersten Definition von Konvergenz, welche von D'Alembert (1765) und Cauchy (1821) formuliert wurde und in Konvergenzbeweisen oft benützt wird.

LEMMA 2.1.6. Sei (an)n>1 eine Folge. Folgende Aussagen sind äquivalent:

(1） (an)n>1 konvergiert gegen l = lim an . (2)∀ε>0 N≥1,so dass

\[
| a _ { n } - l | < \varepsilon \qquad \forall n \geqslant N .
\]

BEWEIs.1 => 2 : Sei ε > O beliebig.Dann ist {n : an ‡]l-ε,l+ε[} endlich und somit gibt es N ≥ 1,so dass

\[
\{ n : a _ { n } \notin ] l - \varepsilon , l + \varepsilon [ \} \subset \{ 1 , 2 , \ldots , N - 1 \} .
\]

Dann folgt ∀n ≥ N :

\[
| a _ { n } - l | < \varepsilon .
\]

2 → 1:Klar.

BEISPIEL 2.1.7. Sei an = 1 n+1n≥1.Dasheist wibetrchtedge \(\mathrm { F o l g e } \frac { 1 } { 2 } , \frac { 2 } { 3 } , \frac { 3 } { 4 } , \frac { 4 } { 5 } , \dots .\)

Dann gilt: lim an = 1.

\[
\begin{array} { l } { { a _ { n } - 1 = \displaystyle \frac { n } { n + 1 } - 1 = \displaystyle \frac { - 1 } { n + 1 } . \mathrm { E s ~ f o l g t } | a _ { n } - 1 | = \displaystyle \frac { 1 } { n + 1 } . } } \\ { { \mathrm { c h ~ A r c h i m e d e s ~ g i b t ~ e s ~ } N \in \bf { N } \mathrm { ~ m i t } \displaystyle \frac { 1 } { N + 1 } < \varepsilon . } } \end{array}
\]

Dann folgt ∀n ≥ N :

\[
| a _ { n } - 1 | = { \frac { 1 } { n + 1 } } \leqslant { \frac { 1 } { N + 1 } } < \varepsilon .
\]

Als nächstes untersuchen wir, wie die arithmetischen Operationen mit Konvergenz verträglich sind.

SATZ 2.1.8.

Seien (an)n≥1 und (bn)n>1 konvergente Folgen mit a = lim an， b = limn→∞ bn . (1) Dann ist (an + bn)n>1 konvergent und lim (an + bn) = a + b. (2) Dann ist (an ·bn)n>1 konvergent und lim (an ·bn) = a·b. \(\begin{array} { c } { { \displaystyle \operatorname* { l i m } _ { n  \infty } ( a _ { n } + b _ { n } ) = a + b } } \\ { { \displaystyle \operatorname* { l i m } _ { n  \infty } ( a _ { n } \cdot b _ { n } ) = a \cdot b . } } \end{array}\) (3) Nehmen wir zudem an, dass bn ≠ O Vn ≥ 1 und b ≠ O. Dann ist \(\left( { \frac { a _ { n } } { b _ { n } } } \right) _ { n \geqslant 1 }\) konvergent und lim \(\operatorname* { l i m } _ { n \to \infty } \left( { \frac { a _ { n } } { b _ { n } } } \right) = { \frac { a } { b } }\) (4) Falls es ein K ≥ 1 gibt mit an ≤bn ∀n ≥ K dann folgt a ≤ b

BEWEIS. Zu 2:

\[
\begin{array} { r } { | a _ { n } \cdot b _ { n } - a \cdot b | = | ( a _ { n } - a ) b _ { n } + a ( b _ { n } - b ) | } \\ { \leqslant | a _ { n } - a | | b _ { n } | + | b _ { n } - b | | a | . } \end{array}
\]

Da (bn)n>1 konvergiert,gibt es M ≥ 1 mit |bnl ≤M ∀n ≥1 (siehe Bem. 2.1.5). Also:

\[
| a _ { n } \cdot b _ { n } - a \cdot b | \leqslant | a _ { n } - a | M + | b _ { n } - b | | a | .
\]

Sei ε>0:

· Es gibt N1≥1 mit |an-al< M+lal ∀n ≥ N1. · Es gibt N2≥1 mit |bn-b丨<M+lal \(\vert b _ { n } - b \vert < \frac { \varepsilon } { M + \vert a \vert } \forall n \geqslant N _ { 2 } .\)

Fir n ≥ N := max(Ni,N2) folgt:

\[
\left| a _ { n } \cdot b _ { n } - a \cdot b \right| < \frac { \varepsilon \cdot M } { M + \left| a \right| } + \frac { \varepsilon \cdot \left| a \right| } { M + \left| a \right| } = \varepsilon .
\]

Zu 4:Sei ε>O und N ≥ K mit

\[
| a _ { n } - a | < \varepsilon , \qquad | b _ { n } - b | < \varepsilon \qquad \forall n \geqslant N .
\]

Dann folgt insbesondere fiir alle n ≥ N ≥ K :

\[
a < a _ { n } + \varepsilon \leqslant b _ { n } + \varepsilon < ( b + \varepsilon ) + \varepsilon = b + 2 \varepsilon .
\]

Ausa<b+2ε ∀ε > O folgt dann: a ≤b.

BEISPIEL 2.1.9.b∈ Z：lim \(b \in \mathbf { Z } : \operatorname* { l i m } _ { n  \infty } ( 1 + { \frac { 1 } { n } } ) ^ { b } = 1 .\)

Das folgt aus lim \(\operatorname* { l i m } _ { n \to \infty } \left( 1 + { \frac { 1 } { n } } \right) = 1\) 1 und wiederholter Anwendung von Satz 2.1.8(2) und (3).

## 2.2.Der Satz von Weierstrass und Anwendungen

DEFINITION 2.2.1. (1) (an)n≥1 ist monoton wachsend falls: \(a _ { n } \leqslant a _ { n + 1 } \qquad \forall n \geqslant 1 .\)

(an)n≥1 ist monoton fallend falls:

\[
a _ { n + 1 } \leqslant a _ { n } \qquad \forall n \geqslant 1 .
\]

SATZ 2.2.2 (Weierstrass).

Sei (an)n≥1 monoton wachsend und nach oben beschränkt. Dann konvergiert (an)n≥1 mit Grenzwert \(\operatorname* { l i m } _ { n \to \infty } a _ { n } = \operatorname* { s u p } { \{ a _ { n } : \ n \geqslant 1 \} } .\)   
· Sei (an)n≥1 monoton fallend und nach unten beschrankt. Dann konvergiert (an)n≥1 mit Grenzwert \(\operatorname* { l i m } _ { n \to \infty } a _ { n } = \operatorname* { i n f } { \big \{ } a _ { n } : n \geqslant 1 { \big \} } .\)

BEWEIs. Sei s := sup{an : n ≥ 1}; sei ε >0. Da s die kleinste obere Schranke von {an : n ≥ 1} ist, gibt es N ≥1 mit

\[
s - \varepsilon < a _ { N }
\]

woraus

\[
s - \varepsilon < a _ { N } \leqslant a _ { n } \leqslant s \qquad \forall n \geqslant N
\]

folgt; insbesondere |an - sl <ε.

BEISPIEL 2.2.3. Sei α ∈ Z und O≤q<1. Dann gilt lim nαq = 0. n→8

Wir konnen annehmen, dass q > O. Sei xn = näqn ; dann folgt

\[
x _ { n + 1 } = ( n + 1 ) ^ { a } q ^ { n + 1 } = \left( { \frac { n + 1 } { n } } \right) ^ { a } q \cdot n ^ { a } q ^ { n } = \left( 1 + { \frac { 1 } { n } } \right) ^ { a } \cdot q \cdot x _ { n }
\]

Also:

\[
x _ { n + 1 } = \left( 1 + { \frac { 1 } { n } } \right) ^ { a } \cdot q \cdot x _ { n }
\]

Da lim \(\operatorname* { l i m } _ { n \to \infty } { \left( 1 + { \frac { 1 } { n } } \right) } ^ { a } = 1\) : 1 (Beispiel 2.1.9) gibt es ein no, so dass \(\left( 1 + \frac { 1 } { n } \right) ^ { a } < \frac { 1 } { q } \forall n \geqslant n _ { 0 }\)

Es folgt:

\[
x _ { n + 1 } < x _ { n } \qquad \forall n \geqslant n _ { 0 }
\]

Da xn > O ∀n ≥ 1 ist die Folge nach unten beschränkt und fuir n ≥ no monoton fallend. Sei

\[
l = \operatorname* { l i m } _ { n \to \infty } x _ { n } = \operatorname* { l i m } _ { n \to \infty } x _ { n + 1 } = \operatorname* { l i m } _ { n \to \infty } \left( 1 + { \frac { 1 } { n } } \right) ^ { a } \cdot q x _ { n } = q \cdot \operatorname* { l i m } _ { n \to \infty } x _ { n } = q \cdot l .
\]

Also (1-q) ·l=O woraus l=O folgt.

BEMERKUNG 2.2.4. In obigem Argument haben wir zweimal die folgende einfache Tatsache benitzt: Sei (an)n>1 eine konvergente Folge mit lim an = α und k ∈ N. Dann ist die durch

\[
b _ { n } : = a _ { n + k } \qquad n \geqslant 1
\]

definierte Folge konvergent und

\[
\operatorname* { l i m } _ { n \to \infty } b _ { n } = a .
\]

BEISPIEL 2.2.5. lim n = 1. n→8

(i) Aus n ≥ 1 folgt n1/n ≥1. Fir alle a, b∈ R und n ≥1,n∈ N gilt die Identität:

\[
b ^ { n } - a ^ { n } = ( b - a ) \left( b ^ { n - 1 } + b ^ { n - 2 } a + \cdot \cdot \cdot + b a ^ { n - 2 } + a ^ { n - 1 } \right)
\]

wie man durch direktes Ausmultiplizieren sieht. Mit a = 1 und b = n1/n folgt

\[
\underbrace { \left( n - 1 \right) } _ { \begin{array} { l } { \infty } \\ { \geqslant 0 } \end{array} } = \left( n ^ { 1 / n } - 1 \right) \underbrace { \left( n ^ { \frac { 1 } { n } \left( n - 1 \right) } + n ^ { \frac { 1 } { n } \left( n - 2 \right) } + \cdots + 1 \right) } _ { \geqslant 1 }
\]

woraus n1/n - 1 ≥0 folgt.

(ii) Sei ε > O beliebig.Dann ist 0 \(0 < \frac { 1 } { 1 + \varepsilon } < 1\) < 1.Wende Beispiel 2.2.3 mit a = 1 und \(q = { \frac { 1 } { 1 + \varepsilon } }\) an und erhalte:

\[
\operatorname* { l i m } _ { n  \infty } \frac { n } { ( 1 + \varepsilon ) ^ { n } } = 0
\]

Insbesondere gibt es N ≥ 1，so dass

\[
\frac { n } { ( 1 + \varepsilon ) ^ { n } } < 1 \qquad \forall n \geqslant N .
\]

Also n < (1 + ε)" . Nochmalige Anwendung der Identität (i) mit b = 1 +ε und a = n1/n impliziert

\[
n ^ { 1 / n } \leqslant 1 + \varepsilon \qquad \forall n \geqslant N .
\]

Zusammen mit (i):

\[
\begin{array} { l l } { { } } & { { 1 \leqslant n ^ { 1 / n } < 1 + \varepsilon \qquad \forall n \geqslant N } } \\ { { \left| n ^ { 1 / n } - 1 \right| < \varepsilon } } & { { \forall n \geqslant N \mathrm { f o l g t } . } } \end{array}
\]

BEISPIEL 2.2.6. Die Folge \(\left( 1 + { \frac { 1 } { n } } \right) ^ { \prime }\) ，n ≥1 konvergiert.Der Limes ist

\[
e = \operatorname* { l i m } _ { n \to \infty } \left( 1 + { \frac { 1 } { n } } \right) ^ { n }
\]

die Eulersche Konstante

\[
e \sim 2 . 7 1 8 2 8 1 8 2 8 4 5 9 0 4 5 2 3 5 \ldots
\]

welche die Basis fiir die natirlichen Logarithmen ist.

LEMMA 2.2.7 (Bernoulli Ungleichung).

\[
( 1 + x ) ^ { n } \geqslant 1 + n \cdot x \qquad \forall n \in \mathbf { N } , x > - 1
\]

BEWEIs. (Induktion) Fir n =O ist die Aussage 1≥1. Sei n ≥ O:

\[
\begin{array} { c } { { ( 1 + x ) ^ { n + 1 } = ( 1 + x ) \underbrace { ( 1 + x ) ^ { n } } _ { \begin{array} { c } { { \gtrsim } } \\ { { \gtrsim } } \end{array} } \geqslant ( 1 + x ) ( 1 + n x ) } } \\ { { = 1 + ( n + 1 ) x + n x ^ { 2 } \geqslant 1 + ( n + 1 ) x . } } \end{array}
\]

Wir behandeln jetzt das Beispiel 2.2.6. Wir zeigen, dass die Folge

\[
y _ { n } = \left( 1 + { \frac { 1 } { n } } \right) ^ { n + 1 }
\]

monoton fallend ist. Sei n ≥ 2 :

\[
\begin{array} { r l r } { \left. { \frac { y _ { n - 1 } } { y _ { n } } - \frac { \big ( 1 + \frac { 1 } { n - 1 } \big ) ^ { n } } { \big ( 1 + \frac { 1 } { n } \big ) ^ { n + 1 } } - \frac { n ^ { n } } { ( n - 1 ) ^ { n } } \cdot \frac { n ^ { n + 1 } } { ( n + 1 ) ^ { n + 1 } } } } \\ & { } & { = \frac { n ^ { 2 n } } { ( n ^ { 2 } - 1 ) ^ { n } } \cdot \frac { n } { ( n + 1 ) } = \left[ \frac { n ^ { 2 } } { n ^ { 2 } - 1 } \right] ^ { n } \cdot \frac { n } { n + 1 } } \\ & { } & { = \left[ 1 + \frac { 1 } { n ^ { 2 } - 1 } \right] ^ { n } \cdot \frac { n } { n + 1 } \geqslant \left( 1 + \frac { n } { n ^ { 2 } - 1 } \right) \frac { n } { n + 1 } \quad \mathrm { ( B e r n o u l i ) } } \\ & { } & { \gg \left( 1 + \frac { 1 } { n } \right) \left( \frac { n } { n + 1 } \right) = 1 . \qquad \mathrm { ( b e a c h t e ~ } \frac { n } { n ^ { 2 } - 1 } > \frac { 1 } { n } \right) } \end{array}
\]

Dann folgt, dass \(\left( 1 + { \frac { 1 } { n } } \right) ^ { n + 1 }\) konvergiert und somit auch

\[
\left( 1 + { \frac { 1 } { n } } \right) ^ { n } = { \frac { \left( 1 + { \frac { 1 } { n } } \right) ^ { n + 1 } } { \left( 1 + { \frac { 1 } { n } } \right) } }
\]

da lim \(\operatorname* { l i m } _ { n \to \infty } \left( 1 + { \frac { 1 } { n } } \right) = 1 .\)

BEISPIEL 2.2.8. Sei c > 1. Wir definieren rekursiv eine Folge (an)n>1 durch:

\[
a _ { 1 } = c , \qquad a _ { n + 1 } = { \frac { 1 } { 2 } } \left( a _ { n } + { \frac { c } { a _ { n } } } \right) \qquad n \geqslant 1 .
\]

Dann existiert a := lim an > O und es gilt a² = c.

BEWEIS.

(i) (an)n>1 ist monoton fallend. Sei

\[
a _ { n + 1 } = a _ { n } + { \frac { 1 } { 2 } } \left( { \frac { c } { a _ { n } } } - a _ { n } \right) = a _ { n } + \left( { \frac { c - a _ { n } ^ { 2 } } { 2 a _ { n } } } \right)
\]

Wir zeigen zunächst: : a² ≥ c ∀n ≥ 1.

Fir n = 1: α²=c²>c da c>1.Und für n≥1:

\[
a _ { n + 1 } ^ { 2 } = a _ { n } ^ { 2 } + \left( c - a _ { n } ^ { 2 } \right) + \left( { \frac { c - a _ { n } ^ { 2 } } { 2 a _ { n } } } \right) ^ { 2 } = c + \left( { \frac { c - a _ { n } ^ { 2 } } { 2 a _ { n } } } \right) ^ { 2 } \geqslant c .
\]

Aus a² ≥ c folgt:

\[
a _ { n + 1 } = a _ { n } + \left( \frac { c - a _ { n } ^ { 2 } } { 2 a _ { n } } \right) \leqslant a _ { n } .
\]

(ii)Es ist klar: an >O∀n ≥1.

Aus a² ≥c>1 folgt dann an ≥1 ∀n ≥1.

(iii) Nach Weierstrass: Sei α = lim an,dann folgt aus (i): α ≥ 1, insbesondere a ≠ 0 und:

\[
a = \operatorname* { l i m } _ { n \to \infty } a _ { n + 1 } = { \frac { 1 } { 2 } } \left( \operatorname* { l i m } _ { n \to \infty } a _ { n } + { \frac { c } { \operatorname* { l i m } _ { n \to \infty } a _ { n } } } \right) = { \frac { 1 } { 2 } } \left( a + { \frac { c } { a } } \right)
\]

Woraus a² = c folgt.

## 2.3.Limes superior und Limes inferior

Eine wichtige Anwendung des Satzes von Weierstrass ist, wie man mit jeder beschränkten Folge (an)n>1 zwei monotone Folgen (bn)n>1 und (Cn)n>1 definieren kann, welche dann einen Grenzwert besitzen.

Sei fir jedes n ≥ 1 :

\[
b _ { n } = \operatorname* { i n f } { \{ a _ { k } : k \geqslant n \} } \ \mathrm { u n d } c _ { n } = \operatorname* { s u p } { \{ a _ { k } : k \geqslant n \} } .
\]

Dann folgt aus Korollar 1.1.16:

\[
\begin{array} { r l } { b _ { n } \leqslant b _ { n + 1 } \quad } & { { } \forall n \geqslant 1 } \\ { c _ { n + 1 } \leqslant c _ { n } \quad } & { { } \forall n \geqslant 1 } \end{array}
\]

und beide Folgen sind beschränkt. Nach Weierstrass (Satz 2.2.2) sind beide Folgen kon vergent und wir definieren:

\[
\begin{array} { r l } { \underset { n \to \infty } { \operatorname* { l i m } \operatorname* { i n f } a _ { n } } : = \underset { n \to \infty } { \operatorname* { l i m } b _ { n } } } & { { } \quad \mathrm { ( L i m e s ~ i n f e r i o r ) } } \\ { \underset { n \to \infty } { \operatorname* { l i m } \operatorname* { s u p } a _ { n } } : = \underset { n \to \infty } { \operatorname* { l i m } c _ { n } } } & { { } \quad \mathrm { ( L i m e s ~ s u p e r i o r ) } } \end{array}
\]

Aus bn ≤ Cn folgt mit Satz 2.1.8(4):

\[
\operatorname* { l i m } _ { n \to \infty } \operatorname* { i n f } a _ { n } \leqslant \operatorname* { l i m } _ { n \to \infty } \operatorname* { s u p } a _ { n } .
\]

BEISPIEL 2.3.1. an =(-1)n \(a _ { n } = ( - 1 ) ^ { n } + { \frac { 1 } { n } } , n \geqslant 1\) Dann: bn = -1 und Cn = 1 - \(c _ { n } = 1 + \frac { 1 } { n _ { g } }\) wobei ng die kleinste gerade Zahl ≥ n bezeichnet. Also:

\[
\operatorname* { l i m } _ { n \to \infty } \operatorname* { i n f } a _ { n } = - 1 \quad { \mathrm { ~ u n d ~ } } \quad \operatorname* { l i m } _ { n \to \infty } \operatorname* { s u p } a _ { n } = + 1 .
\]

## 2.4.Das Cauchy Kriterium

Natirliche Frage: Wie sieht man einer Folge an, ob sie konvergent ist, ohne ihren Grenzwert zu kennen? Das Cauchy Kriterium ist eine Antwort auf diese Frage. Zunächst beweisen wir:

LEMMA 2.4.1. (an)n>1 konvergiert genau dann, falls (an)n>1 beschränkt ist und

\[
\operatorname* { l i m } _ { n \to \infty } \operatorname* { i n f } _ { } a _ { n } = \operatorname* { l i m } _ { n \to \infty } a _ { n } .
\]

BEWEIS.（）ibung.（←）Sei

\[
b _ { n } = \operatorname* { i n f } { \{ a _ { k } : k \geqslant n \} } , \qquad c _ { n } = \operatorname* { s u p } { \{ a _ { k } : k \geqslant n \} }
\]

und

\[
A : = \operatorname* { l i m } _ { n \to \infty } b _ { n } = \operatorname* { l i m } _ { n \to \infty } c _ { n } .
\]

Aus bn≤A≤cn folgt:∀ε>0 N(ε)≥1 mit:

\[
A - \varepsilon < b _ { n } \leqslant A \leqslant c _ { n } < A + \varepsilon \forall n \geqslant N ( \varepsilon ) .
\]

Also:

\[
A - \varepsilon < a _ { k } < A + \varepsilon \qquad \forall k \geqslant N ( \varepsilon )
\]

woraus

\[
| a _ { k } - A | < \varepsilon \qquad \forall k \geqslant N ( \varepsilon )
\]

folgt.

SATZ 2.4.2 (Cauchy Kriterium). Die Folge (an)n≥1 ist genau dann konvergent, falls ∀ε >0 N≥1 so dass lan-aml<ε ∀n,m≥ N.

BEWEIs.（=→） Sei (an)n>1 konvergent mit Grenzwert A. Sei ε > O und N ≥ 1,s0 dass

\[
| a _ { n } - A | < { \frac { \varepsilon } { 2 } } \qquad \forall n \geqslant N .
\]

Dann folgt ∀n ≥ N, ∀m ≥ N :

\[
| a _ { n } - a _ { m } | = | ( a _ { n } - A ) + ( A - a _ { m } ) | \leqslant | a _ { n } - A | + | a _ { m } - A | < \varepsilon .
\]

（←）Sei ε>0 und N ≥1,so dass

\[
| a _ { n } - a _ { m } | < \varepsilon \forall n \geqslant N , \forall m \geqslant N .
\]

Sei n ≥ N fest beliebig. Dann folgt ∀m ≥ N :

\[
a _ { m } - \varepsilon \leqslant a _ { n } \leqslant a _ { m } + \varepsilon
\]

Sei k ≥ N ; dann folgt:

\[
\operatorname* { s u p } \left\{ a _ { m } : m \geqslant k \right\} - \varepsilon \leqslant a _ { n } \leqslant \operatorname* { i n f } \left\{ a _ { m } : m \geqslant k \right\} + \varepsilon
\]

das heisst

\[
c _ { k } - \varepsilon \leqslant a _ { n } \leqslant b _ { k } + \varepsilon \qquad \forall k \geqslant N
\]

woraus

\[
\operatorname* { l i m } _ { n \to \infty } a _ { n } - \varepsilon < \operatorname* { l i m } _ { n \to \infty } \operatorname* { i n f } a _ { n } + \varepsilon
\]

folgt.Da ε > O beliebig war, folgt

\[
\operatorname* { l i m } _ { n \to \infty } \operatorname* { s u p } _ { } a _ { n } \leqslant \operatorname* { l i m } _ { n \to \infty } \operatorname* { i n f } _ { } a _ { n } .
\]

Unter Bericksichtigung von

\[
\operatorname* { l i m } _ { n \to \infty } \operatorname* { i n f } a _ { n } \leqslant \operatorname* { l i m } _ { n \to \infty } \operatorname* { s u p } a _ { n }
\]

folgt

\[
\operatorname* { l i m } _ { n \to \infty } \operatorname* { i n f } _ { } a _ { n } = \operatorname* { l i m } _ { n \to \infty } a _ { n } .
\]

Der Satz folgt dann aus Lemma 2.4.1.

## 2.5.Der Satz von Bolzano-Weierstrass

In diesem Abschnitt behandeln wir weitere wichtige Folgerungen des Ordnungsvolständigkeitsaxioms. Insbesondere zeigen wir, dass jede beschränkte Folge eine konvergente Teilfolge besitzt. Als Vorbereitung zeigen wir ein Lemma von Cauchy-Cantor, dass monoton absteigende Folgen von abgeschlossenen Intervallen betrifft.

DEFINITiON 2.5.1. Ein abgeschlossenes Intervall ist eine Teilmenge I C R der Form \(\begin{array} { r l } & { \beta \left[ a , b \right] , \quad a \leqslant b , a , b , \in } \\ & { \beta \left[ a , + \infty \right[ , \quad a \in \mathbf { R } } \\ & { \gamma \left] - \infty , a \right] , \quad a \in \mathbf { R } } \\ & { \gamma \left] - \infty , + \infty \right[ = \mathbf { R } } \end{array}\)

Wir definieren die Länge L(I) des Intervalls als

\[
\begin{array} { l l } { { \mathcal { L } ( I ) = b - a } } & { { \mathrm { i m ~ e r s t e n ~ F a l l } } } \\ { { \mathcal { L } ( I ) = + \infty } } & { { \mathrm { i n ~ ( 2 ) , ~ ( 3 ) , ~ ( 4 ) . } } } \end{array}
\]

Offensichtlich ist L(I) ≥ O.Das abgeschlossene Intervallist genau dann eine beschränkte Teilmenge von R, falls L(I) < +o .

BEMERKUNG 2.5.2. Ein Intervall I C R ist genau dann abgeschlossen, falls fir jede konvergente Folge (an)n>1 aus Elementen in I, der Grenzwert lim an auch in I ist.

BEMERKUNG 2.5.3. Seien I= [a,b], J= [c,d] mit a≤b und c ≤d,a,b,c,d ∈ R. Dann gilt I c J genau dann,wenn c ≤α und b ≤d.

![](images/199b39ec9bf1865ca94e15e9df69a991183df6fd81e8067945bdb529341fa385.jpg)

Es folgt dann: L(I)=b-a≤d-c= L(J).

Das Lemma von Cauchy-Cantor handelt von monoton fallenden Folgen von abgeschlossenen Intervallen.   
Eine monoton fallende Folge von Teilmengen von R ist eine Folge (Xn)n>1 ， Xn C R mit

\[
X _ { 1 } \supseteq X _ { 2 } \supseteq \cdots \supseteq X _ { n } \supseteq X _ { n + 1 } \supseteq \cdots
\]

Betrachten wir zwei Beispiele:

BEISPIEL 2.5.4. \({ \mathrm { S e i ~ } } X _ { n } = \left] 0 , { \frac { 1 } { n } } \right] , n \geqslant 1 .\)

Dann gilt offensichtlich: X1 ≥ X2 ≥ ·

![](images/6944ccd97a338488601ffbf761e0f0103f5da04eea35ad8d7297ee09e417386a.jpg)

und \(\bigcap _ { n \geqslant 1 } X _ { n } = \varnothing\) Xn =  . (folgt aus Archimedes)

(2) Sei Xn = [n,+o[,n ≥ 1. Dann gilt: X1 ≥ X2 ≥ ·. und \(\bigcap _ { n \geqslant 1 } X _ { n } = \varnothing\) (Archimedes)

SATZ 2.5.5 (Cauchy-Cantor). Sei I1 ≥ I2 ≥ ·.. In ≧ In+1 ≥ ·.\* eine Folge abgeschlossener Intervalle mit L(I1) < +∞ . Dann gilt:

\(\bigcap _ { n \geqslant 1 } I _ { n } \neq \emptyset\) Falls zudem lim L(In) = O enthält \(\bigcap _ { n \geqslant 1 } I _ { n }\) In genau einen Punkt.

BEWEIs. Sei In = [an,bn] und : Im = [am,bm] wobei n ≥ 1,m ≥ 1. Behauptung:

\[
a _ { n } \leqslant b _ { m } \forall n \geqslant 1 , \forall m \geqslant 1 .
\]

Sonst gibt es n ≥ 1 und m ≥ 1 mit bm < an:

![](images/3f005ed29aa3f99dd33059c6d14232d379727c336f7e68924095af7f6bb60081.jpg)

Dann wiirde folgendes gelten:

\[
\left[ a _ { m } , b _ { m } \right] \cap \left[ a _ { n } , b _ { n } \right] = \emptyset ,
\]

das heisst Im  In = .Dies ist ein Widerspruch, denn es gilt entweder Im C In oder In C Im .Seien

\[
A = \{ a _ { n } : n \geqslant 1 \} \neq \emptyset , \qquad B = \{ b _ { m } : m \geqslant 1 \} \neq \emptyset .
\]

Dann erfullen A und B die Voraussetzungen des Axioms V und deswegen gibt es c ∈ R mit:

\[
a _ { n } \leqslant c \leqslant b _ { n } \qquad \forall n \geqslant 1
\]

woraus

\[
c \in \bigcap _ { n \geqslant 1 } I _ { n }
\]

folgt.

Zur zweiten Aussage: aus

\[
[ a _ { n + 1 } , b _ { n + 1 } ] = I _ { n + 1 } \subset I _ { n } = [ a _ { n } , b _ { n } ]
\]

folgt

\[
\mathscr { L } ( I _ { n + 1 } ) = b _ { n + 1 } - a _ { n + 1 } \leqslant b _ { n } - a _ { n } = \mathscr { L } ( I _ { n } )
\]

und（Weierstrass） folglich existiert

\[
\operatorname* { l i m } _ { n \to \infty } { \mathcal { L } } ( I _ { n } ) \geqslant 0 .
\]

Falls es jetzt C1 < C2 gibt mit

\[
\{ c _ { 1 } , c _ { 2 } \} \subset \bigcap _ { n \geqslant 1 } I _ { n }
\]

dann folgt

\[
[ c _ { 1 } , c _ { 2 } ] \subset I _ { n } \qquad \forall n \geqslant 1
\]

und somit

\[
0 < c _ { 2 } - c _ { 1 } \leqslant b _ { n } - a _ { n } = \mathcal { L } ( I _ { n } ) .
\]

Dies beweist die zweite Aussage.

Als Anwendung zeigen wir:

BEWEIs.[O,1] ist nicht abzählbar. Widerspruchsbeweis: Sei

\[
a : \mathbf { N } \longrightarrow [ 0 , 1 ]
\]

eine Bijektion. Wir bilden induktiv eine monoton fallende Folge Io ≥ I1 ≧ ·.· In ≌ . abgeschlossener Intervalle in [O,1] mit

\[
a ( n ) \notin I _ { n } \qquad \forall n \geqslant 0 .
\]

Dann folgt:

\[
a ( n ) \notin \bigcap _ { l \geqslant 0 } I _ { l } \qquad \forall n \geqslant 0 .
\]

Andererseits gilt nach Cauchy-Cantor:

\[
\bigcap _ { l \geqslant 0 } I _ { l } \neq \varnothing
\]

woraus folgt, dass α : N —→[O,1] nicht surjektiv sein kann. Konstruktion von In:   
Sei a(0) ∈[0,1] .

![](images/67a4f812a1f51b36b563db075822233702b38ca4407012b22ba1df72415022a4.jpg)

Dann nehmen wir als Io eines der Intervalle

\[
{ \Bigg [ } 0 , { \frac { 1 } { 3 } } { \Bigg ] } , { \Bigg [ } { \frac { 1 } { 3 } } , { \frac { 2 } { 3 } } { \Bigg ] } , { \Bigg [ } { \frac { 2 } { 3 } } , 1 { \Bigg ] }
\]

welches a(O) nicht enthält.   
Sei nun In mit a(n) \$ In induktiv definiert, In = [cn,dn].

![](images/e86929ae3b9730198645534231c038b30c82eb4550d2a9b5702a6686ebbda9ed.jpg)

Sei dann In+1 eines dieser drei Intervalle, das a(n + 1) nicht enthält. Dann folgt:

\[
I _ { n + 1 } \subsetneq I _ { n } \quad \mathrm { u n d } \quad a ( n + 1 ) \not \in I _ { n + 1 }
\]

Damit ist der Satz bewiesen.

Fir den Satz von Bolzano-Weierstrass benotigen wir den Begriff der Teilfolge einer Folge

DEFINITION 2.5.7. Eine Teilfolge einer Folge (an)n>1 ist eine Folge (bn)n≥1 wobei

\[
b _ { n } = a _ { l ( n ) }
\]

und l : N\* -→ N\* eine Abbildung bezeichnet mit der Eigenschaft

\[
l ( n ) < l ( n + 1 ) \forall n \geqslant 1 .
\]

BEISPIEL 2.5.8.an = (-1)n += . Sei \(a _ { n } = ( - 1 ) ^ { n } + { \frac { 1 } { n } }\)

\[
l ( n ) = 2 n ,
\]

dann ist bn = 1- \(b _ { n } = 1 + { \frac { 1 } { 2 n } }\) eine Teilfolge von (an)n≥1:

SATZ 2.5.9 (Bolzano-Weierstrass). Jede beschrankte Folge besitzt eine konvergente Teilfolge.

BEWEIS.Sei I=[a,b] beschränkt mit {an :n ≥1} CI. Wirdefinieren induktiv

\[
I _ { 1 } = I \supseteq I _ { 2 } \supseteq \cdots I _ { n } \supseteq \cdots
\]

eine monoton fallende Folge abgeschlossener Intervalle mit:

\[
\begin{array} { l } { { \displaystyle { \mathcal { L } } ( I _ { n + 1 } ) = \frac { 1 } { 2 } { \mathcal { L } } ( I _ { n } ) } \ ~ } \\ { { \displaystyle E _ { n } = \{ f \in \mathbf { N } ^ { * } : \ a _ { f } \in I _ { n } \} \ \mathrm { ~ i s t ~ u n e n d l i c h } . } \ ~ } \end{array}
\]

Schritt 1: I1 = I, E = N\*

Schritt 2: I1 = \(I _ { 1 } = \left[ a , \frac { a + b } { 2 } \right] \cup \left[ \frac { a + b } { 2 } , b \right] .\)

![](images/026ac985dc97ee35644d4bf0687636333812ceab6e3a237671585b5378e86972.jpg)

Sei dann I2 eines dieser zwei Intervalle, fir welches

\[
E _ { 2 } : = \left\{ f \in \mathbf { N } ^ { * } : a _ { f } \in I _ { 2 } \right\}
\]

unendlich ist.

Dann ist I2 CI und L(I2)=↓𝐶(I1).

Dasselbe Argument liefert den Induktionsschritt von n nach n +1. Konstruktion der Teilfolge:

\[
l ( 1 ) = 1 , a _ { 1 } \in I = I _ { 1 } .
\]

Da

\[
E _ { 2 } : = \left\{ f \in \mathbf { N } ^ { * } : a _ { f } \in I _ { 2 } \right\}
\]

unendlich ist，gibt es

\[
l ( 2 ) \in E _ { 2 } \quad \mathrm { m i t } \quad l ( 2 ) > l ( 1 ) .
\]

Es gilt also at(2) ∈ I2 .

Dasselbe Argument liefert den Schritt von n auf n +1. Wir erhalten eine Abbildung l : N\* -→N\* mit:

\[
l ( n + 1 ) > l ( n ) \qquad \forall n \geqslant 1 , ~ a _ { l ( n ) } \in I _ { n } .
\]

Nach Cauchy-Cantor (Satz 2.5.5) sei

\[
\{ c \} = \bigcap _ { n \geqslant 1 } I _ { n } .
\]

Da al(n) und c in In enthalten sind, folgt

\[
\left| a _ { l ( n ) } - c \right| \leqslant \mathcal { L } ( I _ { n } ) = \frac { 1 } { 2 ^ { n - 1 } } ( b - a ) .
\]

Daraus folgt

\[
\operatorname* { l i m } _ { n \to \infty } a _ { l ( n ) } = c .
\]

Es gibt einen interessanten Zusammenhang zwischen Bolzano-Weierstrass und lim sup und liminf,nämlich:

BEMERKUNG 2.5.10. Sei (an)n>1 eine beschränkte Folge. Dann gilt fuir jede konvergente Teilfolge (bn)n>1 :

\[
\operatorname* { l i m } _ { n \to \infty } \operatorname* { i n f } a _ { n } \leqslant \operatorname* { l i m } _ { n \to \infty } b _ { n } \leqslant \operatorname* { l i m } _ { n \to \infty } a _ { n }
\]

Zudem gibt es zwei Teilfolgen von (an)n>1 die liminf an respektive lim sup an als n→ n→8 Grenzwert annehmen.

## 2.6.Folgen in Rd und C

Der Begriff einer Folge in Rd (und C) ist wie im Falle von R definiert:

DEFINITiON 2.6.1. Eine Folge in Rd ist eine Abbildung

\[
a : \mathbf { N } ^ { * } \longrightarrow \mathbf { R } ^ { d } .
\]

Wir schreiben an statt a(n) und bezeichnen die Folge mit (an)n≥1 \*

Sei ll · Il die euklidische Norm auf Rd.

DEFINITiOn 2.6.2. Eine Folge (an)n≥1 in Rd heisst konvergent, falls es a ∈ Rd gibt, so dass:

\[
\forall \varepsilon > 0 \exists N \geqslant 1 \quad m i t \quad \left\| a _ { n } - a \right\| < \varepsilon \qquad \forall n \geqslant N .
\]

Falls solch ein a existiert, ist es eindeutig bestimmt und nennt sich Grenzwert der Folge (an)n>1 . Man schreibt:

\[
\operatorname* { l i m } _ { n \to \infty } a _ { n } = a .
\]

Sei an = (an,1,...,an,d) die Koordinaten von an:

SATz 2.6.3. Sei b = (b1,...,bd) . Folgende Aussagen sind aquivalent:

(1) lim an = bn→8  
（②） \(\operatorname* { l i m } _ { n \to \infty } a _ { n , j } = b _ { j } \quad \forall 1 \leqslant j \leqslant d .\)

BEMERKUNG 2.6.4. Sei x = (𝑥1,...,xd).Dann ist ∀1≤j ≤d:

\[
\begin{array} { c } { x _ { j } ^ { 2 } \leqslant \displaystyle \sum _ { \mathrm { \ r { i = 1 } } \atop \mathrm { \ r { \smile } } \mathrm { \ r { \sim } } ^ { - } } ^ { d } x _ { i } ^ { 2 } \leqslant d \cdot \displaystyle \operatorname* { m a x } _ { 1 \leqslant i \leqslant d } x _ { i } ^ { 2 } } \\ { \overline { { \| x \| ^ { 2 } } } } \end{array}
\]

Woraus

\[
| x _ { j } | \leqslant \| x \| \leqslant { \sqrt { d } } \cdot \operatorname* { m a x } _ { 1 \leqslant i \leqslant d } | x _ { i } |
\]

folgt.

BEWEIs.(1)=→ (2): Sei ε >0 und N ≥1 mit

\[
\| a _ { n } - b \| < \varepsilon \qquad \forall n \geqslant N .
\]

Dann folgt aus Bemerkung 2.6.4 fiir jedes 1 ≤ j ≤ d :

\[
| a _ { n , j } - b _ { j } | < \varepsilon
\]

und somit

\[
\operatorname* { l i m } _ { n \to \infty } a _ { n , j } = b _ { j } .
\]

(2)=→ (1): Sei ε>O und füir jedes 1≤j ≤d sei N(j),so dass

\[
| a _ { n , j } - b _ { j } | < \frac { \varepsilon } { \sqrt { d } } \qquad \forall n \geqslant N ( j ) .
\]

Dann ist fiir N := max{N(1),..., N(d)} :

\[
\operatorname* { m a x } _ { 1 \leqslant j \leqslant d } \vert a _ { n , j } - b _ { j } \vert < { \frac { \varepsilon } { \sqrt { d } } } \qquad \forall n \geqslant N
\]

und somit folgt aus Bemerkung 2.6.4

\[
\left\| a _ { n } - b \right\| \leqslant { \sqrt { d } } \cdot \operatorname* { m a x } _ { 1 \leqslant j \leqslant d } \left| a _ { n , j } - b _ { j } \right| < \varepsilon .
\]

BEMERKUNG 2.6.5. Eine konvergente Folge (an)n>1 in Rd ist beschränkt. Das heisst:

\[
\exists R \geqslant 0 \quad { \mathrm { m i t } } \quad \left\| a _ { n } \right\| \leqslant R \qquad \forall n \geqslant 1 .
\]

Mittels Satz 2.6.3 konnen wir das Cauchy Kriterium respektive den Satz von BolzanoWeierstrass anwenden und erhalten:

SATZ 2.6.6. (1) Eine Folge (an)n≥1 konvergiert genau dann, wenn sie eine Cauchy Folge ist:

\[
\forall \varepsilon > 0 \exists N \geqslant 1 \quad m i t \quad \left\| a _ { n } - a _ { m } \right\| < \varepsilon \qquad \forall n , m \geqslant N .
\]

(2) Jede beschränkte Folge hat eine konvergente Teilfolge
