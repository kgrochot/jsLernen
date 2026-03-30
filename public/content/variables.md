# Was ist eine Variable?

Eine Variable ist ein reservierter Speicherbereich im Arbeitsspeicher, in dem Daten gespeichert, abgerufen und verändert werden können.

Man kann sich eine Variable wie eine **Box mit einem Etikett** vorstellen. Das Etikett ist der Name der Variable und ermöglicht es, den Inhalt später wiederzufinden oder zu verändern.

Jede Variable besitzt einen **eindeutigen Namen**, der sie von anderen Variablen unterscheidet.

---

## Wie deklariert man eine Variable?

Bevor man eine Variable verwendet, sollte man sie **deklarieren**. Das bedeutet, dass man sie erstellt und ihr optional einen Wert zuweist.  
In JavaScript gibt es zwei moderne Schlüsselwörter zur Deklaration von Variablen:

- **let** – definiert eine veränderbare Variable, deren Wert später geändert werden kann.
- **const** – deklariert eine konstante Variable. Ihr Wert kann nach der Zuweisung **nicht mehr überschrieben** werden.

Beim Deklarieren einer Variable sollte man ihr einen **passenden Namen** geben.  
Der Name sollte den Inhalt der Variable möglichst gut beschreiben.

Sinnvolle und gut lesbare Variablennamen machen den Code **verständlicher und leichter wartbar**.

---

## Regeln & Tipps

- Nur Buchstaben, Zahlen, Unterstriche `_` und Dollarzeichen `$` verwenden.
- Darf **nicht mit einer Zahl beginnen**.
- Keine **reservierten Wörter** (z. B. `let`, `const`, `function`) verwenden.
- **Beschreibende Namen** wählen, z. B. `benutzerName` statt `bn`.
- **CamelCase** ist üblich: `let meineVariable = 5;`


---

## Beispiele für Variablen

```javascript
let name = "Katarzyna";
let benutzerAlter = 30;
const geburtsJahr = 1995;

// Deklaration von Variablen
let vorname = "Anna";
let nachname = "Schmidt";
const geburtsJahr = 1990;

// Berechnung Alter
let aktuellesJahr = 2026;
let alter = aktuellesJahr - geburtsJahr;

console.log("Name:", vorname, nachname);
console.log("Alter:", alter);
```

💡 Merke:

1. let → wenn sich der Wert ändern kann.
2. const → wenn der Wert fest bleiben soll.
**Klar benannte Variablen verbessern die Lesbarkeit und Wartbarkeit des Codes.**

## Primitive Datentypen

```javascript
let name = "Katarzyna"   // String
let age = 30             // Number
let isDeveloper = true   // Boolean
let emptyValue = null    // Null
let notDefined           // Undefined
```

## Funktionen

1. Klassische Funktion

```javascript
function greet(name) {
  return "Hallo " + name;
}

greet("Katarzyna");
```

2. Arrow Function

```javascript
const greet = (name) => {
  return "Hallo " + name;
};
```

3. Arrays

```javascript
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]); // Apple
Objekte
const person = {
  name: "Katarzyna",
  age: 30,
  job: "Web Developer"
};
console.log(person.name);
```

4. DOM (Document Object Model)

```javascript
const title = document.querySelector("h1");
title.textContent = "Neue Überschrift";
Variablen-Deklaration
var → Funktions-Scope, vor ES6 Standard
let → Block-Scope, änderbar
const → Block-Scope, konstant
```

Beispiele Scope

```javascript
if (true) {
  let age = 21;
}
console.log(age); // Fehler

if (true) {
  var age = 21;
}
console.log(age); // 21
```

**Best Practices**
Standardmäßig const verwenden
let nur bei Bedarf, wenn Wert geändert wird
var vermeiden
Variablen nicht ohne Schlüsselwort deklarieren → globale Variablen vermeiden
Aussagekräftige Namen für Variablen wählen

**Zusammenfassung:**
Variablen speichern Daten, die Programme verarbeiten.
Sie sind die Grundlage für komplexere Programme und gut lesbaren, fehlerfreien Code.