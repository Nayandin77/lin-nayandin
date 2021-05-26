var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
    region: "us-east-2"
});

console.log("Writing Menu Link entries to Menu Links table");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var menuLinksData = JSON.parse(fs.readFileSync('../components/data/menu_links.json', 'utf8'));

menuLinksData.forEach(function(link) {
    var params = {
        TableName: "MenuLinks",
        Item: {
            "class": link.class,
            "href": link.href,
            "text": link.text
        }
    };

    dynamodb.put(params, function(err,data) {
        if (err)
            console.error("Unable to load data into table for menu links", link.text, ", Error: ", JSON.stringify(err, null, 2));
        else
            console.log("Added: ", link.text, " to table.");
    });
})
