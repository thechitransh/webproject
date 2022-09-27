const mongoose = require ('mongoose')

const Contact= mongoose.Schema({
    email:String,
    Phone:String,
    Querry:String
})

module.exports=mongoose.model("Quarees",Contact)