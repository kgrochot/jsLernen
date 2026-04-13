# JavaScript Objekte

sind essenziell, um Daten zu organisieren und zu strukturieren. Sie ermöglichen es Entwicklern, zusammenhängende **Eigenschaften** (Werte) und **Methoden** (Funktionen) in einer einzigen Einheit zu bündeln, was die Verwaltung komplexer Daten vereinfacht.
Ein **Objekt** ist ein nicht-primitiver Datentyp, der eine ungeordnete Sammlung von Eigenschaften darstellt.  
Eine **Eigenschaft** ist ein Teil des Objekts, der einer Variablen ähnelt. Sie besteht aus einem **Schlüssel** und einem **Wert**, getrennt durch einen Doppelpunkt. Der Schlüssel kann nur eine **Zeichenkette (string)** oder ein **Symbol** sein, während der Wert **jeden Datentyp** haben kann.

## Bedeutung von Objekten in JavaScript

Objekte sind ein zentraler Bestandteil von JavaScript, da sie **Daten und Funktionen** zusammenfassen. Sie spielen eine wichtige Rolle bei:

- der **Interaktion mit HTML-Elementen** über das DOM  
- der **Verwaltung von Arrays**  
- der **Strukturierung komplexerer Datenmodelle**  

**Beispiel:**  

Ein `car`-Objekt könnte Eigenschaften wie haben:

```javascript
let car = {
  make: "Toyota",
  model: "Corolla",
  color: "Red"
};

car.start();
car.stop();
car.accelerate();
```

## Eigenschaften von Objekten und Zugriffsarten

Objekte enthalten **Eigenschaften**, also Merkmale des Objekts, wie Farbe, Größe oder Typ.

Es gibt zwei gängige Möglichkeiten, auf diese Eigenschaften zuzugreifen:

### Punktnotation

```javascript
console.log(car.color); // "Red"
```

### Klammernotation

Alternativ kann man auf Objekteigenschaften mit der **Klammernotation** zugreifen.  
Dies ist besonders nützlich, wenn der Name der Eigenschaft **dynamisch** ist oder Sonderzeichen/Zahlen enthält.

```javascript
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2021
};

console.log(car["brand"]); // Ausgabe: Toyota

let prop = "model";
console.log(car[prop]);    // Ausgabe: Corolla
```

## Verständnis von Objekteigenschaften

In modernem JavaScript (ECMAScript 2015 und später) ist die **Reihenfolge der Eigenschaften** eines Objekts garantiert **die gleiche wie bei ihrer Erstellung**.  

Dies erleichtert die Arbeit mit Objekten, insbesondere beim **Iterieren** über deren Eigenschaften.

### Beispiel

```javascript
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2021
};

// Iteration über Eigenschaften
for (let key in car) {
  console.log(key + ": " + car[key]);
}

/* Ausgabe:
brand: Toyota
model: Corolla
year: 2021
*/
```

# Erstellen und Definieren von JavaScript-Objekten

JavaScript bietet mehrere Möglichkeiten, Objekte zu erstellen, darunter **Objekt-Literale** und **Konstruktorfunktionen**.

## Objekt-Literal-Syntax

Der einfachste Weg, ein Objekt zu erstellen, ist die Verwendung von **geschweiften Klammern `{}`**:

```javascript
let auto = {marke: "Toyota", modell: "Camry", jahr: 2022};

```javascript
let person = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown"
  }
};
```

**Schlüssel-Wert-Paare in der Objekt-Literal-Syntax**

Objekte bestehen aus Schlüssel-Wert-Paaren, die durch Kommas getrennt sind:

```javascript
let person = {name: "John Doe", alter: 30, geschlecht: "männlich"};
```

Man kann auch verschachtelte Objekte erstellen:

```javascript
let benutzer = {
  name: "Anna",
  adresse: {
    straße: "Hauptstraße 5",
    stadt: "Berlin",
    plz: 10115
  },
  alter: 25
};
```

Hier ist adresse selbst ein Objekt, das innerhalb des benutzer-Objekts gespeichert ist.

---

## Erstellen eines Personen-Objekts mit mehreren Eigenschaften

Man kann ein Objekt auf zwei Arten erstellen:

### 1. Objekt-Literal (Object Initializer)

```javascript
let person = {name: "John Doe", alter: 30, istAdmin: false};
```

### 2. Konstruktorfunktion (Constructor Function)

Eine Konstruktorfunktion ermöglicht es, mehrere Objekte mit derselben Struktur zu erstellen:

```javascript
function Person(name, alter, istAdmin) {
  this.name = name;
  this.alter = alter;
  this.istAdmin = istAdmin;
}

