
//***front routing
exports.index = function(req, res) {
	var message=req.flash();
	console.log(message)
	if(!(Object.keys(message).length === 0 && message.constructor === Object)){
		res.render('frontend/login',{message:message});
	}
    res.render('frontend/login',{message:null});
};