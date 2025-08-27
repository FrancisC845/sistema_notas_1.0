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
        telefono: {
            type: Sequelize.INTEGER,
            unique: true,
        },
        tituloAcademico: {
            type: Sequelize.STRING,
        },
        fechaContratacion: {
            type: Sequelize.DATE,
        },
        estado: {
            type: Sequelize.ENUM('contratado', 'jubilado', 'suspendido'),
        },
    })

    return Catedratico
}
