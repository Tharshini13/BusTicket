const express = require("express");
const connectDB = require("./lib/db.connect");
const authRouter = require("./Module/auth.module");
const cors = require("cors");
const busRouter = require("./Module/bus.module");
const cookieParser = require("cookie-parser");
const ticketRouter = require("./Module/ticket.module");

let app = express();

connectDB();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true, 
}));

app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/bus", busRouter);
app.use("/ticket", ticketRouter);

app.listen(8000, () => {
    console.log("Server running at http://localhost:8000");
});
