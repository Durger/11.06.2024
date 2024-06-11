// var arrName = [];
// //var myArr = new Array(5);
// arr[0]=11;
// arr[1]=151;
// arr[2]=151;
// allert(arr)

// //создали массив с 3 ячейками и поместили значение
// var cars = ["Audi","BMW","TOYOTA"];
// //увеличили массив и дополнили в 30ю ячейку информацию
// cars[30] = "+30";
// alert(cars.length);
// alert(cars[30]);

// var str="test string";
// alert(str)
// var str2="test string2";
// alert(str2)

var str = "three and fruits";
// на экране trees and fruits
// alert(str)
// str[0] = "W";
// //на экране все равно t
// alert(str[0]);

var str2 = "three and fruits2";
//сложение строк
// alert(str+str2)
// alert(str.length);

// //запрос значений
// alert(str.charAt(2))
// alert(str[2]);
// //нижний и верхний регистр
// alert(str.toLowerCase());
// alert(str.toUpperCase());

// //поиск номера ячейки по первой букве строки
// alert(str.indexOf("and"))

// var counter = 0;
// var wordToFind = "fruits";
// var inndex = str.indexOf(wordToFind)
// while(inndex!=-1){
//     counter++;
//     inndex=str.lastIndexOf(wordToFind,inndex+1)
// }
// alert(counter);


// function HelloWord(){
//     alert("Hello word!")
// }
// //Задержка вызова на 1000 милисекунд
// setTimeout(HelloWord, 1000);

// function Sum(a,b){
//     alert(a+b);
// }
// //сумма переменных,задержка, 1=a, 2=b
// setTimeout(Sum, 1000, 1, 2);

// setTimeout(function(){
//     alert("Hello word!");}
//     ,2000);


//счетчик интервалов и выход из цикла после значения <3
// var id = setInterval(IntervalFunc,2000)
// var counter = 0
// function IntervalFunc(){
//     if(counter==3){
//         clearInterval(id)
//         return
//     }
//     counter++;
//     alert("Boom")
// }

// //setTimeout - устанавливает задержку 
// var id = setInterval(IntervalFunc,2000)
// var counter = 1
// function IntervalFunc(){
//     alert("Boom")
//     switch(counter){
//        case 1:
//         setTimeout(IntervalFunc, 1000)
//         break
//         case 2:
//         setTimeout(IntervalFunc, 2000)
//         break
//         case 3:
//         clearTimeout(id) 
//         return  
// }
// counter++;
// }

// var res = Math.ceil(4.3);
// //5
// alert(res);
// res = Math.round(4.3)
// //4
// alert(res);
// //Использование математических возможностей
// res = Math.round(4.5)
// //5
// alert(res);
// res = Math.floor(4.5)
// //4
// alert(res);
// //Пример использования функции по поиску минимума и максимума
// var res = Math.min(1,4,-1,-9,20);
// // -9
// alert(res);
// res = Math.max(21,3,4,5,6,7);
// //21
// alert(res);

var res = Math.random();
alert(res);
var res1=Math.random();
alert(res1);


alert(Math.floor(Math.random()*10)) //от 0 до 9
alert(Math.floor(Math.random()*11)) //от 0 до 11
alert(Math.floor(Math.random()*10)+1) //от 1 до 10






