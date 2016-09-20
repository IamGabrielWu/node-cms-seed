var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Project = new keystone.List('Project',{
	autokey: { path: 'project_name_path', from: 'project_name', unique: true },
    map: { name: 'project_name' },
    defaultSort: '-createdAt'
});
 
var Stock = new keystone.List('Stock',{
	autokey: { path: 'stock_name_path', from: 'stock_name', unique: true },
    map: { name: 'stock_name' },
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
//TODO confirm with Leo below property require or not
Stock.add({
	stock_name:{type:Types.Text,required: true, index: true },
	stock_name_path:{type:Types.Text,required: true, index: true},
	price:{type:Types.Number,required: true},
	car_parking:{type:Types.Number},
	bedrooms:{type:Types.Number},
	bathrooms:{type:Types.Number},
	landarea:{type:Types.Number},
	housearea:{type:Types.Number},
	featured:{type:Types.Text},
	exclusive:{type:Types.Text},
	new:{type:Types.Text},
	nras:{type:Types.Text},
	lot_address:{type:Types.Text,required: true},
	project_estate:{type:Types.Text,required: true},
	area:{type:Types.Text,required: true},
	state:{type:Types.Text,required: true,},
	property_type:{type:Types.Text,required: true,},
	contract_type:{type:Types.Text,required: true,},
})
Project.register();
Stock.register();