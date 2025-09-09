const db = require('../models')
const Catedratico = db.catedraticos
const Op = db.Sequelize.Op

exports.create = (req, res) => {
    if (!req.body.nombre) {
        res.status(400).send({
            message: 'El contenido no puede estar vacio!',
        })
        return
    }

    const catedratico = {
        nombre: req.body.nombre,
        email: req.body.email,
        especialidad: req.body.especialidad,
        telefono: req.body.telefono,
        tituloAcademico: req.body.tituloAcademico,
        fechaContratacion: req.body.fechaContratacion,
        estado: req.body.estado,
    }

    Catedratico.create(catedratico)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrio un error al crear el Catedratico.',
            })
        })
}

exports.findAll = (req, res) => {
    const nombre = req.query.nombre
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null

    Catedratico.findAll({ where: condition })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrio un error al recuperar los Catedraticos.',
            })
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id

    Catedratico.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data)
            } else {
                res.status(404).send({
                    message: `No se puede encontrar el Catedratico con id=${id}.`,
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrio un error al recuperar el Catedratico.',
            })
        })
}

exports.update = (req, res) => {
    const id = req.params.id

    Catedratico.update(req.body, {
        where: { id: id },
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Catedratico actualizado exitosamente.',
                })
            } else {
                res.send({
                    message: `No se puede actualizar el Catedratico con id=${id}`,
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error al actualizar el Catedratico con id=' + id,
            })
        })
}

exports.delete = (req, res) => {
    const id = req.params.id

    Catedratico.destroy({
        where: { id: id },
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Catedratico eliminado exitosamente.',
                })
            } else {
                res.send({
                    message: `No se puede eliminar el Catedratico con id=${id}.`,
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error al eliminar el Catedratico con id=' + id,
            })
        })
}

exports.deleteAll = (req, res) => {
    Catedratico.destroy({
        where: {},
        truncate: false,
    })
        .then(nums => {
            res.send({ message: `${nums} Catedraticos fueron eliminados exitosamente!` })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrio un error al eliminar los Catedraticos.',
            })
        })
}

exports.findAllStatus = (req, res) => {
    Catedratico.findAll({ where: { status: true } })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrio un error al recuperar los Catedraticos activos.',
            })
        })
}
