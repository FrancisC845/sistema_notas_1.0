const { Sequelize } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('usuario', {
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        rol: {
            type: Sequelize.ENUM('admin', 'user'),
            allowNull: false,
            defaultValue: 'user',
        },
    })
    return Usuario
}
