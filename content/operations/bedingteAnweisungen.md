# Bedingte Anweisungen in JavaScript

Bisher haben wir nur Programme betrachtet, die Befehle Schritt für Schritt ausführen.  
In der Praxis verhalten sich Programme jedoch oft wie eine Kreuzung – es gibt mehrere mögliche Wege, abhängig von bestimmten Bedingungen.

## if-Anweisung

Die `if`-Anweisung führt einen Codeblock nur aus, wenn eine Bedingung erfüllt ist.

```js
if (bedingung) {
  // Code wird ausgeführt, wenn die Bedingung wahr ist
}

let alter = 18;

if (alter >= 18) {
  console.log("Du bist volljährig.");
}
```


*Wichtiger Hinweis*

- Wenn wir mit der if-Anweisung arbeiten, wird die Bedingung in den Klammern immer in einen Boolean-Wert (true oder false) umgewandelt.
- Der Code innerhalb von if wird nur ausgeführt, wenn das Ergebnis true ist.
- Das bedeutet: Jeder Ausdruck, der zu einem Boolean wird, kann als Bedingung verwendet werden.

## if...else-Anweisung

Mit else wird ein alternativer Codeblock ausgeführt, wenn die Bedingung falsch ist.

```js
if (bedingung) {
  // wird ausgeführt, wenn wahr
} else {
  // wird ausgeführt, wenn falsch
}

//Beispiel:

let alter = 16;

if (alter >= 18) {
  console.log("Volljährig");
} else {
  console.log("Minderjährig");
}
```

## else if-Anweisung

Mit else if können mehrere Bedingungen geprüft werden.

```js
if (bedingung1) {
  // wenn bedingung1 wahr ist
} else if (bedingung2) {
  // wenn bedingung2 wahr ist
} else {
  // wenn keine Bedingung erfüllt ist
}

// Beispiel:

let punktzahl = 85;

if (punktzahl >= 90) {
  console.log("Note A");
} else if (punktzahl >= 75) {
  console.log("Note B");
} else {
  console.log("Note C");
}
```

## Ternärer Operator

Wenn ein Programm abhängig von einer Bedingung einer Variablen einen Wert zuweisen soll, können wir die Kurzform von `if...else` verwenden: den **ternären Operator** `? :`.

```js
bedingung ? wertWennWahr : wertWennFalsch;

let time = 11;
let isHungry = (time >= 6) ? true : false;
```

In diesem Beispiel siehst du:

- zuerst die Bedingung (time >= 6)
- dann ? gefolgt vom Wert, wenn die Bedingung true ist
- nach : folgt der Wert für false

### Ohne Klammern

Die Klammern um die Bedingung sind optional:

```js
let time = 11;
let isHungry = time >= 6 ? true : false;
```

Das Verhalten bleibt identisch.

### Komplexere Bedingungen

Die Bedingung kann auch komplexer sein, z. B. mit logischen Operatoren:

```js
let time = 11;
let isHungry = !(time <= 6) ? true : false;
```

Der Operator ! bedeutet „nicht“.

Die Bedingung *!(time <= 6)* kann man lesen als:

- „Ist es nicht 6 Uhr oder früher?“

Wenn das zutrifft (true), wird der erste Wert gesetzt, sonst der zweite.

### Fazit

Der ternäre Operator ist eine kompakte und elegante Möglichkeit, einfache if...else-Logik in einer einzigen Zeile auszudrücken.
Er eignet sich besonders gut für kurze Zuweisungen.