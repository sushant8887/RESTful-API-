const express = require("express");
const {
  addPost,
  deletePost,
  updatePost,
  showPost,
  findPost,
} = require("../controllers/BlogControllers.js");
const router = express.Router();

//to show all data posts
router.get("/posts/showAll", showPost);
// to find specific id 
router.get("/posts/show/:id", findPost);

//to add post
router.post("/posts/add", addPost);

//to update the post data
router.put("/posts/update/:id", updatePost);

//delete an post using delete method in http
router.delete("/posts/delete/:id", deletePost);

module.exports = router;