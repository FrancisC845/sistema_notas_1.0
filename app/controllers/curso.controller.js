const db = require('../models')
const Curso = db.cursos
const Op = db.Sequelize.Op

exports.create = (req, res) => {
    if (!req.body.nombre || !req.body.codigo || !req.body.semestre) {
        res.status(400).send({
            message: 'El contenido no puede estar vacio!',
        })
        return
    }

    const curso = {
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        semestre: req.body.semestre,
        descripcion: req.body.descripcion,
        creditos: req.body.creditos,
        anio: req.body.anio,
        horario: req.body.horario,
        aula: req.body.aula,
    }

    Curso.create(curso)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrio un error al crear el Curso.',
            })
        })
}

exports.findAll = (req, res) => {
    const nombre = req.query.nombre
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null

    Curso.findAll({ where: condition })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrio un error al recuperar los Cursos.',
            })
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id

    Curso.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data)
            } else {
                res.status(404).send({
                    message: `No se puede encontrar el Curso con id=${id}.`,
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrio un error al recuperar el Curso.',
            })
        })
}

exports.update = (req, res) => {
    const id = req.params.id

    if (!req.body.nombre && !req.body.codigo && !req.body.semestre) {
        res.status(400).send({
            message: 'El contenido no puede estar vacio!',
        })
        return
    }

    Curso.update(req.body, {
        where: { id: id },
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Curso actualizado exitosamente.',
                })
            } else {
                res.send({
                    message: `No se puede actualizar el Curso con id=${id}. Puede que el Curso no exista o los datos enviados sean incorrectos.`,
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrio un error al actualizar el Curso.',
            })
        })
}

exports.delete = (req, res) => {
    const id = req.params.id

    Curso.destroy({
        where: { id: id },
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Curso eliminado exitosamente.',
                })
            } else {
                res.send({
                    message: `No se puede eliminar el Curso con id=${id}. .`,
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrio un error al eliminar el Curso.',
            })
        })
}

exports.deleteAll = (req, res) => {
    Curso.destroy({
        where: {},
        truncate: false,
    })
        .then(nums => {
            res.send({ message: `${nums} Cursos fueron eliminados correctamente!` })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrio un error al eliminar los Cursos.',
            })
        })
}

exports.findAllStatus = (req, res) => {
    Curso.findAll({ where: { estado: true } })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Ocurrio un error al recuperar los Cursos activos.',
            })
        })
}
