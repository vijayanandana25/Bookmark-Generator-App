import { useState, useEffect } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  const fetchBookmarks = async () => {
    const res = await fetch("http://backend:5000/bookmarks");
    const data = await res.json();
    setBookmarks(data);
  };

  const addBookmark = async () => {
    await fetch("http://backend:5000/bookmarks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, title }),
    });
    setUrl("");
    setTitle("");
    fetchBookmarks();
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  return (
    <div>
      <h1>Bookmark Generator</h1>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={addBookmark}>Add</button>

      <ul>
        {bookmarks.map((b, i) => (
          <li key={i}>
            <a href={b.url} target="_blank" rel="noreferrer">
              {b.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;