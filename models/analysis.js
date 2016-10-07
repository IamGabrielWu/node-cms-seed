var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Analysis = new keystone.List('Analysis',{
	autokey: { path: 'analysis_path', from: 'analysis_name', unique: true },
    map: { name: 'analysis_name' },
});
console.log("starting to register analysis model...")
Analysis.register();