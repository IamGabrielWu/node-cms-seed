/**
 * Master Controller for sidebar control
 */

angular.module('red23-site')
    .controller('MasterCtrl', ['$scope', '$cookieStore','$state', MasterCtrl]);

function MasterCtrl($scope, $cookieStore,$state) {
    /**
     * Sidebar Toggle & Cookie Control
     */
    var currentUser = $cookieStore.get('currentUser')
    console.log(currentUser)
    if(currentUser==null){
        $state.go('loginUI')
    }
    
    var mobileView = 992;

    $scope.getWidth = function() {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function() {
        $scope.$apply();
    };
}