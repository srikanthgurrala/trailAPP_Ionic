angular.module('starter.controllers', [])

.controller('MenuCtrl', function($scope, $ionicLoading, $ionicSideMenuDelegate,$ionicPopover, $ionicPopup) {
  $scope.attendees = [
    { firstname: 'Nicolas', lastname: 'Cage' },
    { firstname: 'Jean-Claude', lastname: 'Van Damme' },
    { firstname: 'Keanu', lastname: 'Reeves' },
    { firstname: 'Steven', lastname: 'Seagal' }
  ];
  
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $ionicPopover.fromTemplateUrl('templates/popover.html', {
      scope: $scope
   }).then(function(popover) {
      $scope.popover = popover;
   });

   $scope.openPopover = function($event) {
      $scope.popover.show($event);
   };

  /* $scope.closePopover = function() {
      $scope.popover.hide();
   };

   //Cleanup the popover when we're done with it!
   $scope.$on('$destroy', function() {
      $scope.popover.remove();
   });

   // Execute action on hide popover
   $scope.$on('popover.hidden', function() {
      // Execute action
   });

   // Execute action on remove popover
   $scope.$on('popover.removed', function() {
      // Execute action
   });*/

   // When button is clicked, the popup will be shown...
   $scope.showPopup = function() {
      $scope.data = {}
    
      // Custom popup
      var myPopup = $ionicPopup.show({
         template: '<input type = "text" ng-model = "data.model">',
         title: 'Enter WI-FI Password',
         subTitle: 'use normal things',
         scope: $scope,
      
         buttons: [
            { text: 'Cancel' }, {
               text: '<b>Save</b>',
               type: 'button-positive',
                  onTap: function(e) {
            
                     if (!$scope.data.model) {
                        //don't allow the user to close unless he enters model...
                           e.preventDefault();
                     } else {
                        return $scope.data.model;
                     }
                  }
            }
         ]
      });

      myPopup.then(function(res) {
         console.log('Tapped!', res);
      });    
   };


    
    
    // When button is clicked, the popup will be shown...
   $scope.showConfirm = function() {
  
      var confirmPopup = $ionicPopup.confirm({
         title: 'SignOut',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
         } else {
            console.log('Not sure!');
         }
      });
    
   };

   $scope.showPrompt = function() {
  
      var promptPopup = $ionicPopup.prompt({
         title: 'Wrong Password!',
         template: 'Enter Correct Password',
         inputType: 'text',
         inputPlaceholder: 'Password'
      });
        
      promptPopup.then(function(res) {
         console.log(res);
      });
    
   };

   $scope.showLoading = function() {
      $ionicLoading.show({
         template: 'Signing in...'
      });
   };

   $scope.hideLoading = function(){
      $ionicLoading.hide();
   };
  
})

.controller('WifiController', ['$scope', 'WifiService', function($scope, WifiService, WifiWizard){
 $scope.wifiList = [];

 window.setTimeout(function(){
  $scope.wifiList = WifiService.list();
  $scope.$apply();
 }, 5000);

 $scope.getList = function(){
  $scope.wifiList = WifiService.list();
 }

 $scope.connectWifi = function(name){
  WifiService.connectionToWifi(name);
 }
}])



/*.controller('MenuCtrl', function($scope, $ionicPopover) {

  $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  })*/
.controller('HomeCtrl', function($scope) {})

.controller('PersonCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})


.controller('CalendarCtrl', function($scope) {});



