const Model = require("./model")

async function getProducts() {
    const products = await Model.find()
    return products
}

async function getProductById(productId) {
    const foundProduct = await Model.findOne({ _id: productId })
    return foundProduct
}

async function createProduct(product) {
    const newProduct = await new Model(product)
    return newProduct.save()
}

async function updateProduct(id, product) {
    let foundProduct = await Model.findOne({ _id: id })
    foundProduct.name = product.name || foundProduct.name
    foundProduct.price = product.price || foundProduct.price
    foundProduct.description = product.description || foundProduct.description
    foundProduct.stock = product.stock || foundProduct.stock
    const updatedProduct = await foundProduct.save()
    return updatedProduct
}

async function deleteProduct(productId) {
    const deletedProduct = await Model.deleteOne({ _id: productId })
    return deletedProduct
}

module.exports = {
    get: getProducts,
    getById: getProductById,
    create: createProduct,
    update: updateProduct,
    delete: deleteProduct
}