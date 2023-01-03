const mongoose = require('mongoose')
const Restaurant = require('../restaurant')
const restaurantsData = require("../../restaurant.json").results

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGODB_URI,
{ useNewUrlParser: true, useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
  Restaurant.create(restaurantsData)
    .then(()=> {
      console.log('restaurantSeeder done!')
      db.close()
    })
    .catch (err => console.log(err))
})

