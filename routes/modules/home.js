const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

//瀏覽首頁
router.get('/', (req, res) => {
  const userId = req.user._id 
  Record.find({ userId })
    .lean()
    .populate('category', 'categoryIcon')
    .sort({ _id: 'desc'})
    .then(records => {
      let totalAmount = 0
      records.forEach(record => {
        record.icon = record.category.categoryIcon
        totalAmount += record.amount
      })
      res.render('index', { records, totalAmount })
    })
    .catch(error => console.log(error))
})

//filter record


module.exports = router