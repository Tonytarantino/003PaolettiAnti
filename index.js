/* let nombre;
let mensaje; */
/* let preguntaCurso = prompt(
    "ingrese numero del curso al que quiere ingresar 1= Microbit 2= Arduino 3= Videojuegos"
  );
switch (preguntaCurso) {
  case "1":
    alert("felicitaciones! elegiste Microbit");
    console.log(respuesta);
    break;
  case "2":
    alert("felicitaciones elegiste Arduino");
    break;
  case "3":
    alert("felicitaciones elegiste Videojuegos");
    break;
  default:
    alert("selecciona nuevamente");
    break;
}
let cursoSeleccionado = pregunta(numeroCurso); */

//____Lo que funciona___
/* let nombre;
let mensaje;
let i = 1;
let preguntaCurso = prompt(
  "ingrese numero del curso al que quiere ingresar 1= Microbit 2= Arduino 3= Videojuegos"
);

function pedirDatos(i) {
  let nombre = prompt("Ingrese su nombre");
  let mensaje = `Vacante #${i} asignada a Nombre de: ${nombre}`;
  alert(mensaje);
}
function inscripcion(i) {
  for (let i = 1; i <= 10; i++) {
    pedirDatos(i);
    break;
  }
}
switch (preguntaCurso) {
  case "1":
    alert("felicitaciones! elegiste Microbit");
    inscripcion(i);
    break;
  case "2":
    alert("felicitaciones elegiste Arduino");
    inscripcion(i);
    break;
  case "3":
    alert("felicitaciones elegiste Videojuegos");
    inscripcion(i);
    break;
  default:
    alert("selecciona nuevamente");
    break;
}

if (cursoUno === "1") {
  for (let i = 1; i <= 10; i++) {
    pedirDatos();
  }
} */

//__________Probando arrow function_____
let nombre;
let mensaje;
let i = 1;
let preguntaCurso = prompt(
  "ingrese numero del curso al que quiere ingresar 1= Microbit 2= Arduino 3= Videojuegos"
);

let pedirDatos = (i) => {
  let nombre = prompt("Ingrese su nombre");
  let mensaje = `Vacante #${i} asignada a Nombre de: ${nombre}`;
  alert(`${mensaje}
  Gracias por elegirnos`);
  
};
let inscripcion = (i) => {
  for (let i = 1; i <= 10; i++) {
    pedirDatos(i);
    break;
  }
};
switch (preguntaCurso) {
  case "1":
    alert("felicitaciones! elegiste Microbit");
    inscripcion(i);
    break;
  case "2":
    alert("felicitaciones elegiste Arduino");
    inscripcion(i);
    break;
  case "3":
    alert("felicitaciones elegiste Videojuegos");
    inscripcion(i);
    break;
  default:
    alert("selecciona nuevamente");
    break;
}


