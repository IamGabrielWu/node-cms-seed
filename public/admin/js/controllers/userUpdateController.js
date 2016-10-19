/**
 * User Controller
 */

angular
    .module('red23-site')
    .controller('UserUpdateCtrl', ['httpService', UserUpdateCtrl]);
const findbyId='/api/user/'
function UserUpdateCtrl(httpService,id) {
    var vm = this
    console.log("find user with id = "+id)
    httpService.query(findbyId+id).then(function (res) {
        vm.users = res['data']
    }, function (error) {
        console.error(error.stack)
    })
}