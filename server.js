const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const videos = require("./data");

server.use(express.static("public"));
server.set("view engine", "njk");
nunjucks.configure("views", {
    express: server
});

server.get("/", function (request, response) {
    const home = {
        avatar_url:"https://scontent.fcgh10-1.fna.fbcdn.net/v/t1.0-1/p160x160/59407476_2184049961702192_6987893004405047296_o.jpg?_nc_cat=108&_nc_ohc=HpQMBOJ28c4AX9BEA-V&_nc_ht=scontent.fcgh10-1.fna&_nc_tp=6&oh=98f9a763de8e57793a88656b05d533f2&oe=5EC7944C",
        description:'Portófilo Profissional | Rafael Brunner',
        formation:"Formação em Análise e Desenvolvimento de Sistemas",
        role:"Consultor SEO por SEO Unlocked",
        links: [
            {name: "Github", url:'https://github.com/rafanb94'},
            {name: "Linkedin", url:'https://www.linkedin.com/in/rafael-nociolino-brunner-9b2102169/'}
        ]
    }
    return response.render("home", {home});
});
server.get("/aulas", function (request, response) {
    return response.render("aulas",{items: videos});
});
server.get("/cursos", function (request, response) {
    return response.render("cursos");
});

server.listen(5000, function () { });
