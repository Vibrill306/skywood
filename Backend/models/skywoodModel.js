const mongoose = require('mongoose');
const db_link = 'mongodb+srv://admin:IVaCDFjcRtf5oF3z@cluster0.rcbcaho.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(db_link).then(
    function(db){
        // console.log('Plan db connected')
    }
)
.catch(function(err){
    console.log(err)
})

const skywoodSchema = new mongoose.Schema({
    name : {
        type : String,
        required :true,
        maxlength:[20,'plan name should not exceed more then 20 characters']
    },
    // lastName:{
    //     type : String,
    //     required :true,
    //     maxlength:[20,'plan name should not exceed more then 20 characters']
    // },
    email:{
        type:String,
        required :true,
    },
    checkIn:{
        type:String,
        required :true,
    },
    checkOut:{
        type:String,
        required:true,
    },
    person:{
        type:Number,
        required:true
    },
    rooms:{
        type:Number,
        required:true
    }
})
//model

const skywoodModel = mongoose.model('skywoodUser',skywoodSchema);

module.exports = skywoodModel;