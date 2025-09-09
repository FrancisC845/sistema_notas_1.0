const db = require('../models')
const Grado = db.grados
const Op = db.Sequelize.Op

exports.create = (req, res) => {
    if (!req.body.cursoId || !req.body.nota || !req.body.tipoEvaluacion) {
        res.status(400).send({
            message: 'cursoId, nota y tipoEvaluacion son requeridos!',
        })
        return
    }

    const grado = {
        cursoId: req.body.cursoId,
        nota: req.body.nota,
        tipoEvaluacion: req.body.tipoEvaluacion,
    }

    Grado.create(grado)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrió un error al crear el Grado.',
            })
        })
}

exports.findAll = (req, res) => {
    const tipoEvaluacion = req.query.tipoEvaluacion
    var condition = tipoEvaluacion ? { tipoEvaluacion: { [Op.iLike]: `%${tipoEvaluacion}%` } } : null

    Grado.findAll({ where: condition })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrió un error al recuperar los Grados.',
            })
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id

    Grado.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data)
            } else {
                res.status(404).send({
                    message: `No se puede encontrar el Grado con id=${id}.`,
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrió un error al recuperar el Grado.',
            })
        })
}

exports.update = (req, res) => {
    const id = req.params.id

    Grado.update(req.body, {
        where: { id: id },
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Grado actualizado exitosamente.',
                })
            } else {
                res.send({
                    message: `No se puede actualizar el Grado con id=${id}. Puede que no exista o los datos no hayan cambiado.`,
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrió un error al actualizar el Grado.',
            })
        })
}

exports.delete = (req, res) => {
    const id = req.params.id

    Grado.destroy({
        where: { id: id },
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: 'Grado eliminado exitosamente.',
                })
            } else {
                res.send({
                    message: `No se pudo eliminar el Grado con id=${id}. Puede que no exista.`,
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrió un error al eliminar el Grado.',
            })
        })
}

exports.deleteAll = (req, res) => {
    Grado.destroy({
        where: {},
        truncate: false,
    })
        .then(nums => {
            res.send({ message: `${nums} Grados fueron eliminados exitosamente.` })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrió un error al eliminar los Grados.',
            })
        })
}

exports.findAllStatus = (req, res) => {
    Grado.findAll({ where: { estatus: true } })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrió un error al recuperar los Grados activos.',
            })
        })
}
