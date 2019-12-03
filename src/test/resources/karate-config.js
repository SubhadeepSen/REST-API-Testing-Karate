function karateConfiguration() {   
  var env = karate.env; // get java system property 'karate.env' ###-Dkarate.env=e2e
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev'; // a custom 'intelligent' default
  }
  karate.log('karate.env system property was:', env);
  var config = { // base config JSON
    baseUrl: 'http://localhost:8085/message-queue-manager/api',
    authToken: 'Basic cXVldWUtbWFuYWdlcjpxdWV1ZU1hbmFnZXJAMTIzNDU='
  };
  if (env == 'stage') {
    // over-ride only those that need to be
	  config.baseUrl = 'http://stage-env/message-queue-manager/api';
  } else if (env == 'e2e') {
	  config.baseUrl = 'http://e2e-env/message-queue-manager/api';
  }
  // don't waste time waiting for a connection or if servers don't respond within 5 seconds
  karate.configure('connectTimeout', 5000);
  karate.configure('readTimeout', 5000);
  karate.log('Base url:', config.baseUrl);
  //karate.configure('headers', buildHeaders());
  return config;
}

function buildHeaders(){
	return {'Authorization': 'Basic cXVldWUtbWFuYWdlcjpxdWV1ZU1hbmFnZXJAMTIzNDU=',
			'Content-Type': 'application/json',
			'Accept': 'application/json'};
}