const express = require('express')
const app = express();


var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]
const port = 3007;
app.listen(port,()=>{
    console.log('server on'+ port);
})

app.get('/',(req,res)=>{
    res.send(authors)
})

app.get('/authors/1',(req,res)=>{
    res.send(authors[0].name)
})
