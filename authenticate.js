    //authentication
    var passport = require('passport'),
        LocalStrategy = require('passport-local').Strategy,
        User = require('./models/User');
    // define strategy
    passport.use(new LocalStrategy({
            passReqToCallback: true
        },
        function (req, username, password, done) {
            console.log(username + ' authenticating...')
            User.findOne({
                username: username
            }, function (err, user) {
                if (err) {
                    console.error(err)
                    return done(null, false, null);
                }
                if (!user) {
                    return done(null, false, null);
                }
                // console.log("user found in database => "+JSON.stringify(user))
                if (user.username == username && user.password == password) {
                    console.log(username + ' login success')
                    req.session.username = user.username;
                    req.session.role=user.role;
                    req.session.user = user;
                    return done(null, user);
                } else {
                    console.log(username + ' login failure')
                    return done(null, false,null);
                }
            })
        }
    ));

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });