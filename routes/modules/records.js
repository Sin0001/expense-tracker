const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

//新增record頁面
router.get('/new', (req, res) => {
  return res.render('new')
})

//送出新增record
router.post('/', (req, res) => {
  const { name, date, amount, category } = req.body
  return Record.create({ name, date, amount, category }) //存入資料庫
    .then(() => res.redirect('/')) // 新增完成後導回首頁
    .catch(error => console.log(error))
})

//修改record頁面
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  Record.findById(id)
    .lean()
    .then((record) => res.render('edit', { record }))
    .catch(error => console.log(error))
})

//送出修改record
router.put('/:id', (req, res) => {
  const id = req.params.id
  const { name, date, amount, category } = req.body
  return Record.findById(id)
    .then(record => {
      record.name = name
      record.date = date
      record.amount = amount
      record.categoty = category
      return record.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//刪除record
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router