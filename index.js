// Ejercicio 1

const alumno1 = {
    nombre: "juan",
    apellido: "gomez",
    dni: 46345678,
    anio: 4,
    curso: "A",
    nota: 8,
}
const alumno2 = {
    nombre: "juan",
    apellido: "perez",
    dni: 46112233,
    anio: 4,
    curso: "A",
    nota: 9,
}
const alumno3 = {
    nombre: "maria",
    apellido: "messi",
    dni: 46223344,
    anio: 4,
    curso: "B",
    nota: 10,
}
const alumno4 = {
    nombre: "pablo",
    apellido: "grillo",
    dni: 46334455,
    anio: 4,
    curso: "B",
    nota: 5,
}
const alumno5 = {
    nombre: "sofia",
    apellido: "videla",
    dni: 46445566,
    anio: 3,
    curso: "B",
    nota: 4,
}
const alumno6 = {
    nombre: "catalina",
    apellido: "yrigoyen",
    dni: 46556677,
    anio: 3,
    curso: "B",
    nota: 3,
}
const alumno7 = {
    nombre: "paco",
    apellido: "alvear",
    dni: 46667788,
    anio: 5,
    curso: "A",
    nota: 9,
}
const alumno8 = {
    nombre: "hugo",
    apellido: "silva",
    dni: 46889900,
    anio: 5,
    curso: "A",
    nota: 2,
}

const alumnos = [alumno1, alumno2, alumno3, alumno4, alumno5, alumno6, alumno7, alumno8];

// Ejercicio 2

const capitalizar = (string) => {
    let firstletter = string[0].toUpperCase();
    let otherletters = string.slice(1);
    let finalword = firstletter + otherletters;
    return finalword;
}


// Ejercicio 3

const mostrarAlumno = (alumno) => {
    dnitostring = alumno.dni.toString();
    dni = dnitostring.slice(0, 2) + "." + dnitostring.slice(2, 5) + "." + dnitostring.slice(5);
    nombreyapellido = alumno.nombre + " " + alumno.apellido;
    curso = alumno.anio + "°" + alumno.curso;
    nota = alumno.nota;
    console.log("DNI: " + dni);
    console.log("Nombre y apellido: " + nombreyapellido);
    console.log("Curso: " + curso);
    console.log("Nota: " + nota);
}


// Ejercicio 4

alumnos.map((e) => {
    e.nombre = capitalizar(e.nombre);
    e.apellido = capitalizar(e.apellido);
});


// Ejercicio 5

alumnos.map(mostrarAlumno);


// Ejercicio 6

alumnos.filter((e) => e.nota >= 6).map(mostrarAlumno);


// Ejercicio 7

alumnos.filter((e) => e.anio === 4).map(mostrarAlumno);


// Ejercicio 8

alumnos.filter((e) => e.curso === "B").map(mostrarAlumno);