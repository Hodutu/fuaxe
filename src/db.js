'use strict';

var request = require('request');

module.export = function(cb){
  request(
    'https://raw.githubusercontent.com/michalbe/tv-series/master/data/data.js',
    function (error, response, body) {
      if (error) {
        cb(error);
        return;
      }

      cb(null, JSON.parse(body));
    }
  );
};
