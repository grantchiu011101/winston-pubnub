Winston Transport for [Pubnub](https://www.pubnub.com) integration

    $ npm install winston-pubnub

demo
====

    $ git clone 
    $ mv .env.sample .env
    $ node examples

run pubnub listener

    $ node examples/listener.js /* run pubnub subscriber */
    $ node examples/basic.js    /* run basic pubnub logger */

Example
=======

    var winston = require('winston') ;
    require('../lib/winston-pubnub').Pubnub;
    var logger = new (winston.Logger)({
      transports: [
        new (winston.transports.Console)(),
        new (winston.transports.Pubnub)({
          "channel": "log_channel",
          "publish_key"   : "pub-c-5f8c7839-fac3-43ee-a8e3-e3fd9db50d2f",
          "subscribe_key" : "sub-c-617c958c-75a8-11e5-8d0a-0619f8945a4f"
        })
      ]
    });

configuration
=============
 * publish_key : 
 * subscribe_key : 


The MIT License (MIT)

Copyright (c) 2015

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.