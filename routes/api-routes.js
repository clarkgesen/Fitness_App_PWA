const router = require('express').Router();

// **look into path**
const path = require('path');
const db = require('../models')

// POST create, create a new activity
router.post('/workouts', (req, res) => {
  const activity = req.body;
  // console.log(activity);
  db.Workout.create(workout)
    .then((results) => {
      res.json({
        success: true,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        errors: err.errors,
      });
    });
});

// PUT updates an activity by id
router.put('/workouts/:id', (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, {
    $push: {
      exercises: req.body
    }
  }).then((results) => {
    res.json({
      success: true,
    });
  })
  .catch((err) => {
    res.status(500).json({
      success: false,
      errors: err.errors,
    });
  });
});


router.get('/workouts', (req, res) => {
  db.Workout.find()
    .then((workout) => {
      // console.log(weight);
      res.json(workout);
    });
});

router.get('/workouts/range', (req, res) => {
  db.Workout
  .find({})
  .sort({day: -1})
  .limit(7)
  .then(dbWorkout => {
    res.json(dbWorkout);
  }).catch(err => {
    res.json(err);
  });
    
});

module.exports = router;
