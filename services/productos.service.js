import DAOFactory from "../daos/selectorDeDaos.js";
const factory = new DAOFactory
const persistencia =parseInt(process.argv[2]) || 'MONGO'
const productosService = factory.createDAOProductos(persistencia)

const getProductosService = async (id) => {
    if (id) {
        const productoById=await productosService.getById(id)
        return productoById
    } else {
        const productosEnviar = await productosService.getAll()
        return productosEnviar
    }
}

const postProductosService = async (producto) => {
        const productoPost = await productosService.save(producto)
        return productoPost
}

const editProductosService = async (producto, id) => {
        const changeProducto = await productosService.changeById(producto, id)
        return changeProducto
}

const deleteProductosService = async (id) => {
        const deleteProducto = await productosService.deleteById(id)
        return deleteProducto
}


export {
    getProductosService,
    postProductosService,
    editProductosService,
    deleteProductosService,
    productosService
}
