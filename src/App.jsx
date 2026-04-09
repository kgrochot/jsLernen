// src/App.jsx
import { useState } from "react";
import MarkdownPage from "./MarkdownPage";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("intro");

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

  // ✅ jetzt erst benutzen
  const defaultGroup = links.find(group =>
    group.items.some(item => item.id === "intro")
  )?.title;

  const [openGroups, setOpenGroups] = useState([defaultGroup]);

  const toggleGroup = (title) => {
    setOpenGroups(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="container">
      <aside className="sidebar">
        {links.map(group => {
          const isOpen = openGroups.includes(group.title);
          const isActive = group.items.some(item => item.id === page);

          return (
            <div key={group.title} className="sidebar-group">

              <div
                className={`sidebar-title ${isActive ? "active-group" : ""}`}
                onClick={() => toggleGroup(group.title)}
              >
                <span className="arrow">{isOpen ? "▼" : "▶"}</span>
                <span className="folder">📁</span>
                {group.title}
              </div>

              {isOpen && group.items.map(link => (
                <a
                  key={link.id}
                  className={page === link.id ? "active" : ""}
                  onClick={() => {
                    setPage(link.id);
                    if (!openGroups.includes(group.title)) {
                      toggleGroup(group.title);
                    }
                  }}
                >
                  <span className="file">📄</span>
                  {link.label}
                </a>
              ))}

            </div>
          );
        })}
      </aside>

      <MarkdownPage page={page} />
    </div>
  );
}