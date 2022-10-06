class productoIndv {
  constructor(producto) {
    this.nombre = producto.nombre;
    this.descripcion = producto.descripcion;
    this.precio = producto.precio;
    this.foto =producto.foto;
    this.id = producto._id;
  }
}

class ProductoDTO {
  constructor(productos) {
    this.productos = [];
    productos.map(producto =>{
        const p = new productoIndv(producto)
        this.productos.push(p)
    })
  }
}

export default ProductoDTO;
