const {Favorite} = require("./../../DB_connection")

const deleteFav = async (request, response) => {
    try {
        const {id} = request.params
        const favCharDelete = await Favorite.findByPk(id)
        await favCharDelete.destroy()

        const allFavorites = await Favorite.findAll()
        return response.status(200).json(allFavorites)
    } catch (error) {
        return response.status(500).json({error: error.message})
    }
}

module.exports = deleteFav