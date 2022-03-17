const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: Number,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },

});

module.exports = mongoose.model('contacts', contactSchema);



