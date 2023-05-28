// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Account = require('../../models/Account') // 引用 Todo model

// 定義首頁路由
// index
router.get('/', (req, res) => {
    res.render('index')
})

// 匯出路由模組
module.exports = router