const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

// sorting 
router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurantsData => res.render('index', { restaurantsData }))
    .catch(error => console.error(error))
})

router.get('/name', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ name: 'asc' })
    .then(restaurantsData => res.render('index', { restaurantsData }))
    .catch(error => console.error(error))
})

router.get('/-name', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ name: 'desc' })
    .then(restaurantsData => res.render('index', { restaurantsData }))
    .catch(error => console.error(error))
})

router.get('/category', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ category: 'asc' })
    .then(restaurantsData => res.render('index', { restaurantsData }))
    .catch(error => console.error(error))
})

router.get('/location', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ category: 'asc' })
    .then(restaurantsData => res.render('index', { restaurantsData }))
    .catch(error => console.error(error))
})

router.get('/rating', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ rating: 'desc' })
    .then(restaurantsData => res.render('index', { restaurantsData }))
    .catch(error => console.error(error))
})

// // search function
// router.get('/search', (req, res) => {
//   if (!req.query.keywords) {
//     return res.redirect("/")
//   }

//   const keywords = req.query.keywords
//   const keyword = req.query.keywords.trim().toLowerCase()
  
//   Restaurant.find({})
//     .lean()
//     .then(restaurantsData => {
//       const filterRestaurantsData = restaurantsData.filter(
//         data =>
//           data.name.toLowerCase().includes(keyword) ||
//           data.category.toLowerCase().includes(keyword)
//       )
//       if (filterRestaurantsData.length === 0) {
//         res.render('no_result', { restaurantsData: filterRestaurantsData, keywords })
//         return
//       }
//       res.render('index', { restaurantsData: filterRestaurantsData, keywords })
//     })
//     .catch(err => console.log(err))
// })

module.exports = router