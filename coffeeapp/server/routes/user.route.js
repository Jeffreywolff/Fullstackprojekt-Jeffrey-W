const express = require('express');
const userRoute = express.Router();

// User model
let UserModel = require('../newUser');

userRoute.route('/').get((req, res) => {
    UserModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

 userRoute.route('/create-user').post((req, res, next) => {
    UserModel.create(req.body.username, req.body.email, req.body.password, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

userRoute.route('/edit-user/:id').get((req, res) => {
    UserModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update User
userRoute.route('/update-user/:id').post((req, res, next) => {
    UserModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Student successfully updated!')
    }
  })
})

// Delete User
userRoute.route('/delete-user/:id').delete((req, res, next) => {
    UserModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = userRoute;