const express = require("express")
const skywoodRouter = express.Router();

const skywoodController = require('../controller/skywoodController')
// contactRouter.get('/contact-us',contactController.sendMail)
// app.use('/contact-us',(req,res)=>res.send('hello'))
skywoodRouter.route('/send').get((req, res)=>{
    res.send('rcexawz')
})