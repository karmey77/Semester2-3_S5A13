if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const routes = require('./routes') // 引用路由器
const methodOverride = require('method-override')

require('./config/mongoose')

app.use(bodyParser.urlencoded({ extended: true }))
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(routes) // 將 request 導入路由器

// 設定 port 3000
app.listen(3000, () => {
    console.log('App is running on http://localhost:3000')
})