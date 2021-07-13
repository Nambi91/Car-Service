module.exports = (db, DataTypes) => {
    const User = db.define("users", {
        first_name: {
            type: DataTypes.STRING,
            allowNul: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNul: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNul: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNul: false,
            defaultValue: "password",
        },
    });

    User.associate = (models) => {
        User.hasMany(models.comments, { as: "comments" })
    }

    return User;
}