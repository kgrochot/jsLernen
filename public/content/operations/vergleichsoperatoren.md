# Vergleich von Datentypen in JavaScript

In JavaScript ist es möglich, **verschiedene Datentypen zu vergleichen**.  
Das Ergebnis solcher Operationen ist **immer ein boolescher Wert**: `true` oder `false`.

Vergleiche gehören zu den **herausforderndsten Themen**, denen man begegnen kann, wenn man JavaScript meistern möchte.  
Heute wollen wir versuchen, sie **ein für alle Mal zu verstehen**.

## Vergleichsoperatoren in JavaScript

Es gibt mehrere **spezifische Vergleichsoperatoren** in JavaScript. Viele kennst du wahrscheinlich schon aus der Mathematik:  

- **Größer als:** `>`  
- **Kleiner als:** `<`  
- **Größer oder gleich:** `>=`  
- **Kleiner oder gleich:** `<=`  
- **Gleich:** `==`  
- **Ungleich:** `!=`  
- **Strikt gleich:** `===`  
- **Strikt ungleich:** `!==`  

> Hinweis: Doppel- (`==`) und Dreifach-Gleichheitszeichen (`===`) werden für Vergleiche verwendet.  
> Ein **einfaches Gleichheitszeichen `=`** bedeutet **Zuweisung**.

Wir werden nun ansehen, **wie man Vergleichsoperatoren mit verschiedenen Datentypen verwendet**.

# Beispiele für Vergleichsoperatoren

| Operator | Beschreibung                  | Beispiel                 | Ergebnis |
|----------|--------------------------------|-------------------------|----------|
| `>`      | größer als                     | `5 > 3`                 | `true`   |
| `<`      | kleiner als                    | `2 < 4`                 | `true`   |
| `>=`     | größer oder gleich             | `5 >= 5`                | `true`   |
| `<=`     | kleiner oder gleich            | `3 <= 2`                | `false`  |
| `==`     | gleich (lose Gleichheit)       | `'5' == 5`              | `true`   |
| `!=`     | ungleich (lose Gleichheit)     | `'5' != 6`              | `true`   |
| `===`    | strikt gleich (Typ + Wert)     | `'5' === 5`             | `false`  |
| `!==`    | strikt ungleich (Typ + Wert)   | `'5' !== 5`             | `true`   |

## Lose vs. strikte Gleichheit

- `==` (lose Gleichheit)  
  - Vergleicht nur die **Werte**, JavaScript konvertiert automatisch die Typen.  
  - Beispiel: `'5' == 5` → `true`  

- `===` (strikte Gleichheit)  
  - Vergleicht **Wert und Typ**, keine Typumwandlung.  
  - Beispiel: `'5' === 5` → `false`  

- `!=` (lose Ungleichheit)  
  - Prüft, ob Werte **nicht gleich** sind, konvertiert Typen bei Bedarf.  
  - Beispiel: `'5' != 6` → `true`  

- `!==` (strikte Ungleichheit)  
  - Prüft, ob **Wert oder Typ nicht gleich** sind, keine Konvertierung.  
  - Beispiel: `'5' !== 5` → `true`  

  ## Vergleich von Zahlen, Strings und Boolean

| Ausdruck               | Erklärung / Typkonvertierung                         | Ergebnis |
|------------------------|-----------------------------------------------------|----------|
| `5 > 3`                | Zahlen werden direkt verglichen                     | `true`   |
| `'5' > 3`              | String `'5'` wird in Zahl konvertiert              | `true`   |
| `'2' < '12'`           | Strings werden lexikografisch verglichen           | `false`  |
| `'2' < 12`             | String `'2'` → Zahl `2`                            | `true`   |
| `true == 1`            | Boolean `true` → Zahl `1` bei losem Vergleich     | `true`   |
| `false == 0`           | Boolean `false` → Zahl `0`                         | `true`   |
| `true === 1`           | Typ wird **nicht konvertiert**, unterschiedliche Typen | `false` |
| `false === 0`          | Typ wird **nicht konvertiert**, unterschiedliche Typen | `false` |
| `'0' == false`          | String `'0'` → Zahl `0`, Boolean `false` → `0`    | `true`   |
| `'0' === false`         | Unterschiedliche Typen (String vs Boolean)        | `false`  |

**Hinweise:**  

