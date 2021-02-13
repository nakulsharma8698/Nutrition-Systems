var express = require('express') 
var app = express() 
var bodyParser = require('body-parser'); 
var mongoose = require('mongoose') 
const cors = require('cors');
const PORT = 4000;
app.use(cors());
var userModel = require('./users'); 
var path = require('path'); 
  

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());

mongoose.connect('mongodb://localhost/my_db', { useNewUrlParser: true , useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use('/user', userRouter);
app.use(cookieParser());

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

  const  accessTokenSecret= 'iamnakul';

      app.post('/login', function(req, res) {
        console.log(req.body);
        var UserId=req.body.UserId;
        var Password=req.body.Password;
      if (UserId && Password) {
        con.query('SELECT * FROM register WHERE UserId = ? AND Password = ?', [UserId, Password], function(err,results, fields) {
          if (results.length >0) {
            const accessToken = jwt.sign({ UserId: req.body.UserId }, accessTokenSecret);

            req.session.UserId = results[0].UserId;
            console.log(results[0].UserId);
            req.session.UserId = UserId;
            req.session.loggedin = true;
            ///res.redirect('/user');
            res.json({
              accessToken
            });
          } else {
            res.send('Incorrect Username and/or Password!');
            res.end();
          }			
          
        });
      } else {
        res.send('Please enter Username and Password!');
        res.end();
        
      }
     
    });
    
   
  
    /*app.get('/user',  function(req, res) {
      if (req.session.loggedin) {
          res.write('Welcome back, ' + req.session.UserId + '!');
          
      } else {
        res.send('Please login to view this page!');
      }
      res.end();
    });*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`))