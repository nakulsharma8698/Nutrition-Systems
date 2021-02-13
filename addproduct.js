var express = require('express') 
var app = express() 
var cloudinary = require('cloudinary').v2;
var bodyParser = require('body-parser'); 
var mongoose = require('mongoose') 
const cors = require('cors');
const PORT = 4000;
app.use(cors());
var productModel = require('./productt'); 
var router = express.Router();
var fs = require('fs'); 
var path = require('path'); 
var multer = require('multer'); 
  

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());

mongoose.connect('mongodb://localhost/my_db', { useNewUrlParser: true , useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database product connection established successfully");
})

var storage = multer.diskStorage({ 
    destination: (req, file, cb) => { 
        cb(null, 'public') 
    }, 
    filename: (req, file, cb) => { 
        cb(null, Date.now() + '-' +file.originalname ) 
    } 
}); 
/*var upload = multer({ storage: storage }); 
require('dotenv').config();*/


router.get('/details/:product_id' , (req, res) => {
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



cloudinary.config({ 
    cloud_name: 'nakul', 
    api_key: '147936936126268', 
    api_secret: 'sE7MC5nSI5ZkfsDUohr4S7hGjfo' 
  });
  router.get('/', (req, res) => { 
    productModel.find({}, (err, items) => { 
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
//var upload = multer({ storage: storage }).single('file'); 
var upload = multer({ storage: storage }); 
router.post('/',  upload.single('img'), (req, res) => { 
    console.log(req.body);
    cloudinary.uploader.upload(req.file.path, function(error, result) {
        console.log(req.body.product_id);
        var obj = { 
            product_id: req.body.product_id,
            title: req.body.title,
            desc:req.body.desc,
            brand :req.body.brand,
            price :req.body.price,
            category :req.body.category,
            quantity:req.body.quantity,
            discount:req.body.discount,
            img: result.url
        } 
        productModel.create(obj, (err, item) => { 
            if (err) { 
                console.log(err); 
            } 
            else { 
               console.log(req.body);
            } 
        }); 
    });
}); 

/*app.listen(4000, function() {

    console.log('App running on port 4000');

});*/
module.exports = router;