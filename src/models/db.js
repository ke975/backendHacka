const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('backendHack','root', '',{
    host:'localhost',
    dialect:'mysql'
});


sequelize
.authenticate()
.then(()=>{
    console.log('coneccion hecha con exito a la base de datos')
})

.catch(err=>{
    console.log('erro en la conexion de la base de datos')
})

module.exports= sequelize