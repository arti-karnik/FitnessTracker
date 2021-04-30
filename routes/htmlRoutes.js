const path = require("path");
const db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
  });
    app.get("/exercise", function(req, res) {
      console.log(path.join(__dirname, "../public/exercise.html"));
      res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
  
    app.get("/stats", function(req, res) {
      console.log(path.join(__dirname, "../public/stats.html"));
      res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    app.get("/api/workouts", (req, res) => {
      console.log("in api workouts");
          db.Workout.find({}).then(dbWorkout => {
              res.json(dbWorkout);
          })
          .catch(err => {
              res.status(400).json(err);
          });
      })
      app.get("/api/workouts/range", ({}, res) => {
            console.log("in api workouts");
  
        db.Workout.find({}).then((dbWorkout) => {
          res.json(dbWorkout);
        }).catch(err => {
          res.status(400).json(err);
        });
      });
  
      app.post("/api/workouts/", (req, res) => {
          db.Workout.create(req.body).then((dbWorkout) => {
            res.json(dbWorkout);
          }).catch(err => {
              res.status(400).json(err);
            });
        });
  
        app.put("/api/workouts/:id", (req, res) => {
          db.Workout.findByIdAndUpdate(
            { _id: req.params.id }, { exercises: req.body }
          ).then((dbWorkout) => {          
            res.json(dbWorkout);
          }).catch(err => {
            res.status(400).json(err);
          });
      });
};