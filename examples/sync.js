var winston = require('winston') ;
require('dotenv').config();


//
// Create a new winston logger instance with two tranports: Console, and File
//
//

require('../lib/winston-pubnub').Pubnub;


var logger = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)(),
		new (winston.transports.Pubnub)({
			"channel": "log_channel",
			publish_key   : process.env.publish_key,
		    subscribe_key : process.env.subscribe_key,
		    timestamp: function() {
				return Date.now();
			}
		})
	]
});

for ( var i = 0 ; i < 10 ; i++) {
	logger.log('info', 'Hello created log files! ' + i);
}


process.exit() ;