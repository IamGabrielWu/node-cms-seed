var keystone = require('keystone');
keystone.init({
  
  'name': 'mysite',
  
  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': ['public'],
  
  'views': 'templates/views',
  'view engine': 'jade',
  
  'auto update': true,
  'mongo': 'mongodb://met_mongo:met_mongo@ds033106.mlab.com:33106/heroku_5xqz1jwb',
  // 'mongo': 'mongodb://localhost/metinvest_site',
  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': '(your secret here)'
  
});
 
require('./models');

keystone.set('nav', {
    'users': 'users',
    'business': ['projects', 'stocks']
});
 
keystone.set('routes', require('./routes'));
 
keystone.start();