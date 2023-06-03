// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Account = require('../../models/Account') // 引用 Todo model
const cookieParser = require('cookie-parser')

router.use(cookieParser('ALPHA CAMP'))

// 定義首頁路由
// index
router.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    (async () => {
        try {
            // Check if there is the same link
            const user = await Account.findOne({ email }).lean()
            if (user) {
                if (user.password === password) {
                    res.cookie('NID', user._id, { path: '/', signed: true, maxAge: 600000 })
                    res.send(`Login successful!`)
                } else {
                    res.send(`Incorrect password for user ${email}`)
                }
            } else {
                res.send(`These is no user ${email}`)
            }
        } catch (error) {
            console.error(error);
        }
    })();
})

// 匯出路由模組
module.exports = router