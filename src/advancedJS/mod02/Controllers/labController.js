(function () {
    angular
        .module("Advancedjs.Mod02")
        .controller("movieController", movieController);
        
    movieController.$inject = ['$scope'];
    
    function movieController($scope) {
        $scope.writers = [
            {
                Name: 'Mark Twain',
                Nationality: 'American',
                Dates: '1835-1910'
            },
            {
                Name: 'Ernest Hemingway',
                Nationality: 'English',
                Dates: '1882-1956'
            }
        ];
        
    }
})();
