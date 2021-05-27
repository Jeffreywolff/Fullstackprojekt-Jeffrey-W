const server = require('./server');

module.exports = {
    db: "mongodb://localhost:27017/coffeeapp",
    store: async (element) => {
        await element.save();
    }
}