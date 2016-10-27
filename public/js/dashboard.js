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
    $urlRouterProvider.otherwise("/login"),
        $stateProvider.state("frontendmain", {
            url: "/frontendmain",
            templateUrl: "views/frontendmain.html",
            controller: 'frontendMainCtrl'
        })  
        .state("login", {
            url: "/login",
            templateUrl: "views/frontendlogin.html",
            controller: 'frontendLoginCtrl'
        })
        .state("backendmain_login", {
            url: "/cms/login",
            templateUrl: "admin/views/login/login.html",
            controller: 'frontendLoginCtrl'
        })
        .state("backendmain", {
            url: "/cms/backendmain",
            templateUrl: "admin/views/master/master.html",
            controller: 'MasterCtrl'
        })
        .state("listUser", {
            url: "/cms/user",
            templateUrl: "admin/views/userlist.html",
            controller: 'UserListCtrl',
            controllerAs: 'userlistctrl'
        })
        .state("updateUser", {
            url: "/cms/user/update/:id",
            templateUrl: "admin/views/userupdate.html",
            controller: 'UserUpdateCtrl'
        })
        .state("newUser", {
            url: "/cms/user/new",
            templateUrl: "admin/views/usernew.html",
            controller: 'UserNewCtrl'
        })
        .state("viewUser", {
            url: "/cms/user/view/:id",
            templateUrl: "admin/views/userdetails.html",
            controller: 'UserViewCtrl'
        })
}]);