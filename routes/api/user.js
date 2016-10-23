var express = require('express');
var router = express.Router();
var userApi = require('../../api/userApi')
var mongoose = require('mongoose');
var User = mongoose.model('user');


var sendData = function (data) {
    res.json(data)
}
var sendError = function (error) {
    res.send(500, error.stack)
}
router.route('/api/user/:id').get(function (req, res, next) {
    var userId = req.params.id;
    userApi.readById(userId).then(function (data) {
        res.json(data)
    }, function (error) {
        res.send(500, error.stack)
    })
})
router.route('/api/user/name/:username').get(function (req, res, next) {
    var username = req.params.username;
    userApi.readByUsername(username).then(function (data) {
        if(data instanceof Array && data.length==0){
            res.json({message:'this username is not occupied',data:data,status:true})
        }else{
            res.json({message:'this username is occupied',data:data,status:false})
        }
    }, function (error) {
        res.send(500, error.stack)
    })
})
router.route('/api/user').get(function (req, res, next) {
    userApi.read().then(function (data) {
        res.json(data)
    }, function (error) {
        res.send(500, error.stack)
    })
})
router.route('/api/user').post(function (req, res, next) {
    var newuser = req.body
    var user = new User()
    user.name = newuser.name
    user.username = newuser.username
    user.password = newuser.password
    user.role = newuser.role
    user.email = newuser.email
    user.createDate = new Date()
    user.updateDate = new Date()
    userApi.create(user).then(function (data) {
        res.json(data)
    }, function (error) {
        res.send(500, error.stack)
    })
})
router.route('/api/user').put(function (req, res, next) {
    if (req.body._id == null || req.body._id == '') {
        res.send(500, error.stack)
    }
    var updateUserId = req.body._id;
    updateUser = req.body
    updateUser['updateDate'] = new Date()
    console.log(updateUser)
    userApi.update(updateUserId, updateUser).then(function (data) {
        res.json(data)
    }, function (error) {
        res.send(500, error.stack)
    })
})
router.route('/api/user/:id').delete(function (req, res, next) {
    var userId = req.params.id
    console.log('starting to delete user _id = ' + userId)
    userApi.delete(userId).then(function (data) {
        res.json(data)
    }, function (error) {
        res.send(500, error.stack)
    })
})
module.exports = router;