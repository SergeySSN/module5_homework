//Дан произвольный массив. Необходимо вывести количество элементов массива,
// затем перебрать его и вывести в консоль каждый элемент массива.


let numArr = [1, 2, 3];
console.log(numArr.length + " -Количество элементов массива");
for (let item of numArr) {
    console.log(item);
}