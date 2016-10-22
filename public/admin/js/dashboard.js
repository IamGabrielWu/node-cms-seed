angular.module("red23-site", ["ui.bootstrap","ui.router", "ngCookies","datatables"]);
"use strict";
angular.module("red23-site").config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/"), $stateProvider.state("index", {
        url: "/",
        templateUrl: "admin/views/userlist.html",
        controller:'UserListCtrl',
        controllerAs:'userlistctrl'
    })
    .state("updateUser", {
        url: "/user/update/:id",
        templateUrl: "admin/views/userupdate.html",
        controller:'UserUpdateCtrl'
    })
    .state("tables", {
        url: "/tables",
        templateUrl: "templates/tables.html"
    })
}]);

