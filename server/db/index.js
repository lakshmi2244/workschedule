const mongoose = require('mongoose')

const MONGO_LOCAL_URL = "mongodb+srv://prasanna:prasanna2204@cluster0.nvxqdgw.mongodb.net/thirddb?retryWrites=true&w=majority"
mongoose.connect(MONGO_LOCAL_URL,{useUnifiedTopology: true,    dbName: "thirddb",
    useCreateIndex: true, useNewUrlParser: true})
const db = mongoose.connection
db.on('error', err => {
  console.log(`There was an error connecting to the database: ${err}`)
})
db.once('open', () => {
  console.log(
    `You have successfully connected to your mongo database:`
  )
})

module.exports = db
