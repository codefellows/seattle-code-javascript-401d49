const {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} = require("@aws-sdk/client-s3");

const REGION = "us-west-2";
const s3Client = new S3Client({ region: REGION });

// lab:  new Goal:  use json demo as an example.  upload json to s3, get that json data using lambda and get a console.log of it!  screen shot that log if successful.  submit a repo that will have the code used and a readme.  

exports.handler = async (event) => {
    
    const { numberOne, numberTwo } = event;
    let result = numberOne + numberTwo;
    console.log('result: ', result);
    
    const bucketName = 'd49-nums-demo';
    const filename = 'number.json';
    
    const params = {
        Bucket: bucketName,
        Key: filename,
    }
    
   let numbers = await s3Client.send(new GetObjectCommand(params));
    
    console.log('numbers', numbers)
    
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
