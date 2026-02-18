require("dotenv").config()
const {Sequelize} = require("sequelize")
const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
{logging: false, native:false})


const test_db_connection = async () => {
    try {
        await sequelize.authenticate()
        console.log("DB connection stablished successfully!")
    } catch (error) {
        console.error("Error DB connection: ", error)
    }
}

test_db_connection()