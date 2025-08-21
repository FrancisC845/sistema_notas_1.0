module.exports = (sequelize, Sequelize) => {
    const Asignacion = sequelize.define(
        'asignacion',
        {
            estudianteId: {
                type: Sequelize.INTEGER,
            },
            cursoId: {
                type: Sequelize.INTEGER,
            },
        },
        {
            tableName: 'asignaciones',
        },
    )
    return Asignacion
}
