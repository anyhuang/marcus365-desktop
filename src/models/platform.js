const mongoose = require('mongoose');


const platformScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  }

},{
  timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
});

module.exports = mongoose.model('Platform', platformScheme);
