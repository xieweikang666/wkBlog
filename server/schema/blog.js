/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blog', {
    blogId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    blogTitle: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    blogContent: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    blogTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'blog'
  });
};
