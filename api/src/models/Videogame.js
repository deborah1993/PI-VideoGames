const { DataTypes } = require("sequelize");
const sequelize = require("../db.js");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Videogame",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
      },
      fechaLanzamiento: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.STRING,
      },
      generos: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      plataformas: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },
    {
      timestamps: false,
    }
  );
};
