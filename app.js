/**
 * Module dependencies
 */

var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler'),
    express_session = require('express-session'),
    cookie_parser = require('cookie-parser'),
    //mongoose to mongo database

    morgan = require('morgan'),
    http = require('http'),
    path = require('path'),
    backend_main = require('./routes/backend/main'),
    backend_login = require('./routes/backend/login'),
    frontend_main = require('./routes/frontend/main'),
    frontend_login = require('./routes/frontend/login');
var user_routes = require('./routes/api/user');


//***database
    //***models
require('./models/User');
    //***end models
var mongoose = require('mongoose');
var User = mongoose.model('user');
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://red23site:red23site@ds049198.mlab.com:49198/heroku_3q50q5cr')
mongoose.connect('mongodb://localhost/red23-site')
//***end database

//***init data
var initData=require('./update');
//***end init data

//***configuration
var app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookie_parser())
app.use(express_session({
    secret: 'a4f8071f-c873-4447-8ee2',
    cookie: {
        maxAge: 2628000000
    }
}));
var env = process.env.NODE_ENV || 'development';


if (env === 'development') {
    app.use(errorHandler());
}

if (env === 'production') {
    // TODO
}

//***end configuration

//***filter
var filter = require('./filter')
    //***end filter

//***api routing
//app.use(user_routes)
//***end api routing

//*** front pages routing
//app.use('/', filter.frontend_authorize);
app.get('/',frontend_main.index)
//app.get('/#/login', frontend_login.index);
app.post('/login',frontend_login.auth);
//app.get('/', frontend_main.index)
    //*** end front pages routing


//***backend pages routing
//const adminUrl = 'cms' //TODO will need to set it here to change views and url within views
    // serve index and view partials
    //***filter
//app.use('/' + adminUrl, filter.backend_authorize);
//***end filter
//app.get('/' + adminUrl + '/login', backend_login.index);
//app.post('/' + adminUrl + '/login',backend_login.auth);
//app.get('/' + adminUrl, backend_main.index);
// redirect all others to the index (HTML5 history)
// app.get('*', login.redirect);
app.use(function (req, res, next) {
    res.status(404);
    res.render('404');
})
app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(500);
        res.render('500', {
            message: err.stack
        });
    })
    //***end backend pages routing
    /**
     * Start Server
     */

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});