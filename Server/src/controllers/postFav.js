const {Favorite, User} = require("./../../DB_connection")

const postFav = async(request, response) => {
    try {
        const {id, name, origin, status, image, species, gender} = request.body
        
        if(!id || !name || !origin || !status || !image || !species || !gender){
            return response.status(401).send("Incomplete data")
        }

        // Verificar que el usuario está autenticado (viene del middleware)
        if (!req.user) {
            return response.status(401).json({ error: 'Authentication required' })
        }

        // Crear o encontrar el favorito
        const [favorite] = await Favorite.findOrCreate({
            where: {id, name, origin, status, image, species, gender}
        })

        // Encontrar al usuario autenticado
        const user = await User.findByPk(req.user.id)
        if(!user) {
            return response.status(404).json({ error: 'User not found' })
        }

        // Asociar el favorito con el usuario (relación many-to-many)
        await user.addFavorite(favorite)

        // Obtener todos los favoritos del usuario
        const userFavorites = await user.getFavorites()
        
        return response.status(200).json(userFavorites)
        
    } catch (error) {
        return response.status(500).json({error: error.message})
    }
}

module.exports = postFav