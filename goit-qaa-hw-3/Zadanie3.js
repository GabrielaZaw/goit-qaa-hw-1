// Zadanie 1
const fruits = ["Jabłko", "Banan", "Pomarańcza", "Winogrona", "Arbuz"];

//Zadanie 2
const numbers = [2, 7, 8, 5, 0, 11];
const threshold = 5;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] <= threshold) {
        continue;
    }
    console.log(`Liczby większe niż ${threshold} to ${numbers[i]}`);
}
