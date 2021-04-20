import express, {request} from "express";
import {createUsuario} from "./routes"

let app = express();

app.get("/", createUsuario)

app.listen(4444)