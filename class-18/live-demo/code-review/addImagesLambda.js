const { S3 } = require('aws-sdk');
const s3 = new S3();

exports.handler = async (event) => {
    
    const type = '.jpg';
    const name = event.Records[0].s3.object.key;
    const size = event.Records[0].s3.object.size;
    const imageObject = { type, name, size };
    console.log('image object', imageObject)
    
    let images = [];
    let params = {
        Bucket: 'd49-demo-images',
        Key: 'images.json',
    };
    
    try {
        let data = await s3.getObject(params).promise();
        images = JSON.parse(data.Body.toString());
        console.log('our images array', images);
    }catch(e){
        console.log(e.message);
    }
    
    images.push(imageObject);
    params.Body = JSON.stringify(images);
    
    try {
        await s3.putObject(params).promise();
    } catch(e){
        console.log(e.message)
    }
    
    
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};

// another possible if the v3 javascript api works for you!
// https://github.com/julian-barker/lambda-deploy-test/blob/main/lambda.js
