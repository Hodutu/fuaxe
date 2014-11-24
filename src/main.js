'use strict';

var noe = require('nr-of-episodes');
var notification = require('./notifications');
var list = require('./list');

list(function(e, data) {
  data = data.filter(function(show) {
    return show.stillWatching;
  });

  setInterval(function(){
    data.forEach(checkShow);
  }, 2000);
});

var checked = [];
var checkShow = function(show) {
  if (checked.indexOf(show.title) === -1) {
    noe(show.title, function(e, d) {
      if (d && !e && d > show.episodes) {
        notification(show.title);
        checked.push(show.title);
      }
    });
  }
};
