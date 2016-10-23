angular.module("red23-site", ["ui.bootstrap", "ui.router", "ngCookies", "datatables"]);
angular.module("red23-site").run(function ($rootScope) {
    //initialize alerts
    $rootScope.alerts = [];
    var alert = {
        type: 'danger',
        msg: 'this is testing'
    }
    $rootScope.alerts.push(alert)
    $rootScope.closeAlert = function (index) {
        $rootScope.alerts.splice(index, 1);
    };
})
angular.module("red23-site").config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/"), $stateProvider.state("index", {
            url: "/",
            templateUrl: "admin/views/userlist.html",
            controller: 'UserListCtrl',
            controllerAs: 'userlistctrl'
        })
        .state("updateUser", {
            url: "/user/update/:id",
            templateUrl: "admin/views/userupdate.html",
            controller: 'UserUpdateCtrl'
        })
        .state("newUser", {
            url: "/user/new",
            templateUrl: "admin/views/usernew.html",
            controller: 'UserNewCtrl'
        })
        .state("tables", {
            url: "/tables",
            templateUrl: "templates/tables.html"
        })
}]);