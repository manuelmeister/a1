---
prev:
    text: Stetige Funktionen
    link: /3-stetige-funktionen
next:
    text: Riemann Integral
    link: /5-integral
---

# <small>Kapitel 4:</small><br> Differenzierbare Funktionen

## 4.1. Die Ableitung: Definition und elementare Folgerungen

::: definition Definition 4.1.1. Ableitung {#definition-4-1-1}
Sei $D \subset ℝ , f : D \to ℝ$ und $x _ { 0 } \in D$ ein Häufungspunkt von $D$ .
$f$ ist in $x_0$ differenzierbar, falls der Grenzwert

$$
\lim _ { x \to x _ { 0 } } { \frac { f ( x ) - f ( x _ { 0 } ) } { x - x _ { 0 } } }
$$

existiert. Ist dies der Fall, wird der Grenzwert mit $f ^ { \prime } ( x _ { 0 } )$ bezeichnet.
:::

![](/images/446f37b75999ac5e2278358e6ff0116aa7160b154bcfd9f74f4884d8352a745e.png)

$\displaystyle\frac { f ( x ) - f ( x _ { 0 } ) } { x - x _ { 0 } }$ ist die Steigung der Geraden (Sekanten) durch $( x _ { 0 } , f ( x _ { 0 } ) ) , ( x , f ( x ) ) .$

Falls $f ^ { \prime } ( x _ { 0 } )$ existiert ist die Intuition, dass die Familien der Geraden durch $\left( x _ { 0 } , f ( x _ { 0 } ) \right) ,$ $( x , f ( x ) )$ für $x \neq x _ { 0 }$ , $x \to x _ { 0 }$ als “Grenzwert” die Tangente zum Graphen von $f$ in $( x _ { 0 } , f ( x _ { 0 } ) )$ annimmt.

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 378 214">
  <path stroke="currentcolor" stroke-width="2" d="M81.2 175.2c20.1-39 108-114.2 239.4-114.2M65.5 8.6V180m0 13.2V180m-26.7 0h26.7m312.4 0H65.5"/>
  <path stroke="currentcolor" stroke-dasharray="6 6" stroke-width="2" d="m57.4 127.2 66.8-.1m0 60.2V121m133 66.3v-120"/>
  <path stroke="#756FEB" stroke-width="2" d="M71.3 157.8 283.2 38.6"/>
  <path stroke="#8D89E5" stroke-width="2" d="m73.8 162 201-133.2"/>
  <path stroke="#B6B3E9" stroke-width="2" d="M75 164.1 267.4 21.7"/>
  <path stroke="#0015FF" stroke-width="2" d="M68 152 291.7 51"/>
  <path stroke="red" stroke-width="2" d="m76.5 165.9 186.7-148"/>
  <circle cx="124.1" cy="127.2" r="3" fill="#fff" stroke="currentcolor" stroke-width="2"/>
  <circle cx="257.2" cy="67.2" r="3" fill="#fff" stroke="currentcolor" stroke-width="2"/>
  <circle cx="206.4" cy="81.8" r="3" fill="#fff" stroke="currentcolor" stroke-width="2"/>
  <circle cx="169.2" cy="98.7" r="3" fill="#fff" stroke="currentcolor" stroke-width="2"/>
  <circle cx="141.2" cy="115.3" r="3" fill="#fff" stroke="currentcolor" stroke-width="2"/>
  <path fill="currentcolor" d="M124.5 202.7c-.6.1-.8.6-.8 1 0 .3.4.5.6.5.6 0 1-.5 1-1 0-.7-1-1-1.7-1-1 0-1.7 1-1.8 1.4a1.9 1.9 0 0 0-1.9-1.5c-1.8 0-2.8 2.4-2.8 2.8 0 0 0 .2.2.2l.2-.2c.6-2 1.8-2.4 2.3-2.4.9 0 1 .8 1 1.2 0 .4 0 .8-.3 1.7l-.6 2.4c-.3 1.1-.8 2.1-1.8 2.1 0 0-.5 0-.9-.2.7-.2.8-.7.8-1 0-.3-.3-.5-.6-.5a1 1 0 0 0-1 1c0 .7 1 1 1.7 1 .9 0 1.5-.6 1.9-1.4a2 2 0 0 0 1.8 1.5c1.9 0 2.8-2.4 2.8-2.8l-.1-.2c-.2 0-.2.1-.3.3-.5 1.6-1.5 2.3-2.3 2.3-.7 0-1-.5-1-1.2 0-.4 0-.7.4-1.9l.6-2.4c.3-1.1.9-2 1.7-2 0 0 .5 0 1 .3Zm7.4 6.3c0-1.3-.2-2.1-.5-2.9-.6-1-1.5-1.3-2.2-1.3-1.5 0-2 1.1-2.2 1.5-.5.8-.5 2-.5 2.6 0 .8 0 2 .6 3 .6.9 1.5 1.1 2 1.1.7 0 1.7-.1 2.3-1.3.4-.9.5-2 .5-2.8Zm-2.7 3.7c-.4 0-1.2-.2-1.5-1.5l-.1-2.4.1-2.3c.3-1.3 1.2-1.4 1.5-1.4.4 0 1.2.2 1.5 1.3l.1 2.4-.1 2.5c-.3 1.2-1.1 1.4-1.5 1.4ZM7.1 124.3c.4 0 .5 0 .5-.3 0-.2-.1-.2-.4-.2H5.7l.8-3.7c0-.4.4-.9 1-.9.3 0 .7.2.8.4-.7 0-.9.6-.9.9 0 .3.3.5.6.5.4 0 1-.3 1-1s-.8-1.1-1.6-1.1-1.5.6-1.9 1.3c-.3.6-.5 1.2-1 3.6h-1c-.4 0-.5 0-.5.3 0 .2 0 .2.4.2h1.2c-.3 1.7-1 5.8-1.5 7.7-.3 1.6-.6 2.9-1.5 2.9 0 0-.6 0-.9-.4 1 0 1-.8 1-.9 0-.3-.3-.5-.7-.5a1 1 0 0 0-.9 1c0 .7.8 1.1 1.5 1.1 1.9 0 2.6-3.3 2.8-4.2l1.3-6.7h1.5Zm8.5 11.7c0-.1 0-.2-.3-.5-1.8-1.8-2.8-4.8-2.8-8.4 0-3.5.8-6.5 2.9-8.7l.2-.2-.2-.2a8 8 0 0 0-2.6 3.1c-.9 1.8-1.3 3.8-1.3 6 0 1.6.2 3.7 1.2 5.6 1 2.2 2.5 3.4 2.7 3.4 0 0 .2 0 .2-.2Zm9.5-11.8c-.6.1-.8.5-.8.9s.4.6.6.6c.6 0 1-.5 1-1 0-.7-1-1-1.7-1-1 0-1.7 1-1.9 1.3a1.9 1.9 0 0 0-1.8-1.4c-1.8 0-2.8 2.4-2.8 2.8l.2.1.2-.1c.6-2 1.8-2.4 2.3-2.4.8 0 1 .7 1 1.2l-.3 1.6-.6 2.5c-.3 1-.8 2-1.8 2 0 0-.5 0-.9-.2.7 0 .8-.6.8-.8 0-.4-.3-.6-.6-.6a1 1 0 0 0-1 1c0 .7 1 1 1.7 1 .9 0 1.5-.6 1.9-1.4a2 2 0 0 0 1.8 1.4c1.9 0 2.8-2.3 2.8-2.7 0-.1 0-.2-.2-.2l-.2.3c-.5 1.5-1.5 2.3-2.3 2.3-.7 0-1-.5-1-1.2 0-.4 0-.7.4-1.9l.6-2.5c.3-1 .9-1.8 1.7-1.8l1 .2Zm7.4 6.2c0-1.3-.2-2-.6-2.8-.5-1-1.5-1.3-2.1-1.3-1.5 0-2 1.1-2.2 1.4-.5 1-.5 2.1-.5 2.7 0 .8 0 2 .6 3 .6.9 1.5 1.1 2 1.1.7 0 1.7-.2 2.3-1.4.4-.8.5-1.9.5-2.7Zm-2.7 3.8c-.4 0-1.2-.2-1.5-1.5l-.1-2.4.1-2.3c.3-1.3 1.2-1.4 1.5-1.4.4 0 1.2.2 1.5 1.3l.1 2.4-.1 2.4c-.3 1.3-1.1 1.5-1.5 1.5Zm9-7.2c0-1.3-.2-3.5-1.2-5.6A7.7 7.7 0 0 0 35 118s-.2 0-.2.2l.3.4c1.8 1.8 2.8 4.8 2.8 8.5 0 3.4-.8 6.5-2.9 8.6l-.2.2.2.2c.2 0 1.7-1.3 2.6-3a13 13 0 0 0 1.3-6Zm198.9 75.2c-.5.1-.8.6-.8.9 0 .4.4.6.6.6.6 0 1-.5 1-1 0-.7-.9-1-1.7-1-1 0-1.7 1-1.8 1.3a1.9 1.9 0 0 0-1.9-1.4c-1.8 0-2.8 2.4-2.8 2.8l.2.1.2-.1c.6-2 1.8-2.4 2.4-2.4.8 0 1 .7 1 1.2l-.4 1.6-.6 2.5c-.3 1.1-.8 2-1.8 2l-.9-.1c.7-.2.8-.7.8-1 0-.3-.2-.5-.6-.5a1 1 0 0 0-.9 1c0 .7.9 1 1.6 1 .9 0 1.5-.6 1.9-1.4a2 2 0 0 0 1.8 1.4c1.9 0 2.9-2.3 2.9-2.7l-.2-.2c-.2 0-.2.1-.3.3-.5 1.5-1.5 2.3-2.3 2.3-.6 0-1-.5-1-1.2 0-.4 0-.7.4-1.9l.6-2.4c.3-1.1.9-2 1.7-2 0 0 .6 0 1 .3Zm7.4 6.2c0-1.2-.1-2-.5-2.8-.6-1-1.5-1.3-2.2-1.3-1.5 0-2 1.1-2.2 1.4-.5 1-.5 2.1-.5 2.7 0 .8 0 2 .6 3 .6.9 1.5 1.1 2.1 1.1.6 0 1.6-.2 2.2-1.3.5-1 .5-2 .5-2.8Zm-2.7 3.8c-.4 0-1.2-.2-1.5-1.5l-.1-2.4.1-2.3c.3-1.3 1.2-1.4 1.5-1.4.4 0 1.2.2 1.5 1.3l.1 2.4-.1 2.5c-.3 1.2-1 1.4-1.5 1.4Zm15.1-6.8h5c.3 0 .6 0 .6-.3 0-.4-.3-.4-.6-.4h-5v-5c0-.2 0-.5-.3-.5s-.3.3-.3.6v5h-5c-.2 0-.6 0-.6.3s.3.3.6.3h5v5c0 .2 0 .6.3.6s.3-.4.3-.6v-5Zm15.6-7.9.1-.3-.2-.1h-1l-1 .1c-.4 0-.5 0-.5.4 0 .2.2.2.4.2.9 0 1 .1 1 .3l-.1.3L269 209v.4c0 .4.3.4.5.4.3 0 .5-.2.6-.4l.8-3.2.3-1.2c.2-.8.2-.8.5-1.3.4-.5 1.2-1.6 2.6-1.6.7 0 1 .5 1 1.2 0 1-.8 3-1.2 4.1l-.2 1c0 .8.5 1.4 1.4 1.4 1.7 0 2.3-2.6 2.3-2.7 0-.1 0-.2-.2-.2l-.2.4c-.4 1.4-1.1 2.2-1.8 2.2-.2 0-.5 0-.5-.6 0-.5.2-1 .3-1.3.3-.8 1.1-3 1.1-4s-.6-1.9-2-1.9c-1 0-2 .5-2.6 1.4l1.3-5.5Z"/>
  <path fill="red" d="M91.2 45c0-.5.1-.7.4-.7h1.1c1.8 0 2.7 0 2.7 1.4l-.2 1.6v.2l.1.2c.2 0 .2 0 .3-.4l.5-3.2V44c0-.2 0-.2-.4-.2h-9.9c-.4 0-.4 0-.5.3l-1.1 3.3-.1.2c0 .1 0 .2.2.2.1 0 .2 0 .2-.3.8-2.2 1.2-3.2 3.6-3.2h1.2c.4 0 .6 0 .6.2l-.1.4-2.4 9.7c-.2.7-.2.9-2.1.9-.5 0-.6 0-.6.3 0 .2.2.2.3.2h5.5c.2 0 .4 0 .4-.3 0-.2-.1-.2-.6-.2-1.6 0-1.6-.2-1.6-.4v-.5l2.5-9.6Zm11.1 15.3-.3-.4c-1.8-1.8-2.8-4.8-2.8-8.5 0-3.5.8-6.5 3-8.6l.1-.3-.2-.1c-.2 0-1.7 1.3-2.5 3a14 14 0 0 0-.2 11.7c1 2.2 2.5 3.3 2.7 3.3l.2-.1Zm9.5-11.7c-.5 0-.7.5-.7.8 0 .5.3.6.6.6.5 0 .9-.4.9-1 0-.7-.9-1-1.7-1-1 0-1.7 1-1.8 1.4a1.9 1.9 0 0 0-1.9-1.4c-1.8 0-2.8 2.3-2.8 2.7 0 0 0 .2.2.2s.2-.1.2-.2c.6-2 1.8-2.4 2.4-2.4.8 0 1 .8 1 1.2l-.4 1.7-.6 2.5c-.3 1-.8 2-1.7 2-.1 0-.6 0-1-.2.7-.1.8-.7.8-.9 0-.3-.2-.6-.6-.6a1 1 0 0 0-.9 1c0 .7.9 1 1.6 1 .9 0 1.5-.6 1.9-1.3a2 2 0 0 0 1.8 1.4c1.9 0 2.9-2.4 2.9-2.8l-.2-.1c-.2 0-.2 0-.3.2-.4 1.6-1.5 2.3-2.3 2.3-.6 0-1-.4-1-1.2l.4-1.9.6-2.4c.3-1 .9-1.9 1.7-1.9 0 0 .6 0 1 .3Zm6.6 2.8c0-1.3-.2-3.6-1.2-5.7a7.7 7.7 0 0 0-2.7-3.3l-.2.1.3.4a12 12 0 0 1 2.8 8.5c0 3.5-.8 6.5-2.9 8.6l-.2.3.2.1c.2 0 1.7-1.3 2.6-3a13 13 0 0 0 1.3-6Zm19-1.4c.2 0 .5 0 .5-.3s-.3-.3-.5-.3h-10.7c-.2 0-.5 0-.5.3 0 .4.3.4.5.4h10.7Zm0 3.4c.2 0 .5 0 .5-.3s-.3-.3-.5-.3h-10.7c-.2 0-.5 0-.5.3s.3.3.5.3h10.7Zm10.2-2.8s.5-1 1.2-1.6c.4-.4 1-.7 1.8-.7.7 0 1 .6 1 1.3 0 0 0 .5-.3 1.3l-.4 1.9a71 71 0 0 0-.7 2.8c0 .3.2.5.4.5.6 0 .7-.4.8-1l1.1-4.4c0-.1 1-2.4 3-2.4.7 0 1 .6 1 1.3 0 1-.8 3-1.2 4l-.2 1c0 .8.5 1.5 1.4 1.5 1.7 0 2.3-2.7 2.3-2.8l-.2-.1-.2.3c-.5 1.5-1.1 2.2-1.8 2.2-.2 0-.5 0-.5-.6l.3-1.2c.3-.9 1.1-3 1.1-4 0-1.1-.6-2-2-2-1.2 0-2.2.8-2.9 1.8 0-1-.6-1.7-2-1.7-1.6 0-2.4 1.1-2.8 1.6 0-1-.7-1.6-1.5-1.6-.6 0-1 .2-1.3.9l-.6 1.8s0 .2.2.2c.1 0 .2 0 .3-.4.2-1.1.6-2.2 1.3-2.2.4 0 .6.3.6.9l-.3 1.6-.5 2a35.4 35.4 0 0 1-.7 2.8c0 .3.2.5.4.5.3 0 .5-.1.6-.4l.3-1 .4-1.7.6-2.4Zm20.3-2c-.6 0-.8.5-.8.8 0 .5.3.6.6.6.5 0 .9-.4.9-1 0-.7-.9-1-1.6-1-1.1 0-1.7 1-1.9 1.4a1.9 1.9 0 0 0-1.8-1.4c-1.9 0-2.9 2.3-2.9 2.7l.2.2c.2 0 .2-.1.3-.2.6-2 1.8-2.4 2.3-2.4.8 0 1 .8 1 1.2l-.4 1.7-.6 2.5c-.2 1-.8 2-1.7 2-.1 0-.6 0-1-.2.7-.1.9-.7.9-.9 0-.3-.3-.6-.7-.6a1 1 0 0 0-.9 1c0 .7.9 1 1.7 1 .8 0 1.4-.6 1.8-1.3a2 2 0 0 0 1.9 1.4c1.8 0 2.8-2.4 2.8-2.8l-.2-.1c-.2 0-.2 0-.2.2-.5 1.6-1.6 2.3-2.4 2.3-.6 0-1-.4-1-1.2l.4-1.9.7-2.4c.2-1 .8-1.9 1.7-1.9 0 0 .5 0 .9.3Zm12.7 3.1h5c.2 0 .5 0 .5-.3s-.3-.3-.6-.3h-5v-5c0-.2 0-.6-.3-.6s-.3.3-.3.6v5h-5c-.2 0-.6 0-.6.3s.3.3.6.3h5v5c0 .3 0 .6.3.6.4 0 .4-.3.4-.6v-5Zm14.7-7.8v-.3c0-.2-.2-.2-.2-.2l-1 .1h-.9c-.4.1-.6.1-.6.4 0 .2.2.2.4.2 1 0 1 .2 1 .4l-.3 1-.4 1.7-1.3 5.1-.1 1c0 1.8 1 2.8 2.2 2.8 2 0 4.2-2.7 4.2-5.3 0-1.7-.9-2.8-2.2-2.8-1 0-1.8.7-2.2 1.1l1.3-5.2ZM194 55.7c-.6 0-1.2-.4-1.2-1.8 0-.6 0-1 .4-2.2l.4-1.6c0-.2 1.1-1.8 2.3-1.8.8 0 1.2.8 1.2 1.8 0 .8-.5 2.9-1 3.8-.4 1-1.3 1.8-2 1.8Z"/>
  <path fill="#0015FF" d="M311.1 48c0 .3-.1.4-.3.7-.8 1-1.5 1.3-2 1.3-.7 0-1.2-.5-1.2-1.7 0-1 .5-3 .9-3.8.5-1 1.3-1.7 2-1.7 1.3 0 1.5 1.4 1.5 1.5v.3l-.9 3.5Zm1.1-4.4c-.2-.5-.7-1.2-1.6-1.2-2 0-4.2 2.5-4.2 5.2 0 1.8 1.1 2.7 2.3 2.7 1 0 1.8-.7 2.1-1l-.4 1.5c-.3 1-.4 1.5-1 2.1-.7.8-1.4.8-1.8.8-.6 0-1 0-1.5-.2.6-.2.8-.7.8-.9 0-.3-.3-.6-.7-.6a1 1 0 0 0-.9 1c0 .7.8 1 2.3 1 2.3 0 3.5-1.5 3.8-2.5l2-8v-.3c0-.3-.2-.5-.4-.5-.5 0-.7.4-.8.9ZM317 45s0-.2-.2-.2h-.7l-.6.1c-.3 0-.4 0-.4.3l.3.1c.6 0 .6.1.6.2l-.1.3-1.7 6.8v.3c0 .2.1.4.3.4.2 0 .4-.2.5-.3l.2-.7.3-1 .2-.9c.1-.7.1-.7.4-1.1.4-.6 1-1.1 1.8-1.1.4 0 .7.2.7.8 0 .7-.5 2-.8 2.6l-.1.6c0 .7.5 1 1 1 1.2 0 1.7-1.6 1.7-1.8l-.2-.1-.2.2c-.2 1-.8 1.4-1.2 1.4-.2 0-.3 0-.3-.4l.2-.8c.2-.5.7-1.8.7-2.5 0-1-.6-1.4-1.5-1.4-.6 0-1.3.3-1.8 1l.9-3.6Zm10.4 9.7-.3-.4c-1.8-1.8-2.8-4.8-2.8-8.4 0-3.5.8-6.5 3-8.7l.1-.2-.1-.2c-.3 0-1.8 1.3-2.6 3.1-1 1.8-1.4 3.7-1.4 6 0 1.6.3 3.7 1.2 5.6 1 2.2 2.6 3.4 2.8 3.4l.1-.2ZM337 43c-.6.1-.8.5-.8.9s.3.6.6.6c.5 0 .9-.5.9-1 0-.8-.9-1.1-1.6-1.1-1.1 0-1.8 1-2 1.4a1.9 1.9 0 0 0-1.8-1.4c-1.8 0-2.8 2.4-2.8 2.8l.2.1c.2 0 .2 0 .2-.2.6-2 1.9-2.3 2.4-2.3.8 0 1 .7 1 1.1l-.4 1.7-.6 2.5c-.3 1-.8 2-1.7 2-.1 0-.6 0-1-.2.7-.1.8-.6.8-.9 0-.3-.2-.5-.6-.5a1 1 0 0 0-.9 1c0 .7.9 1 1.6 1 1 0 1.5-.7 1.9-1.4a2 2 0 0 0 1.9 1.4c1.8 0 2.8-2.3 2.8-2.7l-.2-.2c-.2 0-.2.1-.2.2-.5 1.6-1.6 2.4-2.4 2.4-.6 0-1-.5-1-1.2l.4-2 .6-2.4c.3-1 1-1.8 1.7-1.8 0 0 .6 0 1 .2Zm6.5 2.9c0-1.4-.2-3.6-1.2-5.7a7.7 7.7 0 0 0-2.7-3.4s-.2 0-.2.2l.3.4c1.8 1.8 2.9 4.8 2.9 8.4 0 3.5-.9 6.5-3 8.7l-.2.2.2.2a8 8 0 0 0 2.6-3.1 13 13 0 0 0 1.3-6Z"/>
</svg>

$$
\begin{align*}
g_h(x) &= f(x_0)+ \left(\frac{f(x_0+h)-f(x_0)}{h}\right)(x-x_0) \\
\lim_{h \to 0} g_h(x) &= f(x_0) + \left(\lim_{h \to 0} \frac{f(x_0+h)-f(x_0)}{h}\right)(x-x_0) \\
\end{align*}
$$

Also haben wir die Tangente $T(x) = f(x_0) + m(x-x_0)$ und $m = \displaystyle\lim_{h \to 0} \frac{f(x_0+h)-f(x_0)}{h}$ die Steigung der Tangente.

Wir betrachten also den sogenannten Differenzenquotienten
$$
\frac{\Delta f}{\Delta x} = \frac{f(x_0+h)-f(x_0)}{h}
$$
die Steigung der Sekante, und wollen die Steigung der Tangente als Grenzwert von $\frac{\Delta f}{\Delta x}$ als $h \to 0$ bestimmen.

::: proposition Alternative Definition Ableitung (Bemerkung 4.1.2.){#bemerkung-4-1-2}
Sei $D \subset ℝ , f : D \to ℝ$ und $x _ { 0 } \in D$ ein Häufungspunkt von $D$.

Es ist oft von Vorteil in der Definition von $f ^ { \prime } ( x _ { 0 } )$, $x = x _ { 0 } + h$ zu setzen, so dass:

$$
f ^ { \prime } ( x _ { 0 } ) = \lim _ { h \to 0 } { \frac { f ( x _ { 0 } + h ) - f ( x _ { 0 } ) } { h } }
$$

**Alternative Notationen:** $f'(x_0)$, $\frac{df}{dx}(x_0)$, $(Df)(x_0)$
:::

Der Graph einer differenzierbaren Funktion lässt sich linear durch eine Tangente annähern. DIe Tangente im Punkt $(x_0, f(x_0))$ hat die Gleichung

$$
T(x) = f(x_0) + m(x-x_0)
$$

$T(x)$ ist eine "gute Näherung" für $f(x)$ in einer Umgebung von $x_0$.

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 378 230">
  <path stroke="currentcolor" stroke-width="2" d="M81.2 191.4c20.1-39 108-114.2 239.4-114.2M65.5.7v195.5m0 13.2v-13.2m-26.7 0h26.7m312.4 0H65.5"/>
  <path stroke="currentcolor" stroke-dasharray="6 6" stroke-width="2" d="m57.4 143.4 66.8-.1M57.4 84.2h199.4"/>
  <path stroke="red" stroke-dasharray="6 6" stroke-width="2" d="M57.4 35.5h199.4"/>
  <path stroke="currentcolor" stroke-dasharray="6 6" stroke-width="2" d="M124.2 203.6V137m133 66.6V83.4"/>
  <path fill="red" d="m257.2 83.4 5.8-10h-11.6l5.8 10Zm0-46-5.8 10H263l-5.8-10Zm1 43.2v-1h-2v1h2Zm-2-5.8v1h2v-1h-2Zm2-5.7v-1h-2v1h2Zm-2-5.8v1h2v-1h-2Zm2-5.7v-1h-2v1h2Zm-2-5.8v1h2v-1h-2Zm2-5.7v-1h-2v1h2Zm-2-5.8v1h2v-1h-2Zm1 34.5h1v-5.7h-2v5.7h1Zm0-11.5h1v-5.7h-2v5.7h1Zm0-11.5h1v-5.7h-2v5.7h1Z"/>
  <path stroke="#0015FF" stroke-width="2" d="m68 168.3 223.8-101"/>
  <path stroke="red" stroke-width="2" d="M76.5 182.1 293 6.7"/>
  <circle cx="124.1" cy="143.4" r="3" fill="#fff" stroke="currentcolor" stroke-width="2"/>
  <circle cx="257.2" cy="83.4" r="3" fill="#fff" stroke="currentcolor" stroke-width="2"/>
  <circle cx="257.2" cy="35.5" r="3" fill="#fff" stroke="currentcolor" stroke-width="2"/>
  <path fill="currentcolor" d="M124.5 219c-.6 0-.8.5-.8.8 0 .5.4.6.6.6.6 0 1-.5 1-1 0-.7-1-1-1.7-1-1 0-1.7 1-1.8 1.4a1.9 1.9 0 0 0-1.9-1.4c-1.8 0-2.8 2.3-2.8 2.7 0 0 0 .2.2.2l.2-.2c.6-2 1.8-2.4 2.3-2.4.9 0 1 .8 1 1.2 0 .4 0 .8-.3 1.7l-.6 2.5c-.3 1-.8 2-1.8 2 0 0-.5 0-.9-.2.7-.1.8-.7.8-.9 0-.4-.3-.6-.6-.6a1 1 0 0 0-1 1c0 .7 1 1 1.7 1 .9 0 1.5-.6 1.9-1.3a2 2 0 0 0 1.8 1.4c1.9 0 2.8-2.4 2.8-2.8l-.1-.1c-.2 0-.2 0-.3.2-.5 1.6-1.5 2.3-2.3 2.3-.7 0-1-.4-1-1.2 0-.4 0-.7.4-1.9l.6-2.4c.3-1 .9-1.9 1.7-1.9 0 0 .5 0 1 .3Zm7.4 6.2a8 8 0 0 0-.5-2.9c-.6-1-1.5-1.3-2.2-1.3-1.5 0-2 1.1-2.2 1.5-.5.9-.5 2-.5 2.7 0 .8 0 2 .6 3 .6.8 1.5 1 2 1 .7 0 1.7-.1 2.3-1.3.4-.9.5-2 .5-2.7Zm-2.7 3.7c-.4 0-1.2-.2-1.5-1.4l-.1-2.5.1-2.3c.3-1.2 1.2-1.3 1.5-1.3.4 0 1.2.2 1.5 1.3l.1 2.3-.1 2.5c-.3 1.3-1.1 1.4-1.5 1.4ZM7.1 140.5c.4 0 .5 0 .5-.3 0-.2-.1-.2-.4-.2H5.7l.8-3.7c0-.4.4-.8 1-.8.3 0 .7.1.8.3-.7 0-.9.6-.9.9 0 .3.3.6.6.6.4 0 1-.3 1-1 0-.8-.8-1.2-1.6-1.2s-1.5.6-1.9 1.3c-.3.6-.5 1.3-1 3.6h-1c-.4 0-.5 0-.5.3 0 .2 0 .2.4.2h1.2c-.3 1.7-1 5.8-1.5 7.7-.3 1.6-.6 2.9-1.5 2.9 0 0-.6 0-.9-.3 1-.1 1-1 1-1 0-.3-.3-.5-.7-.5a1 1 0 0 0-.9 1c0 .8.8 1.2 1.5 1.2 1.9 0 2.6-3.3 2.8-4.2l1.3-6.8h1.5Zm8.5 11.7-.3-.4a12 12 0 0 1-2.8-8.5c0-3.5.8-6.5 2.9-8.6l.2-.3-.2-.1c-.2 0-1.7 1.3-2.6 3-.9 1.9-1.3 3.8-1.3 6 0 1.6.2 3.7 1.2 5.7 1 2.1 2.5 3.3 2.7 3.3l.2-.1Zm9.5-11.8c-.6.1-.8.6-.8 1 0 .3.4.5.6.5.6 0 1-.5 1-1 0-.7-1-1-1.7-1-1 0-1.7 1-1.9 1.4a1.9 1.9 0 0 0-1.8-1.5c-1.8 0-2.8 2.4-2.8 2.8 0 0 0 .2.2.2l.2-.2c.6-2 1.8-2.4 2.3-2.4.8 0 1 .8 1 1.2l-.3 1.7-.6 2.4c-.3 1.1-.8 2.1-1.8 2.1 0 0-.5 0-.9-.2.7-.2.8-.7.8-1 0-.3-.3-.5-.6-.5a1 1 0 0 0-1 1c0 .7 1 1 1.7 1 .9 0 1.5-.6 1.9-1.4a2 2 0 0 0 1.8 1.5c1.9 0 2.8-2.4 2.8-2.8 0 0 0-.2-.2-.2l-.2.3c-.5 1.6-1.5 2.3-2.3 2.3-.7 0-1-.5-1-1.2 0-.4 0-.7.4-1.9l.6-2.4c.3-1.1.9-1.9 1.7-1.9l1 .2Zm7.4 6.3a6 6 0 0 0-.6-2.9c-.5-1-1.5-1.3-2.1-1.3-1.5 0-2 1.1-2.2 1.5-.5.8-.5 2-.5 2.7 0 .7 0 2 .6 3 .6.8 1.5 1 2 1 .7 0 1.7-.1 2.3-1.3.4-.9.5-2 .5-2.7Zm-2.7 3.7c-.4 0-1.2-.2-1.5-1.5l-.1-2.4.1-2.3c.3-1.2 1.2-1.4 1.5-1.4.4 0 1.2.2 1.5 1.3l.1 2.4-.1 2.5c-.3 1.2-1.1 1.4-1.5 1.4Zm9-7.1c0-1.4-.2-3.6-1.2-5.7a7.7 7.7 0 0 0-2.7-3.3l-.2.1.3.4c1.8 1.8 2.8 4.8 2.8 8.5 0 3.5-.8 6.5-2.9 8.6l-.2.3.2.1c.2 0 1.7-1.3 2.6-3a13 13 0 0 0 1.3-6ZM13.1 80.7c.4 0 .5 0 .5-.3 0-.2-.1-.2-.5-.2h-1.4l.7-3.7c.1-.5.5-.9 1-.9l.9.3c-.7.1-1 .6-1 1 0 .3.4.5.7.5.4 0 .9-.3.9-1s-.8-1.1-1.6-1.1a2 2 0 0 0-1.8 1.2c-.4.7-.5 1.3-1 3.7H9.3c-.3 0-.5 0-.5.3 0 .2.1.2.5.2h1.1L9 88.4c-.4 1.5-.6 2.9-1.5 2.9 0 0-.6 0-1-.4 1 0 1-.9 1-.9 0-.3-.3-.5-.6-.5a1 1 0 0 0-1 1c0 .7.9 1.1 1.6 1.1 1.8 0 2.6-3.3 2.8-4.2l1.3-6.7H13Zm8.4 11.6-.3-.4c-1.8-1.8-2.8-4.8-2.8-8.4 0-3.5.9-6.5 3-8.7l.1-.2-.1-.2c-.3 0-1.7 1.3-2.6 3a13.6 13.6 0 0 0-.2 11.7 8 8 0 0 0 2.8 3.4l.1-.2ZM31 80.6c-.5.1-.7.5-.7.9s.3.5.6.5c.5 0 .9-.4.9-1 0-.7-.9-1-1.6-1-1.1 0-1.7 1-1.9 1.4a1.9 1.9 0 0 0-1.9-1.4c-1.8 0-2.8 2.4-2.8 2.8l.2.1c.2 0 .2-.1.3-.2.6-2 1.8-2.3 2.3-2.3.8 0 1 .7 1 1.1 0 .4-.1.9-.4 1.7l-.6 2.5c-.2 1-.8 2-1.7 2-.1 0-.6 0-1-.2.7-.1.9-.6.9-.9 0-.3-.3-.5-.7-.5a1 1 0 0 0-.9 1c0 .7.9 1 1.7 1 .8 0 1.4-.7 1.8-1.4a2 2 0 0 0 1.9 1.4c1.8 0 2.8-2.3 2.8-2.7 0-.1 0-.2-.2-.2s-.2 0-.2.2c-.5 1.6-1.6 2.4-2.4 2.4-.6 0-1-.5-1-1.2l.4-2 .6-2.4c.3-1 1-1.8 1.8-1.8 0 0 .5 0 .9.2Zm5.8 2.9c0-1.4-.2-3.6-1.2-5.7a7.7 7.7 0 0 0-2.8-3.4l-.1.2.3.4c1.8 1.8 2.8 4.8 2.8 8.4 0 3.5-.8 6.5-3 8.7l-.1.2.1.2c.3 0 1.8-1.3 2.6-3.1a13 13 0 0 0 1.4-6Zm223.7 134.9c-.6.2-.8.6-.8 1s.3.5.6.5c.5 0 1-.5 1-1 0-.7-1-1-1.7-1-1.1 0-1.7 1-1.9 1.4a1.9 1.9 0 0 0-1.8-1.5c-1.9 0-2.8 2.4-2.8 2.8 0 0 0 .2.2.2l.2-.2c.6-2 1.8-2.4 2.3-2.4.8 0 1 .8 1 1.2l-.3 1.7-.7 2.4c-.2 1.1-.7 2.1-1.7 2.1l-1-.2c.7-.1.9-.7.9-.9 0-.4-.3-.6-.6-.6a1 1 0 0 0-1 1c0 .7 1 1 1.7 1 .8 0 1.5-.6 1.8-1.3a2 2 0 0 0 1.9 1.4c1.8 0 2.8-2.4 2.8-2.8l-.2-.1c-.1 0-.2 0-.2.2-.5 1.6-1.5 2.3-2.4 2.3-.6 0-1-.5-1-1.2l.4-1.9.7-2.4c.2-1.1.8-1.9 1.7-1.9 0 0 .5 0 .9.2Z"/>
  <path fill="red" d="M15.8 29c0-.5.1-.6.4-.7h1c1.9 0 2.7 0 2.7 1.4l-.1 1.7v.2l.1.2c.2 0 .2-.1.3-.4l.5-3.2v-.3c0-.2 0-.2-.5-.2h-9.8c-.4 0-.4 0-.5.4l-1.1 3.2-.1.3s0 .2.2.2l.2-.3c.8-2.2 1.2-3.2 3.5-3.2H14c.4 0 .6 0 .6.2l-.1.4-2.4 9.7c-.2.7-.3.8-2.2.8-.4 0-.5 0-.5.4 0 .2.2.2.2.2h5.6c.2 0 .4 0 .4-.4 0-.2-.1-.2-.6-.2-1.6 0-1.6-.1-1.6-.4v-.4l2.5-9.6Zm11.1 15.3-.3-.4c-1.8-1.8-2.8-4.7-2.8-8.4 0-3.5.8-6.5 3-8.7v-.3c-.3 0-1.8 1.2-2.7 3-.9 1.8-1.3 3.8-1.3 6 0 1.6.3 3.7 1.2 5.6 1 2.2 2.5 3.4 2.7 3.4.1 0 .2 0 .2-.2Zm9.5-11.7c-.5.1-.8.6-.8.9 0 .4.4.6.6.6.6 0 1-.5 1-1 0-.7-1-1-1.7-1-1 0-1.7 1-1.8 1.3a1.9 1.9 0 0 0-1.9-1.4C30 32 29 34.4 29 34.8l.2.1.2-.1c.6-2 1.8-2.4 2.4-2.4.8 0 1 .7 1 1.2l-.4 1.6-.6 2.5c-.3 1-.8 2-1.8 2 0 0-.5 0-.9-.2.7 0 .8-.6.8-.8 0-.4-.3-.6-.6-.6a1 1 0 0 0-.9 1c0 .7.8 1 1.6 1 .9 0 1.5-.6 1.9-1.4a2 2 0 0 0 1.8 1.4c1.9 0 2.8-2.3 2.8-2.7l-.1-.2c-.2 0-.2.1-.3.3-.5 1.5-1.5 2.3-2.3 2.3-.6 0-1-.5-1-1.2 0-.4 0-.7.4-1.9l.6-2.4c.3-1.1.9-2 1.7-2 0 0 .6 0 1 .3Zm6.6 2.9c0-1.4-.2-3.6-1.2-5.7a7.7 7.7 0 0 0-2.7-3.3l-.2.1.3.4c1.8 1.8 2.8 4.8 2.8 8.5 0 3.5-.8 6.5-3 8.6v.4c.3 0 1.8-1.3 2.7-3a13 13 0 0 0 1.3-6Zm236.3 9.3c.2-.6.2-.7 1-.7h1.2c1.6 0 2.7.5 2.7 1.9 0 1-.4 3.6-4 3.6h-2l1.1-4.8Zm2.5 5c2.2-.5 4-2 4-3.5 0-1.4-1.4-2.7-4-2.7H277c-.4 0-.5 0-.5.3 0 .2 0 .2.4.2 1.1 0 1.1.2 1.1.4v.4l-2.5 9.7c-.2.6-.2.8-1.4.8-.5 0-.6 0-.6.3 0 .2.2.2.3.2h4.1c.2 0 .4 0 .4-.3 0-.2-.1-.2-.4-.2-1.1 0-1.1-.2-1.1-.4v-.2l1.2-4.9h2.2c1.7 0 2 1.1 2 1.7L282 53l-.2 1.4c0 1.3 1 1.9 2.2 1.9 1.5 0 2.1-1.8 2.1-2 0-.2 0-.2-.2-.2-.1 0-.2 0-.2.2-.4 1.3-1.2 1.6-1.6 1.6-.5 0-.8-.2-.8-1l.3-2.2V52c0-1.4-1-2-1.7-2.1Zm10.3 4c-.5.1-.5.6-.5.7 0 .2.2.4.4.4.3 0 .7-.2.7-.7 0-.7-.8-.9-1.2-.9-.6 0-1 .4-1.3.9-.3-.7-.9-.9-1.4-.9-1.3 0-2 1.5-2 1.8 0 .1 0 .2.2.2l.2-.2c.2-.9 1-1.5 1.6-1.5.5 0 .7.4.7.8l-.3 1.2-.4 1.6c-.1.7-.6 1.2-1.1 1.2 0 0-.4 0-.6-.2.5-.1.5-.6.5-.6 0-.3-.2-.5-.4-.5-.4 0-.7.3-.7.8s.6.8 1.2.8 1-.5 1.3-.8c.2.5.8.8 1.4.8 1.3 0 2-1.5 2-1.8 0-.1 0-.2-.2-.2l-.2.2c-.2.8-.9 1.5-1.6 1.5-.4 0-.7-.3-.7-.8 0-.2 0-.5.3-1.2l.4-1.6c.1-.6.6-1.2 1-1.2.2 0 .5 0 .7.2Zm6.1 3.6c0-.7 0-3.1-2.2-3.1s-2.2 2.4-2.2 3c0 .7 0 3.2 2.2 3.2s2.2-2.5 2.2-3.1Zm-2.2 2.8c-.4 0-1-.2-1.2-1l-.1-2 .1-1.7c.2-.8 1-1 1.2-1 .4 0 1 .3 1.2 1 .2.4.2 1 .2 1.8 0 .6 0 1.5-.2 2-.2.8-.9.9-1.2.9Zm10.1.1-.3-.4a12.2 12.2 0 0 1-2.8-8.5c0-3.5.9-6.5 3-8.6l.1-.3-.1-.1c-.3 0-1.7 1.3-2.6 3-1 1.9-1.3 3.8-1.3 6 0 1.6.2 3.8 1.1 5.7a8.1 8.1 0 0 0 2.8 3.3l.1-.1Zm9.6-11.8c-.6.2-.8.6-.8 1s.3.5.6.5c.5 0 .9-.5.9-1 0-.7-.9-1-1.6-1-1.1 0-1.7 1-1.9 1.4a1.9 1.9 0 0 0-1.8-1.4c-1.9 0-2.9 2.3-2.9 2.7l.2.2c.2 0 .2-.1.3-.2.6-2 1.8-2.4 2.3-2.4.8 0 1 .8 1 1.2l-.4 1.7-.6 2.4c-.2 1.1-.8 2.1-1.7 2.1-.1 0-.6 0-1-.2.7-.1.9-.7.9-.9 0-.4-.3-.6-.6-.6a1 1 0 0 0-1 1c0 .7.9 1 1.7 1 .8 0 1.4-.6 1.8-1.3a2 2 0 0 0 1.9 1.4c1.8 0 2.8-2.4 2.8-2.8l-.2-.1c-.2 0-.2 0-.2.2-.5 1.6-1.6 2.3-2.4 2.3-.6 0-1-.5-1-1.2l.4-1.9.7-2.4c.2-1 .8-1.9 1.7-1.9 0 0 .5 0 .9.2Zm6.5 2.9c0-1.4-.1-3.6-1.1-5.7a7.7 7.7 0 0 0-2.8-3.3l-.1.1.3.4c1.8 1.8 2.8 4.8 2.8 8.5 0 3.5-.9 6.5-3 8.6l-.1.3.1.1c.3 0 1.7-1.3 2.6-3a13 13 0 0 0 1.3-6Z"/>
</svg>

Sei 
$$
\begin{align*}
f(x) &= T(x) + R_{x_0}(x)\\
&= f(x_0) + f'(x_0)(x - x_0) + R_{x_0}(x)
\end{align*}
$$


Wir behandeln jetzt zwei äquivalente Formulierungen der Differenzierbarkeit.

::: proposition Satz 4.1.3. (Weierstrass 1861){#satz-4-1-3}
Sei $f : D \to ℝ$ , $x _ { 0 } \in D$ Häufungspunkt von $\boldsymbol { D }$ . Folgende Aussagen sind äquivalent:

1) $f$ ist in $x _ { 0 }$ differenzierbar. 
2) $E s$ gibt $c \in ℝ$ und $r : D \to ℝ$ mit:   
    1) $f ( x ) = f ( x _ { 0 } ) + c ( x - x _ { 0 } ) + r ( x ) ( x - x _ { 0 } )$   
    2) $r ( x _ { 0 } ) = 0$ und $r$ ist stetig in $x _ { 0 }$.

