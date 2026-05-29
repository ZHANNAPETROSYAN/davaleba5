
const array = [10, 20, 30, 40, 50];
const valueToFind = 30;
let isFound = false;
for (let i = 0; i < array.length; i++) {
    if (array[i] === valueToFind) {
        isFound = true; 
        break;          
    }
}
if (isFound) {
    console.log("რიცხვი ნაპოვნია");
} else {
    console.log("რიცხვი არ მოიძებნა");
}