const app = require("express")();

const PORT = process.env.PORT || 8000;

app.get("", (req,res) => {
    res.send("Hello world");
});

app.listen(PORT, () => {
console.log('App up at port ${PORT}');
});
