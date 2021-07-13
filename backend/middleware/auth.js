const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).send({
      status: 401,
      success: false,
      result: "Accès refusé. Aucun token fourni.",
    });
  }

  try {
    const decoded = jwt.verify(token, config.jwtAuth);
    req.user = decoded;
    global.currentUserId = req.user.id;
    next();
  } catch (e) {
    console.log(e);
    res.status(401).send({
      status: 401,
      success: false,
      result: "Accès refusé.Token expiré",
    });
  }
};
