/**
 * User Controller
 */

angular
    .module('red23-site')
    .controller('UserListCtrl', ['httpService', '$uibModal', UserListCtrl]);
var findall = '/api/user'
var findbyId = '/api/user/'

function UserListCtrl(httpService, $uibModal) {
    var vm = this

    this.alerts = []

    httpService.query(findall).then(function (res) {
        vm.users = res['data']
    }, function (error) {
        console.error(error.stack)
    })
    this.openDeleteModal = function (id) {
        console.log('open delete modal for userid = ' + id)
        httpService.queryById(findbyId, id).then(function (res) {
            console.log(JSON.stringify(res))
            var user = res['data'];
            $uibModal.open({
                templateUrl: 'admin/views/userdelete.html',
                controller: 'UserDeleteCtrl',
                controllerAs: 'vm_userdelete',
                size: 'lg',
                backdrop:'static',
                resolve: {
                    user: user
                }
            });
        }, function (error) {
            console.error(error.stack)
            var alert = {
                type: 'danger',
                msg: 'Oh snap! error occurred when deleting user!'
            }
            alerts.push(alert)
        })
    }
    this.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };
}