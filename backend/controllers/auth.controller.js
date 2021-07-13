const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const secret = process.env.SECRET_KEY || config.jwtAuth;

// Login
exports.login = async (req, res) => {
  try {
    const username = req.body.username.toLowerCase();

    if (!username) {
      return res.status(401).send({
        message: "Veuillez saisir le nom de utilisateur",
      });
    }

    if (!req.body.password) {
      return res.status(401).send({
        message: "Veuillez saisir le mot de passe de utilisateur",
      });
    }

    const user = await db.users.findOne({
      where: {
        username: username,
      },
    });

    if (!user) {
      return res.status(404).send({
        message:
          "Ce nom d'utilisateur n'est pas reconnue par un de notre base.",
      });
    } else if (!validatePassword(user, req.body.password)) {
      return res.status(401).send({
        message: `Mot de passe pour l'utilisateur ${username} invalide.`,
      });
    }

    const data = {
      id: user.dataValues.id,
      first_name: user.dataValues.first_name,
      last_name: user.dataValues.last_name,
      username: user.dataValues.username,
      token: "x-auth-token",
    };

    const token = jwt.sign(data, secret, {
      expiresIn: 28000,
    });

    res.json({
      status: 200,
      token: token,
      message: "Bienvenue " + username,
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

// Validation password
validatePassword = (user, password) => {
  return bcrypt.compareSync(password, user.password);
};
