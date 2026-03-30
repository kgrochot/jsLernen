// src/MarkdownPage.jsx
import { useEffect, useState } from "react";
import * as marked from "marked"; // <--- wichtig: mit "* as" für Vite/ESM

export default function MarkdownPage({ page }) {
  const [content, setContent] = useState("Lädt...");

  useEffect(() => {
    const base = import.meta.env.BASE_URL; // Dev: './', Build/GH: '/jsLernen/' oder BASE_URL
    fetch(`${base}content/${page}.md`)
      .then(res => {
        if (!res.ok) throw new Error("Markdown-Datei nicht gefunden");
        return res.text();
      })
      .then(md => setContent(marked.parse(md))) // <--- .parse statt einfach "marked()"
      .catch(err => setContent(`<p style="color:red;">Fehler: ${err.message}</p>`));
  }, [page]);

  return <main dangerouslySetInnerHTML={{ __html: content }} />;
}