//PI
var pi = Math.PI;
console.log(pi);

//pierwiastek
/*
var x = prompt("Podaj wartość ");
console.log(Math.sqrt(x));
*/


var a = 13.2;
var b = 28.5;
var c = 111;
var d = 3;

//minimum

var min = Math.min(a,b,c,d);
console.log("Minimum:" + min);

//Maksimum

var max = Math.max(a,b,c,d);
console.log("Maksimum:" + max);


//zaokrąglenie

var e = 12.49;
var zaokraglenie = Math.round(e);
console.log(zaokraglenie);


//wartość bezwzględna ABS
//zaokrąglenie round
//zaokrąglenie w dół floor


var x = -56;
var y = -13.1;
var z = 14.9;

document.write('<br>' + Math.abs(x) + '<br>'); //56
document.write('<br>' + Math.abs(y) + '<br>'); //13.1
document.write('<br>' + Math.abs(z) + '<br>'); //14.9


document.write('<br>' + Math.round(x) + '<br>'); //-56
document.write('<br>' + Math.round(y) + '<br>'); //-13
document.write('<br>' + Math.round(z) + '<br>'); //15


document.write('<br>' + Math.floor(x) + '<br>') //-56
document.write('<br>' + Math.floor(y) + '<br>') //-14
document.write('<br>' + Math.floor(z) + '<br>') //14

//potęgowanie

var p = Math.pow(2,10);
console.log(p); //1024



//losowanie

var losuj = Math.random();
console.log(losuj);



//miejsca po przecinku

var k = 10.123456789;
console.log(typeof(k));//number
k = k.toFixed(4);//10.1235
console.log(k);
console.log(typeof(k));//string


//precyzja

var j = 10.1234567890;
console.log(typeof(j));//number
j = j.toPrecision(4);//10.12
console.log(j);
console.log(typeof(j));//string
