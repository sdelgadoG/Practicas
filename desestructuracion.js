
/** 
 * perfil
 * nombre, apellido, correo y salario
 * desestructurar con funcion de flecha
 * imprimir unicamente nombre y salario.
 * 
*/

const perfil = {
    nombre: "Sonny",
    correo: "enrique@gmail.com",
    apellido: "Delgado",
    salario: 100
};

const imprime = ({ nombre, salario }) => {
    console.log(nombre, salario);
}

imprime(perfil);
