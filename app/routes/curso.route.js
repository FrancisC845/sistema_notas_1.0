module.exports = app => {
    const cursos = require('../controllers/curso.controller.js')

    var router = require('express').Router()

    router.post('/create/', cursos.create)

    router.get('/', cursos.findAll)

    router.get('/status', cursos.findAllStatus)

    router.get('/:id', cursos.findOne)

    router.put('/update/:id', cursos.update)

    router.delete('/delete/:id', cursos.delete)

    router.delete('/delete/', cursos.deleteAll)

    app.use('/api/cursos', router)
}