{.numbered}

Falls dies zutrifft ist $c = f ^ { \prime } ( x _ { 0 } )$ eindeutig bestimmt.

**Beweis:**<br>
$( 1 ) \implies ( 2 )$ : Wir nehmen an $f$ ist differenzierbar in $x _ { 0 }$ . Sei also

$$
f ^ { \prime } ( x _ { 0 } ) = \lim _ { x \to x _ { 0 } } { \frac { f ( x ) - f ( x _ { 0 } ) } { x - x _ { 0 } } } .
$$

Wir definieren: $r : D \to ℝ$ :

$r ( x ) = \displaystyle \frac { f ( x ) - f ( x _ { 0 } ) } { x - x _ { 0 } } - f ^ { \prime } ( x _ { 0 } )$ für  $x \in D \setminus \{ x _ { 0 } \}$

$r ( x _ { 0 } ) = 0$.

Dann ist (2.1) mit $c = f ^ { \prime } ( x _ { 0 } )$ und $r$ offensichtlich erfüllt. Da

$$
\lim _ { x \to x _ { 0 } } r ( x ) = \lim _ { x \to x _ { 0 } } \left( { \frac { f ( x ) - f ( x _ { 0 } ) } { x - x _ { 0 } } } - f ^ { \prime } ( x _ { 0 } ) \right) = 0 = r ( x _ { 0 } )
$$

