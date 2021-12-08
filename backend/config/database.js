const mongoose = require('mongoose');

const remoteHost = 'localHost';

const remoteHost = '  @cluster0.t3bvt.mongodb.net';
const remoteUser = 'HRADMIN';
const remotePass = 'admin';
const remoteDb = 'hr';

exports.mongoConnect = () => {
  // const mongoStringConnection = `${host}`;
  const mongoStringConnection = `${host}`;

  mongoose.connect(mongoStringConnection);
  mongoose.Promise = global.Promise;
  const dbConnection = mongoose.connection;
  dbConnection.on(
    'error',
    console.error.bind(console, 'Mongodb connection error')
  );
};

// const mongoose = require("mongoose");
// const host = "localhost"
// const port = "27017"
// const db = "hr"

// exports.mongoConnect = () => {
//     const mongoStringConnection = `mongodb://${host}:${port}/${db}`
//     mongoose.connect(mongoStringConnection);
//         mongoose.Promise = global.Promise;
//         const dbConnection = mongoose.connection;
//         dbConnection.on("error", console.error.bind(console,"Mongodb connection error"))
// }
