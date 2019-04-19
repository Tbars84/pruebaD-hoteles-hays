const { Router } = require('express');
const router = Router();
const hotelesMk = require('../data.json')

router.get('/', (req , res)=>{
  let response = [];
  if( typeof req.query.nsfw != 'undefined' ){
    response = hotelesMk.filter(function(store){
      if(store.nsfw === true){
        return store;
      }
    });
  } else {
    response = stores;
  }
  res.json(response);
})

module.exports = router;