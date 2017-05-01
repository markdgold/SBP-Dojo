'use strict';
module.exports = function(sequelize, DataTypes) {
  var climb_user_comment = sequelize.define('climb_user_comment', {
    user_id: DataTypes.INTEGER,
    climb_id: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return climb_user_comment;
};