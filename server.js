// .env setup
require('dotenv').config();

const express   = require('express');
const articlesRouter  = require('./routes/articles');
const app       = express();
const port      = 7777   
const Article   = require('./models/articleSchema');
const methodOverride = require('method-override');

// set up DB
const mongoose       = require('mongoose')
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.skgpm.mongodb.net/myblog?retryWrites=true&w=majority`)


// view engine ejs
app.set('view engine', 'ejs')
// url encoder
// ?
app.use(express.urlencoded({extended:false}));
//method override -> delete items
app.use(methodOverride('_method'))

//Routes
app.get('/', async(req, res)=>{
    const articles = await Article.find().sort({ createdAt:"desc"});
    // TODO: limit the number of articles that show up on the page. 
    
    //could also put this in articles aswell
    res.render('articles/index', {articles:  articles});
    // TODO:find way to handle / and /articles/index and /articles 
});
//- /articles -> routes.
app.use("/articles", articlesRouter)

//port
app.listen(port)

console.log("project showing on localhost:"+port);
