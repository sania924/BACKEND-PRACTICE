const express = require("express");
const app = express();
// console.dir(app);
let port = 8080;
const path = require("path");

// for listen request
app.listen(port, () => {
  console.log(`port is listen on ${port}`);
});
// for route
app.get("/", (req, res) => {
  res.send("this is home root");
});
// for view directory in root directory
app.set("views", path.join(__dirname, "/views"));
//for render html file
app.get("/help", (req, res) => {
  res.render("home.ejs");
});

// for instram ejs
// app.get("/ig/:username", (req, res) => {
//   let { username } = req.params;

//   res.render("instagram.ejs", { username });
// });

// for create insta page use db.json
app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const instadata = require("./data.json");
  const data = instadata[username];
  if (data) {
    res.render("instagram.ejs", { data });
  } else {
    res.render("errors.ejs");
  }
});