// Objekt erstellen
let person1 = new Person("John Doe", 30, false);
let person2 = new Person("Anna Müller", 25, true);

console.log(person1.name); // "John Doe"
console.log(person2.istAdmin); // true
```

Hinweis: Mit dem Schlüsselwort new wird ein neues Objekt erstellt, und this verweist auf das aktuelle Objekt.

## Arbeiten mit Objektmethoden

Objektmethoden sind Funktionen, die **Aktionen auf den Daten eines Objekts** ausführen.  
Man definiert Methoden, indem man einer Eigenschaft des Objekts eine Funktion zuweist:

```javascript
let person = {
  name: "John Doe",
  alter: 30,
  istAdmin: false,
  
  // Methode definieren
  begruessung: function() {
    console.log("Hallo, mein Name ist " + this.name);
  }
};

// Methode aufrufen
person.begruessung(); // Ausgabe: "Hallo, mein Name ist John Doe"
```

Hinweis:

this verweist auf das aktuelle Objekt, also person in diesem Fall.
Methoden können auf andere Eigenschaften desselben Objekts zugreifen und diese verändern.

```javascript
let car = {
  brand: "Toyota",
  startEngine: function() {
    console.log(this.brand + " engine started");
  }
};
car.startEngine(); // Outputs: Toyota engine started
```

## Methoden zur Manipulation von Objekten verwenden

Mit Methoden kannst du **Objekteigenschaften ändern** oder **Aktionen auf dem Objekt ausführen**:

```javascript
let person = {
  name: "John Doe",
  alter: 30,
  istAdmin: false,

  // Methode zum Ändern des Namens
  setName: function(neuerName) {
    this.name = neuerName;
  },

  // Methode zum Anzeigen der Informationen
  zeigeInfo: function() {
    console.log("Name: " + this.name + ", Alter: " + this.alter + ", Admin: " + this.istAdmin);
  }
};

// Methoden verwenden
person.zeigeInfo(); // Name: John Doe, Alter: 30, Admin: false
person.setName("Jane Doe");
person.zeigeInfo(); // Name: Jane Doe, Alter: 30, Admin: false

```

# Mini-Lernhilfe: Welche Werte bleiben bei `JSON.stringify`?

Wenn du `JSON.stringify(obj, replacer)` benutzt, kannst du dir merken, welche Werte **im JSON erscheinen**:

| Werttyp             | Wird beibehalten? | Beispiel                       |
|--------------------|-----------------|--------------------------------|
| `string`            | ❌ entfernt      | `"John"` → entfernt            |
| `number`            | ✅ bleibt        | `30` → bleibt                  |
| `boolean`           | ✅ bleibt        | `true` → bleibt                |
| `null`              | ✅ bleibt        | `null` → bleibt                |
| `undefined`         | ❌ entfernt      | `undefined` → entfernt         |
| `object` (Objekt)   | ✅ bleibt        | `{x:1}` → bleibt               |
| `array`             | ✅ bleibt        | `[1,2,3]` → bleibt             |
| `Symbol`            | ❌ entfernt      | `Symbol('id')` → entfernt      |

---

## 🔹 Merksatz

> Alles, was der `replacer` auf `undefined` setzt, verschwindet aus dem JSON.  
> Zahlen, Booleans, Objekte und Arrays bleiben, Strings verschwinden, wenn der `replacer` sie filtert.

---

## 🔹 Beispiel mit `replacer`

```javascript
let person = {name: 'John', age: 30, active: true, city: 'Berlin'};
function replacer(key, value) {
  if (typeof value === 'string') return undefined;
  return value;
}
JSON.stringify(person, replacer); 
// Ergebnis: {"age":30,"active":true}
```

# Notiz: Literal Notation für Objekte in JavaScript

In JavaScript können Objekte auf verschiedene Arten erstellt werden.
Die **häufigste Methode** ist die Verwendung von **geschweiften Klammern `{}`**, diese Art der Objekterstellung nennt man **Literal Notation**.

Beispiel:

```javascript
let song = {
  name: "Twinkle, Twinkle, Little Star",
  author: "Jane Taylor",
  date: 1806
};
```

Die Schlüssel (name, author, date) sind die Eigenschaften des Objekts.
Die Werte können verschiedene Datentypen haben, z. B. Strings oder Zahlen.
Literal Notation ist einfach und übersichtlich und daher die gebräuchlichste Art, Objekte zu definieren.

## Alternativ könnte man ein Objekt auch mit dem Object Constructor erstellen

```javascript
let song = new Object();
song.name = "Twinkle, Twinkle, Little Star";
song.author = "Jane Taylor";
song.date = 1806;
```

Diese Variante wird in der Praxis seltener verwendet.

## Merksatz

- `{}` → **Literal Notation**, die gebräuchlichste und empfehlenswerte Art, Objekte zu erstellen.  
- `new Object()` → **Object Constructor**, eher selten und meist unnötig.  

💡 Tipp: Verwende immer `{}` für einfache, schnelle und saubere Objekte. Der Constructor ist nur nötig, wenn dynamisch Objekte erstellt oder besondere Prototypen genutzt werden.

## Iteration über Objekte

`Object.keys()`

Die Methode `Object.keys()` erzeugt ein **Array aus allen Schlüsseln (Keys) eines Objekts**, sodass man die Array-Methoden wie `forEach()`, `map()`, `filter()` usw. verwenden kann.  

**Syntax:**  

```javascript
let employee = {
  name: 'Bruce Reese',
  email: 'diam.sed@augue.org',
  company: 'Velit Pellentesque Institute'
};

