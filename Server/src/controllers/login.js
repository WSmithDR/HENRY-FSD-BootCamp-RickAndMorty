const User = require("./../DB_connection")

const login = async (request, response) => {
    try {
        const {email, password} = request.query
        if(!email || !password) return response.status(400).send("No data enough!")
        const user = await User.findOne({
            where:{
                email
            }
        })
        if(password !== user.password) return response.status(403).send("Incorrect password")
        return response.status(200).json({access: true})
    } catch (error) {
        return response.status(500).json({error: error.message})
    }   
}

module.exports = login