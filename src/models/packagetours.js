const Sequelize = require('sequelize')
const sequelize = require('./db')
const db = require('./db')


const PackageTour = db.define('packagetours',{

      // Model attributes are defined here
id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
},
namepackage:{
    type:Sequelize.STRING,
    allowNull:false,
},

city:{
    type:Sequelize.STRING,
    allowNull:false,
},
price:{
    type:Sequelize.STRING,
    allowNull:false
},


Fecha_Entrada:{
    type:Sequelize.STRING,
    allowNull:false,
},
Fecha_Salida:{
    type:Sequelize.STRING,
    allowNull:false,
},

PackageTour:{
    type:Sequelize.STRING,
    allowNull:false

}










})

PackageTour.sync({alter:true})


module.exports= PackageTour;