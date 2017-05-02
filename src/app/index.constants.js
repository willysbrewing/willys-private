(function() {
  'use strict';

  angular
    .module('willys')
    .constant('APP_CONFIG',{
        'APP_NAME' : 'willys',
        'APP_VERSION' : '1.0.0',
        'APP_VERSION_NAME' : 'doughnut-insult',
        'LANGUAGES' : {
            'es-ES' : true,
            'en-EN' : false
        },
        'DEBUG_MODE' : true,
        'ERROR_REPORT' : true,
        'API_VERSION': 'v1',
        'API_URL': 'http://localhost:8080'
        //'API_URL': 'https://api.willysbrewing.com'
    })

})();
