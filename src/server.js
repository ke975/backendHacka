const express = require('express')
const app = express()
const Places = require('./models/places')
const guias = require('./models/guias')
const  cars = require('./models/cars')
const bares = require('./models/bares')
const hoteles = require('./models/hoteles')
const cors = require('cors');
const http = require('http');
const server = http.Server(app);
app.use(express.json())
app.use(cors());


app.get('/', async function(req,res){
    await Places.findAll({order: [['id', 'Desc']]}).then(function(places){
        res.json({places})
    })
});

app.get('/cars', async function(req,res){
  await cars.findAll({order: [['id', 'Desc']]}).then(function(cars){
      res.json({cars})
  })
});



app.get('/guias/:id', async function(req,res){
    await guias.findByPk(req.params.id)
    .then(guias=>{
        return res.json({
            error:false,
            guias
        })
    }).catch(function(erro){
        return res.status(400).json({
            erro:true,
            message:"guia no encontrado"
        })
    })
})

app.get('/places/:id', async function(req,res){
    await  Places.findByPk(req.params.id)
    .then(places=>{
        return res.json({
            error: false,
            places
        })

    }).catch(function(erro){
        return res.status(400).json({
            erro: true,
            message:"lugar no encontrado"
        })
    })
})

app.get('/cars/:id', async function(req,res){
  await  cars.findByPk(req.params.id)
  .then(cars=>{
      return res.json({
          error: false,
          cars
      })

  }).catch(function(erro){
      return res.status(400).json({
          erro: true,
          message:"carro no encontrado"
      })
  })
})


app.get('/guias', async function (req,res){
    await guias.findAll({order: [['id', 'Desc']] }).then(function(guias){
        res.json({guias})
    })
})

app.post('/cadastrar', async (req,res) =>{
    const resultCad= await Places.create(
      req.body
    ).then(function(){
        return res.json({
            error:false,
            message:"cadastrado con sucesso"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:"Anuncio nao cadatrado con sucesso"
        })
    })
});

app.post('/cadastrarguias', async (req,res) =>{
    const resultCad= await guias.create(
      req.body
    ).then(function(){
        return res.json({
            error:false,
            message:"cadastrado con sucesso"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:"guia nao cadatrado con sucesso"
        })
    })
});

app.post('/cadastrarcars', async (req,res) =>{
  const resultCad= await cars.create(
    req.body
  ).then(function(){
      return res.json({
          error:false,
          message:"cadastrado con sucesso"
      })
  }).catch(function(erro){
      return res.status(400).json({
          error:true,
          message:"carro nao cadatrado con sucesso"
      })
  })
});


app.get('/bares', async function(req,res){
    await bares.findAll({order: [['id', 'Desc']]}).then(function(bares){
        res.json({bares})
    })
});

app.get('/bares/:id', async function(req,res){
    await  bares.findByPk(req.params.id)
    .then(bares=>{
        return res.json({
            error: false,
            bares
        })
  
    }).catch(function(erro){
        return res.status(400).json({
            erro: true,
            message:"bar no encontrado"
        })
    })
  })






app.post('/cadastrarbar', async (req,res) =>{
    const resultCad= await bares.create(
      req.body
    ).then(function(){
        return res.json({
            error:false,
            message:"cadastrado con sucesso"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:"bar  nao cadatrado con sucesso"
        })
    })
  });



  app.get('/hoteles', async function(req,res){
    await hoteles.findAll({order: [['id', 'Desc']]}).then(function(hoteles){
        res.json({hoteles})
    })
});

app.get('/hoteles/:id', async function(req,res){
    await  hoteles.findByPk(req.params.id)
    .then(hoteles=>{
        return res.json({
            error: false,
            hoteles
        })
  
    }).catch(function(erro){
        return res.status(400).json({
            erro: true,
            message:"hotel no encontrado"
        })
    })
  })






app.post('/cadastrarhoteles', async (req,res) =>{
    const resultCad= await hoteles.create(
      req.body
    ).then(function(){
        return res.json({
            error:false,
            message:"cadastrado con sucesso"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:"hotel nao cadatrado con sucesso"
        })
    })
  });







 app.listen(3333)