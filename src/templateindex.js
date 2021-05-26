const path = require ("path");
const express = require ("express");
const app = express();
const port = 8000;

//build in middleware
const staticPath = path.join(__dirname , "../public");
const templatePath = path.join(__dirname , "../templates");

//to set the view engine
app.set("view engine","hbs");
app.set("views",templatePath);

app.use(express.static(staticPath));

//template engine route
app.get("",(req,res) =>{
    res.render('index');
});
app.get("/about" , (req,res) =>{
    res.render("about");
});

app.get("/" , (req,res) => {
    res.send("Welcome To HomePage");
});

app.listen(port , () => {
    console.log(`listening  port  ${port}`);
});