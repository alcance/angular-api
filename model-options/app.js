angular.module('modeloptionsApp', [])
.controller('ModelOptionsController', ['$scope', function($scope){
    $scope.user = { name: 'default', data: ''};

    $scope.cancel = function(e) {
        // if escape key is pressed
        if (e.keyCode == 27) {
            // revert form field to model value
            $scope.userForm.userName.$rollbackViewValue();
        }
    };
}])
