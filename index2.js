const express=require('express');
const app=express()

app.get('/',function(req,res)
{
    res.send("Hello Express World");
})
 app.get('/asd',function(req,res)
{
    res.send("hello from the asd endpoint")
})
app.listen(5500);