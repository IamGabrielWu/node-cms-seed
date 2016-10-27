angular.module('red23-site')
    .controller('frontendMainCtrl', ['$cookieStore', 'httpService', 'USER_API', '$location', frontendMainCtrl]);

function frontendMainCtrl($cookieStore, httpService, USER_API, $location) {
   console.log("this is frontend main")
}