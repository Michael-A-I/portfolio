if(process.env.NODE_ENV !== 'production'){
    // .env setup
    require('dotenv').config();
}
const express           = require('express');

// Router -------------
const navRouter         = require('./routes/navigation')
const articlesRouter    = require('./routes/articles');
const adminRouter       = require('./routes/admin');
const authRouter        = require('./routes/login');
const blogRouter        = require('./routes/blog');
// Router -------------

const app               = express();
const port              = 7777;
// DB -----------------    
const Article           = require('./models/articleSchema');

// Put & Delete -------
const methodOverride    = require('method-override');

// =============================================================================
// Database setup
// =============================================================================
const mongoose          = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.skgpm.mongodb.net/myblog?retryWrites=true&w=majority`)

// =============================================================================
// View Engine - EJS
// =============================================================================
app.set('view engine', 'ejs');

// =============================================================================
// urlencoded --> incoming requests handler => req.body.nameOnFormInput (Research)
// ============================================================================= 
app.use(express.urlencoded({extended:false}));

// =============================================================================
// Allows put and delete methods
// =============================================================================
app.use(methodOverride('_method'));

// assets folder
app.use(express.static(__dirname + '/assets'));
// =============================================================================
// Routes
// =============================================================================
app.use('/',            navRouter);
app.use('/blog',        blogRouter );
app.use('/admin',       adminRouter);
app.use('/login',       authRouter );
app.use("/articles",    articlesRouter);

//port
app.listen(port);

console.log("project showing on localhost:"+port);


// =============================================================================
// /     -> navigation
// /blog -> view blog posts
//      /blog/show -> see specific blog
// /about -> about page
// /projects -> show all projects (besides blog)
// 
// 
// 
// =============================================================================