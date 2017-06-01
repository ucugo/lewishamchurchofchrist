churchOfChristApp.controller('appController', ["$scope", "$location", function($scope, $location){
    $scope.$location = $location;
    $scope.currentYear = new Date().getFullYear()
    $scope.message = 'Everyone come and see how good I look!';
    $scope.myInterval = 2000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;


    $scope.addSlide = function() {
        slides.push({
            image: '../img/bible-Sunlight_a.jpg',
            text: ['Jesus answered, "I am the way and the truth and the life. No one comes to the Father except through me.'][slides.length % 4],
            id: currIndex++,
            title: 'John 14:16'
        }, {
            image: '//www.womenoffaith.com/wp-content/uploads/2015/02/bible-Sunlight.jpg',
            text: ['Image 2',][slides.length % 4],
            id: currIndex++,
            title: ''
        }, {
            image: '../img/bible-Sunlight_a.jpg',
            text: ['Image 2',][slides.length % 4],
            id: currIndex++,
            title: ''
        });
    };

    $scope.randomize = function() {
        var indexes = generateIndexesArray();
        assignNewIndexesToSlides(indexes);
    };
    $scope.addSlide();

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

    // http://stackoverflow.com/questions/962802#962890
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
