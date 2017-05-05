'use strict';
module.exports = function(sequelize, DataTypes) {
    var climb = sequelize.define('climb', {
        name: DataTypes.STRING,
        grade_id: DataTypes.INTEGER,
        creator_id: DataTypes.INTEGER,
        imgur: {
            type: DataTypes.TEXT,
            validate: {
                isURL: true

            }
        },
        style: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                models.climb.belongsTo(models.user, { foreignKey: 'creator_id' });
                models.climb.belongsTo(models.grade, { foreignKey: 'grade_id' });

            }
        }
    });
    return climb;
};
