const Auth = require("../controllers/auth.controller");
const router = require("express").Router();

router.post("/", Auth.login);

module.exports = router;
