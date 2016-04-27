var util = require('util'),
	winston = require('winston') ,
	deasync = require('deasync') ;

var Pubnub = winston.transports.Pubnub = function (options) {
	
	if(!options.publish_key || !options.subscribe_key) {
		throw new Error("publish_key or subscribe_key cannot be null") ;
	} else if ( !options.channel) {
		throw new Error("channel cannot be null") ;
	} else {
		this.name = 'Pubnub';

		this.publish_key = options.publish_key ;
		this.subscribe_key =  options.subscribe_key ;
		this.channel = options.channel ;
		//
		// Set the level from your options
		//
		this.level = options.level || 'info';
		this.silent     = options.silent   || false;
        this.raw        = options.raw      || false;
		this.handleExceptions = options.handleExceptions || false ;

		this.timestamp    = typeof options.timestamp !== 'undefined' ? options.timestamp : false;


		// Create pubnub and create sync publish function
		var pubnub = require('pubnub')({publish_key: this.publish_key, subscribe_key: this.subscribe_key}) ;
		this.publish = deasync(pubnub.publish) ;
	}
	
};

//
// Inherit from `winston.Transport` so you can take advantage
// of the base functionality and `.handleExceptions()`.
//
util.inherits(Pubnub, winston.Transport);

Pubnub.prototype.log = function (level, msg, meta, callback) {

	try {
		if ( this.timestamp ) meta['timestamp'] = new Date() ;
		this.publish({
			channel: this.channel,
			message: {
				level: level,
				msg: msg,
				meta: meta
			}
		});

	} catch ( err) {
		console.log ( err) ;
	}
	
	//
	// Store this message and metadata, maybe use some custom logic
	// then callback indicating success.
	//
	callback(null, true);
};