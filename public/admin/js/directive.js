function checkUsername(httpService,USER_API,REGEX) {
    var d = {
        require: 'ngModel',
        restrict: 'EA',
        link: function (scope, element, attr, mCtrl) {
            console.log("starting to validate username...")
            function myValidation(value) {
                console.log("validating username value = > "+value)
                if((!value)||REGEX.notBlank.test(value)){
                    console.log("username value is blank")
                    return;
                }
                httpService.queryById(USER_API.findbyUsername, value).then(function (res) {
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
angular.module("red23-site").directive("usernamecheck", ['httpService','USER_API','REGEX', checkUsername]);