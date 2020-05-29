var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var items = [];

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

app.get("/", function(req, res) {

  var hoje = new Date();

  var opcoes = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  var dia = hoje.toLocaleDateString("en-us", opcoes);


  res.render("list", {
    diaHoje: dia,
    novaLista:items
  });

});

app.post("/", function(req, res){
  var item = req.body.novoItem;
  items.push(item);

  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server Iniciou na Porta 3000");
});
