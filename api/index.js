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

app.get("/horrormovies", function(req, res){
    con.connect();

    var slq = 'SELECT NAME, NAMEGEN GENRE, SYNOPSIS, DATE, IMG FROM tbmovie LEFT JOIN tbgenre ON tbmovie.GENRE = tbgenre.IDGEN WHERE IDGEN = 1';

    con.query(slq, function(error, results, fields){
        if(results.length != 0)
            res.send(results)
        else
            res.send('no movies found in our databases')
    });
});

app.get("/thrillermovies", function(req, res){
    con.connect();

    var slq = 'SELECT NAME, NAMEGEN GENRE, SYNOPSIS, DATE, IMG FROM tbmovie LEFT JOIN tbgenre ON tbmovie.GENRE = tbgenre.IDGEN WHERE IDGEN = 2';

    con.query(slq, function(error, results, fields){
        if(results.length != 0)
            res.send(results)
        else
            res.send('no movies found in our databases')
    });
});

app.get("/actionmovies", function(req, res){
    con.connect();

    var slq = 'SELECT NAME, NAMEGEN GENRE, SYNOPSIS, DATE, IMG FROM tbmovie LEFT JOIN tbgenre ON tbmovie.GENRE = tbgenre.IDGEN WHERE IDGEN = 3';

    con.query(slq, function(error, results, fields){
        if(results.length != 0)
            res.send(results)
        else
            res.send('no movies found in our databases')
    });
});

app.get("/coomedymovies", function(req, res){
    con.connect();

    var slq = 'SELECT NAME, NAMEGEN GENRE, SYNOPSIS, DATE, IMG FROM tbmovie LEFT JOIN tbgenre ON tbmovie.GENRE = tbgenre.IDGEN WHERE IDGEN = 4';

    con.query(slq, function(error, results, fields){
        if(results.length != 0)
            res.send(results)
        else
            res.send('no movies found in our databases')
    });
});

app.get("/adventuremovies", function(req, res){
    con.connect();

    var slq = 'SELECT NAME, NAMEGEN GENRE, SYNOPSIS, DATE, IMG FROM tbmovie LEFT JOIN tbgenre ON tbmovie.GENRE = tbgenre.IDGEN WHERE IDGEN = 5';

    con.query(slq, function(error, results, fields){
        if(results.length != 0)
            res.send(results)
        else
            res.send('no movies found in our databases')
    });
});

app.get("/docmovies", function(req, res){
    con.connect();

    var slq = 'SELECT NAME, NAMEGEN GENRE, SYNOPSIS, DATE, IMG FROM tbmovie LEFT JOIN tbgenre ON tbmovie.GENRE = tbgenre.IDGEN WHERE IDGEN = 6';

    con.query(slq, function(error, results, fields){
        if(results.length != 0)
            res.send(results)
        else
            res.send('no movies found in our databases')
    });
});

app.get("/romancemovies", function(req, res){
    con.connect();

    var slq = 'SELECT NAME, NAMEGEN GENRE, SYNOPSIS, DATE, IMG FROM tbmovie LEFT JOIN tbgenre ON tbmovie.GENRE = tbgenre.IDGEN WHERE IDGEN = 7';

    con.query(slq, function(error, results, fields){
        if(results.length != 0)
            res.send(results)
        else
            res.send('no movies found in our databases')
    });
});

app.get("/series", function(req, res){
    con.connect();

    con.query('SELECT * FROM tbseries', function(error, results, fields){
        if (results.length != 0)
            res.send(results);
        else
            res.send('no movies found in our databases')
    })

    con.end();
});

app.get("/horrorseries", function(req, res){
    con.connect();

    con.query('SELECT NAME, NAMEGEN GENRE, SYNOPSIS, IMG FROM tbseries LEFT JOIN tbgenre ON tbseries.GENRE = tbgenre.IDGEN WHERE IDGEN = 1', function(error, results, fields){
        if (results.length != 0)
            res.send(results);
        else
            res.send('no movies found in our databases')
    })

    con.end();
});

app.get("/thrillerseries", function(req, res){
    con.connect();

    con.query('SELECT NAME, NAMEGEN GENRE, SYNOPSIS, IMG FROM tbseries LEFT JOIN tbgenre ON tbseries.GENRE = tbgenre.IDGEN WHERE IDGEN = 2', function(error, results, fields){
        if (results.length != 0)
            res.send(results);
        else
            res.send('no movies found in our databases')
    })

    con.end();
});

app.get("/actionseries", function(req, res){
    con.connect();

    con.query('SELECT NAMESER NAME, NAMEGEN GENRE, SYNOPSISSER SYNOPSIS, IMGSER IMG FROM tbseries LEFT JOIN tbgenre ON tbseries.GENRE = tbgenre.IDGEN WHERE IDGEN = 3', function(error, results, fields){
        if (results.length != 0)
            res.send(results);
        else    
            res.send('no movies found in our databases')
    })

    con.end();
});

app.get("/comedysersies", function(req, res){
    con.connect();

    con.query('SELECT NAMESER NAME, NAMEGEN GENRE, SYNOPSISSER SYNOPSIS, IMGSER IMG FROM tbseries LEFT JOIN tbgenre ON tbseries.GENRE = tbgenre.IDGEN WHERE IDGEN = 4', function(error, results, fields){
        if (results.length != 0)
            res.send(results);
        else
            res.send('no movies found in our databases')
    })

    con.end();
});

app.get("/adventureseries", function(req, res){
    con.connect();

    con.query('SELECT NAMESER NAME, NAMEGEN GENRE, SYNOPSISSER SYNOPSIS, IMGSER IMG FROM tbseries LEFT JOIN tbgenre ON tbseries.GENRE = tbgenre.IDGEN WHERE IDGEN = 5', function(error, results, fields){
        if (results.length != 0)
            res.send(results);
        else   
            res.send('no movies found in our databases')
    })

    con.end();
});

app.get("/docseries", function(req, res){
    con.connect();

    con.query('SELECT NAMESER NAME, NAMEGEN GENRE, SYNOPSISSER SYNOPSIS, IMGSER IMG FROM tbseries LEFT JOIN tbgenre ON tbseries.GENRE = tbgenre.IDGEN WHERE IDGEN = 6', function(error, results, fields){
        if (results.length != 0)
            res.send(results);
        else
            res.send('no movies found in our databases')
    })

    con.end();
});

app.get("/romanceseries", function(req, res){
    con.connect();

    con.query('SELECT NAMESER NAME, NAMEGEN GENRE, SYNOPSISSER SYNOPSIS, IMGSER IMG FROM tbseries LEFT JOIN tbgenre ON tbseries.GENRE = tbgenre.IDGEN WHERE IDGEN = 7', function(error, results, fields){
        if (results.length != 0)
            res.send(results);
        else
            res.send('no movies found in our databases')
    })

    con.end();
});

app.get("/seriesepgeneral", function(req, res){
    con.connect();

    con.query('SELECT NAMEEP EPISODEO, NUMEP NUMERO, NUMSES TEMPORADA, NAMESER SERIE FROM tbepisode LEFT JOIN tbseason ON SEASONEP = IDSES RIGHT JOIN tbseries ON SERIESES = IDSER', function(error, results, fields){
        if (results.length != 0)
            res.send(results);
        else
            res.send('no ep found in our databases')
    });
})

app.listen(8081, function(){
    console.log('server on');
});