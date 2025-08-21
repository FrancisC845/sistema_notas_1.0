module.exports = (sequelize, Sequelize) => {
    const Grado = sequelize.define('grado', {
        nota: {
            type: Sequelize.FLOAT,
        },
        tipoEvaluacion: {
            type: Sequelize.ENUM('parcial', 'final', 'extraordinario'),
        },
    })
    return Grado
}