folgt mit 3.10.4(2), dass $r$ in $x _ { 0 }$ stetig ist.

$( 2 ) \implies ( 1 )$ : übung.
:::

Die Formulierung der Differenzierbarkeit von $f$ mittels

$$
f ( x ) = f ( x _ { 0 } ) + f ^ { \prime } ( x _ { 0 } ) ( x - x _ { 0 } ) + r ( x ) ( x - x _ { 0 } )
$$

und der Stetigkeit von $r$ in $x _ { 0 }$ hat den Vorteil, dass sie keinen Limes enthält. Ausserdem ist dann

$$
y = f ( x _ { 0 } ) + f ^ { \prime } ( x _ { 0 } ) \left( x - x _ { 0 } \right)
$$

die Gleichung der Tangente zum Graph von $f$ im Punkt $\left( x _ { 0 } , f ( x _ { 0 } ) \right) .$

Wir können die Charakterisierung der Differenzierbarkeit noch Vereinfachen in dem wir in Satz 4.1.3(2.1)

$$
\phi ( x ) = f ^ { \prime } ( x _ { 0 } ) + r ( x )
$$

setzen. Wir erhalten:

::: proposition Satz 4.1.4.{#satz-4-1-4}
Eine Funktion $f : D \to ℝ$ ist in $x _ { 0 }$ differenzierbar $\iff$ es eine Funktion $\phi : D \to ℝ$ gibt die stetig in $x _ { 0 }$ ist und so, dass

$$
f ( x ) = f { \big ( } x _ { 0 } { \big ) } + \phi { \big ( } x { \big ) } \left( x - x _ { 0 } \right) \qquad \forall x \in D .
$$

In diesem Fall gilt $\phi ( x _ { 0 } ) = f ^ { \prime } ( x _ { 0 } )$ .
:::

::: proposition Korollar 4.1.5.{#korollar-4-1-5}
Sei $f : D \to ℝ$ und $x _ { 0 } \in D$ ein Häufungspunkt.

$f$ in $x _ { 0 }$ differenzierbar $\implies$ $f$ stetig in $x _ { 0 }$.

**Beweis:**<br>
Sei $f$ in $x _ { 0 }$ differenzierbar. Dann gibt es eine Funktion $\phi : D \to ℝ$ die stetig in $x _ { 0 }$ ist und so, dass
$$
f ( x ) = f { \big ( } x _ { 0 } { \big ) } + \phi { \big ( } x { \big ) } \left( x - x _ { 0 } \right) \qquad \forall x \in D
$$

Wir zeigen dass $f$ in $x _ { 0 }$ stetig ist, also dass
$$
\begin{align*}
\lim_{x\to x_0} f(x) &= \lim_{x\to x_0} f(x_0) + \lim_{x\to x_0} \left(\phi(x)(x - x_0)\right)\\
&= f(x_0) + \lim_{x\to x_0} \phi(x)\lim_{x\to x_0} (x - x_0)\\
&= f(x_0) + \phi(x_0) \cdot \lim_{x\to x_0} (x - x_0)\\
&= f(x_0) + \phi(x_0) \cdot 0\\
&= f(x_0)
\end{align*}
$$
:::

::: example Beispiel 4.1.6.{#beispiel-4-1-6}

1) **Konstante Funktion**: $f : ℝ \to ℝ$, $x \mapsto k$ für alle $k \in ℝ$.

   $x_0 \in ℝ$ ist ein Häufungspunkt von $ℝ$. $f(x) - f(x_0) = k - k = 0$ für alle $x \in ℝ$.
 
   Somit ist $\frac{f(x) - f(x_0)}{x - x_0} = \frac0{x-x_0} = 0$ 

   $\implies \displaystyle\lim_{\substack{x \to x_0\\ x≠x_0}} \frac{f(x) - f(x_0)}{x - x_0} = 0$

   $\implies f$ ist in allen Punkten $x_0 \in ℝ$ differenzierbar mit $f'(x_0) = 0$.

2) **Lineare Funktion**: $f : ℝ \to ℝ$, $f ( x ) = mx + b$ ist überall differenzierbar mit $f'(x_0) = m$

   Da die Ableitung die Steigung Funktion ist, ist sie konstant und gleich $m$.

3) **Quadratische Funktion**: $f : ℝ \to ℝ$, $f ( x ) = ax^2 + bx + c$ ist überall differenzierbar mit $f'(x_0) = 2ax_0 + b$.

   Das folgt aus

   $$
   \begin{align*}
   f'(x_0) &= \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0}\\
   &= \lim_{x \to x_0} \frac{(ax^2 + bx + c) - (ax_0^2 + bx_0 + c)}{x - x_0}\\
   &= \lim_{x \to x_0} \frac{a(x^2 - x_0^2) + b(x - x_0)}{x - x_0}\\
   &= \lim_{x \to x_0} \frac{a(x - x_0)(x + x_0) + b(x - x_0)}{x - x_0}\\
   &= \lim_{x \to x_0} \left( a(x + x_0) + b \right)\\
   &= a(2x_0) + b \\
   &= 2ax_0 + b
   \end{align*}
   $$

4) $f : ℝ \to ℝ$, $f ( x ) = | x |$

   ![](/images/d26f2dda539fa91cad0013ed922c232fbbeb0309edd334dbc58e87187d0f4d14.png)

   Ist in $x _ { 0 } = 0$ nicht differenzierbar:
   
   Für $x < 0$ :
   
   $$
   { \frac { f ( x ) - f ( 0 ) } { x - 0 } } = { \frac { | x | } { x } } = - 1
   $$
   
   Für $x > 0$ :
   
   $$
   { \frac { f ( x ) - f ( 0 ) } { x - 0 } } = { \frac { | x | } { x } } = 1 .
   $$
   
   Also hat für $x \to 0 , \frac { f ( x ) - f ( 0 ) } { x - 0 }$ keinen Grenzwert.
   
   Für alle $x _ { 0 } \neq 0$ ist $f$ in $x _ { 0 }$ differenzierbar.

5) (Van der Waerden 1930). Sei für $x \in ℝ$, $g(x)$ die Distanz von $x$ zur nächsten ganzen Zahl definiert durch

   $$
   g ( x ) = \min \left\{ \left| x - m \right| : m \in ℤ \right\} .
   $$
   
   ![](/images/ac38c7a86bd907b024799bff2cc6c349aa36bebb84c6fc712db6c2bc5e7b572a.png)
   
   Sei
   
   $$
   f ( x ) = \sum _ { n = 0 } ^ { \infty } { \frac { g \left( 1 0 ^ { n } x \right) } { 1 0 ^ { n } } }
   $$
   
   Dann ist nach Satz 3.7.9 diese Reihe auf ganz $ℝ$ gleichmässig konvergent und $f$ ist deswegen stetig.
   
   Mittels Dezimalentwicklung kann man zeigen, dass $f$ in keinem Punkt von $ℝ$ differenzierbar ist.
:::

::: definition Definition 4.1.7.{#definition-4-1-7}
$f : D \to ℝ$ ist in $D$ differenzierbar,<br> falls für jeden Häufungspunkt $x _ { 0 } \in D$ , $f$ in $x _ { 0 }$ differenzierbar ist.

In diesem Fall, definiert die Kollektion aller $x_0 \mapsto f'(x_0)$ eine neue Funktion. Die Funktion
$$
\begin{align*}
f' : D &\to ℝ\\
x &\mapsto f'(x)
\end{align*}
$$
heisst die Ableitung von $f$ und wird mit $f'$ bezeichnet.
:::

Meistens ist $D$ eine endliche Vereinigung von Intervallen $I _ { n }$ mit Endpunkten $a _ { n } < b _ { n }$ insbesondere ist dann jeder Punkt von $D$ Häufungspunkt von $D$ .

::: example Beispiel 4.1.8.{#beispiel-4-1-8}
1) $\exp : ℝ \to ℝ$ ist in $ℝ$ differenzierbar und $\exp'(x) = \exp(x)$ .

   Seien $x=x_0+h$, $x _ { 0 } \in ℝ$ und $h \neq 0$:
   
   $$
   \begin{align*}
   \exp(x_0+h) - \exp(x_0) &= \exp(x_0) \exp(h) - \exp(x_0)\\
    &= \exp(x_0) \left( \exp(h) - 1 \right)
   \end{align*}
   $$

   Wenn wir dann $\exp$ als Potenzreihe schreiben:
   $$
   \begin{align*}
   \exp(h) &= 1 + \frac{h}{1} + \frac{h^2}{2!} + \frac{h^3}{3!} + \cdots\\
    \exp(h) - 1 &= \frac{h}{1} + \frac{h^2}{2!} + \frac{h^3}{3!} + \cdots\\
   \end{align*}
   $$

   Damit die Ableitung $\exp'(x_0) = \displaystyle\lim_{h \to 0} \frac{\exp(x_0+h) - \exp(x_0)}{h}$ existiert, müssen wir zeigen, dass der Limes von $\frac{\exp(h) - 1}{h}$ existiert.

    Wir haben:
   $$
    \begin{align*}
    \frac{\exp(x_0+h) - \exp(x_0)}{h} &= \frac{\exp(x_0) \left( \exp(h) - 1 \right)}{h}\\
    &= \exp(x_0) \cdot \frac{\exp(h) - 1}{h}
    \end{align*}
   $$

   Dann haben wir:
   $$
   \begin{align*}
   \frac{\exp(h) - 1}{h} &= 1 + \frac{h}{2!} + \frac{h^2}{3!} + \cdots\\
   \left| \frac{\exp(h) - 1}{h} - 1 \right| &= |h| \left( \frac{1}{2!} + \frac{|h|}{3!} + \cdots \right)\\
   &≤ |h| \left( 1 + |h| + \frac{|h|^2}{2!} + \cdots \right)\\
   &= |h| \cdot \underbrace{\exp(|h|)}_{≥1}\\
   \end{align*}
   $$
   
   Als $h \to 0$ folgt, dass $\displaystyle\left| \frac{\exp(h) - 1}{h} - 1 \right| \to 0$.

   Und somit folgt, dass $\displaystyle\frac{\exp(h) - 1}{h} \to 1$.

    Also ist die Ableitung von $\exp$ in $x_0$ gegeben durch:
   $$
   \begin{align*}
    \exp'(x_0) &= \lim_{h \to 0} \frac{\exp(x_0+h) - \exp(x_0)}{h}\\
    &= \exp(x_0) \cdot \underbrace{\lim_{h \to 0} \frac{\exp(h) - 1}{h}}_{1}\\
   \implies \exp'(x_0) &= \exp(x_0)
    \end{align*}
   $$

2) $\sin ^ { \prime } = \cos$ und $\cos ^ { \prime } = - \sin$

   Aus dem Additionsgesetz für Sinus folgt:

   $$
   \begin{align*}
    \sin'(x_0) &= \lim_{h\to0}\frac{\sin( x _ { 0 } + h ) - \sin(x_0)}{h}\\
    &= \lim_{h\to0}\frac{\sin(x_0) \cos(h) + \cos(x_0) \sin(h) - \sin(x_0)}{h}\\
    &= \lim_{h\to0}\frac{\sin(x_0)(\cos(h) - 1) + \cos(x_0) \sin(h)}{h}\\
    &= \lim_{h\to0} \left(\sin(x_0)\frac{\cos(h) - 1}{h} + \cos(x_0)\frac{\sin(h)}{h}\right)\\
   \end{align*}
   $$

   In Beispiel 3.10.5 hatten wir gezeigt:
   
   $$
   \lim _ { h \to 0 } { \frac { \sin ( h ) } { h } } = 1 .
   $$
   
   Aus der Definition von $\cos$:
   
   $$
   \cos ( h ) = 1 - \frac { h ^ { 2 } } { 2 ! } + \frac { h ^ { 4 } } { 4 ! } + \cdot \cdot \cdot
   $$
   
   sieht man, analog wie im Fall von $\exp$, dass:
   
   $$
   \lim _ { h \to 0 } { \frac { \cos ( h ) - 1 } { h } } = 0 .
   $$
   
   Es folgt:
   
   $$
   \sin ^ { \prime } ( x _ { 0 } ) = \lim _ { h \to 0 } { \frac { \sin ( x _ { 0 } + h ) - \sin ( x _ { 0 } ) } { h } } = \cos ( x _ { 0 } )
   $$
   
   Ein analoges Argument ergibt:
   
   $$
   \cos ^ { \prime } = - \sin .
   $$
