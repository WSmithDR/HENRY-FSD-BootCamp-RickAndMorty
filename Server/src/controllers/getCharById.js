const axios = require("axios")
const getCharById = (response, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(character => response
        .writeHead(200,{"Content-Type":"Application/json"})
        .end(JSON.stringify(character)))
}

module.exports = {
    getCharById
}