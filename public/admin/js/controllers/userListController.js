/**
 * User Controller
 */

angular
    .module('red23-site')
    .controller('UserListCtrl', ['httpService', UserListCtrl]);
const findall='/api/user'
function UserListCtrl(httpService) {
    var vm = this
    httpService.query(findall).then(function (res) {
        vm.users = res['data']
    }, function (error) {
        console.error(error.stack)
    })
    
    $(document).ready(function(){
            $('#usersTable').DataTable();
    });
}