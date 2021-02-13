var mongoose = require('mongoose'); 
  
var userSchema = new mongoose.Schema({ 
    email: { type: String },
    mobile: { type: String},
    name:{ type: String }
}); 
  
//Image is a model which has a schema imageSchema 
  
module.exports = new mongoose.model('User', userSchema); 