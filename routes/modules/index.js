const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

// routes setting
router.get('/', (req, res) => {
  Restaurant.find() //get all the data from the Restaurant model
    .lean() //return data from the mongoose model to JavaScript objects
    .then(restaurantsData => res.render('index', { restaurantsData }))
    .catch(error => console.error(error))
})

// search function
router.get('/search', (req, res) => {
  if (!req.query.keywords) {
    return res.redirect("/")
  }

  const keywords = req.query.keywords
  const keyword = req.query.keywords.trim().toLowerCase()
  
  Restaurant.find({})
    .lean()
    .then(restaurantsData => {
      const filterRestaurantsData = restaurantsData.filter(
        data =>
          data.name.toLowerCase().includes(keyword) ||
          data.category.toLowerCase().includes(keyword)
      )
      if (filterRestaurantsData.length === 0) {
        res.render('no_result', { restaurantsData: filterRestaurantsData, keywords })
        return
      }
      res.render('index', { restaurantsData: filterRestaurantsData, keywords })
    })
    .catch(err => console.log(err))
})

module.exports = router