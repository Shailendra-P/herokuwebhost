const path = require ("path");
const express = require ("express");
const app = express();
const hbs = require ("hbs");
const port = 8000;

//build in middleware
const staticPath = path.join(__dirname , "../public");
const templatePath = path.join(__dirname , "../templates/views");
const partialsPath = path.join(__dirname , "../templates/partials");

//to set the view engine
app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

//template engine route
app.get("",(req,res) =>{
    res.render('index');
});
app.get("/about" , (req,res) =>{
    res.render("about");
});

app.get("*" , (req,res) => {
    res.render("404" , {
        errorcomment: "oppspage not found",
    });
});

app.listen(port , () => {
    console.log(`listening  port  ${port}`);
});