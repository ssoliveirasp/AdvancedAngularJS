(function () {
    'use strict';

    angular
        .module('Advancedjs.Mod02')
        .directive('sampledirective', sampleDirective);
    
    function sampleDirective() {
        return {
            restrict: 'EA',
            template: '<div><h4>Template for directive {{directivename}}</h4></div>',
            link: link,
            controller: function ($scope) {
                        $scope.directivename = 'sampleDirective';
            },
            controllerAs: 'thisController'
        }; 

        function link(scope, element, attrs) {
            // elem.hide();
            // angular.element('#page').addClass('someclass');
            // elem.css('bottom', '5%');
        }
    }

})();