require(`dotenv`).config()
const {Sequelize} = require(`sequelize`)
const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env



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


