const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Estudar", "Estudar como Estudar", "Study"];
let workItems = [];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.set("view engine", "ejs");

app.get("/", function(req, res) {

  let hoje = new Date();

  let opcoes = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  let dia = hoje.toLocaleDateString("en-us", opcoes);

  res.render("list", {
    pageTitle: dia,
    novaLista:items
  });

});

app.post("/", function(req, res){
  let item = req.body.novoItem;


  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }


});

app.get("/work", function(req, res){

  res.render("list", {
    pageTitle:"Work List",
    novaLista: workItems
  })
})

app.listen(3000, function() {
  console.log("Server Iniciou na Porta 3000");
});
