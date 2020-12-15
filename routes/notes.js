var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const { connect } = require('.');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1970',
  database: 'mysqltest'
});

  
;

connection.query(function(err){
    if (err) throw err;
    console.log("connected");
    var sql = "INSERT INTO hej (name, adress, phonenumber) VALUES ?";
    var values = [
        ['sune', 'femoevej 3', '28752430'],
        ['nicki', 'vordingborgvej 3', '28752455'],
        ['mik', 'mikpikvej 3', '28750002'],
        ['toke', 'archvej 3', '66666666']
    ];
    connection.query (sql, [values], function(err ,result){
        if (err) throw err;
        console.log ("number of recs" + result.affectedRows);
    });
});



/* GET users listing. */
router.get('/notes', function(req, res) {
  res.render('notes', {title: notes})
});


module.exports = router