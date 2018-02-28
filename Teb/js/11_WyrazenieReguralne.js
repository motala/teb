//true or false (prawda lub fałsz)

var tekst = 'sad@';
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

regula= /[a-z]+@/;


var sprawdz = regula.test(tekst);
console.log(sprawdz);
