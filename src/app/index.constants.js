(function() {
  'use strict';

  angular
    .module('willys')
    .constant('APP_CONFIG',{
        'APP_NAME' : 'willys',
        'APP_VERSION' : '0.0.1',
        'APP_VERSION_NAME' : 'doughnut-insult',
        'LANGUAGES' : {
            'es-ES' : true,
            'en-EN' : false,
        },
        'DEBUG_MODE' : true,
        'ERROR_REPORT' : true,
        //'API_URL': 'http://localhost:8080/',
        //'API_URL': 'https://api.willysbrewing.com'
    })

})();
