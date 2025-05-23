const express=require('express');
const app=express();
function checkageMiddleware(req,res,next)
{
    const age=req.query.age;
    if(age>=16)
    {
        next();
    }
    else{
        res.json({msg:"Ticket is invalid"});
    }
}
app.use(checkageMiddleware);
app.get('/ticket',function(req,res,next)
{
    res.json({msg:"ticket is valid"});
});
app.get('/ticket2',function(req,res,next)
{
        res.json({msg:"ride is valid"});
})
app.listen(3000);