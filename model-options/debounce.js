angular.module('debouncedApp', [])
.controller('DebounceCtrl', ['$scope', function($scope){
    $scope.user = { name: 'default' };
}])
