const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

  const Services = sequelize.define("Services", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true
    // },
    cli_name: DataTypes.STRING(255),
    cli_tel: DataTypes.STRING(50),
    service_desc: DataTypes.STRING(50),
    service_pag: DataTypes.STRING(50),
    date: DataTypes.DATE(),
    barber_name: DataTypes.STRING(50),
    horario: DataTypes.STRING(50)
  });

module.exports = Services;
