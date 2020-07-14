const express = require("express"); 
const cors = require("cors");
const helmet = require("helmet")
const jobsRouter = require("../jobs/jobs-router")
const authenticationRequired = require('../middleware/oktaJwtVerifier')
const checkUser = require("../middleware/checkUser");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use("/users", authenticationRequired, checkUser, jobsRouter)

//Connection test 
server.get("/", (req, res, next) => {
    res.json({ message:"test test"});
});

module.exports = server;