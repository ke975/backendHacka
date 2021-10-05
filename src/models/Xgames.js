const Sequelize = require('sequelize')
const sequelize = require('./db')
const db = require('./db')


const XGames = db.define('Xgames',{

      // Model attributes are defined here
id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
},
namePlaces:{
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

Images1:{
    type:Sequelize.STRING,
    allowNull:false,
},
Images2:{
    type:Sequelize.STRING,
    allowNull:false,
},
Images3:{
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
openinHours:{
    type:Sequelize.STRING,
    allowNull:false,
},
closeHours:{
    type:Sequelize.STRING,
    allowNull:false
},
Geolocation:{
    type:Sequelize.STRING,
    allowNull:false

}





})

XGames.sync({alter:true})


module.exports= XGames;