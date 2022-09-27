const mongoose = require("mongoose")
const detail = mongoose.Schema({
    brandName:String,
    brandIconUrl:String,
    links:[
    {
        lable:String,
        url:String,
        imageUrl:String
    },
],
});

module.exports=mongoose.model("detail",detail)