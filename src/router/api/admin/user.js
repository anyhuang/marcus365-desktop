const bcrypt = require('bcryptjs');
const errors = require('restify-errors');
const {User} = require('../../../models');

const userRoute = (app) => {
  app.get('/api/admin/users', async (req, res, next) => {
    try {
      const users = await User.find({});
      res.send(users);
    } catch (e) {
      res.send(new errors.InternalError(e));
    }
    next()
  });

  app.get('/api/admin/users/:id', async (req, res, next) => {
    try {
      const {id} = req.params;
      const user = await User.findById(id);
      res.send(user);
    } catch (e) {
      res.send(new errors.InternalError(e));
    }

    next()
  });

  app.post('/api/admin/users', async (req, res, next) => {
    try {
      const userExist = await User.count({username: req.body.username});
      if (userExist > 0) {
        res.send({
          code: 'error',
          message: '用户已存在'
        });
      } else {

        const user = new User(req.body);
        //密码加密
        const salt = bcrypt.genSaltSync(10);
        const pwd = bcrypt.hashSync(req.body.password, salt);
        user.password = pwd;
        const userSave = await user.save();
        res.send(userSave);
      }
    } catch (e) {
      res.send(new errors.InternalError(e));
    }
    next()
  });

  app.put('/api/admin/users/:id', async (req, res, next) => {
    try {
      const {id} = req.params;
      const updateResult = await User.findByIdAndUpdate(id, req.body);
      res.send(updateResult);
    } catch (e) {
      res.send(new errors.ResourceNotFoundError(e));
    }
    next()
  });


  app.del('/api/admin/users/:id', async (req, res, next) => {
    try {
      const {id} = req.params;
      const delResult = await User.findByIdAndDelete(id);
      res.send(delResult);
    } catch (e) {
      res.send(new errors.InternalError(e));
    }
    next()
  });
};

module.exports = userRoute;
