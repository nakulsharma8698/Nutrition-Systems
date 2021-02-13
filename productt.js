var mongoose = require('mongoose'); 
  
var productSchema = new mongoose.Schema({ 
    product_id: { type: String, required: true },
    title: { type: String, required: true },
    desc:{ type: String, required: true }, 
    img: { type: String, required: true },
    
    brand: { type: String, required: true },
    price: { type: Number, default: 0, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, default: 0, required: true },
    discount:  {
        type: Number,
        min: 0,
        max: 100,
        required: true,
      },
    
}); 
  
//Image is a model which has a schema imageSchema 
  
module.exports = new mongoose.model('Product', productSchema); 
