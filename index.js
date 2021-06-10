const express= require('express');
const path = require('path')
const data=require('./data/cov.json');
const app=express();
app.set('view engine','hbs');
console.log(data);
app.use(express.static(path.join(__dirname , './public')))
app.get('/',(req,res)=>
{
    res.render('index.hbs',{item:data})
    console.log(data);
    res.render('index.hbs',{allData:data})
})
app.get('/sign_up',(req,res)=>
{
    res.render('signup.hbs',{item:data})
    console.log(data);
    res.render('signup.hbs',{allData:data})
})
app.get('/login',(req,res)=>
{
    res.render('login.hbs',{item:data})
    console.log(data);
    res.render('login.hbs',{allData:data})
})

app.get('/about',(req,res)=>
{
    res.render('about.hbs',{item:data})
    console.log(data);
    res.render('about.hbs',{allData:data})
})
app.listen(1111,()=>
{
    console.log('listening on 1111');
});