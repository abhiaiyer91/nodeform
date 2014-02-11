//server.js
var  couchdb = require('felix-couchdb'),
     client = couchdb.createClient(5984, 'localhost'),
     db = client.db('test');

db
  .create(function(error){
    if (error) throw new Error(JSON.stringify(error));
    console.log('Created new db. with name '+JSON.stringify(db.name));
  });

db.saveDoc('newtestdocument', {"newtestfield" : "newtestfieldvalue"}, function(error, ok) {
    if (error) throw new Error(JSON.stringify(error));
    console.log('Saved my first doc to the couch! operation info: '+JSON.stringify(ok));
  });