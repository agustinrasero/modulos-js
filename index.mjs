import {productos} from "./productos.mjs"
import {filtro} from "./funciones.mjs"
import { map } from "./funciones.mjs"

//const filtrarProductos = filtro(40, productos);
//console.log(filtrarProductos)

const aumentarPrecio = map(productos)
console.log(aumentarPrecio)