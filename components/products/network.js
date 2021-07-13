const express = require("express")
const router = express.Router()
const response = require("../../responses/responses")
const controller = require("./controller")

router.get('/', async (req, res) => {
    console.log(req)
    try {
        let products = await controller.getProducts()
        response.success(req, res, products, 200)
    } catch (error) {
        response.error(req, res, 'Internal error', 500, error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const foundProduct = await controller.getProductById(req.params.id)
        response.success(req, res, foundProduct, 200)
    } catch (error) {
        response.error(req, res, 'Internal error', 500, error)
    }

})

router.post('/', async (req, res) => {
    try {
        const createdProduct = await controller.createProduct(req.body)
        response.success(req, res, createdProduct, 201)
    } catch (error) {
        response.error(req, res, 'Internal error', 500, error)
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const updatedProduct = await controller.updateProduct(req.params.id, req.body)
        response.success(req, res, updatedProduct, 200)
    } catch (error) {
        response.error(req, res, 'Internal error', 500, error)
    }
})

router.delete('/:id', async (req, res) => {
    console.log(req.params)
    try {
        const deletedProduct = await controller.deleteProduct(req.params.id)
        response.success(req, res, deletedProduct, 200)
    } catch (error) {
        response.error(req, res, 'Internal error', 500, error)
    }
})

/**
*@swagger
*components:
*   schemas:
*       Product:
*           type: object
*           required:
*               - name
*               - description
*               - price   
*               - stock
*           properties:
*               name:
*                   type: string
*                   description: Name of the product
*               description:
*                   type: string
*                   description: Description of the product
*               price:
*                   type: number
*                   description: Price of the product
*               stock:
*                   type: boolean
*                   description: Stock of the product   
*       UpdateProduct:
*           type: object
*           properties:
*               name:
*                   type: string
*                   description: Name of the product
*               description:
*                   type: string
*                   description: Description of the product
*               price:
*                   type: number
*                   description: Price of the product
*               stock:
*                   type: boolean
*                   description: Stock of the product   
*/

/**
 * 
 */

/**
 * @swagger
 * /products:
 *      get:
 *          summary: Returns a list of all the products
 *          tags: [Products]
 *          responses:
 *              200:
 *                  description: The list of the all products
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Product'
 *      post:
 *          summary: Create a new product
 *          tags: [Products]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *          responses:
 *              201:
 *                  description: Created product
 *                  content:
 *                      application/json:
 *                          $ref: '#/components/schemas/Product'
 *              500:
 *                  description: Internal server error
 * /products/{id}:
 *      get:
 *          summary: Get the product by id
 *          tags: [Products]
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  schema:
 *                      type: string
 *                  required: true
 *                  description: Product id
 *          responses:
 *              200:
 *                  description: Obtained product
 *                  contents:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Product'
 *              404:
 *                  description: Product was not found
 *      patch:
 *          summary: Update an existing product
 *          tags: [Products]
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  schema:
 *                      type: string
 *                  required: true
 *                  description: Product id
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/UpdateProduct'
 *          responses:
 *              200:
 *                  description: Updated product
 *                  content:    
 *                      application/json:
 *                          $ref: '#/components/schemas/Product'
 *              500:
 *                  description: Internal server error
 *      delete:
 *          summary: Delete a product
 *          tags: [Products]
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  schema:
 *                      type: string
 *                  required: true
 *                  description: Product id
 *          responses:
 *              200:
 *                  descripion: Product deleted
 *                  contents:
 *                      application/json:
 *                          schema:
 *                              $ref. '$/components/schemas/Product'
 *              404:
 *                  description: Product was not found
 *              
 */

module.exports = router