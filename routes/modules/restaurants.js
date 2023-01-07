const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

// page of add restaurant
router.get('/new', (req, res) => {
  return res.render('new')
})

// add restaurant
router.post('/', (req, res) => {
  return Restaurant.create(req.body)
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

// restaurant details
router.get('/:restaurantId', (req, res) => {
  const { restaurantId } = req.params
  return Restaurant.findById(restaurantId)
    .lean()
    .then(restaurantsData => res.render('detail', { restaurantsData }))
    .catch(err => console.log(err))
})

// page of edit restaurant
router.get("/:restaurantId/edit", (req, res) => {
  const { restaurantId } = req.params
  return Restaurant.findById(restaurantId)
    .lean()
    .then(restaurantsData => res.render("edit", { restaurantsData }))
    .catch(err => console.log(err))
})

// edit restaurant
router.put("/:restaurantId", (req, res) => {
  const { restaurantId } = req.params
  const name = req.body.name
  const category = req.body.category
  const image = req.body.image
  const location = req.body.location
  const phone = req.body.phone
  const google_map = req.body.google_map
  const rating = req.body.rating
  const description = req.body.description
  return Restaurant.findById(restaurantId)
    .then(restaurantsData => {
      restaurantsData.name = name
      restaurantsData.category = category
      restaurantsData.image = image
      restaurantsData.location = location
      restaurantsData.phone = phone
      restaurantsData.google_map = google_map
      restaurantsData.rating = rating
      restaurantsData.description = description
      return restaurantsData.save()
    })
    .then(() => res.redirect(`/restaurants/${restaurantId}`))
    .catch(err => console.log(err))
})

// delete restaurant
router.delete("/:restaurantId", (req, res) => {
  const { restaurantId } = req.params
  return Restaurant.findById(restaurantId)
    .then(restaurantsData => restaurantsData.remove())
    .then(() => res.redirect("/"))
    .catch(err => console.log(err))
})

module.exports = router