// handle read 

const dynamoose = require('dynamoose')
const { friendModel } = require('./friend-schema')

exports.handler = async (event) => {
  let list

  console.log(' *** event: ', event)

  if(event.pathParameters){
    const id = event.pathParameters.id
                            // field name
    list = await friendModel.query('id').eq(id).exec()
  }else{
    // []
    list = await friendModel.query('id').scan().exec()

  }

  const response = { statusCode: 200, body: JSON.stringify(list)}

  return response
}
