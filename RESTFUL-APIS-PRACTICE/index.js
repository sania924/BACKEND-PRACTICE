const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

// Set up EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Correct path for views

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Sample data
let posts = [
  { username: "sania", content: "i love coding" },
  { username: "ahmad", content: "hardwork is important to achieve success" },
  { username: "Ali", content: "i love coding" },
];
// default route
app.get("/", (req, res) => {
  res.send("server is working ");
});
// Route to render posts
app.get("/post", (req, res) => {
  res.render("index.ejs", { posts }); // Ensure "index.ejs" exists in the views folder
});
// create new post
// 1)
app.get("/post/new", (req, res) => {
  res.render("new.ejs");
});
// 2)
app.post("/post", (req, res) => {
  let { username, content } = req.body;
  posts.push({ username, content });
  res.redirect("/post");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
