var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Project = new keystone.List('Project',{
	autokey: { path: 'project_name_path', from: 'project_name', unique: true },
    map: { name: 'project_name' },
    defaultSort: '-createdAt'
});
 


Project.add({
    project_name: { type: Types.Text, required: true, index: true },
    project_name_path: { type: Types.Text, initial: true, required: true, index: true },
    area: { type: Types.Text, initial: true },
    state: { type: Types.Text, initial: true },
    stock_list:{
    	type:Types.Relationship,
    	ref: 'Stock',
    }
});
 
Project.register();