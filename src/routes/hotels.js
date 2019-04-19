const { Router } = require('express');
const router = Router();
const hotelesMk = require('../data.json')

router.get('/', (req , res)=>{
  if(hotelesMk){
    res.json(hotelesMk)
  }else{
    res.status(404).json({error: 'La base de datos se encuentra con errores'})
  }
})

module.exports = router;