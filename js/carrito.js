//import productos from "./productos.js"



const agregarAlCarrito = (frutaId) => {
if (frutaId > 0){
    const encontrado = productos.find(producto => producto.id === parseInt(frutaId))
    if (encontrado !== undefined){
     carritoFrutas.push(encontrado)
     almacenarCarrito()
    } else{
        console.log ("ID inexistente")
    } 
            
    }

}
const almacenarCarrito = () => {
    if(carritoFrutas.length >0 ) {
        let carritoConvertido =     JSON.stringify(carritoFrutas)
        localStorage.setItem("carritoFrutas",carritoConvertido)
    }
}

const recuperarCarrito = () => {
    return JSON.parse(localStorage.getItem("carritoFrutas")) || []
}
const carritoFrutas = recuperarCarrito ()

//export default agregarAlCarrito

