function valorcuota(producto, cantidadcuotas) {
    return parseInt(producto / cantidadcuotas)
}

function mostrarMensaje(nombre, precio) {
    alert("Usted selecciono el producto " + nombre + "\nValor: $" + precio)
}

function seleccionProducto() {
    const gaseosas = [{
            nombre: "coca-cola",
            precio: 200
        },
        {
            nombre: "Fanta",
            precio: 150
        },
        {
            nombre: "Sprite",
            precio: 180
        },
        {
            nombre: "7uP",
            precio: 130
        },
    ]

    const aguasSab = [{
            nombre: "Agua Pomelo",
            precio: 200
        },
        {
            nombre: "Agua Naranja",
            precio: 150
        },
        {
            nombre: "Agua Manzana",
            precio: 180
        },
        {
            nombre: "Agua Pera",
            precio: 130
        },
    ]

    let allProductos = gaseosas.concat(aguasSab)

    let listaProductos = allProductos.map((opcion) => opcion.nombre);

    let seleccionProducto = 0

    do {
        seleccionProducto = parseInt(prompt("seleccione el producto deseado : \n-" + listaProductos.join("\n-")))

        switch (seleccionProducto) {
            case 1:
                mostrarMensaje(allProductos[0].nombre, allProductos[0].precio)
                return gaseosas[0].precio
            case 2:
                mostrarMensaje(allProductos[1].nombre, allProductos[1].precio)
                return gaseosas[1].precio
            case 3:
                mostrarMensaje(allProductos[2].nombre, allProductos[2].precio)
                return gaseosas[2].precio
            case 4:
                mostrarMensaje(allProductos[3].nombre, allProductos[3].precio)
                return gaseosas[3].precio
            case 5:
                mostrarMensaje(allProductos[4].nombre, allProductos[4].precio)
                return allProductos[4].precio
            case 6:
                mostrarMensaje(allProductos[5].nombre, allProductos[5].precio)
                return allProductos[5].precio
            case 7:
                mostrarMensaje(allProductos[6].nombre, allProductos[6].precio)
                return allProductos[6].precio
            case 8:
                mostrarMensaje(allProductos[7].nombre, allProductos[7].precio)
                return allProductos[7].precio
            default:
                alert("Usted no selecciono ningun producto")
                break
        }

    } while (seleccionProducto < 1 || seleccionProducto > 7 || isNaN(seleccionProducto))
}

// seleccion de cantidad de cuotas

function seleccionCuotas(precio) {

    let seleccionCuotas = 0

    do {

        seleccionCuotas = parseInt(prompt("seleccione cantidad de cuotas:\n1. Un pago sin interes\n2. Tres pagos sin interes\n3. Seis pagos sin interes"))

        switch (seleccionCuotas) {
            case 1:
                alert("Usted selecciono un pago sin interes\n" + "valor de la cuota es : $ " + valorcuota(precio, 1))
                break

            case 2:
                alert("Usted selecciono tres pagos sin interes\n" + "valor de la cuota es : $ " + valorcuota(precio, 3))
                break

            case 3:
                alert("Usted selecciono seis pagos sin interes\n" + "valor de la cuota es : $ " + valorcuota(precio, 6))
                break

            default:
                alert("Usted no selecciono un valor de cuotas valido")
                break

        }

    } while (seleccionCuotas < 1 || seleccionCuotas > 3 || isNaN(seleccionCuotas))

}

// confirmacion de compra 

function confirmar() {

    let confirmacion = prompt("Confirma la compra ? Si/No")

    if (confirmacion.toLowerCase() == "si") {
        alert("Muchas gracias por su compra !")
    } else {
        alert("Gracias por su visita !")
    }
}

// funcion para dar orden a las otras funciones

function principal() {
    alert("bienvenido a TuTienda !")

    let precio = seleccionProducto()

    seleccionCuotas(precio)

    confirmar()
}

//iniciador de las funciones

principal()