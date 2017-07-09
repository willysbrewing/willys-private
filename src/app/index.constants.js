(function() {
  'use strict';

  var env = {};

  // Import variables if present (from env.js)
  if(window){
    Object.assign(env, window.__env);
  }

  angular
    .module('willys')
    .constant('_env', env)

  angular
    .module('willys')
    .constant('APP_CONFIG',{
        'APP_NAME' : 'willys',
        'APP_VERSION' : '1.0.1',
        'APP_VERSION_NAME' : 'doughnut-insult-alpha',
        'LANGUAGES' : {
            'es-ES' : true,
            'en-EN' : false
        },
        'API_VERSION': 'v1',
        'DEBUG_MODE' : env.enableDebug,
        'ERROR_REPORT' : env.enableErrorReport,
        'API_URL': env.apiUrl
    })

})();
