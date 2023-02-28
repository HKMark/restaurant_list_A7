const express = require('express')
const router = express.Router()

const index = require('./modules/index')
const restaurants = require('./modules/restaurants')
const search = require('./modules/search')
const users = require('./modules/users')

router.use('/', index)
router.use('/restaurants', restaurants)
router.use('/search', search)
router.use('/users', users)

module.exports = router