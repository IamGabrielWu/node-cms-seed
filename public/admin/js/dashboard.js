angular.module("red23-site", ["ui.bootstrap", "ui.router", "ngCookies", "datatables"]);
angular.module("red23-site").run(function ($rootScope,$cookieStore) {
    //initialize alerts
    $rootScope.alerts = [];
    $rootScope.closeAlert = function (index) {
        $rootScope.alerts.splice(index, 1);
    };
})
angular.module("red23-site").constant('USER_API',{
    auth_login:'/login',
    findbyUsername:'/api/user/name/'
})
angular.module("red23-site").constant('REGEX',{
    notBlank:/^\s*$/
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
        .state("viewUser", {
            url: "/user/view/:id",
            templateUrl: "admin/views/userdetails.html",
            controller: 'UserViewCtrl'
        })
        .state("tables", {
            url: "/tables",
            templateUrl: "templates/tables.html"
        })
}]);