const { DataTypes } = require("sequelize");
const sequelize = require("../db.js");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Genre",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
