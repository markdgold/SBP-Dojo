'use strict';
module.exports = function(sequelize, DataTypes) {
    var climb = sequelize.define('climb', {
        name: DataTypes.STRING,
        grade: DataTypes.STRING,
        creator_id: DataTypes.INTEGER,
        imgur: {
            type: DataTypes.TEXT /*,*/
                /*validate: {
        isURL: true
*/
                // }
        },
        style: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                models.climb.belongsTo(models.user, { foreignKey: 'creator_id' });
                //models.climb.belongsToMany(models.user, { through: models.climb_send });
            }
        }
    });
    return climb;
};
