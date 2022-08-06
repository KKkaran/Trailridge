const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const purchaseSchema = new Schema(
  {
    description: {
      type: String,
      required: 'You need to leave a description!',
      minlength: 3,
      maxlength: 280
        },
    price: {
        type: String
        
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Purchases = model('Purchases', purchaseSchema);

module.exports = Purchases;
