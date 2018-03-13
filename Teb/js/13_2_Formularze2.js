var elImie = document.getElementById('imie');
var elBlad = document.getElementById('blad');
var elKolor = document.getElementById('kolor');
var elNazwisko = document.getElementById('nazwisko');
var elBlokImie = document.getElementById('blokImie');
var elBlokNazwisko = document.getElementById('blokNazwisko');
function sprawdz(){
    if(this.value.length < 2){
        let kolor=elKolor.value;
        elBlad.style.color = kolor;
        elBlad.innerHTML = 'Błędne dane';
         }else{
        elBlad.innerHTML='';
    }

}

/*function witaj(){
    alert('Witaj na naszej stronie');
}*/
/*function wyjscie(){
    alert('Nie opuszczaj nas!!!!!');
}*/


function zmienImie(){

}

elImie.addEventListener('blur',sprawdz);
elNazwisko.addEventListener('blur',sprawdz);
/*window.addEventListener('load',witaj);
window.addEventListener('unload',wyjscie);*/
