// create server
const http = require("http")
const url = require("url")
const fs = require("fs")

// npm i mime-types
const lookup = require("mime-types").lookup;

// env variables
const dir_public = process.env.DIR_PUBLIC || __dirname + "/public/";
const port = process.env.PORT || 1234;

console.log(`public dir: "${dir_public}"`)

const server = http.createServer((req, res) => {
  //handle the req. & send back file from 'public'
  let parsedURL = url.parse(req.url, true);
  //remove slashes
  // / ^leading slash(es) OR trailing$ slash(es) / Globally 
  let path = parsedURL.path.replace(/^\/+|\/+$/g, "");

  if (path == "") {
    path = "index.html";
  }
  console.log(`Requested path ${path} `);

  let file = dir_public + path;
  //async read file function uses callback
  fs.readFile(file, function(err, content) {
    if (err) {
      console.log(`file not found ${file}`);
      res.writeHead(404);
      res.end();
    } else {
      //specify content type in the response
      console.log(`returning ${path}`);
      res.setHeader("X-Content-Type-Options", "nosniff");
      let mime = lookup(path);
      res.writeHead(200, {"content-type": mime})
      /*
      switch (path) {
        case "main.css":
          res.writeHead(200, {"Content-type": "text/css" });
          break;
        case "main.js":
          res.writeHead(200, {"Content-type": "application/javascript" });
          break;
        case "index.html":
          res.writeHead(200, {"Content-type": "text/html" });
          break;
        res.end(content);
      }
      */
    }
  });
});

server.listen(1234, "localhost", () => {
  console.log(`listening on port: ${port}`)
});