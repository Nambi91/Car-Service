module.exports = (db, DataTypes) => {
    const Car = db.define("cars", {
        name: {
            type: DataTypes.STRING,
            allowNul: false,
        },
        registration: {
            type: DataTypes.STRING,
            allowNul: false,
        },
        year: {
            type: DataTypes.INTEGER,
        },
        brand: {
            type: DataTypes.STRING,
            allowNul: false,
        },
        model: {
            type: DataTypes.STRING,
        },
        series: {
            type: DataTypes.STRING,
        },
        car_class: {
            type: DataTypes.STRING,
        }
    });


    Car.associate = (models) => {
        Car.hasMany(models.comments, { as: "comments" })
    }
    return Car;
}