const db = require('../models')
const Estudiante = db.estudiantes
const Op = db.Sequelize.Op

exports.create = (req, res) => {
    if (!req.body.nombre) {
        res.status(400).send({
            message: 'El contenido no puede estar vacio!',
        })
        return
    }

    const estudiante = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        carnet: req.body.carnet,
    }

    Estudiante.create(estudiante)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrio un error al crear el Estudiante.',
            })
        })
}

exports.findAll = (req, res) => {
    const nombre = req.query.nombre
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null

    Estudiante.findAll({ where: condition })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrio un error al recuperar los Estudiantes.',
            })
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id

    Estudiante.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data)
            } else {
                res.status(404).send({
                    message: `No se puede encontrar el Estudiante con id=${id}.`,
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error al recuperar el Estudiante con id=' + id,
            })
        })
}

exports.update = (req, res) => {
    const id = req.params.id

    Estudiante.update(req.body, {
        where: { id: id },
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'El Estudiante fue actualizado correctamente.',
                })
            } else {
                res.send({
                    message: `No se puede actualizar el Estudiante con id=${id}.`,
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error al actualizar el Estudiante con id=' + id,
            })
        })
}

exports.delete = (req, res) => {
    const id = req.params.id

    Estudiante.destroy({
        where: { id: id },
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'El Estudiante fue eliminado correctamente.',
                })
            } else {
                res.send({
                    message: `No se puede eliminar el Estudiante con id=${id}.`,
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error al eliminar el Estudiante con id=' + id,
            })
        })
}

exports.deleteAll = (req, res) => {
    Estudiante.destroy({
        where: {},
        truncate: false,
    })
        .then(nums => {
            res.send({ message: `${nums} Estudiantes fueron eliminados correctamente!` })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrio un error al eliminar los Estudiantes.',
            })
        })
}

exports.findAllStatus = (req, res) => {
    Estudiante.findAll({ where: { status: true } })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrio un error al recuperar los Estudiantes activos.',
            })
        })
}
