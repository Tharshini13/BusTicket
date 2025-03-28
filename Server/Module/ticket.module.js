let express = require("express");
const { bookticket } = require("../Controller/ticket.controller");

let ticketRouter = express.Router();

ticketRouter.post("/bookticket/:id" , bookticket)




module.exports = ticketRouter;
