/**
 * Module dependencies
 */

var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler'),
    express_session = require('express-session'),
    cookie_parser = require('cookie-parser'),
    //authentication
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    flash = require('connect-flash'),
    //mongoose to mongo database

    morgan = require('morgan'),
    main = require('./routes/main'),
    api = require('./routes/api'),
    login = require('./routes/login'),
    http = require('http'),
    path = require('path'),
    frontmain=require('./routes/front-main');


//***configuration
var app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookie_parser())
app.use(express_session({
    secret: 'a4f8071f-c873-4447-8ee2',
    cookie: {
        maxAge: 2628000000
    }
}));
app.use(flash());
var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    app.use(errorHandler());
}

if (env === 'production') {
    // TODO
}
//***end configuration

//***adding models
require('./models/User');
require('./update')
    //***end adding models

//***authenticate
require('./authenticate')
    //***end authenticate

//***filter
var filter = require('./filter')
    //***end filter
    /**
     * Routes
     */
//*** front pages routing
app.get('/',frontmain.index)
//*** end front pages routing

const adminUrl = 'cms' //TODO will need to set it here to change views and url within views
    // serve index and view partials
//***filter
app.use('/' + adminUrl, filter.authorize);
//***end filter
app.get('/' + adminUrl + '/login', login.index);
app.post('/' + adminUrl + '/login',
    passport.authenticate('local', {
        successRedirect: '/' + adminUrl,
        failureRedirect: '/' + adminUrl + '/login',
        failureFlash: true
    })
);
app.get('/' + adminUrl, main.index);
// redirect all others to the index (HTML5 history)
// app.get('*', login.redirect);
app.use(function (req, res, next) {
    res.status(404);
    res.render('404');
})
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
})

/**
 * End Routes
 */
/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});