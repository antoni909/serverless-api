'use strict'

require('dynamoose')
let uuid = require('uuid').v4
const { friendModel } = require('./friend-schema')

exports.handler = async (event) => {

  console.log('*** event',event)

  try {
  const { name, phone } = JSON.parse(event.body)
  const id = uuid()

  const record = new friendModel({id,name,phone})
  console.log('*** record', record)

  const data = await record.save()

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  
  } catch (err) {
    return {
      statusCode: 500,
      response: err.message,
    };
  }
}


