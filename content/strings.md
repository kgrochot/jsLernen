# Strings in JavaScript

Strings sind **Textwerte** in JavaScript. Alles, was in **Anführungszeichen** (`' '` oder `" "`) steht, ist ein String.  
Strings werden verwendet, um **Namen, Nachrichten, Texte oder beliebige Zeichenfolgen** zu speichern.

Beispiele:

```javascript
let name = "Katarzyna";
let begrüßung = 'Hallo, Welt!';
```

### Strings & console.log()  

- **Funktion:** `console.log()` ist eine Funktion → ein wiederverwendbarer **Codeblock**, der etwas ausführt, z. B. Text ausgeben.  
  - Mit Klammern `()` wird die Funktion **aufgerufen**.  
  - Wird oft genutzt, um **Ergebnisse oder Fehler** im Code zu prüfen.

- **Strings:** Text in JavaScript → **immer in Anführungszeichen** (`' '` oder `" "`).  
  - Beispiel: `'Hello, World!'` oder `"Hello, World!"`  

### Printing Quotes in Strings – kurz

Wenn du **Anführungszeichen innerhalb eines Strings** verwenden willst, gibt es zwei Möglichkeiten:

**Andere Art von Anführungszeichen außen verwenden:**

```javascript
console.log("Yes, I'm ready to learn JS.");
```

Escape-Zeichen \ nutzen:

```javascript
console.log('Yes, I\'m ready to learn JS.');
```

### User Input und Typumwandlung

- **`prompt()`**  
  - Zeigt ein **Dialogfenster** an, in das der Benutzer Text eingeben kann.  
  - Gibt immer einen **String** zurück.  
  - Beispiel:

```javascript
let iStoreValueFromDialog = prompt("Which value do I need to store?");
```

- **`parseInt()`**  

Wandelt einen String in eine Ganzzahl (Integer) um.

```javascript
let nowItIsNumber = parseInt('5'); // 5 als Zahl
```

### String Literals in JavaScript

- **Einschluss in Anführungszeichen:**  
  Strings werden in **einfachen `' '`** oder **doppelten `" "`** Anführungszeichen geschrieben.  
  - Beispiel: `'Hello'` oder `"Hello"`  

- **Escape-Zeichen `\`**  
  - Ein **Backslash `\`** vor einem Anführungszeichen **vermeidet Konflikte**, wenn es innerhalb eines Strings vorkommt.  
  - Beispiel:  

```javascript
console.log('I\'m learning JavaScript'); // Ausgabe: I'm learning JavaScript
console.log("He said, \"Hello!\"");      // Ausgabe: He said, "Hello!"
```

### Umgang mit Quotes in JavaScript

| Variante                        | Beispiel                                       | Ausgabe                     |
|---------------------------------|-----------------------------------------------|-----------------------------|
| Doppelte außen, einfache innen  | `console.log("The ship's name is 'Brave'.");`  | The ship's name is 'Brave'.|
| Einfache außen, doppelte innen  | `console.log('She said, "Hello!"');`           | She said, "Hello!"          |
| Escape für einfache Quote       | `console.log('I\'m learning JS');`             | I'm learning JS             |
| Escape für doppelte Quote       | `console.log("He said, \"Hello!\"");`          | He said, "Hello!"           |
| Template String                 | ``console.log(`The ship's name is 'Brave'.`);`` | The ship's name is 'Brave'.|

💡 **Merke:**  

- Template Strings (`` ` ``) sind oft am einfachsten, wenn du **beide Arten von Quotes** innerhalb eines Strings hast.  
- Escape-Zeichen `\` benutzt man nur, wenn außen und innen **die gleiche Art von Quote** ist.

s