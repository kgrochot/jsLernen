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
```

```javascript
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

## Faszit

Zusammenfassend sind Arrays ein mächtiges Werkzeug in JavaScript, mit dem wir mehrere Elemente in einer einzigen Variable speichern können.
Arrays sind spezielle Objekte in JavaScript und können auf zwei Arten initialisiert werden. Die zweite Methode wird bevorzugt, da sie einfacher und übersichtlicher ist.

Die Indexpositionen werden verwendet, um auf einzelne Elemente eines Arrays zuzugreifen oder ihnen Werte zuzuweisen. Wir haben auch die length-Eigenschaft kennengelernt, die die Anzahl der Elemente in einem Array zurückgibt. Zusätzlich haben wir gesehen, wie man mit der Methode Array.isArray() prüfen kann, ob ein Objekt ein Array ist oder nicht.

Durch die Verwendung von Arrays lässt sich der Code vereinfachen und effizienter gestalten.

### Arrays in JavaScript – Merkhilfe

**Definition:** Arrays speichern mehrere Elemente in einer einzigen Variable.  
**Initialisierung:**  

```javascript
let arr = [];        // bevorzugt
let arr = new Array();
```

- Zugriff auf Elemente: Über Index, z. B. arr[0] 🔢
- Letztes Element: arr[arr.length - 1] 🔚
- Länge: arr.length → Anzahl der Elemente 📏
- Prüfung auf Array: Array.isArray(obj) → true/false ✅
- Vorteil: Code wird einfacher und effizienter 💡

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

## Arrays erstellen

Die einfachste und am häufigsten verwendete Methode, ein Array zu erstellen, ist die sogenannte **Literal-Schreibweise**.
Diese Methode ähnelt der Zuweisung eines einzelnen Werts an eine Variable mit den Schlüsselwörtern `let` oder `const`:

```javascript
// Literal-Schreibweise
let arr = [element_1, element_2, element_3, element_n];

let arr1 = ['JetBrains', 'Hyperskill'];
let arr2 = [45, 34, 23];
let arr3 = ['JavaScript', 12];
```

Wie du oben sehen kannst, werden die Elemente eines Arrays von eckigen Klammern [] umschlossen.
Strings innerhalb eines Arrays müssen in *einfache ' '* oder *doppelte " "* Anführungszeichen gesetzt werden.

## Array mit dem Konstruktor erstellen

Du kannst auch das Schlüsselwort *new* zusammen mit dem Array()-Konstruktor verwenden, um ein Array zu erstellen.

## Ein Argument

Wenn du dem Konstruktor ein einzelnes Zahlenargument übergibst, wird ein Array mit dieser Länge erstellt:

```javascript
let arrayCreate = new Array(6);

console.log(arrayCreate.length); // 6
console.log(arrayCreate[0]);     // undefined
```

➡️ Es wird ein Array mit 6 leeren Elementen erzeugt.

## Mehrere Argumente

Wenn du mehrere Argumente übergibst, werden diese direkt als Elemente im Array gespeichert:

```javascript
let platforms = new Array('JetBrains', 'Hyperskill', 'WebStorm', 'PyCharm');

console.log(platforms.length); // 4
console.log(platforms[0]);     // JetBrains
```

### Fazit

Du kannst Arrays auf zwei Arten erstellen:

- ✅ Literal-Schreibweise → am häufigsten und empfohlen  
- ✅ Array()-Konstruktor → für spezielle Fälle

## Arrays erstellen und bearbeiten: `fill()`

Die folgenden Abschnitte zeigen einige nützliche Methoden zum **Erstellen oder Modifizieren von Arrays**.

## `fill()`

Die Methode `fill()` gibt eine **veränderte Version eines Arrays** zurück, indem alle Elemente des Arrays auf einen festen Wert gesetzt werden.  
Diese Methode kann **bis zu drei Argumente** annehmen:

```javascript
fill(value, start, end)
/*
value: der Wert, mit dem das Array gefüllt werden soll
start: der Index, an dem das Füllen beginnen soll (optional, Standardwert: 0)
end: der Index, an dem das Füllen enden soll, ohne den Endwert einzuschließen (optional, Standardwert: Länge des Arrays)
*/

const myNumbers = [1, 4, 7, 10, 15];

// Mit 0 füllen, von Position 1 bis 3
console.log(myNumbers.fill(0, 1, 3)); // [1, 0, 0, 10, 15]

// Alle Elemente mit 13 füllen
console.log(myNumbers.fill(13)); // [13, 13, 13, 13, 13]

// Mit 5 füllen, ab Position 2
console.log(myNumbers.fill(5, 2)); // [13, 13, 5, 5, 5]
```

