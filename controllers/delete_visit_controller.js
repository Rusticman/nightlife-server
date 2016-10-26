const VisitVenue = require('../models/visit_venue');


module.exports = function(req,res,next){
const venue = req.body.venue;
const Id = req.body.id;
const attendingArray = req.body.attendingArray;

VisitVenue.findOneAndRemove({"venue":venue,"user":Id},function(err){
  if(err){
    return next(err);
  }

  attendingArray.forEach((business) => {
    if(business.venue === venue){
    const index = business.visitors.indexOf(Id);
        if(index !== -1){
          business.visitors.splice(index,1);
          business.attendance--;
        }
    }
  })
  return res.send({data:attendingArray})

})

}
