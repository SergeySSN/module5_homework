//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов
// в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
//При выполнении задания необходимо учесть, что массив может содержать не только числа,
// но и, например, знаки, null и так далее.

let myArray = [1,2,3,4,0,0,"2",null,NaN];
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;
for (let i=0; i < myArray.length; i++)
{console.log(i + "-ый элемент массива равен " + myArray[i]);
    if ( typeof (myArray[i]) == 'number' && !isNaN(myArray[i]))
    {
        if (myArray[i] === 0) {zeroCount = zeroCount +1;
            console.log("Это нуль, считаем");
        }
        else if (myArray[i] % 2 === 0) {evenCount = evenCount +1;
            console.log("Это четное число, считаем");
        }
        else {oddCount = oddCount +1;
            console.log ("Это нечетное число, считаем");
        }
    }
}
console.log(zeroCount + " - Количество нулей в массиве")
console.log(evenCount + " - Количество четных чисел в массиве")
console.log(oddCount + " - Количество нечетных чисел в массиве")
