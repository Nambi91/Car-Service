const User = require("../controllers/user.controller")
const auth = require("../middleware/auth");
const router = require("express").Router();

router.post("/", User.create);
router.get("/", [auth], User.getAll);
router.get("/profile/:id", [auth], User.userProfile);

module.exports = router;