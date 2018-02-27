//tworzenie tablicy za pomocą literału tablicy
var kolory = ['biały','zielony','czerwony'];
//pierwszy kolor
console.log(kolory[0]);

//ilość elementó w tablicy
console.log(kolory.length);


//ostatni kolor w tablicy
console.log('Ostatni:' + kolory[kolory.length - 1 ]);

//tworzenie tablicy za pomocą konstruktora tablicy Array

var samochody = new Array('BMW','AUDI','FIAT');

console.log(samochody);


//****************************************************************** TABLICE WIELOWYMIAROWE *************************************************************************************

var tab= new Array(
    new Array('Jan','Kowal','Poznan'),
    new Array('Anna','Nowak','Gniezno'),
    new Array('Pawel','Kowal','Gniezno')
);
console.log(tab);
console.log(tab[2][0])//Paweł

//******************************************************************++++++++ SORTOWANIE *****************************************************************************************

var imiona = ['Janusz','adrian','Andrzej','Zenon'];
console.log(imiona);

//sortowanie rosnące
var sortImie= imiona.sort();
console.log(sortImie);

//sortowanie malejące
var rsortImie = sortImie.reverse();
console.log(rsortImie);

//usunięcie ostatniego elementu z tablicy
rsortImie.pop();
console.log(rsortImie);

//dodanie elementu
rsortImie.push('Wiktoria');
console.log(rsortImie);

//sprawdzenie czy istnieje element w tablicy
console.log(rsortImie.indexOf('Zenon'));//1
console.log(rsortImie.indexOf('zenon'));//-1
console.log(rsortImie.indexOf('Wiktoria'));//3
console.log(rsortImie.indexOf('xyz'));//-1

//********************************************************** SORTOWANIE TABLICY Z LICZBAMI **************************************************************************************

var liczby = [2,1,20,190,1000000,9];
console.log(liczby);
var sortLiczby = liczby.sort();
console.log(sortLiczby);
var sortPrawidloweLiczb = liczby.sort(function(a,b){
    return(a-b);
});
console.log(sortPrawidloweLiczb);




var elPrzycisk = document.getElementById('przycisk');
var elKolor = document.getElementById('kolor');
function dodajKolor(){
    if(elKolor.value != '' && kolory.indexOf(elKolor.value )== -1){
        kolory.push(elKolor.value);
    console.log(kolory);
        console.log('Ilość kolorów:'+ kolory.length)
    }else if(kolory.indexOf(elKolor.value)!= -1){
             alert('Kolor już istnieje w tablicy')

    }else {
        alert('Wpisz kolor');
    }

}

elPrzycisk.addEventListener('click',dodajKolor);
