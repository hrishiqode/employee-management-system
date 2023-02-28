const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rating.init({
    ratingId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    value: {
      type: DataTypes.REAL,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'rating',
  });
  return Rating;
};
