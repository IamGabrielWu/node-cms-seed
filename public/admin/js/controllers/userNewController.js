/**
 * User Controller
 */

angular
    .module('red23-site')
    .controller('UserNewCtrl', ['httpService', '$location',UserNewCtrl]);

const createUser = '/api/user/'

function UserNewCtrl(httpService,$location) {
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
            }
        })
    }
    this.reset = function () {
        console.log('reseting user to be => ' + JSON.stringify(vm.resetUser))
        vm.user = angular.copy(vm.resetUser);
    }
}