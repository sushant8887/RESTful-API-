const model = require('C:/Users/suraj kumbhar/Documents/Restful API/Backend/models/BlogModels.js');

const addPost = async(req,res)=>{
    let post= req.body; 
    const data = new model.BModel(post);
    const result = await data.save()
    .then(()=>res.send('Blogpost data added...'))
    .catch((err)=>console.log(err));
    console.log(result);
}

const updatePost = async (req,res)=>{
    const id = req.params.id;
    let {title,content,author} = req.body;
    console.log(req.body);
    const result = await model.BModel.updateOne({id:id},{$set:{title:title, content:content,author:author}})
    .then(()=>res.send('Blogspost data updated...'))
    .catch((err)=>console.log(err))
    console.log(result);
}

const deletePost = async(req,res)=>{
    const id = Number(req.params.id);
    const result = await model.BModel.deleteOne({id:id})
    .then(()=> res.send('one blog deleted...'))
    .catch((err)=>console.log(err))
    console.log(result);
}

//to find all blog post
const showPost = async (req,res)=>{
    const result = await model.BModel.find();
    console.log(result);
    res.json(result);
}
//to find for particular id blogposts
const findPost = async (req,res)=>{
    const id = req.params.id;
    const result = await model.BModel.find({id:id});
    res.json(result);   
}
module.exports ={ addPost,deletePost,updatePost,showPost,findPost}