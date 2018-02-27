//#################################################################Pętla for######################################################################################################

for(var i = 1; i<=10; i++){
    document.write(i+ ' ');
}
document.write("<br>");


//zadanie 1
/*wyswietl od 50 do 5, odzielone przecinkiem i spacją*/

for(var j= 50; j>=5;j--){
    if(j==5)
    document.write(j + " . ");
    else
        document.write(j + " , ");
}

document.write("<br>");


//zadanie 2
/*wypisz liczby od 10 do 100,zwiększ kazdą z nich o 5
w wyświetleniu pomiń wartości 30,55 oraz 75
*/


for(var k = 10; k<=100; k=k+5){
    if(k!=30 && k!=55 && k!=75)
    document.write(k + " ,");
}


document.write("<br>");


//zadanie 3
/*uzytkownik z klawiatury w formularzu podaje jakie liczby mają być wyświetlone to znaczy warunek wartość początkową i końcową. Wartość mają być rosnące i zwiększane o 1*/


var elPoczatkowa = document.getElementById("poczatkowa");
var elKoniec = document.getElementById("koniec");
var elK = document.getElementById("k");
var elP = document.getElementById("p");
var m;
var tekst;
var x;
var y;

function wyswietl(){
    tekst = '';
    x = elPoczatkowa.value;
    x = parseInt(x);
    y = elKoniec.value;
    y = parseInt(y);
    for (m = x; m <= y; m++){
        tekst += m + " ";
    }
  elK.innerHTML = tekst;
}
elP.addEventListener('click',wyswietl);

//##############################################################################################################################################################################
//break

for(var n = 10; n>=5; n--){
    document.write(n + ' ');
    if(n==7)
        break;
}
document.write("<br>");



//continue

for(var o = 14; o < 20; o++){
    if(o == 15 || o==18)
        continue;
    document.write(o + ' ');
}

document.write("<br>");
//###############################################################################################################################################################################

/*wyświetl na ekranie:
*
**
***
****
*****
******
*/

var p,r;
for( p = 1; p<=6; p++){
    for( r = 1; r<=p;r++){
        document.write("*");
    }
    document.write("<br>");
}
//###############################################################################################################################################################################
var elWiersz = document.getElementById("wiersz");
var elZnak = document.getElementById("znak");
var elPrzycisk = document.getElementById("przycisk");
var elKomunikat = document.getElementById("komunikat");
var ilosc,znak,c,d;


function znak1(){
ilosc = elWiersz.value;
    znak=elZnak.value;
    for(c = 1; c<= ilosc; c++){
        for( d = 1;d<=c;d++){
            document.write(znak);
        }
            document.write("<br>");
    }
}
elPrzycisk.addEventListener('click',znak1);



//uzytkownik podaje z klawiatury dwie wartosci petla bedzie wykonywala sie tak dlugo dopuki x  nie bedzie wieksze od y

var a=0 , b=0

while(a >= b){
    a=prompt('Podaj a');
    b=prompt('Podaj b');
}
console.log(a=+a);
console.log(b=+b);
