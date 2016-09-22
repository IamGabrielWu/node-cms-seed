var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Project = new keystone.List('Project',{
	autokey: { path: 'project_path', from: 'project_name', unique: true },
    map: { name: 'project_name' },
    defaultSort: '-createdAt'
});
 
Project.add({
    project_name: { type: Types.Text,require:true, index: true },
    project_path: { type: Types.Text,require:true,index: true },
    project_image: {type:Types.CloudinaryImage,require:true},
    area: {type: Types.Text},
    state: { type: Types.Text},
    stock_list:{
    	type:Types.Relationship,
    	ref: 'Stock',
    }
});
console.log("starting to register project model...")
Project.register();