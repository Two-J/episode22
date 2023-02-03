const fs = require("fs");
const http = require("http");

const users = [
  {
    name: "nyeinminhtet",
    email: "nyeinmg@gmail.com",
  },
  {
    name: "phoowaiko",
    email: "phoo@gmail.com",
  },
  {
    name: "nyilay",
    email: "nyimg@gmail.com",
  },
];
const sever = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/script.js") {
    fs.readFile("script.js", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/style.css") {
    fs.readFile("style.css", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/data") {
    res.writeHead(200, { "Content-Type": "application/jason" });
    res.write(JSON.stringify({ name: "nyeinminhtet" }));
    res.end();
  } else if (req.url === "/users") {
    res.writeHead(200, { "Content-Type": "application/jason" });
    res.write(JSON.stringify(users));
    res.end();
  } else {
    res.writeHead(500);
    res.write("<h1>unkonw</h1>");
    res.end();
  }
});
sever.listen(3000, () => {
  console.log("sever is listening 3000");
});
