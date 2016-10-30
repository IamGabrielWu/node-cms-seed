angular.module('red23-site')
    .controller('frontendLoginCtrl', ['$cookieStore', 'httpService', 'USER_API', '$state', frontendLoginCtrl]);

function frontendLoginCtrl($cookieStore, httpService, USER_API, $state) {
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
            $cookieStore.put('currentUser', user)
            $state.go('frontendmain')
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