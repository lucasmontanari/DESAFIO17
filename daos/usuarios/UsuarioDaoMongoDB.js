import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js";
import mongoose from "mongoose";
let instance = null

export default class ContenedorUsuarioMongoDb extends ContenedorMongoDb {
  constructor() {
    const usuarioScherma = new mongoose.Schema({
      email: String,
      password: String,
      nombre: String,
      direccion: String,
      edad: Number,
      telefono: String,
      avatar: String,
      carrito: String,
    });

    super("Users", usuarioScherma);
  }
  async getUsuarioByEmail(email) {
    const usuario = await this.col.findOne({ email });
    return usuario;
  }
  async getUsuarioByID(id,done) {
    const usuario = await this.col.findById(id,done).clone();
    return usuario;
  }
  async updateUsuarioByEmail(userEmail, id) {
    const usuario = await this.col.updateOne(
      { email: userEmail },
      { carrito: id }
    );
    return usuario;
  }

  
  static getInstance(){
    if (!instance){
      instance = new ContenedorUsuarioMongoDb()
    }
    return instance
  }
}
