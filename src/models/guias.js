const Sequelize = require('sequelize')
const sequelize = require('./db')
const db = require('./db')


const Guias = db.define('guias',{

      // Model attributes are defined here
id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
},
nameGuia:{
    type:Sequelize.STRING,
    allowNull:false,
},
city:{
    type:Sequelize.STRING,
    allowNull:false,
},
Images:{
    type:Sequelize.STRING,
    allowNull:false,
},

description:{
    type:Sequelize.TEXT,
    allowNull:false,
},
price:{
    type:Sequelize.STRING,
    allowNull:false
},
lenguage:{
    type:Sequelize.STRING,
    allowNull:false
}





})

Guias.sync()


module.exports= Guias;