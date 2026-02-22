const {DataTypes} = require("sequelize")
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
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            set(value) {
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(value, salt)
                this.setDataValue('password', hash)
            }
        }
    }, {
        timestamps: false,
        hooks: {
            beforeCreate: (user) => {
                if (user.password) {
                    const salt = bcrypt.genSaltSync(10)
                    user.password = bcrypt.hashSync(user.password, salt)
                }
            },
            beforeUpdate: (user) => {
                if (user.changed('password')) {
                    const salt = bcrypt.genSaltSync(10)
                    user.password = bcrypt.hashSync(user.password, salt)
                }
            }
        }
    })
}