const router = require("express").Router();
const db = require("../models");
const path = require("path");

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})
router.get("/api/workouts/range", ({}, res) => {
  db.Workout.find({}).then((dbWorkout) => {
    res.json(dbWorkout);
  }).catch(err => {
    res.status(400).json(err);
  });
});

router.post("/api/workouts/", (req, res) => {
    db.Workout.create(req.body).then((dbWorkout) => {
      res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
      });
  });

  router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      { _id: req.params.id }, { exercises: req.body }
    ).then((dbWorkout) => {          
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
});
module.exports = router;
