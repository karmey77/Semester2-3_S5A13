// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const cookieParser = require('cookie-parser')
const Account = require('../../models/Account') // 引用 Todo model
router.use(cookieParser('ALPHA CAMP'))

// 定義首頁路由
// index
router.get('/', (req, res) => {
    // if user logged in before, there should be a NID
    const id = req.signedCookies.NID || undefined
    if (id) {
        // if NID exists, find information from DB
        (async () => {
            try {
                const user = await Account.findOne({ _id: id }).lean()
                res.send(`Welcome back, ${user.firstName}`)
            } catch (error) {
                console.error(error);
            }
        })();
    } else {
        // if no NID, login
        res.render('index')
    }
})

// 匯出路由模組
module.exports = router