// Keys in ein Array speichern
const employeeKeys = Object.keys(employee);

console.log(employeeKeys);
// Ausgabe: [ 'name', 'email', 'company' ]
```

Nun kann man über die Keys iterieren:

```javascript
// Jeden Key ausgeben
employeeKeys.forEach(key => console.log(key));
// Ausgabe:
// name
// email
// company
```

Mit den Keys kann man auch auf die Werte des Objekts zugreifen:

```javascript
employeeKeys.forEach(key => console.log(employee[key]));
// Ausgabe:
// Bruce Reese
// diam.sed@augue.org
// Velit Pellentesque Institute
```

Man kann sogar Werte basierend auf Bedingungen überschreiben:

```javascript
employeeKeys.forEach(key => {
  if (key === 'company') {
    employee[key] = "Stiedemann Group";
  }
});

console.log(employee);
/*
{
  name: 'Bruce Reese',
  email: 'diam.sed@augue.org',
  company: 'Stiedemann Group'
}
*/
```

💡 Merksatz:
Object.keys() verwandelt die Schlüssel eines Objekts in ein Array, sodass man die mächtigen Array-Methoden auf Objekte anwenden kann.

`Object.values()`

Die Methode `Object.values()` erzeugt ein **Array aus allen Werten eines Objekts**.  
Damit kann man direkt mit Array-Methoden wie `forEach()`, `map()`, `filter()` usw. auf die Werte zugreifen.

**Syntax:**  

```javascript
const employee = {
  name: 'Bruce Reese',
  email: 'diam.sed@augue.org',
  company: 'Velit Pellentesque Institute'
};

// Werte in ein Array speichern
const employeeValues = Object.values(employee);

console.log(employeeValues);
// Ausgabe: [ 'Bruce Reese', 'diam.sed@augue.org', 'Velit Pellentesque Institute' ]
Iteration über die Werte
employeeValues.forEach(value => console.log(value));
// Ausgabe:
// Bruce Reese
// diam.sed@augue.org
// Velit Pellentesque Institute
```

⚠️ Achtung:
Man kann nur über Keys auf die Werte im Objekt zugreifen.
Ein Versuch, ein Objekt über die Werte direkt zu indizieren, liefert undefined:

```javascript
employeeValues.forEach(value => console.log(employee[value]));
// Ausgabe:
// undefined
// undefined
// undefined
```

💡 Merksatz:
Object.values() liefert ein Array aller Werte eines Objekts, perfekt für Iterationen über die Inhalte, ohne die Keys zu benötigen.

`Object.entries()`

Die Methode `Object.entries()` erzeugt ein **Array von Arrays**, wobei jedes innere Array ein **Schlüssel-Wert-Paar** des Objekts enthält.  
Damit kannst du sowohl auf Keys als auch auf Werte gleichzeitig zugreifen.

**Syntax:**  

```javascript
const employee = {
  name: 'Bruce Reese',
  email: 'diam.sed@augue.org',
  company: 'Velit Pellentesque Institute'
};

