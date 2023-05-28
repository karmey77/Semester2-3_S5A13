const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))


// 設定首頁路由
app.get('/', (req, res) => {
    res.render('index')
})

// 設定 port 3000
app.listen(3000, () => {
    console.log('App is running on http://localhost:3000')
})