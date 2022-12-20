const { S3 } = require("aws-sdk");

const s3 = new S3();

exports.handler = async (event) => {
    // set up a test event and should be able to get the "example-bucket" name
    // note that the filename will break everything if you push test right now.
    // const dynamicBucketName = event.Records[0].s3.bucket.name;
    // console.log('dynamicBucketName', dynamicBucketName);
    const bucketName = event.Records[0].s3.bucket.name;
    const filename = event.Records[0].s3.object.key;
    
    const params = {
        Bucket: bucketName,
        Key: filename,
    }
    
    let data = await s3.getObject(params).promise();
    let numbers = JSON.parse(data.Body.toString());
  
    console.log('numbers', numbers);
    
    const { numberOne, numberTwo } = numbers.numbers;
    let result = numberOne + numberTwo;
    console.log('this is what success looks like: ', result);
    
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
