import { productos } from "./productos.mjs";

const filtro = (precio,productos)=>{
    //filtro
    const filtrado = productos.filter((producto)=>{
        return (producto.precio > precio )
    });

    return filtrado
}

export {filtro}



//Aumentar los precios un 10% (MAP) 

const map = (productos) =>{
    const aumentarPrecio = productos.map((producto)=>{
        return {
            ...producto,
            precio:  producto.precio + (producto.precio * 0.10) 
        }
        
    });
    return aumentarPrecio
    
}

export {map}