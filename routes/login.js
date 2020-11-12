//give us ability to create routes and pass in logic. 
const  express          = require('express');
const router            = express.Router();
const app               = express();
const bcrypt            = require('bcrypt');
const passport          = require('passport');
const flash             = require('express-flash');
const session           = require('express-session');

    
    
    // Route -> /login
    router.get('/', (req, res)=>{
        
        res.render('login/login',);
    })
    
    router.get('/register', (req, res)=>{
        
        res.render('login/register');
    })
    
    
   
    //-> /login(
    router.post('/', (req,res)=>{

    });
    
    router.post('/register', async (req, res)=>{
        

        res.render('login/register');
    })
    
    


    
    module.exports = router;


  