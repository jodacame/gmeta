const gmeta = require("./gmeta");
console.log("GMeta: Test!");


gmeta("https://github.com/jodacame/gmeta",function(err,data){
    console.log("GMeta: Test from URL!");
    console.log(data);
});

gmeta('<title>GitHub</title><meta name="description" content="GitHub is where people build software. More than 28 million people use GitHub to discover, fork, and contribute to over 85 million projects.">', function (err, data) {
    console.log("GMeta: Test from HTML!");
    console.log(data);
},true);