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

app.get('/authors/:id',(req,res)=>{
    var id = req.params.id
    res.json({
        name:authors[id].name,
        nationality:authors[id].nationality
    })

})

app.get('/authors/:id/books',(req,res)=>{
    var id = req.params.id
    res.send(authors[id].books)
})


// app.get('/authors/:id',(req,res)=>{
//     var id = req.params.id;
//     res.send(authors[id].name)

// })

