const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect('mongodb://localhost:27017/test', () => {
      /* Drop the DB */
      //require('./models/user.model').collection.drop();
      //mongoose.connection.db.dropDatabase();
    });
}

module.exports = { connect };