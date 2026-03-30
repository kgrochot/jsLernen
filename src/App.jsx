// src/App.jsx
import { useState } from "react";
import MarkdownPage from "./MarkdownPage";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("intro");

  const pages = [
    { id: "intro", label: "Einführung" },
    { id: "grundlagen", label: "Grundlagen" },
    { id: "variables", label: "Variablen" },
    { id: "strings", label: "Strings" }
  ];

  return (
    <div className="container">
      <aside className="sidebar">
        {pages.map(p => (
          <a
            key={p.id}
            className={page === p.id ? "active" : ""}
            onClick={() => setPage(p.id)}
          >
            {p.label}
          </a>
        ))}
      </aside>

      <MarkdownPage page={page} />
    </div>
  );
}