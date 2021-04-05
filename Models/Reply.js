const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reply extends Model {}

Reply.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    reply_text: {
        type: DataTypes.STRING,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'post',
            key: 'id'
        }
    }
}, 
{
    sequelize,
    freezeTableName: true,
    timestamps: true,
    underscored: true,
    modelName: 'reply'
});

module.exports = Reply;