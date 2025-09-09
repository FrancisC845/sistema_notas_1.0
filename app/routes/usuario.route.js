module.exports = app => {
    const usuarios = require('../controllers/usuario.controller.js')
    const router = require('express').Router()

    router.post('/login', usuarios.login)

    app.use('/api/usuarios', router)
}
