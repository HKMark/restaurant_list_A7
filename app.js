// require packages used in the project
const express = require('express')
// require express-handlebars here
const exphbs = require('express-handlebars')
const restaurantsData = require("./restaurant.json").results
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// routes setting
app.get("/", (req, res) => {
  res.render("index", { restaurantsData })
})

// search function
app.get("/search", (req, res) => {
  if (!req.query.keywords) {
    return res.redirect("/")
  }
  const keywords = req.query.keywords
  const keyword = req.query.keywords.trim().toLowerCase()
  const filterRestaurantsData = restaurantsData.filter(
    data =>
      data.name.toLowerCase().includes(keyword) ||
      data.category.toLowerCase().includes(keyword)
  )
  if (filterRestaurantsData.length === 0) {
    res.render("no_result", { restaurantsData: filterRestaurantsData, keywords })
    return
  }
  res.render("index", { restaurantsData: filterRestaurantsData, keywords })
})

// restaurant details
app.get("/restaurants/:restaurantId", (req, res) => {
  const { restaurantId } = req.params
  const restaurantData = restaurantsData.find(
    data => data.id === Number(restaurantId)
  )
  res.render("show", { restaurantData })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})