require("dotenv").config()
const {Sequelize} = require("sequelize")
const {DB_USER, DB_PASSWORD, DB_HOST} = process.env
const {FavoriteModel} = require("./../src/models/Favorite")
const {UserModel} = require("./../src/models/User")


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}`,
{logging: false, native:false})

FavoriteModel(sequelize)

UserModel(sequelize)

