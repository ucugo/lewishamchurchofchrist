churchOfChristApp.controller('appController', ["$scope", "$location", "WeeklyMessageDao", function($scope, $location, WeeklyMessageDao){
    $scope.url = $location;
    $scope.currentYear = new Date().getFullYear()
    $scope.myInterval = 2000;
    $scope.noWrapSlides = false;
    $scope.active = 0;

    $scope.status

    var slides = $scope.slides = [];
    $scope.messages
    var currIndex = 0;


    $scope.addSlide = function() {
        slides.push({
            image: 'img/bible-Sunlight_a.jpg',
            text: ['Jesus answered, "I am the way and the truth and the life. No one comes to the Father except through me.'][slides.length % 4],
            id: currIndex++,
            title: 'John 14:16'
        }, {
            image: 'img/church/rsz_img_1924.png',
            text: ['',][slides.length % 4],
            id: currIndex++,
            title: ''
        }, {
            image: 'img/church/rsz_img_1071.png',
            text: ['',][slides.length % 4],
            id: currIndex++,
            title: ''
        });
    };
    $scope.addSlide();

    $scope.sermons = [{
        "title": "Admitting our sins and confessing to God:",
        "audio_link_mp3": "http://cts-network.co.za/audio/sunday_message_2017_07_23.mp3",
        "audio_link_ogg": "http://cts-network.co.za/audio/sunday_message_2017_07_23.mp3",
        "preacher": "by Br Johnson",
        "date": "23-07-2017"
    }]



    WeeklyMessageDao.async().then(function(d) {
            $scope.messages = d;
        });

    $scope.randomize = function() {
        var indexes = generateIndexesArray();
        assignNewIndexesToSlides(indexes);
    };

    // Randomize logic below

    function assignNewIndexesToSlides(indexes) {
        for (var i = 0, l = slides.length; i < l; i++) {
            slides[i].id = indexes.pop();
        }
    }

    function generateIndexesArray() {
        var indexes = [];
        for (var i = 0; i < currIndex; ++i) {
            indexes[i] = i;
        }
        return shuffle(indexes);
    }

    function shuffle(array) {
        var tmp, current, top = array.length;

        if (top) {
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        }

        return array;
    }
}]);
