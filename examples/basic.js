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
		    subscribe_key : process.env.subscribe_key
		})
	]
});

setInterval(function () {
	logger.log('info', 'Hello created log files!', { 'foo': 'bar' });
	logger.info("127.0.0.1 - there's no place like home");
	logger.warn("127.0.0.1 - there's no place like home");
	logger.error("127.0.0.1 - there's no place like home");

	logger.debug("Will not be logged in either transport!");
	logger.verbose("Will be logged in both transports!");
}, 3000);