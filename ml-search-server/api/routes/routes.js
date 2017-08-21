'use strict';
module.exports = function(app) {
    var search = require('../controllers/searchController');

    app.route('/search/:query')
        .get(search.query);

};