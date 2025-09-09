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
            type: Sequelize.ENUM('I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'),
        },
        descripcion: {
            type: Sequelize.STRING,
        },
        creditos: {
            type: Sequelize.INTEGER,
        },
        anio: {
            type: Sequelize.INTEGER,
        },
        horoario: {
            type: Sequelize.STRING,
        },
        aula: {
            type: Sequelize.STRING,
        },
    })
    return Curso
}