:::

Um die Ableitung von Polynomen, Logarithmus und inversen Funktionen zu bestimmen, stellen wir nun allgemeine “Rechenregeln” für Ableitungen von Summen, Produkten, Quotienten und Verknüpfungen von Funktionen zusammen.

::: proposition Satz 4.1.9.{#satz-4-1-9}
Sei $D \subset ℝ$ , $x _ { 0 } \in D$ ein Häufungspunkt von $\boldsymbol { D }$ und $f , g : D \to ℝ$ in $x _ { 0 }$ differenzierbar. Dann gelten:

1) $f + g$ ist in $x _ { 0 }$ differenzierbar und $\left( f + g \right) ^ { \prime } ( x _ { 0 } ) = f ^ { \prime } ( x _ { 0 } ) + g ^ { \prime } ( x _ { 0 } )$

2) $f \cdot g$ ist in $x _ { 0 }$ differenzierbar und $( f \cdot g ) ^ { \prime } ( x _ { 0 } ) = f ^ { \prime } ( x _ { 0 } ) g ( x _ { 0 } ) + f ( x _ { 0 } ) g ^ { \prime } ( x _ { 0 } )$

3) Falls $g ( x _ { 0 } ) \neq 0$ ist $\frac { f } { g }$ in $x _ { 0 }$ differenzierbar und $\displaystyle\left( { \frac { f } { g } } \right) ^ { \prime } ( x _ { 0 } ) = { \frac { f ^ { \prime } ( x _ { 0 } ) g ( x _ { 0 } ) - f ( x _ { 0 } ) g ^ { \prime } ( x _ { 0 } ) } { g ( x _ { 0 } ) ^ { 2 } } }$

{.numbered}

**Beweis:**<br>
Seien (Satz 4.1.4) $\phi , \psi : D \to ℝ$ stetig in $x _ { 0 }$ mit

$$
\begin{align*}
\tag{a} f ( x ) &= f ( x _ { 0 } ) + \phi ( x ) ( x - x _ { 0 } )\\
\tag{b} g ( x ) &= g ( x _ { 0 } ) + \psi ( x ) ( x - x _ { 0 } )
\end{align*}
$$

**Zu (1)**: Die Summe der Identitäten $( a )$ und $( b )$ ergibt:

$$
\left( f + g \right) ( x ) = \left( f + g \right) ( x _ { 0 } ) + \left( \phi ( x ) + \psi ( x ) \right) ( x - x _ { 0 } ) .
$$

Da $\phi + \psi$ in $x _ { 0 }$ stetig ist folgt, dass $f + g$ in $x _ { 0 }$ differenzierbar ist und

$$
\left( f + g \right) ^ { \prime } ( x _ { 0 } ) = \phi ( x _ { 0 } ) + \psi ( x _ { 0 } ) = f ^ { \prime } ( x _ { 0 } ) + g ^ { \prime } ( x _ { 0 } )
$$

**Zu (2)**: Das Produkt der Identitäten $( a )$ und $( b )$ ergibt:

$$
\begin{array} { r } { \left( f \cdot g \right) \left( x \right) = \left( f \cdot g \right) \left( x _ { 0 } \right) + \left( f ( x _ { 0 } ) \psi ( x ) + g ( x _ { 0 } ) \phi ( x ) + \phi ( x ) \psi ( x ) ( x - x _ { 0 } ) \right) \left( x - x _ { 0 } \right) } \end{array}
$$

Sei

$$
\xi ( x ) : = f ( x _ { 0 } ) \psi ( x ) + g ( x _ { 0 } ) \phi ( x ) + \phi ( x ) \psi ( x ) ( x - x _ { 0 } ) .
$$

Dann ist $\xi$ stetig in $x _ { 0 }$ , folglich gilt:

$$
( f \cdot g ) ^ { \prime } ( x _ { 0 } ) = \xi ( x _ { 0 } ) = f ( x _ { 0 } ) g ^ { \prime } ( x _ { 0 } ) + g ( x _ { 0 } ) f ^ { \prime } ( x _ { 0 } )
$$

**Zu (3)**: Da $g$ in $x _ { 0 }$ stetig ist ([Korollar 4.1.5](#korollar-4-1-5)) gibt es $\delta > 0$ so dass

$$
g ( x ) \neq 0 \qquad \forall x \in (x _ { 0 } - \delta , x _ { 0 } + \delta) \cap D .
$$

Für diese $x$ betrachten wir:

$$
\begin{align*}
\frac { f } { g } ( x ) - \frac { f } { g } ( x _ { 0 } ) &= \frac { f ( x ) g ( x _ { 0 } ) - f ( x _ { 0 } ) g ( x ) } { g ( x ) g ( x _ { 0 } ) }\\
&= \frac { f ( x _ { 0 } ) + \phi ( x ) ( x - x _ { 0 } ) } { g ( x _ { 0 } ) + \psi ( x ) ( x - x _ { 0 } ) } - \frac { f ( x _ { 0 } ) } { g ( x _ { 0 } ) }\\
&= \frac { \left(\phi(x)g(x_0) - \psi(x)f(x_0)\right)(x - x_0)}{\left(g(x_0) + \psi(x)(x - x_0)\right)g(x_0)}\\
\end{align*}
$$

Sei $\forall x \in \left(x _ { 0 } - \delta , x _ { 0 } + \delta\right) \cap D$ :

$$
\eta ( x ) : = { \frac { \phi ( x ) g ( x _ { 0 } ) - \psi ( x ) f ( x _ { 0 } ) } { g ( x ) g ( x _ { 0 } ) } }
$$

Dann ist $\eta : (x _ { 0 } - \delta , x _ { 0 } + \delta) \cap D \to ℝ$ stetig in $x _ { 0 }$ und folglich:

$$
\left( { \frac { f } { g } } \right) ^ { \prime } ( x _ { 0 } ) = \eta ( x _ { 0 } ) = { \frac { f ^ { \prime } ( x _ { 0 } ) g ( x _ { 0 } ) - g ^ { \prime } ( x _ { 0 } ) f ( x _ { 0 } ) } { g ( x _ { 0 } ) ^ { 2 } } } .
$$
:::

::: example Beispiel 4.1.10.{#beispiel-4-1-10}
1) $n ≥ 1 : \quad ( x ^ { n } ) ^ { \prime } = n x ^ { n - 1 } \quad \forall x \in ℝ .$

2) Die Tangensfunktion $\displaystyle\tan( x) = { \frac { \sin (x) } { \cos (x) } }$, $x ≠  \frac { \pi } { 2 } + \pi\cdot ℤ$
   
   ist auf ihrem Definitionsbereich differenzierbar und ihre Ableitung ist gegeben durch
   
   $$
   \tan ^ { \prime } ( x ) = { \frac { 1 } { \cos ^ { 2 } ( x ) } } .
   $$

3) Die Cotangensfunktion $\displaystyle\cot( x) = { \frac { \cos (x) } { \sin (x) } }$, $x ≠ \pi \cdotℤ$
   
   ist auf ihrem Definitionsbereich differenzierbar und ihre Ableitung ist gegeben durch
   
   $$
   \cot ^ { \prime } ( x ) = - { \frac { 1 } { \sin ^ { 2 } ( x ) } } .
   $$

{.numbered}

