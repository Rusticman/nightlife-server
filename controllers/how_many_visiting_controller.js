const VisitVenue = require('../models/visit_venue');


module.exports = function(req,res,next){

VisitVenue.find({},function(err,venues){
  if(err){
    return next(err)
  }
return res.send({venuesArray:venues})
})


}
