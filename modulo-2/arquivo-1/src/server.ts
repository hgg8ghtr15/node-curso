import express, {request} from 'express';

import { criarCurso } from './router'

let app = express();

app.get("/", criarCurso )

app.listen(3333)