import express from "express";
import dotenv from "dotenv";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json);

console.log("checking server");
