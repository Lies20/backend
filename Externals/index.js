const express = require('express')
const app = express();
const axios = require("axios");
const { response } = require('express');

const port = 3009;
app.listen(port,()=>{
    console.log('server on'+ port);
})

const data = require('./data.json');
console.log(data);

app.get('/game-of-thrones/json',(req,res)=>{
    res.json(data)
})



app.get('/games-of-thrones/url',(req,res)=>{
    axios.get("https://thronesapi.com/api/v2/Characters")
        .then(response => {
            console.log(response.data)
            return res.json(response.data)
        })
})