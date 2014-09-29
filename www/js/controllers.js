angular.module('starter.controllers', [])

.controller('LogsCtrl', function($scope, $ionicModal, Logs) {
    $scope.logs = Logs.all();

    // Create and load Modal
    $ionicModal.fromTemplateUrl('templates/new-log.html', function(modal){
        $scope.newLogModal = modal;
    },{
        scope: $scope
    });
    
    $scope.newLog = function() {
        $scope.newLogModal.show();
    };

    $scope.closeNewLog = function() {
        $scope.newLogModal.hide();
    };
})

.controller('LogDetailCtrl', function($scope, $stateParams, Logs){
    $scope.log = Logs.get($stateParams.logId);
})

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
