var express = require("express");
var bodyParser = require("body-parser");
var MongoClient    = require('mongodb').MongoClient;
var uri             = "mongodb://abhiint:gcf123456789@ds153824.mlab.com:53824/first_db";
//var mongoose= require('mongoose');

var app = express();
app.listen(8000, () => {
 console.log("Server running on port 65000");
});

app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/", (req, res, next) => {
    //res.json("hey");
    console.log(req.body);
    
    const note = { text: req.body.body, title: req.body.title };

   MongoClient.connect(uri ,(err, db) => {
    if (err) return console.log(err)
                        
    //Make sure you add the database name and not the collection name
    let myDatabase = db.db("first_db");
    // app.listen(port, () => {
    //   console.log('We are live on ' + port);
    // });               
  
    myDatabase.collection('first_collection').insert(note, (err, result) => {
        if (err) { 
          res.send({ 'error': 'An error has occurred' }); 
        } else {
          res.send(result.ops[0]);
        }
      });
      
      //res.json(["Tony","Lisa","Michael","Ginger","Food"]);
     });
})