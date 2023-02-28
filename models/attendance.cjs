const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Attendance.belongsTo(models.user, {
        foreignKey: 'userId',
      });
    }
  }
  Attendance.init({
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    attendanceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    loginTime: {
      type: DataTypes.TIME,
    },
    logoutTime: {
      type: DataTypes.TIME,
    },
  }, {
    sequelize,
    modelName: 'attendance',
  });
  return Attendance;
};
