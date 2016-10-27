angular.module('red23-site')
    .factory('authInterceptor', ['$cookieStore', '$location','REGEX', authCheck]);

function authCheck($cookieStore, $location,REGEX) {
    var authInterceptor = {
        authCheck: function ($cookieStore, $location) {
            var user = $cookieStore.get('currentUser')
            console.log(user)
            var requestUrl=$location.url()
            console.log(requestUrl)
            //it's for backend user authentication
            if(REGEX.backendUrl.test(requestUrl)){
                if(!user){
                    $location.path('/cms/login')
                }else{
                    console.log('backend user exists')
                }
            }
            //it's for frontend user authentication
            if (!user) {
                $location.path('/login')
            } else {
                console.log('user exists')
            }
        }
    }
    return authInterceptor;
}
angular.module('red23-site').config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
}]);