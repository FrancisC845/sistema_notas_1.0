module.exports = app => {
    const asignaciones = require('../controllers/asignacion.controller.js')

    var router = require('express').Router()

    router.post('/create/', asignaciones.create)

    router.get('/', asignaciones.findAll)

    router.get('/status', asignaciones.findAllStatus)

    router.get('/:id', asignaciones.findOne)

    router.put('/update/:id', asignaciones.update)

    router.delete('/delete/:id', asignaciones.delete)

    router.delete('/delete/', asignaciones.deleteAll)

    app.use('/api/asignaciones', router)
}
