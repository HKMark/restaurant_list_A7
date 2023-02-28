const express = require('express')
const restaurant = require('../../models/restaurant')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

// page of add restaurant
router.get('/new', (req, res) => {
  return res.render('new')
})

// add restaurant
router.post('/', (req, res) => {
  const userId = req.user._id
  const form = req.body
  return Restaurant.create({ ...form, userId })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

// restaurant details
router.get('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Restaurant.findOne({ _id, userId })
    .lean()
    .then(restaurantsData => res.render('detail', { restaurantsData }))
    .catch(err => console.log(err))
})

// page of edit restaurant
router.get("/:id/edit", (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Restaurant.findOne({ _id, userId })
    .lean()
    .then(restaurantsData => res.render("edit", { restaurantsData }))
    .catch(err => console.log(err))
})

// edit restaurant
router.put("/:id", (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  Restaurant.findOneAndUpdate({ _id, userId }, req.body)
    .then(() => res.redirect(`/restaurants/${_id}`))
    .catch(err => console.log(err))
})

// delete restaurant
router.delete("/:id", (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  Restaurant.findByIdAndDelete({ _id, userId })
    .then(() => res.redirect("/"))
    .catch(err => console.log(err))
})

module.exports = router