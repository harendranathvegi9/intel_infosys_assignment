var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/stock");
module.exports=mongoose;