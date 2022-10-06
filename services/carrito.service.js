import DAOFactory from "../daos/selectorDeDaos.js";
const factory = new DAOFactory
const persistencia =process.argv[2] || 'MONGO'
const carritoService = factory.createDAOCarrito(persistencia)
//Prueba de que funciona el patron singleton
//const carritoService2 = factory.createDAOCarrito(persistencia)
//console.log("Equals:: ", carritoService === carritoService2)
import {
  getProductos,
  postProductos,
  editProductos,
  deleteProductos,
  productos,
} from "../controllers/productoController.js";
import { sendMail, sendSMS, sendWPP } from "../utils/sendMessage.js";
//import Usuario from "../contenedores/modelUsuario.js";
import { getUsuarioService, postUsuarioService, updateUsuario, getUsuarioByIDService, usuarioService } from "../services/usuario.service.js"
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  SESSION_SECRET,
  MODO,
  MAIL,
  PASSW,
  TWILIOSID,
  TWILIOTOKEN,
  TWILIOPHONE,
  TWILIOWPP,
  MYPHONE,
} = process.env;
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const getCarritoService = async (id) => {
  const carritoEnviar = await carritoService.getById(id);
  return carritoEnviar;
};

const postCarritoService = async (userEmail) => {
  await carritoService.save({ productos: [], timestamp: Date.now() });
  let allCarritos = await carritoService.getAll();
  let carritoActual = allCarritos[allCarritos.length - 1];
  let usuarioUpdate = await updateUsuario(userEmail, carritoActual._id);
  return carritoActual;
};

const deleteCarritoService = async (id) => {
  const deletedCarrito = await carritoService.deleteById(id);
  return deletedCarrito;
};

const getCarritoProductosService = async (id) => {
  const productosCarrito = await carritoService.getProductosById(id);
  return productosCarrito;
};

const postProductoInCarritoService = async (id) => {
  const prodInCarrito = await carritoService.saveProductoInCarrito(
    id,
    productos
  );
  return prodInCarrito;
};

const deleteProductoInCarritoService = async (idCarrito, idProducto) => {
  const deleteProdInCarrito = await carritoService.deleteProductoInCarrito(
    idCarrito,
    idProducto
  );
  return deleteProdInCarrito;
};

export {
  getCarritoService,
  postCarritoService,
  deleteCarritoService,
  getCarritoProductosService,
  postProductoInCarritoService,
  deleteProductoInCarritoService,
};
