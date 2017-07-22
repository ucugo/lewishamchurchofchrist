churchOfChristApp.factory('WeeklyMessageDao', ['$http', function($http) {

    var WeeklyMessageDao = {
        async: function() {
            return  $http.get('php/list_messages.php').then(function (response) {
                console.log(response.data)
                return response.data;
            });
        }
    };
    return WeeklyMessageDao;
}])