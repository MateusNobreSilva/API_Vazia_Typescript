//
//console.log("express + TS");

import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    return res.send("Hello Express!");
});

app.post("/api/product", (req, res) => {
    console.log(req.body);

    return res.send("Produto adicionado!");
});



app.listen(3000, () => {
    console.log("Aplicação de TS + Express funcionando!");
});