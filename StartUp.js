var http = require('http');
var fs = require('fs');

const PORT = 5500;

fs.readFile('./index.html', function(error, html){
if (error)
    throw error;
http.createServer(function(request, response){
response.write(html);
response.end();
}).listen(PORT);

})

function writeFile(){
    response.write(fs.readFile('./displayImages', function(request, response){
        
    }))
}