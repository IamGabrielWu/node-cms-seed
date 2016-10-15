exports.backend_authorize = function (req, res, next) {
    if (!req.session.username&& req.path !='/login') {
        res.redirect('/cms/login');
    } else {
        next();
    }
}
exports.frontend_authorize = function (req, res, next) {
    if (!req.session.username&& req.path !='/login') {
        res.redirect('/login');
    } else {
        next();
    }
}