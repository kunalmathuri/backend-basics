const express = require("express");
const app = express();

const PORT = 4010;
const HOSTNAME = "localhost";

app.get("/", (req, res) => {
  res.send("Hello World1!");
});
app.get("/about", (req, res) => {
  res.send("About Page!");
});
app.get("/contact", (req, res) => {
  res.send("Contact Page!");
});

app.listen(PORT, () => {
  console.log(`server running at ${HOSTNAME}: ${PORT}`);
});
