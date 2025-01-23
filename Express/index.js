const express = require("express");
const app = express();
// console.dir(app);
let port = 8080;
// for listen request
app.listen(port, () => {
  console.log(`port is listen on ${port}`);
});
// for send request

// app.use((req, res) => {
//  res.send("req is received");
//   //res.send(req);
//   //res.send(res);

//   // res.send("hello");
//   // res.send({
//   //   name: "sania",
//   //   num: 123,
//   // });
//   res.send("<h1>heading 1</h1>");
// });

// for responsse     handling req use res and for request use req

// for get req use get method of route
app.get("/", (req, res) => {
  res.send("this is an default route");
});
// app.get("/banana", (req, res) => {
//   res.send("this is an banana route");
// });
// app.get("/pear", (req, res) => {
//   res.send("this is an pear route");
// });
// app.post("/mango", (req, res) => {
//   res.send("this is an mango route");
// });
// app.get("*", (req, res) => {
//   res.send("this is an custom route");
// });

//  path parameter
app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  res.send(`welcome to @${username}`);
});
// query string
// app.get("/search", (req, res) => {
//   console.log(req.query);
//   res.send("no result");
// });
// query string with variable
// app.get("/search", (req, res) => {
//   let { q } = req.query;
//   res.send(`<h1>this is qury string path: ${q}<h1>`);
// });
// if not search then show diffferent output
app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send(`<h1>no search<h1>`);
  }
  res.send(`<h1>this is qury string path: ${q}<h1>`);
});
