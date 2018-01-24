var a = 10, b = "5a";
var wynik = a  + b;

//alert(wynik);
//alert(a + b);
console.log("tekst");//10
console.log(a);
console.log(typeof(a)); //number
console.log(typeof(b)); //string
console.log(typeof(wynik)); //string

console.trace();

var _zmienna1 = 10;

//var 3liczba =10; //błędny nazwa zmiennej

var zmiennaZmiennoPrzecinkowa =2.5;
console.log(zmiennaZmiennoPrzecinkowa);
console.log(typeof(zmiennaZmiennoPrzecinkowa));

//bool

var prawda = true;
console.log(typeof(prawda)); //boolean

//string

var tekst = "Janusz";
console.log(typeof(tekst)); //string

//undefined

var inna;
console.log(inna); //undefined
console.log(typeof(inna)); //undefined

//object

var tab =["aqua", "brązowy"];
console.log(tab);
console.log(typeof(tab));//object

//###############################################################################################################################################################################
/*
//var liczba = prompt("Podaj liczbę");
var liczba1 = prompt("Podaj liczbę", "liczba 1");
var liczba2 = prompt("Podaj liczbę", "liczba 2");
var suma = liczba1 + liczba2; //konkatenacja
console.log(suma);

//konwersja na typ całkowity
//liczba1 = parseInt(liczba1);
//liczba2 = parseInt(liczba2);

//konwersja na typ zmiennoprzecinkowy

liczba1 = parseFloat(liczba1);
liczba2 = parseFloat(liczba2);

var suma1 = liczba1 + liczba2;
console.log("Po Konwersji typów" + suma1);

console.log(typeof(liczba1)); //number
console.log(typeof(liczba2)); //number
*/
//###############################################################################################################################################################################
//zadanie1

/*Użytkownnik podaje z klawiatury długość boku kwadratu
wyświetl na ekranie w formacie "Długość boku wynosi:...... cm"
"Pole kwadratu wynosi:.......cm2"*/

/*var liczba = prompt("Podaj długość boku kwadratu");
var pole = liczba * liczba;
document.write("Długość boku wynosi:" + liczba + "cm<br>");
document.write("Pole kwadratu wynosi:"+ pole +"cm<sup>2</sup><br>");*/

//###############################################################################################################################################################################

//zadanie Domowe
//napisz program obliczający pole trójkąta

//#############################################################################################################################################################################

var liczba1 = prompt("Podaj pierwszą długość");
var liczba2 = prompt("Podaj drugą długość");
var liczba3 = prompt("Podaj wysokość");

var pole = liczba1 * liczba2 / liczba3;

document.write("Pole trójkąta wynosi:" + pole + "cm<sup>2</sup>");
