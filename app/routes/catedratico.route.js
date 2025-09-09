module.exports = app => {
    const catedraticos = require('../controllers/catedratico.controller.js')

    var router = require('express').Router()

    router.post('/create/', catedraticos.create)

    router.get('/', catedraticos.findAll)

    router.get('/status', catedraticos.findAllStatus)

    router.get('/:id', catedraticos.findOne)

    router.put('/update/:id', catedraticos.update)

    router.delete('/delete/:id', catedraticos.delete)

    router.delete('/delete/', catedraticos.deleteAll)

    app.use('/api/catedraticos', router)
}
