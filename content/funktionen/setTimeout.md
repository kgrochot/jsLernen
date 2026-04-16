# JavaScript – Zeitsteuerung von Funktionen

## ⏱️ Einleitung

Normalerweise wird JavaScript **zeilenweise (synchron)** ausgeführt.

Manchmal möchte man jedoch:

- eine Funktion verzögert ausführen
- etwas nach einer bestimmten Zeit anzeigen
- eine Aktion regelmäßig wiederholen

---

## ⏱️ Was ist `setTimeout`?

`setTimeout` wird verwendet, um eine Funktion **nach einer bestimmten Zeitverzögerung einmalig auszuführen**.

Man kann es sich vorstellen wie:
👉 „Plane eine Aktion für später“

---

## 🛒 Analogie

Du hast eine Einkaufsliste, gehst aber nicht sofort einkaufen.  
Erst nach 1 Stunde (nach einem Film) gehst du los.

➡️ In JavaScript:
- Funktion = „buy food“
- Ausführung = später geplant

---

## 🧾 Grundlegendes Beispiel

```javascript
setTimeout(function() {
  console.log("Willkommen auf unserer Website! Du hast heute einen Rabatt!");
}, 5000);
```

- Funktion wird nach 5 Sekunden ausgeführt
- 5000 ms = 5 Sekunden
- nur einmalige Ausführung

🧠 Alternative Schreibweise mit benannter Funktion

```javascript
function welcome(name) {
  console.log(name + ", willkommen auf unserer Website! Du hast heute einen Rabatt!");
}

let userWelcomeMessage = setTimeout(welcome, 5000, "Mary");
```

📌 Parameter von setTimeout

```javascript
setTimeout(function, delay, arg1, arg2, ...)
```

*Bedeutung:*
- function → die Funktion, die später ausgeführt wird
- delay → Wartezeit in Millisekunden (1000 ms = 1 Sekunde)
- arg1, arg2, ... → Argumente für die Funktion

👤 Beispiel mit Argument

```javascript
function welcome(name) {
  console.log(name + ", willkommen auf unserer Website!");
}

setTimeout(welcome, 5000, "Mary");
```

Ergebnis nach 5 Sekunden:
Mary, willkommen auf unserer Website!

---

🚀 Wichtig
setTimeout führt Code nur einmal aus, Es ist eine Form von asynchronem Verhalten. Man kann mehrere Argumente übergeben

## setTimeout mit 0 ms Verzögerung

Schauen wir uns einen weiteren Fall der `setTimeout`-Methode an.

### Beispiel mit Verzögerung

```js
setTimeout(function() {
  console.log("Welcome to our website!");
}, 5000);
```

Was passiert bei 0 ms?

```js
function welcome() {
  console.log("Welcome to our website!");
}

setTimeout(welcome, 0);
```

Die Funktion wird fast sofort, aber nicht synchron ausgeführt.

Wichtiges Verhalten

Wenn danach noch Code ausgeführt wird, passiert dieser zuerst:

```js
function welcome() {
  console.log("Welcome to our website!");
}

setTimeout(welcome, 0);

console.log("2nd of May");
```

*Erklärung*

- setTimeout(..., 0) wird nicht sofort ausgeführt.
- Die Funktion landet in der Task Queue (Event Loop).
- Erst wenn der aktuelle Code (Call Stack) fertig ist, wird sie ausgeführt.

*Ergebnis*

- 2nd of May
- Welcome to our website!

Fazit

Auch mit 0 ms ist setTimeout asynchron und wird erst nach dem aktuellen Code ausgeführt.

## setInterval

Stell dir vor, du möchtest jeden Tag um 8 Uhr aufwachen. Dafür stellst du dir einen Wecker, der sich alle 24 Stunden wiederholt.

In der Programmierung bedeutet das:
- Du hast eine Funktion („alarm“), die in einem bestimmten Zeitintervall **immer wieder ausgeführt** werden soll.

```js
function alarm(time) {
  console.log("Wake up! It’s " + time + " o'clock!");
}

setInterval(alarm, 3000, 8);
```

Was passiert?

Nach 3 Sekunden wird die Funktion zum ersten Mal ausgeführt.
Danach wird sie alle 3 Sekunden erneut ausgeführt.

Ergebnis
1. Wake up! It’s 8 o'clock!
2. Wake up! It’s 8 o'clock!
3. Wake up! It’s 8 o'clock!
...

`setInterval` nimmt ähnliche Parameter wie setTimeout:

- Funktion, die ausgeführt werden soll
- Intervall (in Millisekunden), in dem die Funktion wiederholt wird
- Argumente, die an die Funktion übergeben werden

`setInterval` ist nützlich, wenn du eine Funktion regelmäßig wiederholen möchtest, z. B. für:

- Timer
- Uhren
- automatische Updates

## Timer stoppen: clearTimeout & clearInterval

Es ist möglich, Funktionen mit Verzögerung oder in Intervallen auszuführen.  
Aber Vorsicht: Wenn Timer ständig laufen, verbrauchen sie Ressourcen und können den Browser verlangsamen.

### Problem

Ein Programmierer lässt z. B. viele Timer laufen (z. B. für Werbung).  
Der Browser wird dadurch langsam, weil die Aufgaben dauerhaft ausgeführt werden.

### Lösung

Nicht benötigte Timer sollten **immer gestoppt werden**.

---

### clearTimeout

Wenn du einen `setTimeout` vorzeitig stoppen willst:

```js
let timerId = setTimeout(() => {
  console.log("Hallo!");
}, 5000);

clearTimeout(timerId);

//setTimeout gibt eine ID zurück
//Diese ID brauchst du, um den Timer zu stoppen
```

👉 Hinweis:
Wenn du den Timeout nicht stoppen musst, brauchst du clearTimeout nicht.

## clearInterval

Ein setInterval läuft unendlich weiter, bis du ihn stoppst:

```js
function alarm() {
  console.log("Wake up!");
}

const intervalId = setInterval(alarm, 2000);

clearInterval(intervalId);
```

setInterval gibt ebenfalls eine ID zurück. Mit clearInterval stoppst du die Wiederholung

🚀 Wichtig

1. setTimeout → einmalige Ausführung (optional stoppen)
2. setInterval → wiederholt sich endlos, bis gestoppt

Stoppe alle unnötigen Intervalle, da sie sonst:

- CPU-Leistung verbrauchen
- den Browser verlangsamen
- die Performance deiner Anwendung verschlechtern

## Fazit

In diesem Thema haben wir zwei Methoden kennengelernt, um Code mit Verzögerung auszuführen:

- `setTimeout` → führt Code **einmalig** nach einer bestimmten Zeit aus
- `setInterval` → führt Code **wiederholt** in einem festen Intervall aus

Außerdem hast du gelernt, wie man Timer stoppt:

- `clearTimeout` → stoppt einen Timeout (falls nötig)
- `clearInterval` → stoppt ein Intervall (sehr wichtig)

### Wichtig

Nicht gestoppte Intervalle laufen dauerhaft weiter und können:
- die Performance verschlechtern
- den Browser verlangsamen
- unnötig Ressourcen verbrauchen

### Zusammenfassung

- Verwende `setTimeout` für **einmalige Verzögerungen**
- Verwende `setInterval` für **wiederkehrende Aufgaben**
- Stoppe Timer, wenn du sie nicht mehr brauchst