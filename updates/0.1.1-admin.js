var keystone = require('keystone'),
    User = keystone.list('User'),
    Project = keystone.list('Project'),
    Stock = keystone.list('Stock');

 
exports = module.exports = function(done) {
    
    new User.model({
        name: { first: 'admin', last: 'User' },
        email: 'admin@163.com',
        password: 'admin',
        canAccessKeystone: true
    }).save(done);
    
};