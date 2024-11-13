'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const expressHandlebars = require('express-handlebars');


//Cấu hình web : public folder
app.use(express.static(__dirname+'/public'));

//Cấu hình express-handlebars
app.engine('hbs', expressHandlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs',
    defaultLayout: 'layout'
}));
app.set('view engine','hbs');

//Cấu hình routes
app.get('/createTAbles', (req,res) => {
    let models = require('./models');
    models.sequelize.sync().then(() => {
        res.send('Table created !')
    });
});
app.get('/', (req,res) => {
    res.render('index');
});

app.get('/:page',(req,res)=>{
    res.render(req.params.page);
});

//Khởi động web server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});