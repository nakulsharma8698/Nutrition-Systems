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


mongoose.connect('mongodb://127.0.0.1:27017/user', { useNewUrlParser: true , useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

userRoutes.route('/add').post(function(req, res) {
    console.log(req.body);
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new user failed');
        });
});

app.use('/users', userRoutes);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});