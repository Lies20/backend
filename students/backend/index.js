const express = require('express')
const app = express();
const port = 3002;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const cors = require('cors')
app.use(cors())


app.listen(port,()=>{
    console.log('this port is ' + " " + port)
})

let students = ['lala','lolo']

app.get('/students',(req,res)=>{
    res.json(students)
})

app.post('/students', function (req, res) {
    console.log("result ", req.body.name);
    res.send();
  });