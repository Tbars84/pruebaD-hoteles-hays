const { Router } = require('express');
const router = Router();
const hotelesMockUp = require('../data.json')

router.get('/', (req , res , next)=>{
  
  let skip = Number(req.query.skip) || 0;
  let limit = Number(req.query.limit) || 20;
  console.log(req.query);
  if(hotelesMockUp){
    res.json(hotelesMockUp)
  }else{
    res.status(404).json({error: 'La base de datos se encuentra con errores'})
  }
})

module.exports = router;