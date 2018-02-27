function losowanie (){
    var auta = ['Audi','BMW','Ferrari','Fiat'];
    var panstwa = ['Polska','Austria','Hiszpania'];
    var miasta = ['Poznań','Gniezno','Wrocław'];

   var losujAuto = Math.floor(Math.random()*auta.length);
   var losujPanstwo = Math.floor(Math.random()*panstwa.length);
   var losujMiasto = Math.floor(Math.random()*miasta.length);

    var wylosowane = auta[losujAuto] + ' ' + panstwa[losujPanstwo]+  ' ' + miasta[losujMiasto];
    console.log(wylosowane);

}
losowanie();



var tablica = ['Janusz',0,true,"anna"];
console.log(tablica);
