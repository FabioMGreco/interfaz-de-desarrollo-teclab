//import productos from "./productos.js"   
//import agregarAlCarrito from "./carrito.js"

const productos = []
console.log(productos);
const APIURL = "http://127.0.0.1:5500/js/productos.json"
const container = document.querySelector('div.container')


function retornarCardHTML(producto){
    //imagen: "🍌",nombre: "Bananas",precio: 220

    return `<div class="card">
                <div class="card-image">${producto.imagen}</div>
                <div class="card-name">${producto.nombre}</div>
                <div class="card-price">${producto.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${producto.id}" title="Clic para agregar al carrito">+</button>
                </div>
            </div>`
}

function cargarProductos(array){
    
    array.forEach((producto) =>  {
        container.innerHTML += retornarCardHTML(producto)
  
        
    });
    //activarClickEnBotones()
}

function activarClickEnBotones () {
    const botonesAgregar = document.querySelectorAll('.button-add')
        
    if (botonesAgregar !== null){
        for (const botonAgregar of botonesAgregar){
            botonAgregar.addEventListener('click', (event) =>{ 
                agregarAlCarrito(event.target.id)
            })

        }
    }else {
        console.log ("tarjeta no encontrada")
    }
    botonesAgregar.add
}
function obtenerProductos (productos) {
    fetch(APIURL)
    .then(response => response.json())
    .then(
        data => productos.push(...data)
    )
    .then(()=>{
        cargarProductos(productos);
        activarClickEnBotones()
    }) 
}


obtenerProductos(productos)
//cargarProductos(productos)
//activarClickEnBotones()
