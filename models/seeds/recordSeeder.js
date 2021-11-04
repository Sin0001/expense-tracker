const bcrypt = require('bcryptjs')
const Record = require('../record')
const User = require('../user')
const Category = require('../category')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const db = require('../../config/mongoose')

const SEED_RECORD = [
  {name: '午餐', date: '2019-04-23', amount: 60, category_cn: '餐飲食品' },
  {name: '晚餐', date: '2019-04-23', amount: 60, category_cn: '餐飲食品' },
  {name: '捷運', date: '2019-04-23', amount: 120, category_cn: '交通出行' },
  {name: '電影：驚奇隊長', date: '2019-04-23', amount: 220, category_cn: '休閒娛樂' },
  {name: '租金', date: '2015-04-01', amount: 25000, category_cn: '家居物業' }
]

const SEED_USER = [
  {
    name : '廣志',
    email : 'user1@example.com',
    password : '12345678'
  },
  {
    name: '小新',
    email: 'user2@example.com',
    password: '12345678'
  }
]

db.once('open', () => {
  Promise.all(
    SEED_USER.map(seed_user => {
      return bcrypt
        .genSalt(10)
        .then(salt => bcrypt.hash(seed_user.password, salt))
        .then(hash => User.create({
          name: seed_user.name,
          email: seed_user.email,
          password: hash
        }))
        .then(user => {
          const userId = user._id
          const records = SEED_RECORD.map(record => {
            return Category.findOne({ name_cn: record.category_cn })
              .then(category => {
                record.userId = userId
                record.category = category._id
              })
          })
          return Promise.all(records)
        })
        .then(() => Record.create(SEED_RECORD))
    })
  )
    .then(() => {
      console.log('SEED_USER & SEED_RECORD done!')
      process.exit()
    })
    .catch(err => console.log(err))
})