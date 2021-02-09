//give us ability to create routes and pass in logic. 
const  express          = require('express');
const router            = express.Router();

const nav               = [
     {title:"About",link:'/about'},
     {title:"Blog",link:'/blog'},
     {title:"Github",link:'/projects'},
     {title:"Resume",link:'/resume'}
]

router.get('/', (req,res) =>{
// const carousel = document.querySelector('.carousel');
    res.render('nav/index', {navigation: nav})
});

router.get('/about', (req,res) => {
    res.render('nav/about', {navigation:    nav})
});

router.get('/projects', (req,res)=>{
    console.log(nav)
    res.render("nav/github",{navigation:    nav})
});
    

module.exports = router;




// =============================================================================
// TODO: background video like ps4 
// TODO: style a navigation that slides up.
// =============================================================================