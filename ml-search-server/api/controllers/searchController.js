'use strict';

var marklogic = require('marklogic');
var my = require('./my-connection');
var db = marklogic.createDatabaseClient(my.connInfo);
var _ = require('lodash');
const querystring = require('querystring');


exports.query = function(req, res) {
    console.log("page size", req.params.query);
    var qb = marklogic.queryBuilder;
    db.documents.query(
        qb.where(qb.byExample({ tags: req.params.query }))
    ).result(function(documents) {
        var Url = _.map(documents, 'uri');
        var data = _.map(documents, 'content.text');

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        const list = res.end(JSON.stringify(documents));
        console.log(list);
    }, function(error) {
        res.send(JSON.stringify(error, null, 2));
    });

}