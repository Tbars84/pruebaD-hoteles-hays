const express = require('express');
const morgan = require('morgan')
const app = express();

// DECLARANDO VARIABLES GLOBALES
app.set('port', 3030)

// MIDDLEWARE
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// ROUTES
app.use(require('./routes/index'))
app.use('/api/hoteles' , require('./routes/hotels'))

// INICANDO LA URL DE LA API
app.listen(app.get('port') , ()=>{
  console.log(`Server on port ${app.get('port')}`);
})