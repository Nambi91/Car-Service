const db = require("../models")

exports.create = async (req, res) => {
    let { name, registration, year, brand, model, series, car_class } = req.body

    if (!name) {
        return res.status(400).send({
            message: `Veuillez saisir le nom du voiture`,
        });
    }

    if (!registration) {
        return res.status(400).send({
            message: `Veuillez saisir le numéro d'immatriculation du voiture`,
        });
    }

    if (!year) {
        return res.status(400).send({
            message: `Veuillez saisir l'année de sortie du voiture`,
        });
    }

    if (!brand) {
        return res.status(400).send({
            message: `Veuillez saisir la marque du voiture`,
        });
    }

    const data = {
        name: name.trim(),
        registration: registration.trim(),
        year: year.trim(),
        brand: brand.trim(),
        model: model.trim(),
        series: series.trim(),
        car_class: car_class.trim(),
    }

    const car = await db.cars.create(data);

    if (car) {
        return res.status(201).send(car);
    }
}

exports.getAll = async (req, res) => {
    try {
        const data = await db.cars.findAll();

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

        const car = await db.cars.findByPk(id);

        if (!car) {
            return res.status(404).send({
                status: "Not Found",
                message: `Impossible de trouver une voiture avec l'id ${id}`,
            });
        }

        return res.status(200).send(car);

    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: error.message });
    }
}

exports.update = async (req, res) => {
    try {
        const id = req.params.id

        let { name, registration, year, brand, model, series, car_class } = req.body

        if (!name) {
            return res.status(400).send({
                message: `Veuillez saisir le nom du voiture`,
            });
        }

        if (!registration) {
            return res.status(400).send({
                message: `Veuillez saisir le numéro d'immatriculation du voiture`,
            });
        }

        if (!year) {
            return res.status(400).send({
                message: `Veuillez saisir l'année de sortie du voiture`,
            });
        }

        if (!brand) {
            return res.status(400).send({
                message: `Veuillez saisir la marque du voiture`,
            });
        }

        const car = await db.cars.findByPk(id);

        if (car) {
            const data = {
                name: name.trim(),
                registration: registration.trim(),
                year: year.trim(),
                brand: brand.trim(),
                model: model.trim(),
                series: series.trim(),
                car_class: car_class.trim(),
            }

            await car.update(data)

            return res.status(201).send({
                status: 201,
                message: "Voiture mis à jour avec succès.",
                data: await db.cars.findByPk(id),
            });

        } else {
            return res.status(404).send({
                status: "Not Found",
                message: `Impossible de trouver une voiture avec l'id ${id}`,
            });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: error.message });
    }
}

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;

        const car = await db.cars.findByPk(id);

        if (car) {
            await car.destroy();
            return res.status(201).send({
                status: "success",
                message: "La voiture a été supprimé avec succès.",
            });
        } else {
            return res.status(404).send({
                status: "Not Found",
                message: `Impossible de trouver une voiture avec l'id ${id}`,
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: error.message });
    }
}