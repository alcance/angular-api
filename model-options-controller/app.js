angular.module('modelOptionsCtlrApp', [])
.controller('CancelUpdateCtrl', ['$scope', function ($scope) {
    $scope.resetWithCancel = function (e) {
        if (e.keyCode == 27) {
            $scope.myForm.myInput1.$rollbackViewValue();
            $scope.myValue = '';
        }
    };

    $scope.resetWithoutCancel = function (e) {
        if (e.keyCode == 27) {
            $scope.myValue = '';
        }
    };
}])
