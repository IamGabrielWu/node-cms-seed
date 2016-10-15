require('../models/User');
var mongoose = require('mongoose');
var User = mongoose.model('user');

mongoose.connect('mongodb://red23site:red23site@ds049198.mlab.com:49198/heroku_3q50q5cr')
var adminUser = new User({
    name: 'node-cms',
    username: 'node-cms',
    password: 'admin',
    role: 'admin',
    email: 'admin@node-cms.com',
    createDate: Date.now
})
User.update({
        username: adminUser.username
    }, {
        $setOnInsert: adminUser
    }, {
        upsert: true
    },
    function (err, numAfected) {
        if (err) {
            console.log(err)
        } else {
            console.log('number of records Affected: ' + JSON.stringify(numAfected))
        }
    }
)