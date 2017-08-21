'use strict';

var marklogic = require('marklogic');
var my = require('./my-connection');
var db = marklogic.createDatabaseClient(my.connInfo);
var _ = require('lodash');


exports.query = function(req, res) {
    // res.send("Hey its working");
    var qb = marklogic.queryBuilder;
    db.documents.query(
        qb.where(qb.byExample({ tags: 'javascript' }))
    ).result(function(documents) {
        console.log(documents);
        // for(document in documents){

        // }

        // var data = _.map(documents,"text");
        // console.log ("Data"+data);
        var Url = _.map(documents, 'uri');
        var data = _.map(documents, 'content.text');

        console.log("Data", data, Url);

        res.end(JSON.stringify("URL" + Url + "data" + data));

        // documents.for( function(document) {
        // //res.send('\nURI: ' + document.uri + document.content.name); 
        // res.end('document: ' + document.content.text);
        // });
        // res.end(JSON.stringify(documents));
    }, function(error) {
        res.send(JSON.stringify(error, null, 2));
    });

}