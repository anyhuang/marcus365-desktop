const {User} =require('../../models');
const bcrypt = require('bcryptjs');
const errors = require('restify-errors');


const usersRoute = (app) => {
  app.post('/api/users/login', async (req, res, next)=>{
    try {
      const {username, password} = req.body;
      const user = await User.findOne({
        username: username,
      });

      if(user) {

        const isValidated = bcrypt.compareSync(password, user.password)
        if(isValidated){
          res.send(user)
        }else {
          res.send({
            code:'error',
            message: '用户密码错误'
          })
        }
      }

      else{
        res.send({
          code: 'error',
          message: 'user not found'
        })
      }
    }
    catch (e) {
      res.send(new errors.InternalError(e));
    }
    next()
  })


  app.post('/api/user/reg', async (req, res, next)=>{

    try {
      const {username} = req.body;
      const exist = await User.count({
        username
      });

      if(exist > 0){
        res.send({
          code: 'error',
          message: '用户已存在'
        });
      }
      else {
        const user = new User(req.body);
        const {password} = req.body
        const slat = bcrypt.genSaltSync(10);
        const pwd = bcrypt.hashSync(password, slat)
        user.password = pwd
        const userResult = await user.save()
        res.send(userResult)
      }
    }
    catch (e) {
      res.send(new errors.InternalError(e));
    }

    next()
  })

};
