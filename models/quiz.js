// Definicion del modelo de Quiz con validación

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
  	'Quiz',
    { pregunta: {
        type: DataTypes.STRING,
        validate: { notEmpty: {msg: "-> Falta pregunta"}}
      },
      tema: {
        type: DataTypes.STRING,
        validate: { notEmpty: {msg: "-> Falta tema"}}
      },
      respuesta: {
        type: DataTypes.STRING,
        validate: { notEmpty: {msg: "-> Falta respuesta"}}
      }
    }
  );
}