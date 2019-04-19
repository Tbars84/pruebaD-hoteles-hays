const { Router } = require('express');
const router = Router();

router.get('/', (req , res)=>{
  res.json({title: `Esperando consulta`})
})

module.exports = router;