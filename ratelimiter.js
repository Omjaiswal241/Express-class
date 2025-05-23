// blockuser if he sends more than 5 request in less than 3 sec
const express=require('express');
const app=express();
let numberofrequestforuser={};
setInterval(()=>{
    numberofrequestforuser={};
},3000)

app.use(function(req,res,next)
{
    const userId=req.headers["user-id"];
    if(numberofrequestforuser[userId])
    {
        numberofrequestforuser[userId]=numberofrequestforuser[userId]+1;
        if(numberofrequestforuser[userId]>5)
        {
            res.status(404).json({msg:"no entry"});
        }
        else{
            next();
        }
    }
    else{
        numberofrequestforuser[userId]=1;
        next();
    }
})
app.get('/user',function(req,res)
{
    res.send("hi");
})
app.listen(3000);