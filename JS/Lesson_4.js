// //Создаем пустой объект
// var obj = new Object();
// //Второй вариант создания объекта
// var obj2 = {};
// //Создаем пустой объект
// var student = new Object();
// // Добавляем свойство в объект используя синтаксис массива Значение-ключ
// student["Name"]="Ivan";
// //Вместо двойных кавычек можно использовать ординарные
// student['Age']=20;
// //Вызов свойства
// alert(student['Name']);
// alert(student['Age']);
// //Другой вариант обращения у свойству
// alert(student.Name);
// alert(student.Age);

// //Создаем пустой объект
// var firm={};
// //Задаем свойство объекта
// firm.Name="Start Inc";
// firm.Adress="Somewhere street 5";
// alert(firm.Name);
// alert(firm.Adress);

// //Пустой объект - собака
// //var dog={};
// //Правильное использование синтаксиса
// dog["Name of dog"] = "Caeser";
// alert(dog["Name of dog"]);

//Иной вариант написания
// var cat={
//     name:"Vasily",
//     age:26
// }

//Создание и удаление свойств объекта
// var cat={};
// cat.Name="Vasily";
// cat["Age"]=2;
// alert(cat.Age);
// alert(cat["Name"]);
// delete cat.Name;
// delete cat.Age;
// alert(cat.Age);
// alert(cat.Name);

// var obj={};
// obj.Name="Oleg";
// //Проверяем есть ли свойство
// if("Age" in obj){
//     alert ("Exist")
// }
// else{
//     alert("Not exist")
// }

//Создаем обект студент и вывод вложенных свойств
// var student={
//     name:"Daria",
//     lastName:"Kislica",
//     age:20,
//     adress:{
//         country:"UK",
//         city:"London",
//         street:"Lenina"
//     }
// }
// alert(student.name);
// alert(student.lastName);
// alert(student.age);
// alert(student.adress.country);
// alert(student.adress.city);
// alert(student.adress.street);


// var rect={
//     x:0,y:0,endX:10,endY:10
// }
// for(var tempProperty in rect){
//     alert(tempProperty+" - " + rect[tempProperty])
// }


//Создание пустого массива
// var arrayName1 = New Array();
// //Создание массива заданной длинны
// var arrayName2 = newArray(5);
// //Создаем массив и сразу иницилизируем его значение
// var arrayName3 = newArray(1,"Vasya",675,6,45,4);

//МАССИВЫ
// var arr = new Array();
// arr[0]=34;
// arr[1]=56;
// arr[2]=18;
// //Создаем пустой массив с размером 3
// var arr1 = new Array(3);
// //Заполняем его значениями
// arr[3]=34;
// arr[4]=56;
// arr[5]=18;
// //Длинна массива увеличилась на 3 элемента
// arr1[3]=5454;
// arr1[4]=45454;
// arr1[5]=54545;
// alert(arr1.length);
// arr1[500]=254545;
// alert(arr1.length);
// alert(arr1[10]);


//Созданием амссива и заполенение элементами
// var arr3 = new Array("Music","cow","dancing");
// //Добавление элемента в массив
// arr3[3]="lemon";
// //Замена 3-го элемента массива
// arr3[3]="apple";
// //Вызов всех элементов массива
// alert(arr3);
// //Вызов второго элемента массива
// alert(arr3[2]);


//Второй способ создания массива
// var arrayName=[];
// var arrayName2=[1,"Vasya",675,6,45,4,"Hello"];
// var arr=[];
// arr[0]=545;
// arr[1]=5465846;
// arr[2]=45848748;
// alert(arr);

//Создание массива и подсчет количество значений
// var cars=["Bmw","Audi","Vw"];
// alert(cars);
// alert(cars.length);


// var arr3=[54,58,87,64,65954];
// var sumArr = 0;
// for(var i=0; i<arr3.length; i++){
//     sumArr+=arr3[i]
// }
// alert(sumArr);


// var ArrayName2=[1,"Vasya",675,6.45,4,"Hello"];
// for (var i=0; i<ArrayName2.length; i++){
//     alert(ArrayName2[i]);
// }


//Двух мерный массив
// var arr={
//     [1,2,3],[4,5,6]
// }
// alert(arr[1][2]);


//Функция записывает новое значение по указанному индексу
// function SetValue(arr,indeх,newValue){
//     arr[indeх]=newValue;
// }
// var arr=[88,11,55];
// alert(arr);
// SetValue(arr,0,99);
// alert(arr);


//Поиск в массиве по индексу
// var arr = [23,54,4,77,42];
// var indeх = arr.indexOf(42);
// alert(indeх);


var arr = [23,54,4,77,42];
var counter = 0;
var indeх = arr.indexOf(4);
while(indeх!=-1){
    counter++;
    indeх=arr.indeхOf(4,indeх+1);
}
alert("Количество встречающихся значений: " + counter)






















