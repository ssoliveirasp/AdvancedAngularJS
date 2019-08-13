(function() {
     'use strict';

      angular.module('Advancedjs.Mod01')
             .service('sessionService',sessionService);

       sessionService.$inject = ['$window', 'formattingFactory'];
      
       function sessionService($window, formattingFactory) {
          
          this.save = function save(key, value) {
             $window.sessionStorage.setItem(key, formattingFactory.format(value));
          };
          this.get = function get(key) {
            return $window.sessionStorage.getItem(key);
          };

          this.clear = function clear() {
             $window.sessionStorage.clear();
          };
          
       }
})();

