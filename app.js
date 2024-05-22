// const app = require("express")();

// const PORT = process.env.PORT || 80;

// app.get("", (req,res) => {
//     res.send("Hello World");
//  });
// app.listen(PORT, () => {
// console.log('App up at port ${PORT}');
// });
const express = require('express')();
const path = require('path');
const app = express();
const port = process.env.PORT || 80;

app.use(express.json());


app.use('/', function(req,res){
    res.sendFile(path.join(__dirname,'/Home.html'));
});
app.listen(PORT, () => {
console.log('App up at port ${PORT}');
 });
