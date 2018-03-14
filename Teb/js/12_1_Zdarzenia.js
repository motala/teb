var elLitera = document.getElementById('litera');
var elKod=document.getElementById('Kod');
var elX=document.getElementById('x');
var elY=document.getElementById('y');

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
        case 255:
            Kod = 'Fn';
            break;
    }
    elKod.innerHTML = "Kod znaku : " + Kod;
}

function pozycja(){
   //console.log(event.screenX);
    elX.value = event.screenX;
    elY.value = event.screenY;
}

elLitera.addEventListener('keyup', litera);
window.addEventListener('mousemove',pozycja);
