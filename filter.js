exports.authorize = function (req, res, next) {
    if (!req.session.username&& req.path !='/login') {
        res.redirect('/cms/login');
    } else {
        next();
    }
}