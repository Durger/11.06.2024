var i=1;
while(i<10){
    console.log(i)
    i++;
}
var a=3;
var b=5;
b+=a;// b=b+a
console.log(b)
b*=a;// b=b*a
console.log(b)
b/=a;// b=b/a
console.log(b)
b-=a;// b=b-a
console.log(b)
b%=a;// b=b%a
console.log(b)

var a=6;
var b=5;
a=a-++b //a-(++b) сначала увеличиваем b, потом минусуем от a b   //
a=a-b++//a-b потом идет ++// a=a-b // b++
while(b<9){
    a=a-b++
    alert("Переменная A=" + b + "Раз")
    alert("Ваша зарплата увеличивается на " + a + "рублей")
}

var a=10;
var b = "Hello"
alert(typeof(a)) //typeof -запрос типа данных
alert(typeof(b))
alert(typeof(true))
alert(typeof(3.6))
alert(typeof('4'))



