(function () {
    angular
        .module("Advancedjs.Mod02")
        .directive("transcludedirective", transcludeDirective);
    
    function transcludeDirective() {
        return {
            restrict: "EA",
            transclude: true,
            scope: true,
            template: "<div>" +
                      "   This tag remains during transclusion."  +
                      "</div>" +
                      "<div>" +
                      "  <div ng-transclude>This tag is replaced by consumer of this directive.</div>" +
                "</div>",
            link: function (scope, element, attrs) {
                element.bind('mouseenter', function () {
                    element.css('color', 'red');
                });
            
                element.bind('mouseleave', function () {
                    element.css('color', 'green');
                });
            }
        };
    }
})();