// eslint-disable-next-line no-undef
var AWS = require("aws-sdk");
// eslint-disable-next-line no-undef
var fs = require('fs');

AWS.config.update({
  region: "us-west-2"
});

console.log("Writing entries to GalleryImages table.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var galleryImagesData = 
  JSON.parse(fs.readFileSync('../components/data/welcome_images.json', 'utf8'));

galleryImagesData.forEach(function(galleryImage) {
  var className = galleryImage.className || "no_class";

  var params = {
    TableName: "GalleryImages",
    Item: {
      "src": galleryImage.src,
      "alt": galleryImage.alt,
      "className": className
    }
  };
  
  // eslint-disable-next-line no-unused-vars
  dynamodb.put(params, function(err, data) {
    if (err)
      console.error("Unable to load data into table for gallery images",
                    galleryImage.src, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", galleryImage.src, "to table.")
  });
});