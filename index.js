'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const expressHandlebars = require('express-handlebars');
const {createStarList} = require('./controllers/handlebarsHelper');

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
        createStarList
    }
}));
app.set('view engine','hbs');

//Routes

app.use('/', require('./routes/indexRouter'));
app.use('/products',require('./routes/productsRouter'));

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