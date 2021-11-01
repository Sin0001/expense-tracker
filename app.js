const express = require('express')
const mongoose = require('mongoose') // 載入 mongoose
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override') // 載入method-override
const routes = require('./routes') // 載入routes
const app = express()
const PORT = 3000

mongoose.connect('mongodb://localhost/expense-tracker') // 設定連線到 mongoDB

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(methodOverride('_method')) // 設定每一筆請求都會透過 methodOverride 進行前置處理

app.use(routes) // 使用routes





app.listen( PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})