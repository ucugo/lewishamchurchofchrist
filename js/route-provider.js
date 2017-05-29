app.config(['$routeProvider', function($routeProvider) {
    $routeProvider

        .when('/',{
            templateUrl : 'template/home.html',
            controller  : 'appController'
        })
        .when('/home', {
            templateUrl : 'template/home.html',
            controller  : 'appController'
        })
        .when('/about', {
            templateUrl : 'template/about.html',
            controller  : 'appController'
        })
        .when('/ministries', {
            templateUrl : 'template/ministries.html',
            controller  : 'appController'
        })
        .when('/contact', {
            templateUrl : 'template/contact.html',
            controller  : 'appController'
        }).
        otherwise({
            redirectTo: '/error'
        });
}]);