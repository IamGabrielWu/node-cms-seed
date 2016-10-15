/*
 * GET login page.
 */

exports.index = function(req, res) {
	var message=req.flash();
	console.log(message)
	if(!(Object.keys(message).length === 0 && message.constructor === Object)){
		res.render('login',{message:message});
	}
    res.render('login',{message:null});
};
exports.redirect = function(req, res) {
	res.redirect('/cms/login')
};
