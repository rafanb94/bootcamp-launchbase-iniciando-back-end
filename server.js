const express = require ('express')
const nunjucks = require('nunjucks')
const server = express()

server.set('view engine','html')
nunjucks.configure('views', {
    express:server
})

server.get('/', function(request, response){
return response.send('Hi')

})
server.listen(5000, function()
{


})