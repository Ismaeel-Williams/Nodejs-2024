const express = require("express");
const app = express();

function calculateSum(n){
    let ans = 0;
    for(let i =1; i<=n; i++){
        ans = ans + i;
    }
    return ans;
}

let ans = calculateSum(10);
console.log(ans);

app.get("/", (req, res)=>{
    const n = req.query.n;
    const ans = calculateSum(n);

    res.send('Hello, your answer is', ans);
})

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
})


