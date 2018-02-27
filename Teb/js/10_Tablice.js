//tworzenie tablicy za pomocą literału tablicy
var kolory = ['biały','zielony','czerwony'];

var elPrzycisk = document.getElementById('przycisk');
var elKolor = document.getElementById('kolor');
function dodajKolor(){
    if(elKolor.value != ''){
        kolory.push(elKolor.value);
    console.log(kolory)
    }else{
        alert('Wpisz kolor');
    }

}

elPrzycisk.addEventListener('click',dodajKolor);
