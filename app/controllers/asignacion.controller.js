const db = require('../models')
const Asignacion = db.asignaciones
const Op = db.Sequelize.Op

exports.create = (req, res) => {
    if (!req.body.estudianteId || !req.body.cursoId) {
        res.status(400).send({
            message: 'El contenido no puede estar vacio!',
        })
        return
    }

    const asignacion = {
        estudianteId: req.body.estudianteId,
        cursoId: req.body.cursoId,
    }

    Asignacion.create(asignacion)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrio un error al crear la Asignacion.',
            })
        })
}

exports.findAll = (req, res) => {
    const estudianteId = req.query.estudianteId
    var condition = estudianteId ? { estudianteId: { [Op.eq]: estudianteId } } : null

    Asignacion.findAll({ where: condition })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrio un error al recuperar las Asignaciones.',
            })
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id

    Asignacion.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data)
            } else {
                res.status(404).send({
                    message: `No se puede encontrar la Asignacion con id=${id}.`,
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrio un error al recuperar la Asignacion.',
            })
        })
}

exports.update = (req, res) => {
    const id = req.params.id

    Asignacion.update(req.body, {
        where: { id: id },
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Asignacion actualizada exitosamente.',
                })
            } else {
                res.send({
                    message: `No se pudo actualizar la Asignacion con id=${id}.`,
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error al actualizar la Asignacion con id=' + id,
            })
        })
}

exports.delete = (req, res) => {
    const id = req.params.id

    Asignacion.destroy({
        where: { id: id },
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: 'Asignacion eliminada exitosamente.',
                })
            } else {
                res.send({
                    message: `No se pudo eliminar la Asignacion con id=${id}.`,
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrio un error al eliminar la Asignacion.',
            })
        })
}

exports.deleteAll = (req, res) => {
    Asignacion.destroy({
        where: {},
        truncate: false,
    })
        .then(nums => {
            res.send({ message: `${nums} Asignaciones fueron eliminadas exitosamente!` })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrio un error al eliminar las Asignaciones.',
            })
        })
}

exports.findAllStatus = (req, res) => {
    Asignacion.findAll({ where: { status: true } })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrio un error al recuperar las Asignaciones activas.',
            })
        })
}
