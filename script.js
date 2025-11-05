function convertMarkdown() {
  const input = document.getElementById("markdown-input").value;

  let html = input
    // Headings: must start at beginning of line
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")

    // Bold: *text* or _text_
    .replace(/\*\*(.+?)\*\*/gs, "<strong>$1</strong>")
    .replace(/__(.+?)__/gs, "<strong>$1</strong>")

    // Italic: text or text
    .replace(/\*(?!\*)(.+?)\*/gs, "<em>$1</em>")
    .replace(/_(?!_)(.+?)_/gs, "<em>$1</em>")

    // Images: ![alt](src)
    .replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">')

    // Links: [text](url)
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')

    // Blockquotes: must start at beginning of line
    .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>");

  // Display raw HTML
  document.getElementById("html-output").textContent = html;

  // Render HTML
  document.getElementById("preview").innerHTML = html;

  return html;
}

document.getElementById("markdown-input").addEventListener("input", convertMarkdown);