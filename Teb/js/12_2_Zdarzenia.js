var elSzer =document.getElementById('szerokosc');
var elWys = document.getElementById('wysokosc');
var elBlok = document.getElementById('blok');
var elKolor = document.getElementById('kolor');
var elLewo = document.getElementById('lewo');
var elDodajLewo=document.getElementById('dodajLewo');

elBlok.style.backgroundColor = elKolor.value;
elBlok.style.height = '0px';
elBlok.style.width = '0px';

function rozmiar(){
    let sz = elSzer.value;
    let w = elWys.value;
    elBlok.style.width = sz + 'px';
    elBlok.style.height= w + 'px';
}

function kolor(){
    elBlok.style.backgroundColor = elKolor.value;
}

function dl(){
   elBlok.offsetLeft=elBlok.offsetLeft + 10 + 'px';
}
elLewo.value= elBlok.offsetLeft;

elSzer.addEventListener('change',rozmiar);
elWys.addEventListener('change',rozmiar);
elKolor.addEventListener('change',kolor);
elDodajLewo.addEventListener('click',dl);
