const express = require("express");
const send = require("send");
const app = express();

var mysql = require("mysql");

var con = mysql.createConnection(
    {
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'netflix'
    }
);

app.get("/", function(req, res){
    res.send("welcom to my API");
});

app.get("/movies", function(req, res){
    con.connect();

    con.query('SELECT * FROM tbmovie', function(error, results, fields){
        if (results.length != 0)
            res.send(results);
        else
            res.send('no movies found in our databases')
    });

    con.end();
})

app.get("/series", function(req, res){
    con.connect();

    con.query('SELECT * FROM tbseries', function(error, results, fields){
        if (results.length != 0)
            res.send(results);
        else
            res.send('no movies found in our databases')
    })

    con.end();
})

app.listen(8081, function(){
    console.log('server on');
});