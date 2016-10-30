angular.module("red23-site", ["ui.bootstrap", "ui.router", "ngCookies", "datatables"]);
angular.module("red23-site").run(function ($rootScope, $cookieStore) {
    //initialize alerts
    $rootScope.alerts = [];
    $rootScope.closeAlert = function (index) {
        $rootScope.alerts.splice(index, 1);
    };
})
angular.module("red23-site").constant('USER_API', {
    auth_login: '/login',
    findbyUsername: '/api/user/name/'
})
angular.module("red23-site").constant('REGEX', {
    notBlank: /^\s*$/,
    backendUrl:/^cms\/.*/
})
angular.module("red23-site").config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("login"),
        $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "views/frontendlogin.html",
            controller: 'frontendLoginCtrl'
        })
        .state("frontendmain", {
            url: "/frontendmain",
            templateUrl: "views/frontendmain.html",
            controller: 'frontendMainCtrl'
        })  
        .state("loginUI", {
            url: "/cms/login",
            templateUrl: "admin/views/login/login.html",
            controller: 'frontendLoginCtrl'
        })
        .state("backendmain", {
            url: "/cms/backendmain",
            templateUrl: "admin/views/master/master.html",
            controller: 'MasterCtrl'
        })
        .state("backendmain.listUser", {
            url: "/user",
            templateUrl: "admin/views/userlist.html",
            controller: 'UserListCtrl',
        })
        .state("backendmain.updateUser", {
            url: "/user/update/:id",
            templateUrl: "admin/views/userupdate.html",
            controller: 'UserUpdateCtrl'
        })
        .state("backendmain.newUser", {
            url: "/user/new",
            templateUrl: "admin/views/usernew.html",
            controller: 'UserNewCtrl'
        })
        .state("backendmain.viewUser", {
            url: "/user/view/:id",
            templateUrl: "admin/views/userdetails.html",
            controller: 'UserViewCtrl'
        })
}]);