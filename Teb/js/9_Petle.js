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
var elKoncowa = document.getElementById("koncowa");
var elK = document.getElementById("k");
var elP = document.getElementById("p");
function
