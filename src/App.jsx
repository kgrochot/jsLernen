// src/App.jsx
import { useState } from "react";
import MarkdownPage from "./MarkdownPage";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("intro"); // default startseite

const links = [
  { id: "intro", label: "Einführung" },

  // Datentypen
  { id: "datentypen/arrays", label: "Arrays" },
  { id: "datentypen/boolean-typ", label: "Boolean & logische Operatoren" },
  { id: "datentypen/null-undefined", label: "Null & Undefined" },
  { id: "datentypen/objekte-einfuehrung", label: "Einführung in Objekte" },
  { id: "datentypen/strings", label: "Strings" },
  { id: "datentypen/stringsNumbers", label: "Strings & Zahlen" },

  // Grundlagen
  { id: "grundlagen/grundlagen", label: "Grundlagen" },
  { id: "grundlagen/variables", label: "Variablen" },
  { id: "grundlagen/functions", label: "Funktionen" },

  // Operations
  { id: "operations/binaryoperators", label: "Binäre Operatoren" },
  { id: "operations/operations", label: "Operatoren" },
  { id: "operations/typumwandlung", label: "Typumwandlung" },
];

  return (
    <div className="container">
      <aside className="sidebar">
        {links.map(link => (
          <a
            key={link.id}
            id={`link-${link.id}`}
            className={page === link.id ? "active" : ""}
            onClick={() => setPage(link.id)}
          >
            {link.label}
          </a>
        ))}
      </aside>

      <MarkdownPage page={page} />
    </div>
  );
}