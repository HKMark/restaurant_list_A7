const db = require('../../config/mongoose')
const Restaurant = require('../restaurant')
const restaurantsData = require("../../restaurant.json").results

db.once('open', () => {
  console.log('mongodb connected!')
  Restaurant.create(restaurantsData)
    .then(()=> {
      console.log('restaurantSeeder done!')
      db.close()
    })
    .catch (err => console.log(err))
})

