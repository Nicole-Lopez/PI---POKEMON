// // Name:
// -Que sea completado
// -No contenga numeros o @#
// -que no sea igual a otro
// -Debe contener entre 1 a 15 letras
// -No puede contener espacios

// // imagen:
// -Debe ser un url valido

// // hp/attack/defense/speed
// -debe ser numeros
// -debe ser un numero entre 0 a 1000

// // height:
// -deben ser numeros
// -Debe ser entre 1 a 1000

// // weight:
// -deben ser numeros
// -debe ser entre 1 a 1000

// // tipos:
// -Debe tener almenos un tipo
// -puede tener como maximo 5 tipos
const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones = {
	name: /^[a-zA-Z]{1,15}$/,
	img: /(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))/, 
	hp:/^([0-9][0-9]{0,2}|1000)$/,
	attack:/^([0-9][0-9]{0,2}|1000)$/,
	defense:/^([0-9][0-9]{0,2}|1000)$/,
	speed:/^([0-9][0-9]{0,2}|1000)$/,
	height:/^([1-9][0-9]{0,2}|1000)$/,
	weight:/^([1-9][0-9]{0,2}|1000)$/,
}
 
console.log('epop')


