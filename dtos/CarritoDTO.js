class CarritoDTO {
  constructor(carrito, usuario) {
    this.usuario = usuario.nombre;
    this.email = usuario.email;
    this.productos = carrito.productos;
  }
}

export default CarritoDTO;