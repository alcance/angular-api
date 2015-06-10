angular.module('copyExample', [])
.controller('copyExampleCtrl', ['$scope', function ($scope) {
    $scope.master = {};

    $scope.update = function(user) {
        // Example with 1 argument
        $scope.master = angular.copy(user);
    };

    $scope.reset = function () {
        // Example with two arguments
        angular.copy($scope.master, $scope.user);
    };

    $scope.reset();

}]);
