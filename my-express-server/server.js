const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at: bert@bertbullough.com");
});

app.get("/about", function (req, res) {
  res.send("<h1>Nothing to see here</h1>");
});

app.get("/hobbies", function (req, res) {
  res.send("<ul><li>Coffee</li><li>code</li><li>beer</li></ul>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
