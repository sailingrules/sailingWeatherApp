const app = require("express")();
const path = require('path'):
const PORT = process.env.PORT || 80;

app.get("", (req,res) => {
    res.send("Hello Everyone");
 });
app.get('/', async(req,res) => { res.sendFile(path.join(_ _dirname,'sailingweatherapp', 'index.html'));
app.listen(PORT, () => {
console.log('App up at port ${PORT}');
});
