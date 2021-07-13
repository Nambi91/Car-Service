const db = require("../models")
const bcrypt = require("bcrypt");

exports.create = async (req, res) => {
    try {
        let { first_name, last_name, username, password } = req.body

        if (!username) {
            return res.status(400).send({
                message: "veuillez saisir le nom d'utilisateur !",
            });
        }

        const data = {
            first_name: first_name.trim(),
            last_name: last_name.trim(),
            username: username.trim(),
            password: bcrypt.hashSync(password, 10),
        }

        const user = await db.users.create(data);

        if (user) {
            return res.status(201).send(user);
        }

    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: error.message });
    }
}

exports.getAll = async (req, res) => {
    try {
        const data = await db.users.findAll({
            order: ["username"],
            attributes: ["id", "first_name", "last_name", "username"],
        });

        if (!data) {
            return res.status(404).send({
                status: "Not Found",
                message: "Empty",
            });
        }

        return res.status(200).send(data);

    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

exports.userProfile = async (req, res) => {
    try {
        const id = req.params.id;

        const user = await db.users.findOne({
            attributes: ["id", "first_name", "last_name", "username"],
            where: { id },
        });

        return res.status(200).json(user);

    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}