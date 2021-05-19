// DB.js
const server = require('./server');
const mongoose = require('mongoose');

module.exports = {

    DB: 'mongodb://localhost:27017/ChatTest'

}

mongoose.connect('mongodb://localhost/Coffee', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

exports.store = async (element) => {
    await element.save();
}
