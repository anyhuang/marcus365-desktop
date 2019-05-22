const  mongoose = require('mongoose');
const restify = require('restify');


const bcrypt = require('bcryptjs')

const {User} = require('../models');

const app = restify.createServer();

app.use(restify.plugins.bodyParser());


require('../router/api/admin/user')(app); //引入user路由
require('../router/api/admin/platform')(app);
require('../router/api/admin/order')(app);

require('../router/api/user')(app);
require('../router/api/platform')(app);
require('../router/api/order')(app);

app.listen(1234, ()=>{
  mongoose.connect('mongodb://localhost/order');

  const db = mongoose.connection;

  db.on('open', async ()=>{
    console.log('数据库连接成功');

  });


  db.on('error', (err)=>{
    console.log(err)
  });

});


