const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

//瀏覽首頁
router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(records => {
      let totalAmount = 0
      records.forEach(record => {
        totalAmount += record.amount
      })
      res.render('index', { records, totalAmount })
    })
    .catch(error => console.log(error))
})

module.exports = router