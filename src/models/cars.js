const Sequelize = require('sequelize')
const sequelize = require('./db')
const db = require('./db')


const Cars = db.define('cars',{

      // Model attributes are defined here
id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
},
namecars:{
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







})

Cars.sync()


module.exports= Cars;