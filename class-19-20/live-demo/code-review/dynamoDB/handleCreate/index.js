const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
    "id": String,
    "name": String,
    "phone": String
});

const friendsModel = dynamoose.model('friends-demo', schema);

exports.handler = async(event) => {
  
    console.log('event body', event.body);

    let parsedBody = JSON.parse(event.body);
    console.log('parsed body', parsedBody);
   
    const response = { statusCode: null, body: null };

    try {
        let result = await friendsModel.create(parsedBody);
        console.log('result', result);
        response.statusCode = 200;
        response.body = JSON.stringify(result);
    }catch(e){
        response.statusCode = 500;
        response.body = JSON.stringify(e.message)
    }

    return response;
};
