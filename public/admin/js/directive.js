function rdLoading() {
    var d = {
        restrict: "AE",
        template: '<div class="loading"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
    };
    return d
}
angular.module("red23-site").directive("rdLoading", rdLoading);

function rdWidgetBody() {
    var d = {
        requires: "^rdWidget",
        scope: {
            loading: "@?",
            classes: "@?"
        },
        transclude: !0,
        template: '<div class="widget-body" ng-class="classes"><rd-loading ng-show="loading"></rd-loading><div ng-hide="loading" class="widget-content" ng-transclude></div></div>',
        restrict: "E"
    };
    return d
}
angular.module("red23-site").directive("rdWidgetBody", rdWidgetBody);

function rdWidgetFooter() {
    var e = {
        requires: "^rdWidget",
        transclude: !0,
        template: '<div class="widget-footer" ng-transclude></div>',
        restrict: "E"
    };
    return e
}
angular.module("red23-site").directive("rdWidgetFooter", rdWidgetFooter);

function rdWidgetTitle() {
    var e = {
        requires: "^rdWidget",
        scope: {
            title: "@",
            icon: "@"
        },
        transclude: !0,
        template: '<div class="widget-header"><i class="fa" ng-class="icon"></i> {{title}} <div class="pull-right" ng-transclude></div></div>',
        restrict: "E"
    };
    return e
}
angular.module("red23-site").directive("rdWidgetHeader", rdWidgetTitle);

function rdWidget() {
    var d = {
        transclude: !0,
        template: '<div class="widget" ng-transclude></div>',
        restrict: "EA"
    };
    return d
}
angular.module("red23-site").directive("rdWidget", rdWidget);
const findbyUsername = '/api/user/name/'
const notBlank = /^\s*$/;
function checkUsername(httpService) {
    var d = {
        require: 'ngModel',
        restrict: 'EA',
        link: function (scope, element, attr, mCtrl) {
            console.log("starting to validate username...")
            function myValidation(value) {
                console.log("validating username value = > "+value)
                if((!value)||notBlank.test(value)){
                    console.log("username value is blank")
                    return;
                }
                httpService.queryById(findbyUsername, value).then(function (res) {
                    console.log('validating username result=> ' + JSON.stringify(res))
                    var username_status = res['data'];
                    console.log('username status => ' + JSON.stringify(username_status))
                    if (username_status["status"]) {
                        mCtrl.$setValidity('username_status', true);
                    } else {
                        mCtrl.$setValidity('username_status', false);
                    }
                }, function (error) {
                    mCtrl.$setValidity('username_status', false);
                    console.error(error.stack)
                })
                return value;
            }
            mCtrl.$parsers.push(myValidation);
        }
    }
    return d;
}
angular.module("red23-site").directive("usernamecheck", ['httpService', checkUsername]);