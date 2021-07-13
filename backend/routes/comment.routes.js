const auth = require("../middleware/auth");
const Comment = require("../controllers/comment.controller")
const router = require("express").Router();

router.post("/", [auth], Comment.create);
router.get("/", [auth], Comment.getAll);
router.get("/:id", [auth], Comment.getOne);

module.exports = router;