const employeeEntries = Object.entries(employee);

console.log(employeeEntries);
/*
[
  [ 'name', 'Bruce Reese' ],
  [ 'email', 'diam.sed@augue.org' ],
  [ 'company', 'Velit Pellentesque Institute' ]
]
*/

// Zugriff über Index
console.log(employeeEntries[0]); // [ 'name', 'Bruce Reese' ]
console.log(employeeEntries[1]); // [ 'email', 'diam.sed@augue.org' ]
Iteration über die Key-Value-Paare
employeeEntries.forEach(entry => {
  const key = entry[0];
  const value = entry[1];
  console.log(`Key: ${key}, Value: ${value}`);
});

// Ausgabe:
// Key: name, Value: Bruce Reese
// Key: email, Value: diam.sed@augue.org
// Key: company, Value: Velit Pellentesque Institute
```

💡 Merksatz:
Object.entries() liefert ein Array aus [Key, Value]-Arrays, ideal für Iterationen, bei denen man sowohl Schlüssel als auch Werte gleichzeitig benötigt.

## Übersicht: Iteration über Objekte

| Methode              | Beschreibung                              | Rückgabewert                    | Beispiel für Iteration                                                       |
|----------------------|-------------------------------------------|---------------------------------|------------------------------------------------------------------------------|
| `Object.keys(obj)`   | Liefert **alle Schlüssel** eines Objekts  | Array der Keys                  | `Object.keys(employee).forEach(key => console.log(key))`                     |
| `Object.values(obj)` | Liefert **alle Werte** eines Objekts      | Array der Values                | `Object.values(employee).forEach(value => console.log(value))`               |
| `Object.entries(obj)`| Liefert **[Key, Value]-Paare** als Array  | Array von Arrays [[key, value]] | `Object.entries(employee).forEach(([key, value]) => console.log(key, value))`|

### Beispielobjekt

```javascript
const employee = {
  name: 'Bruce Reese',
  email: 'diam.sed@augue.org',
  company: 'Velit Pellentesque Institute'
};
```

Nutzung der Methoden

```javascript
// Object.keys()
Object.keys(employee).forEach(key => console.log(key));
// name
// email
// company

// Object.values()
Object.values(employee).forEach(value => console.log(value));
// Bruce Reese
// diam.sed@augue.org
// Velit Pellentesque Institute

// Object.entries()
Object.entries(employee).forEach(([key, value]) => console.log(`Key: ${key}, Value: ${value}`));
// Key: name, Value: Bruce Reese
// Key: email, Value: diam.sed@augue.org
// Key: company, Value: Velit Pellentesque Institute
```

💡 Merksatz:

Keys → nur Schlüssel
Values → nur Werte
Entries → Schlüssel und Wert zusammen
Alle Methoden liefern Arrays, daher lassen sich Array-Methoden wie forEach, map, filter direkt nutzen.

## Hinzufügen einer neuen Eigenschaft zu Objekten in einem Array

Du hast ein Array von Objekten:

```javascript
let arr = [
  {name: 'Joe', age: 25},
  {name: 'Moe', age: 30},
  {name: 'Doe', age: 35}
];
```

📝 Ziel -> Ein neues Array erstellen, bei dem jedes Objekt eine zusätzliche Eigenschaft olderAge hat, die 5 Jahre mehr als age beträgt.

Richtige Lösung: map() + Spread-Operator

```javascript
let newArr = arr.map(obj => ({...obj, olderAge: obj.age + 5}));

console.log(newArr);
/*
[
  { name: 'Joe', age: 25, olderAge: 30 },
  { name: 'Moe', age: 30, olderAge: 35 },
  { name: 'Doe', age: 35, olderAge: 40 }
]
*/
```

💡 Merksatz:

map() erzeugt ein neues Array, ohne das Original zu verändern.
{...obj} kopiert alle bestehenden Eigenschaften.
Neue Eigenschaften können direkt in diesem Objekt-Literal hinzugefügt werden.

### 📝 Aufgabe: Employee and Company

Gegeben ist ein Array mit Objekten, die Informationen über Mitarbeiter enthalten.  
Jedes Objekt besitzt die Eigenschaften `name`, `email` und `company`.
Schreibe eine Funktion `employeeAndCompany`, die das Array durchläuft und für jedes Objekt folgenden Text in der Konsole ausgibt:

`Employee <name> works for <company>`

Greife auf die Eigenschaften der Objekte zu
Iteriere über das Array
Gib die Daten im richtigen Format aus

💡 Tipp:
Du kannst z. B. forEach() oder map() verwenden, um durch das Array zu iterieren.

```js
function employeeAndCompany(arr) {
  arr.forEach(obj => {
    const { name, company } = obj;
    console.log(`Employee ${name} works for ${company}`);
  });
}

