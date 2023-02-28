const bcrypt = require('bcryptjs')
const db = require('../../config/mongoose')
const Restaurant = require('../restaurant')
const User = require('../user')
const restaurantsData = require("../../restaurant.json").results

const SEED_USERS = []
for (let i = 1; i < 3; i++) {
  const users = {
    name: `User${i}`,
    email: `user${i}@example.com`,
    password: '12345678'
  }
  SEED_USERS.push(users)
}

const user1restaurants = []
for (let i = 0; i < 3; i++) {
  user1restaurants.push(restaurantsData[i])
}
const user2restaurants = []
for (let i = 3; i < 6; i++) {
  user2restaurants.push(restaurantsData[i])
}

db.once('open', async () => {
  console.log('mongodb connected!')
  const restaurantSeeder = async (user, restaurants) => {
    try {
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(user.password, salt)
      const createdUser = await User.create({
        name: user.name,
        email: user.email,
        password: hash
      })
      const userId = createdUser._id
      await Promise.all(Array.from(
        { length: 3 },
        (_, i) => Restaurant.create({ ...restaurants[i], userId })
      ))
      console.log('restaurantSeeder done.')
    } catch (error) {
      console.error(error)
    }
  }
  await Promise.all([
    restaurantSeeder(SEED_USERS[0], user1restaurants),
    restaurantSeeder(SEED_USERS[1], user2restaurants)
  ])
  process.exit()
})