const VisitVenue = require('../models/visit_venue');
const NightlifeUser = require('../models/nightlife_user');


module.exports = function(req,res,next){
 const venue = req.body.venue;
 const Id = req.body.id;
 const attendingArray = req.body.attendingArray;

  const visitVenue = new VisitVenue({
    venue:venue,
    user:Id
  })//the id is the number from the object id, not the object

visitVenue.save(function(err){
  if(err){
    return next(err)
  }

  attendingArray.forEach((business) => {

    if(business.venue === venue){
      business.visitors.push(Id);
      business.attendance++;
    }
  })
  
  return res.send({data:attendingArray})
  })
}
