const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const JWT_KEY = require('../secrets')
const port = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser')
const { db } = require('./models/userModel');
const userModel = require('../Backend/models/userModel');
const { sendMail } = require('../Backend/utility/nodemailer')
const bcrypt = require('bcrypt')
const userRouter = require('../Backend/Routers/userRouter')
const authRouter = require('../Backend/Routers/authRouter');
const skywoodRouter = require('./Routers/skywoodRouter');
const { getMaxListeners } = require('./models/skywoodModel');
const { response } = require('express');
const pdf = require('html-pdf');

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
app.use(express.json());
app.use(cookieParser())
require('dotenv').config();
app.use('/users', userRouter)
app.use('/auth', authRouter)
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))


// Add Customer Here 

app.post('/customer_details', addcustomer = async function postUser(req, res) {
        let addcustomer = req.body;
        skywoodModel.create(addcustomer).then((res) => {
            sendMail("customer", res);
        })
        return res.redirect('vender_dashboard.html')

    })

    app.get('/customer_details', (req, res) => {
        res.set({
            "Allow-access-Allow-Origin": "*"
        })
        return res.redirect('vender_dashboard.html')
    })    


