require(`dotenv`).config()
const {Sequelize} = require(`sequelize`)
const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env
const FavoriteModel = require("./Models/Favorite")
const UserModel = require("./Models/User")



const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
{logging: false, native: false}
)

const test_db_connection = async () =>{
    try {
        await sequelize.authenticate()
        console.log("Db connection stablished")
    } catch (error) {
        console.error("Error", error)
    }
}

test_db_connection()


FavoriteModel(sequelize)
UserModel(sequelize)

const {User, Favorite} = sequelize.models
User.belongsToMany(Favorite, {through: 'user_favorite', timestamps: false})
Favorite.belongsToMany(User, {through: 'user_favorite', timestamps: false})

module.exports = {
    User,
    Favorite,
    conn: sequelize
}
