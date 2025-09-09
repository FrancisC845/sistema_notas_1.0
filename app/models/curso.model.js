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
        descripcion: {
            type: Sequelize.STRING,
        },
        creditos: {
            type: Sequelize.INTEGER,
        },
        semetre: {
            type: Sequelize.ENUM('I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'),
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
