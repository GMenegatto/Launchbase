const express = require('express');
const nunjucks = require('nunjucks');

const videos = require("./data");
const cursos = require("./cursos");

const server = express();

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    noCache: true
})

server.get("/", function(req, res){

    const data = {
        avatarUrl: "https://avatars1.githubusercontent.com/u/48417528?s=460&u=28e1c7a4892d6f194dd961f38adaa277a9d62835&v=4",
        username: "Gabriel Menegatto",
        subName: "Web developer",
        userDesc: "Estudante de programação rumo ao desenvolvimento Full Stack",
        link: [
        {name: 'Github', url: "https://github.com/GMenegatto/"},
        {name:"Linkedin", url: "https://www.linkedin.com/in/gmenegatto/"}
        ]
    }


    return res.render("about", {data});
    
});

server.get("/cursos", function(req, res){
    return res.render("cursos", {cursos});
});

server.get("/aulas", function(req, res){
    return res.render("aulas", { items: videos });
});

server.get("/video", function(req, res){
    const id = req.query.id;

    const video = videos.find(function(video){
        if (video.id == id){
            return true;
        }
    })

    if(!video){
        res.send("Video not found!")
    }

    return res.render("video", { item: video });
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5000, function(){
    console.log('server is running');
});