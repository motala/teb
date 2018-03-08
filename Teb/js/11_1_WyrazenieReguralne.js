/*
    zad.1
    Użytkownik podaje w polu tekstowym kod pocztowy
    Pod polem wyświetl komunikat czy dane zostały prawidłowo wprowadzone
    Jeśli będą prawidłowe dane to wyświetl komunikat o treści: "Prawidłowy kod pocztowy: ............."
    Jeśli będzie błędny to wyświetl komunikat: "Błędny kod pocztowy " i umieść kursor w polu tekstowym
*/

var elKod = document.getElementById('kod');
var elMail = document.getElementById('mail');
var elKomunikat = document.getElementById('komunikat');
var elKomunikat1 = document.getElementById('komunikat1');
var przycisk = document.getElementById('przycisk');
var regKod = /^\d{2}-\d{3}$/;
var regMail = /^[a-z]{1}[\w|\.|\-]{0,30}@(\w{1,20}\.){1,3}[a-z]{1,3}$/i;

function sprawdz(){
    let kod = elKod.value;
    let sprKod = regKod.test(kod);
    let mail = elMail.value;
    let sprMail = regMail.test(mail);
    if(sprKod){
        elKomunikat.innerHTML = 'Prawidłowy kod pocztowy: ' + kod;
    }else{
        elKomunikat.innerHTML = 'Błędny kod pocztowy';
        elKod.value = '';
        elKod.focus();
    }

    if(sprMail){
        elKomunikat1.innerHTML = 'Prawidłowy mail: ' + mail;
    }else{
        elKomunikat1.innerHTML = 'Błędny mail';
        elMail.value = '';
        elMail.focus();
    }

}

przycisk.addEventListener('click',sprawdz);
/*
    zad.2
    Sprawdź adres poczty elektronicznej
*/
