array = [];

do {
    arrayLength = prompt('Enter an array length : ');
} while (isNaN(arrayLength) || arrayLength <= 0);

for (i = 0; i < arrayLength; i++) {
    do {
        number = prompt(`Put ${i + 1} number of an array`);
    } while (!number || isNaN(number));
    array.push(number);
}

console.log('Your array is :');
console.log(array);

comparison = null;

for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
            comparison = array[j + 1];
            array[j + 1] = array[j];
            array[j] = comparison;
        }
    }
}

console.log('Your sorted array is :');
console.log(array);

array.splice(1,3);
console.log('Your array with deleted elements from 2 to 4 (included) is :');
console.log(array);