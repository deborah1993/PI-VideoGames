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
      background_image: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description_raw: {
        type: DataTypes.STRING,
      },
      fechaLanzamiento: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.STRING,
      },
      genres: {
        type: DataTypes.ARRAY(DataTypes.JSON),
      },
      platforms: {
        type: DataTypes.ARRAY(DataTypes.JSON),
      },
    },
    {
      timestamps: false,
    }
  );
};
