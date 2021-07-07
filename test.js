const gmeta = require("./gmeta");
console.log("GMeta: Test!");

// Using callback

gmeta("https://github.com",function(err,data){
    console.log("[CALLBACK] GMeta: Test from URL!",data);
});

gmeta('<title>GitHub</title><meta name="description" content="GitHub is where people build software. More than 28 million people use GitHub to discover, fork, and contribute to over 85 million projects.">', function (err, data) {
    console.log("[CALLBACK] GMeta: Test from HTML!",data);
},true);

(async() => {
    try {
        const result = await gmeta("https://github.com")
        console.log("[PROMISE] GMeta: Test from URL!", result)
    } catch (err) {
        console.log(err);
    }

    try {
        const result = await gmeta('<title>GitHub</title><meta name="description" content="GitHub is where people build software. More than 28 million people use GitHub to discover, fork, and contribute to over 85 million projects.">',true)
        console.log("[PROMISE] GMeta: Test from HTML!", result)
    } catch (err) {
        console.log(err);
    }

})();

