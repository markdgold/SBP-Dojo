'use strict';
module.exports = function(sequelize, DataTypes) {
  var climb_fav = sequelize.define('climb_fav', {
    user_id: DataTypes.INTEGER,
    climb_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return climb_fav;
};