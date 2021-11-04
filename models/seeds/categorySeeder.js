
const Category = require('../category')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const db = require('../../config/mongoose')


const SEED_CATEGORY = [
  {
    name: 'home',
    name_cn: '家居物業',
    categoryId: 'fas fa-house-user fa-3x'
  },
  {
    name: 'transportation',
    name_cn: '交通出行',
    categoryId: 'fas fa-shuttle-van fa-3x'
  },
  {
    name: 'entertainment',
    name_cn: '休閒娛樂',
    categoryId: 'fas fa-grin-beam fa-3x'
  },
  {
    name: 'food',
    name_cn: '餐飲食品',
    categoryId: 'fas fa-utensils fa-3x'
  },
  {
    name: 'else',
    name_cn: '其他',
    categoryId: 'fas fa-pen fa-3x'
  },
]


db.once('open', () => {
  Category.create(SEED_CATEGORY)
    .then(() => {
      console.log('SEED_CATEGORY done!')
      process.exit()
    })
    .catch(err => console.log(err))
})
