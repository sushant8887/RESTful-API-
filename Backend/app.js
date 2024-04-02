const express = require('express');
const connectMongo = require('./connection.js');
const BRouting = require('./routing/BlogRoutings.js');
const cors = require('cors');
const  app = express();
connectMongo();
app.use(cors()); 

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(BRouting);

//start the server
app.listen(4000,()=>{
    console.log("Server running on 3000 port...");
})