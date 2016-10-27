//exports.backend_authorize = function (req, res, next) {
//    if (!req.session.username&& req.session.role=='admin' && req.path !='/login') {
//        res.redirect('/cms/login');
//    } else {
//        next();
//    }
//}
var i=0
exports.frontend_authorize = function (req, res, next) {
    //if user is not in session, ask to login
    i++
    console.log(req.url+" => "+i)
    if(!req.session.username&&req.absUrl!='/#/login'){
        res.redirect('#/login')
    }else{
        console.log('next => '+req.url)
        next()
    }
}