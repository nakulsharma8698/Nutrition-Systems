const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = express.Router();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
let User = require('./user');
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());

var details = require('./details.js');
var addproduct = require('./addproduct.js');
//var register = require('./registerblog.js');


app.use('/details', details);
app.use('/addProduct', addproduct);
//mongoose.connect('mongodb://127.0.0.1:27017/user', { useNewUrlParser: true , useUnifiedTopology: true });
mongoose.connect('mongodb://localhost/my_db', { useNewUrlParser: true , useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.get('/add', function(req, res){
    res.render('person');
 });
 app.post('/userlogin', function(req, res){
    var userInfo = req.body; //Get the parsed information
    console.log(req.body);
    if(!userInfo.email && !userInfo.mobile){// || !userInfo.address || !userInfo.pin|| !userInfo.city|| !userInfo.state|| !userInfo.country){
       console.log('Enter all Fields');
    } else {
       var newUser = new User({
          name: userInfo.Name,
          email:userInfo.email
       });
         
       newUser.save(function(err, Person){
          if(err)
            console.log(err);
          else
            console.log('Registered Successfully');
       });
    }
 });


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});