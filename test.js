const gmeta = require("./gmeta");

(async () => {
  try {
    const result = await gmeta("https://www.byeindonesia.com/");
    console.log("[PROMISE] GMeta: Test from URL!", result);
  } catch (err) {
    console.log(err);
  }
})();
