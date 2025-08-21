module.exports = (sequelize, Sequelize) => {
    const Estudiante = sequelize.define('estudiante', {
        nombre: {
            type: Sequelize.STRING,
        },
        apellido: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
        },
        carnet: {
            type: Sequelize.STRING,
            unique: true,
        },
    })

    return Estudiante
}
