const path = require("path");
const express = require("express");
const app = express();

//console.log(__dirname);


//console.log(path.join(__dirname , "../public"));
const staticPath = path.join(__dirname , "../public");
// MIDDLEWARE
app.use(express.static(staticPath));
// app.get(route,callback)
// api , get - read , post - create , put - update , delete - delete
// callback fun have 2 parameter  = req,res

app.get("/",(req,res) => {
    res.send("hello from the express");
});

app.get("/about",(req,res) => {
    res.send("hello from the aboutPage");
});

app.listen(8000 , () => {
console.log("listing port 8000");
});
