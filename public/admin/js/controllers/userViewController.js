/**
 * User Controller
 */

angular
    .module('red23-site')
    .controller('UserViewCtrl', ['httpService', '$stateParams', '$location',  '$rootScope', UserViewCtrl]);

var findbyId = '/api/user/'
//correct parameter sequences. the arguments below must be in sequence of injected dependencies
function UserViewCtrl(httpService, $stateParams,$location, $rootScope) {
    var vm = this
    console.log("find user with id = " + $stateParams.id)
    httpService.queryById(findbyId, $stateParams.id).then(function (res) {
        console.log(JSON.stringify(res))
        vm.user = res['data'];
    }, function (error) {
        var alert = {
            type: 'danger',
            msg: error.stack
        }
        $rootScope.alerts.push(alert)
        console.error(error.stack)
    })

}