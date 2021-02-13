const express = require('express')
var mysql = require('mysql');
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors');
const port = 4000
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());

const newRoutes = express.Router();
app.use('/create', newRoutes);

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "myapi"
  });
  con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  });

  /*newRoutes.route('/create').post(function(req, res) {
    var sql = "insert into user values('"+ req.body.Name +"', '"+ req.body.Email +"','"+ req.body.Phone +"','"+ req.body.City +"','"+ req.body.Password +"')"
    con.query(sql, function(err){
        if(err) throw err
        res.send('Successfully Registered');
        console.log(req.body);

})
con.end();
});*/


app.get('/profiles' , (req, res) => {
  con.query('SELECT * FROM user', (err, rows, fields) => {
  if (!err)
  res.send(rows);
  else
  console.log(err);
  })
  } );

  app.get('/profiles/:email' , (req, res) => {
    con.query('SELECT * FROM user WHERE Email = ?',[req.params.email], (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );

    app.post('/create', (req, res) => {
       console.log(req.body);
      var sql = "insert into user values('"+ req.body.Name +"', '"+ req.body.Email +"','"+ req.body.Phone +"','"+ req.body.City +"','"+ req.body.Password +"')"
      con.query(sql, function(err){
          if(err) throw err
          res.send('Successfully Registered');

  
      })
      });


/*app.post('/submit', function(req, res) {
        console.log(req.body);

        var sql = "insert into user values('"+ req.body.Name +"', '"+ req.body.Email +"','"+ req.body.Phone +"','"+ req.body.City +"','"+ req.body.Password +"')"
        con.query(sql, function(err){
            if(err) throw err
            res.send('Successfully Registered');

    })
    con.end();
    })
    newRoutes.post('/', function(req, res) {
      var sql = "insert into user values('"+ req.body.Name +"', '"+ req.body.Email +"','"+ req.body.Phone +"','"+ req.body.City +"','"+ req.body.Password +"')"
    con.query(sql, function(err){
        if(err) throw err
        res.send('Successfully Registered');
        console.log(req.body);


})
con.end();
    
  });*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`))