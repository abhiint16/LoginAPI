var mongoose= require('mongoose');

// module.exports ={
//     url: 'mongodb://abhiint:gcf123456789@ds153824.mlab.com:53824/first_db',
// };

module.exports= {
    mongoURI : "mongodb://abhiint:gcf123456789@ds153824.mlab.com:53824/first_db",
    options:{key:value}
  }

//   mongoose.connect(MONGO_URL, {
//     auth: {
//       user: MONGO_DB_USER,
//       password: MONGO_DB_PASSWORD
//     },
//     { useNewUrlParser: true }
//   });