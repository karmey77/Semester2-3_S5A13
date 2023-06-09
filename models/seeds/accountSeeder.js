if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const db = require('../../config/mongoose')
const Account = require('../Account')
const users = [
    {
        firstName: 'Tony',
        email: 'tony@stark.com',
        password: 'iamironman'
    },
    {
        firstName: 'Steve',
        email: 'captain@hotmail.com',
        password: 'icandothisallday'
    },
    {
        firstName: 'Peter',
        email: 'peter@parker.com',
        password: 'enajyram'
    },
    {
        firstName: 'Natasha',
        email: 'natasha@gamil.com',
        password: '*parol#@$!'
    },
    {
        firstName: 'Nick',
        email: 'nick@shield.com',
        password: 'password'
    }
]

db.once('open', () => {
    users.forEach(user => {
        Account.create(user)
    });
    console.log('done')
})