angular.module('red23-site')
    .controller('backendLoginCtrl', ['$cookieStore', 'httpService', 'USER_API', '$state', backendLoginCtrl]);

function backendLoginCtrl($cookieStore, httpService, USER_API, $state) {
    var vm=this
    this.credential = {}
    this.loginError = null
    this.login = function () {
        var user = {
            username: vm.credential.username,
            password: vm.credential.password
        }
        console.log("login user => " + JSON.stringify(user))
        httpService.save(USER_API.auth_login, user).then(function (res) {
            vm.loginError=null
            console.log(JSON.stringify(res)) 
            if(res['data']['data'].role=='admin'){
                $cookieStore.put('currentUser', user)
                $state.go('backendmain.listUser')
            }else{
                $cookieStore.remove('currentUser')
                vm.loginError = {
                    status: 401,
                    error_desc: 'the user is not admin',
                    error_stack: 'this user is not admin'
                }
            }
        }, function (error) {
            console.error(error)
            $cookieStore.remove('currentUser')
            vm.loginError = {
                status: 401,
                error_desc: 'failure to login',
                error_stack: error.response.message
            }
        })
    }
}