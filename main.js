//PRATICAS DE FOR
// const forloop = () => {
//     for(let i= 1; i < 11; i++) {
//         console.log(i)
//     }
// }

// forloop()

// const forloop = () => {
//     for(let e = 5; e > 1; e++){
//         console.log(e)
//     }
// }

// forloop();

// const forloop = () => {
//     for(let f = 2; f < 22; f++){
//         console.log(f)
//     }
// }

// forloop();

// const datos = () => {
//     for(let c = 3; c < 6; c++){
//         console.log(c)
//     }
// }

// datos();

// const pruebas = () => {
//     for(let t = 5; t < 25; t++){
//         console.log(t)
//     }
// }

// pruebas();

// const tornillos = () => {
//     for(let h = 4; h < 24; h++){
//         console.log(h)
//     }
// }

// tornillos();

// const tuercas = () => {
//     for(let u = 40; u > 10; u++){
//         console.log(u)
//     }
// }

// tuercas();

// const maderas = () => {
//     for(let m = 50; m > 25; m++){
//         console.log(m)
//     }
// }

// maderas();

// const person = {
//     'name' :  'Alexis Gomez',
//     'age' :  22,
//     'dirección' : 'Buenos Aires',
//     'carrer' : 'Software enginner',
//     'HomeBanking' : {
//         'banco' : 'itau'
//     }
// , 
// saludar: () => {
//     console.log('hola')
// }

// }
// console.log(person.name) 

// const person = {
//     'name': 'gonzalo pinto',
//     'age' : 21,
//     'dirección' : 'buenos aires',
//     'carrer': 'medicina',

//     saludar: () => {
//          console.log('hola')
    
//     }
// }
// console.log(Object.values(person)
// console.log(person.name)

// const person =  {
//     'name' : 'facundo ruben',
//     'age'  :  25,
//     'direccion' : 'alemania',
//     'carrer' : 'veterinario',
//     'homeBanking' : {
//         'banco' : 'galicia'
//     }
//     ,
//     saludar: () => {
//         console.log('Hola')
//     }
// }
// console.log(Object.keys(person))
// console.log(Object.values(person))

// -----const persona = {
// -----    'nombre' : 'pepita rodriguez',
// -----    'edad' : 29,
// -----    'direccion' : 'paris',
// -----    'carrera' : 'doctora',
// -----    saludar : () => {
// -----        console.log('saludo')
// -----   }
// -----}
// ---------console.log(Object.keys(persona))
// ---------console.log(Object.values(persona))

// ---Esto es un array y lo que esta diciendo es que me devuelva el valor 1 
// ---const numeros = [1, 2, 3]
//---- console.log(numeros.filter(item => item === 1))


//La evolución del FOR. estoy declarando una varaiable  especifica en person que seria el objeto. Lo que
//hace es que item se mueva elemento por elemento


// const ObjectInteration = () => {
//     for(let item in persona){
//         console.log(`${persona[item]}`)
//     }
// }

// ObjectInteration()


//    ARRAYS  [] siemprese escriben en corchetes los array si fueran llaves {} serian un objeto 

// const myArray = [1,2,3,4,5]

// console.log( myArray [0] +1)

// const myArray = [{nombre :'alexis'},{apellido:'gomez'},{edad:22}]

// console.log(myArray [2])

// const Datos = [{nombre:'camila'},{apellido:'cosentino'},{edad:21}]

// console.log(Datos[2].edad)

// -----const Información = [{nombre :'alexis'},{segundonombre:'gabriel'},{apellido:'gomez'},{edad:22},{profesion:'programacion'},
// -----{direccion:'mateo sanchez'},{ciudad:'buenos aires'},{comida:'milanesas'}]

// ------console.log(Información[7].comida)

// const datos = [{nombre:'alexis'},{apellido:'gomez'},{profesion:'programador'},{edad:21}]

// console.log(datos [0].nombre)


/////////////   ARRAYS METODOS ///////////
//////// para llamar un metodo se llama como una funcion () ///////

// const myArray = [5,2,6,4,3,1]

// console(myArray.sort())

// .sort ordena los arrays como 123456

/// PUSH AGREGA NUEVOS ELEMENTOS 
// const myArray = [1,3,6,5,2,4]

// console.log(myArray.push(7), myArray)

