const server = require('./server');

module.exports = {
    db: 'mongodb://localhost:27017/coffeeapp'
 }

 exports.store = async (element) => {
    await element.save();
}