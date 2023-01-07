const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

// search and sorting function
router.get('/', (req, res) => {
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
      res.render('search', { restaurantsData: filterRestaurantsData, keywords })
    })
    .catch(err => console.log(err))
})

module.exports = router