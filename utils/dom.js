// llamamos a los identificadores y declaramos como variables
let nombre = document.querySelector("#nombreInput");
let apellido = document.querySelector("#apellidoInput");
let departamento = document.querySelector("#select-departamento");
let boton = document.querySelector("#boton")
let listatrabajadores = document.querySelector("#lista-trabajadores");

//esto es un array
let datosdelformulario = [];
  
//funcion del evento del botón
boton.addEventListener("click", (e) => {
if (nombre.value.length >0 && apellido.value.length >0 && departamento.value !== "Selecciona el departamento") {


    //crear objeto  del trabajador al array
let trabajadornuevo = {
    nombre : nombre.value,
    apellido: apellido.value,
    departamento: departamento.value
};

//para que se añada al array
datosdelformulario.push(trabajadornuevo);

// un bucle foreach para mostrar en la consola
datosdelformulario.forEach(trabajadornuevo => {
    console.log(trabajadornuevo);
});
    


    let nodo = document.createElement("li");

    nodo. textContent = `${nombre.value} ${apellido.value} ${departamento.value}`;
    nodo. className = "animate__animated animate__zoomIn list-group-item";
    nodo.addEventListener('click', (e) => {
        nodo.classList.add("animate__fadeInDown");
    });
    listatrabajadores.append(nodo);
    trabajadoresxdepartamento(datosdelformulario);
nombre.value = "";
apellido.value = "";
departamento.value = "";

//sweetAlert
Swal.fire({
    title: 'Correct!',
    text: 'El trabajador ha sido añadido a la lista',
    icon: 'success',
    confirmButtonText: '😊',
    timer:1200,
  })
//sweetAlert
} else {
    Swal.fire({
        title: 'Error!',
        text: 'El trabajador no se ha añadido a la lista',
        icon: 'error',
        confirmButtonText: 'No omitas información 😡',
        timer: 1000,
      })
}
});

function trabajadoresxdepartamento(datosdelformulario) {
    //objeto de departamento para que inicie desde cero
    let contador = {
        "IT": 0,
        "Marketing": 0,
        "Ventas": 0,
        "Administracion": 0
    };

//iterar sobre el array
for(let i = 0; i<datosdelformulario.length; i++){

    //obtener el departamento

    let ndepartamento = datosdelformulario[i].departamento;

    //incrementar 
    contador[ndepartamento]++;
}
 // Mostrar el recuento de empleados por departamento
 for (let ndepartamento in contador) {
    console.log("Número de empleados en el departamento " + ndepartamento + ": " + contador[ndepartamento]);
    }

      // Actualizar el texto de los spans correspondientes con los valores del contador
      document.getElementById("contadorIT").textContent = contador["IT"];
      document.getElementById("contadorMarketing").textContent = contador["Marketing"];
      document.getElementById("contadorVentas").textContent = contador["Ventas"];
      document.getElementById("contadorAdministracion").textContent = contador["Administracion"];
  }

