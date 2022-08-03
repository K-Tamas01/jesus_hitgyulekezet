var { Schema, model } = require('mongoose');

const wisdomDailySchema = new Schema({
  WisDom: String,
  Date:Date,
  wisdom_ID:Number
},
{
  collection: 'wisdom_daily'
}
)

module.exports = model('wisdom_daily', wisdomDailySchema);