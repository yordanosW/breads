const express = require('express')
const mongoose = require('mongoose')


//Configuration

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

  
// DEPENDENCIES
const methodOverride = require('method-override')

//Midd
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))

//Routes
app.get('/',function(req, res){
    res.send('Welcome to an Awesome App about Breads!')
})

// breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// bakers 
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(function(){console.log('connected to mongo:', process.env.MONGO_URI)})


//LISTEN
app.listen(PORT, function(){
    console.log('listening on port',PORT)
})


