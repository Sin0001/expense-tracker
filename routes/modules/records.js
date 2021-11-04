const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

//新增record頁面
router.get('/new', (req, res) => {
  return res.render('new')
})

//送出新增record
router.post('/', (req, res) => {
  const { name, date, category, amount } = req.body
  const userId = req.user._id
  return Category.findOne({ name_cn: category })
    .then(category => {
      Record.create({
        name,
        date,
        category,
        amount,
        userId,
      })
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//修改record頁面
router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  Record.findOne({ _id, userId })
    .populate('category', 'name_cn')
    .lean()
    .then(record => {
      res.render('edit', { record })
    })
    .catch(error => console.log(error))
})

//送出修改record
router.put('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  const { name, date, amount, category } = req.body
  return Category.findOne({ name_cn: category })
    .then(category => {
      Record.findOne({ _id, userId })
        .then(record => {
          record.name = name
          record.date = date
          record.amount = amount
          record.category = category
          return record.save()
        })
        .then(() => res.redirect('/'))
        .catch(error => console.log(error))
    })
})

//刪除record
router.delete('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, userId })
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router