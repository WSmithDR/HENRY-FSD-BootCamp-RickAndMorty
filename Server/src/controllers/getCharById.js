const URL = `https://rickandmortyapi.com/api/character`
const axios = require("axios")

const getCharById = (request, response) => {
    const {id} = request.params
    axios(`${URL}/${id}`)
    .then(response => response.data)
    .then(({id, name, status, species, gender, origin, image }) => {
        if(name){
            const character = {
                id,
                name,
                species,
                origin,
                image,
                gender,
                status
            }
            return response.status(200).json(character)
        }
        return response.status(404).send(`Not found`)
    })
    .catch(error => response.status(500).send(error.message))
}

module.exports = {
    getCharById
}