var express = require('express');
var router = express.Router();
var userApi = require('../../api/userApi')


router.route('/api/user/:id').get(function (req, res, next) {
    var userId = req.params.id;
    var user = userApi.readById(userId, res)
    res.json(user)
})
router.route('/api/user').get(function (req, res, next) {
    var user = userApi.read(res)
    res.json(user)
})
router.route('/api/user').post(function (req, res, next) {
    var user = new User()
    user.name = req.user.name
    user.username = req.user.username
    user.password = req.user.password
    user.role = req.user.role
    user.email = req.user.email
    user.createDate = Date.now
    var successSaved = userApi.create(user, res)

    res.json(successSaved)
})
router.route('/api/user').put(function (req, res, next) {
    var updateUser = req.params.user;
    var updateUserId = req.params.user._id;
    updateUser.updateDate = Date.now
    console.log("updateById  " + updateUserId)
    var successUpdated = userApi.update(updateUserId, updateUser, res)
    res.json(successUpdated)
})
router.route('/api/user/:id').delete(function (req, res, next) {
    var userId = req.params.user._id
        var username = req.params.user.username
        console.log('starting to delete username = '+username+", id="+userId)
        var successDeleted=userApi.delete(userId,res);
    res.json(successDeleted)
})
module.exports = router;