**Beweis:**
1) (Induktion) Für $n = 1$ ist es [Beispiel 4.1.6(2)](#beispiel-4-1-6). Sei $n ≥ 2$ ; wir nehmen an

   $$
   \left( x ^ { n - 1 } \right) ^ { \prime } = \left( n - 1 \right) x ^ { n - 2 } .
   $$
   
   Dann folgt auf $x ^ { n } = x \cdot x ^ { n - 1 }$ mit 4.1.9(2):
   
   $$
   \begin{align*}
   ( x ^ { n } ) ^ { \prime } &= \left( x \cdot x ^ { n - 1 } \right) ^ { \prime }\\
    \tag{Produktregel}&= x ^ { \prime } ( x ^ { n - 1 } ) + x ( x ^ { n - 1 } ) ^ { \prime }\\
    &= 1 \cdot x ^ { n - 1 } + x \left( ( n - 1 ) x ^ { n - 2 } \right)\\
    &= x ^ { n - 1 } + ( n - 1 ) x ^ { n - 1 }\\
    &= n x ^ { n - 1 } .
    \end{align*}
   $$

2) Aus [Satz 4.1.9(3)](#satz-4-1-9) folgt, dass $\tan$ in ihrem Definitionsbereich differenzierbar ist. Wir zeigen die Ableitung:

   $$
   \begin{align*}
    \tan ^ { \prime } ( x ) &= \left( { \frac { \sin ( x ) } { \cos ( x ) } } \right) ^ { \prime }\\
     &= { \frac { \sin ^ { \prime } ( x ) \cos ( x ) - \sin ( x ) \cos ^ { \prime } ( x ) } { \cos ^ { 2 } ( x ) } }\\
     &= { \frac { \cos ( x ) \cos ( x ) + \sin ( x ) \sin ( x ) } { \cos ^ { 2 } ( x ) } }\\
     &= { \frac { 1 } { \cos ^ { 2 } ( x ) } }
    \end{align*}
   $$
   
   wobei im zweitletzten Schritt [Beispiel 4.1.8(2)](#beispiel-4-1-8) verwendet wurde.

3) Analoges Argument wie in (2).

{.numbered}
:::

Das nächste Resultat zeigt wie man die Ableitung einer Vernknüpfung von Funktionen berechnet.

::: proposition Satz 4.1.11. Kettenregel{#satz-4-1-11}
Seien $D , E \subset ℝ$ und sei $x _ { 0 } \in D$ ein Häufungspunkt. Sei $f : D \to E$ eine in $x _ { 0 }$ differenzierbare Funktion so dass $y _ { 0 } : = f ( x _ { 0 } )$ ein Häufungspunkt von $E$ ist, und sei $g : E \to ℝ$ eine in $y _ { 0 }$ differenzierbare Funktion. Dann ist $g \circ f : D \to ℝ$ in $x _ { 0 }$ differenzierbar und

$$
\left( g \circ f \right) ^ { \prime } ( x _ { 0 } ) = g ^ { \prime } \left( f ( x _ { 0 } ) \right) f ^ { \prime } ( x _ { 0 } ) .
$$

**Beweis:**<br>
Nach [Satz 4.1.4](#satz-4-1-4) seien $\phi : D \to ℝ$ und $\psi : E \to ℝ$ in $x _ { 0 }$ respektive in $y _ { 0 } = f ( x _ { 0 } )$ stetig, so dass

$$
\begin{align*}
f ( x ) &= f ( x _ { 0 } ) + \phi ( x ) ( x - x _ { 0 } ) \qquad \forall x \in D\\
g ( y ) &= g ( y _ { 0 } ) + \psi ( y ) ( y - y _ { 0 } ) \qquad \forall y \in E .
\end{align*}
$$

Mit $y = f ( x )$ und $y _ { 0 } = f ( x _ { 0 } )$ erhalten wir

$$
( f ( x ) ) = g \left( f ( x _ { 0 } ) \right) + \psi \left( f ( x ) \right) ) \left( f ( x ) - f ( x _ { 0 } ) \right) = g \left( f ( x _ { 0 } ) \right) + \psi \left( f ( x ) \right) \phi ( x ) ( x - x _ { 0 } ) .
$$

Da $f$ in $x _ { 0 }$ differenzierbar ist, ist sie nach [Korollar 4.1.5](#korollar-4-1-5) stetig, somit ist $\psi \circ f$ in $x _ { 0 }$ stetig ([Satz 3.5.1](/3-stetige-funktionen#satz-3-5-1)) und nach [Korollar 3.2.5(1)](/3-stetige-funktionen#korollar-3-2-5) ist $x \longmapsto \psi \left( f ( x ) \right) \phi ( x )$ stetig in $x _ { 0 }$ . Somit ist nach [Satz 4.1.4](#satz-4-1-4) $g \circ f$ differenzierbar in $x _ { 0 }$ und

$$
( g \circ f ) ^ { \prime } ( x _ { 0 } ) = \psi ( f ( x _ { 0 } ) ) \phi ( x _ { 0 } ) = g ^ { \prime } ( f ( x _ { 0 } ) ) f ^ { \prime } ( x _ { 0 } ) .
$$
:::

::: example Beispiele aus der Vorlesung
1. $h = \exp(x^3+\sin(x))$

   $g=\exp$, $f=x^3+\sin(x)$, $h=(f \circ g)$.

   $$
    \begin{align*}
    h'(x) &= g'(f(x)) \cdot f'(x)\\
    &= \exp(f(x)) \cdot (3x^2+\cos(x))\\
    &= \exp(x^3+\sin(x)) \cdot (3x^2+\cos(x))
    \end{align*}
    $$
2. $f = (17x^7 + x^5 + 2 + e^x)^{2025}$

   $f' = (2025)(17x^7 + x^5 + 2 + e^x)^{2024} \cdot (119x^6 + 5x^4 + e^x)$
:::

::: proposition Korollar 4.1.12.{#korollar-4-1-12}
Sei $f : D \to E$ eine bijektive Funktion, $x _ { 0 } \in D$ Häufungspunkt; wir nehmen an $f$ ist in $x _ { 0 }$ differenzierbar und $f ^ { \prime } ( x _ { 0 } ) \neq 0$ ; zudem nehmen wir an $f ^ { - 1 }$ ist in $y _ { 0 } = f ( x _ { 0 } )$ stetig. Dann ist $y _ { 0 }$ Häufungspunkt von $E$ , $f ^ { - 1 }$ ist in $y _ { 0 }$ differenzierbar und

$$
\left( f ^ { - 1 } \right) ^ { \prime } ( y _ { 0 } ) = { \frac { 1 } { f ^ { \prime } ( x _ { 0 } ) } } .
$$

**Beweis:**<br>
Sei $\left( a _ { n } \right) _ { n ≥ 1 }$ eine Folge in $D$ mit

$$
a _ { n } \neq x _ { 0 } \forall n ≥ 1 \quad { \mathrm { u n d } } \quad \lim _ { n \to \infty } a _ { n } = x _ { 0 } .
$$

Dann folgt aus der Stetigkeit von $f$ in $x _ { 0 }$ (Korollar 4.1.5), dass

$$
\lim _ { n \to \infty } f ( a _ { n } ) = f ( x _ { 0 } ) = y _ { 0 }
$$

und da $f$ injektiv ist, folgt

$$
f ( a _ { n } ) \neq y _ { 0 } \qquad \forall n ≥ 1 ,
$$

woraus folgt, dass $y _ { 0 }$ ein Häufungspunkt von $E$ ist. Sei nun (Satz 4.1.4) $\phi : D \to ℝ$ in $x _ { 0 }$ stetig mit

$$
f ( x ) - f ( x _ { 0 } ) = \phi ( x ) ( x - x _ { 0 } ) , \phi ( x _ { 0 } ) = f ^ { \prime } ( x _ { 0 } ) .
$$

Wir ersetzen $x \ = \ f ^ { - 1 } ( y ) , x _ { 0 } \ = \ f ^ { - 1 } ( y _ { 0 } )$ , insbesondere $y \ = \ f ( x )$ , $y _ { 0 } ~ = ~ f ( x _ { 0 } )$ und erhalten:

$$
y - y _ { 0 } = \phi \left( f ^ { - 1 } ( y ) \right) \left( f ^ { - 1 } ( y ) - f ^ { - 1 } ( y _ { 0 } ) \right) .
$$

Da $\phi \circ f ^ { - 1 }$ in $y _ { 0 }$ stetig ist und $\phi \left( f ^ { - 1 } ( y _ { 0 } ) \right) = \phi ( x _ { 0 } ) = f ^ { \prime } ( x _ { 0 } ) \neq 0$ gibt es $\delta > 0$ so dass:

$$
\forall y \in (y _ { 0 } - \delta , y _ { 0 } + \delta) \cap E : \phi \circ f ^ { - 1 } ( y ) \neq 0 .
$$

Also folgt für dieselben $y$ ’s:

$$
f ^ { - 1 } ( y ) - f ^ { - 1 } ( y _ { 0 } ) = \frac { 1 } { \phi \left( f ^ { - 1 } ( y ) \right) } ( y - y _ { 0 } ) .
$$

Nach Korollar 3.2.5(2) ist $\frac { 1 } { \phi \left( f ^ { - 1 } ( y ) \right) }$ , definiert auf $(y _ { 0 } - \delta , y _ { 0 } + \delta) \cap E$ , stetig in $y _ { 0 }$ . Nach Satz 4.1.4 ist also $f ^ { - 1 }$ differenzierabr in $y _ { 0 }$ und

$$
\left( f ^ { - 1 } \right) ^ { \prime } ( y _ { 0 } ) = { \frac { 1 } { \phi \left( f ^ { - 1 } ( y _ { 0 } ) \right) } } = { \frac { 1 } { \phi ( x _ { 0 } ) } } = { \frac { 1 } { f ^ { \prime } ( x _ { 0 } ) } } .
$$
:::

::: example Beispiel 4.1.13.{#beispiel-4-1-13}
1) Die Ableitung von $\ln : (0 , + \infty) \to ℝ$, $x\mapsto\ln(x)$ ist $\ln ^ { \prime } ( x ) = { \frac { 1 } { x } }$
   
   Für alle $x \in ℝ$ gilt:
   
   $$
   \ln \left( \exp ( x ) \right) = x .
   $$
   
   Wir wenden [Satz 4.1.11](#satz-4-1-11) auf $f ( x ) = \exp { x }$ und $g ( y ) = \ln y$ an und erhalten durch Ableiten:
   
   $$
   \ln ^ { \prime } { ( \exp { x } ) } \exp'( x ) = 1 \qquad \forall x \in ℝ .
   $$
   
   Da nach [Beispiel 4.1.8(1)](#beispiel-4-1-8) $\exp ^ { \prime } ( x ) = \exp ( x )$ folgt
   
   $$
   \ln ^ { \prime } \left( \exp x \right) \exp x = 1 \qquad \forall x \in ℝ
   $$
   
   und da $\exp : ℝ \to (0 , \infty)$ bijektiv ist, folgt:
   
   $$
   \forall y \in \exists (0 , \infty) : \quad \ln ^ { \prime } ( y ) \cdot y = 1 .
   $$

   Somit folgt für alle $y > 0$:
    $$
    \ln ^ { \prime } ( y ) = { \frac { 1 } { y } } .
    $$

2) Sei $a \in ℝ$ ; die Ableitung der Funktion

   $$
   \begin{align*}
    f : (0 , + \infty) &\to ℝ\\
    x &\mapsto x^a
    \end{align*}
   $$
   
   ist $a x ^ { a - 1 }$ für alle $x > 0$.
   
   Per Definition: $x ^ { a } = \exp \left( a \ln x \right) , x > 0$ . Wir wenden [Satz 4.1.11](#satz-4-1-11) an auf $f ( x ) = a \ln x$, $g ( y ) = \exp y$ und erhalten mit $g ^ { \prime } ( y ) = \exp { y }$ und $f ^ { \prime } ( x ) = a \cdot { \frac { 1 } { x } }$ ,

   $$
    \begin{align*}
    \left( x ^ { a } \right) ^ { \prime } &= \left( \exp ( a \ln x ) \right) ^ { \prime }\\
    &= \exp ^ { \prime } ( a \ln x ) \cdot a \cdot { \frac { 1 } { x } }\\
    &= a \cdot \exp ( a \ln x ) \cdot { \frac { 1 } { x } }\\
    &= a \cdot x ^ { a } \cdot  { \frac { 1 } { x } }\\
    &= a x ^ { a - 1 }
    \end{align*}
   $$

3) $f : ℝ \to ℝ , x \longmapsto x ^ { 3 }$ ist bijektiv in $ℝ$ differenzierbar. Aber $f ^ { - 1 }$ ist in 0 nicht differenzierbar. (Vergleiche mit [Korollar 4.1.12](#korollar-4-1-12).)

4) Sei $g(x) = \sqrt[3]{x} = x^{\frac{1}{3}}$, dann ist $g'(x)=\frac{1}{3}x^{\frac{1}{3} -  1} = \frac{1}{3\sqrt[3]{x^2}}$ für alle $x \neq 0$.

   ist in Punkt $0$ nicht definiert.
:::

## 4.2. Zentrale Sätze über die (erste) Ableitung

Informationen über die erste Ableitung $f ^ { \prime }$ einer differenzierbaren Funktion, wie zum Beispiel Vorzeichen und Nullstellen, erlauben über das qualitative Verhalten der Funktion $f$ recht präzise Schlüsse zu ziehen. Begriffe wie monoton steigend und fallend haben wir in 3.1 eingeführt. Dazu kommen noch:

::: definition Definition 4.2.1.{#definition-4-2-1}
Sei $f : D \to ℝ , D \subset ℝ$ und $x _ { 0 } \in D$.

1) $f$ besitzt ein lokales Maximum in $x _ { 0 }$ falls es $\delta > 0$ gibt mit:

   $$
   f ( x ) ≤ f ( x _ { 0 } ) \qquad \forall x \in (x _ { 0 } - \delta , x _ { 0 } + \delta) \cup D
   $$

2) $f$ besitzt ein lokales Minimum in $x _ { 0 }$ falls es $\delta > 0$ gibt mit:

   $$
   f ( x ) ≥ f ( x _ { 0 } ) \qquad \forall x \in \ \left(x _ { 0 } - \delta , x _ { 0 } + \delta \right) \cap D
   $$

3) $f$ besitzt ein lokales Extremum in $x _ { 0 }$ falls es entweder ein lokales Minimum oder Maximum von $f$ ist.

    <figure>
   
   ![](/images/bdc1c32bf497ffc3158c654c1eb1c160ecfc25ef879587d6baed895393ea15f0.png)

    <figcaption>

    $D = [ a , b ]$: $x_0$, $x_2$, $b$ sind lokale Maximalstellen und $a$, $x_1$, $x_3$ sind lokale Minimalstellen.   
   </figcaption>
   </figure>

:::

::: definition Definition Krisische Stelle.{#definition-krisische-stelle}
Eine **kritische Stelle** von $f$ ist ein Punkt $x _ { 0 } \in D$, an dem $f$ nicht definiert oder $f ^ { \prime } ( x _ { 0 } ) = 0$ ist.
:::

::: proposition Satz 4.2.2.{#satz-4-2-2}
Sei $f : (a , b) \to ℝ$ , $x _ { 0 } \in \left (a , b\right)$ . Wir nehmen an, $f$ ist in $x _ { 0 }$ differenzierbar.

1) Falls $f ^ { \prime } ( x _ { 0 } ) > 0$ gibt es $\delta > 0$ mit

    $$
    \begin{align*}
    f ( x ) > f ( x _ { 0 } ) \qquad &\forall x \in \left(x _ { 0 } , x _ { 0 } + \delta \right)\\
    f ( x ) < f ( x _ { 0 } ) \qquad &\forall x \in \left(x _ { 0 } - \delta , x _ { 0 }\right)
    \end{align*}
    $$

2) Falls $f ^ { \prime } ( x _ { 0 } ) < 0$ gibt es $\delta > 0$ mit

    $$
    \begin{align*}
    f ( x ) < f ( x _ { 0 } ) \qquad &\forall x \in \left(x _ { 0 } , x _ { 0 } + \delta \right)\\
    f ( x ) > f ( x _ { 0 } ) \qquad &\forall x \in \left(x _ { 0 } - \delta , x _ { 0 }\right)
    \end{align*}
    $$

3) Falls $f$ in $x _ { 0 }$ ein lokales Extremum besitzt, folgt $f ^ { \prime } ( x _ { 0 } ) = 0$ .

**Beweis**<br>
**Zu (1)**: Sei $f ( x ) = f ( x _ { 0 } ) + \phi ( x ) ( x - x _ { 0 } )$ wobei $\phi : (a , b) \to ℝ$ stetig in $x _ { 0 }$ ist und $\phi ( x _ { 0 } ) = f ^ { \prime } ( x _ { 0 } ) > 0$ . Da $\phi$ in $x _ { 0 }$ stetig ist und $\phi ( x _ { 0 } ) > 0$ gibt es $\delta > 0$ mit $\phi ( x ) > 0$ $\forall x \in \exists (x _ { 0 } - \delta , x _ { 0 } + \delta)$ . Dann folgt für $x \in \left(x _ { 0 } , x _ { 0 } + \delta \right)$:

$$
f ( x ) = f ( x _ { 0 } ) + \underbrace { \phi ( x )} _ { > 0 } \underbrace { ( x - x _ { 0 } ) } _ { > 0 } > f ( x _ { 0 } )
$$

und für $x \in \left(x _ { 0 } - \delta , x _ { 0 } \right)$ :

$$
\begin{array} { r } { f ( x ) = f ( x _ { 0 } ) + \underbrace { \phi ( x )} _ { > 0 } \underbrace { ( x - x _ { 0 } ) } _ { < 0 } < f ( x _ { 0 } ) . } \end{array}
$$

**Zu (2)**: Beweis analog; alternativ kann man (1) auf $- f$ anwenden.

**Zu (3)**: Falls $f$ in $x _ { 0 }$ ein lokales Extremum besitzt, dann kann wegen (1) und (2) weder $f ^ { \prime } ( x _ { 0 } ) > 0$ noch $f ^ { \prime } ( x _ { 0 } ) < 0$ gelten, also folgt $f ^ { \prime } ( x _ { 0 } ) = 0$. <span class="right">$\Box$</span>
:::

Der nächste Satz lässt sich bildlich wie folgt darstellen:

![](/images/e9680537c9d58d8f6353bd32767f5447603884c49f53e677fbc60f9aa63c8bea.png)

::: proposition Satz 4.2.3 (Rolle 1690){#satz-4-2-3}
Sei $f : [ a , b ] \to ℝ$ stetig und in $(a , b)$ differenzierbar. Erfüllt sie $f ( a ) = f ( b )$ so gibt es $\xi \in (a , b)$ mit $f ^ { \prime } ( \xi ) = 0 .$

**Beweis:**<br>
Aus dem Min-Max Theorem folgt, dass es $u$, $v$ in $[ a , b ]$ gibt mit

$$
f ( u ) ≤ f ( x ) ≤ f ( v ) \qquad \forall x \in [ a , b ] .
$$

Falls eines der beiden $u$ , $v$ in $(a , b)$ liegt, nennen wir es $\xi$ . Dann hat $f$ in $\xi$ ein lokales Extremum und dann folgt aus [Satz 4.2.2(3)](#satz-4-2-2), dass $f ^ { \prime } ( \xi ) = 0$ und der Satz ist bewiesen.

Falls aber $\{ u , v \} \subset \{ a , b \}$ folgt $f(a) = f(u) = f(v) = f(b)$ und somit ist $f$ konstant, insbesondere folgt $f ^ { \prime } ( \xi ) = 0\quad \forall \xi \in (a , b)$. <span class="right">$\Box$</span>
:::

Der folgende Satz ist eine naheliegende Verallgemeinerung des Satzes von Rolle und kann geometrisch wie folgt dargestellt werden:

![](/images/fab9f6ca2c49fee86bccada26109f77c5ffc70fd5139d26941bb1f5f07b3acdd.png)

::: proposition Satz 4.2.4. Mittelwertsatz (Lagrange 1797){#satz-4-2-4}
Sei $f : (a , b) \to ℝ$ stetig mit $f$ in $(a , b)$ differenzierbar. Dann gibt es $\xi \in (a , b)$ mit

$$
f ( b ) - f ( a ) = f ^ { \prime } ( \xi ) ( b - a ) .
$$

**Beweis**.<br>
Sei

$$
g ( x ) = ( x - a ) \left( { \frac { f ( b ) - f ( a ) } { b - a } } \right) + f ( a )
$$

die Gleichung der Geraden durch $( a , f ( a ) )$ und $( b , f ( b ) ) .$ Dann ist klar, dass

$$
h ( x ) : = f ( x ) - g ( x )
$$

die Voraussetzungen des Satzes von Rolle erfüllen ($h ( a ) = h ( b ) = 0$). Es gibt also $\xi \in (a , b)$ mit

$$
0 = h ^ { \prime } ( \xi ) = f ^ { \prime } ( \xi ) - g ^ { \prime } ( \xi ) .
$$

Da $\forall x \in (a , b)$ gilt: $g ^ { \prime } ( x ) = { \displaystyle\frac { f ( b ) - f ( a ) } { b - a } }$

Ist der Satz bewiesen. <span class="right">$\Box$</span>
:::

Das folgende Korollar beschreibt, wie angekündigt, das qualitative Verhalten von $f$ mittels des Vorzeichens von $f ^ { \prime }$ .

::: proposition Korollar 4.2.5.{#korollar-4-2-5}
Seien $f , g : [a,b] \to ℝ$ stetig und in $(a,b)$ differenzierbar.

1) Falls $f ^ { \prime } ( \xi ) = 0\qquad \forall \xi \in \ (a,b)$ ist $f$ konstant.
2) Falls $f ^ { \prime } ( \xi ) = g'(\xi)~~ \forall \xi \in \ (a,b)$ gibt es $c \in ℝ$ mit $f ( x ) = g(x) + c \quad \forall x \in [ a , b ]$.
3) Falls $f ^ { \prime } ( \xi ) ≥ 0\qquad \forall \xi \in \ (a,b)$ ist $f$ auf $[ a , b ]$ monoton wachsend.   
4) Falls $f ^ { \prime } ( \xi ) > 0\qquad\forall \xi \in \ (a,b)$ ist $f$ auf $[ a , b ]$ strikt monoton wachsend.   
5) Falls $f ^ { \prime } ( \xi ) ≤ 0\qquad\forall \xi \in \ (a,b)$ ist $f$ auf $[ a , b ]$ monoton fallend.   
6) Falls $f ^ { \prime } ( \xi ) < 0\qquad\forall \xi \in \ (a,b)$ ist $f$ auf $[ a , b ]$ strikt monoton fallend.   
7) (Lipschitz-stetige Funktion) Falls es $M ≥ 0$ gibt mit

    $$
    \left| f ^ { \prime } ( \xi ) \right| ≤ M \qquad \forall \xi \in \ \ (a,b)
    $$
    
    dann folgt $\forall x _ { 1 } , x _ { 2 } \in [ a , b ]$ :
    
    $$
    \left| f ( x _ { 1 } ) - f ( x _ { 2 } ) \right| ≤ M \left| x _ { 1 } - x _ { 2 } \right| .
    $$

{.numbered}

**Beweis:**
1) Wende den [Mittelwertsatz](#satz-4-2-4) auf das Intervall $[a , x]$ an, wobei $a <x ≤ b$. Dann gibt es $\xi \in (a , x)$ mit:

    $$
    f ( x ) - f ( a ) = f ^ { \prime } ( \xi ) ( x - a ) = 0
    $$
    
    woraus $f ( x ) = f ( a )$ für alle $x \in \left[ a , b \right]$ folgt.

2) Folgt aus (1) angewendet auf $f - g$.   
3) Seien $a ≤ x _ { 1 } < x _ { 2 } ≤ b$. Nach dem [Mittelwertsatz](#satz-4-2-4) angewandt auf $[x _ { 1 } , x _ { 2 }]$ liefert ein $\xi \in \left(x _ { 1 } , x _ { 2 }\right)$ mit:

    $$
    f ( x _ { 2 } ) - f ( x _ { 1 } ) = f ^ { \prime } ( \xi ) ( x _ { 2 } - x _ { 1 } )
    $$

    wobei $f ^ { \prime } ( \xi ) ≥ 0 , f ( x _ { 2 } ) ≥ f ( x _ { 1 } )$ folgt
4) Analoges Argument wie in (3), aber $f ^ { \prime } ( \xi ) > 0 , ~ f ( x _ { 2 } ) > f ( x _ { 1 } )$.
5) folgt aus (3) angewandt auf $- f$.
6) folgt aus (4) angewandt auf $- f$.
7) Seien $a ≤ x _ { 1 } < x _ { 2 } ≤ b$ und $\xi \in \left( x _ { 1 } , x _ { 2 } \right)$ mit

    $$
    f ( x _ { 2 } ) - f ( x _ { 1 } ) = f ^ { \prime } ( \xi ) ( x _ { 2 } - x _ { 1 } ) .
    $$
    
    Dann folgt $\left| f ( x _ { 2 } ) - f ( x _ { 1 } ) \right| ≤ M \left| x _ { 2 } - x _ { 1 } \right|$. <span class="right">$\Box$</span>

{.numbered}
:::

