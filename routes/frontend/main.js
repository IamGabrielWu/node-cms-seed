/*
 * GET home page.
 */

exports.index = function(req, res) {
    res.render('frontend/index');
};

exports.partials = function(req, res) {
    var name = req.params.name;
    res.render('frontend/index/' + name);
};
