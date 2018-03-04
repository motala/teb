/*//zadanie 1
uzytkownik podaje w polu tekstowym kod kodPocztowy
Pod pole wyswietl komunikat czy dane został pradidłowo wprowadzone: ................
jeślio będą prawidłowe dane to wyświetl komunikat o tresci: "Prawidłowy kod pocztowy: ......................."
jeśli będą błędny  to wyświetl komunikat "błędny kod pocztowy" i umieść kursor w polu tekstowym*/

/*zadanie 2
sprawdz adres poczty elektronicznej*/

var elPrzycisk = document.getElementById("przycisk");
var elWynik = document.getElementById("wynik");
var elKod = document.getElementById("kod").value;
var wzór = /^\d{2}-\d{3}$/;
function poczta (){
if(){
  elWynik.innerHTML= "Prawidłowy kod pocztowy:" + ;
}else{ elWynik.innerHTML= "błędny kod pocztowy";
     }
}

elPrzycisk.addEventListener('click',poczta);
