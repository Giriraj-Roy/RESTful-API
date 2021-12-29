const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
require('dotenv/config')

const app = express();

// dotenv.config()

app.use(bodyParser.json())

//Listening
app.listen(3000);

//MIDDLEWARES
// app.use( '/profile', (req,res, next) => {
//     console.log("This is a Middleware");
//     next();
// })

//ROUTES
// app.get( '/', (req, res) => {
//     res.send('This is home page');
// } )
// app.get( '/posts', (req,res) =>{
//     res.send('your posts')
// })

//Import Routes
const postRoute = require('./routes/posts')

app.use('/posts', postRoute)


// Database
mongoose.connect(process.env.DB_URL, ()=>{
    console.log("DB Connected")
})