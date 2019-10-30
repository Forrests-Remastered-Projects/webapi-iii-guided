const express = require("express"); // importing a CommonJS module
const helmet = require("helmet");
const hubsRouter = require("./hubs/hubs-router.js");

const server = express();
function dateLogger(req, res, next) {
  console.log(new Date().toISOString);
  next();
  console.log(req);
}
server.use(express.json());
server.use(helmet());

server.use("/api/hubs", hubsRouter);
server.use(dateLogger);
function something(req, res, next) {
  next()
server.get("/something", (req, res) => {
  res.status(200).json({ welcome: "I hope this works!" });
});

server.get("/", (req, res) => {
  const nameInsert = req.name ? ` ${req.name}` : "";

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
    `);
});

module.exports = server;
