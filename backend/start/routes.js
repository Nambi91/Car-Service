const cors = require("cors");
const bodyParser = require("body-parser");

const home = require("../routes/home.routes");
const auth = require("../routes/auth.routes");
const user = require("../routes/user.routes");
const car = require("../routes/car.routes");
const comment = require("../routes/comment.routes");

module.exports = (app) => {
    const corsOptions = { origin: "http://localhost:3000" };
    app.use(cors(corsOptions));

    app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
    app.use(bodyParser.json({ limit: "50mb" }));

    app.use("/", home);
    app.use("/login", auth);
    app.use("/users", user);
    app.use("/cars", car);
    app.use("/comments", comment);
}