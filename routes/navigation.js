//give us ability to create routes and pass in logic. 
const  express          = require('express');
const router            = express.Router();


router.get('/', (req,res) =>{
    const nav               = [
         {title:"mySelf",link:'/about'},
         {title:"myBlog",link:'/blog'},
         {title:"myProjects",link:'/projects'},
]
// const carousel = document.querySelector('.carousel');

    res.render('nav/index', {navigation: nav})
});

    

module.exports = router;




// =============================================================================
// TODO: background video like ps4 
// TODO: style a navigation that slides up.
// =============================================================================