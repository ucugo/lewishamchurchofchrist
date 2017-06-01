churchOfChristApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider

        .when('/',{
            templateUrl : 'home.html',
            controller  : 'appController'
        })
        .when('/home', {
            templateUrl : 'home.html',
            controller  : 'appController'
        })
        .when('/about', {
            templateUrl : 'about.html',
            controller  : 'appController'
        })
        .when('/ministries', {
            templateUrl : 'ministries.html',
            controller  : 'appController'
        })
        .when('/contact', {
            templateUrl : 'contact.html',
            controller  : 'appController'
        }).
        otherwise({
            redirectTo: '/error'
        });
}]);