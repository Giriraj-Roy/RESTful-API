const express = require('express');

const app = express();
// dotenv.config()

//Listening
app.listen(3000);

//MIDDLEWARES
// app.use( '/profile', (req,res, next) => {
//     console.log("This is a Middleware");
//     next();
// })

//ROUTES
app.get( '/', (req, res) => {
    res.send('This is home page');
} )
app.get( '/profile', (req,res) =>{
    res.send('your profile')
})