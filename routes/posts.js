const express = require('express');
const router = express.Router();
const Post = require('../models/Posts')

router.get( '/', (req,res) =>{
    res.send('your posts')
})
// router.get( '/nextpost', (req,res) =>{
//     res.send('This is your next post')
// })

router.post('/', (req, res) => {
    // console.log(req.body);
    // res.send('we are on post req');

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    post.save()
    // .exec()
        .then( data => {
            res.json(data);
        })
        .catch(err => {
            // console.log(err.message);
            // res.json({message: err})
        })
})

module.exports = router;