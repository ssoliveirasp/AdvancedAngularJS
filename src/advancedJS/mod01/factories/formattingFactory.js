(function () {
    'use strict';

    angular
        .module('Advancedjs.Mod01')
        .factory('formattingFactory', formattingFactory);
    
    // formattingFactory.$inject = [''];

    function formattingFactory() {
        return {
            format: format
        };
        function format(str) {
            if (str.length > 12) { str = str.toUpperCase(); }
            else { str = str.toLowerCase(); }
            return str;
        }
    }
})();