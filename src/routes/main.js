const express = require('express')
const {route} = require("express/lib/application")
const detail = require('../models/detail')
const slider = require('../models/slider')
const services = require('..//models/service')
const { request, response } = require('express')
const async = require('hbs/lib/async')
const contact = require('../models/contact')














const routes = express.Router()
routes.get("/",async (req,res)=>{

    const details = await detail.findOne({"_id":"630a44a98c310bf9b66a289c"})
    const slides = await slider.find()
    const Service = await services.find()
    //    console.log(Service)
    res.render("index",{
        detail:details,
        slides:slides,
        services:Service

        
        
    })
})
routes.get("/gallery",async (req,res)=>{
    const details = await detail.findOne({"_id":"630a44a98c310bf9b66a289c"})
    res.render("gallery",{
        detail:details
    })
})

// Process contact form
routes.post("/process-contact-form",async(request,response)=>{
    console.log("form is submitted")

    // save the data to db
try{

const data = await contact.create(request.body)
console.log(data)
response.redirect("/")


}catch(e)
{
    console.log(e)
    response.redirect("/")
}



})







module.exports = routes