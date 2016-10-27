/*
 * GET login page.
 */
//***backend routing
exports.index = function(req, res) {
	var message=req.flash();
	console.log(message)
	if(!(Object.keys(message).length === 0 && message.constructor === Object)){
		res.render('backend/backend-login',{message:message});
	}
    res.render('backend/backend-login',{message:null});
};
exports.redirect = function(req, res) {
	res.redirect('/cms/login')
};
var notBlank = /^\s*$/
exports.auth = function (req, res) {
    var loginUser = req.body
    console.log(JSON.stringify(loginUser) + ' authenticating...')
    if (loginUser == null || !loginUser.username || !loginUser.password || notBlank.test(loginUser.username) || notBlank.test(loginUser.password)) {
        res.status(401).json({
            status: 401,
            message: 'input is invalid',
            data: null
        })
    }

    User.findOne({
        username: loginUser.username
    }, function (err, result) {
        if (err) {
            console.error(err)
            res.status(500).json({
                status: 500,
                message: 'database error',
                data: null
            });
            return
        }
        if (result == null) {
            res.status(401).json({
                status: 401,
                message: 'user not found',
                data: null
            })
            return
        }
        console.log("user found in database => " + JSON.stringify(result))
        if (result.username == loginUser.username && result.password == loginUser.password) {
            console.log(result.username + ' login success')
            req.session.username = result.username;
            req.session.role = result.role;
            req.session.user = result;
            res.status(200).json({
                status: 200,
                message: 'login success',
                data: result
            })
            return
        } else {
            console.error(loginUser.username + ' login failure')
            res.status(401).json({
                status: 401,
                message: 'username or password incorrect',
                data: null
            })
            return
        }
    })
}
//***end backend routing
