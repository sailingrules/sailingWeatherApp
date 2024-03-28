const app = require("express")();

const PORT = process.env.PORT || 80;

app.get("", (req,res) => {
    res.sendFile(Index.html);
});

app.listen(PORT, () => {
console.log('App up at port ${PORT}');
});
