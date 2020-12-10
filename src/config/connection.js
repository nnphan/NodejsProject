const mongoose = require('mongoose');
const debug = require('debug')('wed:conection');
require('dotenv').config();

async function connect() {
  mongoose.set('useUnifiedTopology', true);
  if (process.env.NODE_ENV === 'development') {
    debug('Connect to dev database');
    mongoose.connect(process.env.url1, { useNewUrlParser: true, useCreateIndex: true});
    console.log('db1 dev');
  } else if (process.env.NODE_ENV === 'production') {
    debug('Connect to prod database');
    mongoose.connect(process.env.url2, { useNewUrlParser: true, useCreateIndex: true });
    console.log('db2 prod');
  } else {
    debug('Connect to test database');
    mongoose.connect(process.env.url3, { useNewUrlParser: true, useCreateIndex: true });
    console.log('db3 test');
  }
}

module.exports = { connect };