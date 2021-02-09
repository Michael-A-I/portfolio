const  express          = require('express');
const  router           = express.Router();
const Article           = require('../models/articleSchema');
// make nav modular
const nav               = [
    {title:"About",link:'/about'},
    {title:"Blog",link:'/blog'},
    {title:"Github",link:'/projects'},
    {title:"Resume",link:'/resume'}
]

router.get('/', async(req, res)=>{

    let locals = {}
    const articles = await Article.find().sort({ createdAt:"desc"}); 
    res.render('articles/index', {articles:  locals.articles})

});


module.exports      =   router;
