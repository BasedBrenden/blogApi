var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var postCommentsSchema = new Schema({
    comment: {type: String},
    author: {type: String},
    date: {type: Date},
})

var postListSchema = new Schema({
    public: {type: Boolean},
    image: {type: String},
    title: {type:String},
    author: {type:String},
    blogPost: {type:String},
    date: {type: Date},
    comments: [postCommentsSchema]
})

var postSchema = new Schema({
    posts:[postListSchema]
})

const blogPosts = mongoose.model("blogPosts", postSchema);

module.exports = blogPosts;
