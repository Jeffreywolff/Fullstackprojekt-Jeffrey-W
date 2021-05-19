// post.model.js

const mongoose = require('mongoose');

// Define collection and schema for Post
let UserPost = new mongoose.Schema ({
  email: String,
  username: String,
  password: String,
  
  collection: 'posts'
})

const User = mongoose.model('User', UserPost);

exports.newUser = (email, username, password) => {
  
  var user = new User({
    email: email,
    username: username,
    password: password,
  });
  
  return user; 
}



exports.findUser = async () => {
  const userFound = await User.find({});
  return userFound;
}
