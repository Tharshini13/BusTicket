let express = require("express");
const { bookticket } = require("../Controller/ticket.controller");

let ticketRouter = express.Router();

ticketRouter.post("/bookticket" , bookticket)




module.exports = ticketRouter;
