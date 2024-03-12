const {Favorite} = require("./../../DB_connection")

const postFav = async(request, response) => {
    try {
        const {id, name, origin, status, image, species, gender} = request.body
        if(!id || !name || !origin || !status || !image || !species || !gender){
            return response.status(401).send("Incomplete data")
        }

        await Favorite.findOrCreate({
            where: {
                id, name, origin, status, image, species, gender
            }
        })

        const allFavorites = await Favorite.findAll()
        return response.status(200).json(allFavorites)
    } catch (error) {
        return response.status(500).json({error: error.message})
        
    }
}

module.exports = postFav