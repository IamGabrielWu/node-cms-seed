angular.module('red23-site')
    .controller('frontendMainCtrl', ['$cookieStore', 'httpService', 'USER_API', '$state', frontendMainCtrl]);

function frontendMainCtrl($cookieStore, httpService, USER_API, $state) {
   console.log("this is frontend main")
   var currentUser = $cookieStore.get('currentUser')
    console.log(currentUser)
    if(currentUser==null){
        $state.go('login')
    }
}