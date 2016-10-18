angular.module("red23-site", ["ui.bootstrap", "ui.router", "ngCookies"]);
"use strict";
angular.module("red23-site").config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/"), $stateProvider.state("index", {
        url: "/",
        templateUrl: "admin/views/users.html"
    }).state("tables", {
        url: "/tables",
        templateUrl: "templates/tables.html"
    })
}]);

function AlertsCtrl(e) {
    e.alerts = [{
        type: "success",
        msg: "Thanks for visiting! Feel free to create pull requests to improve the dashboard!"
    }, {
        type: "danger",
        msg: "Found a bug? Create an issue with as many details as you can."
    }], e.addAlert = function () {
        e.alerts.push({
            msg: "Another alert!"
        })
    }, e.closeAlert = function (t) {
        e.alerts.splice(t, 1)
    }
}
angular.module("red23-site").controller("AlertsCtrl", ["$scope", AlertsCtrl]);

function MasterCtrl(t, e) {
    var o = 992;
    t.getWidth = function () {
        return window.innerWidth
    }, t.$watch(t.getWidth, function (g) {
        t.toggle = g >= o ? angular.isDefined(e.get("toggle")) ? e.get("toggle") ? !0 : !1 : !0 : !1
    }), t.toggleSidebar = function () {
        t.toggle = !t.toggle, e.put("toggle", t.toggle)
    }, window.onresize = function () {
        t.$apply()
    }
}
angular.module("red23-site").controller("MasterCtrl", ["$scope", "$cookieStore", MasterCtrl]);