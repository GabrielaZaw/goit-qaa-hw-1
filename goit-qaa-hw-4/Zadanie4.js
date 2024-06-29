/*Zadanie 1 Napisz funkcję JavaScript, która przyjmuje jako dane wejściowe
 tablicę liczb i zwraca nową tablicę, w której każda liczba jest podwojona.*/

/*Zadanie 2 Wykorzystaj metodę map() do zaimplementowania funkcji. 
Wewnątrz metody map() użyj funkcji strzałkowej, aby podwoić każdą liczbę.*/

/*Zadanie 3 Przetestuj swoją funkcję, tworząc tablicę liczb i przekazując ją jako 
argument do swojej funkcji. Wyświetl oryginalną tablicę i tablicę podwojoną w konsoli.*/

const numbers = [1, 3, 5, 7, 9, 11];

const doubledNumbers = numbers.map((number) => {
    return number * 2;
});

console.log(numbers);
console.log(doubledNumbers);

//Zadanie 3
/*Zadanie 4 Napisz funkcję JavaScript, która przyjmuje jako dane wejściowe tablicę 
obiektów reprezentujących studentów i zwraca nową tablicę zawierającą tylko imiona 
studentów. */

/*Zadanie 5 Wykorzystaj metodę map() do zaimplementowania funkcji. Wewnątrz metody map()
 użyj funkcji strzałkowej, aby uzyskać dostęp do właściwości name każdego obiektu studenta. */

/*Zadanie 6 Przetestuj swoją funkcję, tworząc tablicę obiektów studentów i przekazując ją 
jako argument do swojej funkcji. Wyświetl oryginalną tablicę obiektów studentów oraz tablicę 
zawierającą tylko imiona w konsoli. */

const students = [
    { name: "Aga", surname: "Nowak" },
    { name: "Krzyś", surname: "Nowak" },
    { name: "Paweł", surname: "Kowal" },
    { name: "Iga", surname: "Kowal" },
    { name: "Ada", surname: "Zielńska" },
];

const names = students.map((student) => student.name);
console.log(names);
