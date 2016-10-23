angular
    .module('red23-site')
    .controller('UserUpdateCtrl', ['httpService', '$stateParams', '$location', '$rootScope',UserUpdateCtrl]);
var findbyId = '/api/user/'
var updateById = '/api/user/'

function UserUpdateCtrl(httpService, $stateParams, $location, $rootScope) {
    var vm = this
    var resetUser;
    console.log("find user with id = " + $stateParams.id)
    httpService.queryById(findbyId, $stateParams.id).then(function (res) {
        console.log(JSON.stringify(res))
        vm.user = res['data'];
        vm.resetUser = angular.copy(res['data'])
    }, function (error) {
        console.error(error.stack)
        var alert = {
            type: 'danger',
            msg: 'error occurred when query user by id!'
        }
        $rootScope.alerts.push(alert)
    })

    this.submit = function () {
        console.log('updating user => ' + JSON.stringify(this.user))
        httpService.update(updateById, this.user).then(function (result) {
            console.log(result)
            if (result.status == 200) {
                console.log('user is updated => ' + JSON.stringify(result))
                $location.path('/')
            } else {
                console.error(err.stack)
                var alert = {
                    type: 'danger',
                    msg: 'error occurred when updating user!'
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