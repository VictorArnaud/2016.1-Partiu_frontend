angular.module('starter.controllers')

.controller('loginCtrl', function($scope, $ionicModal, $timeout, ngFB) {
  $scope.fbLogin = function () {
    ngFB.login({scope: 'public_profile,email,user_posts,user_friends,publish_actions'}).then(
        function (response) {
            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
                console.log(response);
            } else {
                alert('Facebook login failed');
            }
        });
	};
})