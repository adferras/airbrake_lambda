// Lambda will use `index.handler` as it's entrypoint.
// If you rename this file or the handler function,
// you will need to update the Lambda configs.

exports.handler = function(event, context) {

  // Your code here

  var airbrake = require('airbrake').createClient("d2c8533a402ca3bd8c59082666b14c17");

  var err = new Error('Something went terribly wrong');
  airbrake.notify(err, function(err, url) {
    console.log('Error thrown');
    if (err) throw err;
  });
};
