const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send({
        Message: "Welcome to car service API...",
    });
});

module.exports = router;