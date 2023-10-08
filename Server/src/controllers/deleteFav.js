const {Favorite} = require("./../DB_connection")

const deleteFav = async (request, response) => {
    try {
        const {id} = request.params
        const deleteFav = await Favorite.findByPk(id)
        deleteFav.destroy()

        const allFavorites = await Favorite.findAll()
        
        return response.status(200).json(allFavorites) 
    } catch (error) {
        return response.status(500).json({error: error.message})
    }
}

module.exports = deleteFav