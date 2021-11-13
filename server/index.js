import express from "express";
import dotenv from "dotenv";


// components import

import Connection from "./database/db.js";
import Routes from "./routes/Routes.js";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();
const app = express();

const PORT = 8000;
const db_user = process.env.MONGO_USERNAME;
const db_pass = process.env.MONGO_PASSWORD;

Connection(db_user, db_pass);
//app.use("/", Routes);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin: "http://localhost:3000"}));
app.use('/', Routes);