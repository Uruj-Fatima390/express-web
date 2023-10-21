const express = require('express');
const path=require('path')
const hbs=require('hbs');
const app=express();
const port=process.env.PORT || 8000;//process.env.PORT its for heroku deployement because it runs on any port

const staticPath=path.join(__dirname,'../public') // '..'-- it means express tak aagye
const template_path=path.join(__dirname,'../templates/views');
const partials_path=path.join(__dirname,'../templates/partials');

app.set('view engine','hbs');
app.set('views',template_path)
hbs.registerPartials(partials_path);

app.use(express.static(staticPath))


app.get("/",(req,res)=>{
    res.render("index") //views mai jayega and then ye index file render krke dikha dega
})

app.get("/about",(req,res)=>{
    res.render('about')
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.render('404error',{
        errorMsg:'Oops! Page not found'
    })
})

app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})