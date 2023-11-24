
//console.log("muestra carritofrutas: ", typeof localStorage.getItem("carritoFrutas") );

const carritofrutas = JSON.parse(localStorage.getItem("carritoFrutas"))
console.log("carritoFrutas", carritofrutas);

function retornarTablaHTML(producto) {
    const template = ` 
        <tr>
            <th>${producto.id}</th>
            <th>${producto.nombre}</th>
            <th>${producto.precio}</th>
            <th><img src="images/icon-fruits-64.png" width="24px"></th>
        </tr>
    `
    console.log("template", template);
}

retornarTablaHTML(carritofrutas[1])
//carritoFrutas.forEach(producto => {
    
//});
