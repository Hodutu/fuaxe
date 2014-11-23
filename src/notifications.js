'use strict';

var notifier = require('node-notifier');

module.exports = function(title){
  notifier.notify({
    title: title,
    message: 'New episode found!',
//    icon: path.join(__dirname, 'coulson.jpg'), // absolute path (not balloons)
    sound: true, // Only Notification Center or Windows Toasters
    wait: true // wait with callback until user action is taken on notification
  }, function (err, response) {
    // response is response from notification
  });
};
