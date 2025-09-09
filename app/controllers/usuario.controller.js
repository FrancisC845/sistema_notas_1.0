const db = require('../models')
const Usuario = db.usuarios
const crypto = require('crypto')

exports.login = (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        res.status(400).send({ message: 'Username y password son requeridos!' })
        return
    }

    // Hashear la contraseña recibida con SHA-256
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex')

    Usuario.findOne({
        where: {
            username: username,
            password: hashedPassword,
        },
    })
        .then(usuario => {
            if (!usuario) {
                res.status(401).send({ message: 'Credenciales inválidas' })
                return
            }
            res.status(200).send({
                id: usuario.id,
                username: usuario.username,
                rol: usuario.rol,
            })
        })
        .catch(err => {
            res.status(500).send({ message: err.message || 'Error al autenticar el usuario.' })
        })
}