## Array mit new und fill() erstellen

```javascript
let numberArray = new Array(6).fill(2); // [2, 2, 2, 2, 2, 2]
```

➡️ Der obige Code erstellt ein Array mit 6 Plätzen und füllt jedes Element mit der Zahl 2.

⚠️ Hinweis
Deklariere und initialisiere das Array immer, bevor du die fill()-Methode verwendest.

## Array.from()

Die Methode `Array.from()` erstellt eine **neue Array-Instanz** aus einem **array-ähnlichen oder iterierbaren Objekt** (z. B. `Map`, `Set` oder String).  

Die Syntax lautet:

```javascript
Array.from(object, mapFunction, thisValue)
/*
object: das Objekt, das in ein Array umgewandelt werden soll (Pflichtangabe)
mapFunction: eine Funktion, die auf jedes Element angewendet wird (optional)
thisValue: der Wert, der innerhalb von mapFunction als this verwendet wird (optional)*/
```

## Beispiele

1. Aus einem String

```javascript
Array.from('Hello'); // ['H', 'e', 'l', 'l', 'o']
```

Jeder Buchstabe des Strings wird zu einem Element im Array.

2. Aus Funktionsargumenten

```javascript
function createArray(...args) {
return Array.from(args);
}

createArray(2, 4, 6); // [2, 4, 6]
```

Die Spread-Syntax ...args erzeugt ein array-ähnliches Objekt, das Array.from() in ein echtes Array umwandelt.

3. Mit einer Map-Funktion (Arrow Function)

```javascript
Array.from([3, 5, 7], x => x * x); // [9, 25, 49]
```

Hier wird jedes Element des Arrays mit der übergebenen Funktion transformiert (z. B. Quadrieren).

## Array.of()

Die Methode `Array.of()` wurde mit **JavaScript ES6** eingeführt.  
Sie erstellt eine **neue Array-Instanz**, die **die angegebenen Argumente enthält**, unabhängig von deren Typ oder Anzahl.  

Die Syntax lautet:

```javascript
Array.of(element_1, element_2, ..., element_n)
Array.of(15);             // [15]
Array.of(101, 202, 303);  // [101, 202, 303]
Array.of(undefined);       // [undefined]
```

## Unterschied zu Array()

Der Unterschied zwischen Array.of() und dem Array-Konstruktor liegt in der Behandlung von Ganzzahlen:

```js
Array.of(10);  // [10] → Array mit einem Element
Array(10);     // Array mit 10 undefined-Werten
```

## Wichtige Array-Methoden

1. `push()` fügt ein oder mehrere Elemente **am Ende eines Arrays** hinzu.

```js
let fruits = ['Apfel', 'Banane'];
fruits.push('Orange');
console.log(fruits); // ['Apfel', 'Banane', 'Orange']
```

2. `pop()` entfernt das letzte Element eines Arrays und gibt es zurück.

```js
let fruits = ['Apfel', 'Banane', 'Orange'];
let last = fruits.pop();
console.log(last);   // 'Orange'
console.log(fruits); // ['Apfel', 'Banane']
```

3. `unshift()` fügt ein oder mehrere Elemente am Anfang eines Arrays hinzu.

```js
let fruits = ['Banane', 'Orange'];
fruits.unshift('Apfel');
console.log(fruits); // ['Apfel', 'Banane', 'Orange']
```

4. `shift()` entfernt das erste Element eines Arrays und gibt es zurück.

```javascript
let fruits = ['Apfel', 'Banane', 'Orange'];
let first = fruits.shift();
console.log(first);   // 'Apfel'
console.log(fruits);  // ['Banane', 'Orange']
```

5. `map()` erstellt ein neues Array, indem es eine Funktion auf jedes Element des Arrays anwendet.

```js
let numbers = [1, 2, 3];
let doubled = numbers.map(x => x * 2);
console.log(doubled); // [2, 4, 6]
```

6. `filter()` erstellt ein neues Array mit allen Elementen, die eine bestimmte Bedingung erfüllen.

```js
let numbers = [1, 2, 3, 4, 5];
let even = numbers.filter(x => x % 2 === 0);
console.log(even); // [2, 4]
```

7. `reduce()` wendet eine Funktion auf alle Elemente an und gibt einen einzigen Wert zurück.

```js
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, x) => acc + x, 0);
console.log(sum); // 10
```

8. `splice()` kann Elemente entfernen, ersetzen oder hinzufügen.

