const auth = require("../middleware/auth");
const Car = require("../controllers/car.controller")
const router = require("express").Router();

router.post("/", [auth], Car.create);
router.get("/", Car.getAll);
router.get("/:id", [auth], Car.getOne);
router.put("/:id", [auth], Car.update);
router.delete("/:id", [auth], Car.delete);

module.exports = router;