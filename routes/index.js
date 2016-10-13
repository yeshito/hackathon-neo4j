'use strict'
const express = require('express');
const router = express.Router();
const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "washing1"));
const session = driver.session();
/* GET home page. */

router.get('/', function(req, res, next) {

  session.run( "MATCH (c:Category) return c")
    .then( result => {
      console.log(JSON.stringify(result))
    })
    .catch(err => {
      console.log(err)
    })
  res.render('index', { title: 'Express' });
});

module.exports = router;
