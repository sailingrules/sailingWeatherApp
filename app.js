// const app = require("express")();

// const PORT = process.env.PORT || 80;

// app.get("", (req,res) => {
//     res.send("Hello World");
//  });
// app.listen(PORT, () => {
// console.log('App up at port ${PORT}');
// });
const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.use(express.static('sailingWeatherApp'));


app.get('/',(req,res) => {
    res.sendFile((__dirname + '/Home.html'));
});
app.listen(PORT, () => {
console.log('App up at port ${PORT}');
 });
