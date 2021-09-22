const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(`${process.env.MONGODB_SKATE}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database' + err) }
)

module.exports = mongoose
