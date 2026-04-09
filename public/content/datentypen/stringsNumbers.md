
# JavaScript Data Types – Strings und Numbers

## Strings

Strings werden verwendet, um **Textinformationen** zu speichern.  
Sie werden in **einfachen (`'`) oder doppelten (`"`) Anführungszeichen** geschrieben.

### Beispiele für Strings

```js
console.log("");             // leerer String
console.log("string");       // ein Wort
console.log("Hello, world"); // ein Satz
```

```js
console.log('a');    // einzelnes Zeichen
console.log('1234'); // Zahlen als String
```

**Wichtig:** Zahlen in Anführungszeichen sind **Strings**, keine Numbers.

---

## Numbers

Numbers werden verwendet, um **numerische Werte** darzustellen.

### Beispiele für Numbers

```js
console.log(12);
console.log(0);
console.log(-11);
console.log(-1.04);
```

Es gibt zwei häufige Arten von Zahlen:

- **Integer (Ganzzahlen)** – z. B. `12`
- **Floating-Point Numbers (Dezimalzahlen)** – z. B. `-1.04`

Ganzzahlen eignen sich zum **Zählen von Objekten**,  
Dezimalzahlen für **statistische oder wissenschaftliche Berechnungen**.

---

## typeof Operator

Mit dem **`typeof` Operator** kann man den Datentyp prüfen.

### Beispiele

```js
console.log(typeof(9)); // number
```

```js
console.log(typeof 9); // number
```

Beide Schreibweisen liefern das gleiche Ergebnis.

---

## Zusammenfassung

- **Strings** speichern Text.
- **Numbers** speichern numerische Werte.
- Mit **`typeof`** kann man den Datentyp einer Variable prüfen.