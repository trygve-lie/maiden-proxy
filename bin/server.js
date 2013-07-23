/*jshint es5:true node:true*/

"use strict";

var httpProxy   = require('http-proxy'),
    options     = {
        hostnameOnly: true,
        router: {
            'maiden.io'     : '127.0.0.1:8001',
            'www.maiden.io' : '127.0.0.1:8001',
            'ci.maiden.io'  : '127.0.0.1:3000',
            'r.maiden.io'   : '127.0.0.1:8001'
    }
};

var proxy = httpProxy.createServer(options);
proxy.listen(8000);
