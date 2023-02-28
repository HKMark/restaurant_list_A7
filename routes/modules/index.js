const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

// sorting 
router.get('/', (req, res) => {
  const userId = req.user._id
  Restaurant.find({ userId })
    .lean()
    .then(restaurantsData => res.render('index', { restaurantsData }))
    .catch(error => console.error(error))
})

router.get('/name', (req, res) => {
  const userId = req.user._id
  Restaurant.find({ userId })
    .lean()
    .sort({ name: 'asc' })
    .then(restaurantsData => res.render('index', { restaurantsData }))
    .catch(error => console.error(error))
})

router.get('/-name', (req, res) => {
  const userId = req.user._id
  Restaurant.find({ userId })
    .lean()
    .sort({ name: 'desc' })
    .then(restaurantsData => res.render('index', { restaurantsData }))
    .catch(error => console.error(error))
})

router.get('/category', (req, res) => {
  const userId = req.user._id
  Restaurant.find({ userId })
    .lean()
    .sort({ category: 'asc' })
    .then(restaurantsData => res.render('index', { restaurantsData }))
    .catch(error => console.error(error))
})

router.get('/location', (req, res) => {
  const userId = req.user._id
  Restaurant.find({ userId })
    .lean()
    .sort({ category: 'asc' })
    .then(restaurantsData => res.render('index', { restaurantsData }))
    .catch(error => console.error(error))
})

router.get('/rating', (req, res) => {
  const userId = req.user._id
  Restaurant.find({ userId })
    .lean()
    .sort({ rating: 'desc' })
    .then(restaurantsData => res.render('index', { restaurantsData }))
    .catch(error => console.error(error))
})

module.exports = router