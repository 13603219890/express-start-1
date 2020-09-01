import { request } from "express";

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req:any, res:any) => res.send('Hello World!'));


app.post('/xxx',(request:any,response:any,next:any)=>{})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));