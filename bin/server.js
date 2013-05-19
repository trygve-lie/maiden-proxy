/*jshint es5:true node:true*/

"use strict";

var httpProxy 	= require('http-proxy'),
	options 	= {
		hostnameOnly: true,
		router: {
			'ci.maiden.io': '127.0.0.1:8001',
			'bar.com': '127.0.0.1:8002'
	}
};

var proxy = httpProxy.createServer(options);
proxy.listen(8000);