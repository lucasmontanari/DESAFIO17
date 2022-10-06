import ContenedorCarritoMongoDb from "./carritos/CarritoDaoMongoDb.js"
import ContenedorProductoMongoDb from "./productos/ProductosDaoMongoDb.js"
import ContenedorUsuarioMongoDb from "./usuarios/UsuarioDaoMongoDB.js"
import ContenedorCarritoFirebase from "./carritos/CarritoDaoFirebase.js"
import ContenedorProductoFirebase from "./productos/ProductosDaoFirebase.js"
import ContenedorUsuarioFirebase from "./usuarios/UsuarioDaoFirebase.js"


export default class DAOFactory{

    createDAOCarrito(persistencia){
        if(persistencia == 'MONGO'){return ContenedorCarritoMongoDb.getInstance()}
        if(persistencia == 'FIREBASE'){return new ContenedorCarritoFirebase()}
    }
    createDAOProductos(persistencia){
        if(persistencia == 'MONGO'){return ContenedorProductoMongoDb.getInstance()}
        if(persistencia == 'FIREBASE'){return new ContenedorProductoFirebase()}
    }
    createDAOUsuario(persistencia){
        if(persistencia == 'MONGO'){return ContenedorUsuarioMongoDb.getInstance()}
        if(persistencia == 'FIREBASE'){return new ContenedorUsuarioFirebase()}
    }
}