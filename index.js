const express = require('express');

const app = express();

const port  = 5000;

app.get('/',(req,res)=>{
    res.send("this my sample")
})

app.listen(port,()=>{
    console.log(`server is listening on port 5000 Visit http://localhost:5000`);
});