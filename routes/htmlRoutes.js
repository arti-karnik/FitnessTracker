const path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/index.html"));
    });
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/views/index.html"));
  });
    app.get("/exercise", function(req, res) {
      console.log("in exercixe");
      res.sendFile(path.join(__dirname, "../public/views/exercise.html"));
    });
  
    app.get("/stats", function(req, res) {
      console.log("in stats");

      res.sendFile(path.join(__dirname, "../public/views/stats.html"));
    });
};