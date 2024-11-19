'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const expressHandlebars = require('express-handlebars');
const {createStarList} = require('./controllers/handlebarsHelper');
const {createPagination} = require('express-handlebars-paginate');
const session = require('express-session');
const redisStore = require('connect-redis').default;
const {createClient} = require('redis');
const redisClient = createClient({
    url: 'redis://red-csu3c75umphs738l8ss0:6379'
    //url:'rediss://red-csu3c75umphs738l8ss0:nXOsS6H55qezh95qeAMxbFEOHeyuPXuY@oregon-redis.render.com:6379'
});
redisClient.connect().catch(console.error);

//Cấu hình web : public folder
app.use(express.static(__dirname+'/public'));

//Cấu hình express-handlebars
app.engine('hbs', expressHandlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs',
    defaultLayout: 'layout',
    runtimeOptions: {
        allowProtoPropertiesByDefault:true
    },
    helpers: {
        createStarList,
        createPagination
    }
}));
app.set('view engine','hbs');

//Cấu hình đọc dữ liệu post
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Cấu hình Session
app.use(session({
    secret: 'S3rect',
    store: new redisStore({client: redisClient}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 20 *60 *1000 //20 minute
    }
}));

//Middleware khởi tạo giỏ hàng
app.use((req,res,next) => {
    let Cart = require('./controllers/cart');
    req.session.cart = new Cart(req.session.cart ? req.session.cart : {});
    res.locals.quantity = req.session.cart.quantity;
    next();
});

//Routes
app.use('/', require('./routes/indexRouter'));
app.use('/products',require('./routes/productsRouter'));
app.use('/users',require('./routes/userRouter'));

    //Cài đặt lỗi
app.use((req, res, next) => {
    res.status(404).render('error',{message :'Error 404 : File not Found !'});
});

app.use((error,req,res,next) => {
    console.error(error);
    res.status(500).send('Error 500 : Internal Server Error');
});

//Khởi động web server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});