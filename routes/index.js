var express = require('express');
var mongoose = require('mongoose');
const Posts = require('../models/Posts');
var router = express.Router();
var mongoDB = 'mongodb+srv://bthomas:bthomas@cluster0.xjccjyk.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});



/* GET home page. */
router.get('/', async(req, res, next) => {
  const currentPosts = await Posts.findById("62e965869ada8f801e5443ea", (err, data)=>{
    if(err) {return console.error(err)}
  }).clone()
  res.json(currentPosts)
});

//add new posts
router.post('/',  (req,res, next)=>{

  Posts.findById("62e965869ada8f801e5443ea", (err, data)=>{
    if(err) {return console.error(err)}
    const newPost = {
      public:true,
      image: req.body.image,
      title: req.body.title,
      blogPost: req.body.blogPost,
      comments: [],
      date: new Date(),
    }
    

    data.posts.push(newPost)

    data.save((err,updatedData)=>{
      if(err) console.error(err)
    })
  })
  res.send()
  
})

router.post('/comments', (req,res)=>{

  Posts.findById("62e965869ada8f801e5443ea", (err,data)=>{
    if(err) {return console.error(err)}
    const newComment ={
      comment: req.body.post,
      author: req.body.author,
      date: new Date(),
    }
    const targetPost = req.body.postID;

    data.posts[targetPost].comments.push(newComment);

    data.save((err, updatedData)=>{
      if(err) console.error(err)
    })
  })
  res.send();

})




module.exports = router;
