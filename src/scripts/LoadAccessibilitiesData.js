// eslint-disable-next-line no-undef
var AWS = require("aws-sdk");
// eslint-disable-next-line no-undef
var fs = require('fs');

AWS.config.update({
  region: "us-west-2"
});

console.log("Writing entries to Accessibilities table.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var accessibilitiesData = 
  JSON.parse(fs.readFileSync('../components/data/accessibility.json', 'utf8'));

accessibilitiesData.forEach(function(accessibililty) {
  var params = {
    TableName: "Accessibilities",
    Item: {
      "name": accessibililty.text
    }
  };

  // eslint-disable-next-line no-unused-vars
  dynamodb.put(params, function(err, data) {
    if (err)
      console.error("Unable to load data into table for accessibility",
                    accessibililty.name, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", accessibililty.name, "to table.")
  })
});