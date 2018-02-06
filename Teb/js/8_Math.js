var pi = Math.PI;
console.log (pi);

//zadanie 1
/*Uzytkownik podaje z klawiatury promień koła.
Oblicz pole i wyswietl w formacie : "Pole koła wynosi : ......... cm2".*/

var elPromień = document.getElementById("promien");
var elPrzycisk = document.getElementById("przycisk");
var elKomunikat = document.getElementById("komunikat");
var pole;
function poleKola(){
    if(elPromień.value >0){


    pole = pi*Math.pow(elPromień.value,2);
    pole = pole.toFixed(2);
    elKomunikat.innerHTML = "Pole koła wynosi:" + pole + "cm <sup>2</sup>";
        }else{
            elKomunikat.innerHTML = "Promień koła musi być liczbą naturalną";
        }
}
elPrzycisk.addEventListener('click',poleKola);
