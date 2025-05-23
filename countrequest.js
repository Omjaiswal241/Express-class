const express=require('express');
const app=express();
let requestcount=0;
app.use(function(req,res,next)
{
    requestcount=requestcount+1;
    next();
})
app.get('/user1',function(req,res)
{
    res.status(200).json({name:"John"});
})
app.post('/user2',function(req,res)
{
    res.status(200).json({msg:'created dummy user'});
})
app.get('/user3',function(req,res)
{
    res.status(200).json({requestcount});
})
app.listen(3000); 