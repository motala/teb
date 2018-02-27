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



var t = ['Janusz',0,true,"anna"];
console.log(t);
/*document.write(t[0]);*///janusz

for(var i=0; i<t.length; i++ ){
    //document.write(t[i]+ " ");
    document.write(i+ 1 + ' element: ' + t[i] + '<br>');
}
