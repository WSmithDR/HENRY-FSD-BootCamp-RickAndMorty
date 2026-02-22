require('dotenv').config()
const {User} = require("./../../DB_connection")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = process.env

const login = async (request, response) => {
    try {
        const {email, password} = request.body  // Cambiado de query a body
        if(!email || !password) return response.status(400).send("Incomplete data")

        const user = await User.findOne({
            where: { email }
        })

        if(!user) return response.status(404).send("User not found!")

        // Verificar password hasheado
        const isValidPassword = bcrypt.compareSync(password, user.password)
        if(!isValidPassword) return response.status(403).send("Incorrect password!")

        // Generar token JWT
        const token = jwt.sign(
            { 
                id: user.id, 
                email: user.email 
            },
            JWT_SECRET,
            { expiresIn: '1h' }
        )

        return response.status(200).json({
            access: true,
            token: token,
            user: {
                id: user.id,
                email: user.email
            }
        })

    } catch (error) {
        return response.status(500).json({error: error.message})
    }
}

module.exports = login