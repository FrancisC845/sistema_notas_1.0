module.exports = (sequelize, Sequelize) => {
    const Curso = sequelize.define('curso', {
        nombre: {
            type: Sequelize.STRING,
        },
        codigo: {
            type: Sequelize.STRING,
            unique: true,
        },
        semestre: {
            type: Sequelize.INTEGER,
        },
    })
    return Curso
}
