const { request, response } = require("express")
const hbs= require("hbs")
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const detail = require("./models/detail")
const slider = require("./models/slider")
const services = require("./models/service")
const bodyParser = require("body-parser")

const routes=require('./routes/main')
const { create } = require("hbs")


app.use(bodyParser.urlencoded({
    extended:true
}))
app.use("/static",express.static("public"))
app.use('',routes)



mongoose.connect("mongodb://localhost/website",()=>{
    console.log("db connected")
})



        // services.create([
        //     {
        //         icon:"fa-solid fa-book service-icon",
        //         title:"Provide best cources",
        //         discription:"we provide cources that help student in learn coading",
        //         linkText:"www.google.com",
        //         link:"Check"
        //     },
        //     {
        //         icon:"fa-sharp fa-solid fa-sparkles",
        //         title:"Learn Projects",
        //         discription:"we provide cources that help student in learn coading",
        //         linkText:"www.google.com",
        //         link:"Check"
        //     },
        //     {
        //         icon:"fa-sharp fa-solid fa-sparkles",
        //         title:"Learn Projects",
        //         discription:"we provide cources that help student in learn coading",
        //         linkText:"www.google.com",
        //         link:"Check"
        //     }
        // ])

//     slider.create([
//     {
//         title : "learn java in very easy maner",
//         subTitle: "java is one of the most important laguage",
//         imageUrl: "/static/images/s1.jpg"
//     },
//     {
//         title : "What is Django in Python",
//         subTitle: "Django is the most famouse frame work in python.",
//         imageUrl: "/static/images/s2.jpg"
//     },
//     {
//         title : "Who creat this",
//         subTitle: "Akshat create this website",
//         imageUrl: "/static/images/s3.jpg"
//     },
// ])

// detail.create({
//     brandName:"Technical info solutions",
//     brandIconUrl:"https://www.logodesignlove.com/wp-content/uploads/2022/01/logo-wave-symbol-01.jpg",
//     links:[{
//          lable:"Home",
//         url:"/"
//     },
//     {
//         lable:"Services",
//         url:"/"
//     },
//     {
//         lable:"Gallery",
//         url:"/"
//     },
//     {
//         lable:"About",
//         url:"/"
//     },
//     {
//         lable:"Contact Us",
//         url:"/"
//     },
//     ]
// })

app.set('view engine','hbs') 
app.set("views","views")
hbs.registerPartials("views/partials")

app.listen(5555,()=>{
    console.log("Server Strted")
})