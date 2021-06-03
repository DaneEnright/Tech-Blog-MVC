const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comments extends Model {}

Comments.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_name: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        comment: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        date: {
            type: Datatypes.INTEGER, // Ask about this
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "comment",
    }
);


modules.exports = Comments;