// Beispiel
const data = [
  {
    name: "Bruce Reese",
    email: "diam.sed@augue.org",
    company: "Velit Pellentesque Institute"
  },
  {
    name: "Clarke Eaton",
    email: "tempor@arcused.ca",
    company: "Duis Ltd"
  }
  
];

employeeAndCompany(data);
```

## Objekte und Methoden in JavaScript

Beim Programmieren erstellen wir oft **Objekte**, um Dinge aus der realen Welt darzustellen: Benutzer, Produkte, Karten und vieles mehr.

Im echten Leben kann man Produkte im Detail ansehen oder sie in den Warenkorb legen.  
Genau solche Aktionen sind auch in der Programmierung möglich.

In JavaScript werden diese Aktionen durch **Objekt-Methoden** ermöglicht.

---

## Was sind Objekt-Methoden?

Objekt-Methoden sind **Funktionen, die als Eigenschaften (Properties) in einem Objekt gespeichert sind**.

Sie ermöglichen es einem Objekt, **bestimmte Aktionen auszuführen**.

---

```js id="v3k8pq"
let product = {
  name: "Laptop",
  price: 1200,
  showDetails: function () {
    console.log("Produkt: " + this.name + ", Preis: " + this.price);
  }
};

product.showDetails();
```

## Erstellen von Objekt-Methoden

Um zu verstehen, wie Objekt-Methoden erstellt werden, betrachten wir ein Beispiel.

```js
let product = {
  name: "Microwave",
  description: "With oven mode",
  price: 398
};

product.giveDiscount = function() {
  console.log("You have a 10% discount!");
};

product.giveDiscount(); // You have a 10% discount!

