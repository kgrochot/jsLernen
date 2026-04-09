# Binäre arithmetische Operatoren in JavaScript

JavaScript stellt Operatoren zur Verfügung, um **arithmetische Berechnungen** durchzuführen.  
Sie werden **binäre Operatoren** genannt, weil sie mit **zwei Operanden** (Werten) arbeiten.

## Addition `+`

```javascript
console.log(12 + 26); // 38
console.log(5 + 4.5); // 9.5
```

Der Operator `+` kann auch **Strings verbinden (concatenation)**.

```javascript
console.log("Mein Name ist " + "John"); // Mein Name ist John
```

---

## Subtraktion `-`

```javascript
console.log(5 - 3);   // 2
console.log(6 - 0.1); // 5.9
```

---

## Multiplikation `*`

```javascript
console.log(10 * 4);  // 40
console.log(2 * 1.5); // 3
```

---

## Division `/`

```javascript
console.log(8 / 2);  // 4
console.log(12 / 5); // 2.4
```

---

## Rest (Modulo) `%`

Der Operator `%` gibt den **Rest einer Division** zurück.

```javascript
console.log(10 % 3); // 1
console.log(12 % 4); // 0
```

---

## Potenz `**`

Mit diesem Operator kann man **Potenzen berechnen**.

```javascript
console.log(2 ** 3); // 8
```

---

## Komplexe Ausdrücke

Arithmetische Operationen können kombiniert werden.

```javascript
console.log(1 + 3 * 4 - 2); // 11
```

Die Berechnung folgt den **mathematischen Prioritätsregeln**.  
Multiplikation hat eine **höhere Priorität** als Addition und Subtraktion.

---

## Klammern verwenden

Mit **Klammern** kann man die Reihenfolge der Berechnung bestimmen.

```javascript
console.log((1 + 3) * (4 - 2)); // 8
```

Klammern können auch **verschachtelt** werden, um den Code übersichtlicher zu machen.

## Unäre Operatoren und Operator-Priorität in JavaScript

### Unäre Operatoren

Unäre Operatoren wirken auf **einen einzelnen Operanden**.

### Unary Plus `+`

Der **unäre Plus-Operator** zeigt einen positiven Wert an.  
Wenn man nur mit Zahlen arbeitet, ist dieser Operator meist optional.

```javascript
console.log(+7); // 7
```

### Unary Minus `-`

Der **unäre Minus-Operator** macht einen Wert oder Ausdruck negativ.

```javascript
console.log(-9);         // -9
console.log(-(100 + 5)); // -105
```

---

## Operator-Priorität

Wenn mehrere Operatoren in einem Ausdruck vorkommen, werden sie **nach ihrer Priorität (precedence)** ausgeführt.

Die Reihenfolge von **höchster zu niedrigster Priorität**:

1. **Klammern** `()`
2. **Unäres Plus / Minus** `+` `-`
3. **Potenzierung** `**`
4. **Multiplikation und Division** `*` `/`
5. **Addition und Subtraktion** `+` `-`

Diese Reihenfolge entspricht den **üblichen mathematischen Regeln**.

---

## Fazit

Arithmetische Operationen sind ein **wichtiger Bestandteil der Programmierung**.  
JavaScript bietet verschiedene Operatoren für Berechnungen mit Zahlen und Strings:

- **Addition** `+`
- **Subtraktion** `-`
- **Multiplikation** `*`
- **Division** `/`
- **Modulo (Rest)** `%`
- **Potenzierung** `**`

Die Ausführungsreihenfolge folgt den **mathematischen Regeln der Priorität**.  
Mit **Klammern** kann man die Reihenfolge der Berechnung gezielt steuern.

Durch das Verständnis dieser Operatoren können Entwickler **komplexere Ausdrücke schreiben und leistungsfähigere Programme entwickeln**.
