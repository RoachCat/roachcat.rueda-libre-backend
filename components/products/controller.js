const store = require("./store")
const responses = require("../../responses/responses")

async function getProducts() {
    try {
        const products = await store.get()
        return products
    } catch (error) {
        return error
    }
}

async function getProductById(productId) {
    try {
        const foundedProduct = await store.getById(productId)
        return foundedProduct
    } catch (error) {
        return error
    }
}

async function createProduct(product) {
    if (!product.name || !product.description || !product.price || !product.stock) {
        throw new Error("Invalid data")
    }
    try {
        const newProduct = await store.create(product)
        return newProduct
    } catch (error) {
        return error
    }
}

async function updateProduct(id, product){
    try {
        const updatedProduct = await store.update(id, product)
        return updatedProduct
    } catch (error) {
        return error
    }
}

async function deleteProduct(productId) {
    try {
        const deletedProduct = await store.delete(productId)
        return deletedProduct
    } catch (error) {
        return error
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}