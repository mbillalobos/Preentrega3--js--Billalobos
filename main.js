//Se accede a los elementos necesarios del DOM

const formulario = document.getElementById("formulario");
const cotizacion = document.getElementById("cotizacion");

//Se define el evento submit para el formulario

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let anio = document.getElementById("anio").value;
    let tipo = document.getElementById("tipo").value.toLowerCase();
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;


    if (tipo != "auto" && tipo != "moto") {
        Swal.fire({
            icon: 'error',
            title: 'Dato inválido',
            text: 'El tipo de vehiculo indicado es inválido. Por favor, vuelva a ingresarlo.',
          })
    } else if (anio > 2023){
        Swal.fire({
            icon: 'error',
            title: 'Dato inválido',
            text: 'El año indicado es inválido. Por favor, vuelva a ingresarlo.',
          })
    } else {
        mostrarSeguro(anio, tipo, marca, modelo);
    }

})

//Se define la funcion mostrar seguro para poder modificar el DOM

const mostrarSeguro = (anio, tipo, marca, modelo) => {
    cotizacion.innerHTML = `
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal">Planes</h1>
        <p class="fs-5 text-body-secondary">Los mejores planes para tu ${tipo} ${marca} ${modelo} del año ${anio} son los siguientes:</p>
    </div>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Responsabilidad civil</h4>
            </div>
            <div class="card-body">
                <h1 class="card-title pricing-card-title">$800<small
                        class="text-body-secondary fw-light">/mes</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                    <li>Cubre daños provocados a terceros</li>
                    <li>No cubre daños propios</li>
                    <li>No cubre grua </li>
                    <li>No cubre traslado</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Estándar</h4>
            </div>
            <div class="card-body">
                <h1 class="card-title pricing-card-title">$1.500<small
                        class="text-body-secondary fw-light">/mes</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                    <li>Cubre daños provocados a terceros y propios</li>
                    <li>Cubre robo, incendio y destruccióntotal</li>
                    <li>No cubre grua </li>
                    <li>No cubre traslado</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Todo riesgo</h4>
            </div>
            <div class="card-body">
                <h1 class="card-title pricing-card-title">$2.200<small
                        class="text-body-secondary fw-light">/mes</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                    <li>Cubre daños provocados a terceros y propios</li>
                    <li>Cubre robo, incendio y destruccióntotal</li>
                    <li>Cubre grua </li>
                    <li>Cubre traslado</li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div class="col-md-10 mx-auto">
<form class="p-4 p-md-5 border rounded-3 bg-body-tertiary" id="formulario">
    <h2>En caso de querer contratar un plan, dejanos tus datos:</h2>
    <hr class="my-4">
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="nombre" placeholder="Ignacio">
        <label for="floatingInput">Nombre</label>
    </div>
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="apellido" placeholder="Billalobos">
        <label for="floatingInput">Apellido</label>
    </div>
    <div class="form-floating mb-3">
        <input type="email" class="form-control" id="email" placeholder="ejemplo@gmail.com">
        <label for="floatingInput">Email</label>
    </div>
    <div class="form-floating mb-3">
        <input type="number" class="form-control" id="numero" placeholder="26124675436">
        <label for="floatingInput">Número telefónico</label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" id="contratar">Contratar</button>
</form>
</div>`

//Se accede al boton para poder definir y activar el evento "click" 

    const contratar = document.getElementById("contratar");
    contratar.addEventListener("click", (e) => {
        e.preventDefault();

        Swal.fire('Gracias!',
            'Un asesor se pondrá en contacto contigo pronto!',
            'success')

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const numero = document.getElementById("numero").value;

//Se crea un objeto con los valores de los campos completados en los formularios

        const cliente = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            numero: numero,
            anio: anio,
            tipo: tipo,
            marca: marca,
            modelo: modelo,
        }

//Se almacena el objeto en el Localstorage y se convierte a JSON mediante el método Stringify

        localStorage.setItem("datosCliente", JSON.stringify(cliente));

//Se recupera el JSON del Localstorage, lo convierto nuevamente en un Objeto y lo muestro por consola.

        let clienteJSON = localStorage.getItem("datosCliente");
        const clienteActual = JSON.parse(clienteJSON);
        console.log(clienteActual);

    })
}