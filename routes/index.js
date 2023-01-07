const express = require('express')
const router = express.Router()

const index = require('./modules/index')
const restaurants = require('./modules/restaurants')
const search = require('./modules/search')

router.use('/', index)
router.use('/restaurants', restaurants)
router.use('/search', search)

module.exports = router