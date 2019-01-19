var express=require("express");
var app=express();
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
let jwt = require('jsonwebtoken');
let config = require('./config');
let middleware = require('./middleware');
var uri="mongodb://abhiint:gcf123456789@ds153824.mlab.com:53824/first_db";
var port=8000;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true })); 
const username="abhishek";
const password="123456";

var server = app.get('/first', (req, res) => {
if(username==req.body.username&&password==req.body.password){
    console.log(config.secret);
    console.log(config.get);
    var token = jwt.sign({ username: req.body.username,password: req.body.password }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      res.status(200).send({
          message:"successful",
          username:req.body.username,
          password:req.body.password,
          token
      })
}else{
    res.status(403).send("incorrect username or password");
}

    // var note = { text: req.body.username, title: req.body.password };
    // const note1=JSON.stringify(req.headers);
    // console.log(JSON.stringify(req.headers));
    // if(req.header('aaa')=="aaa"){
    //     note={ text: req.body.username, fuck: req.body.password };
    // }
    // MongoClient.connect(uri, (err, db) => {
    //     if(err) {
    //         return console.log("Error1", err);
    //     }
    //     let showlist = db.db('first_db');
    //     let keys= showlist.collection('first_collection').find().toArray();
    //     res.status(200);
    //     res.send({
    //     note,
    //         note1,
    //     });
    //     // .send({
    //     //     success: 'true',
    //     //     message: 'todos retrieved successfully',
    //     //     todos: db,
    //     //     value: keys
    //     //   })
    //     console.log(keys);
    //     keys.then((result)=>{
    //         console.log(result);
    //     })
    //     keys.catch((err) => {
    //         console.log(err);
    //     })
    //});
});

var server = app.get('*', (req, res) => {
  res.status(404).send("no such url")  ;
});

server.listen(port, '127.0.0.1',() => {
    console.log(`Server is running on ${port}`);
})