// src/App.jsx
import { useState } from "react";
import MarkdownPage from "./MarkdownPage";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("intro"); // default startseite

  const links = [
    { id: "intro", label: "Einführung" },
    { id: "grundlagen", label: "Grundlagen" },
    { id: "variables", label: "Variablen" },
    { id: "strings", label: "Strings" },
    { id: "stringsNumbers", label: "Strings & Zahlen"},
    { id: "binaryoperators", label: "Operatoren" },
    { id: "arrays", label: "Arrays" },
    { id: "objects", label: "Objekte" },
    { id: "functions", label: "Funktionen" },
    { id: "dom", label: "DOM-Manipulation" },
    { id: "primitiveDatentypen", label: "Primitive und Nicht-Primitive Datentypen" },
    { id: "boolean-Typ", label: "Boolean-Typ" },
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