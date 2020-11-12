const  express          = require('express');
const  router           = express.Router();
const Article           = require('../models/articleSchema');


router.get('/', async(req, res)=>{

    const articles = await Article.find().sort({ createdAt:"desc"}); 

    res.render('articles/index', {articles:  articles})

});


module.exports      =   router;
