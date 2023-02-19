const express = require('express')
const morgan = require('morgan')
const { parseArgs } = require('util')

const app = express()

const products = [
    {
        id:1,
        name: 'moledora',
        price: 3000,
        quantityStock: 3,
        keywords:['top-quality', 'gama-medium', 'basic-generic']
    }
]

app.use(morgan('dev'))
app.use(express.json())

app.get('/products', (req, res) => {
    res.json(products)
})

app.post('/products', (req, res) => {
    const newProduct = {...req.body, id: products.length + 1}
    products.push(newProduct)
    res.send(newProduct)
})

app.put('/products/:id', (req, res) => {

    const newData = req.body

    const productFound = products.find((product) => product.id === parseInt(req.params.id))

    if(!productFound){
        return res.status(404).send({
            message:'product not found'
        })
    }

    const newProducts = products.map((product) => (product.id === parseInt(req.params.id) ? {...product, ...newData}: product))

    res.send(newProducts)
})

app.delete('/products/:id', (req, res) => {
    const productFound = products.find(
        (product) => product.id === parseInt(req.params.id)  
    );

    if(!productFound) {
        return res.status(404).json({
            message:"producto no encontrado"
        })
    }

    const newProduct = products.filter((product) => product.id !== parseInt(req.params.id))

    res.sendStatus(204)
})

app.get('/product/:id', (req, res) => {

    const productFound = products.find(
        (product) => product.id === parseInt(req.params.id)
    )

    if(productFound === undefined) {
        return res.status(404).json({
            message:'Producto no encontrado'
        })
    }
    
    res.json(productFound)
})




app.listen(3000)
console.log(`server on port ${3000}`)