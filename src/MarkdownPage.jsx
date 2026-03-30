import { useEffect, useState } from "react";
import * as marked from "marked";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

// rejestracja języka
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("js", javascript);

export default function MarkdownPage({ page }) {
    const [content, setContent] = useState("Lädt...");
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(false);

        fetch(`./content/${page}.md`) // 👈 ważne: RELATIVE PATH!
            .then(res => {
                if (!res.ok) throw new Error("Markdown-Datei nicht gefunden");
                return res.text();
            })
            .then(md => {
                const html = marked.parse(md);
                setContent(html);

                // highlight po renderze
                setTimeout(() => {
                    document.querySelectorAll("pre code").forEach(block => {
                        hljs.highlightElement(block);
                    });
                    setShow(true);
                }, 0);
            })
            .catch(err =>
                setContent(`<p style="color:red;">Fehler: ${err.message}</p>`)
            );
    }, [page]);

    useEffect(() => {
        if (!content) return;

        document.querySelectorAll("pre code").forEach(block => {
            hljs.highlightElement(block);
        });

        setShow(true);
    }, [content]);

    return (
        <main
            id="app"
            className={show ? "show" : ""}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}