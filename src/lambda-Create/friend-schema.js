'use strict'

const dynamoose = require('dynamoose')

const friendSchema = new dynamoose.Schema({
  'id': String,
  'name': String,
  'phone': String,
})
                              // table name
let friendModel = dynamoose.model('friends', friendSchema)
module.exports = { friendModel }
