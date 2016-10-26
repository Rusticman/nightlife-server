const Yelp = require('yelp');
const config = require('../config');
const VisitVenue = require('../models/visit_venue');

module.exports = function(req,res,next){
const location = req.params.location;

  const yelp = new Yelp({
    consumer_key: config.yelp.consumer_key,
    consumer_secret: config.yelp.consumer_secret,
    token: config.yelp.token,
    token_secret: config.yelp.token_secret
  })

  yelp.search({ location: location })
  .then(function (data) {
    VisitVenue.find({},function(err,venues){
      if(err){
        return next(err)
      }
    return res.send({venuesArray:venues,
                      data:data
                            })
    })
  })
  .catch(function (err) {
  console.error(err);
  res.send({error:err})
  });
}
