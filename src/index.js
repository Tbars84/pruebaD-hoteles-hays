const express = require('express')
const cors = require("cors")
const morgan = require('morgan')
const app = express();
const rateLimit = require("express-rate-limit");
// DECLARANDO VARIABLES GLOBALES
app.set('port', 3030)
app.enable("trust proxy"); 

// LIMIT OF TIME PER REQUEST
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 10 // limit each IP to 10 requests per windowMs
});

// MIDDLEWARE
app.use(cors());
app.use(limiter);
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// ROUTES
app.use(require('./routes/index'))
app.use('/api/hoteles' , require('./routes/hotels'))
app.use('/api/filtered/hotel' , require('./routes/filteredHotels'))


// INICANDO LA URL DE LA API
app.listen(app.get('port') , ()=>{
  console.log(`Server on port ${app.get('port')}`);
})