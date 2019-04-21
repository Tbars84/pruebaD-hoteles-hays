const { Router } = require('express');
const router = Router();
const hotelesData = require('../data.json')

router.get('/', (req , res)=>{
  let { skip, limit } = req.query
  skip = parseInt(skip) || 0;
  limit = parseInt(limit)|| 20;

  let resultData = hotelesData.slice(skip, limit)
  res.json({
    data: resultData,
    loadMoreEv: {
      skip,
      limit,
      total: hotelesData.length,
      available: hotelesData.length - (skip + limit) > 0,
    }
  })
})

module.exports = router;