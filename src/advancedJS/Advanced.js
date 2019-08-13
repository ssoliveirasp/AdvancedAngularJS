(function () {
    'use strict';
    var moduleName = 'Advancedjs';

    angular.module(moduleName,
        [
            'ngRoute',
            'ngAnimate',
            'ui.bootstrap',
            'Advancedjs.Mod01',
            'Advancedjs.Mod02',
            'Advancedjs.Mod03'
        ]);

    angular.module(moduleName)
        .config(function ($routeProvider, $httpProvider, $provide, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/src/advancedJS/mod01/view/mod01.html'
                })
                .when('/Mod2', {
                    templateUrl: '/src/advancedJS/mod02/views/mod02.html'
                })
                .when('/Mod2/Movie', {
                    templateUrl: '/src/advancedJS/mod02/views/movie.html',
                    controller: 'movieController'
                })
                .when('/Mod3/Ui-Bootstrap', {
                    templateUrl: '/src/advancedJS/mod03/views/mod03.html',
                    controller: 'AccordionDemoCtrl'
                })
                .when('/Mod3/Animation', {
                    templateUrl: '/src/advancedJS/mod03/views/ngAnimations.html',
                    controller: 'ngAnimationsCtrl'
                 })
                 .when('/Mod3/uiBootstrap', {
                    templateUrl: '/src/advancedJS/mod03/views/uiBootstrap.html',
                    controller: 'uibootstrapController'
                 })
                .otherwise({
                    redirectTo: '/'
                });

            // Utilizando o HTML5 History API
            $locationProvider.html5Mode(true);
    });

    angular.module(moduleName)
        .run(function ($rootScope, $route, $routeParams, $location) {
             configureRouteMonitor($rootScope, $route, $location);
    });

    function configureRouteMonitor($rootScope, $route, $routeParams, $location) {

        function showInfoRouter(event, current, previous) {
            var msg = 'Nome do Evento:' + event.name + ' \n' +
                      'Próxima Rota:' + angular.toJson(previous) + '\n' +
                      'Rota Atual:' + angular.toJson(current) + '\n ';
                
            console.log(msg);
        }

        $rootScope.$on('$routeChangeStart', function (e, curr, prev) {
            showInfoRouter(e, curr, prev);
        });
        $rootScope.$on('$routeChangeSuccess', function (e, curr, prev) {
            showInfoRouter(e, curr, prev);
        });
        $rootScope.$on('$locationChangeStart', function () {
            console.log('locationChangeStart \n \n');
        });
       
        $rootScope.$route = $route;
        $rootScope.$location = $location;
        $rootScope.$routeParams = $routeParams;
    }

})();