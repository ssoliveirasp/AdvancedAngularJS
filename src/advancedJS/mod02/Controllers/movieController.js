(function () {
    angular
        .module("Advancedjs.Mod02")
        .controller("movieController", movieController);
        
    movieController.$inject = ['$scope'];
    
    function movieController($scope) {
        $scope.movie = "Ice Age";
        $scope.rating = 5;
        $scope.display = function (movie) {
            alert("Movie : " + movie);
        };
    
    }
})();
