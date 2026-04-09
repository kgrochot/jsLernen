# Primitive Datentypen und Non-Primitive Datentypen

**Primitive Werte sind **einfache Datentypen**, die **nicht veränderbar** (immutable) sind.**

| Typ       | Beispiele                   |
| --------- | --------------------------- |
| String    | `"Hallo Welt"`              |
| Number    | `42`, `3.14`                |
| Boolean   | `true`, `false`             |
| Null      | `null`                      |
| Undefined | `undefined`                 |
| Symbol    | `Symbol('id')`              |
| BigInt    | `12345678901234567890n`     |

**Eigenschaften:**

- Werden **nach Wert kopiert**, nicht nach Referenz.
- Kann **nicht weiter unterteilt** werden.

---

## Non-Primitive Datentypen

Non-Primitive Werte sind **komplexe Datentypen**, z. B. **Objekte**, **Arrays** oder **Funktionen**.

Beispiele:

```javascript
let person = { name: "John", age: 30 }; // Objekt
let numbers = [1, 2, 3];                // Array
function greet() { console.log("Hi"); } // Funktion
```

## Unterschied zwischen `null` und `undefined` und wann sie verwendet werden

### Null

`null` bedeutet, dass einer Variablen explizit ein leerer oder nicht vorhandener Wert zugewiesen wurde.
Wenn eine Variable `null` ist, wissen wir, dass sie **keinen akzeptablen Wert** wie Zahl, String oder einen anderen Datentyp enthält.

Beispiel:

```javascript
let name = null;
console.log(name); // null
```

## Undefined

**undefined** wird zurückgegeben, wenn eine Variable deklariert, aber nicht gesetzt wurde.

```javascript
let count;
console.log(count); // undefined
```

Hier wurde wie erwartet undefined in die Konsole ausgegeben.

undefined kann auch auftreten, wenn auf nicht vorhandene Eigenschaften eines Objekts zugegriffen wird:

```javascript
let person = {
  age: 27
};

console.log(person.name); // undefined
```

In diesem Fall wird undefined zurückgegeben, weil die Eigenschaft name im Objekt nicht definiert ist.

Außerdem wird undefined zurückgegeben, wenn einem Funktionsparameter kein Wert übergeben wird:

```javascript
function getDetails(a) {
  console.log(a);
}

getDetails(); // undefined
```

Im obigen Beispiel wird undefined ausgegeben, da der Parameter a in der Funktionsaufruf fehlt.

## Merkhilfe: `null` vs `undefined`

| Merkmal                | `null`                                  | `undefined`                            |
|------------------------|---------------------------------------- |----------------------------------------|
| Bedeutung              | Wert **bewusst leer** gesetzt           | Wert **nicht gesetzt** oder fehlt      |
| Initialisierung        | `let x = null;`                         | `let x;`                               |
| Objekt-Eigenschaften   | Wird nicht automatisch erzeugt          | Wenn Property fehlt → `undefined`      |
| Funktionsparameter     | Kann explizit `null` übergeben          | Wenn Parameter fehlt → `undefined`     |
| Typ                    | `"object"` (JavaScript-Quirk)           | `"undefined"`                          |
| Wann verwenden?        | Um **bewusst Leere oder "kein Wert"** zu signalisieren | Um zu prüfen, ob ein Wert **nicht vorhanden** ist |

### Faustregel

- **null** = "Hier gibt es absichtlich keinen Wert."  
- **undefined** = "Hier wurde kein Wert gesetzt oder existiert nicht."

## Datentypen prüfen

`null` und `undefined` bedeuten buchstäblich „kein Wert“, aber sie haben **verschiedene Datentypen**:

```javascript
console.log(typeof null);       // object
console.log(typeof undefined);  // undefined
```

## Übersicht: `null` vs `undefined` – Datentypen

```text
┌───────────────────────┐
│ Variable existiert?    │
└─────────┬─────────────┘
          │
          │ Ja, aber Wert fehlt → **undefined**
          │
┌─────────▼─────────────┐
│ let x;                │
│ typeof x → "undefined"│
└───────────────────────┘

          │
          │ Wert bewusst auf „leer“ gesetzt → **null**
          │
┌─────────▼─────────────┐
│ let y = null;          │
│ typeof y → "object"    │
└───────────────────────┘
```

## Praxisbeispiel: `null` vs `undefined`

```javascript
// undefined: Variable existiert, Wert aber nicht gesetzt
let age;
console.log(age);           // undefined
console.log(typeof age);    // "undefined"

// null: Wert bewusst auf „leer“ gesetzt
let name = null;
console.log(name);          // null
console.log(typeof name);   // "object" (merkwürdiger JS-Quirk)

// Beispiel mit Bedingung
if (age === undefined) {
  console.log("Alter ist noch nicht definiert!");
}

if (name === null) {
  console.log("Name wurde bewusst leer gelassen!");
}

// Unterschied in der Praxis
console.log(age == null);    // true, == prüft locker (null oder undefined)
console.log(age === null);   // false, === prüft streng (nur null)

// Werte setzen
age = 25;
name = "Anna";

console.log(age, name);      // 25 "Anna"
```
