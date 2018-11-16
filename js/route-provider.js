churchOfChristApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider

        .when('/',{
            templateUrl : 'view/home.html',
            controller  : 'appController'
        })
        .when('/home', {
            templateUrl : 'view/home.html',
            controller  : 'appController'
        })
        .when('/about', {
            templateUrl : 'view/about.html',
            controller  : 'appController'
        })
        .when('/ministries', {
            templateUrl : 'view/ministries.html',
            controller  : 'appController'
        })
        .when('/resources', {
            templateUrl : 'view/resources.html',
            controller  : 'appController'
        })
        .when('/contact', {
            templateUrl : 'view/contact.html',
            controller  : 'appController'
        }).
        otherwise({
            redirectTo: '/error'
        });
}]);