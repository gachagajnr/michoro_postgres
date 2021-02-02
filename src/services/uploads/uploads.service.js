// Initializes the `uploads` service on path `/uploads`
const { Uploads } = require("./uploads.class");
const hooks = require("./uploads.hooks");
const multer = require("multer");
const multipartMiddleware = multer();
const blobService = require("feathers-blob");
// Here we initialize a FileSystem storage,
// but you can use feathers-blob with any other
// storage service like AWS or Google Drive.
const fs = require("fs-blob-store");
const blobStorage = fs("./public/uploads");
const AWS = require("aws-sdk");
const S3BlobStore = require("s3-blob-store");

module.exports = function (app) {
  const options = {
    paginate: app.get("paginate"),
  };
  const s3 = new AWS.S3({
    endpoint: "https://s3.us-east-2.amazonaws.com",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  const blobStore = S3BlobStore({
    client: s3,
    bucket: "michoroarts",
  });
  // arn:aws:s3:us-east-2:534451959033:accesspoint/michoroarts
  // const blob = {
  //   uri: getBase64DataURI(new Buffer("hello world"), "text/plain"),
  // };
  // Initialize our service with any options it requires
  app.use(
    "/uploads",
    multipartMiddleware.single("uri"),

    // another middleware, this time to
    // transfer the received file to feathers
    function (req, res, next) {
      req.feathers.file = req.file;
      next();
    },
    blobService({ Model: blobStore })
  );
  // Get our initialized service so that we can register hooks
  const service = app.service("uploads");

  service.hooks(hooks);
};
