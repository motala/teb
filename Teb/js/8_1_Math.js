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
