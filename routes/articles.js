//give us ability to create routes and pass in logic. 
const  express          = require('express');
const router            = express.Router();
// Model
const Article           = require("../models/articleSchema")

// /ARTICLES
//   views/articles/[xyz] -> root 
router.get('/new', (req, res) =>{
    //articles/new -> view in folder articles


    // look inside of articles/new and render page. 
    res.render("articles/new", {article: new Article()});
});

router.get('/edit/:id', async (req, res) =>{
    //articles/new -> view in folder articles
    const article = await Article.findById(req.params.id);

    // look inside of articles/new and render page. 
    console.log(article.title);
    res.render("articles/edit", {article: article});
});



// /article/:id --> render specific article based on button. 
router.get('/:slug', async (req,res)=> {
    
    const article = await Article.findOne({
        slug: req.params.slug
    });
    // TODO: what if I name these the same article - added unique to slug schema

    if(article == null) res.redirect("/");
    res.render("articles/show", {article: article})
});

// Post New From to DB
router.post('/', async (req,res, next)=>{
    //save artivle to request
    req.article = new Article;
    //pass article to the next fucntion.      
    next();
}, 
// run function w/ req.article passed & new parameter. 
saveArticleAndRedirect('new'));

// UPDATE FORM from DB to DB
router.put("/:id", async (req,res)=>{
    req.article  = await Article.findById(req.params.id);

    next();
},
    saveArticleAndRedirect('edit')
);

//method override for delete. 
router.delete('/:id', async (req,res) => {
    await Article.findByIdAndDelete(req.params.id);
    res.redirect('/')
});
// DETLETE ^^^

router.get('/edit/:slug', (req,res)=>{
    // create edit view
    // find article based on slug. exposed in  articles/slug
    // expose data to /edit/slug so its populated. 
    // post data back to database. 
});



function saveArticleAndRedirect(path){
    return async (req,res) =>{ 

        let article             = req.article
        // set value of article form to req.article
            article.title       = req.body.title
            article.description = req.body.description
            article.markdown    = req.body.markdown

        // error handling
        try{
            //save article to database
            article = await article.save(); //gives us ID in mongodb
            // redirect to article once saved.
            res.redirect(`/articles/${article.slug}`);
    
        }catch(err){
            //render the same page with data passed in previously
            res.render(`articles/${path}`, {article: article})
            console.log(err);
        }
    }
}
module.exports = router
// /ARTICLES
