const express = require('express');
const app = express();
let users = [{ name: "John", Kidneys: [{ healthy: false }, { healthy: true }] }]
app.use(express.json());
app.get('/', function (req, res) {
    const JohnKidneys = users[0].Kidneys;
    const numberofKidneys = JohnKidneys.length;
    let numberofhealthykidneys = 0;
    for (let i = 0; i < numberofKidneys; i++) {
        if (JohnKidneys[i].healthy) {
            numberofhealthykidneys += 1;
        }
    }
    const unhealthykidneys = numberofKidneys - numberofhealthykidneys;
    res.json({ numberofKidneys, numberofhealthykidneys, unhealthykidneys });
})
app.post('/', function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].Kidneys.push(
        {
            healthy: isHealthy
        }
    )
    res.json({
        msg: "Done!"
    })
})
app.put('/', function (req, res) {
    if (isthereatleastoneunhealthykidney()) {
        for (let i = 0; i < users[0].Kidneys.length; i++) {
            users[0].Kidneys[i].healthy = true;
        }
        res.json({});
    }
    else {
        res.status(411).json({ msg: "nothing to change" });
    }
})
app.delete('/', function (req, res) {
    if (isthereatleastoneunhealthykidney()) {
        const newKidneys = [];
        for (let i = 0; i < users[0].Kidneys.length; i++) {
            if (users[0].Kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].Kidneys = newKidneys;
        res.json({ msg: "done" });
    }
    else {
        res.status(411).json({ msg: "you have no bad kidney to diagonise" });
    }
})
function isthereatleastoneunhealthykidney() {
    let unhealthy = false;

    for (let i = 0; i < users[0].Kidneys.length; i++) {
        if (!users[0].Kidneys[i].healthy) {
            unhealthy = true;
        }
    }
    return unhealthy;
}

app.listen(3000);