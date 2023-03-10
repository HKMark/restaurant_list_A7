const express = require('express')
const router = express.Router()

const index = require('./modules/index')
const restaurants = require('./modules/restaurants')
const search = require('./modules/search')
const users = require('./modules/users')
const auth = require('./modules/auth')

const { authenticator } = require('../middleware/auth')  // 掛載 middleware

router.use('/restaurants', authenticator, restaurants)
router.use('/search', authenticator, search)
router.use('/users', users)
router.use('/auth', auth)
router.use('/', authenticator, index)

module.exports = router