(function () {
    angular
        .module("Advancedjs.Mod02")
        .directive("movieDirective", movieDirective);
        
    function movieDirective() {
        return {
            restrict: "E",
            scope: {
                movie: '=',
                rating: '@',
                display: '&'
            },
            template: "<div>Movie title : {{movie}}</div>" +
                "Type a new movie title : <input type='text' ng-model='movie' />" +
                "<div>Movie rating : {{rating}}</div>" +
                "Rate the movie : <input type='text' ng-model='rating' />" +
                "<div><button ng-click='display(movie)'>View Movie</button></div>"
        };
    }
})();
