//Сравнение числа на четность

// let num=prompt("Введите число: ")
// if((num%2)===0){
//     alert("Чиcло четное")
// }else{
//     alert("Число не четное")
// }

// Другой вариант - Сравнение числа на четность
// let num = prompt("Whright number: ")
// let parity = num%2==0? "Even":"Odd";
// alert(parity)

//ctrl+? - комментарий

//Использование Switch - Case
// let num = prompt("Whright number: ")
// let parity = num%2==0? "Even":"Odd";
// switch(parity){
//     case "Even":
//             alert("You whright even number");
//         case "Odd":
//             alert("You whright odd number");
//         default:
//             alert("This is ZERO")
// }


//Еще вариант Использования Switch - Case
// function add(a,b){
//     return a+b;
// }
// function substract(a,b){
//     return a-b;
// }
// function multi(a,b){
//     return a*b;
// }
// function divide(a,b){
//     return a/b;
// }

// console.log("Chose action: ");
// console.log("1. Сложение: ");
// console.log("2. Вычитание: ");
// console.log("3. Умножение: ");
// console.log("4. Деление: ");
// var chose = parseInt(prompt("Chose number action: "))
// var num1 = parseInt(prompt("Whright 1 number: "))
// var num2 = parseInt(prompt("Whright 2 number: "))
// switch(chose){
//     case 1:
//         console.log("Результат сложения: ", add (num1, num2));
//         break;
//     case 2:
//         console.log("Результат вычитания: ", substract (num1, num2));
//         break;
//     case 3:
//         console.log("Результат умножения: ", multi (num1, num2));
//         break;
//     case 4:
//         console.log("Результат деления: ", divide (num1, num2));
//         break;
//     default:
//         console.log("Не правильный ввод!");
//         break;
// }


//Цикл for
// for(i=0;i<5;i++){
//     console.log(i)
// }

//Цикл for in
// var arr = [13,32,3,64,35,46,7,68,59];
// for (i in arr){
//     console.log("Число - ", arr [i],"Находится в массиве arr под индексом -", i);
// }