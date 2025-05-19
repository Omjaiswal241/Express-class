const express=require('express');
const app=express();
function add(n)
{
    let sum=0;
    for(let i=0;i<=n;i++)
    {
        sum+=i;
    }
    return sum;
}
app.get('/',function(req,res)
{
    const n=req.query.n;
    const sum=add(n);
    res.send(sum.toString());
})
app.listen(3000);