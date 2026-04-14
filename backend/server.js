const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let bookmarks = [];

app.get("/bookmarks", (req, res) => {
  res.json(bookmarks);
});

app.post("/bookmarks", (req, res) => {
  const { url, title } = req.body;
  const bookmark = { url, title };
  bookmarks.push(bookmark);
  res.json(bookmark);
});

app.listen(5000, () => console.log("Backend running on 5000"));