var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Stock = new keystone.List('Stock',{
	autokey: { path: 'stock_name_path', from: 'stock_name', unique: true },
    map: { name: 'stock_name' },
    defaultSort: '-createdAt'
});
//TODO confirm with Leo below property require or not
Stock.add({
	stock_name:{type:Types.Text,index: true },
	stock_path:{type:Types.Text,index: true},
	price:{type:Types.Number},
	car_parking:{type:Types.Number},
	bedrooms:{type:Types.Number},
	bathrooms:{type:Types.Number},
	landarea:{type:Types.Number},
	housearea:{type:Types.Number},
	featured:{type:Types.Text},
	exclusive:{type:Types.Text},
	new:{type:Types.Text},
	nras:{type:Types.Text},
	lot_address:{type:Types.Text},
	project_estate:{type:Types.Text},
	area:{type:Types.Text},
	state:{type:Types.Text},
	property_type:{type:Types.Text},
	contract_type:{type:Types.Text},
})
Stock.register();