const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log("Eserecizio N° 1", fourthTeacher);       


// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers.splice(4, 1,'Patrick');
console.log("Esercizio N° 2",teachers);


// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log("Esercizio N° 3",teachers, lastTeacher);


// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log("Esercizio N° 4",teachers, firstTeacher);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa");
console.log("Esercizio N° 5",teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah");
console.log("Esercizio N° 6",teachers);

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers e salvalo nella variabile lewisIndex
const lewisIndex =teachers.indexOf('Lewis');
console.log("Esercizio N° 7", teachers, lewisIndex);


// 8. Verifica se l'array teachers è vuoto e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length === 0;
console.log("Esercizio N° 8" ,teachers, isTeachersEmpty);
