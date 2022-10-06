import { Router } from 'express'
import { getCarrito, postCarrito, deleteCarrito, getCarritoProductos, postProductoInCarrito, deleteProductoInCarrito, initPedido } from '../controllers/carritoController.js'
import checkAuth from '../middleware/checkLogueo.js'
const router = Router()

//CARRITO
router.get('/:id?', checkAuth, getCarrito)
router.post('/', checkAuth, postCarrito)
router.delete('/:id', checkAuth, deleteCarrito)
router.get('/:id/productos', checkAuth, getCarritoProductos)
router.post('/:id/productos', checkAuth, postProductoInCarrito)
router.delete('/:id/productos/:id_prod', checkAuth, deleteProductoInCarrito)
router.post('/iniciarPedido', checkAuth, initPedido)

export default router