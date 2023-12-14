const express = require("express");
const cors = require("cors");
require("./db/mongoose");

//importing all the routers
const electionRouter = require("./router/electionRouter");

const app = express();

//CORS Enabling
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(electionRouter);

module.exports = app;
