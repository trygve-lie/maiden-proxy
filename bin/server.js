/*jshint es5:true node:true*/

"use strict";

var httpProxy   = require('http-proxy'),
    options     = {
        hostnameOnly: true,
        router: {
            'www.maiden.io' : '127.0.0.1:8001',
            'ci.maiden.io'  : '127.0.0.1:8002'
    }
};

var proxy = httpProxy.createServer(options);
proxy.listen(80);