```

Erklärung - > Wir haben ein Objekt product mit Eigenschaften wie:
- name
- description
- price

Danach fügen wir dynamisch eine Methode hinzu:

```js
product.giveDiscount = function() { ... }
```

Diese Methode ist eine Funktion, die als Eigenschaft des Objekts gespeichert wird.

Anschließend rufen wir sie auf:

```js
product.giveDiscount();
```

**⚠️ Wichtig:**

Objekt-Methoden sind einfach Funktionen innerhalb eines Objekts.
Sie ermöglichen es dem Objekt, Aktionen auszuführen, z. B. Informationen auszugeben oder Werte zu verändern.

## Kurzschreibweise für Objekt-Methoden

Es gibt eine kürzere und modernere Schreibweise, um Funktionen als Eigenschaften in Objekten zu definieren.

---

### Klassische Schreibweise

```js
id="a2k9sd"
let person = {
  greetings: function() {
    console.log("Hello");
  }
};
```

### Kurzschreibweise

```js
let person = {
  greetings() {
    console.log("Hello");
  }
};
```

- Das Wort function wird weggelassen
- Die Methode wird direkt im Objekt definiert
- Der Code ist kürzer und besser lesbar

Die *Kurzschreibweise* ist heute Standard in JavaScript, da sie:

- weniger Schreibarbeit erfordert
- den Code übersichtlicher macht

## `this`-Keyword in JavaScript

In der natürlichen Sprache können wir mit Pronomen auf eine bestimmte Person, ein Tier oder ein Objekt verweisen.  
In JavaScript funktioniert das ähnlich mit dem Schlüsselwort `this`.

---

```js id="a9k3sd"
let user = {
  firstName: "Elliot",
  lastName: "Alderson",
  fullName() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(user.fullName()); // Elliot Alderson
```

*this* verweist auf das Objekt, in dem die Methode aufgerufen wird. In diesem Fall ist das Objekt *user*
Dadurch kann die Methode auf die Eigenschaften des Objekts zugreifen:

- this.firstName
- this.lastName

👉 this bedeutet in einer Objektmethode immer: *„das Objekt, das die Methode gerade ausführt“*

💡 Hinweis: bei verschachtelten Objekten -> Bei verschachtelten Strukturen kann this verwirrend sein.

💡 Merke dir:

*this* zeigt nicht einfach auf das äußere Objekt -> sondern auf das Objekt, dessen Methode gerade ausgeführt wird

Das *this-Keyword* erlaubt es Methoden, flexibel auf Daten im eigenen Objekt zuzugreifen und macht JavaScript-Objekte dadurch dynamischer und leistungsfähiger.

## „this“ und Arrow Functions

Arrow Functions können kein eigenes `this` binden. Das bedeutet, dass sie **kein eigenes `this` besitzen**.

Wenn wir `this` innerhalb einer Arrow Function verwenden, wird dessen Wert **aus dem umgebenden Kontext** (also einer normalen Funktion) übernommen:

```javascript
let movie = {
  name: "The Thirteenth Floor",
  year: 1999,
  getInfo() {
    let arrow = () => console.log("Der Film " + this.name + " wurde im Jahr " + this.year + " gedreht");
    arrow();
  }
};

movie.getInfo(); 
```

// Der Film The Thirteenth Floor wurde im Jahr 1999 gedreht.

## 📘 Erklärung

- 🧩 Die Methode `getInfo()` ist eine normale Funktion und besitzt ihr eigenes `this`.
- ➡️ Die Arrow Function `arrow` übernimmt dieses `this` aus der äußeren Funktion.
- 🎯 Dadurch verweist `this` korrekt auf das Objekt `movie`.

---

## ⚠️ Hinweis - 📚 Die Besonderheiten von `this` in JavaScript gehen weit über diese Beispiele hinaus.  

### 1. 📦 Methode in einem Objekt
👉 `this` = das Objekt selbst

```javascript
let obj = {
  name: "Kasia",
  show() {
    console.log(this.name);
  }
};
```

### 2. 🌐 Normale Funktion (ohne Objekt)

👉 this = globales Objekt (window im Browser) oder undefined im strict mode

```javascript
function show() {
  console.log(this);
}
```

### 3. 🏹 Arrow Function

👉 kein eigenes this
👉 übernimmt this vom äußeren Kontext

```javascript
let obj = {
  name: "Kasia",
  show() {
    let arrow = () => console.log(this.name);
    arrow();
  }
};
```

### 4. 🔧 call / apply / bind

👉 this wird manuell gesetzt

```javascript
function show() {
  console.log(this.name);
}

show.call({ name: "Kasia" });
```

### 5. 🆕 Konstruktor (new)

```javascript
👉 this = neues Objekt

function Person(name) {
  this.name = name;
}

let p = new Person("Kasia");
```

🎯 Goldene Regel

👉 this hängt davon ab, WIE eine Funktion aufgerufen wird – nicht wo sie steht!

### 🛠️ Problem: „undefined“-Werte in `this`

#### 📌 Ausgangscode

```javascript
let laptop = {
    brand: "Dell",
    model: "XPS 13",
    printSpecs: () => {
        console.log(`This is a ${this.brand} ${this.model}`);
    }
};

laptop.printSpecs();
```

❌ Problem - > Ausgabe: - > This is a undefined undefined

🧠 Ursache 👉 Das Problem liegt an der Arrow Function (=>).

🔴 Wichtiger Punkt:
- Arrow Functions haben kein eigenes this
- Sie übernehmen this aus dem äußeren Kontext (hier: nicht das Objekt laptop)

Deshalb ist:
- this.brand → undefined
- this.model → undefined

✅ Lösung 👉 Verwende eine normale Funktion (Function Expression):

```javascript
let laptop = {
    brand: "Dell",
    model: "XPS 13",
    printSpecs: function() {
        console.log(`This is a ${this.brand} ${this.model}`);
    }
};

laptop.printSpecs();
```

🎯 Ergebnis

This is a Dell XPS 13

```javascript
//🧾 Alternative (kurze Schreibweise)
let laptop = {
    brand: "Dell",
    model: "XPS 13",
    printSpecs() {
        console.log(`This is a ${this.brand} ${this.model}`);
    }
};
```

🧠 Merksatz

👉 Arrow Functions eignen sich nicht als Objektmethoden, wenn this benötigt wird.
👉 Normale Funktionen binden this korrekt an das Objekt.