::: example Beispiel 4.2.6. (trigonometrische Funktionen){#beispiel-4-2-6}
1) **arcsin**: Da $\sin' = \cos$ ([Beispiel 4.1.8(2)](#beispiel-4-1-8)) und $\cos ( x ) > 0\quad \forall x \in \left(- \frac { \pi } { 2 } , \frac { \pi } { 2 } \right)$ ([Korollar 3.9.3(6)](/3-stetige-funktionen#korollar-3-9-3)) folgt aus [Korollar 4.2.5(4)](#korollar-4-2-5), dass die Sinusfunktion auf $\left[- { \frac { \pi } { 2 } } , { \frac { \pi } { 2 } } \right]$ strikt monoton wachsend ist, also ist

    $$
    \sin : \left[ - \frac { \pi } { 2 } , \frac { \pi } { 2 } \right] \to [ - 1 , 1 ]
    $$
    
    bijektiv. Wir definieren
    
    $$
    \arcsin : [ - 1 , 1 ] \to \left[ - { \frac { \pi } { 2 } } , { \frac { \pi } { 2 } } \right]
    $$
    
    als die Umkehrfunktion von $\sin$. Nach [Korollar 4.1.12](#korollar-4-1-12) ist sie auf $(- 1 , 1)$ differenzierbar und für $y = \sin(x)$, mit $x \in (- \frac { \pi } { 2 }, \frac { \pi } { 2 })$ folgt:
    
    $$
    \arcsin ^ { \prime } ( y ) = { \frac { 1 } { \sin ^ { \prime } ( x ) } } = { \frac { 1 } { \cos x } }
    $$
    
    Nun benützen wir:
    
    $$
    y ^ { 2 } = \sin^2 (x) = 1 - \cos^2 (x)
    $$
    
    woraus mit $\cos (x) > 0$ folgt:
    
    $$
    \cos x = { \sqrt { 1 - y ^ { 2 } } }
    $$
    
    Wir erhalten also $\forall y \in \left( - 1 , 1 \right)$
    
    $$
    \arcsin ^ { \prime } ( y ) = { \frac { 1 } { \sqrt { 1 - y ^ { 2 } } } }
    $$

2) **arccos**: Eine analoge Diskussion wie in (1) zeigt, dass $\cos : [0 , \pi] \to  [- 1 , 1]$ strikt monoton fallend ist, und $[0 , \pi]$ auf $[ - 1 , 1 ]$ bijektiv abbildet. Sei:

    $$
    \arccos : [ - 1 , 1 ] \to [ 0 , \pi ]
    $$
    
    die Umkehrfunktion. Sie ist auf $(- 1 , 1)$ differenzierbar und:
    
    $$
    \arccos ^ { \prime } ( y ) = { \frac { - 1 } { \sqrt { 1 - y ^ { 2 } } } } \qquad \forall y \in (- 1 , 1)
    $$

