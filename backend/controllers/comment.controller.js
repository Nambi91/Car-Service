const db = require("../models")

exports.create = async (req, res) => {
    try {
        const user = req.user
        let { carId, comments } = req.body

        if (!carId) return res.status(400).send({
            message: "Renseigner la voiture"
        })

        if (!comments) return res.status(400).send({
            message: "Votre commentaire SVP."
        })

        const data = {
            carId,
            userId: user.id,
            comments: comments.trim()
        }

        const comment = await db.comments.create(data)

        if (comment) return res.status(201).send(comment)
    } catch (error) {
        console.log(error);
    }
}

exports.getAll = async (req, res) => {
    try {
        const data = await db.comments.findAll();

        if (data) {
            return res.status(200).send(data);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: error.message });
    }
}

exports.getOne = async (req, res) => {
    try {
        const id = req.params.id;

        const comment = await db.comments.findByPk(id);

        if (!comment) {
            return res.status(404).send({
                status: "Not Found",
                message: `Impossible de trouver une commentaire avec l'id ${id}`,
            });
        }

        return res.status(200).send(comment);

    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: error.message });
    }
}