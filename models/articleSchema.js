const mongoose = require('mongoose');
const marked = require('marked');
const slugify = require('slugify');

//markdown
const createDomPurify = require('dompurify');
const {JSDOM}           = require("jsdom");

const dompurify         = createDomPurify(new JSDOM().window); 

const articleSchema = new mongoose.Schema({
    title: {
    type:String,
    required:true    
    },
    description:{
        type:String,
    },
    markdown:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    sanitizedHtml:{
        type:String,
        required:true
    }
})

//validation on schema

articleSchema.pre('validate',function(next){
    if(this.title){
        console.log("title exists")
        this.slug = slugify(this.title, {lower:true, strict:true});
    }

    if(this.markdown){
        console.log("markdown exists")
        this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
    }

    next();
});

module.exports = mongoose.model('article', articleSchema);
// article schema created for form.
//  please require in route for which form is used. 