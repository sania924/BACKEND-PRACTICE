const express = require("express");
const app = express();
// console.dir(app);
let port = 8080;
// for listen request
app.listen(port, () => {
  console.log(`port is listen on ${port}`);
});
