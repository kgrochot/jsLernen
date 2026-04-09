// src/App.jsx
import { useState } from "react";
import MarkdownPage from "./MarkdownPage";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("intro"); // default startseite

  const links = [
    {
      title: "Einführung",
      items: [{ id: "intro", label: "Start" }]
    },
    {
      title: "Datentypen",
      items: [
        { id: "datentypen/arrays", label: "Arrays" },
        { id: "datentypen/boolean-typ", label: "Boolean & logische Operatoren" },
        { id: "datentypen/null-undefined", label: "Null & Undefined" },
        { id: "datentypen/objects", label: "Einführung in Objekte" },
        { id: "datentypen/strings", label: "Strings" },
        { id: "datentypen/stringsNumbers", label: "Strings & Zahlen" },
      ]
    },
    {
      title: "Grundlagen",
      items: [
        { id: "grundlagen/grundlagen", label: "Grundlagen" },
        { id: "grundlagen/variables", label: "Variablen" },
        { id: "grundlagen/functions", label: "Funktionen" },
      ]
    },
    {
      title: "Operationen",
      items: [
        { id: "operations/binaryoperators", label: "Binäre Operatoren" },
        { id: "operations/operations", label: "Operatoren" },
        { id: "operations/typumwandlung", label: "Typumwandlung" },
      ]
    }
  ];

  return (
    <div className="container">
      <aside className="sidebar">
        {links.map(group => (
          <div key={group.title} className="sidebar-group">

            <div className="sidebar-title">
              {group.title}
            </div>

            {group.items.map(link => (
              <a
                key={link.id}
                className={page === link.id ? "active" : ""}
                onClick={() => setPage(link.id)}
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </aside>

      <MarkdownPage page={page} />
    </div>
  );
}