//true or false (prawda lub fałsz)

var tekst = 'testtest'
var regula = /janusz/;
regula = /janusz/i;
regula = /^janusz/i;
regula = /^janusz$/i;


regula = /[a]/;
regula = /[J]/;
regula = /[A]/i;
regula = /[0]/;//zero
regula = /[O]/;
regula = /[0-9]/;
regula = /[A-Z]/;
regula = /[a-z]/;
regula = /[A-z]/;//uwaga na inne znaki np.^_\[]
regula = /[A-z]|[a-z]/;
regula = /[A-z]|[a-z]|[ąęźżśćńół]/;


// \s- spacja, tabulacja lub znak nowego wiersza
// \S- znak nie bedący spacją,tabulacją lub znakiem nowego wiersza
regula = /\s/;
regula = /\S/;
regula = /[a-z]\s/;
regula = /[a-z]\S/;



//mail
//+ jeden lub więcej znaków
regula= /[a-z]+@/;
//? jeden lub brak znaku
regula = /^mąk[a]?@/;


regula = /[a]{1}/;
regula = /[a]{2}/;
regula = /[a]{2,4}/;
regula = /[a]{2,}/;
regula = /[a-z]{2,6}/;
regula = /^[a-z]{2,}$/;

regula = /\//;
regula = /\s/;//wymaga spacji
regula = /\S/;//brak spacji
regula = /./;//jeden znak
regula = /../;//dwa znaki
regula = /.../;//trzy znaki
regula = /\./;//kropka
regula = /\$/;//dolar
regula = /\.[a-z]{2,3}$/; //np. .pl .com .edu

// \w znak będący literą, cyfrą, znakiem podkreślenia
// \W znak nie będący literą, cyfrą, znakiem podkreślenia

regula = /\w/;
regula = /\W/;


// \d znak bedący cyfrą
// \D znak nie bedący cyfrą

regula = /\d/;
regula = /\D/;

//grupa

regula = /(test)/;
regula = /(test){2}/;


//kod pocztowy
var kod = '12-231'
var kodPocztowy = /^\d{2}-\d{3}$/;



//**********************************************************************************************

var muzyka = " tiesto.mp3 plik@mp3 arkusz.csv szkola.mp3 tekst.mp3"

//var mp3 = /\w\.mp3$/;
var mp3 = /\w+\.mp3/g;
var test = mp3.test(muzyka);
var testMatch = muzyka.match(mp3);
var iloscUtworow = testMatch.length;


document.write('<ol>');
for(var i=0; i<iloscUtworow; i++){
    document.write('<li>'+testMatch[i]+ '</li>');
}
document.write('</ol>');





var sprawdz = regula.test(tekst);
var sprawdzKod = kodPocztowy.test(kod);
console.log(sprawdz);
console.log(sprawdzKod);
console.log(test);
console.log(testMatch);
console.log('Ilość utworów: '+ iloscUtworow);
