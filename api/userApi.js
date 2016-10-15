require('../models/User');
var mongoose = require('mongoose');
var User = mongoose.model('user');
module.exports = {
    create: function (user, res) {
        User.save(function (err, user) {
            if (err) {
                console.error(err.stack)
                return res.send(500, err.stack);
            }
            console.log("saved a user")
            return user;
        })
    },
    delete: function (id, res) {
        console.log('delete user with id => ' + id)
        User.remove({
            _id: id
        }, function (err) {
            if (err) {
                console.error(err.stack)
                return res.send(500, err);
            }
            return {
                message: 'user with id =' + id + " deleted."
            }
        })
    },
    read: function (res) {
        User.find().sort([['createDate', 'descending']]).exec(function (err, users) {
            if (err) {
                console.error(err.stack)
                return res.send(500, err);
            } else {
                return users;
            }
        })
    },
    readById: function (id, res) {
        User.findById(id).exec(function (err, user) {
            if (err) {
                console.error(err.stack)
                return res.send(500, err);
            } else {
                return user;
            }
        })
    },
    update: function (updateUserId, updateUser, res) {
        User.findById(updateUserId, function (err, updateUser) {
            User.update({
                _id: updateUserId
            }, updateUser, function (err) {
                if (err) {
                    console.error(err.stack)
                    return res.send(500, err);
                }
                return updateUser
            })
        })
    }
}