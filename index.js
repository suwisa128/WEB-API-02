const express = require('express')
const app = express()

app.use(express.json())
let books = []

app.get('/books', (req, res) => { //API คือ 1 ฟังก์ชั่น
    //input

    //process

    //output 
    res.status(200).json(books)
})

app.post('/books', (req, res) => {
    //input
    let newtitle = req.body.title
    let newprice = req.body.price
    let newunit = req.body.unit
    let newisbn = req.body.isbn
    let newimage_url = req.body.image_url

    //Key: value
    let newBooks = {
        title: newtitle,
        price: newprice,
        unit: newunit,
        isbn: newisbn,
        image_url: newimage_url

    }
    let booksID = 0

    //process
    books.push(newBooks)
      //n-1
    booksID = books.length -1

    //output 
    res.status(201).json(booksID)
})
const port = 3000
app.listen(port, () => console.log(`Server started at ${port}`))
