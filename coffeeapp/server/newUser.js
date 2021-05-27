const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let newUserSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
}, {
    collection: 'users'
})

const User = mongoose.model('users', newUserSchema);

exports.newUser = (username, email, password) => {

    var newUser = new User({
        username: username,
        email: email,
        password: password,
     
    });

    return newUser;
}



exports.findUser = async () => {
    const findUser = await User.find({});
    return findUser;
}
