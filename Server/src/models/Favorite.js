const {DataTypes} = require("sequelize")

module.exports = sequelize => {
    sequelize.define('Favorite', {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name:{},
        status:{},
        species:{},
        gender:{},
        origin:{},
        image:{}
    },{timestamps:false})
}