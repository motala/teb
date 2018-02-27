//uzytkownik podaje z klawiatury dwie wartosci petla bedzie wykonywala sie tak dlugo dopuki x  nie bedzie wieksze od y
//Petla while


/*var x=0,y=0,wynikDodawania;
while(x>=y){
    x=Number(prompt('Podaj x: '));
    y=Number(prompt('Podaj y: '));
}
console.log('x='+x);
console.log('y='+y);
wynikDodawaniaodawania = x + y;
console.log('x + y =' + wynikDodawania);*/


//Petla DO WHILE


/*
var wiek;
do{
    wiek = prompt('Podaj wiek');
    if(wiek >= 18){
        document.write('<a href="http://wp.pl">wp.pl</a>')
    }
}while(wiek < 18);
*/


var licznik=0,pass1='tajne', pass2;

do{
    pass2 = prompt('Podaj hało');
    licznik++;
}while(licznik < 3 && pass1!=pass2)

    if(pass1==pass2){
        alert('Podałeś prawidłowe hasło');
    }else if(licznik == 3){
        alert('Niestety za mało prób na odgadnięcie hasła');
    }

