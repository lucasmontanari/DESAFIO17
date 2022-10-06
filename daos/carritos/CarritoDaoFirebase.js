//No plaeno usar otra forma de persistencia solo lo hago para simular si existiera firebase
//por eso las partes comentadas, esto no es funcional


//import ContenedorFirebase from "../../contenedores/ContenedorFirebase.js";

export default class ContenedorCarritoFirebase /*extends ContenedorFirebase*/{
    constructor(){
        //super('carritos')
    }

    async saveProductoInCarrito(id, productos){
        const document = this.col.doc(this.lastadded)
        const queryDoc = await document.get()
        const carritoActual = queryDoc.data()
        const productosEnDb = await productos.getAll()
        function findID(objeto) { //Funcion para encontrar el objeto con el Id buscado
            return objeto.id === id;
        }
        let productoAgregado=productosEnDb.find(findID)
        carritoActual.productos.push(productoAgregado)
        const updatedCarrito = await document.update(carritoActual)
        if(updatedCarrito.n == 0){
            return `${this.colNombre} no encontrado`
        }
        carritoActual.id = this.lastadded
        return carritoActual
    }

    async getProductosById(id){
        const document = this.col.doc(id)
        const queryDoc = await document.get()
        const carritoActual = queryDoc.data()
        return carritoActual.productos
    }

    async deleteProductoInCarrito(idCarrito, idProducto){
        const document = this.col.doc(idCarrito)
        const queryDoc = await document.get()
        const carritoActual = queryDoc.data()
        const productosEnCarrito = carritoActual.productos
        let arregloFiltrado = productosEnCarrito.filter((objeto) => objeto.id != idProducto);
        carritoActual.productos = arregloFiltrado
        const updatedCarrito = await document.update(carritoActual)
        if(updatedCarrito.n == 0){
            return `${this.colNombre} no encontrado`
        }
        return `Producto eliminado de Carrito`
    }

}