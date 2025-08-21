const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

var corsOptions = {
    origin: 'http://localhost:8081',
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const db = require('./app/models')
db.sequelize.sync()

app.get('/', (req, res) => {
    res.json({ message: 'Sistema de Notas.' })
})

require('./app/routes/estudiante.route.js')(app)
require('./app/routes/catedratico.route.js')(app)
require('./app/routes/curso.route.js')(app)
require('./app/routes/grado.route.js')(app)
require('./app/routes/asignacion.route.js')(app)
const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}.`)
})
