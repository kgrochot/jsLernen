# Arrays

## Was ist ein Array?

Arrays werden verwendet, um mehrere Elemente in einer einzigen Variable zu speichern. Sie sind ein spezieller Typ von Objekt in JavaScript. Der `typeof`-Operator gibt für Arrays den Wert `object` zurück.

Um das im Beispiel beschriebene Problem zu lösen, können wir ein Array von Noten für jeden Schüler erstellen und so alle Werte in einer einzigen Variable speichern.

Eine effizientere Datenstruktur ist jedoch die sogenannte `Map`, die eine bessere Möglichkeit bietet, die Noten von Schülern zu organisieren.

## Wie deklariert man ein Array?

In JavaScript gibt es zwei Möglichkeiten, ein Array zu deklarieren:

```javascript
let marks = new Array(); // Methode 1
let marks = [];          // Methode 2
```

Methode 2 wird bevorzugt, da sie kürzer und übersichtlicher ist.

### Unterschied bei der Initialisierung

Der Unterschied zeigt sich vor allem bei der **Initialisierung**:

```javascript
let numbers = new Array(5);
```

➡️ Erstellt ein Array mit 5 leeren (undefined) Elementen

```javascript
let numbers = [5];
```

➡️ Erstellt ein Array mit genau einem Element: 5

Beispiele mit Methode 1

```javascript
let marksOne = new Array(45, 50, 44, 30, 29); 
// Array mit fünf Zahlen

let marksTwo = new Array(5); 
// Array mit fünf "leeren" (undefined) Elementen

let marksThree = new Array("45"); 
// Array mit einem String-Element: "45"
```

👉 marksOne enthält fünf Zahlen
👉 marksTwo enthält fünf undefined-Werte

⚠️ Diese Schreibweise kann verwirrend sein, besonders bei Zahlen. Daher sollte Methode 1 möglichst vermieden werden.

Nachträgliche Initialisierung

```javascript
let marks = new Array(5);

marks[0] = "forty-five";
marks[1] = "fifty";
marks[2] = 44;
marks[3] = 30;
marks[4] = "twenty-nine";
```

Initialisierung mit Methode 2 (empfohlen)

```javascript
let marksOne = [45, 50, 44, 30, 29]; 
// Nur Zahlen

let marksTwo = ["forty-five", "fifty", 44, 30, "twenty-nine"]; 
// Mischung aus Strings und Zahlen
```

👉 Ein Array kann Elemente unterschiedlicher Datentypen enthalten.

---

### Indexpositionen

- Array-Indizes beginnen immer bei **0**.  
  - `marks[0]` ist das erste Element  
  - `marks[1]` ist das zweite Element usw.
- Wenn du versuchst, auf einen Index außerhalb der Array-Grenzen zuzugreifen, erhältst du `undefined`.  
- Dasselbe passiert, wenn du auf ein Element innerhalb der Grenzen zugreifst, das noch **nicht initialisiert** wurde.

---

### Beispiel

```javascript
let marks = [45, 50, 44, 30, 29];
marks[10] = 65;

console.log(marks);
```

Ausgabe in der Browser-Konsole:

```javascript
[45, 50, 44, 30, 29, <5 empty items>, 65]
```

Erklärung
Der Wert 65 wurde an die Indexposition 10 zugewiesen, die größer ist als die ursprüngliche Größe des Arrays.
Die Indexpositionen 5, 6, 7, 8 und 9 bleiben leer (empty) und geben undefined zurück, wenn man versucht, auf sie zuzugreifen.
Denke immer daran: [0] ist das erste Element, [1] ist das zweite Element usw.

## Array-Länge

Die **`length`-Eigenschaft** gibt die Anzahl der Elemente in einem Array zurück.

---

### Beispiel 1

```javascript
const languages = ["C", "C++", "Python", "Java", "JavaScript"];

let len = languages.length; // 5
```

👉 Ein Array hat immer einen length-Wert, der eins mehr als der höchste Index ist.

In diesem Beispiel ist length = 5
Der höchste Index ist 4 (languages[4] = "JavaScript")

Beispiel 2: Letztes Element eines Arrays