- Lose Gleichheit (`==`) kann Typen automatisch konvertieren.  
- Strikte Gleichheit (`===`) **vergleicht Typ + Wert**, keine Konvertierung.  
- Beim Vergleich von Strings mit Zahlen wird der String in eine Zahl konvertiert.  
- Boolean wird bei numerischem Vergleich zu `0` (false) oder `1` (true) umgewandelt.

## Strings vergleichen

In JavaScript können nicht nur Zahlen, sondern auch Strings verglichen werden.  
Strings werden **lexikografisch** verglichen – das heißt, die Reihenfolge der Buchstaben richtet sich nach der **Unicode-Tabelle**.  

**Beispiele:**

```javascript
console.log("A" == "A");             // true – gleiche Buchstaben
console.log("A" != "Z");             // true – unterschiedlich
console.log("Z" > "A");              // true – Z kommt später in Unicode
console.log("colorful" > "color");   // true – längerer String, gleiche Anfangsbuchstaben
console.log("Dog" > "Bird");         // true – D kommt nach B
console.log("z" > "Z");              // true – Kleinbuchstaben haben höhere Unicode-Werte als Großbuchstaben
```

## Vergleich unterschiedlicher Datentypen

In JavaScript kann man verschiedene Datentypen miteinander vergleichen.  
Wenn ein Vergleich mit einer **Zahl** erfolgt, versucht JavaScript, die Werte **in Zahlen umzuwandeln**.

**Beispiele:**

```javascript
console.log("10" > 5);    // true – String wird zu Zahl 10
console.log(14 == "14");  // true – String wird zu Zahl 14

// Booleans werden ebenfalls zu Zahlen
console.log(true == 1);   // true – true wird zu 1
console.log(false == 0);  // true – false wird zu 0
```

Hinweis:

- true wird als 1 interpretiert, false als 0.
- Bei == findet eine Typumwandlung statt (Type Coercion).
- Bei === wird der Typ nicht umgewandelt, Vergleich wäre also false für "14" === 14.

## Null, 0 und undefined

In JavaScript gibt es einige **Ausnahmen** bei Vergleichen, besonders mit `null` und `undefined`.

## Null

`null` verhält sich bei mathematischen Vergleichen manchmal unerwartet:

```javascript
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true
```

Hinweis:

- null == 0 ist false, obwohl null >= 0 true ist.
Das liegt daran, dass == keinen mathematischen Vergleich durchführt, sondern die Gleichheit prüft.
Undefined

Vergleiche von undefined mit Zahlen sind immer false:

```javascript
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined <= 0); // false
```

Besonderheit: undefined ist nur null gleich:

```javascript
console.log(undefined == null);  // true
console.log(undefined == 0);     // false
```

## Fazit

Das Verständnis der **Vergleichsoperatoren** ist entscheidend, um JavaScript wirklich zu meistern.  

Das Wissen um die **spezifische Syntax** und die **Regeln für den Vergleich verschiedener Datentypen** hilft, Fehler zu vermeiden und effizienteren Code zu schreiben.  

- Egal ob **Zahlen**, **Strings** oder andere Datentypen:  
  Es ist wichtig, die Regeln zu kennen und korrekt anzuwenden.  

| Ausdruck               | Vergleichs-Detail                                         | Ergebnis |
|------------------------|-----------------------------------------------------------|----------|
| `"cat" >= "Cat"`       | `"c"` (99) >= `"C"` (67)                                  | true     |
| `"apple" < "banana"`   | `"a"` (97) < `"b"` (98)                                   | true     |
| `"Dog" > "Bird"`       | `"D"` (68) > `"B"` (66)                                   | true     |
| `"colorful" > "color"` | Vergleich bis `"f"` vs Ende von `"color"` → `"f"` > `undefined` | true |
| `"z" > "Z"`            | `"z"` (122) > `"Z"` (90)                                  | true     |
| `"abc" == "abc"`       | Alle Buchstaben stimmen überein                           | true     |
| `"abc" != "ABC"`       | `"a"` (97) != `"A"` (65)                                  | true     |

## Hinweise für deine Notizen

- Großbuchstaben (A-Z) haben niedrigere Unicode-Werte als Kleinbuchstaben (a-z).
- Der Vergleich von Strings endet beim ersten unterschiedlichen Zeichen.
- Ist ein String länger und alle vorherigen Zeichen sind gleich, gilt der längere String als größer.