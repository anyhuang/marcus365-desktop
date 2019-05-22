const bcrypt = require('bcryptjs');
const errors = require('restify-errors');
const {Platform} = require('../../../models');

const platformRoute = (app)=>{
  app.get('/api/platforms', async (req, res, next)=>{
    try {
      const user = '';
      const platforms = await Platform.func({user});
      res.send(platforms)
    }catch (e) {
      res.send(new errors.InternalError(e));
    }

    next();
  })


  app.post('api/platforms', async (req, res,next)=>{
    try {

    }catch (e) {
      res.send(new errors.InternalError(e));
    }
    next();
  })


};

module.exports = platformRoute;
