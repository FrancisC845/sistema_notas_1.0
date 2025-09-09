module.exports = app => {
    const grados = require('../controllers/grado.controller.js')

    var router = require('express').Router()

    router.post('/create/', grados.create)

    router.get('/', grados.findAll)

    router.get('/status', grados.findAllStatus)

    router.get('/:id', grados.findOne)

    router.put('/update/:id', grados.update)

    router.delete('/delete/:id', grados.delete)

    router.delete('/delete/', grados.deleteAll)

    app.use('/api/grados', router)
}
