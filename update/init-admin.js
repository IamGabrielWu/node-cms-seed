var mongoose = require('mongoose');
var User = mongoose.model('user');

var adminUser = new User({
    name: 'node-cms',
    username: 'node-cms',
    password: 'admin',
    role: 'admin',
    email: 'admin@node-cms.com',
    createDate: Date.now,
    updateDate: Date.now
})
console.log("initing admin user => " + JSON.stringify(adminUser))
User.update({
        username: adminUser.username
    }, {
        $setOnInsert: adminUser
    }, {
        upsert: true
    },
    function (err, numAfected) {
        if (err) {
            console.error(err.stack)
        } else {
            console.log('number of records Affected: ' + JSON.stringify(numAfected))
        }
    }
)