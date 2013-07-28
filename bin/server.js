/*jshint es5:true node:true*/

"use strict";

var httpProxy   = require('http-proxy'),
    options     = {
        hostnameOnly: true,
        router: {
            'ci.maiden.io'  : '127.0.0.1:3000',
            'npm.maiden.io' : '127.0.0.1:3001'
    }
};

var proxy = httpProxy.createServer(options);
proxy.listen(8000);