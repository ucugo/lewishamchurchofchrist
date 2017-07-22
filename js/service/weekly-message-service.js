churchOfChristApp.factory('WeeklyMessageDao', ['$http', function($http) {

    var WeeklyMessageDao = {
        async: function() {
            return  $http.get('php/list_messages.php').then(function (response) {
                return response.data;
            });
        }
    };
    return WeeklyMessageDao;
}])