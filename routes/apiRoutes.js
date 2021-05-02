const router = require("express").Router();
const database = require("../models");

  router.get("/workouts", (req, res) => {
    database.Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
  })
  router.get("/workouts/range", ({}, res) => {
    database.Workout.find({}).then((dbWorkout) => {
    res.json(dbWorkout);
  })
    .catch(err => {
      res.status(400).json(err);
    });
  });

router.post("/workouts/", (req, res) => {
    database.Workout.create(req.body).then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/workouts/:id", (req, res) => {
  database.Workout.findByIdAndUpdate(
    { _id: req.params.id }, { exercises: req.body }
  ).then((dbWorkout) => {          
    res.json(dbWorkout);
  }).catch(err => {
    res.status(400).json(err);
  });
});

module.exports = router;
