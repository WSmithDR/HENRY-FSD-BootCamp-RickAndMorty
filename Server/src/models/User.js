const {DataTypes} = require('sequelize')

module.exports = sequelize => {
    sequelize.define('User',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        email:{},
        password:{}
    },{timestamps:false})
}