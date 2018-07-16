const gmeta = require("./gmeta");
console.log("GMeta: Test!");
gmeta("https://github.com/jodacame/gmeta",function(err,data){
    console.log(data);
});