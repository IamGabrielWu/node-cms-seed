var mongoose=require('mongoose')
var Schema=mongoose.Schema


var UserSchema=new Schema({
	name:String,
	username:String,
	password:String,
	role:String,
	email:String,
	createDate:{
		type:Date,
		default:Date.now
	},
	updateDate:{
		type:Date,
		default:Date.now
	}
})
//note: keep in mind what the model name set here, for instance, here we set schema name 'post', it reflects in database as posts, table name will automatically add 's' behind the model name
module.exports=mongoose.model('user',UserSchema)