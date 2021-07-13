module.exports = (db, DataTypes) => {
    const Comment = db.define("comments", {
        comments: {
            type: DataTypes.STRING,
        }
    })

    Comment.associate = (models) => {
        Comment.belongsTo(models.cars, { as: "car" })
        Comment.belongsTo(models.users, { as: "user" })
    }

    return Comment;
}