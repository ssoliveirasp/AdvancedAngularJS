(function () {
    angular
        .module("Advancedjs.Mod02")
        .directive("labDirective", labDirective);
        
    function labDirective() {
        return {
            restrict: "E",
            scope: {
                writers: '=',
            },
            templateUrl: '/src/advancedJS/Mod02/diretives/labDirective.html'          
        };
    }
})();
