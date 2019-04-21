const { Router } = require('express');
const router = Router();
const hotelesMk = require('../data.json')

router.get('/', (req , res)=>{
  let { hotelName } = req.query
  hotelName = hotelName.toString()
  typeof hotelName != undefined || typeof hotelName != null ?
    response = hotelesMk.filter(function(hotel){
      return hotel.name == hotelName
    }) :
    response = 'not Found';
    res.json(response);
})

module.exports = router;