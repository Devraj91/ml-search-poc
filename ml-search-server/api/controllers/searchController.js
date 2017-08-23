'use strict';

var marklogic = require('marklogic');
var my = require('./my-connection');
var db = marklogic.createDatabaseClient(my.connInfo);
var _ = require('lodash');

exports.query = function(req, res) {
    console.log(req.query.text);
    var qb = marklogic.queryBuilder;
    db.documents.query(
        qb.where(qb.byExample({ tags: req.query.text }))
    ).result(function(documents) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        const data = documents.map((document) => {
            return { url: document.uri, text: document.content.text.substring(0, 100) };
        })

        res.send(data);
    }, function(error) {
        res.send(JSON.stringify(error, null, 2));
    });
}

exports.view = function(req, res) {
    console.log(req.query.url);
    var qb = marklogic.queryBuilder;
    db.documents.read(req.query.url).result(function(documents) {
        res.send(documents);
    }, function(error) {
        res.send(JSON.stringify(error, null, 2));
    });
}