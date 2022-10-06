class UsuarioDTO {
    constructor(user) {
        this.nombre = user.nombre,
        this.direccion = user.direccion,
        this.email = user.email,
        this.edad = user.edad,
        this.avatar= user.avatar
    }
  }
  
  export default UsuarioDTO;