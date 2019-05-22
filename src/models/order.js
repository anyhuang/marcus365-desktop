const mongoose = require('mongoose');


const orderScheme = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true
  },
  platform: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Platform',
    required: true,
  },

  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  },

  principal: {
    type: Number,
    required: true,
  },

  commission: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    required: true,
    default: Date.now,
  },

},{
  timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
});

module.exports = mongoose.model('OrderForm', orderScheme);
