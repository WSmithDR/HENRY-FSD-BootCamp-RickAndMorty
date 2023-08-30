const http = require("http")
const data = require("./utils/data")

http.createServer((request, response)=>{
    response.setHeader("Access-Control-Allow-Origin","*")
    if(request.url.includes("/rickandmorty/character/")){
        const id = request.url.split("/").at(-1)
        const foundCharacter = data.find(char => char.id === +id)
        response.writeHead(200,{"Content-Type":"application/json"})
        .end(JSON.stringify(foundCharacter))
    }
}).listen(3001)