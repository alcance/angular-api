angular.module('switchApp', ['ngAnimate'])
.controller('SwitchController', ['$scope', function($scope){
    $scope.items = ['home', 'settings', 'other'];

}])
