const { DataTypes } = require("sequelize")
const bcrypt = require('bcryptjs')

module.exports = sequelize => {
    sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true,
            unique: true
        }
    }, {
        timestamps: false
        // Eliminados los hooks para evitar doble hasheo
    })
}