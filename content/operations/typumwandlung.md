# Typumwandlung in JavaScript

JavaScript unterstützt **automatische Typumwandlung**.  

- Das bedeutet: Der Interpreter wandelt Werte **selbstständig** in den Datentyp um, den er an einer bestimmten Stelle im Programm erwartet.  
- Diese automatische Umwandlung nennt man **implizite Typumwandlung** oder **Type Coercion**.

---

## Wichtige Punkte

- Auf den ersten Blick kann Type Coercion nützlich erscheinen.  
- Allerdings kann sie manchmal **verwirren**, wenn dein Code unerwartete Ergebnisse liefert oder Fehler auftreten.  

---

## Explizite Typumwandlung

- Häufig musst du **manuell** angeben, dass ein Wert in einen bestimmten Datentyp geändert werden soll.  
- Dies nennt man **explizite Typumwandlung**.

**Beispiele:**

```javascript
Number('123');    // String → Number
String(123);      // Number → String
Boolean(0);       // Number → Boolean (false)
Boolean('hello'); // String → Boolean (true)
```

### String Conversion in JavaScript

**String Conversion** tritt auf, wenn ein Wert als **String** dargestellt werden soll.

---

#### 1️⃣ Explizite Umwandlung

- Verwende die Funktion `String()`, um einen Wert **manuell** in einen String zu konvertieren:

```javascript
String(123);   // "123"
String(false); // "false"
String(-12.3); // "-12.3"
String(true);  // "true"
```

Die Umwandlung ist einfach und intuitiv.

#### 2️⃣ Implizite Umwandlung

JavaScript konvertiert automatisch zu String, wenn der + Operator verwendet wird und einer der Operanden ein String ist:

```javascript
"3" + 4                        // "34"
4 + ""                         // "4"
true + "detective"             // "truedetective"
"You are " + 25 + " years old" // "You are 25 years old"
```

Die Position des Strings (links oder rechts) spielt keine Rolle.

#### 3️⃣ String Concatenation - Reihenfolge beachten

Die arithmetische Reihenfolge wird berücksichtigt:
Zahlen werden zuerst addiert, bevor die Umwandlung zu String erfolgt:

```javascript
3 + 10 + "1" // "131", nicht "3101"
```

💡 Tipp:

Implizite String-Konvertierung kann verwirrend sein, also achte genau auf die Position von Zahlen und Strings in Ausdrücken.

## Numeric Conversion in JavaScript

**Numeric Conversion** tritt auf, wenn ein Wert als **Number** dargestellt werden soll.

---

#### 1️⃣ Explizite Numeric Umwandlung

- Verwende die Funktion `Number()`, um einen Wert **manuell** in eine Zahl zu konvertieren:

```javascript
Number("1");    // 1
Number(" 37 "); // 37
Number("");     // 0
Number("\n3");  // 3
Number("\n");   // 0
Number("\t");   // 0
Number(true);   // 1
Number(false);  // 0
Regeln:
Leerzeichen, \n oder \t am Anfang oder Ende werden entfernt
Leerer String → 0
Boolean: true → 1, false → 0
```

Ungültige Strings → NaN (Not a Number)

Number("apple"); // NaN

#### 2️⃣ Implizite Umwandlung

```javascript
Tritt bei arithmetischen Operationen auf:
true + 43   // 44  → true = 1
3 - false   // 3   → false = 0
10 / "5"    // 2   → "5" wird Number → 5
-true       // -1
+"85"       // 85  → unary + wandelt String in Number
Achtung: Binary + verhält sich anders:
"5" + 7          // "57" → String-Konkatenation
Number("5" + 7)  // 57  → zuerst "5" + 7 = "57", dann Number("57") = 57
```

💡 Merke:

- Explizite Umwandlung → Number() oder unary +
- Implizite Umwandlung → fast alle mathematischen Operatoren, außer bei + mit String
- Ungültige Strings → NaN

### Boolean Conversion in JavaScript

**Boolean Conversion** tritt auf, wenn ein Wert als **Boolean** dargestellt werden soll.

---

#### 1️⃣ Explizite Umwandlung

- Verwende die Funktion `Boolean()`, um einen Wert **manuell** in Boolean zu konvertieren:

```javascript
Boolean(1);            // true
Boolean(0);            // false
Boolean("Am I nice?"); // true
Boolean("");           // false
Regeln:
Werte, die false werden:
false, undefined, null, 0, NaN, ""
```

Alle anderen Werte → true

#### 2️⃣ Implizite Umwandlung

Tritt bei logischen Operatoren auf: ||, &&, !

```javascript
!!3                      // true
0 || "go"                // "go"
"Master" && "Margarita"  // "Margarita"
```

Hinweis:

- || und && wandeln Werte implizit in Boolean um, liefern aber letztlich den Originalwert eines Operanden zurück
- ! wandelt sofort in Boolean und kehrt den Wert um

## 💡 Aufgabe JavaScript: `NaN` prüfen

Welche der folgenden Ausdrücke ergibt `NaN`?

---

## Optionen prüfen

### 1️⃣ `Number("123abc")`

- Enthält **Zahlen und Buchstaben** → keine gültige Zahl
- Ergebnis: **NaN** ✅

---

### 2️⃣ `Number(" 123 ")`

- Nur Zahlen mit Leerzeichen
- Leerzeichen werden ignoriert
- Ergebnis: **123**

---

### 3️⃣ `Number(true)`

- `true` wird in Zahl konvertiert → **1**
- Ergebnis: **1**

---

### 4️⃣ `Number("")`

- Leerer String wird in Zahl konvertiert → **0**
- Ergebnis: **0**

---

## ✅ Richtige Antwort

*`Number("123abc")`*

## 💡 Aufgabe Konvertierung in Zahlen

Welche Werte werden bei impliziter numerischer Konvertierung in Zahlen umgewandelt?

---

### 1️⃣ `0 - false`

- `-` ist ein arithmetischer Operator → beide Operanden werden in Zahlen konvertiert  
- `0 - false` → `0 - 0` → **0** ✅  
- **Implizite Zahl: ja**

### 2️⃣ `+"4"`

- Unäres Plus konvertiert String in Zahl  
- `+"4"` → **4** ✅  
- **Implizite Zahl: ja**

### 3️⃣ `"33" + 1`

- `+` mit String → String-Konkatenation, keine Zahl  
- `"33" + 1` → `"331"` ❌  
- **Implizite Zahl: nein**

### 4️⃣ `true + true`

- `+` mit Booleans → Booleans werden in Zahlen konvertiert  
- `true + true` → `1 + 1` → **2** ✅  
- **Implizite Zahl: ja**

---
