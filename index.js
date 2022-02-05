const express = require('express');
const  mongoConnect  = require('./src/config/database');

const app = express();

require('dotenv').config()




mongoConnect()


const Port = process.env.PORT || 5000;
app.listen(Port, () =>{
    console.log(`Server started on port ${Port}`);  
})