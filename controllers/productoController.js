import {
  getProductosService,
  postProductosService,
  editProductosService,
  deleteProductosService,
  productosService,
} from "../services/productos.service.js";
import ProductoDTO from "../dtos/ProductosDTO.js";
import { Admin } from "../config.js";
const productos = productosService;

const getProductos = async (req, resp) => {
  const id = req.params.id;
  try {
    const productosDAO = await getProductosService(id);
    const productosEnviar = new ProductoDTO(productosDAO).productos
    resp.status(200).render("productos", { productosEnviar });
  } catch (err) {
    resp.status(500).json(`Error de servidor ${err}`);
  }
};

const postProductos = async (req, resp) => {
  const producto = req.body;
  if (Admin) {
    try {
      const productosEnviar = await postProductosService(producto);
      resp.status(201).json(productosEnviar);
    } catch (err) {
      resp.status(500).json(`Error de servidor ${err}`);
    }
  } else {
    resp.status(401).json({
      error: -1,
      descripcion: `ruta '${req.path}' metodo '${req.method}' no autorizada`,
    });
  }
};

const editProductos = async (req, resp) => {
  const producto = req.body;
  if (Admin) {
    const id = String(req.params.id);
    try {
      const productosEnviar = await editProductosService(producto, id);
      resp.status(201).json(productosEnviar);
    } catch (err) {
      resp.status(500).json(`Error de servidor ${err}`);
    }
  } else {
    resp.status(401).json({
      error: -1,
      descripcion: `ruta '${req.path}' metodo '${req.method}' no autorizada`,
    });
  }
};

const deleteProductos = async (req, resp) => {
  const id = String(req.params.id);
  if (Admin) {
    try {
      const productosEnviar = await deleteProductosService(id);
      resp.status(201).json(productosEnviar);
    } catch (err) {
      resp.status(500).json(`Error de servidor ${err}`);
    }
  } else {
    resp.status(401).json({
      error: -1,
      descripcion: `ruta '${req.path}' metodo '${req.method}' no autorizada`,
    });
  }
};

export {
  getProductos,
  postProductos,
  editProductos,
  deleteProductos,
  productos,
};
