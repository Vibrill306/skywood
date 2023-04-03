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
const skywoodController = require('./controller/skywoodController');
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


app.post('/', function(req, res) {
    const user = {
      name: req.body.name,
      email: req.body.email,
      checkIn: req.body.checkIn,
      checkOut:req.body.checkOut,
      person:req.body.person,
      rooms:req.body.rooms
    };
    const collection = db.collection('skywood');
    collection.insertOne(user, function(err, result) {
      if(err) {
        console.log(err);
      } else {
        console.log(user);
        // res.send(user);
        sendMail("skywood", user);
        return res.redirect('/book.html');
      }
    });
  });




  app.get('/skywoodresort', (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": "*"
    })
    return res.redirect('../index.html')
})    


// Add Customer Here 

app.post('/skywood_contact', addcustomer = async function postUser(req, res) {
        let addcustomer = req.body;
        skywoodModel.create(addcustomer).then((res) => {
            sendMail("customer", res);
        })
        // return res.redirect('vender_dashboard.html')

    })

   


