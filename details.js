var express = require('express') 
var app = express() 
var bodyParser = require('body-parser'); 
var mongoose = require('mongoose') 
var router = express.Router();
const cors = require('cors');
const PORT = 4000;
var productModel = require('./productt'); 
app.use(cors());
  

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());

mongoose.connect('mongodb://localhost/my_db', { useNewUrlParser: true , useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

router.get('/:product_id' , (req, res) => {
    productModel.find({"product_id":req.params.product_id}, (err, items) => { 
        if (err) { 
            console.log(err); 
        } 
        else
        {
            res.json(items);
        }
    
        console.log(items);
            //res.render('app', { items: items });  
    }); 
}); 
/*app.listen(4000, function() {

    console.log('App running on port 4000');

});*/
module.exports = router;