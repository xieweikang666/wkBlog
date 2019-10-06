/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('blog', {
    blog_id: {
      type: DataTypes.INTEGER(150),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true //自增
    },
    user_id: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    blog_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    blog_content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    blog_time: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'blog'
  });
};
