angular.module('modeloptionsApp', [])

// set value after blur / press escape to reset

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

// debouce value

.controller('DebounceCtrl', ['$scope', function($scope){
    $scope.user = { name: 'default' };
}])


// getters and setters
.controller('GetterSetterCtrl', ['$scope', function($scope){
    var _name = 'Ivan';
    $scope.user = {
        name: function(newName) {
            // Note that newName can be undefined for two reasons:
            // 1. It is called as a getter and thus called with no args
            // 2. The property should actually be set to undefined. This
            // happens e.g. if the input is invalid

            return arguments.length ? (_name = newName) : _name;
        }
    };
}])
