module.exports = (sequelize, Sequelize) => {
    const Grado = sequelize.define('grado', {
        estudianteId: {
            type: Sequelize.INTEGER,
        },
        cursoId: {
            type: Sequelize.INTEGER,
        },
        nota: {
            type: Sequelize.FLOAT,
        },
        tipoEvaluacion: {
            type: Sequelize.ENUM('parcial', 'final', 'extraordinario'),
        },
        fecha: {
            type: Sequelize.DATE,
        },
        observaciones: {
            type: Sequelize.STRING,
        },
    })
    return Grado
}
