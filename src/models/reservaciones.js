const Sequelize = require('sequelize')
const sequelize = require('./db')
const db = require('./db')


const Reservaciones = db.define('reservaciones',{

      // Model attributes are defined here
id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
},
name:{
    type:Sequelize.STRING,
    allowNull:false,
},
lastName:{
    type:Sequelize.STRING,
    allowNull:false,
},
Email:{
    type:Sequelize.STRING,
    allowNull:false,
},

nacionalidad:{
    type:Sequelize.STRING,
    allowNull:false,
},
Fecha_Entrada:{
    type:Sequelize.STRING,
    allowNull:false,
},
Fecha_Salida:{
    type:Sequelize.STRING,
    allowNull:false,
},


Habitacion:{
    type:Sequelize.TEXT,
    allowNull:false,
},
telefono:{
    type:Sequelize.STRING,
    allowNull:false
},
tipo_de_cama:{
    type:Sequelize.STRING,
    allowNull:false,
},
comidas:{
    type:Sequelize.STRING,
    allowNull:false
},






})

Reservaciones.sync()


module.exports= Reservaciones;