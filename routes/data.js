var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = require('./connect');

router.get('/cohorts', function(req, res) {

});

router.get('/recruiters', function(req, res) {

});

router.get('/students', function(req, res) {

});

router.get('/students/:cohortID', function(req, res) {
  var cohortID = req.params.cohortID;
});

router.put('/event', function(req, res) {
  var event = {
    name: req.name,
    startTime: req.startTime
    // I need to make sure this is getting passed in on the front end
  };

  pg.connect(connectionString, function(err, client, done) {
    client.query('INSERT INTO events (name, startTime) VALUES ($1, $2)',
      [event.name, event.starTime],
      function (err, result) {
        if (err) {
          console.log("Error inserting data: ", err);
          res.send(false);
        } else {
          res.send(result);
        }
      }
    );
  });
});

router.put('/recruiter', function(req, res) {
  var recruiter = {
    name: req.name,
    email: req.email,
    company: req.company
  };

  pg.connect(connectionString, function(err, client, done) {
    client.query('INSERT INTO recruiters (name, email, company) VALUES ($1, $2, $3)',
      [recruiter.name, recruiter.email, recruiter.company],
      function (err, result) {
        if (err) {
          console.log("Error inserting data: ", err);
          res.send(false);
        } else {
          res.send(result);
        }
      }
    );
  });
});

router.put('/schedule', function(req, res) {
  // I will probably outsource this functionality to another file
});

router.put('/student', function(req, res) {
  var student = {
    name: req.name,
    email: req.email,
    cohort: req.cohort
  };

  pg.connect(connectionString, function(err, client, done) {
    client.query('INSERT INTO students (name, email, cohort) VALUES ($1, $2, $3)',
      [student.name, student.email, student.cohort],
      function (err, result) {
        if (err) {
          console.log("Error inserting data: ", err);
          res.send(false);
        } else {
          res.send(result);
        }
      }
    );
  });
});

