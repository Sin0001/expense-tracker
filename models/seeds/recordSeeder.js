const db = require('../../config/mongoose')
const Record = require('../record')
const User = require('../user')
const Category = require('../category')

const recordData = [
  {name: '午餐', date: '2019-04-23', amount: 60, category: '餐飲食品' },
  {name: '晚餐', date: '2019-04-23', amount: 60, category: '餐飲食品' },
  {name: '捷運', date: '2019-04-23', amount: 120, category: '交通出行' },
  {name: '電影：驚奇隊長', date: '2019-04-23', amount: 220, category: '休閒娛樂' },
  {name: '租金', date: '2015-04-01', amount: 25000, category: '家居物業' }
]

db.once('open', () => {
  recordData.forEach(record => {
    Record.create({
      id: userId,
      name: record.name,
      date: record.date,
      amount: record.amount,
      category: record.category,
    })
  })
  console.log('SEED_RECORD done!')
})
