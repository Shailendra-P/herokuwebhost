// 1 . HomePage
// 2. About Page
// 3.contact Page
// 4.temp Page

const express = require("express");
const app = express();
const port = 8000;

app.get("/" , (req , res) => {
    res.status(200).send("welcome to my home Page");
});
app.get("/about" , (req , res) => {
    res.status(200).send("welcome to my about Page");
});
app.get("/contact" , (req , res) => {
    res.status(200).send("welcome to my contact Page");
});
app.get("/temp" , (req , res) => {
    res.status(200).send("welcome to my temp Page");
});

app.listen(port , () =>{
    console.log(`linsting port 8000`);
});