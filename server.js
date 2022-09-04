#! node

const logger_lib = require("./utils/logger2")
const logger = logger_lib.getLogger()

/*
const helper = require("./utils/helper")
console.log(helper, helper.do_test(3, 7))
*/

/*
const object1 = JSON.parse('{"k1":"one","k2":2}')
console.log(object1.k1)
console.log(object1.k2)
*/

const info1 = logger.info

logger.info('info');
logger.warn('warning');
logger.error('error');
logger.debug('debug');
logger.debug('debug');

//logger.error(new Error('err msg'));

// create server
const http = require("http")
const url = require("url")
const fs = require("fs")

// npm i mime-types
const lookup = require("mime-types").lookup;

// env variables ($ node -r dotenv/config server.js)
require("dotenv").config()

const dir_public = process.env.DIR_PUBLIC || __dirname + "/public/";
const port = process.env.PORT || 1234;
logger.info(`public dir: "${dir_public}"`)
logger.info(`port: "${port}"`)
//logger.info(process.env)



/*
console.info('info');
console.warn('warning');
console.error('error');
console.error(new Error('err msg'));
*/



const server = http.createServer((req, res) => {
  //handle the req. & send back file from 'dir_public'
  let parsedURL = url.parse(req.url, true);
  //remove slashes
  // / ^leading slash(es) OR trailing$ slash(es) / Globally 
  let path = parsedURL.path.replace(/^\/+|\/+$/g, "");

  if (path == "") {
    path = "index.html";
  }
  logger.info(`Requested path ${path} `);

  let file = dir_public + path;
  //async read file function uses callback
  fs.readFile(file, function(err, content) {
    if (err) {
      logger.info(`file not found ${file}`);
      res.writeHead(404);
      res.end();
    } else {
      //specify content type in the response
      logger.info(`returning ${path}`);
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
        }
        */
     res.end(content);
    }
  });
});

server.listen(port, "localhost", () => {
  logger.info(`listening on port: ${port}`)
});