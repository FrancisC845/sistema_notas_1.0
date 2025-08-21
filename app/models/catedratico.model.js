module.exports = (sequelize, Sequelize) => {
    const Catedratico = sequelize.define('catedratico', {
        nombre: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
        },
        especialidad: {
            type: Sequelize.STRING,
        },
    })

    return Catedratico
}
