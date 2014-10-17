'use strict';

var notifier = require('node-notifier');

module.exports = function(){
  notifier.notify({
    title: 'My awesome title',
    message: 'Hello from node, Mr. User!',
//    icon: path.join(__dirname, 'coulson.jpg'), // absolute path (not balloons)
    sound: true, // Only Notification Center or Windows Toasters
    wait: true // wait with callback until user action is taken on notification
  }, function (err, response) {
    // response is response from notification
  });
};
