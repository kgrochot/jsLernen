# Boolean-Typ (Boolescher Datentyp)

Es gibt Aussagen, bei denen wir sagen können, ob sie **wahr** oder **falsch** sind.

Zum Beispiel:

- *Heute regnet es* → Wenn es tatsächlich regnet, ist die Aussage **wahr**
- *5 < 3* → Diese Aussage ist immer **falsch**
- *Der Mond umkreist die Erde* → Diese Aussage ist **wahr**

Solche Aussagen gehören zu einem speziellen Datentyp: dem **logischen** oder **booleschen Datentyp**.

---

### Werte des Boolean-Typs

Eine boolesche Variable kann **nur zwei Werte** annehmen:

- **true** → *wahr*
- **false** → *falsch*

---

### Beispiel in JavaScript

```javascript
let bool = true;
console.log(bool); // true

/* Es wird eine Variable bool erstellt
Ihr wird der Wert true (wahr) zugewiesen
Mit console.log wird der Wert ausgegeben → true*/
```

### Logische Operatoren (Logical Operators)

Logische Operatoren werden verwendet, um mit **booleschen Werten (true/false)** zu arbeiten.

In JavaScript gibt es drei davon:

- `&&` → **UND (AND)**
- `||` → **ODER (OR)**
- `!` → **NICHT (NOT)**

- `&&` und `||` sind **binär** → sie brauchen zwei Werte  
- `!` ist **unär** → es braucht nur einen Wert  

---

### AND (&&)

Gibt nur dann **true** zurück, wenn **beide Werte true sind**:

```javascript
console.log(true && true);   // true  → beide sind wahr
console.log(true && false);  // false → einer ist falsch
console.log(false && true);  // false → einer ist falsch
console.log(false && false); // false → beide sind falsch
```

### OR (||)

Gibt true zurück, wenn mindestens ein Wert true ist:

```javascript
console.log(true || true);   // true  → beide sind wahr
console.log(true || false);  // true  → einer ist wahr
console.log(false || true);  // true  → einer ist wahr
console.log(false || false); // false → beide sind falsch
```

### NOT (!)

Kehrt den Wert um (true → false, false → true):

```javascript
console.log(!false);  // true  → wird umgedreht
console.log(!true);   // false → wird umgedreht
console.log(!!true);  // true  → doppelte Negation = ursprünglicher Wert
```

### Erweiterte Fähigkeiten von logischen Operatoren in JavaScript

Logische Operatoren in JavaScript können **mehr als nur mit true und false arbeiten**.  
Sie funktionieren auch mit **anderen Datentypen** wie Zahlen und Strings.

---

### Wahrheitswerte (Truthiness)

JavaScript interpretiert Werte oft als **wahr (truthy)** oder **falsch (falsy)**:

- **Falsy (falsch):**
  - `0`
  - `""` (leerer String)
  - `false`
  - `null`, `undefined`, `NaN`

- **Truthy (wahr):**
  - alle anderen Werte (z. B. `1`, `"Hallo"`, `[]`, `{}`)

---

### Verhalten von && (AND)

- Gibt den **ersten falsy-Wert** zurück  
- Wenn alle Werte wahr sind → gibt den **letzten Wert** zurück  

```javascript
console.log(false && "sun"); // false → erster falsy-Wert
console.log(1 && "hi");      // "hi"  → beide wahr → letzter Wert
```

### Priorität (Operator Precedence)

Bei komplexeren Ausdrücken ist die **Reihenfolge der Auswertung** wichtig.

Die Priorität der logischen Operatoren in JavaScript ist:

1. `!` → **NICHT (höchste Priorität)**
2. `&&` → **UND**
3. `||` → **ODER (niedrigste Priorität)**

---

### Beispiele

```javascript
console.log(!false && !true);   // false → ! wird zuerst ausgeführt
// Schritt für Schritt:
// !false = true
// !true  = false
// true && false = false

console.log(!(false && !true)); // true → Klammern ändern die Reihenfolge
// Schritt für Schritt:
// !true = false
// false && false = false
// !false = true
```

## Aufgabe

```javascript
const x = '10'; 
const y = 10; 
const z = true; 

console.log((x == y) && z); 
console.log((x === y) || !z);
```

🔹 1. (x == y) && z

```javascript
x == y → '10' == 10
```

- == prüft nur auf Gleichheit mit Typumwandlung
- '10' (String) wird zu 10 (Number) umgewandelt → true
- true && z → true && true → true

✅ Ausgabe: true

🔹 2. (x === y) || !z

```javascript
x === y → '10' === 10
```

- === prüft Gleichheit ohne Typumwandlung
- String '10' ist nicht gleich Number 10 → false
- !z → !true → false
- false || false → false

✅ Ausgabe: false

🔹 Ergebnis in der Konsole
true
false