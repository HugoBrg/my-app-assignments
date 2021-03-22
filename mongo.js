const express = require('express')
const app = express()
const login = require('./login.json')
const cors = require('cors'); 

let db

const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb+srv://dbUser:1234@my-app.fpxlh.mongodb.net/my-app?retryWrites=true&w=majority', { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    db = client.db('my-app')
  })
  .catch(error => console.error(error))

app.use(cors());
app.use(express.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/login', function(req, res, next) {
  let connection = false;
  let toSend = [];
  db.collection('login').find().toArray().then(results => {
    results.forEach(element => {
      if(element.login == req.query.login){
          if(element.pass == req.query.pass){
              connection = true;
              toSend.push(connection)
              toSend.push(element.id)
              toSend.push(element.login)
              toSend.push(element.pass)
              toSend.push(element.status)
          }
      } 
    });
    res.send(toSend)
  })
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});

app.listen(3000, () => {
    console.log("Listening")
})
