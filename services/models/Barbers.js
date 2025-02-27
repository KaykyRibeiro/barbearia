const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

  const Barbers = sequelize.define("Barbers", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true
    // },
    barber: DataTypes.STRING(50)
  });

module.exports = Barbers;
