const express = require ('express')
const nunjucks = require('nunjucks')
const server = express()

server.use(express.static('public'))
server.set('view engine','html')
nunjucks.configure('views', {
    express:server
})

server.get('/', function(request, response)
{
return response.render("home")
})
server.get('/aulas', function(request, response)
{
return response.render("aulas")
})
server.get('/cursos', function(request, response)
{
return response.render("cursos")
})














server.listen(5000, function()
{


})