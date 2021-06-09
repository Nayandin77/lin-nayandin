var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
    region: "us-east-2"
});

console.log("Writing Skills List entries to Skills List table");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var menuLinksData = JSON.parse(fs.readFileSync('../components/data/skills_list.json', 'utf8'));

menuLinksData.forEach(function(skill) {
    var params = {
        TableName: "SkillsList",
        Item: {
            "id": skill.id,
            "value": skill.value,
            "skills": skill.skills
        }
    };

    dynamodb.put(params, function(err,data) {
        if (err)
            console.error("Unable to load data into table for skills list", skill.value, ", Error: ", JSON.stringify(err, null, 2));
        else
            console.log("Added: ", skill.value, " to table.");
    });
})
