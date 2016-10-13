'use strict'
// const express = require('express');
// const router = express.Router();
const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "washing"));
const session = driver.session();
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:category', function(req, res, next) {

  session.run( "MATCH (c:Crime)-[:HAS_CATEGORY]-(:Category {name: {name} }) return c"), { name: req.params.category})
    .then( results => {
      let daysObj = {Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6, Sunday: 7}
      let daysCount = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0};


      results.records.forEach(crime => {
        let crimeDay = crime['_fields'][0]['properties']['dayofweek'];
        let crimeTime = crime['_fields'][0]['properties']['time'];
        daysCount[daysObj[crimeDay]] += 1;
      })
      console.log(JSON.stringify(daysCount));
    })
    .catch(err => {
      console.log(err)
    })

//   res.send('index', { title: 'Express' });
// });

// module.exports = router;
