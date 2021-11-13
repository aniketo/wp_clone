import express from "express";
import {addUser} from "../controller/User-Controller.js";

const route = express.Router();


route.post("/add", addUser);

export default route;