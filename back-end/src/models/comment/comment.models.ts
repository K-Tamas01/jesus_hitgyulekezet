var { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  Username: String,
  Comment: String,
  Date: Date,
  Comment_ID: Number
},
{
  collection: 'comment'
}
)

module.exports = model('comment', commentSchema);