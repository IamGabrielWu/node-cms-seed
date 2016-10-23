/**
 * User Controller
 */

angular
    .module('red23-site')
    .controller('UserNewCtrl', ['httpService', '$location', '$rootScope', UserNewCtrl]);

var createUser = '/api/user/'

function UserNewCtrl(httpService, $location, $rootScope) {
    var vm = this
    var resetUser = {};

    this.submit = function () {
        console.log('creating user => ' + JSON.stringify(this.user))
        httpService.save(createUser, this.user).then(function (result) {
            console.log(result)
            if (result.status == 200) {
                console.log('user is created => ' + JSON.stringify(result))
                $location.path('/')
            } else {
                console.error(err.stack)
                var alert = {
                    type: 'danger',
                    msg: 'error when creating user'
                }
                $rootScope.alerts.push(alert)
            }
        })
    }
    this.reset = function () {
        console.log('reseting user to be => ' + JSON.stringify(vm.resetUser))
        vm.user = angular.copy(vm.resetUser);
    }
}