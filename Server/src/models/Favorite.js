const {DataTypes} = require("sequelize")

module.exports = sequelize => {
    sequelize.define('Favorite', {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        status:{
            type: DataTypes.ENUM("Alive", "Dead", "unknown"),
            allowNull: false
        },
        species:{
            type: DataTypes.STRING,
            allowNull: false
        },
        gender:{
            type: DataTypes.ENUM("Male", "Female", "Genderless", "unknown"),
            allowNull: false
        },
        origin:{},
        image:{}
    },{timestamps:false})
}