3) **arctan**: Für $x \not \in { \frac { \pi } { 2 } } + \pi \cdot ℤ$ hatten wir die Tangensfunktion definiert:

    $$
    \tan( x) = { \frac { \sin (x) } { \cos (x) } }
    $$
    
    und in [Beispiel 4.1.10(2)](#beispiel-4-1-10) deren Ableitung berechnet:
    
    $$
    \tan ^ { \prime } x = { \frac { 1 } { \cos ^ { 2 }( x) } }
    $$
    
    Also ist tan auf $(- \frac { \pi } { 2 } , \frac { \pi } { 2 })$ streng monoton wachsend mit
    
    $$
    \lim _ { x \to \frac { \pi } { 2 } ^ { - } } \tan (x) = + \infty , \qquad \lim _ { x \to - \frac { \pi } { 2 } ^ { + } } \tan (x) = - \infty .
    $$
    
    Also ist $\tan : (- \frac { \pi } { 2 } , \frac { \pi } { 2 }) \to (- \infty , \infty)$ bijektiv. Sei
    
    $$
    \arctan : (- \infty , \infty) \to (- \frac { \pi } { 2 } , \frac { \pi } { 2 })
    $$
    
    die Umkehrfunktion. Dann ist $\arctan$ differenzierbar und für $y = \tan( x)$
    
    $$
    \arctan ^ { \prime } ( y ) = \cos ^ { 2 }( x) = { \frac { 1 } { 1 + y ^ { 2 } } }
    $$
    
    ![](/images/59a010ec0609516253feacde2c215c8e2784c241f9466508d3cd12d1c0cd6303.png)

4) **arccot**: Für $x \notin \pi \cdot ℤ$ hatten wir die Cotangensfunktion definiert:

    $$
    \cot (x) = { \frac { \cos (x) } { \sin (x) } }
    $$
    
    und in [Beispiel 4.1.10(2)](#beispiel-4-1-10) deren Ableitung berechnet:
    
    $$
    \cot ^ { \prime } ( x ) = - { \frac { 1 } { \sin ^ { 2 } (x) } }
    $$
    
    Die Cotangensfunktion ist auf $(0 , \pi)$ streng monoton fallend und bildet $(0 , \pi)$ bijektiv auf $(- \infty , \infty)$ ab. Sei:
    
    $$
    \operatorname{arccot} (- \infty , \infty) \to (0 , \pi)
    $$
    
    die Umkehrfunktion. Dann folgt:
    
    $$
    \operatorname{arccot} ^ { \prime } ( y ) = - { \frac { 1 } { 1 + y ^ { 2 } } },\quad y \in \left( - \infty , \infty \right)
    $$

{.numbered}
:::

::: example Beispiel 4.2.7. (Hyperbel und Areafunktionen){#beispiel-4-2-7}

Als Hyperbelfunktionen bezeichnet man die Funktionen $\operatorname { c o s h } x$ , $\sinh x$ , $\operatorname { t a n h } x$ definiert $\forall x \in ℝ$:

$$
\begin{align*}
\cosh(x) &= \frac { e ^ { x } + e ^ { - x } } { 2 } & & ℝ \to [ 1 , + \infty )\\
\sinh(x) &= \frac { e ^ { x } - e ^ { - x } } { 2 } & & ℝ \to ℝ\\
\tanh ( x ) &= \frac { \sinh ( x ) } { \cosh ( x ) } = \frac { e ^ { x } - e ^ { - x } } { e ^ { x } + e ^ { - x } } & &ℝ \to (- 1 , 1)
\end{align*}
$$

Es gilt offensichtlich:

$$
\begin{array} { l } { \displaystyle \cosh ^ { \prime } ( x ) = \frac { e ^ { x } - e ^ { - x } } { 2 } = \sinh x } \\ { \displaystyle \sinh ^ { \prime } ( x ) = \frac { e ^ { x } + e ^ { - x } } { 2 } = \cosh x } \end{array}
$$

Offensichtlich gilt $\cosh (x) ≥ 1 \quad\forall x \in ℝ$, $\sinh (x) ≥ 0\quad\forall x \in \ \left(0 , + \infty \right)$, $\sinh ( 0 ) =  0$. Daraus folgt: $\cosh$ ist auf $[0 , \infty)$ strikt monoton wachsend, $\cosh ( 0 ) = 1$ und $\displaystyle\lim _ { x \to + \infty } { \cosh ( x ) } = + \infty$. Also ist

$$\cosh : [ 0 , \infty ) \to [ 1 , \infty)$$

bijektiv. Deren Umkehrfunktion wird mit

$$
\operatorname{arccosh}: \left[ 1 , \infty \right) \to \left[ 0 , \infty \right)
$$

bezeichnet. Unter Benützung von

$$
\cosh ^ { 2 } ( x ) - \sinh ^ { 2 } ( x ) = 1 \qquad \forall x \in ℝ
$$

folgt:

$$
\operatorname{arccosh} ^ { \prime } ( y ) = \frac { 1 } { \sqrt { y ^ { 2 } - 1 } } \qquad \forall y \in (1 , + \infty)
$$

Analog zeigt man, dass:

$$\sinh : ℝ \to ℝ$$

streng monoton wachsend und bijektiv ist. Dessen Umkehrfunktion wird mit

$$\operatorname { a r s i n h } : ℝ \to ℝ$$

bezeichnet und es gilt:

$$
\operatorname { a r s i n h } ^ { \prime } ( y ) = { \frac { 1 } { \sqrt { 1 + y ^ { 2 } } } } \qquad \forall y \in ℝ .
$$

Für $\operatorname { t a n h } ( x )$ folgt:

$$
\operatorname { t a n h } ^ { \prime } ( x ) = \frac { 1 } { \cosh ^ { 2 } ( x ) } = 1-\tanh^2(x) > 0 .
$$

Also ist $\operatorname { t a n h }$ auf $ℝ$ streng monoton wachsend und man zeigt, dass

$$
\begin{align*}
\lim _ { x \to + \infty } \operatorname { t a n h } ( x ) &= 1\\
\lim _ { x \to - \infty } \operatorname { t a n h } ( x ) &= - 1
\end{align*}
$$

Die Funktion $\operatorname { t a n h } : ℝ \to (- 1 , 1)$ ist bijektiv. Ihre Umkehrfunktion wird mit

$$
\operatorname {arctanh} : (- 1 , 1) \to ℝ
$$

bezeichnet. Es gilt dann:

$$
\operatorname {arctanh} ^ { \prime } ( y ) = { \frac { 1 } { 1 - y ^ { 2 } } } \qquad \forall y \in \left( - 1 , 1 \right)
$$
:::

::: example Anwendung 4.2.8.{#anwendung-4-2-8}
Die Abbildung

$$
\begin{align*}
\left[0, 2\pi\right) &\to ℝ ^ { 2 }\\
t &\mapsto ( \cos (t) , \sin (t) )
\end{align*}
$$

ist eine Bijektion von $[0 , 2 \pi)$ nach

$$
K = \left\{ ( x , y ) \in ℝ ^ { 2 } : \ x ^ { 2 } + y ^ { 2 } = 1 \right\} .
$$

Wir überlassen dies als Übung mit folgendem Hinweis: unter Benützung der Identitäten in [Korollar 3.9.3 (2), (3), (4)](/3-stetige-funktionen#korollar-3-9-3) genügt es zu zeigen, dass

$$
\begin{align*}
\left[0,\frac{ \pi } { 2 }\right) &\to \left\{( x , y ) \in K : \ 0<x≤1, \ 0<y≤1 \right\} \\
t &\mapsto ( \cos (t) , \sin (t) )
\end{align*}
$$

bijektiv ist.
:::

Ein effizientes Hilfsmittel zur Berechnung von Grenzwerten ist die Regel von l’Hôpital. Sie stützt sich auf eine einfache Verallgemeinerung des Satzes von Lagrange, die wir nun behandeln.

::: proposition Satz 4.2.9 (Cauchy){#satz-4-2-9}
Seien $f , g : [ a , b ] \to ℝ$ stetig und in $(a,b)$ differenzierbar. Dann gibt es $\xi \in (a,b)$ mit

$$
g ^ { \prime } ( \xi ) \left( f ( b ) - f ( a ) \right) = f ^ { \prime } ( \xi ) \left( g ( b ) - g ( a ) \right) .
$$

Falls $g ^ { \prime } ( x ) \neq 0\ \forall x \in \ (a,b)$ folgt

$$
g ( a ) \neq g ( b )
$$

und

$$
{ \frac { f ( b ) - f ( a ) } { g ( b ) - g ( a ) } } = { \frac { f ^ { \prime } ( \xi ) } { g ^ { \prime } ( \xi ) } } .
$$

Beachte: Man erhält den MIttelwertsatz von Lagrange mit $g ( x ) = x$ .

**Beweis:**<br>
Wende den Satz von Rolle auf

$$
F ( x ) : = f ( x ) \left( g ( b ) - g ( a ) \right) - g ( x ) \left( f ( b ) - f ( a ) \right)
$$

an:

$$
F ( a ) = f ( a ) \left( g ( b ) - g ( a ) \right) - g ( a ) \left( f ( b ) - f ( a ) \right) = f ( a ) g ( b ) - g ( a ) f ( b )
$$

und

$$
F ( b ) = f ( b ) \left( g ( b ) - g ( a ) \right) - g ( b ) \left( f ( b ) - f ( a ) \right) = - f ( b ) g ( a ) + g ( b ) f ( a ) = F ( a ) .
$$

Nach Rolle gibt es $\xi \in \left(a , b \right)$ mit $F ^ { \prime } ( \xi ) = 0$ . Dies beweist die erste Aussage. Die zweite Aussage folgt aus dem Satz von Rolle, denn falls $g ^ { \prime } ( x ) \neq 0\quad \forall x \in \left(a , b \right)$ kann nach Rolle $g ( b ) = g ( a )$ nicht gelten. <span class="right">$\Box$</span>
:::

::: proposition Satz 4.2.10 (l'Hospital 1696, Johann Bernoulli 1691/92){#satz-4-2-10}
Seien $f,g: (a,b) \to ℝ$ differenzierbar mit $g'(x)≠0\ ∀x∈(a,b)$.
Falls 
$$
\lim_{x\to b^-} f(x)= 0,\quad \lim_{x\to b^-} g(x)= 0
$$

und
$$
\lim_{x\to b^-} \frac{f'(x)}{g'(x)} =: λ
$$
existiert, folgt 
$$
\lim_{x\to b^-} \frac{f(x)}{g(x)} = \lim_{x\to b^-} \frac{f'(x)}{g'(x)}
$$

**Beweis:**<br>
Für die Begriffe von rechtsseitigen und linksseitigen Grenzwerten verweisen wir auf Abschnitt 3.10.

Sei $\varepsilon > 0$ und $\delta > 0$ so dass:

$$
\left| \frac { f ^ { \prime } ( x ) } { g ^ { \prime } ( x ) } - \lambda \right| < \varepsilon \qquad \forall x \in (b - \delta , b)
$$

Seien $b - \delta < u < v < b$ , und für diese $u$ und $v$ sei $\xi \in (u , v)$ wie im Satz von Cauchy:

$$
{ \frac { f ( u ) - f ( v ) } { g ( u ) - g ( v ) } } = { \frac { f ^ { \prime } ( \xi ) } { g ^ { \prime } ( \xi ) } }
$$

Dann folgt:

$$
\left| { \frac { f ( u ) - f ( v ) } { g ( u ) - g ( v ) } } - \lambda \right| = \left| { \frac { f ^ { \prime } ( \xi ) } { g ^ { \prime } ( \xi ) } } - \lambda \right| < \varepsilon .
$$

Da diese Ungleichung insbesondere für alle $v \in (u , b)$ gilt, folgt aus

$$
\operatorname * { l i m } _ { x \to b ^ { - } } f ( x ) = 0 \quad { \mathrm { u n d } } \quad \operatorname * { l i m } _ { x \to b ^ { - } } g ( x ) = 0
$$

dass

$$
\left| { \frac { f ( u ) } { g ( u ) } } - \lambda \right| < \varepsilon
$$

und somit

$$
\lim _ { u \to b ^ { - } } { \frac { f ( u ) } { g ( u ) } } = \lambda .
$$

**Bemerkung 4.2.11** {#bemerkung-4-2-11}

Der Satz gilt auch

- falls $b = + \infty$
- falls $\lambda = + \infty$‚
- falls $x \to a ^ { + }$.
:::

::: example Beispiel 4.2.12.{#beispiel-4-2-12}

1) Für $a > 0$ folgt aus 4.1.13 (1), (2) und l’Hospital:

    $$
    \lim _ { x \to \infty } { \frac { \ln x } { x ^ { a } } } = \lim _ { x \to \infty } { \frac { \left( { \frac { 1 } { x } } \right) } { a x ^ { a - 1 } } } = \lim _ { x \to \infty } { \frac { 1 } { a x ^ { a } } } = 0 .
    $$

2)
    $$
    \lim _ { x \to 0 ^ { + } } x \cdot \ln x = \lim _ { x \to 0 ^ { + } } { \frac { \ln x } { \left( { \frac { 1 } { x } } \right) } } = \lim _ { x \to 0 ^ { + } } { \frac { \frac { 1 } { x } } { - { \frac { 1 } { x ^ { 2 } } } } } = \lim _ { x \to 0 ^ { + } } ( - x ) = 0 .
    $$

{.numbered}
:::

Im nächsten Abschnitt werden wir Ableitungen höherer Ordnung im Allgemeinen einführen. Wir wollen diesen Abschnitt mit einer Diskussion über Konvexität und deren Zusammenhang mit zweiter Ableitung beenden.

Sei $I \subset ℝ$ ein Intervall und $f : I \to ℝ$ eine Funktion.

::: definition Definition 4.2.13.{#definition-4-2-13}
1) $f$ ist **konvex** (auf $I$ ) falls für alle $x ≤ y , x , y \in I$ und $\lambda \in [0 , 1]$ gilt
    $$
    f \left( \lambda x + ( 1 - \lambda ) y \right) ≤ \lambda f ( x ) + ( 1 - \lambda ) f ( y )
    $$   
2) $f$ ist **streng konvex** falls für alle $x < y , x , y \in I$ und $\lambda \in (0 , 1)$, 
  $$
   f \left( \lambda x + ( 1 - \lambda ) y \right) < \lambda f ( x ) + ( 1 - \lambda ) f ( y )
  $$

![](/images/a75f7ab5f6919ab19d952b5b3f25431538fb7d334c8def414f282af049a878b8.png)
:::

::: proposition Bemerkung 4.2.14.{#bemerkung-4-2-14}
Sei $f : I \to ℝ$ konvex. Ein einfacher Induktionsbeweis zeigt, dass für alle $n ≥ 1$, $\{ x _ { 1 } , \ldots , x _ { n } \} \subset I$ und $\lambda _ { 1 } , \ldots , \lambda _ { n }$ in $[0 , 1]$ mit $\displaystyle\sum _ { i = 1 } ^ { n } \lambda _ { i } = 1 ,$

$$
f \left( \sum _ { i = 1 } ^ { n } \lambda _ { i } x _ { i } \right) ≤ \sum _ { i = 1 } ^ { n } \lambda _ { i } f ( x _ { i } ) .
$$
:::

::: proposition Lemma 4.2.15.{#lemma-4-2-15}
Sei $f : I \to ℝ$ eine beliebige Funktion. Die Funktion $f$ ist genau dann konvex, falls für alle $x _ { 0 } < x < x _ { 1 }$ in $I$

$$
\begin{align*}
\tag{*}{ \frac { f ( x ) - f ( x _ { 0 } ) } { x - x _ { 0 } } } &≤ { \frac { f ( x _ { 1 } ) - f ( x ) } { x _ { 1 } - x } }
\end{align*}
$$

gilt.   
Sie ist genau dann streng konvex, falls in $( * )$ strikte Ungleichheit gilt.

**Beweis:**<br>
Sei $x = ( 1 - \lambda ) x _ { 0 } + \lambda x _ { 1 }$ , also $\lambda = \displaystyle\frac { x - x _ { 0 } } { x _ { 1 } - x _ { 0 } }$ . Dann ist

$$
f ( x ) ≤  \underbrace{\left(\frac { x_1 - x}{x_1-x_0}\right)}_{(1-\lambda)} f ( x _ { 0 } ) + \underbrace{\left(\frac { x - x_0 }{x_1-x_0}\right)}_{ \lambda } f ( x _ { 1 } )
$$

äquivalent zu:

$$
( x _ { 1 } - x _ { 0 } ) f ( x ) ≤ ( x _ { 1 } - x ) f ( x _ { 0 } ) + ( x - x _ { 0 } ) f ( x _ { 1 } )
$$

![](/images/cc56588073dfcb71d54d12cd923f31d67132cb4cac97cff7d2e73fb617c8cd3f.png)

Mittels der Bemerkung $x _ { 1 } - x _ { 0 } = ( x _ { 1 } - x ) + ( x - x _ { 0 } )$ ist dies wiederum äquivalent zu:

$$
(x_1-x)(f(x) - f(x_0)) ≤ (x-x_0)(f(x_1) - f(x))
$$

also

$$
{ \frac { f ( x ) - f ( x _ { 0 } ) } { x - x _ { 0 } } } ≤ { \frac { f ( x _ { 1 } ) - f ( x ) } { x _ { 1 } - x } }
$$

Die Aussage betreffend strenge Konvexität folgt aus dem selben Argument.<span class="right">$\Box$</span>
:::

Aus dem Satz von Lagrange erhalten wir relativ leicht:

::: proposition Satz 4.2.16.{#satz-4-2-16}
Sei $f : (a,b) \to ℝ$ in $(a,b)$ differenzierbar. Die Funktion f ist genau dann (streng) konvex, falls $f ^ { \prime }$ (streng) monoton wachsend ist.

**Beweis:**<br>
Wir beschränken uns darauf, eine Implikation zu beweisen. Wir nehmen an, dass $f ^ { \prime }$ monoton wächst. Seien $x _ { 0 } < x < x _ { 1 }$ ; dann gibt es nach dem Mittelwertsatz von Lagrange $\xi \in \ (x _ { 0 } , x)$ und $\eta \in \ (x , x _ { 1 })$ mit

$$
{ \frac { f ( x ) - f ( x _ { 0 } ) } { x - x _ { 0 } } } = f ^ { \prime } ( \xi ) , \qquad { \frac { f ( x _ { 1 } ) - f ( x ) } { x _ { 1 } - x } } = f ^ { \prime } ( \eta ) .
$$

Da nun $\xi < \eta$ folgt $f ^ { \prime } ( \xi ) ≤ f ^ { \prime } ( \eta )$ und somit

$$
{ \frac { f ( x ) - f ( x _ { 0 } ) } { x - x _ { 0 } } } ≤ { \frac { f ( x _ { 1 } ) - f ( x ) } { x _ { 1 } - x } } .
$$

Die Konvexität folgt dann aus [Lemma 4.2.15](#lemma-4-2-15). Strenge Konvexität folgt mit dem selben Argument aus der strengen Monotonie von $f ^ { \prime }$. <span class="right">$\Box$</span>
:::

Sei $f : (a , b) \to ℝ$ . Falls $f$ in $(a , b)$ differenzierbar ist und ihre Ableitung $f ^ { \prime }$ wiederum in $(a , b)$ differenzierbar ist, bezeichnet $f ^ { \prime \prime }$ (oder $f ^ { ( 2 ) }$ ) die Funktion $\left( f ^ { \prime } \right) ^ { \prime }$. Die Funktion $f ^ { \prime \prime }$ nennt sich die zweite Ableitung von $f$ und $f$ ist zweimal differenzierbar in $(a,b)$.

::: proposition Korollar 4.2.17.{#korollar-4-2-17}
Sei $f : (a , b) \to ℝ$ zweimal differenzierbar. Die Funktion $f$ ist (streng) konvex, falls $f ^ { \prime \prime } ≥ 0$ (bzw. $f''>0$) auf $(a , b)$ gilt.

**Beweis:** Folgt unmittelbar aus [Satz 4.2.16](#satz-4-2-16) und [Korollar 4.2.5](#korollar-4-2-5).
:::

::: example Beispiel 4.2.18.{#beispiel-4-2-18}
Für alle $n ≥ 1$ und $x _ { 1 } , \ldots , x _ { n }$ in $(0,\infty)$ gilt

$$
{ \sqrt [ n ] { x _ { 1 } \cdot \cdot \cdot x _ { n } } } ≤ { \frac { x _ { 1 } + \cdot \cdot \cdot + x _ { n } } { n } } .
$$

Wir betrachten $f ( x ) = - \ln { x }$ , dann ist

$$
f ^ { \prime } ( x ) = - { \frac { 1 } { x } }
$$

und

$$
f ^ { \prime \prime } ( x ) = { \frac { 1 } { x ^ { 2 } } } , x \in (0,\infty).
$$

Folglich ist $f$ konvex und aus Bemerkung 4.2.14 mit $I = (0,\infty)$ und $\lambda _ { 1 } = \cdots = \lambda _ { n } = { \frac { 1 } { n } }$ folgt:

$$
- \ln \left( { \frac { 1 } { n } } \sum _ { i = 1 } ^ { n } x _ { i } \right) ≤ \sum _ { i = 1 } ^ { n } - { \frac { 1 } { n } } \ln x _ { i } = - { \frac { 1 } { n } } \ln ( x _ { 1 } \cdot \cdot \cdot x _ { n } )
$$

Die Ungleichung 4.2.18 folgt dann aus der Tatsache, dass die Exponentialfunktion monoton wächst.
:::

## 4.3. Höhere Ableitungen

Sei $D \subset ℝ$ so dass jedes $x _ { 0 } \in D$ Häufungspunkt der Menge $D$ ist. Sei $f : D \to ℝ$ differenzierbar in $D$ und $f ^ { \prime }$ ihre Ableitung; wir setzen $f ^ { ( 1 ) } = f ^ { \prime }$ .

::: definition Definition 4.3.1.{#definition-4-3-1}
1) Für $n ≥ 2$ ist $f$ $n$**-mal differenzierbar in** $D$ falls $f ^ { ( n - 1 ) }$ in $D$ differenzierbar ist.
    Dann ist $f ^ { ( n ) } : = \left( f ^ { ( n - 1 ) } \right) ^ { \prime }$ und nennt sich die $n$ -te Ableitung von $f$ .   
2) Die Funktion $f$ ist $n$**-mal stetig differenzierbar in** $D$, falls sie $n$-mal differenzierbar ist und falls $f ^ { ( n ) }$ in $D$ stetig ist.   
3) Die Funktion $f$ ist in $D$ **glatt**, falls sie $\forall n ≥ 1$ , $n$-mal differenzierbar ist.
:::

::: proposition Bemerkung 4.3.2.{#bemerkung-4-3-2}
Es folgt aus [Korollar 4.1.5](#korollar-4-1-5), dass für $n ≥ 1$ , eine $n$-mal differenzierbare Funktion $( n - 1 )$-mal stetig differenzierbar ist.
:::

Analog zu [Satz 4.1.9](#satz-4-1-9) haben wir:

::: proposition Satz 4.3.3.{#satz-4-3-3}
Sei $D \subset ℝ$ wie in Def. 4.3.1, $n ≥ 1$ und $f , g : D \to ℝ$ $n$-mal differenzierbar in $D$ .

1) $f + g$ ist $n$-mal differenzierbar und

    $$
    \left( f + g \right) ^ { ( n ) } = f ^ { ( n ) } + g ^ { ( n ) } .
    $$

2) $f \cdot g$ ist $n$-mal differenzierbar und

    $$
    ( f \cdot g ) ^ { ( n ) } = \sum _ { k = 0 } ^ { n } { \binom { n } { k } } f ^ { ( k ) } g ^ { ( n - k ) } .
    $$

**Beweis:**
1) Einfache Induktion unter Benützung von [Satz 4.1.9(1)](#satz-4-1-9).

2) Durch Induktion: Für $n = 1$ gilt es nach [Satz 4.1.9(1)](#satz-4-1-9). Sei $n ≥ 2$ , wir nehmen an, die Formel gilt für $n - 1$.

    Für $1 ≤ k ≤ n - 1$ berechnen wir:
    $$
    \begin{align*}
    \binom{n-1}{k-1} + \binom{n-1}{k} &= \frac{(n-1)!}{(k-1)!(n-k)!} + \frac{(n-1)!}{k!(n-1-k)!}\\
    &= \frac{(n-1)!k}{k!(n-k)!} + \frac{(n-1)!(n-k)}{k!(n-k)!}\\
    &= \frac{(n-1)!(n-k+k)}{k!(n-k)!}\\
    &= \frac{n!}{k!(n-k)!} = \binom{n}{k}.
    \end{align*}
    $$

    Dann folgt

    $$
    \begin{align*}
    ( f \cdot g ) ^ { ( n ) } &= \left( (f \cdot g) ^ { ( n - 1 ) } \right) ^ { \prime } = \left( \sum _ { j = 0 } ^ { n - 1 } { \binom { n - 1 } { j } } f ^ { ( j ) } g ^ { ( n - 1 - k ) } \right) ^ { \prime }\\
    &= \sum _ { j = 0 } ^ { n - 1 } { \binom { n - 1 } { j } } \left( f ^ { ( j+1 ) } g ^ { ( n - 1 - j ) } + f ^ { ( j ) } g ^ { ( n - j ) } \right)\\
    &= \sum _ { k = 1 } ^ { n } { \binom { n - 1 } { k -1 } } f ^ { ( k ) } g ^ { ( n - k ) } + \sum _ { j = 0 } ^ { n - 1 } { \binom { n - 1 } { j } } f ^ { ( j ) } g ^ { ( n - j ) }\\
    &= f^{(n)}\cdot g + \sum_{k = 1}^{n-1} \left\{\binom{n-1}{k-1} + \binom{n-1}{k}\right\} f^{(k)}g^{(n-k)} + f \cdot g^{(n)}\\
    &= f^{(n)}\cdot g + \sum_{k = 1}^{n-1} \binom{n}{k} f^{(k)}g^{(n-k)} + f \cdot g^{(n)}\\
    &= \sum_{k = 0}^{n} \binom{n}{k} f^{(k)}g^{(n-k)}.
    \end{align*}
    $$
    
    und die Formel ist bewiesen.

{.numbered}
:::

::: example Beispiel 4.3.4.{#beispiel-4-3-4}
1) Die Funktionen $\exp$, $\sin$, $\cos$, $\sinh$, $\cosh$, $\tanh$ sind glatt auf ganz $ℝ$.
2) Polynome sind auf ganz $ℝ$ glatt.   
3) $\ln :  (0 , + \infty) \to ℝ$ ist glatt;

    $$
    { \begin{array} { r l } & { ( \ln ) ^ { \prime } ( x ) = { \frac { 1 } { x } } = x ^ { - 1 } , \quad ( \ln ) ^ { \prime \prime } ( x ) = ( - 1 ) x ^ { - 2 } , \quad \ldots } \\ & {  \ln ^ { ( n ) } ( x )  = ( - 1 ) ^ { n - 1 } ( n - 1 ) ! x ^ { - n } ,  \ n ≥ 1 . } \end{array} }
    $$

{.numbered}
:::

::: proposition Satz 4.3.5.{#satz-4-3-5}
Sei $D \subset ℝ$ wie in [Def. 4.3.1](#definition-4-3-1), $n ≥ 1$ und $f , g : D \to ℝ$ $n$-mal differenzierbar in $D$.

Falls $g ( x ) \neq 0\ \forall x \in D$, dann ist $\frac { f } { g }$ in $D$ $n$-mal differenzierbar.

**Beweis:** Einfache Induktion über $n$. Der Fall $n = 1$ folgt aus [Satz 4.1.9(3)](#satz-4-1-9).
:::

Analog erhalten wir auch für die Verknüpfung:

::: proposition Satz 4.3.6.{#satz-4-3-6}
Seien $E , D \subset { ℝ }$ Teilmengen für die jeder Punkt Häufungspunkt ist. Seien $f : D \to E$ und $g : E \to ℝ$ $n$ -mal differenzierbar. Dann ist $g \circ f$ $n$ -mal differenzierbar, und

$$
( g \circ f ) ^ { ( n ) } \left( x \right) = \sum _ { k = 1 } ^ { n } A _ { n , k } ( x ) \left( g ^ { ( k ) } \circ f \right) ( x )
$$

wobei $A _ { n , k }$ ein Polynom in den Funktionen $f ^ { \prime } , f ^ { ( 2 ) } , \ldots , f ^ { ( n + 1 - k ) } i s t$

Wir lassen den Beweis als übung: Es ist ein einfacher Induktionsbeweis. Es gibt auch explizite Formeln für $A _ { n , k }$ , diese sind aber schwieriger zu beweisen. Hier als Beispiel die drei ersten Ableitungen von $g \circ f$ :

$$
\begin{array} { r l } & { \quad ( g \circ f ) ^ { \prime } = ( g ^ { \prime } \circ f ) f ^ { \prime } } \\ & { ( g \circ f ) ^ { ( 2 ) } = \left( g ^ { ( 2 ) } \circ f \right) ( f ^ { \prime } ) ^ { 2 } + ( g ^ { \prime } \circ f ) f ^ { ( 2 ) } } \\ & { ( g \circ f ) ^ { ( 3 ) } = \left( g ^ { ( 3 ) } \circ f \right) ( f ^ { \prime } ) ^ { 3 } + 3 \left( g ^ { ( 2 ) } \circ f \right) f ^ { \prime } f ^ { ( 2 ) } + ( g ^ { \prime } \circ f ) f ^ { ( 3 ) } . } \end{array}
$$
:::

::: example Beispiel 4.3.7.{#beispiel-4-3-7}
1) $\tan$ ist auf $ℝ ⧵ \left\{ { \frac { \pi } { 2 } } + k \pi : k \in ℤ \right\}$ glatt, sowie $\cot$ auf $ℝ \setminus \left\{ k \pi : k \in ℤ \right\}$.

2) Für alle $a \in ℝ$ ist

    $$
    (0,\infty) \to ℝ,\quad x \mapsto x ^ { a }
    $$
    
    glatt.

3) Die inversen trigonometrischen Funktionen

    $$
    \begin{align*}
    \arcsin : (- 1 , 1) \to \mathbb{R} & &\arctan : \mathbb{R} \to \mathbb{R} \\
    \arccos : (- 1 , 1) \to \mathbb{R} & &\operatorname{arccot} : \mathbb{R} \to \mathbb{R} \\
    \end{align*}
    $$
    
    sind alle glatt.

{.numbered}
:::

Zum Beispiel im Fall von $\arcsin$ wissen wir, dass die Funktion auf $(- 1 , 1)$ differenzierbar ist mit Ableitung:

$$
\arcsin ^ { \prime } ( x ) = { \frac { 1 } { \sqrt { 1 - x ^ { 2 } } } }
$$

Bemerke nun, dass

$$
(- 1 , 1) \to ℝ,\quad x \mapsto { \frac { 1 } { \sqrt { 1 - x ^ { 2 } } } }
$$

die Verknüpfung folgender glatter Funktionen ist:

$$
\begin{align*}
(- 1 , 1) &\to (0,1) & & & (0,1) &\to (0,1) & & & (0,1) &\to ℝ \\
x &\mapsto 1 - x ^ { 2 } & & & y &\mapsto \sqrt{y} & & & z &\mapsto \frac{1}{z}
\end{align*}
$$

und somit ist $\arcsin$ glatt.

## 4.4. Potenzreihen und Taylor Approximation

In diesem Abschnitt zeigen wir, dass, grob gesagt, konvergente Potenzreihen glatte Funktionen ergeben. Die Umkehrung gilt im Allgemeinen nicht und wird durch eine schwächere Aussage (Taylor Approximation) ersetzt.

::: proposition Satz 4.4.1.{#satz-4-4-1}
Seien $f _ { n } : (a,b) \to ℝ$ eine Funktionenfolge wobei $f _ { n }$ einmal in $(a,b)$ stetig differenzierbar ist $\forall n ≥ 1$ . Wir nehmen an, dass sowohl die Folge $( f _ { n } ) _ { n ≥ 1 }$ wie $( f _ { n } ^ { \prime } ) _ { n ≥ 1 }$ gleichmässig in $(a,b)$ konvergieren (siehe [Def. 3.7.5](/3-stetige-funktionen#definition-3-7-5)) mit $\displaystyle\lim _ { n \to \infty } f _ { n } = : f$ und $\displaystyle\lim _ { n \to \infty } f _ { n } ^ { \prime } = : p$ . Dann ist $f$ stetig differenzierbar und $f ^ { \prime } = p$ .

**Beweis:**<br>
Nach [Satz 3.7.4](/3-stetige-funktionen#satz-3-7-4) sind $f$ und $p$ stetig. Es bleibt also nur $f ^ { \prime } = p$ zu beweisen. Sei $x _ { 0 } \in (a,b)$ . Sei $\varepsilon > 0$ und $\delta > 0$ so dass $(x _ { 0 } - \delta , x _ { 0 } + \delta) \subset (a,b)$ und

$$
\begin{align*}
\tag{*} \left| p ( x ) - p ( x _ { 0 } ) \right| &≤ \varepsilon \qquad \forall x \in (x _ { 0 } - \delta , x _ { 0 } + \delta)
\end{align*}
$$

Sei $N ≥ 1$ so dass:

$$
\begin{align*}
\tag{**}\left| f _ { n } ^ { \prime } ( \xi ) - p ( \xi ) \right| &≤ \varepsilon \qquad\forall n ≥ N , \forall \xi \in (a,b)
\end{align*}
$$

Sei nun $x \in \left( x _ { 0 } - \delta , x _ { 0 } + \delta \right)$ mit $x \neq x _ { 0 }$. Nach Mittelwertsatz gibt es $\xi _ { n } \in (x _ { 0 } - \delta , x _ { 0 } + \delta)$ mit

$$
{ \frac { f _ { n } ( x ) - f _ { n } ( x _ { 0 } ) } { x - x _ { 0 } } } = f _ { n } ^ { \prime } ( \xi _ { n } ) .
$$

Für $n ≥ N$ folgt aus $\left( * * \right)$ :

$$
\left| { \frac { f _ { n } ( x ) - f _ { n } ( x _ { 0 } ) } { x - x _ { 0 } } } - p ( \xi _ { n } ) \right| ≤ \varepsilon
$$

und aus $( * )$ , dass

$$
\left| { \frac { f _ { n } ( x ) - f _ { n } ( x _ { 0 } ) } { x - x _ { 0 } } } - p ( x _ { 0 } ) \right| ≤ 2 \varepsilon .
$$

In dieser letzten Ungleichung können wir zum $n { \to } \infty$ übergehen und erhalten

$$
| \frac { f ( x ) - f ( x _ { 0 } ) } { x - x _ { 0 } } - p ( x _ { 0 } ) | ≤ 2 \varepsilon \forall x \in (x _ { 0 } - \delta , x _ { 0 } + \delta)
$$

Dies zeigt, dass

$$
\lim _ { x \to x _ { 0 } } { \frac { f ( x ) - f ( x _ { 0 } ) } { x - x _ { 0 } } } = p ( x _ { 0 } ) .
$$

Somit ist $f$ stetig differenzierbar und $f ^ { \prime } ( x _ { 0 } ) = p ( x _ { 0 } )$ für alle $x _ { 0 } \in \left(a , b \right)$ . Da $x _ { 0 }$ beliebig war, folgt $f ^ { \prime } = p$ auf $(a,b)$. <span class="right">$\Box$</span>

:::

Mittels [Satz 4.4.1](#satz-4-4-1) erhalten wir folgende fundamentale Eigenschaft von Funktionen, die sich als Potenzreihen darstellen lassen:

::: proposition Satz 4.4.2.{#satz-4-4-2}
Sei $\displaystyle\sum _ { k = 0 } ^ { \infty } c _ { k } x ^ { k }$ eine Potenzreihe mit positivem Konvergenzradius $\rho > 0$ (siehe [3.7.10](/3-stetige-funktionen#definition-3-7-10), [3.7.11](/3-stetige-funktionen#satz-3-7-11)). Dann ist

$$
f ( x ) = \sum _ { k = 0 } ^ { \infty } c _ { k } \left( x - x _ { 0 } \right) ^ { k }
$$

auf $(x _ { 0 } - \rho , x _ { 0 } + \rho)$ differenzierbar und

$$
f ^ { \prime } ( x ) = \sum _ { k = 1 } ^ { \infty } k c _ { k } \left( x - x _ { 0 } \right) ^ { k - 1 }
$$

für alle $x \in \left( x _ { 0 } - \rho , x _ { 0 } + \rho \right)$

**Beweis:**<br>
Wir können $x _ { 0 } = 0$ annehmen. Sei

$$
f _ { n } ( x ) = \sum _ { k = 0 } ^ { n } c _ { k } x ^ { k }
$$

und $0 < r < \rho$ . Nach Satz 3.7.11 konvergiert $\left( f _ { n } \right) _ { n ≥ 1 }$ auf $[- r , r]$ gleichmässig gegen $f$ Nun ist

$$
f _ { n } ^ { \prime } ( x ) = \sum _ { k = 1 } ^ { n } k c _ { k } x ^ { k - 1 } .
$$

Da nach [Beispiel 2.2.5](/2-folgen-reihen#beispiel-2-2-5)

$$
\limsup _ { k \to \infty } \sqrt [ k ] { k } \big | c _ { k } \big | = \lim _ { k \to \infty } \sqrt [ k ] { k } \limsup _ { k \to \infty } \sqrt [ k ] { \big | c _ { k } \big | } = 1 \cdot \limsup _ { k \to \infty } \sqrt [ k ] { \big | c _ { k } \big | }
$$

gilt, folgt dass die Reihe

$$
p ( x ) : = \sum _ { k = 1 } ^ { \infty } k c _ { k } x ^ { k - 1 }
$$

selben Konvergenzradius $\rho$ hat.

Nach Satz 3.7.11 konvergiert $( f _ { n } ^ { \prime } ) _ { n ≥ 1 }$ auf $[- r , r]$ gleichmässig gegen $p$. Aus Satz 4.4.1 angewandt auf $(-r,r)$ folgt, dass $f$ stetig differenzierbar ist und

$$
f ^ { \prime } ( x ) = \sum _ { k = 1 } ^ { \infty } k c _ { k } x ^ { k - 1 } \qquad \forall x \in  (- \rho , \rho)
$$
:::

Durch wiederholte Anwendung von [Satz 4.4.2](#satz-4-4-2) erhalten wir:

::: proposition Korollar 4.4.3.{#korollar-4-4-3}
Unter der Voraussetzung von [Satz 4.4.1](#satz-4-4-1) ist $f$ auf $(x _ { 0 } - \rho , x _ { 0 } + \rho)$ glatt und

$$
f ^ { ( j ) } ( x ) = \sum _ { k = j } ^ { \infty } c _ { k } { \frac { k ! } { ( k - j ) ! } } ( x - x _ { 0 } ) ^ { k - j } .
$$

Insbesondere ist

$$
c _ { j } = { \frac { f ^ { ( j ) } ( x _ { 0 } ) } { j ! } } .
$$
:::

Aus [Korollar 4.4.3](#korollar-4-4-3) folgt, dass falls eine glatte Funktion $f$ in einem Intervall $(- \rho , \rho)$ Summe einer Potenzreihe

$$
\sum _ { k = 0 } ^ { \infty } c _ { k } x ^ { k }
$$

mit Konvergenzradius $\rho$ ist, so folgt

$$
c _ { k } = { \frac { f ^ { ( k ) } ( 0 ) } { k ! } } .
$$

Dass nicht jede glatte Funktion Summe einer Potenzreihe ist, folgt aus dem folgenden Beispiel:

::: example Beispiel 4.4.4. (Cauchy 1823){#beispiel-4-4-4}

$$
f ( x ) = \begin{cases}
\exp \left( { - \displaystyle\frac { 1 } { x ^ { 2 } } } \right) & \text{falls } x \neq 0 \\ 0 & \text{falls } x = 0 \end{cases}
$$

Diese Funktion ist auf ganz $ℝ$ glatt und $f ^ { ( k ) } ( 0 ) = 0 \quad \forall k ≥ 0$.

Da andererseits $f ( x ) > 0$ $\forall x \neq 0$ , gibt es keine Potenzreihe mit positivem Konvergenz radius $\rho$ , die in $(- \rho , \rho)$ gegen $f$ konvergiert.

Aus [Satz 4.3.6](#satz-4-3-6) folgt, dass $\forall k ≥ 0$

$$
f ^ { ( k ) } ( x ) = \mathcal { P } _ { k } \left( { \frac { 1 } { x } } \right) \exp \left( { \frac { - 1 } { x ^ { 2 } } } \right) \qquad \forall x \neq 0
$$

wobei $\mathcal { P } _ { k }$ ein Polynom ist.

Unter Benützung von:

$$
\lim _ { x \to 0 } { \frac { 1 } { x ^ { m } } } \exp \left( { \frac { - 1 } { x ^ { 2 } } } \right) = 0 \qquad \forall m ≥ 0
$$

folgt rekursiv mit der Annahme $f ^ { ( k ) } ( 0 ) = 0$ :

$$
f ^ { ( k + 1 ) } ( 0 ) = \lim _ { x \to 0 } { \frac { f ^ { ( k ) } ( x ) - f ^ { ( k ) } ( 0 ) } { x } } = \lim _ { x \to 0 } { \frac { f ^ { ( k ) } ( x ) } { x } } = 0 .
$$
:::

Glatte Funktionen lassen sich aber durch Polynome wie folgt approximieren.

::: proposition Satz 4.4.5.{#satz-4-4-5}
Sei $f : [ a , b ] \to ℝ$ stetig und in $(a,b)$ und $( n + 1 )$-mal differenzierbar. Für jedes $a < x ≤ b$ gibt es $\xi \in \left( a , x \right)$ mit:

$$
f ( x ) = \sum _ { k = 0 } ^ { n } { \frac { f ^ { ( k ) } ( a ) } { k ! } } \left( x - a \right) ^ { k } + { \frac { f ^ { ( n + 1 ) } ( \xi ) } { ( n + 1 ) ! } } \left( x - a \right) ^ { n + 1 } .
$$

**Beweis:**<br>
Der Beweis folgt einer Idee von Cauchy. Seien

$$
R _ { n } ( x ) : = f ( x ) - \sum _ { k = 0 } ^ { n } { \frac { f ^ { ( k ) } ( a ) } { k ! } } \left( x - a \right) ^ { k }
$$

und

$$
S _ { n } ( x ) : = { \frac { ( x - a ) ^ { n + 1 } } { ( n + 1 ) ! } } .
$$

Dann gilt: $R _ { n } ( a ) = 0$, $R _ { n } ^ { \prime } ( a ) = 0$, $\ldots$, $R _ { n } ^ { ( n ) } ( a ) = 0$ und<br> $S _ { n } ( a ) = 0$, $S _ { n } ^ { \prime } ( a ) = 0$, $\ldots$, $S _ { n } ^ { ( n ) } ( a ) = 0$.

[Satz 4.2.9](#satz-4-2-9) angewendet auf $f = R _ { n }$ und $g = S _ { n }$ ergibt

$$
{ \frac { R _ { n } ( x ) } { S _ { n } ( x ) } } = { \frac { R _ { n } ( x ) - R _ { n } ( a ) } { S _ { n } ( x ) - S _ { n } ( a ) } } = { \frac { R _ { n } ^ { \prime } ( \xi _ { 1 } ) } { S _ { n } ^ { \prime } ( \xi _ { 1 } ) } }
$$

für ein $\xi _ { 1 } \in \mathsf { \Gamma } (a,x)$.   
Wir können jetzt weiterfahren und Satz 4.2.9 auf $f = R _ { n } ^ { \prime }$ und $g = S _ { n } ^ { \prime }$ anwenden und erhalten

$$
{ \frac { R _ { n } ^ { \prime } ( \xi _ { 1 } ) } { S _ { n } ^ { \prime } ( \xi _ { 1 } ) } } = { \frac { R _ { n } ^ { \prime } ( \xi _ { 1 } ) - R _ { n } ^ { \prime } ( a ) } { S _ { n } ^ { \prime } ( \xi _ { 1 } ) - S _ { n } ^ { \prime } ( a ) } } = { \frac { R _ { n } ^ { ( 2 ) } ( \xi _ { 2 } ) } { S _ { n } ^ { ( 2 ) } ( \xi _ { 2 } ) } }
$$

für ein $\xi _ { 2 } \in \mathrm { ~ } (a , \xi _ { 1 })$.

Wir können diesen Prozess iterieren und erhalten

$$
{ \frac { R _ { n } ( x ) } { S _ { n } ( x ) } } = { \frac { R _ { n } ^ { ( n + 1 ) } ( \xi _ { n + 1 } ) } { S _ { n } ^ { ( n + 1 ) } ( \xi _ { n + 1 } ) } }
$$

für ein $\xi _ { n + 1 } \in (a,x)$.

Nun ist $S _ { n } ^ { ( n + 1 ) } ( x ) = 1$ und $R _ { n } ^ { ( n + 1 ) } ( x ) = f ^ { ( n + 1 ) } ( x )$ woraus mit $\xi : = \xi _ { n + 1 }$ folgt:

$$
R _ { n } ( x ) = S _ { n } ( x ) f ^ { ( n + 1 ) } ( \xi ),
$$

und der Satz ist bewiesen. <span class="right">$\Box$</span>
:::

::: proposition Korollar 4.4.6. (Taylor Approximation){#korollar-4-4-6}
Sei $f : [ c , d ] \to ℝ$ stetig und in $[c,d]$ $n$-mal stetig differenzierbar und in $(c , d)$ $( n + 1 )$-mal differenzierbar. Sei $c < a < d$ . Für alle $x \in [ c , d ]$ gibt es $\xi$ zwischen $x$ und $a$ so dass

$$
f ( x ) = \sum _ { k = 0 } ^ { n } { \frac { f ^ { ( k ) } ( a ) } { k ! } } \left( x - a \right) ^ { k } + { \frac { f ^ { ( n + 1 ) } ( \xi ) } { ( n + 1 ) ! } } \left( x - a \right) ^ { n + 1 } .
$$
:::

Anhand dieses Korollars können wir eine präzisere Aussage über lokale Extremalstellen einer $( n + 1 )$-mal differenzierbaren Funktion machen.

::: proposition Korollar 4.4.7.{#korollar-4-4-7}
Sei $n ≥0$, $a < x _ { 0 } < b$ und $f : [ a , b ] \to ℝ$ in $[a,b]$ $n$-mal stetig differenzierbar und in $(a, b)$ $( n + 1 )$ -mal stetig differenzierbar.

**Annahme**: $f ^ { \prime } ( x _ { 0 } ) = f ^ { ( 2 ) } ( x _ { 0 } ) = \cdot \cdot \cdot = f ^ { ( n ) } ( x _ { 0 } ) = 0$ .

1) Falls $n$ gerade ist und $x _ { 0 }$ lokale Extremalstelle, folgt $f ^ { ( n + 1 ) } ( x _ { 0 } ) = 0$ .   
2) Falls $n$ ungerade ist und $f ^ { ( n + 1 ) } ( x _ { 0 } ) > 0$ so ist $x _ { 0 }$ eine strikte lokale Minimalstelle.   
3) Falls $n$ ungerade ist und $f ^ { ( n + 1 ) } ( x _ { 0 } ) < 0$ so ist $x _ { 0 }$ eine strikte lokale Maximalstelle.
{.numbered}

**Beweis:**<br>
Nach Korollar 4.4.6 gibt es für alle $x \in (a,b)$ ein $\xi$ zwischen $x$ und $x _ { 0 }$ mit

$$
f ( x ) = f ( x _ { 0 } ) + f ^ { ( n + 1 ) } ( \xi ) \frac { ( x - x _ { 0 } ) ^ { n + 1 } } { ( n + 1 ) ! } .
$$

1) Für $x \neq x _ { 0 }$ folgt

    $$
    { \frac { f ( x ) - f ( x _ { 0 } ) } { ( x - x _ { 0 } ) ^ { n + 1 } } } = { \frac { f ^ { ( n + 1 ) } ( \xi ) } { ( n + 1 ) ! } } .
    $$
    
    Aus der Stetigkeit von $f ^ { ( n + 1 ) }$ folgt insbesondere:
    
    $$
    \lim _ { x \to x _ { 0 } ^ { + } } { \frac { f ( x ) - f ( x _ { 0 } ) } { ( x - x _ { 0 } ) ^ { n + 1 } } } = \frac { f ^ { ( n + 1 ) } ( x _ { 0 } ) } { ( n + 1 ) ! }
    $$
    
    und
    
    $$
    \lim _ { x \to x _ { 0 } ^ { - } } { \frac { f ( x ) - f ( x _ { 0 } ) } { { \big ( } x - x _ { 0 } { \big ) } ^ { n + 1 } } } = \frac { f ^ { ( n + 1 ) } ( x _ { 0 } ) } { ( n + 1 ) ! }
    $$
    
    Da $x _ { 0 }$ lokale Extremalstelle für $f$ ist und $n + 1$ ungerade, folgt dass $\displaystyle\lim_{x {  } \to x _ { 0 } ^ { + }}$ und $\displaystyle\lim_{x {  } \to x _ { 0 } ^ { - }}$ entgegengesetzte Vorzeichen haben, woraus $f ^ { ( n + 1 ) } ( x _ { 0 } ) = 0$ folgt.

2) Sei $n$ ungerade und $f ^ { ( n + 1 ) } ( x _ { 0 } ) > 0$ . Aus der Stetigkeit von $f ^ { ( n + 1 ) }$ folgt die Existenz von $\delta > 0$ mit

    $$
    f ^ { ( n + 1 ) } ( \xi ) > 0 \qquad \forall \xi \in \left( x _ { 0 } - \delta , x _ { 0 } + \delta \right)
    $$
    
    Für $x \in \ \left( x _ { 0 } - \delta , x _ { 0 } + \delta \right)$ und $\xi$ wie oben folgt
    
    $$
    f ( x ) = f ( x _ { 0 } ) + f ^ { ( n + 1 ) } ( \xi ) \frac { ( x - x _ { 0 } ) ^ { n + 1 } } { ( n + 1 ) ! } .
    $$
    
    Da $n + 1$ gerade ist, folgt nun
    
    $$
    \forall x \in \left( x _ { 0 } - \delta , x _ { 0 } + \delta\right) , x \neq x _ { 0 } : f ( x ) > f ( x _ { 0 } )
    $$

3) Beweis analog.

{.numbered} 
:::

Wir wollen hier einen oft angewendeten Spezialfall von Korollar 4.4.7 hervorheben:

::: proposition Korollar 4.4.8.{#korollar-4-4-8}
Sei $f : [a,b] \to ℝ$ stetig und in $(a,b)$ zweimal stetig differenzierbar. Sei $a < x _ { 0 } < b$ . Annahme: $f ^ { \prime } ( x _ { 0 } ) = 0$ . (1) Falls $f ^ { ( 2 ) } ( x _ { 0 } ) > 0$ ist $x _ { 0 }$ strikte lokale Minimalstelle. (2) Falls $f ^ { ( 2 ) } ( x _ { 0 } ) < 0$ ist $x _ { 0 }$ strikte lokale Maximalstelle.
:::

::: example Beispiel 4.4.9.{#beispiel-4-4-9}
Sei $f ( x ) = x ^ { 4 } - x ^ { 2 } + 1$ . Wir bestimmen die lokalen Extremalstellen von $f$ . Sei $x _ { 0 }$ eine solche; dann folgt nach [Satz 4.2.2(3)](#satz-4-2-2) dass:

$$
f ^ { \prime } ( x _ { 0 } ) = 0 ,
$$

das heisst

$$
4 x _ { 0 } ^ { 3 } - 2 x _ { 0 } = 0
$$

Also gilt $x_0 \in \left\{ - \frac { 1 } { \sqrt { 2 } } , 0 , \frac { 1 } { \sqrt { 2 } } \right\}$. Nun ist $f ^ { ( 2 ) } ( x ) = 1 2 x ^ { 2 } - 2$

$$
\begin{align*}
f ^ { ( 2 ) } \left( - { \frac { 1 } { \sqrt { 2 } } } \right) &= f ^ { ( 2 ) } \left( { \frac { 1 } { \sqrt { 2 } } } \right) = 4 > 0 \\
\\
f ^ { ( 2 ) } \left( 0 \right) &= -2 < 0
\end{align*}
$$

Also sind $- { \frac { 1 } { \sqrt { 2 } } }$ und ${ \frac { 1 } { \sqrt { 2 } } }$ strikte lokale Minimalstellen, und $0$ strikte lokale Maximalstelle.
:::
