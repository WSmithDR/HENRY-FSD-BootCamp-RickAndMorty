const { config } = require("dotenv")
const { Sequelize } = require("sequelize")
const FavoriteModel = require("../models/Favorite")
const UserModel = require("../models/User")
config()

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env



const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    { logging: false, native: false }
)

const test_db_connection = async () => {
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

//Puse un script para probar la conexion



