var { Schema, model } = require('mongoose');

const loginSchema = new Schema({
  Username: String,
  Password: String,
  Comment: String,
  Email: String,
  Mobile: String,
  Discord: String,
  Address:{
    City: String,
    Postcode: String,
    Street: String,
    Floor: Number,
    Door: Number
  },
  Debit_Card:{
    Card_num: String,
    cvc: String,
    Owner: String,
    Valid_date: String
  }
},
{
  collection: 'login'
}
)

module.exports = model('login', loginSchema);