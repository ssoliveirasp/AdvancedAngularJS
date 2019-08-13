(function () {
    'use strict';

    angular
        .module('Advancedjs.Mod01')
        .factory('sessionFactory', sessionFactory);
    
    sessionFactory.$inject = ['$window','formattingFactory'];

    function sessionFactory($window, formattingFactory) {
        return {
            save: save,
            get: get,
            clear: clear
        };

        function save(key, value) {
            $window.sessionStorage.setItem(key, formattingFactory.format(value));
         }
    
         function get(key) {
            return $window.sessionStorage.getItem(key);
         }
    
         function clear() {
            $window.sessionStorage.clear();
         }
    }
})();