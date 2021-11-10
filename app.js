const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/views")));

app.all("/", (request, response) => {
  response.sendFile(path.join(__dirname, "views", "index.html"));
});

app.all("/films", (request, response) => {
  response.sendFile(path.join(__dirname, "views", "films.html"));
});

app.all("/planets", (request, response) => {
  response.sendFile(path.join(__dirname, "views", "planets.html"));
});

app.listen(3000, () => {
  console.log("app running");
});
