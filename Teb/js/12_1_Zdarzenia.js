var elLitera = document.getElementById('litera');
var elKod=document.getElementById('Kod');

function litera(){
//console.log(event.keyCode);
    let Kod = event.keyCode;
    switch(Kod){
        case 32:
            Kod = 'spacja';
            break;
        case 8:
            Kod = 'backspace';
            break;
        case 16:
            Kod = 'shift';
            break;
        case 17:
            Kod = 'ctrl';
            break;
        case 18:
            Kod = 'alt';
            break;
        case 20:
            Kod = 'CAPSLOCK';
            break;
        case 27:
            Kod = 'esc';
            break;
    }
    elKod.innerHTML = "Kod znaku : " + Kod;
}

elLitera.addEventListener('keyup', litera);
