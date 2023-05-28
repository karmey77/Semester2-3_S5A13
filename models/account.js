const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
    firstName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String, // 資料型別是網址
        required: true // 這是個必填欄位
    }
})

module.exports = mongoose.model('Account', urlSchema)