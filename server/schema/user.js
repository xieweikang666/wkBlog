/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    user_id: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    user_passwd: {
      type: DataTypes.CHAR(255),
      allowNull: true
    }
  }, {
    tableName: 'user'
  });
};
