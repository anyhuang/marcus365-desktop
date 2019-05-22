const mongoose = require('mongoose');


const userScheme = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  }

},{
  timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
});

module.exports = mongoose.model('User', userScheme);
