const bcrypt = require('bcryptjs');
const errors = require('restify-errors');
const {OrderForm} = require('../../../models');

const orderRoute = (app) => {
  app.get('/api/admin/orders', async (req, res, next) => {
    try {
      const orders = await OrderForm.find({});
      res.send(orders);
    } catch (e) {
      res.send(new errors.InternalError(e));
    }
    next()
  });

  app.get('/api/admin/orders/:id', async (req, res, next) => {
    try {
      const {id} = req.params;
      const order = await OrderForm.findById(id);
      res.send(order);
    } catch (e) {
      res.send(new errors.InternalError(e));
    }

    next()
  });

  app.post('/api/admin/orders', async (req, res, next) => {
    try {
      const orderExist = await OrderForm.count({orderId: req.body.orderId});
      if (orderExist > 0) {
        res.send({
          code: 'error',
          message: '订单已存在'
        });
      } else {
        const order = new OrderForm(req.body);
        const orderSave = await order.save();
        res.send(orderSave);
      }
    } catch (e) {
      res.send(new errors.InternalError(e));
    }

    next()
  });

  app.put('/api/admin/orders/:id', async (req, res, next) => {
    try {
      const {id} = req.params;
      const updateResult = await OrderForm.findByIdAndUpdate(id, req.body);
      res.send(updateResult);
    } catch (e) {
      res.send(new errors.ResourceNotFoundError(e));
    }
    next()
  });


  app.del('/api/admin/orders/:id', async (req, res, next) => {
    try {
      const {id} = req.params;
      const delResult = await OrderForm.findByIdAndDelete(id);
      res.send(delResult);
    } catch (e) {
      res.send(new errors.InternalError(e));
    }
    next()
  });
};

module.exports = orderRoute;
