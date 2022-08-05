var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var postCommentsSchema = new Schema({
    comment: {type: String},
    date: {type: Date},
})

var postListSchema = new Schema({
    public: {type: Boolean},
    title: {type:String},
    blogPost: {type:String},
    comments: [postCommentsSchema]
})

var postSchema = new Schema({
    posts:[postListSchema]
})

const blogPosts = mongoose.model("blogPosts", postSchema);

module.exports = blogPosts;
