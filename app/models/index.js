const dbConfig = require('../config/db.config.js')

const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,

        ssl: {
            rejectUnauthorized: false,
        },
    },
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.estudiantes = require('./estudiante.model.js')(sequelize, Sequelize)
db.catedraticos = require('./catedratico.model.js')(sequelize, Sequelize)
db.cursos = require('./curso.model.js')(sequelize, Sequelize)
db.grados = require('./grado.model.js')(sequelize, Sequelize)
db.asignaciones = require('./asignacion.model.js')(sequelize, Sequelize)

// un catedrático puede tener muchos cursos
db.catedraticos.hasMany(db.grados, { foreignKey: 'catedraticoId' })
db.cursos.belongsTo(db.catedraticos, { foreignKey: 'catedraticoId' })

// Una asignación pertenece a un estudiante y a un curso
db.asignaciones.belongsTo(db.estudiantes, { foreignKey: 'estudianteId' })
db.asignaciones.belongsTo(db.cursos, { foreignKey: 'cursoId' })

// Un estudiante tiene muchas asignaciones
db.estudiantes.hasMany(db.asignaciones, { foreignKey: 'estudianteId' })
// Un curso tiene muchas asignaciones
db.cursos.hasMany(db.asignaciones, { foreignKey: 'cursoId' })

// Un curso tiene muchas notas (grado)
db.cursos.hasMany(db.grados, { foreignKey: 'cursoId' })
db.grados.belongsTo(db.cursos, { foreignKey: 'cursoId' })

module.exports = db
