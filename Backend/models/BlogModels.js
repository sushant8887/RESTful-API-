const mongoose = require('mongoose');


const postSchema= new mongoose.Schema({
    id:String,
    title: String,
    content: String,
    author: String,
    date:String,

});
const BModel = mongoose.model('Blog',postSchema);

module.exports={BModel};