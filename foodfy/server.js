const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const data = require('./data');

server.set("view engine", "njk");

server.use(express.static('public'));

nunjucks.configure('views',{ 
  autoescape: true,
  express: server,
  noCache: true

});

server.get("/", function(req, res){
  return res.render('index.njk', {data});
});

server.get("/sobre", function(req, res){
  return res.render('sobre.njk');
});

server.get("/receitas", function(req, res){
  return res.render('receitas.njk', {data});
});

server.get("/receitas/:id", function(req, res){
  const id = req.params.id;

  const recipe = data[id];
  if(!recipe){
    return res.status(404).render('not-found')
  }
  return res.render('receita.njk',{recipe})
})

server.use(function(req,res){
  return res.status(404).render('not-found')
}
  
)

server.listen(3333);