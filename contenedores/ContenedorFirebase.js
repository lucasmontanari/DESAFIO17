//COMENTO TODO PORQUE NO PLAENO USARLO, ESO SOLO PARA PRUEBAS 


// import admin from "firebase-admin";

// import serviceAccount from "../llave.json" assert { type: "json"};

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// export default class ContenedorFirebase{ 
//     constructor(colNombre){
//         this.colNombre = colNombre
//         const db = admin.firestore()
//         this.col = db.collection(colNombre)
//         this.lastadded = ''
//     }

//     async save(objeto){
//         let nuevoDoc = this.col.doc()
//         let nuevoObj = await nuevoDoc.create(objeto)
//         this.lastadded = nuevoDoc.id
//         return `${this.colNombre} ingresado a Base de Datos ID: ${this.lastadded}`
//     }
    
//     async getById(numeroID){
//         const document = this.col.doc(numeroID)
//         const queryDoc = await document.get()
//         const response = queryDoc.data()
//         if (response == null){
//             return `${this.colNombre} no encontrado`
//         }
//         return response
//     }

//     async getAll(){
//         const colSnapshot = await this.col.get()

//         const colCompleta = colSnapshot.docs
//         const ids = colCompleta.map(doc=>doc.id)
//         const response = colCompleta.map(doc =>(doc.data()))
//         for(let i = 0; i < ids.length; i++){
//             response[i].id=ids[i]
//         }
//         if (response == null){
//             return `No se encontraron ${this.colNombre} cargados`
//         }
//         return response
//     }

//     async changeById(objeto,numeroID){
//         const document = this.col.doc(numeroID)
//         const updatedElement = await document.update(objeto)
//         if(updatedElement == null){
//             return `${this.colNombre} no encontrado`
//         }
//         return `${this.colNombre} actualizado`
//     }

//     async deleteById(idABorrar){
//         const document = this.col.doc(idABorrar)
//         await document.delete()
//         return `${this.colNombre} borrado`
//     }

//     async deleteAll(){
//         const colSnapshot = await this.col.get()

//         const colCompleta = colSnapshot.docs

//         colCompleta.forEach(document =>(document.delete()))
//         return `${this.colNombre} borrados`
//     }
// }