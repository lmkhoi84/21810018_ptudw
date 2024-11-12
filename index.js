'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 80;

//Cấu hình web : public folder
app.use(express.static(__dirname+'/public'));

//Khởi động web server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});