```js
let fruits = ['Apfel', 'Banane', 'Orange'];

// Entfernen
fruits.splice(1, 1); // Entfernt 1 Element ab Index 1
console.log(fruits); // ['Apfel', 'Orange']

// Hinzufügen
fruits.splice(1, 0, 'Kiwi', 'Mango'); // Ab Index 1, 0 Elemente entfernen, 2 hinzufügen
console.log(fruits); // ['Apfel', 'Kiwi', 'Mango', 'Orange']

// Ersetzen
fruits.splice(2, 1, 'Pfirsich'); // Ab Index 2, 1 Element ersetzen
console.log(fruits); // ['Apfel', 'Kiwi', 'Pfirsich', 'Orange']
```

9. `slice()` erstellt ein neues Array, das eine Kopie eines Teils des Arrays enthält.

```js
let fruits = ['Apfel', 'Banane', 'Orange', 'Kiwi'];
let someFruits = fruits.slice(1, 3); // Index 1 bis 2 (3 ausgeschlossen)
console.log(someFruits); // ['Banane', 'Orange']
```

## Unterschied: `Array.of()` vs `Array.from()`

| Methode        | Was sie erwartet                         | Beispiel                      | Ergebnis                  | Besonderheit                                                              |
|----------------|------------------------------------------|-------------------------------|---------------------------|---------------------------------------------------------------------------|
| `Array.of()`   | Beliebige Anzahl von Werten              | Array.of(10, 20, 30)          | [10, 20, 30]              | Erstellt ein Array **mit genau den übergebenen Werten**.                  |
| `Array.of()`   | Kein Argument                            | Array.of()                    | []                        | Gibt ein leeres Array zurück.                                             |
| `Array.of()`   | Ein Argument                             | Array.of(10)                  | [10]                      | Erstellt ein Array mit **einem Element**, nicht 10 leere Slots.           |
| `Array()`      | Ein Zahl-Argument                        | Array(10)                     | Array(10)                 | Erstellt ein Array mit **10 leeren Slots**, nicht 10.                     |
| `Array.from()` | Array-ähnliches oder iterierbares Objekt | Array.from([1,2,3])           | [1,2,3]                   | Erstellt ein neues Array aus einem **iterierbaren Objekt**.               |
| `Array.from()` | Kein iterierbares Objekt                 | Array.from(10)                | TypeError                 | Funktioniert nur mit **iterierbaren oder array-ähnlichen Objekten**.      |
| `Array.from()` | Zweites Argument: Map-Funktion           | Array.from([1,2,3], x => x*2) | [2,4,6]                   | Kann jedes Element **transformieren** wie bei `.map()`.                   |
| `Array.from()` | String als erstes Argument               | Array.from('Hi')              | ['H','i']                 | Teilt einen String in **einzelne Buchstaben** auf.                        |

💡 Merke:
Array.of() → Wert(e) → direkt ins Array
Array.from() → iterable/array-like → ins Array umwandeln, optional mit Map-Funktion
Unterschied zu Array(): Array(10) erzeugt leere Slots, Array.of(10) erzeugt ein Array mit einem Element 10.

## Visuelle Übersicht: `Array.of()` vs `Array.from()` vs `Array()`

          ┌───────────────────┐
          │   Array.of(10)    │
          └───────────────────┘
                   │
                   ▼
             [10]  ← Ein Array mit **einem Element** 10

────────────────────────────────────────────────────

          ┌───────────────────┐
          │    Array(10)      │
          └───────────────────┘
                   │
                   ▼
      [ <10 leere Slots> ]  ← Array mit **10 leeren Plätzen**

────────────────────────────────────────────────────

          ┌─────────────────────────┐
          │ Array.from([1,2,3])     │
          └─────────────────────────┘
                   │
                   ▼
             [1, 2, 3]  ← **Aus iterierbarem Objekt erstellt**
                   │
                   ▼
 Array.from([1,2,3], x => x*2) → [2, 4, 6]  ← optional mit Map-Funktion

## Erstelle ein Duplikat-Array

Vervollständige die fehlenden Teile der Funktion `createDuplicateArray`, die zwei Parameter erhält: ein **element** und eine Zahl **n**.  

Die Funktion soll ein Array der Länge **n** zurückgeben, in dem jedes Element das angegebene Element ist.

```javascript
function createDuplicateArray(element, n) {
    return Array(n).fill(element);
}

console.log(createDuplicateArray("x", 5)); 
// Ausgabe: ["x", "x", "x", "x", "x"]
```