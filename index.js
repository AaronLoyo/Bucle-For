let Parrafos = [document.getElementById("Producto1"),document.getElementById("Producto2"),document.getElementById("Producto3"),document.getElementById("Producto4"),document.getElementById("Producto1")]
let total = document.getElementById("Total")
let Productos = []
let ObjetoLaptop = {
    name: "Laptop",
    Price: 200
}
let ObjetoBicicleta = {
    name: "Bicicleta",
    Price: 50
}
let ObjetoLampara = {
    name: "Lampara",
    Price: 20
}
let ObjetoVentilador = {
    name: "Ventilador",
    Price: 15,
}
let ProductosComprados = [false,false,false,false]
function AgregarProductoLista(numero) {
    if (numero == 1) {
        if (ProductosComprados[0] == false) {
            ProductosComprados[0] = true
            Productos.push(ObjetoLaptop) 
        } else {
            alert("Ya compraste este producto")
        }
    }
    if (numero == 2) {
        if (ProductosComprados[1] == false) {
            ProductosComprados[1] = true
            Productos.push(ObjetoBicicleta) 
        } else {
            alert("Ya compraste este producto")
        }
    }
    if (numero == 3) {
        if (ProductosComprados[2] == false) {
            ProductosComprados[2] = true
            Productos.push(ObjetoLampara) 
        } else {
            alert("Ya compraste este producto")
        }
    }
    if (numero == 4) {
        if (ProductosComprados[3] == false) {
            ProductosComprados[3] = true
            Productos.push(ObjetoVentilador) 
        } else {
            alert("Ya compraste este producto")
        }
    }
}
function Recarga() {
    if (Productos.length == 0) {
        alert("No has comprado absolutamente nada")
    } else if (Productos.length == 1) {
        Parrafos[0].innerText = "Producto 1:" + Productos[0].name
    } else if (Productos.length == 2) {
        Parrafos[0].innerText = "Producto 1:" + Productos[0].name
        Parrafos[1].innerHTML = "Producto 2:" + Productos[1].name
    } else if(Productos.length == 3) {
        Parrafos[0].innerText = "Producto 1:" + Productos[0].name
        Parrafos[1].innerHTML = "Producto 2:" + Productos[1].name
        Parrafos[2].innerHTML = "Producto 3:" + Productos[2].name
    } else if (Productos.length == 4) {
        Parrafos[0].innerText = "Producto 1:" + Productos[0].name
        Parrafos[1].innerHTML = "Producto 2:" + Productos[1].name
        Parrafos[2].innerHTML = "Producto 3:" + Productos[2].name
        Parrafos[3].innerHTML = "Producto 4:" + Productos[3].name
    }
    var resultado = 0;
    for (let index = 0; index < Productos.length; index++) {
        const element = Productos[index].Price;
        resultado = resultado + element;
        console.log(resultado)
    }
    total.innerText = "Total: " + resultado + "$"
}