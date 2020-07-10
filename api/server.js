const express = require("express"); 
const cors = require("cors");
const helmet = require("helmet")
const jobsRouter = require("../jobs/jobs-router")



const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use("/users", jobsRouter)

//Connection test 
server.get("/", (req, res, next) => {
    res.json({ message:"test test"});
});

module.exports = server;