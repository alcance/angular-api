angular.module('myApp', [])

/*.controller('ThingCtrl', ['$scope', function ($scope) {
    $scope.thingOne = 'One';
    $scope.thingTwo = 'Two';
    $scope.getThings = function() {
        return $scope.thingOne + ' ' + $scope.thingTwo;
    };
}]); */

// extend scope

.controller('ThingCtrl', ['$scope', function ($scope) {
    angular.extend($scope, {
        thingOne: 'One',
        thingTwo: 'Two',
        getThings: function() {
            return $scope.thingOne + ' ' + $scope.thingTwo;
        }
    });
}])

// separated models from methods

.controller('ThingSeparatedCtrl', ['$scope', function ($scope) {
    // models
    angular.extend($scope, {
        thingOne_: 'One_',
        thingTwo_: 'Two_'
    });

    // methods
    angular.extend($scope, {
        getThings_: function () {
            return $scope.thingOne_ + ' ' + $scope.thingTwo_;
        }
    });
}])



// getters and setters

.controller('ThingsGetSetCtrl', ['$scope', function ($scope) {
    // private
    var _thingOne = 'One',
        _thingTwo = 'Two';

    // models
    angular.extend($scope, {
        get _thingOne() {
            return _thingOne;
        },
        set _thingOne(value) {
            if (value !== 'One' && value !== 'Two') {
                throw new Error('Invalid value ('+value+') for _thingOne');
            }
        },
        get _thingTwo() {
            return _thingTwo;
        },
        set _thingTwo(value) {
            if (value !== 'Two' && value !== 'Three') {
                throw new Error('Invalid value ('+value+') for _thingTwo');
            }
        }
    });

    // methods
    angular.extend($scope, {
        // in HTML template, something like {{things}}

        get things() {
            return _thingOne + ‘ ‘ + _thingTwo;
        }
    });

}])

