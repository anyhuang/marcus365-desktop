const bcrypt = require('bcryptjs');
const errors = require('restify-errors');
const {Platform=} = require('../../../models');

const userRoute = (app) => {
  app.get('/api/admin/platform', async (req, res, next) => {
    try {
      const platform = await Platform.find({});
      res.send(platform);
    } catch (e) {
      res.send(new errors.InternalError(e));
    }
    next()
  });

  app.get('/api/admin/platform/:id', async (req, res, next) => {
    try {
      const {id} = req.params;
      const platform = await Platform.findById(id);
      res.send(platform);
    } catch (e) {
      res.send(new errors.InternalError(e));
    }

    next()
  });

  app.post('/api/admin/platform', async (req, res, next) => {
    try {
    const platformExist = await Platform.count({name: req.body.name});
    if (platformExist > 0) {
      res.send({
        code: 'error',
        message: '平台已存在'
      });
    }
    else {

        const platform = new Platform(req.body);
        const platformSave = await platform.save();
        res.send(userSave);
      }
    }
    catch (e) {
      res.send(new errors.InternalError(e));
    }
    next()
  });

  app.put('/api/admin/platform/:id', async (req, res, next) => {
    try {
      const {id} = req.params;
      const updateResult = await Platform.findByIdAndUpdate(id, req.body);
      res.send(updateResult);
    } catch (e) {
      res.send(new errors.ResourceNotFoundError(e));
    }
    next()
  });


  app.del('/api/admin/platform/:id', async (req, res, next) => {
    try {
      const {id} = req.params;
      const delResult = await Platform.findByIdAndDelete(id);
      res.send(delResult);
    } catch (e) {
      res.send(new errors.InternalError(e));
    }
    next()
  });
};

module.exports = userRoute;
