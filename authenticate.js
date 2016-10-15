    //authentication
    var passport = require('passport'),
        LocalStrategy = require('passport-local').Strategy,
        flash = require('connect-flash'),
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
                    return done(null, false, {
                        message: 'Database Error'
                    });
                }
                if (!user) {
                    return done(null, false, {
                        message: 'User is not permitted'
                    });
                }
                // console.log("user found in database => "+JSON.stringify(user))
                if (user.username == username && user.password == password) {
                    console.log(username + ' login success')
                    req.session.username = user.username;
                    req.session.user = user;
                    return done(null, username);
                } else {
                    console.log(username + ' login failure')
                    return done(null, false, {
                        message: 'Incorrect username or password'
                    });
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