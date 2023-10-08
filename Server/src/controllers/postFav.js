const {Favorite} = require("./../DB_connection")

const postFav = async (request, response) => {
    try {
        const {id, name, status, species, gender, origin, image} = request.body
        if(!id || !name || !status || !species || !gender || !origin || !image){
            return response.stataus(401).send("At least one prop of the character is missing or null!")
        }
        
        await Favorite.findOrCreate({
            where: {
                id, 
                name, 
                status, 
                species, 
                gender, 
                origin, 
                image
            }
        })

        const allFavorites = await Favorite.findAll()
        return response.status(200).json(allFavorites)
    } catch (error) {
        return response.status(500).json({error: error.message})
    }    
}

module.exports = postFav