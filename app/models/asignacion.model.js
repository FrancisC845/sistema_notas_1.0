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
            fechaAsignacion: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            estado: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
        },
        {
            tableName: 'asignaciones',
        },
    )
    return Asignacion
}
