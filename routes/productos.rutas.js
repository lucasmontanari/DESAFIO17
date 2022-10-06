import { Router } from 'express'
import { getProductos, postProductos, editProductos, deleteProductos } from '../controllers/productoController.js'
import checkAuth from '../middleware/checkLogueo.js'
const router = Router()

//PRODUCTOS
router.get('/:id?', checkAuth, getProductos)
router.post('/', checkAuth, postProductos)
router.put('/:id', checkAuth, editProductos)
router.delete('/:id', checkAuth, deleteProductos)

export default router