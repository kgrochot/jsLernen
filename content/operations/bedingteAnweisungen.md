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

### 🔀 Switch-Statement – Einführung

Du kennst bereits Bedingungen mit `if`. Für einfache Fälle ist das super 👍  
Aber wenn es **viele mögliche Werte** gibt, wird `if...else` schnell unübersichtlich.

## 🧠 Grundsyntax

```javascript
switch (value) {
  case A:
    // Code
    break;
  case B:
    // Code
    break;
  default:
    // Code
}
```

## 📌 Beispiel mit `if`

```javascript
let cityTo = "Paris";

if (cityTo === "Berlin") {
  console.log("Der Preis beträgt $100");
} else if (cityTo === "Paris") {
  console.log("Der Preis beträgt $120");
} else if (cityTo === "London") {
  console.log("Der Preis beträgt $150");
}
```

👉 Ausgabe:

Der Preis beträgt $120

❌ Problem:

- schwerer zu lesen
- viele Wiederholungen (cityTo === ...)

✅ Lösung mit switch

```javascript
let cityTo = "Paris";

switch (cityTo) {
  case "Berlin":
    console.log("Der Preis beträgt $100");
    break;
  case "Paris":
    console.log("Der Preis beträgt $120");
    break;
  case "London":
    console.log("Der Preis beträgt $150");
    break;
}
```

👉 Ergebnis: gleich wie vorher ✔️

🧠 Wie funktioniert switch?

- switch(cityTo) → prüft den Wert
- case "Paris" → vergleicht mit dem Wert
- Wenn gleich → Code wird ausgeführt

👉 Wichtig:

1. Vergleich erfolgt mit strikter Gleichheit (===)
2. Typen müssen also exakt übereinstimmen

⚠️ Wichtige Rolle von break

```javascript
case "Paris":
  console.log("Der Preis beträgt $120");
  break;
```

👉 break beendet den switch

❌ Ohne break:

Code läuft in die nächsten case-Blöcke weiter (Fallthrough)
🎯 Merksatz

👉 switch ist ideal, wenn du eine Variable mit vielen festen Werten vergleichst
👉 break verhindert unerwünschtes Weiterlaufen