const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recordSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    index: true,
    required: true,
  },
  userId: {  // 加入關聯設定
    type: Schema.Types.ObjectId,
    ref: 'User', //要對應的資料庫文件
    index: true,
    required: true
  }
})

module.exports = mongoose.model('Record', recordSchema)