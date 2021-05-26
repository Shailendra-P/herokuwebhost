const express = require("express");
const app = express();
const port = 8000;

app.get("/" , (req , res) => {
    res.write("<h1>welcome to my home Page</h1>");
    res.write("<h1>welcome to my home Page</h1>");
    res.send();
});
app.get("/about" , (req , res) => {
    res.send("welcome to my about Page");
});
app.get("/contact" , (req , res) => {
    res.send("welcome to my contact Page");
});
app.get("/temp" , (req , res) => {
    res.send([{
        id :01,
        Name : "Shailendra",
    },
    {
        id :01,
        Name : "Shailendra",
    },
]);
});

app.listen(port , () =>{
    console.log(`linsting port ${port}`);
});