```javascript
const colors = ['orange', 'blue', 'red', 'pink', 'magenta'];

// Letztes Element mit Hilfe der length-Eigenschaft abrufen
const lastItem = colors[colors.length - 1]; // "magenta"
colors[0] → erstes Element "orange"
colors[1] → zweites Element "blue"

/* In JavaScript (und vielen anderen Programmiersprachen) gibt die Eigenschaft length die Anzahl der Elemente in einem Array zurück. Da Arrays nullbasiert indiziert sind (das erste Element hat den Index 0), befindet sich das letzte Element immer am Index length - 1. */

colors[colors.length - 1] → letztes Element "magenta"

let colors = ["rot", "blau", "grün", "gelb", "lila"];

// Letztes Element abrufen, ohne die Länge zu kennen
let letztesFarbe = colors[colors.length - 1];

console.log(letztesFarbe); // Ausgabe: "lila"

colors.length → 5 //(da das Array fünf Elemente hat)
colors.length - 1 → 4 //(Index des letzten Elements)
colors[4] → "lila"

//So funktioniert dein Code immer, selbst wenn sich die Größe des Arrays ändert.
```

## isArray()

Die Methode Array.isArray() prüft, ob ein Wert ein Array ist. Sie gibt true zurück, wenn es ein Array ist, ansonsten false.

```js
Array.isArray(obj)
```

Beispiele:

```js
let marks = [45, 50, 44, 30, 29];
console.log(Array.isArray(marks)); // true

let marksOne = "45";
console.log(Array.isArray(marksOne)); // false

```

Erklärung:

marks ist ein Array → Ergebnis: true
marksOne ist eine Zeichenkette → Ergebnis: false

So kannst du jederzeit prüfen, ob ein Wert tatsächlich ein Array ist, bevor du Array-Methoden darauf anwendest.

Wenn du verschachtelte Arrays hast, also Arrays innerhalb von Arrays, kannst du **Array.isArray()** nutzen, um jedes Element zu prüfen, ob es selbst ein Array ist.

Hier ein Beispiel:

```js
let mixed = [10, [20, 30], "hello", [40, 50]];

for (let i = 0; i < mixed.length; i++) {
    if (Array.isArray(mixed[i])) {
        console.log(mixed[i], "ist ein Array");
    } else {
        console.log(mixed[i], "ist kein Array");
    }
}
```

Ausgabe:

10 ist kein Array
[20, 30] ist ein Array
hello ist kein Array
[40, 50] ist ein Array

✅ So kannst du gezielt verschachtelte Arrays erkennen und unterschiedlich behandeln.

## Fsszit

Zusammenfassend sind Arrays ein mächtiges Werkzeug in JavaScript, mit dem wir mehrere Elemente in einer einzigen Variable speichern können.
Arrays sind spezielle Objekte in JavaScript und können auf zwei Arten initialisiert werden. Die zweite Methode wird bevorzugt, da sie einfacher und übersichtlicher ist.

Die Indexpositionen werden verwendet, um auf einzelne Elemente eines Arrays zuzugreifen oder ihnen Werte zuzuweisen. Wir haben auch die length-Eigenschaft kennengelernt, die die Anzahl der Elemente in einem Array zurückgibt. Zusätzlich haben wir gesehen, wie man mit der Methode Array.isArray() prüfen kann, ob ein Objekt ein Array ist oder nicht.

Durch die Verwendung von Arrays lässt sich der Code vereinfachen und effizienter gestalten.

### Arrays in JavaScript – Merkhilfe

- **Definition:** Arrays speichern mehrere Elemente in einer einzigen Variable.  
- **Initialisierung:**  

  ```javascript
  let arr = [];        // bevorzugt
  let arr = new Array();
  ```

- 🔢 Zugriff auf Elemente: Über Index, z. B. arr[0]
- 🔚 Letztes Element: arr[arr.length - 1]
- 📏 Länge: arr.length → Anzahl der Elemente
- ✅ Prüfung auf Array: Array.isArray(obj) → true/false
- 💡 Vorteil: Code wird einfacher und effizienter

Differenz zwischem dem ersten index und dem letzten

```js
function getDifference(marks) {
    console.log(marks[0] - marks[marks.length - 1]);
}
```

Erklärung:

```js
marks[0] → (erstes Element)
marks[marks.length - 1] → (letztes Element)
marks[0] - marks[marks.length - 1] → Differenz
console.log() → Ausgabe
```
