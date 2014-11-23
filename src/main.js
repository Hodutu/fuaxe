'use strict';

var notifications = require('./notifications');
var list = require('./list');

list(function(e, data){
  console.log(data);
});

notifications();
