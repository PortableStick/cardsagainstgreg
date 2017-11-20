const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')

router.get('/', (request, response) => {
    const url= path.resolve(__dirname, '../flashcards.json')
    const cards = fs.readFile(url, 'utf-8', (err, data) => {
        response.json(data)
    })
})

module.exports = router
