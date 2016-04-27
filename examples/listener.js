var PUBNUB = require('pubnub') ;
require('dotenv').config();

var pubnub = PUBNUB({
    publish_key   : process.env.publish_key,
    subscribe_key : process.env.subscribe_key
});


pubnub.subscribe({
    channel: 'log_channel',
    // connect: play,
    callback: function(m) {
        console.log ( m) ;
    },
    error: function(err) {
        console.log(err);
    }
});