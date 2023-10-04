const {DataTypes} = require('sequelize')

module.exports = sequelize => {
    sequelize.define('User',{
        id:{},
        email:{},
        password:{}
    },{timestamps:false})
}