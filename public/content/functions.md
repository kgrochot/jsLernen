## Funktionen in JavaScript

Funktionen werden verwendet, um wiederholte Aktionen zu kapseln und den Code besser zu strukturieren. Sie helfen, komplexe Programme in kleinere, überschaubare Teile zu zerlegen.

Funktionen können eingebaute oder benutzerdefinierte Funktionen sein. Eine bekannte eingebaute Funktion ist console.log().

1. Grundsyntax

```js
function name(parameter) {
  // Funktionskörper
}
```

**function:** Schlüsselwort zur Deklaration einer Funktion
**name:** Name der Funktion
**parameter:** optionale Werte, die an die Funktion übergeben werden
Der Funktionskörper steht in geschweiften Klammern {}

Beispiel: Funktion ohne Parameter

```js
function writeMessage() {
  console.log("Finde und buche deine ideale Tour!");
}

writeMessage(); // Ausgabe: Finde und buche deine ideale Tour!
```

Eine Funktion kann beliebig oft aufgerufen werden:

```js
writeMessage();
writeMessage();
```

2. Funktionsaufruf vor Deklaration

In JavaScript ist es möglich, eine Funktion aufzurufen, bevor sie definiert wurde:

```js
writeMessage(); // funktioniert

function writeMessage() {
  console.log("Finde und buche deine ideale Tour!");
}
```

Grund: Der Browser scannt zuerst alle Funktionen **(Hoisting)**, bevor der Code ausgeführt wird.

3. Parameter

Parameter ermöglichen das Übergeben von Informationen an Funktionen:

```js
function quotient(a, b) {
  console.log(a / b);
}

quotient(10, 5); // 2
quotient(6, 2);  // 3
```

4. Einen Wert zurückgeben

Mit return kann eine Funktion ein Ergebnis zurückgeben:

```js
function multiply(a, b) {
  return a * b;
}

let result = multiply(10, 2);
console.log(result); // 20
return beendet die Funktion sofort
```

Der Wert wird an die Stelle zurückgegeben, an der die Funktion aufgerufen wurde

5. Anonyme Funktionen

Anonyme Funktionen haben keinen Namen. Sie werden oft verwendet, wenn:

- die Funktion nur einmal verwendet wird
- sie direkt ausgeführt werden soll
- sie als Argument an eine andere Funktion übergeben wird

**Grundsyntax**

```js
const greetings = function () {
  return 'Hello world!';
};

greetings(); // 'Hello world!'
```

Anonyme Funktionen sollten bevorzugt const-Variablen zugewiesen werden.

5.1 Hoisting
Benannte Funktionen: können vor ihrer Definition aufgerufen werden
Anonyme Funktionen, die Variablen zugewiesen sind: können nicht vor der Zuweisung aufgerufen werden

```js
funcTwo(); // Fehler

const funcTwo = function () {
  return 'Two';
};
```

5.2 Sofort ausgeführte anonyme Funktionen (IIFE)

```js
(function () {
  console.log('Hello world!');
})();

// Mit Argumenten
(function (text) {
  console.log(text);
})("Hello world!");
```

Arrow Function Version:

```js
(() => {
  console.log('Hello world!');
})();
5.3 Anonyme Funktion als Argument
function alertMessage(text) {
  console.log(text());
}

// Direkt
alertMessage(function () {
  return "Hello world!";
});

// Zuerst Variable
const textFunc = function () {
  return "Hello world!";
};
alertMessage(textFunc);

```

6. Arrow Functions

Arrow Functions sind eine kompakte Syntax für anonyme Funktionen.

```js
const greeting = () => {
  console.log('Hello world!');
};
greeting(); // 'Hello world!'
```

Vereinfachungen

Ein Parameter: runde Klammern optional

```js
const greet = text => text;
greet('Hi'); // 'Hi'
```

Nur ein Ausdruck: geschweifte Klammern und return entfallen

```js
const sum = (a, b) => a + b;
sum(2, 3); // 5
```

Arrow Functions behalten den umgebenden this-Wert, anders als klassische Funktionen.

# 7. Arten von Funktionen in JavaScript

| Typ | Hoisting | Vor Definition aufrufbar? |
|-----|----------|---------------------------|
| Function Declaration | Ja | ✅ Ja |
| Function Expression (var/let/const) | Nein (nur Variable bei var) | ❌ Nein |
| Arrow Function | Nein | ❌ Nein |

## 7.1 Function Declaration

```javascript
function sum(a, b) {
  return a + b;
}

sum(2, 3);   // 5
```

## 7.2 Function Expression

```javascript
let sum = function(a, b) {
  return a + b;
};

sum(2, 3);   // 5
```

## 7.3 Arrow Function Expression

```javascript
let sum = (a, b) => a + b;

sum(2, 3);   // 5
```

## 7.4 Function Constructor

```javascript
const mult = new Function("a", "b", "return a * b");

let x = mult(4, 3); // 12
```

8. Zusammenfassung – Wann anonyme Funktionen?

✅ Richtige Anwendungsfälle:

- Funktion sofort ausführen (IIFE)
- Funktion nur einmal verwenden
- Funktion als Parameter übergeben (Callback)

❌ Nicht geeignet:

Wenn die Funktion einen expliziten Namen zur Wiederverwendung benötigt → benannte Funktion verwenden

| Typ                                                | Syntax-Beispiel                                                             | Hoisting | Aufruf vor Definition | Besonderheiten                                                                          |
| -------------------------------------------------- | --------------------------------------------------------------------------- | -------- | --------------------- | --------------------------------------------------------------------------------------- |
| **Function Declaration**                           | `function sum(a, b) { return a + b; }`                                      | ✅ Ja     | ✅ Ja                  | Klassische benannte Funktion; kann überall im Scope aufgerufen werden                   |
| **Function Expression**                            | `const sum = function(a, b) { return a + b; };`                             | ❌ Nein   | ❌ Nein                | Kann anonym oder benannt sein; erst ab Zuweisung nutzbar                                |
| **Arrow Function**                                 | `const sum = (a, b) => a + b;`                                              | ❌ Nein   | ❌ Nein                | Kompakte Syntax; behält `this` vom umgebenden Scope                                     |
| **IIFE (Immediately Invoked Function Expression)** | `(function(){ console.log('Hi'); })();` <br> `(() => console.log('Hi'))();` | ❌ Nein   | ❌ Nein                | Funktion wird sofort ausgeführt; nützlich für einmaligen Code, keine globalen Variablen |
| **Function Constructor**                           | `const mult = new Function("a","b","return a*b");`                          | ❌ Nein   | ❌ Nein                | Dynamisch erzeugte Funktion; selten genutzt                                             |
