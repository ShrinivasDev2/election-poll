const express = require("express");
const Router = express.Router();
const electionController = require("../controller/electionController");

Router.post("/submit-opinion", electionController.sumbitOpinion);

module.exports = Router;
