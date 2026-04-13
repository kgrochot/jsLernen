# 🧩 Eingebaute Funktionen (Built-in Functions)

Du weißt bereits, was Funktionen sind 👍  

## 🧠 Kurze Erinnerung: Was sind Funktionen?

Funktionen sind **wiederverwendbare Codeblöcke**, die eine bestimmte Aufgabe ausführen.

---

## 🧾 Beispiel

```javascript id="fn_ex_01"
function greet() {
  console.log("Hallo!");
}

greet();
```

In einem Programm kannst du eigene Funktionen erstellen, um bestimmte Aufgaben zu lösen.

---

## 🚀 Aber: Was sind Built-in Functions?

Viele Programmiersprachen (auch JavaScript) haben **eingebaute Funktionen**, die direkt verfügbar sind.

👉 Diese Funktionen:
- sind bereits im System enthalten
- müssen nicht selbst geschrieben werden
- werden sehr häufig gebraucht

---

## 📌 Warum sind sie wichtig?

- ⚡ sparen Zeit
- 🧠 machen Code einfacher
- 🔁 werden überall im Programm verwendet

---

## 🧠 Eingebaute Funktion: `isNaN()`

In JavaScript gibt es den speziellen Wert **`NaN` (Not-a-Number)**.  
Er entsteht, wenn eine Rechenoperation **kein gültiges Ergebnis** liefert.

---

## 📌 Beispiele für `NaN`

```javascript
5 * "word"
0 * Infinity
Math.sqrt(-1)
```

👉 Alle diese Ausdrücke ergeben: NaN

⚠️ Wichtig: NaN ist speziell

Obwohl es „Not-a-Number“ bedeutet, ist der Typ von NaN tatsächlich: 👉 number

❌ Problem bei Vergleichen - > Man könnte denken, das hier funktioniert:

```javascript
let x = NaN;

if (x == NaN) {
  console.log("It works!");
}
```

👉 ❌ Das funktioniert NICHT

🧠 Warum? In JavaScript gilt:
- 👉 NaN == NaN ist immer false
- ✅ Lösung: isNaN()

Um zu prüfen, ob ein Wert NaN ist, nutzt man:

```javascript
let x = NaN;

if (isNaN(x)) {
  console.log("It works!");
}
```

🎯 Ergebnis 👉 Der Code wird ausgeführt, wenn x tatsächlich NaN ist.

🧠 Merksätze
- ❌ NaN == NaN → immer false
- ✅ isNaN(value) → richtige Prüfung
- 📦 isNaN() ist eine eingebaute Funktion

## isFinite()

Zunächst einmal ist zu beachten, dass NaN nicht der einzige Sonderwert ist. Man muss sich noch zwei weitere Werte merken: Infinity und -Infinity, die ebenfalls zum Zahlentyp gehören. Schauen wir uns einmal an, wann sie in einem Programm auftreten können.

```javascript
1 / 0 // gibt Infinity zurück
-5 / 0 // gibt -Infinity zurück
```

Der Name der Funktion isFinite() spricht wohl für sich. Diese Funktion prüft, ob der Wert einer Variablen oder das Ergebnis eines Ausdrucks eine endliche Zahl ist. Sie gibt true zurück, wenn der Ausdruck endlich ist, und false, wenn der Wert der Variablen NaN ist. Sehen wir uns ein Beispiel an:

```javascript
if (isFinite(1 / 0)) {
    console.log("Es ist endlich!")
} else {
    console.log("Es ist nicht endlich!!!") // dies wird protokolliert 
}
```

Natürlich ergibt eine Zahl, die durch Null teilbar ist, Unendlich, ist also keine endliche Zahl und wird im else-Block ausgegeben.

## 🧠 parseFloat()

### 📌 Was macht es?
`parseFloat()` wandelt einen String in eine **Kommazahl (Float)** um.
 Die Funktion nimmt eine Zeichenkette als Argument entgegen und gibt eine Gleitkommazahl zurück, wenn 
 diese links steht, oder „NaN“, wenn das erste Zeichen der Zeichenkette keine Zahl ist.

---

### ⚙️ Regel

- ✔️ Startet der String mit einer Zahl → Zahl wird gelesen
- ❌ Startet er nicht mit einer Zahl → Ergebnis ist `NaN`

---

### 🧾 Beispiele

```javascript
parseFloat("4.121323Hello")   // 4.121323
parseFloat("Hello4.121323")   // NaN
parseFloat("Good morning!")   // NaN
```

## 🧠 parseInt() wandelt einen String in eine **Ganzzahl (Integer)** um

---

## ⚙️ Syntax

```javascript
parseInt(string, radix)
string → der Text, der umgewandelt wird
radix → Zahlensystem (optional, aber wichtig!)
```

📌 Was ist radix?

Der radix bestimmt die Basis des Zahlensystems:

- 10 → Dezimalsystem
- 8 → Oktalsystem
- 16 → Hexadezimalsystem

⚠️ Wichtig: Immer angeben, um Fehler zu vermeiden.

```javascript
parseInt('451Something', 10) 
// 451
parseInt('451Something', 8) 
// 297
parseInt('25FA3Something', 16) 
// 155555
parseInt('Something', 4) 
// NaN
```

🧠 Regeln

- ✔️ Liest von links nach rechts
- ✔️ Stoppt bei ungültigen Zeichen
- ✔️ Nutzt das angegebene Zahlensystem
- ❌ Gibt NaN, wenn keine gültige Zahl am Anfang steht

🎯 Merksatz

- 👉 parseInt() = String → Ganzzahl
- 👉 radix = Zahlensystem
- 👉 ohne gültige Zahl am Anfang → NaN