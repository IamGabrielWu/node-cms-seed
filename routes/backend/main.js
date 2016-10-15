/*
 * GET home page.
 */

exports.index = function(req, res) {
    console.log('main index')
    res.render('backend/index');
};

exports.partials = function(req, res) {
    var name = req.params.name;
    res.render('backend/index' + name);
};

/*
 * GET login page.
 */

exports.login = function(req, res) {
    res.render('backend/login');
};
