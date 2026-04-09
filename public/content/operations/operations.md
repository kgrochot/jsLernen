# 1️⃣ Operationen (Operations)
JavaScript unterstützt verschiedene Arten von Operationen auf Werten:

## 1.1 Arithmetische Operatoren (Arithmetic operators)

- `+` Addition / String-Konkatenation  
- `-` Subtraktion  
- `*` Multiplikation  
- `/` Division  
- `%` Modulo (Restwert)  
- `**` Exponentiation  

---

## 1.2 Typumwandlung (Type conversion)

- **Explizit:** `Number()`, `String()`, `Boolean()`  
- **Implizit:** automatische Konvertierung durch Operatoren, z. B.:  
  - `0 - false` → 0  
  - `+"4"` → 4  
  - `"33" + 1"` → `"331"`  

---

## 1.3 Vergleichsoperatoren (Comparison operators)

- `==` Gleich (losgelöst vom Typ)  
- `===` Gleich (typensicher)  
- `!=` Ungleich (losgelöst vom Typ)  
- `!==` Ungleich (typensicher)  
- `<, >, <=, >=` Größer / Kleiner  

---

## 1.4 Inkrement / Dekrement (Increment and Decrement)

- `++` Erhöht Wert um 1  
- `--` Verringert Wert um 1  
- **Präfix:** `++x` → zuerst erhöhen, dann verwenden  
- **Postfix:** `x++` → zuerst verwenden, dann erhöhen  

---

## 1.5 Zufallszahlen (Random: getting and generating)

- `Math.random()` → generiert Zahl zwischen 0 (inkl.) und 1 (exkl.)  

- Zufallszahl in einem Bereich:  

```js
let min = 5;
let max = 10;
let rand = Math.random() * (max - min) + min;
```