const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const Restaurant = require('./models/restaurant')

// require dotenv if NODE_ENV is not production
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

// routes setting
app.get('/', (req, res) => {
  Restaurant.find() //get all the data from the Restaurant model
    .lean() //return data from the mongoose model to JavaScript objects
    .then(restaurantsData => res.render('index', { restaurantsData })) 
    .catch(error => console.error(error))
})

// page of add restaurant
app.get('/restaurants/new', (req, res) => {
  return res.render('new')
})

// add restaurant
app.post('/restaurants', (req, res) => {
  Restaurant.create(req.body)
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

// page of edit restaurant
app.get("/restaurants/:restaurantId/edit", (req, res) => {
  const { restaurantId } = req.params
  Restaurant.findById(restaurantId)
    .lean()
    .then(restaurantsData => res.render("edit", { restaurantsData }))
    .catch(err => console.log(err))
})

// edit restaurant
app.put("/restaurants/:restaurantId", (req, res) => {
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
app.delete("/restaurants/:restaurantId", (req, res) => {
  const { restaurantId } = req.params
  return Restaurant.findById(restaurantId)
    .then(restaurantsData => restaurantsData.remove())
    .then(() => res.redirect("/"))
    .catch(err => console.log(err))
})

// search function
app.get('/search', (req, res) => {
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

// restaurant details
app.get('/restaurants/:restaurantId', (req, res) => {
  const { restaurantId } = req.params
  Restaurant.findById(restaurantId)
    .lean()
    .then(restaurantsData => res.render('detail', { restaurantsData }))
    .catch(err => console.log(err))
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})