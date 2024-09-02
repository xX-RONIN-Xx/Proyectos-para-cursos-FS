let Persona = {
    nombre: "Lucas",
    apellido: "Martinez",
    edad: 47,
    sexo: "masculino",
    dni: 23305379,
    casado: true,
    hijos: ["Ana Martinez", "Marcos Martinez"]
}

Persona.nombre;
console.log(Persona['casado']);
let { nombre, apellido, edad, sexo, dni, casado, hijos } = Persona;
console.log(nombre);
console.log(apellido) 
console.log(edad) 
console.log(sexo)
console.log(dni) 
console.log(casado) 
console.log(hijos) 


let primerJson= `{
    "empleados": [
        {"nombre": "Juan", "apellido": "Perez"},
        {"nombre": "Karina", "apellido": "Gonzalez"},
        {"nombre": "Luz", "apellido": "López"},
        {"nombre": "Marcos", "apellido": "Villalba"}
    ]
}`
//lo convertimos en un objeto js
let objetoJS = JSON.parse(primerJson);
console.log(objetoJS);
//lo volvemos a convertir a JSON
let jsonOriginal = JSON.stringify(objetoJS);
console.log(jsonOriginal);