var keystone = require('keystone');
keystone.init({
  
  'name': 'metinvest admin',
  'brand':'metinvest_site',
  // 'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': ['public'],
  
  'views': 'templates/views',
  'view engine': 'jade',
  
  'auto update': true,
  // 'mongo': 'mongodb://met_mongo:met_mongo@ds033106.mlab.com:33106/heroku_5xqz1jwb',
  'mongo': 'mongodb://localhost/metinvest_site',
  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': '(your secret here)'
  
});
//TODO add customized sign in page and register page
//keystone.set('signin url', '');
console.log('running enviroment: '+keystone.get('env'))
keystone.set('cloudinary config', 'cloudinary://973516845412744:wXOsSpVEYRcSUGitN01S9ozZmP0@dtgq8wkwo' );
keystone.set('signin logo', ['../images/logo.png', 200, 200]);
require('./models');

keystone.set('nav', {
    'users': 'User',
    'business': ['Project', 'Stock'],
    'analysis':'Analysis'
});
 
keystone.set('routes', require('./routes'));

keystone.start();