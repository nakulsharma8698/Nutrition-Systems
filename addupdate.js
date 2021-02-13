const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = express.Router();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
let User = require('./user.model');
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());


//mongoose.connect('mongodb://127.0.0.1:27017/user', { useNewUrlParser: true , useUnifiedTopology: true });
mongoose.connect('mongodb://localhost/my_db', { useNewUrlParser: true , useUnifiedTopology: true });
const connection = mongoose.connection;
var personSchema = mongoose.Schema({
    name: String,
    mobile: Number,
    address: String,
    pin: String,
    city: String,
    state: String,
    country: String
 });
 var Person = mongoose.model("Person", personSchema);

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.get('/add', function(req, res){
    res.render('person');
 });
 app.post('/add', function(req, res){
    var personInfo = req.body; //Get the parsed information
    console.log(req.body);
    if(!personInfo.name || !personInfo.mobile || !personInfo.address || !personInfo.pin|| !personInfo.city|| !personInfo.state|| !personInfo.country){
       console.log('Enter all Fields');
    } else {
       var newPerson = new Person({
          name: personInfo.name,
          mobile:personInfo.mobile,
          address:personInfo.address,
          pin: personInfo.pin,
          city: personInfo.city,
          state:personInfo.state,
          country: personInfo.country
       });
         
       newPerson.save(function(err, Person){
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