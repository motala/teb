var elImie = document.getElementById('imie');
var elNazwisko = document.getElementById('nazwisko');
var elBlad = document.getElementById('blad');
var elKolor = document.getElementById('kolor');
var BlokImie = document.getElementById('blokImie');
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
   if(elImie.length !=''){
    BlokImie.style.color= elKolor.value;
    BlokImie.innerHTML = elImie.value;

   }

}


function zmienKolor(){
   elBlokNazwisko.style.color =elKolor.value;
    }



elImie.addEventListener('blur',sprawdz);
elNazwisko.addEventListener('blur',sprawdz);
BlokImie.addEventListener('mouseover',zmienImie);
elKolor.addEventListener('change',zmienKolor);
/*window.addEventListener('load',witaj);
window.addEventListener('unload',wyjscie);*/
