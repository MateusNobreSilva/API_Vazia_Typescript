//
//console.log("express + TS");

import express, { Request, Response } from 'express';
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    return res.send("Hello Express!");
});




app.listen(3000, () => {
    console.log("Aplicação de TS + Express funcionando!");
});